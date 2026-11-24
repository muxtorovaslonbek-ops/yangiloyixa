import { BIOTEXNOLOGIYA_TOPICS_PART_1 } from "./biotexnologiyaTopicsPart1";
import { BIOTEXNOLOGIYA_TOPICS_PART_2 } from "./biotexnologiyaTopicsPart2";

export interface BiotexnologiyaTopicSection {
  heading: string;
  content: string;
  highlights?: string[];
}

export interface BiotexnologiyaTopicTable {
  title: string;
  columns: string[];
  rows: string[][];
}

export interface BiotexnologiyaGlossaryItem {
  term: string;
  definition: string;
}

export interface BiotexnologiyaSelfCheck {
  question: string;
  answer: string;
}

export interface BiotexnologiyaPdfDocument {
  title: string;
  url: string;
  kind?: "Ma’ruza matni" | "Taqdimot";
}

export interface BiotexnologiyaTopic {
  id: string;
  order: number;
  code: string;
  topicLabel: string;
  module:
    | "I bo‘lim: Biotexnologiya asoslari va gen muhandisligi"
    | "II bo‘lim: Mikrobiologik sintez, fermentlar va bioprotsesslar"
    | "III bo‘lim: Amaliy biotexnologiya va soha kelajagi";
  title: string;
  syllabusPoints: string[];
  studyNotes: string;
  overview: string;
  sections: BiotexnologiyaTopicSection[];
  comparisonTable: BiotexnologiyaTopicTable;
  keyConcepts: BiotexnologiyaGlossaryItem[];
  selfCheckQuestions: BiotexnologiyaSelfCheck[];
  keyTerms: string[];
  references: string;
  pdfUrl?: string;
  pdfTitle?: string;
  pdfDocuments?: BiotexnologiyaPdfDocument[];
}

export const BIOTEXNOLOGIYA_TOPICS: BiotexnologiyaTopic[] = [
  ...BIOTEXNOLOGIYA_TOPICS_PART_1,
  ...BIOTEXNOLOGIYA_TOPICS_PART_2,
];
