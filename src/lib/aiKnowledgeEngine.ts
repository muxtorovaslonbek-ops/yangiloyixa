import { BOTANIKA_TOPICS, type BotanikaTopic } from "@/data/botanikaTopics";
import { BIOKIMYO_TOPICS, type BiokimyoTopic } from "@/data/biokimyoTopics";
import { GENETIKA_TOPICS, type GenetikaTopic } from "@/data/genetikaTopics";
import { MIKROBIOLOGIYA_TOPICS, type MikrobiologiyaTopic } from "@/data/mikrobiologiyaTopics";
import { GIDROBIOLOGIYA_TOPICS, type GidrobiologiyaTopic } from "@/data/gidrobiologiyaTopics";
import {
  BIOLOGY_VARIANTS,
  type BiologyVariant,
  type BiologyQuestion,
} from "@/data/biologyVariantsData";
import { ENGLISH_VIDEO_LESSONS, type VideoLesson } from "@/data/englishVideoLessons";

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

let activePdfCorpus: AiPdfCorpus = {
  generatedAt: "",
  documents: [],
};
let corpusLoadPromise: Promise<boolean> | null = null;
let corpusLoaded = false;

export function setPdfCorpus(corpus: AiPdfCorpus): void {
  activePdfCorpus = corpus;
  corpusLoaded = corpus.documents.length > 0;
  cachedIndex = null;
}

export function isPdfCorpusLoaded(): boolean {
  return corpusLoaded;
}

export function ensurePdfCorpusLoaded(): Promise<boolean> {
  if (corpusLoaded) return Promise.resolve(true);
  if (corpusLoadPromise) return corpusLoadPromise;

  // Browser static-asset fetch (served directly from Vercel CDN / public/assets/aiPdfCorpus.json)
  if (typeof window !== "undefined" && typeof fetch === "function") {
    corpusLoadPromise = fetch("/assets/aiPdfCorpus.json", { cache: "force-cache" })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<AiPdfCorpus>;
      })
      .then((data) => {
        if (data && Array.isArray(data.documents) && data.documents.length > 0) {
          setPdfCorpus(data);
          // Warm up the search index right away so the next user query runs in <10ms
          getKnowledgeIndex();
          return true;
        }
        return false;
      })
      .catch(() => {
        corpusLoadPromise = null;
        return false;
      });
    return corpusLoadPromise;
  }

  return Promise.resolve(false);
}

export type CurriculumSubject =
  "Botanika" | "Biokimyo" | "Genetika" | "Mikrobiologiya" | "Gidrobiologiya";

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
  paddedTitle: string;
  paddedConcepts: string;
  paddedBody: string;
  wordCounts: Map<string, number>;
  words: string[];
}

export interface IndexedPdfPage {
  doc: PdfCorpusDocument;
  page: PdfCorpusPage;
  normText: string;
  normTitle: string;
  paddedText: string;
  paddedTitle: string;
}

export interface IndexedBioQuestion {
  variantId: number;
  variantTitle: string;
  question: BiologyQuestion;
  normText: string;
  paddedText: string;
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
  explicitSubject: boolean;
  topicNumber: number | null;
  preferPresentation: boolean;
  preferLecture: boolean;
  wantsCatalog: boolean;
  variantNumber: number | null;
  questionNumber: number | null;
  wantsEnglish: boolean;
  wantsBiologyTests: boolean;
  explicitTestRequest: boolean;
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
  "haqidagi",
  "qanday",
  "qanaqa",
  "nima",
  "nimada",
  "necha",
  "nechta",
  "qaysi",
  "qayer",
  "qayerda",
  "kim",
  "bu",
  "shu",
  "u",
  "men",
  "siz",
  "biz",
  "ular",
  "uning",
  "ularning",
  "barcha",
  "hamma",
  "toliq",
  "batafsil",
  "qisqa",
  "qisqacha",
  "ber",
  "bering",
  "ayt",
  "ayting",
  "tushuntir",
  "tushuntiring",
  "tushuntirib",
  "javob",
  "javobi",
  "javoblari",
  "savol",
  "savollar",
  "savollari",
  "fan",
  "fani",
  "fanida",
  "fanidan",
  "fanining",
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
  "ta",
  "ning",
  "dan",
  "ga",
  "ni",
  "da",
  "degani",
  "nimalar",
  "qilib",
  "qiladi",
  "qilinadi",
  "boyicha",
  "asosida",
  "orqali",
  "kerak",
  "mumkin",
  "edi",
  "bor",
  "yoq",
  "farq",
  "farqi",
  "farqlari",
  "taqqosla",
  "solishtir",
  "tahlil",
  "tahlili",
  "boladi",
  "yetishmasa",
  "asosiy",
  "umumiy",
  "zamonaviy",
  "orni",
  "kop",
  "tushadigan",
  "yozish",
  "tuz",
  "tuzib",
  "otish",
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

function toPaddedSearchText(normText: string): string {
  return ` ${normText.replace(/-/g, " ").replace(/\s+/g, " ").trim()} `;
}

function mapUnifiedTopic(
  subject: CurriculumSubject,
  t: BotanikaTopic | BiokimyoTopic | GenetikaTopic | MikrobiologiyaTopic | GidrobiologiyaTopic,
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

  const normTitle = normalizeUzbek(
    `${subject} ${t.topicLabel} ${t.code} ${t.title} ${t.comparisonTable.title}`,
  );
  const normConcepts = normalizeUzbek(
    [...t.keyTerms, ...t.keyConcepts.map((k) => k.term)].join(" "),
  );
  const normBody = normalizeUzbek(bodyParts.join(" "));
  const paddedTitle = toPaddedSearchText(normTitle);
  const paddedConcepts = toPaddedSearchText(normConcepts);
  const paddedBody = toPaddedSearchText(normBody);

  const wordCounts = new Map<string, number>();
  for (const w of paddedBody.trim().split(" ")) {
    if (w.length < 2) continue;
    wordCounts.set(w, (wordCounts.get(w) || 0) + 1);
  }

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
    normTitle,
    normBody,
    paddedTitle,
    paddedConcepts,
    paddedBody,
    wordCounts,
    words: Array.from(wordCounts.keys()),
  };
}

interface KnowledgeIndex {
  topics: UnifiedTopicRecord[];
  topicIdf: Map<string, number>;
  pdfPages: IndexedPdfPage[];
  bioQuestions: IndexedBioQuestion[];
  englishLessons: Array<{ lesson: VideoLesson; normText: string; paddedText: string }>;
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
    ...GIDROBIOLOGIYA_TOPICS.map((t) => mapUnifiedTopic("Gidrobiologiya", t)),
  ];

  // Compute IDF across all 87 topics so rare scientific terms outrank generic Uzbek words
  const docFreq = new Map<string, number>();
  for (const topic of topics) {
    const seen = new Set<string>();
    for (const w of topic.words) {
      if (!seen.has(w)) {
        seen.add(w);
        docFreq.set(w, (docFreq.get(w) || 0) + 1);
      }
      const st = stemUzbekToken(w);
      if (st.length >= 4 && !seen.has(st)) {
        seen.add(st);
        docFreq.set(st, (docFreq.get(st) || 0) + 1);
      }
    }
  }
  const totalDocs = topics.length;
  const topicIdf = new Map<string, number>();
  for (const [term, df] of docFreq.entries()) {
    topicIdf.set(term, Math.log((totalDocs + 1) / (df + 1)) + 1);
  }

  const pdfPages: IndexedPdfPage[] = [];
  for (const doc of activePdfCorpus.documents) {
    const normTitle = normalizeUzbek(
      `${doc.subject} ${doc.topicLabel} ${doc.topicTitle} ${doc.kind}`,
    );
    const paddedTitle = toPaddedSearchText(normTitle);
    for (const page of doc.pages) {
      const normText = normalizeUzbek(page.t);
      pdfPages.push({
        doc,
        page,
        normTitle,
        normText,
        paddedTitle,
        paddedText: toPaddedSearchText(normText),
      });
    }
  }

  const bioQuestions: IndexedBioQuestion[] = [];
  for (const variant of BIOLOGY_VARIANTS as BiologyVariant[]) {
    for (const q of variant.questions) {
      const normText = normalizeUzbek(
        `${variant.title} ${q.number}-savol ${q.question} ${q.options.join(" ")}`,
      );
      bioQuestions.push({
        variantId: variant.id,
        variantTitle: variant.title,
        question: q,
        normText,
        paddedText: toPaddedSearchText(normText),
      });
    }
  }

  const englishLessons = (ENGLISH_VIDEO_LESSONS as VideoLesson[]).map((lesson) => {
    const normText = normalizeUzbek(`${lesson.code} ${lesson.title} ${lesson.category}`);
    return {
      lesson,
      normText,
      paddedText: toPaddedSearchText(normText),
    };
  });

  cachedIndex = {
    topics,
    topicIdf,
    pdfPages,
    bioQuestions,
    englishLessons,
    corpusDocCount: activePdfCorpus.documents.length,
    corpusPageCount: pdfPages.length,
  };
  return cachedIndex;
}

