import { describe, expect, it } from "vitest";
import { searchAppContent } from "@/data/searchIndex";
import { BOTANIKA_TOPICS } from "@/data/botanikaTopics";

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

  it("finds Botanika sequential topics (1 through 24)", () => {
    const results = searchAppContent("lishayniklar");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((r) => r.id === "bot-23" && r.category === "Darsliklar")).toBe(true);
  });

  it("provides 24 sequentially numbered Botanika topics with matched PDFs for 1-18", () => {
    expect(BOTANIKA_TOPICS).toHaveLength(24);
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
      }
    });
  });
});
