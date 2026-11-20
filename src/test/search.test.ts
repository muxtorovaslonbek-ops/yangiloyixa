import { describe, expect, it } from "vitest";
import { searchAppContent } from "@/data/searchIndex";
import { BOTANIKA_TOPICS } from "@/data/botanikaTopics";
import { BIOKIMYO_TOPICS } from "@/data/biokimyoTopics";
import { GENETIKA_TOPICS } from "@/data/genetikaTopics";
import { MIKROBIOLOGIYA_TOPICS } from "@/data/mikrobiologiyaTopics";

describe("searchAppContent", () => {
  it("returns empty array for empty query", () => {
    expect(searchAppContent("")).toEqual([]);
    expect(searchAppContent("   ")).toEqual([]);
  });

  it("finds English video lessons by keyword", () => {
    const results = searchAppContent("Alphabet");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((r) => r.category === "Ingliz tili")).toBe(true);
  });

  it("finds Biology certification variants and questions", () => {
    const results = searchAppContent("Variant 1");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((r) => r.category === "Biologiya")).toBe(true);
  });

  it("finds Kurs ishi guide and generator", () => {
    const results = searchAppContent("kurs ishi reja");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((r) => r.category === "Kurs ishi")).toBe(true);
  });

  it("finds AI Teacher section", () => {
    const results = searchAppContent("AI Teacher");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((r) => r.category === "AI Teacher")).toBe(true);
  });

  it("finds Mustaqil ish templates and guides", () => {
    const results = searchAppContent("mustaqil ish referat");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((r) => r.category === "Mustaqil ish" && r.targetActiveTab === 3)).toBe(
      true,
    );
  });

  it("finds Botanika sequential topics (1 through 30)", () => {
    const results = searchAppContent("lishayniklar");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((r) => r.id === "bot-23" && r.category === "Darsliklar")).toBe(true);

    const angiospermResults = searchAppContent("fitotsenoz");
    expect(angiospermResults.some((r) => r.id === "bot-30" && r.category === "Darsliklar")).toBe(
      true,
    );
  });

  it("finds Kutubxona library section and maps to tab 4", () => {
    const results = searchAppContent("kutubxona");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((r) => r.category === "Kutubxona" && r.targetActiveTab === 4)).toBe(true);
  });

  it("provides 30 sequentially numbered Botanika topics with matched PDFs for all topics", () => {
    expect(BOTANIKA_TOPICS).toHaveLength(30);
    BOTANIKA_TOPICS.forEach((topic, idx) => {
      expect(topic.order).toBe(idx + 1);
      expect(topic.topicLabel).toBe(`${idx + 1}-mavzu`);
      expect(topic.overview.length).toBeGreaterThan(100);
      expect(topic.sections.length).toBeGreaterThanOrEqual(3);
      expect(topic.comparisonTable.rows.length).toBeGreaterThanOrEqual(3);
      expect(topic.keyConcepts.length).toBeGreaterThanOrEqual(4);
      expect(topic.selfCheckQuestions.length).toBeGreaterThanOrEqual(3);
      if (idx < 18) {
        expect(topic.pdfUrl).toMatch(/^\/assets\/aistudio\/M\d{2}_.*\.pdf$/);
      } else {
        expect(topic.pdfDocuments).toBeDefined();
        expect(topic.pdfDocuments).toHaveLength(2);
        topic.pdfDocuments?.forEach((doc) => {
          expect(doc.url).toMatch(/^\/assets\/aistudio\/\d{2}[-_]mavzu_.*\.pdf$/);
        });
      }
    });
  });

  it("finds Biokimyo sequential topics (1 through 15) and verifies matched PDFs", () => {
    const krebsResults = searchAppContent("Krebs");
    expect(krebsResults.some((r) => r.id === "biokimyo-14" && r.category === "Darsliklar")).toBe(
      true,
    );

    const fermentResults = searchAppContent("Mixaelis");
    expect(fermentResults.some((r) => r.id === "biokimyo-9" && r.category === "Darsliklar")).toBe(
      true,
    );

    expect(BIOKIMYO_TOPICS).toHaveLength(15);
    BIOKIMYO_TOPICS.forEach((topic, idx) => {
      expect(topic.order).toBe(idx + 1);
      expect(topic.topicLabel).toBe(`${idx + 1}-mavzu`);
      expect(topic.overview.length).toBeGreaterThan(100);
      expect(topic.sections.length).toBeGreaterThanOrEqual(3);
      expect(topic.comparisonTable.rows.length).toBeGreaterThanOrEqual(3);
      expect(topic.keyConcepts.length).toBeGreaterThanOrEqual(4);
      expect(topic.selfCheckQuestions.length).toBeGreaterThanOrEqual(3);
      expect(topic.pdfUrl).toMatch(/^\/assets\/aistudio\/\d{2}-mavzu_.*\.pdf$/);
      expect(topic.pdfDocuments).toBeDefined();
      expect(topic.pdfDocuments).toHaveLength(2);
      expect(topic.pdfDocuments?.[0]?.kind).toBe("Ma’ruza matni");
      expect(topic.pdfDocuments?.[1]?.kind).toBe("Taqdimot");
      topic.pdfDocuments?.forEach((doc) => {
        expect(doc.url).toMatch(/^\/assets\/aistudio\/\d{2}-mavzu_.*\.pdf$/);
      });
    });
  });

  it("finds Genetika sequential topics (1 through 15) and verifies matched PDFs", () => {
    const hardyResults = searchAppContent("Xardi");
    expect(hardyResults.some((r) => r.id === "genetika-13" && r.category === "Darsliklar")).toBe(
      true,
    );

    const crossingResults = searchAppContent("krossingover");
    expect(crossingResults.some((r) => r.id === "genetika-9" && r.category === "Darsliklar")).toBe(
      true,
    );

    expect(GENETIKA_TOPICS).toHaveLength(15);
    GENETIKA_TOPICS.forEach((topic, idx) => {
      expect(topic.order).toBe(idx + 1);
      expect(topic.topicLabel).toBe(`${idx + 1}-mavzu`);
      expect(topic.overview.length).toBeGreaterThan(100);
      expect(topic.sections.length).toBeGreaterThanOrEqual(3);
      expect(topic.comparisonTable.rows.length).toBeGreaterThanOrEqual(3);
      expect(topic.keyConcepts.length).toBeGreaterThanOrEqual(4);
      expect(topic.selfCheckQuestions.length).toBeGreaterThanOrEqual(3);
      expect(topic.pdfUrl).toMatch(/^\/assets\/aistudio\/\d{2}-mavzu_.*\.pdf$/);
      expect(topic.pdfDocuments).toBeDefined();
      expect(topic.pdfDocuments).toHaveLength(2);
      expect(topic.pdfDocuments?.[0]?.kind).toBe("Ma’ruza matni");
      expect(topic.pdfDocuments?.[1]?.kind).toBe("Taqdimot");
      topic.pdfDocuments?.forEach((doc) => {
        expect(doc.url).toMatch(/^\/assets\/aistudio\/\d{2}-mavzu_.*\.pdf$/);
      });
    });
  });

  it("finds Mikrobiologiya sequential topics (1 through 16) and verifies matched PDFs", () => {
    const botulizmResults = searchAppContent("botulotoksin");
    expect(botulizmResults.some((r) => r.id === "mikro-14" && r.category === "Darsliklar")).toBe(
      true,
    );

    const fagResults = searchAppContent("bakteriofag");
    expect(fagResults.some((r) => r.id === "mikro-6" && r.category === "Darsliklar")).toBe(true);

    expect(MIKROBIOLOGIYA_TOPICS).toHaveLength(16);
    MIKROBIOLOGIYA_TOPICS.forEach((topic, idx) => {
      expect(topic.order).toBe(idx + 1);
      expect(topic.topicLabel).toBe(`${idx + 1}-mavzu`);
      expect(topic.overview.length).toBeGreaterThan(100);
      expect(topic.sections.length).toBeGreaterThanOrEqual(3);
      expect(topic.comparisonTable.rows.length).toBeGreaterThanOrEqual(3);
      expect(topic.keyConcepts.length).toBeGreaterThanOrEqual(4);
      expect(topic.selfCheckQuestions.length).toBeGreaterThanOrEqual(3);
      expect(topic.pdfUrl).toMatch(/^\/assets\/aistudio\/\d{2}-mavzu_.*\.pdf$/);
      expect(topic.pdfDocuments).toBeDefined();
      expect(topic.pdfDocuments?.length).toBeGreaterThanOrEqual(1);
      expect(topic.pdfDocuments?.[0]?.kind).toBe("Ma’ruza matni");
      topic.pdfDocuments?.forEach((doc) => {
        expect(doc.url).toMatch(/^\/assets\/aistudio\/\d{2}-mavzu_.*\.pdf$/);
      });
    });
  });
});