function detectExplicitSubjects(normText: string): CurriculumSubject[] {
  const subjects: CurriculumSubject[] = [];
  if (/\bbotanik/i.test(normText)) subjects.push("Botanika");
  if (/\bbiokimy/i.test(normText)) subjects.push("Biokimyo");
  if (/\bgenetik|\bgenomik/i.test(normText)) subjects.push("Genetika");
  if (/\bmikrobiolog|\bvirusolog|\bbakteriolog/i.test(normText)) subjects.push("Mikrobiologiya");
  if (/\bgidrobiolog|\blimnolog|\bpotamolog/i.test(normText)) subjects.push("Gidrobiologiya");
  return subjects;
}

export function detectQueryIntent(
  prompt: string,
  category?: string,
  history?: Array<{ role: string; content: string }>,
): QueryIntent {
  const norm = normalizeUzbek(prompt);
  const { tokens, stems } = extractTokens(prompt);

  // Only inspect explicit subjects in the current prompt first
  const subjects: CurriculumSubject[] = detectExplicitSubjects(norm);
  const explicitSubject = subjects.length > 0;

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

  // Inherit context ONLY from the last USER message (never assistant greetings/overviews!) and ONLY on genuine follow-up questions
  const isFollowUpCue =
    /\b(taqdimot\w*|slayd\w*|maruza\w*|davom\w*|uning|bunda|shu mavzu|jadval\w*|testi|savoli|formulasi)\b/i.test(
      norm,
    );
  if (!explicitSubject && isFollowUpCue && history && history.length > 0) {
    const lastUserMsg = [...history].reverse().find((h) => h.role === "user");
    if (lastUserMsg) {
      const prevNorm = normalizeUzbek(lastUserMsg.content);
      const prevSubjects = detectExplicitSubjects(prevNorm);
      if (prevSubjects.length === 1) {
        subjects.push(prevSubjects[0]!);
      }
      if (topicNumber === null) {
        const prevTopicMatch =
          prevNorm.match(/\b(\d{1,2})\s*-?\s*(?:mavzu|maruza|dars)\b/) ||
          prevNorm.match(/\b(?:mavzu|maruza|dars)\s*-?\s*(\d{1,2})\b/) ||
          prevNorm.match(/\bm0?(\d{1,2})\b/);
        if (prevTopicMatch && prevTopicMatch[1]) {
          const parsed = Number(prevTopicMatch[1]);
          if (parsed >= 1 && parsed <= 30) topicNumber = parsed;
        }
      }
    }
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
  const explicitTestRequest =
    variantNumber !== null ||
    /\b(milliy sertifikat|dtm|test varianti|variant|testlarida|test savol)\b/i.test(norm);
  const wantsBiologyTests = category === "biologiya" || explicitTestRequest;
  const wantsKursIshi =
    category === "kurs_ishi" ||
    /\b(kurs\s+ish|kursish|titul|gost|kirish\s+konstruktor)/i.test(norm);
  const wantsMustaqilIsh =
    category === "mustaqil_ish" || /\b(mustaqil\s+ish|referat|esse|keys-?stadi)/i.test(norm);

  // If topicNumber >= 17 and no subject explicitly specified, it can only be Botanika (Botanika 1..30, Mikrobiologiya 1..16, Biokimyo/Genetika 1..15)
  if (subjects.length === 0 && topicNumber !== null && topicNumber > 16 && topicNumber <= 30) {
    subjects.push("Botanika");
  }

  return {
    subjects,
    explicitSubject,
    topicNumber,
    preferPresentation,
    preferLecture,
    wantsCatalog,
    variantNumber,
    questionNumber,
    wantsEnglish,
    wantsBiologyTests,
    explicitTestRequest,
    wantsKursIshi,
    wantsMustaqilIsh,
    tokens,
    stems,
  };
}

function paddedHasWordOrPrefix(
  padded: string,
  token: string,
  stem: string,
): "exact" | "prefix" | null {
  if (padded.includes(` ${token} `)) return "exact";
  // Only allow word-start prefix match for stems >= 4 chars (prevents "sil" matching "tanosil" or "hosil")
  if (stem.length >= 4 && padded.includes(` ${stem}`)) return "prefix";
  return null;
}

function getTokenWeight(token: string, stem: string, idfMap: Map<string, number>): number {
  const exactIdf = idfMap.get(token);
  if (exactIdf !== undefined) return exactIdf;
  const stemIdf = idfMap.get(stem);
  if (stemIdf !== undefined) return stemIdf;
  // Unseen term in curriculum gets high IDF so off-topic queries reveal low coverage
  return 4.5;
}

function countPaddedOccurrences(padded: string, needle: string, limit = 5): number {
  let count = 0;
  let idx = padded.indexOf(needle);
  while (idx !== -1 && count < limit) {
    count++;
    idx = padded.indexOf(needle, idx + needle.length - 1);
  }
  return count;
}

function scoreTopicRecord(
  topic: UnifiedTopicRecord,
  intent: QueryIntent,
  idfMap: Map<string, number>,
  subjectBoost: boolean,
  topicNumMatch: boolean,
): number {
  // If user explicitly named a DIFFERENT subject (e.g. "Biokimyoda ..."), do not cross-match another subject
  if (intent.explicitSubject && !subjectBoost) {
    return 0;
  }

  // Filter out subject-name tokens when measuring content coverage
  const subjectWords = new Set([
    "botanika",
    "biokimyo",
    "biokimyoda",
    "genetika",
    "genomika",
    "mikrobiologiya",
    "mikrobiologiyada",
    "virusologiya",
    "gidrobiologiya",
    "gidrobiologiyada",
  ]);
  const contentTokens = intent.tokens.filter((t) => !subjectWords.has(t));

  let score = 0;
  if (subjectBoost) score += 24;
  if (topicNumMatch) score += 65;

  const normQuery = contentTokens.join(" ");
  if (normQuery.length >= 6 && topic.paddedTitle.includes(` ${normQuery} `)) {
    score += 75;
  } else if (normQuery.length >= 6 && topic.paddedBody.includes(` ${normQuery} `)) {
    score += 40;
  }

  // Reward adjacent 2-word compound phrases in title weighted by IDF (e.g. "ochiq urugli" > "urugli osimliklar")
  for (let i = 0; i < contentTokens.length - 1; i++) {
    const w1 = contentTokens[i]!;
    const w2 = contentTokens[i + 1]!;
    const s1 = stemUzbekToken(w1);
    const s2 = stemUzbekToken(w2);
    if (
      topic.paddedTitle.includes(` ${w1} ${w2} `) ||
      (s2.length >= 4 && topic.paddedTitle.includes(` ${w1} ${s2}`))
    ) {
      const pairWeight = getTokenWeight(w1, s1, idfMap) + getTokenWeight(w2, s2, idfMap);
      score += pairWeight * 15;
    }
  }

  let matchedCount = 0;
  let titleOrConceptMatches = 0;
  let matchedIdf = 0;
  let totalIdf = 0;

  for (const token of contentTokens) {
    const stem = stemUzbekToken(token);
    const weight = getTokenWeight(token, stem, idfMap);
    totalIdf += weight;

    const titleHit = paddedHasWordOrPrefix(topic.paddedTitle, token, stem);
    const conceptHit = paddedHasWordOrPrefix(topic.paddedConcepts, token, stem);
    const bodyHit = paddedHasWordOrPrefix(topic.paddedBody, token, stem);

    if (titleHit || conceptHit || bodyHit) {
      matchedCount++;
      matchedIdf += weight;

      if (titleHit === "exact") {
        titleOrConceptMatches++;
        score += weight * 11;
      } else if (titleHit === "prefix") {
        titleOrConceptMatches++;
        score += weight * 8.5;
      }

      if (conceptHit === "exact") {
        titleOrConceptMatches++;
        score += weight * 8;
      } else if (conceptHit === "prefix") {
        titleOrConceptMatches++;
        score += weight * 6;
      }

      if (bodyHit) {
        const needle = bodyHit === "exact" ? ` ${token} ` : ` ${stem}`;
        const occ = countPaddedOccurrences(topic.paddedBody, needle, 5);
        score += weight * (2.5 + occ * 0.9);
      }
    }
  }

  // Strict precision gate when no topic number was explicitly requested:
  // prevents off-topic questions ("O'zbekiston poytaxti qayer?") from returning random lectures
  if (!topicNumMatch && contentTokens.length > 0) {
    if (matchedCount === 0) return 0;
    const idfCoverage = totalIdf > 0 ? matchedIdf / totalIdf : 0;

    if (
      contentTokens.length >= 2 &&
      titleOrConceptMatches === 0 &&
      idfCoverage < (subjectBoost ? 0.35 : 0.48)
    ) {
      return 0;
    }
    if (contentTokens.length === 1 && titleOrConceptMatches === 0 && score < 24) {
      return 0;
    }
    if (contentTokens.length >= 2 && matchedCount >= 2) {
      score += matchedCount * 10;
    }
    // Bonus for covering most of the query's high-IDF terms
    score += idfCoverage * 24;
  }

  return score;
}

function scorePaddedTextMatch(
  paddedText: string,
  paddedTitle: string,
  intent: QueryIntent,
  idfMap: Map<string, number>,
  subjectBoost: boolean,
  topicNumMatch: boolean,
): number {
  let score = 0;

  if (subjectBoost) score += 22;
  if (topicNumMatch) score += 55;

  const normQuery = intent.tokens.join(" ");
  if (normQuery.length >= 6 && paddedTitle.includes(` ${normQuery} `)) {
    score += 55;
  }
  if (normQuery.length >= 6 && paddedText.includes(` ${normQuery} `)) {
    score += 36;
  }

  let matchedTokens = 0;
  let matchedIdf = 0;
  let totalIdf = 0;

  for (const token of intent.tokens) {
    const stem = stemUzbekToken(token);
    const weight = getTokenWeight(token, stem, idfMap);
    totalIdf += weight;

    const inTitle = paddedTitle ? paddedHasWordOrPrefix(paddedTitle, token, stem) : null;
    const inText = paddedHasWordOrPrefix(paddedText, token, stem);
    if (inTitle || inText) {
      matchedTokens++;
      matchedIdf += weight;
      if (inTitle) score += weight * (inTitle === "exact" ? 8 : 6);
      if (inText) {
        const needle = inText === "exact" ? ` ${token} ` : ` ${stem}`;
        const occ = countPaddedOccurrences(paddedText, needle, 5);
        score += weight * (2 + occ * 0.8);
      }
    }
  }

  if (!topicNumMatch && intent.tokens.length > 0) {
    if (matchedTokens === 0) return 0;
    const coverage = totalIdf > 0 ? matchedIdf / totalIdf : 0;
    if (intent.tokens.length >= 2 && coverage < 0.42 && matchedTokens < 2) {
      return 0;
    }
    if (matchedTokens >= Math.min(2, intent.tokens.length)) {
      score += matchedTokens * 8;
    }
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

  // 1. Score structured textbook topics (Botanika 1-30, Biokimyo 1-15, Genetika 1-15, Mikrobiologiya 1-16)
  const scoredTopics = index.topics
    .map((topic) => {
      const subjectBoost = intent.subjects.length > 0 && intent.subjects.includes(topic.subject);
      const topicNumMatch =
        intent.topicNumber !== null &&
        topic.order === intent.topicNumber &&
        (intent.subjects.length === 0 || subjectBoost);

      const score = scoreTopicRecord(topic, intent, index.topicIdf, subjectBoost, topicNumMatch);
      return { topic, score };
    })
    .filter((entry) => entry.score >= 22)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  // 2. Score all 2,222 PDF pages (lectures + presentations + 30-variant PDF)
  const scoredPdfPages = index.pdfPages
    .map((item) => {
      const subjectMatch =
        intent.subjects.length > 0 &&
        intent.subjects.some((s) => item.doc.subject.toLowerCase().includes(s.toLowerCase()));

      if (intent.explicitSubject && !subjectMatch) {
        return { item, score: 0 };
      }

      const topicNumMatch =
        intent.topicNumber !== null &&
        item.doc.order === intent.topicNumber &&
        (intent.subjects.length === 0 || subjectMatch);

      let score = scorePaddedTextMatch(
        item.paddedText,
        item.paddedTitle,
        intent,
        index.topicIdf,
        subjectMatch,
        topicNumMatch,
      );

      if (score <= 0) return { item, score: 0 };

      const kindNorm = normalizeUzbek(item.doc.kind);
      if (intent.preferPresentation && kindNorm.includes("taqdimot")) score += 20;
      if (intent.preferLecture && kindNorm.includes("maruza")) score += 20;

      if (scoredTopics.some((st) => st.topic.id === item.doc.topicId)) {
        score += 18;
      }

      if (item.page.t.length < 100 && !topicNumMatch) {
        score -= 12;
      }

      return { item, score };
    })
    .filter((entry) => entry.score >= 24)
    .sort((a, b) => b.score - a.score);

  // Diversify top PDF pages so we capture both Taqdimot and Ma'ruza matni
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

  // Ensure both Taqdimot and Ma'ruza matni appear when a specific topic number is requested
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
          score:
            scorePaddedTextMatch(item.paddedText, "", intent, index.topicIdf, false, false) + 50,
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
    } else {
      scoredBioQuestions = variantMatches.slice(0, 5).map((item) => ({ item, score: 100 }));
    }
  } else if (intent.tokens.length > 0 && !intent.explicitSubject) {
    scoredBioQuestions = index.bioQuestions
      .map((item) => ({
        item,
        score: scorePaddedTextMatch(
          item.paddedText,
          "",
          intent,
          index.topicIdf,
          intent.explicitTestRequest,
          false,
        ),
      }))
      .filter((entry) => entry.score >= (intent.explicitTestRequest ? 26 : 45))
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
  }

  // 4. Score English video lessons (180 lessons)
  let scoredEnglish: Array<{ lesson: VideoLesson; score: number }> = [];
  if (intent.wantsEnglish || (!intent.explicitSubject && intent.tokens.length > 0)) {
    scoredEnglish = index.englishLessons
      .map((entry) => ({
        lesson: entry.lesson,
        score: scorePaddedTextMatch(
          entry.paddedText,
          entry.paddedText,
          intent,
          index.topicIdf,
          intent.wantsEnglish,
          false,
        ),
      }))
      .filter((entry) => entry.score >= (intent.wantsEnglish ? 26 : 55))
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
  const gidroList = GIDROBIOLOGIYA_TOPICS.map((t) => `${t.order}. ${t.title}`).join(" | ");
  const engCategories = Array.from(new Set(ENGLISH_VIDEO_LESSONS.map((l) => l.category))).join(
    ", ",
  );

  return [
    `PLATFORMADAGI DARSLIK VA RESURSLAR MUNDARIJASI:`,
    `- BOTANIKA (${BOTANIKA_TOPICS.length} ta mavzu, 42 ta PDF — M01..M18 taqdimot va 19–30-mavzularda Ma’ruza matni + Taqdimot): ${botList}`,
    `- BIOKIMYO (${BIOKIMYO_TOPICS.length} ta mavzu, 30 ta PDF — har bir mavzuda Ma’ruza matni + Taqdimot): ${bioList}`,
    `- GENETIKA (${GENETIKA_TOPICS.length} ta mavzu, 30 ta PDF — har bir mavzuda Ma’ruza matni + Taqdimot): ${genList}`,
    `- MIKROBIOLOGIYA VA VIRUSOLOGIYA (${MIKROBIOLOGIYA_TOPICS.length} ta mavzu, 16 ta PDF — 1–16-mavzular Ma’ruza matni): ${mikroList}`,
    `- GIDROBIOLOGIYA (${GIDROBIOLOGIYA_TOPICS.length} ta mavzu, 11 ta PDF — 1–11-mavzular Ma’ruza matni): ${gidroList}`,
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

function matchCoreBiologyReferenceCard(normPrompt: string, intent: QueryIntent): string {
  // Only apply cross-topic cards when user did NOT ask for a specific topic number or specific Milliy sertifikat variant
  if (intent.topicNumber !== null || intent.variantNumber !== null) return "";

  // 1. Fotosintez (yorug'lik va qorong'ulik bosqichlari)
  if (/\bfotosintez/i.test(normPrompt)) {
    return `🌿 **Fotosintezning Yorug‘lik va Qorong‘ulik Bosqichlari Tahlili**
_Bog‘liq darsliklar: Botanika 2-mavzu (Xloroplastlar), Botanika 10-mavzu (Barg mezofilli), Biokimyo 6-mavzu (Uglevodlar)_

### 1. Umumiy reaksiya tenglamasi
\`6CO₂ + 6H₂O + quyosh nuri (xlorofill) → C₆H₁₂O₆ + 6O₂↑\`

### 2. Qiyosiy jadval: Yorug‘lik vs Qorong‘ulik bosqichi
| Mezon | Yorug‘lik bosqichi (Fotokimyoviy) | Qorong‘ulik bosqichi (Kalvin sikli) |
| --- | --- | --- |
| **Qayerda boradi?** | Xloroplast **tilakoid membranalarida** (granalarda) | Xloroplast **stromasida** |
| **Yorug‘lik talabi** | Bevosita yorug‘lik energiyasi shart | Bevosita yorug‘lik shart emas (ATF va NADF·H₂ kerak) |
| **Asosiy jarayonlar** | Xlorofillning qo‘zg‘alishi, **suv fotolizi** (\`2H₂O → 4H⁺ + 4e⁻ + O₂↑\`), fotofosforillanish | **CO₂ fiksatsiyasi** (RuBisCO fermenti orqali), qaytarilish, ribulozo-1,5-difosfat regeneratsiyasi |
| **Hosil bo‘ladigan mahsulotlar** | **O₂** (atmosferaga chiqadi), **ATF** va **NADF·H₂** | **Glyukoza (C₆H₁₂O₆)** va boshqa organik uglevodlar (kraxmal) |

> 💡 **Muhim eslatma (Milliy sertifikat uchun):** Atmosferaga ajralib chiqadigan erkin kislorod (**O₂**) aynan **suv (H₂O) fotolizidan** hosil bo‘ladi, CO₂ dan emas!`;
  }

  // 2. Mitoz va Meyoz farqi
  if (/\bmitoz/i.test(normPrompt) && /\bmeyoz/i.test(normPrompt)) {
    return `🧬 **Mitoz va Meyoz Bo‘linishlarining Qiyosiy Tahlili**
_Bog‘liq darsliklar: Botanika 2–3-mavzular (Hujayra va to‘qimalar), Genetika 2 va 8-mavzular (Xromosomalar va irsiyat)_

### 📊 Mitoz vs Meyoz qiyosiy jadvali
| Xususiyat | Mitoz (Somatik bo‘linish) | Meyoz (Reduksion bo‘linish) |
| --- | --- | --- |
| **Qaysi hujayralarda?** | Somatik (tana) hujayralarda | Jinsiy hujayralar (gametalar) va o‘simlik sporalarida |
| **Bo‘linishlar soni** | 1 marta bo‘linish (profaza, metafaza, anafaza, telofaza) | 2 ta ketma-ket bo‘linish (**Meyoz I** — reduksion, **Meyoz II** — ekvatsion) |
| **Hosil bo‘ladigan hujayralar** | **2 ta** genetik bir xil qiz hujayra | **4 ta** genetik xilma-xil qiz hujayra |
| **Xromosoma to‘plami** | Saqlanib qoladi (**2n → 2n**) | Ikki baravar kamayadi (**2n → n**) |
| **Konyugatsiya va krossingover** | Sodir bo‘lmaydi | **Profaza I** bosqichida sodir bo‘ladi (genetik rekombinatsiya!) |
| **Biologik ahamiyati** | O‘sish, regeneratsiya, jinssiz ko‘payish | Jinsiy ko‘payish, tur xromosoma soni doimiyligi va kombinativ o‘zgaruvchanlik |

### 🔎 Bosqichlarning qisqa formulasi (DNK — c, xromosoma — n)
- **Mitoz:** Interfaza oxiri \`2n4c\` → Metafaza \`2n4c\` → Anafaza \`4n4c\` → Telofaza (har bir hujayrada) \`2n2c\`.
- **Meyoz I:** Profaza I / Metafaza I \`2n4c\` → Telofaza I \`1n2c\`.
- **Meyoz II:** Anafaza II \`2n2c\` → Telofaza II (4 ta hujayrada) \`1n1c\`.`;
  }

  // 3. Odam anatomiyasi: Katta va kichik qon aylanish doiralari
  if (
    /\bqon\s+aylanish/i.test(normPrompt) ||
    (/\bkatta\b/i.test(normPrompt) && /\bkichik\b/i.test(normPrompt) && /\bqon\b/i.test(normPrompt))
  ) {
    return `❤️ **Odam Anatomiyasi: Katta va Kichik Qon Aylanish Doiralari**
_Bo‘lim: Biologiya (Milliy sertifikat) — Odam anatomiyasi va fiziologiyasi_

Odam yuragi 4 kamerali (2 bo‘lmacha + 2 qorincha) bo‘lib, qon ikki yopiq doira bo‘ylab harakatlanadi:

### 1. Katta qon aylanish doirasi (Tana doirasi — ~20–23 soniya)
- **Boshlanishi:** **Chap qorincha** → **Aorta** (eng yirik arteriya) → arteriyalar → arteriolalar → tana a’zolari va to‘qimalari kapillyarlari.
- **Gazlar almashinuvi:** To‘qimalarga **O₂** va oziqa moddalar berilib, **CO₂** olinadi (*arterial qon venoz qonga aylanadi*).
- **Tugashi:** Yuqori va pastki **kovak venalar** orqali **o‘ng bo‘lmachaga** quyiladi.

### 2. Kichik qon aylanish doirasi (O‘pka doirasi — ~4–5 soniya)
- **Boshlanishi:** **O‘ng qorincha** → **o‘pka arteriyasi** (ichida **venoz qon** oqadi!) → o‘pka alveolalari kapillyarlari.
- **Gazlar almashinuvi:** CO₂ chiqarilib, qon kislorod (**O₂**) bilan to‘yinadi (*venoz qon arterial qonga aylanadi*).
- **Tugashi:** 4 ta **o‘pka venasi** (ichida **arterial qon** oqadi!) orqali **chap bo‘lmachaga** quyiladi.

### 📊 Milliy sertifikat uchun muhim farqlar
| Mezon | Katta doira | Kichik (o‘pka) doira |
| --- | --- | --- |
| **Qayerdan boshlanadi?** | Chap qorincha | O‘ng qorincha |
| **Qayerda tugaydi?** | O‘ng bo‘lmacha | Chap bo‘lmacha |
| **Arteriyalarida qanday qon?** | Arterial (O₂ ga boy) | **Venoz** (CO₂ ga boy) |
| **Venalarida qanday qon?** | Venoz (CO₂ ga boy) | **Arterial** (O₂ ga boy) |`;
  }

  // 4. DNK masalalari formulalari va Chargaff qoidasi
  if (
    (/\bchargaff/i.test(normPrompt) ||
      (/\bdnk\b/i.test(normPrompt) &&
        /\b(masala|formula|qoida|foiz|uzunlik|vodorod)/i.test(normPrompt))) &&
    !/\breplikatsiy/i.test(normPrompt)
  ) {
    return `🧬 **DNK Masalalarini Yechish Formulalari va Chargaff Qoidasi**
_Bog‘liq darsliklar: Biokimyo 4–5-mavzular (Nuklein kislotalar, DNK va RNK), Genetika 3-mavzu_

### 1. Chargaff qoidasi (komplementarlik qonuni)
Qo‘sh zanjirli DNK molekulasida:
- **A = T** (Adenin soni Timin soniga teng)
- **G = S** (Guanin soni Sitozin soniga teng)
- **A + G = T + S = 50%** (purin asoslari yig‘indisi pirimidin asoslari yig‘indisiga teng)
- **A + T + G + S = 100%** (yoki jami nukleotidlar soni \`N\`)

### 2. Asosiy hisoblash formulalari
| Ko‘rsatkich | Formula | Izoh |
| --- | --- | --- |
| **Vodorod bog‘lari soni (H)** | \`H = 2A + 3G\` (yoki \`H = N/2 + G\`) | A=T orasida 2 ta, G≡S orasida 3 ta H-bog‘ |
| **DNK uzunligi (L)** | \`L = (N / 2) × 0.34 nm\` | 1 juft nukleotid oralig‘i = **0.34 nm** |
| **DNK massasi (M)** | \`M = N × 345 Da\` | 1 nukleotid o‘rtacha massasi = **345** (yoki 300) |
| **Fosfodiefir bog‘lar** | \`N - 2\` | Har bir zanjirda \`(N/2) - 1\` ta |
| **i-RNK / Oqsil aloqasi** | \`1 aminokislota = 3 nukleotid (i-RNK) = 6 nukleotid (DNK)\` | 1 triplet (kodon) = 3 ta nukleotid |

> 📌 **Tezkor misol:** Agar DNKda \`A = 20%\` bo‘lsa: \`T = 20%\`, \`G + S = 60%\` → \`G = 30%\`, \`S = 30%\`.`;
  }

  // 5. Mendelning 1, 2 va 3-qonunlari
  if (/\bmendel/i.test(normPrompt) && /\b(qonun|chatishtir|formula|1|2|3)/i.test(normPrompt)) {
    return `🧬 **Mendelning 1-, 2- va 3-Qonunlari va Chatishtirish Formulalari**
_Bog‘liq darsliklar: Genetika 1-, 2- va 4-mavzular (Genetik tahlil, allel genlarning o‘zaro ta’siri)_

### 1. Birinchi qonun — Birinchi avlod duragaylarining bir xillik qonuni
- **Chatishtirish:** \`AA × aa\` (gomozigota dominant × gomozigota retsessiv)
- **Natija ($F_1$):** 100% bir xil **Aa** (genotipi va fenotipi bo‘yicha bir xil).

### 2. Ikkinchi qonun — Belgilarning ajralish qonuni (Monoduragay)
- **Chatishtirish:** \`Aa × Aa\`
- **Genotip nisbati ($F_2$):** **1 AA : 2 Aa : 1 aa** (3 xil genotip)
- **Fenotip nisbati ($F_2$):**
  - To‘liq dominantlikda: **3 : 1** (75% dominant, 25% retsessiv)
  - Chala dominantlikda: **1 : 2 : 1**

### 3. Uchinchi qonun — Belgilarning mustaqil taqsimlanish qonuni (Diduragay)
- **Chatishtirish:** \`AaBb × AaBb\` (har bir ota-ona 4 xil gameta: \`AB, Ab, aB, ab\`)
- **Fenotip nisbati ($F_2$):** **9 : 3 : 3 : 1** (16 ta kombinatsiya, 4 xil fenotip, 9 xil genotip)
- **Umumiy formulalar ($n$ ta geterozigota juftlik uchun):**
  - Gametalar turi: \`2ⁿ\` | Fenotiplar soni: \`2ⁿ\` | Genotiplar soni: \`3ⁿ\` | Pennet kataklari: \`4ⁿ\`.`;
  }

  // 6. Viruslar va bakteriyalar farqi
  if (/\bvirus/i.test(normPrompt) && /\bbakteriy/i.test(normPrompt)) {
    return `🧫 **Viruslar va Bakteriyalarning Asosiy Farqlari**
_Bog‘liq darsliklar: Mikrobiologiya 1–2-mavzular (Bakteriyalar tuzilishi), 6-mavzu (Bakteriofaglar), 7-mavzu (Antibiotiklar)_

| Taqqoslash mezoni | Bakteriyalar | Viruslar |
| --- | --- | --- |
| **Tuzilish darajasi** | **Prokariot hujayrali** tirik organizm | **Hujayrasiz** hayot shakli (nuklein kislota + oqsil kapsid) |
| **O‘lchami** | 0.5 – 5 mkm (yorug‘lik mikroskopida ko‘rinadi) | 20 – 300 nm (faqat elektron mikroskopda ko‘rinadi) |
| **Genetik material** | Bir vaqtning o‘zida ham **DNK**, ham **RNK** mavjud | Faqat **DNK** YOKI faqat **RNK** bo‘ladi |
| **Hujayra devori va ribosoma** | Peptidoglikan (murein) devor + **70S ribosomalar** bor | Hujayra devori va ribosomasi **yo‘q** |
| **Ko‘payishi** | Mustaqil **binar (ikkiga) bo‘linish** orqali | Faqat tirik xo‘jayin hujayra ichida (**obligat ichki hujayra paraziti**) |
| **Antibiotiklarga sezgirligi** | **Sezgir** (penitsillin, tetratsiklin va b. ta’sir qiladi) | **Ta’sir qilmaydi!** (Faqat virusga qarshi preparatlar va interferon) |

> 💡 **Qiziqarli fakt (Mikrobiologiya 6-mavzu):** Bakteriyalarni zararlaydigan maxsus viruslar **bakteriofaglar** deyiladi.`;
  }

  // 7. Biokimyoda ATF tuzilishi va energetik ahamiyati
  if (
    /\batf\b/i.test(normPrompt) &&
    /\b(tuzilish|energetik|ahamiyat|nima|bog|vazifa)/i.test(normPrompt)
  ) {
    return `🧪 **Biokimyoda ATF (Adenozintrifosfat) ning Tuzilishi va Energetik Ahamiyati**
_Bog‘liq darsliklar: Biokimyo 4-mavzu (Nuklein kislotalar), 12-mavzu (Moddalar almashinuvi), 14-mavzu (Glikoliz va Krebs sikli)_

### 1. Kimyoviy tuzilishi
**ATF** — erkin ribonukleotid bo‘lib, 3 ta tarkibiy qismdan iborat:
1. **Adenin** (purin azotli asosi)
2. **Riboza** (5 uglerodli pentoza shakar)
3. **3 ta fosfat kislota qoldig‘i** — bunda oxirgi 2 ta fosfat bog‘i **makroergik bog‘ (\`~\`)** hisoblanadi:
   \`Adenin — Riboza — P ~ P ~ P\`

### 2. Energetik ahamiyati
- Har bir makroergik bog‘ gidrolizlanganda katta energiya ajraladi:
  - \`ATF + H₂O → ADF + H₃PO₄ + ~30.5–40 kJ/mol\`
  - \`ADF + H₂O → AMF + H₃PO₄ + ~30.5–40 kJ/mol\`
- **Hujayraning universal energetik valyutasi:** Biosintez (oqsil, DNK, RNK sintezi), aktiv transport (Na⁺/K⁺-nasos), mushak qisqarishi va nerv impulsi o‘tkazilishini energiya bilan ta’minlaydi.

### 3. ATF sintezlanish bosqichlari (1 mol glyukozadan)
- **Glikoliz (anaerob bosqich, sitoplazmada):** **2 mol ATF** (Biokimyo 13–14-mavzular)
- **Krebs sikli + Oksidlanishli fosforillanish (mitoxondriyada):** **36 mol ATF**
- **Jami aerob parchalanishda:** **38 mol ATF** hosil bo‘ladi.`;
  }

  // 8. Milliy sertifikat Sitologiya masalalari
  if (
    /\bsitologiy/i.test(normPrompt) &&
    /\b(masala|test|milliy sertifikat|formul)/i.test(normPrompt)
  ) {
    return `🔬 **Milliy Sertifikat Testlarida Ko‘p Tushadigan Sitologiya Masalalari va Formulalari**
_Bog‘liq bo‘limlar: Biologiya Milliy sertifikat (30 variant · 900 savol), Botanika 2-mavzu, Biokimyo 13–14-mavzular_

### 1. Organoidlar tasnifi (Testlarda eng ko‘p tushadi)
- **Ikki membranali (yarim avtonom, o‘z DNK va 70S ribosomasi bor):** Mitoxondriya, plastidalar (xloroplast, xromoplast, leykoplast) + Yadro.
- **Bir membranali:** Endoplazmatik to‘r (silliq va donador), Golji apparati, lizosoma, vakuola, peroksisoma.
- **Membranasiz:** Ribosoma (80S eukariot / 70S prokariot), hujayra markazi (sentriola), sitoskelet.

### 2. Energetik almashinuv (Glyukoza parchalanishi) masalalari
- **1 mol glyukoza → Glikoliz (anaerob):** \`2 mol sut kislota + 2 mol ATF\` (200 kJ: 80 kJ ATFda, 120 kJ issiqlik).
- **1 mol glyukoza → Kislorodli (aerob, mitoxondriya):** \`36 mol ATF\` (2600 kJ: 1440 kJ ATFda).
- **To‘liq aerob parchalanish:** \`1 mol glyukoza + 6 O₂ → 6 CO₂ + 6 H₂O + 38 ATF\`.

### 3. Oqsil biosintezi va DNK masalalari
- \`1 aminokislota = 1 kodon (3 nukleotid i-RNK) = 6 nukleotid qo‘sh zanjirli DNK\`.
- \`Peptid bog‘lar soni = Aminokislotalar soni - 1\` (har bir bog‘da 1 molekula \`H₂O\` ajraladi).
- \`1 aminokislota o‘rtacha massasi = 110–120 Da\`, \`1 nukleotid = 345 Da\`.

> 📌 Aniq test mashqi uchun **«Variant 1 2-savol»** kabi so‘rov yozing yoki **Biologiya (Milliy sertifikat)** bo‘limida 30 ta variantni yeching!`;
  }

  return "";
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

  // 0. Core cross-topic biology/biochemistry reference cards (Fotosintez, Mitoz/Meyoz, Qon aylanish, Chargaff/DNK, Mendel, Virus/Bakteriya, ATF)
  const coreCard = matchCoreBiologyReferenceCard(normPrompt, intent);
  if (coreCard) {
    return coreCard;
  }

  // 1. Biology Milliy sertifikat exact test question lookup (ONLY when explicitly asking for variant/test/savol OR when no textbook topic matched strongly)
  if (hit.bioQuestions.length > 0 && (intent.explicitTestRequest || hit.topics.length === 0)) {
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
        : ["Botanika", "Genetika", "Mikrobiologiya", "Biokimyo", "Gidrobiologiya"];
    if (intent.subjects.length > 0) {
      const blocks = targetSubjects.map((subj) => {
        const list =
          subj === "Botanika"
            ? BOTANIKA_TOPICS
            : subj === "Biokimyo"
              ? BIOKIMYO_TOPICS
              : subj === "Genetika"
                ? GENETIKA_TOPICS
                : subj === "Mikrobiologiya"
                  ? MIKROBIOLOGIYA_TOPICS
                  : GIDROBIOLOGIYA_TOPICS;
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
      const cPadded = toPaddedSearchText(normalizeUzbek(`${c.term} ${c.definition}`));
      return intent.tokens.some((tok) => {
        const st = stemUzbekToken(tok);
        return paddedHasWordOrPrefix(cPadded, tok, st) !== null;
      });
    });
    const directQAs = primary.selfCheckQuestions.filter((qa) => {
      const qPadded = toPaddedSearchText(normalizeUzbek(`${qa.question} ${qa.answer}`));
      return intent.tokens.some((tok) => {
        const st = stemUzbekToken(tok);
        return tok.length >= 4 && paddedHasWordOrPrefix(qPadded, tok, st) !== null;
      });
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
      const relevantSections =
        intent.topicNumber !== null
          ? primary.sections
          : [...primary.sections].sort((a, b) => {
              const aPadded = toPaddedSearchText(
                normalizeUzbek(`${a.heading} ${a.content} ${(a.highlights || []).join(" ")}`),
              );
              const bPadded = toPaddedSearchText(
                normalizeUzbek(`${b.heading} ${b.content} ${(b.highlights || []).join(" ")}`),
              );
              const aHits = intent.tokens.filter(
                (t) => paddedHasWordOrPrefix(aPadded, t, stemUzbekToken(t)) !== null,
              ).length;
              const bHits = intent.tokens.filter(
                (t) => paddedHasWordOrPrefix(bPadded, t, stemUzbekToken(t)) !== null,
              ).length;
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

    const sliceLimit = intent.preferPresentation ? 4 : 3;
    const primaryPdfSlices = hit.pdfPages
      .filter((p) => p.item.doc.topicId === primary.id)
      .slice(0, sliceLimit);
    const matchingPdfSlices =
      primaryPdfSlices.length > 0 ? primaryPdfSlices : hit.pdfPages.slice(0, sliceLimit);

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

  // 5. Direct PDF page matches even if not tied to top topic (strict threshold so off-topic queries don't leak)
  if (hit.pdfPages.length > 0 && hit.pdfPages[0]!.score >= 34) {
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

// 100% Offline, zero-token academic guide (no external AI API calls)
export function generateAcademicGuide(prompt: string, category?: string): string {
  const p = prompt.toLowerCase().trim();
  const norm = normalizeUzbek(prompt);

  // Greetings & polite responses
  if (/^(assalom|salom|privet|hello|hi|hayrli|xayrli)\b/i.test(p) && p.length < 45) {
    return `Assalomu alaykum! 👋 Men **EduUni Oflayn Tezkor Ustozi**man — sun’iy intellektga ulanmasdan va **0 token** sarflagan holda brauzeringizning o‘zida soniyaning mingdan bir qismida javob beraman.

Quyidagi fanlar bo‘yicha istalgan mavzu, atama, formula yoki test savolini yozing:
- 🌿 **Botanika** (30 ta mavzu · 42 ta PDF)
- 🧬 **Genetika** (15 ta mavzu · 30 ta PDF)
- 🧫 **Mikrobiologiya va virusologiya** (16 ta mavzu · 16 ta PDF)
- 🧪 **Biokimyo** (15 ta mavzu · 30 ta PDF)
- 🌊 **Gidrobiologiya** (11 ta mavzu · 11 ta PDF)
- 🔬 **Biologiya Milliy sertifikat** (30 variant · 900 ta savol)
- 🇬🇧 **Ingliz tili** (180 ta video darslik · 0 dan C1 gacha)
- 📝 **Kurs ishi va Mustaqil ish** (reja, kirish, GOST talablari)`;
  }

  if (/^(rahmat|raxmat|tashakkur|ok|tushundim|zo‘r|zor)\b/i.test(p) && p.length < 45) {
    return `Arzimaydi! O‘qishingizda ulkan muvaffaqiyatlar tilayman. 🎓 Yana qaysi fan, mavzu yoki test savoli bo‘yicha yordam kerak bo‘lsa, bemalol yozing!`;
  }

  // 1. Kurs ishi (with accurate quote detection that ignores Uzbek apostrophes like ro'yxatini / bo'yicha)
  if (
    category === "kurs_ishi" ||
    p.includes("kurs ishi") ||
    p.includes("kursishi") ||
    /\b(reja|kirish|adabiyotlar|titul|gost)\b/i.test(norm)
  ) {
    // Only capture actual quotation marks surrounded by whitespace/punctuation (never apostrophes inside Uzbek words!)
    const quotedTopic =
      prompt.match(/(?:^|[\s:(])['"«“]([^'"»”]{5,120})['"»”](?=$|[\s.,:;!?)])/u)?.[1]?.trim() ||
      null;
    if (quotedTopic && /\b(reja|mavzu|bob|tuz)\b/i.test(norm)) {
      return `📚 **"${quotedTopic}" mavzusi bo‘yicha 2 bobli standart Kurs ishi rejasi**

**KIRISH** *(2–3 bet)*
- Mavzuning dolzarbligi, tadqiqot maqsadi, vazifalari, obyekti, predmeti va metodlari.

**I-BOB. "${quotedTopic}" mavzusining nazariy-metodologik asoslari** *(10–14 bet)*
- **1.1.** Mavzuning ilmiy mohiyati, asosiy tushunchalari va tasnifi
- **1.2.** Zamonaviy nazariy yondashuvlar va ilmiy maktablar tahlili
- **1.3.** Xorijiy va mahalliy tajribaning qiyosiy o‘rganilishi

**II-BOB. "${quotedTopic}" bo‘yicha amaliy tahlil va takomillashtirish yo‘llari** *(10–14 bet)*
- **2.1.** Hozirgi holatning statistik va qiyosiy tahlili (jadvallar va diagrammalar)
- **2.2.** Mavjud muammolar va samaradorlikka ta’sir etuvchi omillar
- **2.3.** Muammolarni bartaraf etish bo‘yicha ilmiy-amaliy taklif va tavsiyalar

**XULOSA VA TAKLIFLAR** *(2–3 bet)*
**FOYDALANILGAN ADABIYOTLAR RO‘YXATI** *(15–20 ta rasmiy manba, GOST bo‘yicha)*
**ILOVALAR**

> 📌 **Texnik talab (GOST):** Times New Roman, 14 pt, 1.5 interval; hoshiyalar: chap 30 mm, o‘ng 15 mm, yuqori/pastki 20 mm. Tayyor shablonni **"Kurs ishi"** bo‘limidan yuklab olishingiz mumkin!`;
    }

    if (/\b(gost|adabiyot|manba)/i.test(norm)) {
      return `📖 **Foydalanilgan Adabiyotlar Ro‘yxatini GOST Talabi Bo‘yicha Rasmiylashtirish**

Adabiyotlar ro‘yxati odatda **15–20 ta manbadan** iborat bo‘lib, quyidagi tartibda joylashtiriladi:
1. **Qonunlar va me’yoriy hujjatlar** (O‘zbekiston Respublikasi Qonunlari, Prezident Farmonlari)
2. **Darslik va o‘quv qo‘llanmalar** *(alifbo tartibida)*
   - *Namuna:* \`1. Pratov O‘., Shamsuvaliyeva L., Sulaymonov E. Botanika: darslik. – Toshkent: Ta’lim nashriyoti, 2020. – 320 b.\`
3. **Ilmiy maqolalar (jurnallardan):**
   - *Namuna:* \`2. Karimov A.S. O‘simlik to‘qimalarining anatomik tahlili // O‘zbekiston biologiya jurnali. – 2023. – № 2. – B. 45–52.\`
4. **Rasmiy internet manbalari:**
   - *Namuna:* \`3. O‘zbekiston Respublikasi Oliy ta’lim vazirligi rasmiy portali – https://edu.uz (murojaat sanasi: 15.05.2025).\`

> 📌 **Matn ichida havola:** Har bir iqtibos oxirida kvadrat qavsda manba raqami va beti yoziladi: \`[1, 48-b.]\`.`;
    }

    if (/\b(kirish|dolzarb|obyekt|predmet)/i.test(norm)) {
      return `✍️ **Kurs Ishi «KIRISH» Qismini Yozish Strukturasi (2–3 bet)**

Kirish qismida quyidagi **6 ta majburiy ilmiy element** ketma-ket bayon qilinadi:
1. **Mavzuning dolzarbligi:** Nima uchun aynan bugungi kunda bu masala muhim? (qonunlar, zamonaviy statistik ko‘rsatkichlar va amaliy ehtiyoj).
2. **Tadqiqot maqsadi:** Bitta aniq jumla (*«...ni nazariy o‘rganish, amaliy holatini tahlil qilish va takomillashtirish bo‘yicha ilmiy-amaliy takliflar ishlab chiqish»*).
3. **Tadqiqot vazifalari (4–5 band):** Rejadagi bob va paragraflarga mos harakatlar (*o‘rganish, tasniflash, tahlil qilish, taklif ishlab chiqish*).
4. **Tadqiqot obyekti:** Tadqiqot o‘tkazilayotgan keng soha yoki tashkilot (*masalan, tijorat banklari faoliyati / o‘simliklar dunyosi*).
5. **Tadqiqot predmeti:** Obyekt ichida aynan o‘rganilayotgan tor jihat (*masalan, kredit risklarini boshqarish mexanizmlari*).
6. **Tadqiqot usullari:** Qiyosiy tahlil, statistik guruhlash, induksiya-deduksiya va grafik usullar.

Platformadagi **"Kurs ishi"** bo‘limidagi **Kirish Konstruktori** orqali tayyor matnni 1 daqiqada yaratishingiz mumkin!`;
    }

    if (/\b(xulosa|taklif)/i.test(norm)) {
      return `🎯 **Kurs Ishi «XULOSA VA TAKLIFLAR» Qismini Yozish Qoidalari (2–3 bet)**

1. **Nazariy xulosalar (I-bob bo‘yicha 2–3 band):** Mavzuning asosiy tushunchalari va xorijiy tajribadan chiqarilgan yakuniy ilmiy fikrlar.
2. **Amaliy tahlil xulosalari (II-bob bo‘yicha 2–3 band):** Aniq raqamlar, foizlar va aniqlangan 2–3 ta asosiy muammo.
3. **Amaliy taklif va tavsiyalar (3–5 ta aniq yechim):**
   - Har bir taklif **«Muammo → Yechim mexanizmi → Kutilayotgan samara»** formulasida yozilishi shart.
   - Masalan: raqamlashtirish, me’yoriy bazani takomillashtirish, resurs tejamkor texnologiyani joriy etish va kadrlar malakasini oshirish.

> 💡 **Muhim qoida:** Xulosada yangi iqtiboslar va matnda tahlil qilinmagan raqamlar kiritilmaydi — u faqat I va II boblar natijasini umumlashtiradi.`;
    }

    return `📚 **Kurs Ishini Tayyorlash Bo‘yicha Ilmiy-Metodik Tavsiyalar**

Kurs ishi — talabaning o‘quv dasturi bo‘yicha mustaqil bajargan dastlabki ilmiy-tadqiqot ishi hisoblanadi.

1. **Rasmiy Reja Strukturasi (Oliy ta’lim standarti):**
   - **Titul varaq** (Muassasa, fakultet, kafedra, mavzu, muallif va ilmiy rahbar)
   - **Mundarija / Reja**
   - **KIRISH** (2–3 bet): Dolzarblik, maqsad, vazifalar, obyekt va predmet, tadqiqot usullari.
   - **I-BOB: Nazariy asoslar** (10–15 bet, 3 ta paragraf: 1.1, 1.2, 1.3) — olimlar fikrlari, tushunchalar va xorijiy tajriba.
   - **II-BOB: Amaliy tahlil va tadqiqot** (10–15 bet, 3 ta paragraf: 2.1, 2.2, 2.3) — statistika, jadvallar, diagrammalar va yechimlar.
   - **XULOSA** (2–3 bet) — boblar bo‘yicha xulosalar va 3–5 ta amaliy tavsiya.
   - **FOYDALANILGAN ADABIYOTLAR** (Kamida 15–20 ta ilmiy manba, qonunlar va rasmiy saytlar).
   - **ILOVALAR** (Katta jadvallar, hisob-kitoblar va namunalar).

2. **Texnik Talablar (GOST):**
   - Shrift: **Times New Roman, 14 pt** | Interval: **1.5** | Abzas: **1.25 sm**.
   - Hoshiyalar: Chap — 30 mm, O‘ng — 15 mm, Yuqori — 20 mm, Pastki — 20 mm.

Platformamizdagi **"Kurs ishi"** bo‘limida avtomatik **Reja Generator** va **Kirish Konstruktori** mavjud!`;
  }

  // 2. Mustaqil ish
  if (
    category === "mustaqil_ish" ||
    p.includes("mustaqil ish") ||
    /\b(referat|esse|plagiat)/i.test(norm)
  ) {
    if (/\b(slayd|taqdimot|powerpoint)/i.test(norm)) {
      return `📊 **15 Slayddan Iborat Ilmiy Taqdimot Tayyorlash Mezonlari**

1. **Tavsiya etilgan 15 slaydli struktura:**
   - **1-slayd:** Titul (OTM, fakultet, mavzu, talaba F.I.Sh., sana)
   - **2-slayd:** Reja va tadqiqot maqsadi (3–4 band)
   - **3–6-slaydlar:** Nazariy asoslar, asosiy tushunchalar va tasnif (sxema/infografika)
   - **7–11-slaydlar:** Asosiy tahlil, qiyosiy jadvallar, grafik va diagrammalar
   - **12–13-slaydlar:** Muammolar va amaliy yechim/takliflar
   - **14-slayd:** Yakuniy xulosa (3–4 lo‘nda band)
   - **15-slayd:** Foydalanilgan adabiyotlar va «E’tiboringiz uchun rahmat!»
2. **Dizayn oltin qoidasi (6×6 qoidasi):**
   - Har bir slaydda **60% vizual** (jadval, sxema, rasm) va **40% matn** (ko‘pi bilan 5–6 qator).
   - Shrift o‘lchami: sarlavha **28–36 pt**, asosiy matn kamida **18–22 pt**, kontrastli ranglar (oq/to‘q fonda tiniq matn).`;
    }

    if (/\b(plagiat|oziga xos|originallik)/i.test(norm)) {
      return `🛡️ **Mustaqil Ishda Plagiatdan Qochish va Originallikni Oshirish (75%+)**

1. **Parafraz (o‘z so‘zi bilan qayta yozish):** Manbani o‘qib, kitobni yoping va asosiy g‘oyani o‘z ilmiy uslubingizda bayon qiling.
2. **To‘g‘ri iqtibos va havola:** Aniq ta’rif yoki statistik raqamni qo‘shtirnoqqa olib, yonida \`[1]\` manba raqamini ko‘rsating.
3. **Mualliflik tahlili qo‘shing:** 2–3 ta manbadagi ma’lumotlarni bitta **qiyosiy jadval**ga jamlang va o‘zingizning tahliliy xulosangizni yozing.
4. **Sun’iy almashtirishlardan saqlaning:** Harflarni kirill/lotin aralashtirish yoki yashirin belgilar qo‘yish antiplagiat tizimida darhol «shubhali hujjat» sifatida aniqlanadi.`;
    }

    return `📝 **Sifatli Referat, Esse va Mustaqil Ish Tayyorlash Mezonlari**

1. **Mustaqil ish shakllari va hajmi:**
   - **Referat (10–15 bet):** Titul → Reja → Kirish (1 bet) → 2–3 ta asosiy bo‘lim → Xulosa (1 bet) → 8–10 ta adabiyot.
   - **Ilmiy esse (3–5 bet):** Tezis (asosiy muammo) → 2–3 ta ilmiy dalil va misol → Shaxsiy tahliliy xulosa.
   - **Taqdimot (12–15 slayd):** Kamida 60% vizual sxema/diagramma va 40% lo‘nda matn.
   - **Keys-stadi (Case study):** Real vaziyat tahlili va amaliy yechim.

2. **Baholash mezonlari (100 ball):**
   - Mavzuning to‘liq ochib berilganligi (**30%**)
   - Shaxsiy fikr, mustaqil tahlil va kreativlik (**30%**)
   - Ilmiy adabiyotlar va faktlar aniqligi (**20%**)
   - GOST bo‘yicha rasmiylashtirish (**20%**)`;
  }

  // 3. O'yinlar & Interaktiv ta'lim
  if (
    category === "oyinlar" ||
    p.includes("o‘yin") ||
    p.includes("oyin") ||
    p.includes("viktorina") ||
    p.includes("zakovat")
  ) {
    if (/\b(ingliz|english|soz)\b/i.test(norm)) {
      return `🎮 **Ingliz Tili Bo‘yicha Tezkor So‘z O‘yini va Viktorina (5 ta savol)**

1. **Savol (Synonym Hunt):** *«Ubiquitous»* so‘zining eng yaqin ma’nodoshi qaysi? *(A) Rare  (B) Everywhere  (C) Ancient*
   - **Javob:** **B — Everywhere** (hamma joyda uchraydigan).
2. **Savol (Idiom Quiz):** *«Break a leg!»* iborasi nimani anglatadi?
   - **Javob:** **«Omad tilayman!»** (Good luck — sahna va imtihon oldidan aytiladi).
3. **Savol (Grammar Trap):** Qaysi jumla to‘g‘ri? *«I have seen him yesterday»* yoki *«I saw him yesterday»*?
   - **Javob:** **«I saw him yesterday»** (*yesterday* aniq o‘tgan vaqt bo‘lgani uchun Past Simple ishlatiladi).
4. **Savol (False Friends):** Ingliz tilidagi *«Actually»* so‘zi «dolzarb» deganimi?
   - **Javob:** **Yo‘q!** *Actually* = **«Aslida»**; «dolzarb» esa *relevant / current* deyiladi.
5. **Savol (Word Chain):** *Photosynthesis* so‘zidagi *«photo»* va *«synthesis»* ildizlari nimani anglatadi?
   - **Javob:** *Photo* = **yorug‘lik**, *synthesis* = **birlashtirish / hosil qilish**.`;
    }

    if (/\b(zakovat|mantiq)\b/i.test(norm)) {
      return `🧠 **Zakovat Uslubidagi 5 ta Ilmiy-Mantiqiy Savol (Javoblari Bilan)**

1. **Savol:** Qaysi tirik organizm «ikki xil dunyo ittifoqi» hisoblanib, havo tozaligining eng sezgir bioindikatori sanaladi?
   - **Javob:** **Lishayniklar** (zamburug‘ + suvo‘t simbiozi — Botanika 23-mavzu).
2. **Savol:** 1928-yilda Aleksandr Fleming laboratoriyasida unutib qoldirilgan Petri kosachasida mog‘or zamburug‘i atrofidagi stafilokokklar o‘lib qolgan. Bu tasodif insoniyatga nimani taqdim etdi?
   - **Javob:** Birinchi antibiotik — **Penitsillin** (*Penicillium notatum* — Mikrobiologiya 7-mavzu).
3. **Savol:** Odam organizmidagi qaysi «arteriya» ichida venoz qon, qaysi «vena» ichida esa arterial qon oqadi?
   - **Javob:** **O‘pka arteriyasida** venoz qon, **o‘pka venalarida** esa arterial qon oqadi.
4. **Savol:** Nima uchun qishda daraxt barglari to‘kiladi, lekin qarag‘ay va archa yashil qoladi?
   - **Javob:** Ignabarglar yuzasi kichik, qalin mumli kutikula bilan qoplangan va og‘izchalari chuqur joylashgani sababli suv bug‘lanishi minimal (Botanika 26-mavzu).
5. **Savol:** Qaysi kasallik qo‘zg‘atuvchisining sporalari «baraban tayoqchasi» shaklida bo‘lib, uning toksini kuchli tirishish («sardonik kulgi») chaqiradi?
   - **Javob:** **Qoqshol qo‘zg‘atuvchisi (*Clostridium tetani*)** — Mikrobiologiya 13-mavzu.`;
    }

    return `🎮 **Biologiya Fanidan 5 ta Intellektual Blitz-Savol (Javoblari Bilan)**

1. **Savol:** Qaysi bakteriya guruhi peptidoglikanli hujayra devoriga umuman ega emasligi sababli penitsillinga 100% tabiiy chidamli?
   - **Javob:** *Mikoplazmalar (Mycoplasma va Ureaplasma)* — Mikrobiologiya 16-mavzu.
2. **Savol:** 1 mol glyukoza aerob nafas olishda 38 ATF bersa, spirtli yoki sut kislotali bijg‘ishda nechta ATF hosil qiladi?
   - **Javob:** *Atigi 2 ATF* (substrat fosforillanishi) — Biokimyo 14-mavzu / Mikrobiologiya 5-mavzu.
3. **Savol:** Nima uchun qon guruhi tekshirilganda ota-onasi A va B bo‘lgan oilada O(I) guruhli bola tug‘ilishi hamda «Bombay fenomeni» kuzatilishi mumkin?
   - **Javob:** Ota-ona geterozigota (I^A i_0 × I^B i_0) bo‘lishi yoki *hh* retsessiv epistazi (Bombay fenomeni) tufayli H-antigen sintezlanmasligi mumkin — Genetika 4–5-mavzular.
4. **Savol:** Qaysi qizil suvo‘tlardan mikrobiologik oziqa muhitlarni qotiruvchi agar-agar olinadi?
   - **Javob:** *Gelidium, Gracilaria va Ahnfeltia* — Botanika 21-mavzu / Mikrobiologiya 4-mavzu.
5. **Savol:** Fermentativ reaksiyada tezlik maksimal tezlikning yarmiga (V_max / 2) teng bo‘lgandagi substrat konsentratsiyasi nima deb ataladi?
   - **Javob:** *Mixaelis doimiysi (K_m)* — Biokimyo 9-mavzu.`;
  }

  // 4. Ingliz tili general guide
  if (
    category === "ingliz_tili" ||
    p.includes("english") ||
    p.includes("ingliz") ||
    p.includes("grammar") ||
    p.includes("tense") ||
    p.includes("cefr") ||
    p.includes("ielts")
  ) {
    return `🇬🇧 **Ingliz Tili (English Language Mastery) Bo‘yicha Qo‘llanma**

1. **CEFR Darajalar Tizimi:**
   - **A1–A2 (Beginner / Elementary):** Kundalik oddiy frazalar, Present Simple, Past Simple, asosiy lug‘at (1000–1500 so‘z).
   - **B1–B2 (Intermediate / Upper-Intermediate):** Murakkab zamonlar (Perfect, Continuous), Conditionals (0, 1, 2, 3), Passive Voice, murakkab insholar va suhbatlar.
   - **C1 (Advanced):** Idiomalar, akademik so‘z boyligi, ravon nutq va ilmiy maqolalarni tahlil qilish.

2. **Grammatika Oltin Qoidasi (12 ta asosiy zamon):**
   - **Simple:** Doimiy takrorlanuvchi yoki umumiy faktlar (*I study biology*).
   - **Continuous:** Aynan nutq paytida sodir bo‘layotgan jarayon (*I am writing my coursework*).
   - **Perfect:** Natijasi hozirgi vaqtga bog‘liq bo‘lgan tugallangan ish (*I have passed the test*).
   - **Perfect Continuous:** O‘tmishda boshlanib, ma’lum vaqt davom etayotgan harakat (*I have been learning English for 3 years*).

Platformamizning **"Ingliz tili"** bo‘limida siz uchun maxsus saralangan **180 ta video darslik** joylashtirilgan!`;
  }

  // 5. Honest off-topic / not-found fallback (never returns a wrong lecture!)
  return `🔎 **«${prompt.trim()}» bo‘yicha darslik bazasida aniq ma’lumot topilmadi**

Men faqat **EduUni** platformasiga yuklangan rasmiy fanlar, **130 ta PDF** ma’ruza va taqdimotlar asosida oflayn (0 token) javob beraman. Noto‘g‘ri ma’lumot chiqarmaslik uchun boshqa mavzuni aralashtirmadim.

Quyidagi yo‘nalishlardan birini tanlab, aniq atama yoki mavzu raqamini yozing:
- 🌿 **Botanika** (30 ta mavzu · 42 ta PDF) — masalan: *«Botanika 26-mavzu ochiq urug‘lilar»*, *«O‘tkazuvchi to‘qimalar»*
- 🧬 **Genetika** (15 ta mavzu · 30 ta PDF) — masalan: *«Genetika 9-mavzu krossingover»*, *«Bombay fenomeni»*
- 🧫 **Mikrobiologiya va virusologiya** (16 ta mavzu · 16 ta PDF) — masalan: *«Sil qo‘zg‘atuvchisi»*, *«Gram-musbat va gram-manfiy farqi»*
- 🧪 **Biokimyo** (15 ta mavzu · 30 ta PDF) — masalan: *«Biokimyo 14-mavzu Krebs sikli»*, *«Vitaminlar»*
- 🌊 **Gidrobiologiya** (11 ta mavzu · 11 ta PDF) — masalan: *«Gidrobiologiya 9-mavzu evtrofikatsiya»*, *«Mikrob halqasi»*
- 🔬 **Biologiya (Milliy sertifikat)** (30 variant · 900 ta savol) — masalan: *«Variant 1 2-savol»*
- 🇬🇧 **Ingliz tili** (180 ta video darslik) — masalan: *«Present Perfect vs Past Simple»*
- 📝 **Kurs ishi va Mustaqil ish** — masalan: *«Mavzu: 'Ekologiya' uchun reja tuzib ber»*`;
}

// Fast-path local answer generator (0 API calls, 0 tokens, runs directly in browser)
export function answerWithLocalTeacher(
  prompt: string,
  category?: string,
  history?: Array<{ role: string; content: string }>,
): string {
  const trimmed = prompt.trim();
  const lower = trimmed.toLowerCase();

  // Instant <1ms fast-path for greetings & polite replies (skip full corpus scan)
  if (
    lower.length < 45 &&
    /^(assalom|salom|privet|hello|hi|hayrli|xayrli|rahmat|raxmat|tashakkur|ok|tushundim|zo‘r|zor)\b/i.test(
      lower,
    )
  ) {
    return generateAcademicGuide(trimmed, category);
  }

  const grounded = synthesizeGroundedFallback(trimmed, category, history);
  if (grounded && grounded.trim().length > 0) {
    return grounded;
  }

  return generateAcademicGuide(trimmed, category);
}
