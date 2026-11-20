import { BOTANIKA_TOPICS, type BotanikaTopic } from "@/data/botanikaTopics";
import { BIOKIMYO_TOPICS, type BiokimyoTopic } from "@/data/biokimyoTopics";
import { GENETIKA_TOPICS, type GenetikaTopic } from "@/data/genetikaTopics";
import { MIKROBIOLOGIYA_TOPICS, type MikrobiologiyaTopic } from "@/data/mikrobiologiyaTopics";
import {
  BIOLOGY_VARIANTS,
  type BiologyVariant,
  type BiologyQuestion,
} from "@/data/biologyVariantsData";
import { ENGLISH_VIDEO_LESSONS, type VideoLesson } from "@/data/englishVideoLessons";
import aiPdfCorpusRaw from "@/data/aiPdfCorpus.json";

export interface PdfCorpusPage {
  p: number;
  t: string;
}

export interface PdfCorpusDocument {
  url: string;
  subject: string;
  topicId: string;
  order: number;
  topicLabel: string;
  topicTitle: string;
  docTitle: string;
  kind: string;
  pageCount: number;
  pages: PdfCorpusPage[];
}

export interface AiPdfCorpus {
  generatedAt: string;
  documents: PdfCorpusDocument[];
}

const aiPdfCorpus = aiPdfCorpusRaw as unknown as AiPdfCorpus;

export type CurriculumSubject = "Botanika" | "Biokimyo" | "Genetika" | "Mikrobiologiya";

export interface UnifiedTopicRecord {
  subject: CurriculumSubject;
  id: string;
  order: number;
  code: string;
  topicLabel: string;
  groupLabel: string;
  title: string;
  syllabusPoints: string[];
  studyNotes: string;
  overview: string;
  sections: Array<{ heading: string; content: string; highlights?: string[] }>;
  comparisonTable: { title: string; columns: string[]; rows: string[][] };
  keyConcepts: Array<{ term: string; definition: string }>;
  selfCheckQuestions: Array<{ question: string; answer: string }>;
  keyTerms: string[];
  references: string;
  pdfDocs: Array<{ title: string; url: string; kind: string }>;
  normTitle: string;
  normBody: string;
}

export interface IndexedPdfPage {
  doc: PdfCorpusDocument;
  page: PdfCorpusPage;
  normText: string;
  normTitle: string;
}

export interface IndexedBioQuestion {
  variantId: number;
  variantTitle: string;
  question: BiologyQuestion;
  normText: string;
}

export interface RetrievalHit {
  topics: Array<{ topic: UnifiedTopicRecord; score: number }>;
  pdfPages: Array<{ item: IndexedPdfPage; score: number }>;
  bioQuestions: Array<{ item: IndexedBioQuestion; score: number }>;
  englishLessons: Array<{ lesson: VideoLesson; score: number }>;
  intent: QueryIntent;
}

export interface QueryIntent {
  subjects: CurriculumSubject[];
  topicNumber: number | null;
  preferPresentation: boolean;
  preferLecture: boolean;
  wantsCatalog: boolean;
  variantNumber: number | null;
  questionNumber: number | null;
  wantsEnglish: boolean;
  wantsBiologyTests: boolean;
  wantsKursIshi: boolean;
  wantsMustaqilIsh: boolean;
  tokens: string[];
  stems: string[];
}

const UZBEK_STOP_WORDS = new Set([
  "va",
  "yoki",
  "bilan",
  "uchun",
  "haqida",
  "qanday",
  "qanaqa",
  "nima",
  "nimada",
  "necha",
  "nechta",
  "qaysi",
  "qayerda",
  "kim",
  "bu",
  "shu",
  "u",
  "men",
  "siz",
  "biz",
  "ular",
  "barcha",
  "hamma",
  "toliq",
  "batafsil",
  "ber",
  "bering",
  "ayt",
  "ayting",
  "tushuntir",
  "tushuntiring",
  "tushuntirib",
  "javob",
  "savol",
  "savollar",
  "fan",
  "fani",
  "fanidan",
  "mavzu",
  "mavzusi",
  "mavzulari",
  "darslik",
  "darsliklar",
  "pdf",
  "pdflar",
  "pdflarni",
  "taqdimot",
  "taqdimotlar",
  "taqdimotlari",
  "slayd",
  "slaydlar",
  "maruza",
  "matn",
  "matni",
  "ham",
  "esa",
  "bo",
  "o",
  "g",
  "va",
  "degani",
  "nimalar",
  "qilib",
  "boyicha",
  "asosida",
  "orqali",
  "kerak",
  "mumkin",
  "edi",
  "bor",
  "yoq",
]);

