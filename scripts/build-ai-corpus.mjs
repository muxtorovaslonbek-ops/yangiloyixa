import fs from "node:fs";
import path from "node:path";
import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";

const ROOT = process.cwd();

function cleanPdfPageText(raw) {
  let text = raw.replace(/\s+/g, " ").trim();

  // Strip repeating university/course slide headers to keep high-signal academic content
  const boilerplatePatterns = [
    /O[‘'ʻ`]ZBEKISTON RESPUBLIKASI (OLIY )?TA[‘'ʻ`]LIM(, FAN VA INNOVATSIYALAR| VA ILM-FAN) VAZIRLIGI/gi,
    /NAVOIY DAVLAT (PEDAGOGIKA INSTITUTI|UNIVERSITETI)/gi,
    /Tabiiy fanlar (va tibbiyot )?fakulteti\s*[•·]?\s*Biologiya kafedrasi/gi,
    /Botanika\s*[•·]\s*Ma[’'ʻ`]ruzalar kursi/gi,
    /Biokimyo\s*[•·]\s*Ma[’'ʻ`]ruzalar kursi/gi,
    /Genetika va genomika asoslari\s*[•·]\s*Ma[’'ʻ`]ruzalar kursi/gi,
    /Biologiya ta[’'ʻ`]lim yo[‘'ʻ`]nalishi\s*[•·]?\s*(I|II|III|IV)\s*semestr/gi,
    /Oliy ta[’'ʻ`]lim muassasalarining biologiya ta[’'ʻ`]lim yo[‘'ʻ`]nalishi\s*[•·]?\s*(I|II|III|IV)?\s*semestr/gi,
  ];

  for (const re of boilerplatePatterns) {
    text = text.replace(re, " ");
  }

  return text.replace(/\s+/g, " ").trim();
}

function collectPdfMetadata() {
  const entries = [];
  const seenUrlKind = new Set();

  const subjectConfigs = [
    { file: "src/data/botanikaTopics.ts", subject: "Botanika" },
    { file: "src/data/biokimyoTopics.ts", subject: "Biokimyo" },
    { file: "src/data/genetikaTopics.ts", subject: "Genetika" },
  ];

  for (const cfg of subjectConfigs) {
    const src = fs.readFileSync(path.join(ROOT, cfg.file), "utf8");
    // Match each topic block starting with id: "..."
    const idMatches = [...src.matchAll(/\{\s*\n\s*id:\s*"([^"]+)",\s*\n\s*order:\s*(\d+),/g)];

    for (let i = 0; i < idMatches.length; i++) {
      const start = idMatches[i].index;
      const end = i + 1 < idMatches.length ? idMatches[i + 1].index : src.length;
      const block = src.slice(start, end);

      const topicId = idMatches[i][1];
      const order = Number(idMatches[i][2]);
      const labelMatch = block.match(/topicLabel:\s*"([^"]+)"/);
      const titleMatch = block.match(/title:\s*(?:\n\s*)?"([^"]+)"/);
      const topicLabel = labelMatch ? labelMatch[1] : `${order}-mavzu`;
      const topicTitle = titleMatch ? titleMatch[1] : topicLabel;

      const docMatches = [
        ...block.matchAll(
          /\{\s*\n?\s*title:\s*(?:\n\s*)?"([^"]+)",\s*\n?\s*url:\s*(?:\n\s*)?"(\/assets\/aistudio\/[^"]+\.pdf)",(?:\s*\n?\s*kind:\s*"([^"]+)")?/g,
        ),
      ];

      if (docMatches.length > 0) {
        for (const dm of docMatches) {
          const url = dm[2];
          const kind = dm[3] || "Taqdimot";
          const key = `${url}`;
          if (!seenUrlKind.has(key)) {
            seenUrlKind.add(key);
            entries.push({
              url,
              subject: cfg.subject,
              topicId,
              order,
              topicLabel,
              topicTitle,
              docTitle: dm[1],
              kind,
            });
          }
        }
      } else {
        const singleUrl = block.match(/pdfUrl:\s*(?:\n\s*)?"(\/assets\/aistudio\/[^"]+\.pdf)"/);
        const singleTitle = block.match(/pdfTitle:\s*(?:\n\s*)?"([^"]+)"/);
        if (singleUrl && !seenUrlKind.has(singleUrl[1])) {
          seenUrlKind.add(singleUrl[1]);
          entries.push({
            url: singleUrl[1],
            subject: cfg.subject,
            topicId,
            order,
            topicLabel,
            topicTitle,
            docTitle: singleTitle ? singleTitle[1] : topicTitle,
            kind: "Taqdimot",
          });
        }
      }
    }
  }

  // Also include Kutubxona PDF(s)
  const libSrc = fs.readFileSync(path.join(ROOT, "src/components/KutubxonaSection.tsx"), "utf8");
  const libUrlMatches = [...libSrc.matchAll(/pdfUrl:\s*"(\/assets\/aistudio\/[^"]+\.pdf)"/g)];
  for (const m of libUrlMatches) {
    const url = m[1];
    if (!seenUrlKind.has(url)) {
      seenUrlKind.add(url);
      entries.push({
        url,
        subject: "Biologiya (Kutubxona)",
        topicId: "lib-bio-30-variant",
        order: 0,
        topicLabel: "Milliy sertifikat (30 variant)",
        topicTitle: "Biologiya fanidan Milliy sertifikat — 30 ta rasmiy test varianti",
        docTitle: "Biologiya fanidan Milliy sertifikat — 30 ta rasmiy test varianti",
        kind: "Test to‘plami",
      });
    }
  }

  return entries;
}

async function main() {
  const metadataList = collectPdfMetadata();
  const diskFiles = fs
    .readdirSync(path.join(ROOT, "public/assets/aistudio"))
    .filter((f) => f.endsWith(".pdf"))
    .sort();

  const mappedUrls = new Set(metadataList.map((e) => e.url));
  for (const f of diskFiles) {
    const url = `/assets/aistudio/${f}`;
    if (!mappedUrls.has(url)) {
      metadataList.push({
        url,
        subject: "Qo‘shimcha PDF",
        topicId: f,
        order: 99,
        topicLabel: f,
        topicTitle: f,
        docTitle: f,
        kind: "PDF",
      });
    }
  }

  const documents = [];
  let totalPages = 0;
  let totalChars = 0;

  for (const meta of metadataList) {
    const filePath = path.join(ROOT, "public", meta.url);
    if (!fs.existsSync(filePath)) {
      console.warn("Missing PDF:", filePath);
      continue;
    }

    const data = new Uint8Array(fs.readFileSync(filePath));
    const doc = await pdfjs.getDocument({ data, verbosity: 0 }).promise;
    const pages = [];

    for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
      const page = await doc.getPage(pageNum);
      const textContent = await page.getTextContent();
      const rawText = textContent.items.map((item) => item.str || "").join(" ");
      const cleaned = cleanPdfPageText(rawText);
      if (cleaned.length > 0) {
        pages.push({ p: pageNum, t: cleaned });
        totalChars += cleaned.length;
      }
      totalPages++;
    }

    documents.push({
      url: meta.url,
      subject: meta.subject,
      topicId: meta.topicId,
      order: meta.order,
      topicLabel: meta.topicLabel,
      topicTitle: meta.topicTitle,
      docTitle: meta.docTitle,
      kind: meta.kind,
      pageCount: doc.numPages,
      pages,
    });
  }

  const outPath = path.join(ROOT, "src/data/aiPdfCorpus.json");
  fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), documents }));
  const sizeMb = (fs.statSync(outPath).size / (1024 * 1024)).toFixed(2);
  console.log(
    `Generated ${outPath}: ${documents.length} PDFs, ${totalPages} pages, ${totalChars} chars (${sizeMb} MB).`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
