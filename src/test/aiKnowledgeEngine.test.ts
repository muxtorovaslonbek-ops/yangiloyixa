import { describe, expect, it } from "vitest";
import {
  buildGroundedPromptContext,
  getKnowledgeIndex,
  retrieveKnowledge,
  synthesizeGroundedFallback,
} from "@/lib/aiKnowledgeEngine";

describe("aiKnowledgeEngine (full textbooks, presentations & 103 PDFs)", () => {
  it("indexes all 60 textbook topics, 103 PDFs, 900 biology questions, and 180 English lessons", () => {
    const idx = getKnowledgeIndex();
    expect(idx.topics).toHaveLength(60); // 30 Botanika + 15 Biokimyo + 15 Genetika
    expect(idx.corpusDocCount).toBe(103); // 42 Botanika + 30 Biokimyo + 30 Genetika + 1 Kutubxona
    expect(idx.corpusPageCount).toBeGreaterThan(1900);
    expect(idx.bioQuestions).toHaveLength(900);
    expect(idx.englishLessons).toHaveLength(180);
  });

  it("retrieves Botanika M01-M18 and 19-30 PDFs & lectures accurately", () => {
    const hit1 = retrieveKnowledge("Botanika 23-mavzu lishayniklar tallomi va ko‘payishi");
    expect(hit1.topics[0]?.topic.id).toBe("bot-23");
    expect(hit1.pdfPages.some((p) => p.item.doc.topicId === "bot-23")).toBe(true);

    const hit2 = retrieveKnowledge("Botanika 10-mavzu barg anatomiyasi mezofill");
    expect(hit2.topics[0]?.topic.subject).toBe("Botanika");
    expect(hit2.topics[0]?.topic.order).toBe(10);
  });

  it("retrieves Biokimyo lectures and presentations accurately", () => {
    const answer = synthesizeGroundedFallback("Biokimyo 9-mavzu Mixaelis-Menten tenglamasi Km");
    expect(answer).toContain("Biokimyo");
    expect(answer).toContain("9-mavzu");

    const { contextText } = buildGroundedPromptContext("Krebs sikli va glikoliz energetikasi");
    expect(contextText).toContain("Biokimyo");
    expect(contextText).toContain("Krebs");
    expect(contextText).toContain("Taqdimot");
  });

  it("retrieves Genetika topics along with both Ma’ruza matni and Taqdimot PDFs", () => {
    const hit = retrieveKnowledge("Genetika 9-mavzu krossingover va santimorgan");
    expect(hit.topics[0]?.topic.id).toBe("genetika-9");
    const kinds = new Set(
      hit.pdfPages.filter((p) => p.item.doc.topicId === "genetika-9").map((p) => p.item.doc.kind),
    );
    expect(kinds.has("Ma’ruza matni")).toBe(true);
    expect(kinds.has("Taqdimot")).toBe(true);

    const bombay = synthesizeGroundedFallback("Bombay fenomeni qaysi epistazga kiradi?");
    expect(bombay).toContain("5-mavzu");
    expect(bombay).toContain("Bombay");
  });

  it("retrieves exact Biology Milliy sertifikat variant questions and official answers", () => {
    const answer = synthesizeGroundedFallback("Variant 1 2-savolni tushuntirib ber", "biologiya");
    expect(answer).toContain("Variant 1");
    expect(answer).toContain("2-savol");
    expect(answer).toContain("C");
  });

  it("lists full subject curriculum when asked for all topics", () => {
    const answer = synthesizeGroundedFallback(
      "Genetika fanida nechta mavzu bor va nomlari qaysilar?",
    );
    expect(answer).toContain("15 ta mavzu");
    expect(answer).toContain("15-mavzu");
  });

  it("uses recent conversation history to resolve follow-up questions", () => {
    const hit = retrieveKnowledge("Taqdimotidagi Xolzinger formulasi nima?", "darsliklar", [
      { role: "user", content: "Genetika 14-mavzu odam genetikasi haqida ayt" },
    ]);
    expect(hit.topics[0]?.topic.subject).toBe("Genetika");
    expect(hit.topics[0]?.topic.id).toBe("genetika-14");
  });
});
