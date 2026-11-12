import { describe, expect, it } from "vitest";
import { searchAppContent } from "@/data/searchIndex";

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
});