export function normalizeUzbek(input: string): string {
  return (
    input
      .toLowerCase()
      // Normalize all apostrophe variants in o‘ / g‘ / ’
      .replace(/[oо][‘’'`ʻʼ´]/g, "o")
      .replace(/[gг][‘’'`ʻʼ´]/g, "g")
      .replace(/[‘’'`ʻʼ´"«»„“]/g, "")
      .replace(/[—–−]/g, "-")
      .replace(/[^a-z0-9а-яёα-ω₀-₉\s-]/gi, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
}

function stemUzbekToken(token: string): string {
  if (token.length <= 4) return token;
  const suffixes = [
    "larining",
    "laridan",
    "lariga",
    "larini",
    "larida",
    "larda",
    "lardan",
    "larga",
    "larning",
    "lari",
    "lar",
    "ning",
    "idan",
    "dagi",
    "dan",
    "ga",
    "ka",
    "qa",
    "ni",
    "da",
    "si",
    "chilik",
    "shunoslik",
    "lik",
  ];
  for (const s of suffixes) {
    if (token.endsWith(s) && token.length - s.length >= 4) {
      return token.slice(0, -s.length);
    }
  }
  return token;
}

function extractTokens(input: string): { tokens: string[]; stems: string[] } {
  const norm = normalizeUzbek(input).replace(/-/g, " ");
  const rawParts = norm.split(" ").filter((t) => t.length >= 2 && !UZBEK_STOP_WORDS.has(t));
  const tokens = Array.from(new Set(rawParts));
  const stems = Array.from(new Set(tokens.map(stemUzbekToken).filter((s) => s.length >= 3)));
  return { tokens, stems };
}

function mapUnifiedTopic(
  subject: CurriculumSubject,
  t: BotanikaTopic | BiokimyoTopic | GenetikaTopic | MikrobiologiyaTopic,
): UnifiedTopicRecord {
  const groupLabel = "semester" in t ? t.semester : t.module;
  const pdfDocs =
    t.pdfDocuments && t.pdfDocuments.length > 0
      ? t.pdfDocuments.map((d) => ({
          title: d.title,
          url: d.url,
          kind: d.kind || "Taqdimot",
        }))
      : t.pdfUrl
        ? [
            {
              title: t.pdfTitle || `${t.topicLabel} — PDF`,
              url: t.pdfUrl,
              kind: "Taqdimot",
            },
          ]
        : [];

  const bodyParts = [
    t.topicLabel,
    groupLabel,
    t.title,
    t.overview,
    t.studyNotes,
    ...t.syllabusPoints,
    ...t.sections.flatMap((s) => [s.heading, s.content, ...(s.highlights || [])]),
    t.comparisonTable.title,
    ...t.comparisonTable.columns,
    ...t.comparisonTable.rows.flat(),
    ...t.keyConcepts.flatMap((k) => [k.term, k.definition]),
    ...t.selfCheckQuestions.flatMap((q) => [q.question, q.answer]),
    ...t.keyTerms,
  ];

  return {
    subject,
    id: t.id,
    order: t.order,
    code: t.code,
    topicLabel: t.topicLabel,
    groupLabel,
    title: t.title,
    syllabusPoints: t.syllabusPoints,
    studyNotes: t.studyNotes,
    overview: t.overview,
    sections: t.sections,
    comparisonTable: t.comparisonTable,
    keyConcepts: t.keyConcepts,
    selfCheckQuestions: t.selfCheckQuestions,
    keyTerms: t.keyTerms,
    references: t.references,
    pdfDocs,
    normTitle: normalizeUzbek(
      `${subject} ${t.topicLabel} ${t.code} ${t.title} ${t.comparisonTable.title}`,
    ),
    normBody: normalizeUzbek(bodyParts.join(" ")),
  };
}

interface KnowledgeIndex {
  topics: UnifiedTopicRecord[];
  pdfPages: IndexedPdfPage[];
  bioQuestions: IndexedBioQuestion[];
  englishLessons: Array<{ lesson: VideoLesson; normText: string }>;
  corpusDocCount: number;
  corpusPageCount: number;
}

let cachedIndex: KnowledgeIndex | null = null;

export function getKnowledgeIndex(): KnowledgeIndex {
  if (cachedIndex) return cachedIndex;

  const topics: UnifiedTopicRecord[] = [
    ...BOTANIKA_TOPICS.map((t) => mapUnifiedTopic("Botanika", t)),
    ...BIOKIMYO_TOPICS.map((t) => mapUnifiedTopic("Biokimyo", t)),
    ...GENETIKA_TOPICS.map((t) => mapUnifiedTopic("Genetika", t)),
    ...MIKROBIOLOGIYA_TOPICS.map((t) => mapUnifiedTopic("Mikrobiologiya", t)),
  ];

  const pdfPages: IndexedPdfPage[] = [];
  for (const doc of aiPdfCorpus.documents) {
    const normTitle = normalizeUzbek(
      `${doc.subject} ${doc.topicLabel} ${doc.topicTitle} ${doc.kind}`,
    );
    for (const page of doc.pages) {
      pdfPages.push({
        doc,
        page,
        normTitle,
        normText: normalizeUzbek(page.t),
      });
    }
  }

  const bioQuestions: IndexedBioQuestion[] = [];
  for (const variant of BIOLOGY_VARIANTS as BiologyVariant[]) {
    for (const q of variant.questions) {
      bioQuestions.push({
        variantId: variant.id,
        variantTitle: variant.title,
        question: q,
        normText: normalizeUzbek(
          `${variant.title} ${q.number}-savol ${q.question} ${q.options.join(" ")}`,
        ),
      });
    }
  }

  const englishLessons = (ENGLISH_VIDEO_LESSONS as VideoLesson[]).map((lesson) => ({
    lesson,
    normText: normalizeUzbek(`${lesson.code} ${lesson.title} ${lesson.category}`),
  }));

  cachedIndex = {
    topics,
    pdfPages,
    bioQuestions,
    englishLessons,
    corpusDocCount: aiPdfCorpus.documents.length,
    corpusPageCount: pdfPages.length,
  };
  return cachedIndex;
}

export function detectQueryIntent(
  prompt: string,
  category?: string,
  history?: Array<{ role: string; content: string }>,
): QueryIntent {
  const norm = normalizeUzbek(prompt);
  const recentHistory = normalizeUzbek(
    (history || [])
      .slice(-2)
      .map((h) => h.content)
      .join(" "),
  );
  const combinedNorm = `${norm} ${recentHistory}`.trim();

  const subjects: CurriculumSubject[] = [];
  if (/\bbotanik/i.test(norm) || (subjects.length === 0 && /\bbotanik/i.test(recentHistory))) {
    subjects.push("Botanika");
  }
  if (/\bbiokimy/i.test(norm) || (subjects.length === 0 && /\bbiokimy/i.test(recentHistory))) {
    subjects.push("Biokimyo");
  }
  if (
    /\bgenetik|\bgenomik/i.test(norm) ||
    (subjects.length === 0 && /\bgenetik/i.test(recentHistory))
  ) {
    subjects.push("Genetika");
  }
  if (
    /\bmikrobiolog|\bvirusolog|\bbakteriolog/i.test(norm) ||
    (subjects.length === 0 && /\bmikrobiolog|\bvirusolog/i.test(recentHistory))
  ) {
    subjects.push("Mikrobiologiya");
  }

  // Extract topic number like "14-mavzu", "mavzu 14", "m09", "9-maruza", "12 mavzu"
  let topicNumber: number | null = null;
  const topicNumMatch =
    norm.match(/\b(\d{1,2})\s*-?\s*(?:mavzu|maruza|dars)\b/) ||
    norm.match(/\b(?:mavzu|maruza|dars)\s*-?\s*(\d{1,2})\b/) ||
    norm.match(/\bm0?(\d{1,2})\b/);
  if (topicNumMatch && topicNumMatch[1]) {
    const parsed = Number(topicNumMatch[1]);
    if (parsed >= 1 && parsed <= 30) topicNumber = parsed;
  }

  // Variant / question number
  let variantNumber: number | null = null;
  const varMatch =
    norm.match(/\b(\d{1,2})\s*-?\s*variant\b/) || norm.match(/\bvariant\s*-?\s*(\d{1,2})\b/);
  if (varMatch && varMatch[1]) {
    const parsed = Number(varMatch[1]);
    if (parsed >= 1 && parsed <= 30) variantNumber = parsed;
  }

  let questionNumber: number | null = null;
  const qMatch =
    norm.match(/\b(\d{1,2})\s*-?\s*savol\b/) || norm.match(/\bsavol\s*-?\s*(\d{1,2})\b/);
  if (qMatch && qMatch[1]) {
    const parsed = Number(qMatch[1]);
    if (parsed >= 1 && parsed <= 30) questionNumber = parsed;
  }

  const preferPresentation = /taqdimot|slayd|prezentatsiya/i.test(norm);
  const preferLecture = /maruza|konspekt/i.test(norm);
  const wantsCatalog =
    /(barcha|hamma|nechta|royxat|mundarija|mavzulari|mavzularini|qaysi mavzu)/i.test(norm) &&
    !/(tushuntir|nima|qanday ishlaydi|formula|tuzilishi)/i.test(norm);

  const wantsEnglish =
    category === "ingliz_tili" ||
    /\b(ingliz|english|cefr|ielts|grammar|tense|conditional|passive|present|past|future)\b/i.test(
      norm,
    );
  const wantsBiologyTests =
    category === "biologiya" ||
    variantNumber !== null ||
    /\b(milliy sertifikat|dtm|test varianti|variant)\b/i.test(norm);
  const wantsKursIshi =
    category === "kurs_ishi" ||
    /\b(kurs\s+ish|kursish|titul|gost|kirish\s+konstruktor)/i.test(norm);
  const wantsMustaqilIsh =
    category === "mustaqil_ish" || /\b(mustaqil\s+ish|referat|esse|keys-?stadi)/i.test(norm);

  // If topicNumber >= 17 and no subject explicitly specified, it can only be Botanika (Botanika 1..30, Mikrobiologiya 1..16, Biokimyo/Genetika 1..15)
  if (subjects.length === 0 && topicNumber !== null && topicNumber > 16 && topicNumber <= 30) {
    subjects.push("Botanika");
  }

  // Keep combined context awareness available if needed
  void combinedNorm;

  const { tokens, stems } = extractTokens(prompt);

  return {
    subjects,
    topicNumber,
    preferPresentation,
    preferLecture,
    wantsCatalog,
    variantNumber,
    questionNumber,
    wantsEnglish,
    wantsBiologyTests,
    wantsKursIshi,
    wantsMustaqilIsh,
    tokens,
    stems,
  };
}

function scoreTextMatch(
  normText: string,
  normTitle: string,
  intent: QueryIntent,
  subjectBoost: boolean,
  topicNumMatch: boolean,
): number {
  let score = 0;

  if (subjectBoost) score += 28;
  if (topicNumMatch) score += 45;

  const normQuery = normalizeUzbek(intent.tokens.join(" "));
  if (normQuery.length >= 6 && normText.includes(normQuery)) {
    score += 40;
  }
  if (normQuery.length >= 6 && normTitle.includes(normQuery)) {
    score += 55;
  }

  let matchedTokens = 0;
  for (const token of intent.tokens) {
    const inTitle = normTitle.includes(token);
    const inText = normText.includes(token);
    if (inTitle || inText) {
      matchedTokens++;
      if (inTitle) score += 16;
      if (inText) {
        // Count bounded occurrences up to 5 to reward dense relevance
        const firstIdx = normText.indexOf(token);
        let count = 0;
        let idx = firstIdx;
        while (idx !== -1 && count < 5) {
          count++;
          idx = normText.indexOf(token, idx + token.length);
        }
        score += 6 + count * 2;
      }
    }
  }

  for (const stem of intent.stems) {
    if (normTitle.includes(stem)) score += 7;
    if (normText.includes(stem)) score += 4;
  }

  if (intent.tokens.length > 1 && matchedTokens >= Math.min(3, intent.tokens.length)) {
    score += matchedTokens * 8;
  }

  return score;
}

export function retrieveKnowledge(
  prompt: string,
  category?: string,
  history?: Array<{ role: string; content: string }>,
): RetrievalHit {
  const index = getKnowledgeIndex();
  const intent = detectQueryIntent(prompt, category, history);

  // 1. Score structured textbook topics (Botanika 1-30, Biokimyo 1-15, Genetika 1-15)
  const scoredTopics = index.topics
    .map((topic) => {
      const subjectBoost = intent.subjects.length > 0 && intent.subjects.includes(topic.subject);
      const topicNumMatch =
        intent.topicNumber !== null &&
        topic.order === intent.topicNumber &&
        (intent.subjects.length === 0 || subjectBoost);

      const score = scoreTextMatch(
        topic.normBody,
        topic.normTitle,
        intent,
        subjectBoost,
        topicNumMatch,
      );
      return { topic, score };
    })
    .filter((entry) => entry.score > 10)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  // 2. Score all 1,988 PDF pages (lectures + presentations + 30-variant PDF)
  const scoredPdfPages = index.pdfPages
    .map((item) => {
      const subjectMatch =
        intent.subjects.length > 0 &&
        intent.subjects.some((s) => item.doc.subject.toLowerCase().includes(s.toLowerCase()));

      // Match against PDF order OR topicLabel ("19-mavzu" has order 19 in Botanika!)
      const topicNumMatch =
        intent.topicNumber !== null &&
        item.doc.order === intent.topicNumber &&
        (intent.subjects.length === 0 || subjectMatch);

      let score = scoreTextMatch(
        item.normText,
        item.normTitle,
        intent,
        subjectMatch,
        topicNumMatch,
      );

      // Boost presentation slides or lecture pages if requested
      const kindNorm = normalizeUzbek(item.doc.kind);
      if (intent.preferPresentation && kindNorm.includes("taqdimot")) score += 20;
      if (intent.preferLecture && kindNorm.includes("maruza")) score += 20;

      // Also boost pages from the top matched textbook topic(s) so Gemini sees BOTH Ma'ruza matni AND Taqdimot
      if (scoredTopics.some((st) => st.topic.id === item.doc.topicId)) {
        score += 18;
      }

      // Skip boilerplate title pages when body content pages match better unless topic explicitly requested
      if (item.page.t.length < 100 && !topicNumMatch) {
        score -= 12;
      }

      return { item, score };
    })
    .filter((entry) => entry.score > 12)
    .sort((a, b) => b.score - a.score);

  // Diversify top PDF pages so we capture both Taqdimot and Ma'ruza matni and avoid 10 pages from one tiny slide deck crowding out others
  const selectedPdfPages: Array<{ item: IndexedPdfPage; score: number }> = [];
  const docPageCounts = new Map<string, number>();
  for (const candidate of scoredPdfPages) {
    const docKey = candidate.item.doc.url;
    const count = docPageCounts.get(docKey) || 0;
    if (count >= 4) continue;
    docPageCounts.set(docKey, count + 1);
    selectedPdfPages.push(candidate);
    if (selectedPdfPages.length >= 12) break;
  }

  // If user asked for a specific topic (e.g. "Genetika 9-mavzu" or "Botanika 20-mavzu"), make sure at least 2 slides from Taqdimot and 2 pages from Ma'ruza matni are included
  if (intent.topicNumber !== null && scoredTopics.length > 0) {
    const primaryTopic = scoredTopics[0]!.topic;
    const topicDocs = index.pdfPages.filter((p) => p.doc.topicId === primaryTopic.id);
    const seenKinds = new Set(
      selectedPdfPages
        .filter((s) => s.item.doc.topicId === primaryTopic.id)
        .map((s) => s.item.doc.kind),
    );
    const docsByKind = new Map<string, IndexedPdfPage[]>();
    for (const p of topicDocs) {
      const list = docsByKind.get(p.doc.kind) || [];
      list.push(p);
      docsByKind.set(p.doc.kind, list);
    }
    for (const [kind, pages] of docsByKind.entries()) {
      if (!seenKinds.has(kind)) {
        // Add substantive early pages (e.g. agenda + key content slides)
        for (const p of pages.slice(0, 3)) {
          if (
            !selectedPdfPages.some(
              (s) => s.item.doc.url === p.doc.url && s.item.page.p === p.page.p,
            )
          ) {
            selectedPdfPages.push({ item: p, score: 50 });
          }
        }
      }
    }
  }

  // 3. Score Biology Milliy Sertifikat questions (all 900 questions with official answer keys)
  let scoredBioQuestions: Array<{ item: IndexedBioQuestion; score: number }> = [];
  if (intent.variantNumber !== null) {
    const variantMatches = index.bioQuestions.filter((bq) => bq.variantId === intent.variantNumber);
    if (intent.questionNumber !== null) {
      scoredBioQuestions = variantMatches
        .filter((bq) => bq.question.number === intent.questionNumber)
        .map((item) => ({ item, score: 200 }));
    } else if (intent.tokens.length > 0) {
      scoredBioQuestions = variantMatches
        .map((item) => ({
          item,
          score: scoreTextMatch(item.normText, "", intent, false, false) + 50,
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
    } else {
      scoredBioQuestions = variantMatches.slice(0, 5).map((item) => ({ item, score: 100 }));
    }
  } else if (intent.tokens.length > 0) {
    scoredBioQuestions = index.bioQuestions
      .map((item) => ({
        item,
        score: scoreTextMatch(item.normText, "", intent, intent.wantsBiologyTests, false),
      }))
      .filter((entry) => entry.score >= (intent.wantsBiologyTests ? 20 : 38))
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
  }

  // 4. Score English video lessons (180 lessons)
  let scoredEnglish: Array<{ lesson: VideoLesson; score: number }> = [];
  if (intent.wantsEnglish || intent.tokens.length > 0) {
    scoredEnglish = index.englishLessons
      .map((entry) => ({
        lesson: entry.lesson,
        score: scoreTextMatch(entry.normText, entry.normText, intent, intent.wantsEnglish, false),
      }))
      .filter((entry) => entry.score >= (intent.wantsEnglish ? 25 : 42))
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  }

  return {
    topics: scoredTopics,
    pdfPages: selectedPdfPages,
    bioQuestions: scoredBioQuestions,
    englishLessons: scoredEnglish,
    intent,
  };
}

export function buildCurriculumDirectoryText(): string {
  const botList = BOTANIKA_TOPICS.map((t) => `${t.order}. ${t.title}`).join(" | ");
  const bioList = BIOKIMYO_TOPICS.map((t) => `${t.order}. ${t.title}`).join(" | ");
  const genList = GENETIKA_TOPICS.map((t) => `${t.order}. ${t.title}`).join(" | ");
  const mikroList = MIKROBIOLOGIYA_TOPICS.map((t) => `${t.order}. ${t.title}`).join(" | ");
  const engCategories = Array.from(new Set(ENGLISH_VIDEO_LESSONS.map((l) => l.category))).join(
    ", ",
  );

  return [
    `PLATFORMADAGI DARSLIK VA RESURSLAR MUNDARIJASI:`,
    `- BOTANIKA (${BOTANIKA_TOPICS.length} ta mavzu, 42 ta PDF — M01..M18 taqdimot va 19–30-mavzularda Ma’ruza matni + Taqdimot): ${botList}`,
    `- BIOKIMYO (${BIOKIMYO_TOPICS.length} ta mavzu, 30 ta PDF — har bir mavzuda Ma’ruza matni + Taqdimot): ${bioList}`,
    `- GENETIKA (${GENETIKA_TOPICS.length} ta mavzu, 30 ta PDF — har bir mavzuda Ma’ruza matni + Taqdimot): ${genList}`,
    `- MIKROBIOLOGIYA VA VIRUSOLOGIYA (${MIKROBIOLOGIYA_TOPICS.length} ta mavzu, 16 ta PDF — 1–16-mavzular Ma’ruza matni): ${mikroList}`,
    `- BIOLOGIYA MILLIY SERTIFIKAT (Kutubxona + Test tizimi): ${BIOLOGY_VARIANTS.length} ta rasmiy variant (900 ta savol va javoblar kaliti bilan) + rasmiy PDF to‘plam.`,
    `- INGLIZ TILI: ${ENGLISH_VIDEO_LESSONS.length} ta video darslik (0 dan C1 gacha). Asosiy bo‘limlar: ${engCategories}.`,
    `- KURS ISHI VA MUSTAQIL ISH: 2 bob va 6 paragraflik standart reja, Kirish qismi 5 mezoni, GOST talablari (Times New Roman 14, 1.5 interval), Referat/Esse/Taqdimot/Keys-stadi mezonlari.`,
  ].join("\n");
}

function formatTopicForContext(topic: UnifiedTopicRecord): string {
  const sectionsText = topic.sections
    .map((s) => {
      const hi = s.highlights?.length ? `\n  Asosiy nuqtalar: ${s.highlights.join("; ")}` : "";
      return `- ${s.heading}: ${s.content}${hi}`;
    })
    .join("\n");

  const tableRows = topic.comparisonTable.rows.map((r) => `  | ${r.join(" | ")} |`).join("\n");
  const conceptsText = topic.keyConcepts.map((c) => `- ${c.term}: ${c.definition}`).join("\n");
  const qaText = topic.selfCheckQuestions
    .map((q) => `  Savol: ${q.question}\n  Javob: ${q.answer}`)
    .join("\n");

  return [
    `=== DARSLIK MAVZUSI: [${topic.subject} · ${topic.topicLabel} · ${topic.groupLabel}] ${topic.title} ===`,
    `Biriktirilgan PDF hujjatlar: ${topic.pdfDocs.map((d) => `${d.kind}: ${d.title}`).join(" | ")}`,
    `Reja (Syllabus): ${topic.syllabusPoints.join("; ")}`,
    `Qisqacha mazmun: ${topic.overview}`,
    `Muhim qayd: ${topic.studyNotes}`,
    `Asosiy bo‘limlar:\n${sectionsText}`,
    `Qiyosiy jadval (${topic.comparisonTable.title} — ustunlar: ${topic.comparisonTable.columns.join(" | ")}):\n${tableRows}`,
    `Asosiy tushunchalar:\n${conceptsText}`,
    `Nazorat savol-javoblari:\n${qaText}`,
    `Tayanch atamalar: ${topic.keyTerms.join(", ")}`,
  ].join("\n");
}

export function buildGroundedPromptContext(
  prompt: string,
  category?: string,
  history?: Array<{ role: string; content: string }>,
): { contextText: string; hit: RetrievalHit } {
  const hit = retrieveKnowledge(prompt, category, history);
  const chunks: string[] = [];

  // Always include compact curriculum directory when asking catalog questions or general overview
  chunks.push(buildCurriculumDirectoryText());

  if (hit.topics.length > 0) {
    // Include up to 2 full topics + summary of next 1-2 topics within token budget
    hit.topics.slice(0, 2).forEach(({ topic }) => {
      chunks.push(formatTopicForContext(topic));
    });
    hit.topics.slice(2, 4).forEach(({ topic }) => {
      chunks.push(
        `=== QO‘SHIMCHA MAVZU: [${topic.subject} · ${topic.topicLabel}] ${topic.title} ===\nMazmun: ${topic.overview}\nQayd: ${topic.studyNotes}`,
      );
    });
  }

  if (hit.pdfPages.length > 0) {
    const pdfBlock = hit.pdfPages
      .map(({ item }) => {
        const excerpt = item.page.t.slice(0, 1800);
        return `[PDF MANBA: ${item.doc.subject} · ${item.doc.topicLabel} · ${item.doc.kind} · ${item.page.p}-bet/slayd]\n${excerpt}`;
      })
      .join("\n\n");
    chunks.push(`=== PDF VA TAQDIMOTLARDAN OLINGAN ANIQ MATNLAR ===\n${pdfBlock}`);
  }

  if (hit.bioQuestions.length > 0) {
    const bioBlock = hit.bioQuestions
      .map(
        ({ item }) =>
          `[BIOLOGIYA MILLIY SERTIFIKAT · ${item.variantTitle} · ${item.question.number}-savol]\nSavol: ${item.question.question}\nVariantlar: ${item.question.options.join(" | ")}\nRasmiy to‘g‘ri javob: ${item.question.correctAnswer}`,
      )
      .join("\n\n");
    chunks.push(`=== MILLIY SERTIFIKAT TEST BAZASI ===\n${bioBlock}`);
  }

  if (hit.englishLessons.length > 0) {
    const engBlock = hit.englishLessons
      .map(
        ({ lesson }) =>
          `- Dars #${lesson.code} [${lesson.category}]: ${lesson.title} (${lesson.youtubeUrl})`,
      )
      .join("\n");
    chunks.push(`=== INGLIZ TILI VIDEO DARSLIKLARI ===\n${engBlock}`);
  }

  return {
    contextText: chunks.join("\n\n"),
    hit,
  };
}

export function synthesizeGroundedFallback(
  prompt: string,
  category?: string,
  history?: Array<{ role: string; content: string }>,
): string {
  const { hit } = buildGroundedPromptContext(prompt, category, history);
  const { intent } = hit;
  const normPrompt = normalizeUzbek(prompt);

  // Let dedicated Kurs ishi / Mustaqil ish / O'yinlar handlers answer when user explicitly asks about them without a specific science subject
  if (
    intent.subjects.length === 0 &&
    (intent.wantsKursIshi ||
      intent.wantsMustaqilIsh ||
      category === "oyinlar" ||
      /\b(oyin|viktorina|zakovat)\b/i.test(normPrompt))
  ) {
    return "";
  }

  // 1. Biology test question exact lookup
  if (hit.bioQuestions.length > 0 && (intent.wantsBiologyTests || hit.topics.length === 0)) {
    const lines = hit.bioQuestions.map(({ item }) => {
      const q = item.question;
      return `### 📌 ${item.variantTitle} — ${q.number}-savol\n**Savol:** ${q.question}\n\n**Variantlar:**\n${q.options.map((o) => `- ${o}`).join("\n")}\n\n✅ **Rasmiy to‘g‘ri javob:** **${q.correctAnswer}**`;
    });
    return `🧬 **Biologiya (Milliy sertifikat) Test Bazasi Bo‘yicha Aniq Javob**\n\n${lines.join("\n\n---\n\n")}`;
  }

  // 2. English grammar / CEFR / video lessons lookup when English intent is active and no biology subject matched
  if (intent.wantsEnglish && intent.subjects.length === 0) {
    const grammarBlocks: string[] = [];
    if (/present perfect|past simple/i.test(normPrompt)) {
      grammarBlocks.push(
        `### 📘 Present Perfect vs Past Simple\n- **Present Perfect (have/has + V3):** Vaqti aniq ko‘rsatilmagan, natijasi hozirgi zamon bilan bog‘liq harakatlar (*I have finished my coursework* — Natija: hozir tayyor). Kalit so‘zlar: *already, just, yet, ever, never, since, for*.\n- **Past Simple (V2 / did):** O‘tmishda aniq vaqtda tugagan harakatlar (*I finished it yesterday*). Kalit so‘zlar: *yesterday, ago, last week, in 2024*.`,
      );
    } else if (/conditional|shart mayl/i.test(normPrompt)) {
      grammarBlocks.push(
        `### 📘 Conditionals (0, 1, 2, 3 Shart mayllari)\n- **0-Conditional (Umumiy fakt):** If + Present Simple, Present Simple (*If you heat ice, it melts*).\n- **1-Conditional (Real kelajak):** If + Present Simple, will + V1 (*If you study, you will pass*).\n- **2-Conditional (Noreal hozir/kelajak):** If + Past Simple, would + V1 (*If I had time, I would travel*).\n- **3-Conditional (O‘tmishdagi afsus):** If + Past Perfect, would have + V3 (*If she had known, she would have come*).`,
      );
    } else if (/passive|majhul/i.test(normPrompt)) {
      grammarBlocks.push(
        `### 📘 Passive Voice (Majhul nisbat)\n- **Umumiy formula:** \`to be (tegishli zamonda) + V3 (Past Participle)\`\n- **Present Simple Passive:** *The report is written every week.*\n- **Past Simple Passive:** *Penicillin was discovered by Fleming in 1928.*\n- **Future Simple Passive:** *The exam will be held tomorrow.*\n- **Present Perfect Passive:** *All 119 PDFs have been indexed.*`,
      );
    } else if (/c1|ielts|b2|cefr/i.test(normPrompt)) {
      grammarBlocks.push(
        `### 📘 B2 dan C1 (IELTS / CEFR) darajasiga o‘tish strategiyasi\n1. **Akademik leksika va kollokatsiyalar:** Oddiy fe’llar o‘rniga akademik ekvivalentlar (*carry out research, draw a conclusion, play a pivotal role*).\n2. **Murakkab grammatika:** Inversion (*Not only did..., Rarely have...*), Cleft sentences, Mixed Conditionals va Participle clauses.\n3. **Speaking & Writing:** Har bir fikrni *Claim → Explanation → Example → Result* strukturasi bilan asoslash.`,
      );
    }

    if (hit.englishLessons.length > 0 || grammarBlocks.length > 0) {
      const sections: string[] = [`🇬🇧 **Ingliz Tili Bo‘limi Bo‘yicha Tezkor Qo‘llanma**`];
      if (grammarBlocks.length > 0) sections.push(grammarBlocks.join("\n\n"));
      if (hit.englishLessons.length > 0) {
        const lessonsText = hit.englishLessons
          .slice(0, 6)
          .map(({ lesson }) => `- **${lesson.code}-dars (${lesson.category}):** ${lesson.title}`)
          .join("\n");
        sections.push(`### 🎬 Platformadagi mos video darsliklar\n${lessonsText}`);
      }
      sections.push(
        `_Barcha 180 ta video darslikni platformaning **"Ingliz tili"** bo‘limida bepul ko‘rishingiz mumkin._`,
      );
      return sections.join("\n\n");
    }
    return "";
  }

  // 3. Curriculum catalog request
  if (intent.wantsCatalog) {
    const targetSubjects: CurriculumSubject[] =
      intent.subjects.length > 0
        ? intent.subjects
        : ["Botanika", "Genetika", "Mikrobiologiya", "Biokimyo"];
    if (intent.subjects.length > 0) {
      const blocks = targetSubjects.map((subj) => {
        const list =
          subj === "Botanika"
            ? BOTANIKA_TOPICS
            : subj === "Biokimyo"
              ? BIOKIMYO_TOPICS
              : subj === "Genetika"
                ? GENETIKA_TOPICS
                : MIKROBIOLOGIYA_TOPICS;
        const items = list
          .map(
            (t) =>
              `${t.order}. **${t.topicLabel}:** ${t.title} _(${t.pdfDocuments?.map((d) => d.kind).join(" + ") || "PDF Taqdimot"})_`,
          )
          .join("\n");
        return `### 📚 ${subj} fanidagi barcha ${list.length} ta mavzu\n${items}`;
      });
      return blocks.join("\n\n");
    }
  }

  // 4. Matched Textbook Topic + Targeted Concept/Q&A/Table/PDF Synthesis
  if (hit.topics.length > 0) {
    const primary = hit.topics[0]!.topic;
    const parts: string[] = [];
    const wantsTests = /\b(test|savol|savollar|nazorat|mashq|masala)\b/i.test(normPrompt);
    const wantsComparison = /\b(farq|farqi|farqlari|taqqosla|jadval|solishtir)\b/i.test(normPrompt);

    parts.push(`📖 **${primary.subject} · ${primary.topicLabel}: ${primary.title}**`);
    parts.push(
      `_${primary.groupLabel} · Manba: ${primary.references}${primary.pdfDocs.length > 0 ? ` · ${primary.pdfDocs.map((d) => d.kind).join(" + ")}` : ""}_`,
    );

    // Surface directly matched key concepts or self-check Q&A right at the top for fast precision
    const directConcepts = primary.keyConcepts.filter((c) => {
      const cNorm = normalizeUzbek(`${c.term} ${c.definition}`);
      return intent.tokens.some((tok) => tok.length >= 3 && cNorm.includes(tok));
    });
    const directQAs = primary.selfCheckQuestions.filter((qa) => {
      const qNorm = normalizeUzbek(`${qa.question} ${qa.answer}`);
      return intent.tokens.some((tok) => tok.length >= 4 && qNorm.includes(tok));
    });

    if (directConcepts.length > 0 && intent.topicNumber === null) {
      parts.push(
        `\n### ⚡ Savolingizga aniq qisqa javob\n` +
          directConcepts
            .slice(0, 3)
            .map((c) => `- **${c.term}:** ${c.definition}`)
            .join("\n"),
      );
    }

    parts.push(`\n### 1. Umumiy nazariy tahlil\n${primary.overview}`);
    parts.push(`\n> 💡 **Muhim xulosa:** ${primary.studyNotes}`);

    // If user asked for differences/comparison, place comparison table right away
    if (wantsComparison && primary.comparisonTable.rows.length > 0) {
      parts.push(`\n### 📊 ${primary.comparisonTable.title}`);
      const header = `| ${primary.comparisonTable.columns.join(" | ")} |`;
      const sep = `| ${primary.comparisonTable.columns.map(() => "---").join(" | ")} |`;
      const rows = primary.comparisonTable.rows.map((r) => `| ${r.join(" | ")} |`).join("\n");
      parts.push(`${header}\n${sep}\n${rows}`);
    }

    if (primary.sections.length > 0) {
      // Rank sections by relevance to user's query while keeping logical order when topic number asked
      const relevantSections =
        intent.topicNumber !== null
          ? primary.sections
          : [...primary.sections].sort((a, b) => {
              const aNorm = normalizeUzbek(
                `${a.heading} ${a.content} ${(a.highlights || []).join(" ")}`,
              );
              const bNorm = normalizeUzbek(
                `${b.heading} ${b.content} ${(b.highlights || []).join(" ")}`,
              );
              const aHits = intent.tokens.filter((t) => aNorm.includes(t)).length;
              const bHits = intent.tokens.filter((t) => bNorm.includes(t)).length;
              return bHits - aHits;
            });

      parts.push(`\n### 2. Mavzuning asosiy bo‘limlari`);
      relevantSections.forEach((sec) => {
        parts.push(`**${sec.heading}**\n${sec.content}`);
        if (sec.highlights && sec.highlights.length > 0) {
          parts.push(sec.highlights.map((h) => `- ${h}`).join("\n"));
        }
      });
    }

    if (!wantsComparison && primary.comparisonTable.rows.length > 0) {
      parts.push(`\n### 3. ${primary.comparisonTable.title}`);
      const header = `| ${primary.comparisonTable.columns.join(" | ")} |`;
      const sep = `| ${primary.comparisonTable.columns.map(() => "---").join(" | ")} |`;
      const rows = primary.comparisonTable.rows.map((r) => `| ${r.join(" | ")} |`).join("\n");
      parts.push(`${header}\n${sep}\n${rows}`);
    }

    if (primary.keyConcepts.length > 0) {
      parts.push(
        `\n### 4. Asosiy atamalar\n` +
          primary.keyConcepts.map((c) => `- **${c.term}:** ${c.definition}`).join("\n"),
      );
    }

    // Add matching PDF / Presentation excerpts (prioritize presentation if user asked for taqdimot/slayd)
    const sliceLimit = intent.preferPresentation ? 4 : 3;
    const matchingPdfSlices = hit.pdfPages
      .filter((p) => p.item.doc.topicId === primary.id || hit.pdfPages.indexOf(p) < sliceLimit)
      .slice(0, sliceLimit);
    if (matchingPdfSlices.length > 0) {
      parts.push(`\n### 5. Biriktirilgan PDF va Taqdimot ma’lumotlari`);
      matchingPdfSlices.forEach(({ item }) => {
        parts.push(
          `- **[${item.doc.subject} · ${item.doc.topicLabel} · ${item.doc.kind}, ${item.page.p}-bet/slayd]:** ${item.page.t.slice(0, 520)}${item.page.t.length > 520 ? "..." : ""}`,
        );
      });
    }

    if (primary.selfCheckQuestions.length > 0) {
      const qaList = wantsTests
        ? primary.selfCheckQuestions
        : directQAs.length > 0
          ? directQAs.slice(0, 2)
          : primary.selfCheckQuestions.slice(0, 2);
      parts.push(`\n### 6. Nazorat savollari va yechimlari`);
      qaList.forEach((sq, i) => {
        parts.push(`${i + 1}. **Savol:** ${sq.question}\n   **Javob:** ${sq.answer}`);
      });
    }

    return parts.join("\n");
  }

  // 5. Direct PDF page matches even if not tied to top topic
  if (hit.pdfPages.length > 0) {
    const snippets = hit.pdfPages
      .slice(0, 4)
      .map(
        ({ item }) =>
          `### 📄 ${item.doc.subject} · ${item.doc.topicLabel} (${item.doc.kind}, ${item.page.p}-bet/slayd)\n**Mavzu:** ${item.doc.topicTitle}\n\n${item.page.t.slice(0, 750)}${item.page.t.length > 750 ? "..." : ""}`,
      )
      .join("\n\n---\n\n");
    return `📚 **Darslik va Taqdimot PDF Hujjatlaridan Topilgan Ma’lumotlar**\n\n${snippets}`;
  }

  // 6. English video lessons match
  if (hit.englishLessons.length > 0) {
    const lessonsText = hit.englishLessons
      .map(({ lesson }) => `- **${lesson.code}-dars (${lesson.category}):** ${lesson.title}`)
      .join("\n");
    return `🇬🇧 **Ingliz Tili Bo‘limidagi Tegishli Darsliklar**\n\n${lessonsText}\n\nUshbu darslarni platformaning **"Ingliz tili"** bo‘limida video va audio ko‘rinishida ko‘rishingiz mumkin.`;
  }

  return "";
}
