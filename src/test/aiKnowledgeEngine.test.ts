import { beforeAll, describe, expect, it } from "vitest";
import aiPdfCorpusRaw from "@/data/aiPdfCorpus.json";
import {
  buildGroundedPromptContext,
  getKnowledgeIndex,
  retrieveKnowledge,
  setPdfCorpus,
  synthesizeGroundedFallback,
  type AiPdfCorpus,
} from "@/lib/aiKnowledgeEngine";
import { askAiTeacher } from "@/services/aiTeacherService";

describe("aiKnowledgeEngine (full textbooks, presentations & 130 PDFs)", () => {
  beforeAll(() => {
    setPdfCorpus(aiPdfCorpusRaw as unknown as AiPdfCorpus);
  });

  it("indexes all 87 textbook topics, 130 PDFs, 900 biology questions, and 180 English lessons", () => {
    const idx = getKnowledgeIndex();
    expect(idx.topics).toHaveLength(87); // 30 Botanika + 15 Biokimyo + 15 Genetika + 16 Mikrobiologiya + 11 Gidrobiologiya
    expect(idx.corpusDocCount).toBe(130); // 42 Botanika + 30 Biokimyo + 30 Genetika + 16 Mikrobiologiya + 11 Gidrobiologiya + 1 Kutubxona
    expect(idx.corpusPageCount).toBeGreaterThan(2250);
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

  it("retrieves Mikrobiologiya topics and all 16 lecture PDFs accurately", () => {
    const hit = retrieveKnowledge("Mikrobiologiya 13-mavzu qoqshol tetanospazmin va Sil-Nilsen");
    expect(hit.topics[0]?.topic.subject).toBe("Mikrobiologiya");
    expect(hit.topics[0]?.topic.id).toBe("mikro-13");
    expect(hit.pdfPages.some((p) => p.item.doc.topicId === "mikro-13")).toBe(true);

    const catalog = synthesizeGroundedFallback("Mikrobiologiya fanida nechta mavzu bor?");
    expect(catalog).toContain("16 ta mavzu");
    expect(catalog).toContain("16-mavzu");
  });

  it("retrieves Gidrobiologiya topics and all 11 lecture PDFs accurately", () => {
    const hit = retrieveKnowledge(
      "Gidrobiologiya 9-mavzu evtrofikatsiya Karlson TSI va biomanipulyatsiya",
    );
    expect(hit.topics[0]?.topic.subject).toBe("Gidrobiologiya");
    expect(hit.topics[0]?.topic.id).toBe("gidro-9");
    expect(hit.pdfPages.some((p) => p.item.doc.topicId === "gidro-9")).toBe(true);

    const catalog = synthesizeGroundedFallback("Gidrobiologiya fanida nechta mavzu bor?");
    expect(catalog).toContain("11 ta mavzu");
    expect(catalog).toContain("11-mavzu");
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

  it("answers comparison, English grammar, and Kurs ishi routing instantly without API calls", () => {
    const gram = synthesizeGroundedFallback(
      "Mikrobiologiyada gram-musbat va gram-manfiy bakteriyalar farqi",
      "darsliklar",
    );
    expect(gram).toContain("Gram-musbat");
    expect(gram).toContain("Peptidoglikan");

    const eng = synthesizeGroundedFallback(
      "Present Perfect va Past Simple o'rtasidagi asosiy farqlar",
      "ingliz_tili",
    );
    expect(eng).toContain("Present Perfect");
    expect(eng).toContain("Past Simple");

    const kurs = synthesizeGroundedFallback(
      "Universitetda kurs ishini qanday a'lo bahoga yozish mumkin?",
      "all",
    );
    expect(kurs).toBe("");
  });

  it("runs askAiTeacher 100% locally with zero external API calls, zero server functions, and instant speed", async () => {
    const start = performance.now();
    const greeting = await askAiTeacher({ prompt: "Salom", category: "all" });
    expect(greeting.success).toBe(true);
    expect(greeting.source).toBe("knowledge_base");
    expect(greeting.response).toContain("0 token");

    const kursRes = await askAiTeacher({
      prompt: "Mavzu: 'Tijorat banklarida risklarni boshqarish' uchun 2 bobli reja tuzib ber",
      category: "kurs_ishi",
    });
    expect(kursRes.success).toBe(true);
    expect(kursRes.response).toContain("Tijorat banklarida risklarni boshqarish");
    expect(kursRes.response).toContain("I-BOB");

    const mikroRes = await askAiTeacher({
      prompt: "Mikrobiologiya 13-mavzu qoqshol",
      category: "darsliklar",
    });
    expect(mikroRes.success).toBe(true);
    expect(mikroRes.response).toContain("13-mavzu");
    expect(mikroRes.response).toContain("Biriktirilgan PDF");

    const elapsedMs = performance.now() - start;
    expect(elapsedMs).toBeLessThan(1000);
  });

  it("returns accurate topic/card matches without cross-topic mismatch, history poisoning, or off-topic leaks", async () => {
    // 1. Word-boundary precision: "sil" must match Sil qo'zg'atuvchisi (mikro-13), NEVER "tanosil" (mikro-16)
    const sil = await askAiTeacher({ prompt: "Sil kasalligi qo'zg'atuvchisi", category: "all" });
    expect(sil.response).toContain("13-mavzu");
    expect(sil.response).toContain("Sil qo‘zg‘atuvchisi");

    // 2. Compound title precision: "Ochiq urug'li o'simliklar" must match bot-26 (Ochiq urug'lilar), NOT bot-15 (Yopiq urug'li)
    const ochiq = await askAiTeacher({ prompt: "Ochiq urug'li o'simliklar", category: "all" });
    expect(ochiq.response).toContain("26-mavzu");
    expect(ochiq.response).toContain("Ochiq urug‘lilar");

    // 3. Core cross-topic cards: Fotosintez, Mitoz/Meyoz, Viruslar vs Bakteriyalar, ATF, Qon aylanish
    const foto = await askAiTeacher({
      prompt: "Fotosintezning yorug'lik va qorong'ulik bosqichlari tahlili",
      category: "all",
    });
    expect(foto.response).toContain("Kalvin sikli");
    expect(foto.response).toContain("tilakoid");

    const mitoz = await askAiTeacher({ prompt: "Mitoz va meyoz farqi", category: "all" });
    expect(mitoz.response).toContain("Mitoz");
    expect(mitoz.response).toContain("Meyoz");

    const virus = await askAiTeacher({ prompt: "Viruslar va bakteriyalar farqi", category: "all" });
    expect(virus.response).toContain("Hujayrasiz");
    expect(virus.response).toContain("Prokariot");

    const qon = await askAiTeacher({
      prompt: "Odam anatomiyasi: Katta va kichik qon aylanish doiralari harakati",
      category: "biologiya",
    });
    expect(qon.response).toContain("Chap qorincha");
    expect(qon.response).toContain("O‘ng qorincha");

    // 4. Uzbek apostrophe safety in Kurs ishi GOST prompt (must NOT treat ro'yxatini...bo'yicha as quoted topic)
    const gost = await askAiTeacher({
      prompt: "Foydalanilgan adabiyotlar ro'yxatini GOST talabi bo'yicha rasmiylashtirish",
      category: "kurs_ishi",
    });
    expect(gost.response).toContain("GOST");
    expect(gost.response).not.toContain("yxatini GOST talabi bo");

    // 5. Anti-history-poisoning: switching subjects after greeting or Botanika must NOT bias toward Botanika
    const krebs = await askAiTeacher({
      prompt: "Krebs sikli nima?",
      category: "all",
      history: [
        { role: "user", content: "Salom" },
        { role: "assistant", content: "Botanika Genetika Mikrobiologiya Biokimyo" },
      ],
    });
    expect(krebs.response).toContain("Biokimyo");
    expect(krebs.response).toContain("14-mavzu");

    // 6. Strict off-topic rejection: unrelated question must NOT dump a random lecture
    const offTopic = await askAiTeacher({ prompt: "O'zbekiston poytaxti qayer?", category: "all" });
    expect(offTopic.response).toContain("topilmadi");
    expect(offTopic.response).not.toContain("📖 **Botanika");
  });
});
