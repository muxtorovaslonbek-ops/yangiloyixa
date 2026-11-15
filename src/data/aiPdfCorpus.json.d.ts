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

declare const aiPdfCorpus: AiPdfCorpus;
export default aiPdfCorpus;
