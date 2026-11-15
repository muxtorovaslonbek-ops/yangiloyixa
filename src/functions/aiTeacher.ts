import { createServerFn } from "@tanstack/react-start";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";

export interface ChatMessage {
  id: string;
  role: "user" | "model" | "assistant";
  content: string;
  timestamp: string;
  category?: string;
}

export interface AskAiTeacherInput {
  prompt: string;
  category?: string;
  history?: Array<{ role: string; content: string }>;
}

export interface AskAiTeacherOutput {
  success: boolean;
  response: string;
  source: "gemini" | "knowledge_base";
  error?: string;
}

// Fallback academic guide for general methodology / non-topic questions when offline
function generateAcademicFallback(prompt: string, category?: string): string {
  const p = prompt.toLowerCase();

  // 1. Kurs ishi
  if (
    category === "kurs_ishi" ||
    p.includes("kurs ishi") ||
    p.includes("kursishi") ||
    p.includes("reja") ||
    p.includes("kirish") ||
    p.includes("adabiyotlar") ||
    p.includes("titul")
  ) {
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
   - Shrift: **Times New Roman, 14 pt**.
   - Qatorlar orasi: **1.5 interval**.
   - Hoshiyalar: Chap — 30 mm, O‘ng — 15 mm, Yuqori — 20 mm, Pastki — 20 mm.
   - Xat boshi (abzas): **1.25 sm**.

Platformamizdagi **"Kurs ishi"** bo‘limida avtomatik **Reja Generator** va **Kirish Konstruktori** mavjud bo‘lib, ulardan bepul foydalanishingiz mumkin!`;
  }

  // 2. Mustaqil ish
  if (
    category === "mustaqil_ish" ||
    p.includes("mustaqil ish") ||
    p.includes("referat") ||
    p.includes("esse")
  ) {
    return `📝 **Mustaqil Ishlarni Tayyorlash Mezonlari**

Mustaqil ish — talabaning o‘quv fani doirasida darsdan tashqari bajaradigan mustaqil ijodiy va amaliy faoliyati turi.

1. **Mustaqil ish shakllari:**
   - **Referat:** Mavzu bo‘yicha 10–15 betlik ilmiy tahlil va manbalar sharhi.
   - **Esse:** Muayyan ilmiy yoki amaliy muammo yuzasidan 3–5 betlik shaxsiy fikr va dalillar bayoni.
   - **Taqdimot (PowerPoint):** 12–15 slayd, har bir slaydda kamida 60% vizual (diagramma, rasm, sxema) va 40% lo‘nda matn.
   - **Keys-stadi (Case study):** Haqiqiy korxona yoki amaliy vaziyat tahlili va muammoning innovatsion yechimi.

2. **Baholash mezonlari:**
   - Mavzuning to‘liq ochib berilganligi (30%)
   - Shaxsiy fikr, mustaqil tahlil va kreativlik (30%)
   - Ilmiy adabiyotlar va statistik ma’lumotlarning aniqligi (20%)
   - Rasmiylashtirish va taqdim etish madaniyati (20%)`;
  }

  // 3. O'yinlar & Interaktiv ta'lim
  if (
    category === "oyinlar" ||
    p.includes("o‘yin") ||
    p.includes("oyin") ||
    p.includes("viktorina")
  ) {
    return `🎮 **Interaktiv Bilim O‘yinlari va Gamifikatsiya**

Zamonaviy ta’limda "Gamification" (o‘yinlashtirish) talabaning bilimlarni mustahkamlash va eslab qolish samaradorligini 60–70% ga oshiradi.

1. **Platformamizdagi O‘yin formatlari:**
   - **"Blitz-viktorina":** Har bir savolga 30 soniya vaqt beriladigan tezkor fan savollari.
   - **"Biologiya & Kimyo labirinti":** Reaksiyalar va genetik zanjirlarni to‘g‘ri ketma-ketlikda yig‘ish.
   - **"So‘zlar jangi (English Vocabulary Quest)":** Inglizcha so‘z va iboralarni darajalar bo‘yicha topish.
   - **"Kurs ishi simulyatori":** Reja tuzish va ilmiy atamalarni joy-joyiga qo‘yish o‘yini.`;
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

  // 5. General fallback overview
  return `🎓 **EduUni AI Ustozi — Darsliklar va Fanlar Bazasi**

Savolingizni aniqroq yozsangiz (masalan, fan nomi, mavzu raqami yoki aniq ilmiy atamani kiritsangiz), men platformaga yuklangan barcha rasmiy darsliklar, ma’ruza matnlari va PDF taqdimotlar asosida batafsil javob beraman:

- 🌿 **Botanika:** 30 ta mavzu va 42 ta PDF (1–18-mavzu taqdimotlar, 19–30-mavzu ma’ruza matnlari va taqdimotlar)
- 🧬 **Genetika:** 15 ta mavzu va 30 ta PDF (har bir mavzu uchun ma’ruza matni va taqdimot)
- 🧪 **Biokimyo:** 15 ta mavzu va 30 ta PDF (har bir mavzu uchun ma’ruza matni va taqdimot)
- 🔬 **Biologiya (Milliy sertifikat):** 30 ta rasmiy variant (900 ta savol va javob kalitlari bilan)
- 🇬🇧 **Ingliz tili:** 0 dan C1 gacha 180 ta video darslik
- 📝 **Kurs ishi va Mustaqil ish:** Standart rejalar, GOST talablari va namunalar`;
}

export const askAiTeacherServerFn = createServerFn({ method: "POST" })
  .validator((data: AskAiTeacherInput) => data)
  .handler(async ({ data }): Promise<AskAiTeacherOutput> => {
    const apiKey = process.env["GEMINI_API_KEY"];

    // Dynamically import server knowledge engine so client bundle never includes PDF/test corpora
    const { buildGroundedPromptContext, synthesizeGroundedFallback } =
      await import("@/lib/aiKnowledgeEngine");

    const { contextText } = buildGroundedPromptContext(data.prompt, data.category, data.history);

    const systemInstruction = `Siz 'EduUni' raqamli universitet ta'limi platformasining rasmiy bosh sun'iy intellekt ustozi (AI Teacher)siz.
Siz platformaga yuklangan BARCHA darsliklar, PDF ma'ruza matnlari, PDF taqdimotlar (slaydlar), Milliy sertifikat test variantlari va o'quv qo'llanmalarni to'liq o'qigan mutaxassissiz:
1. BOTANIKA: 30 ta mavzu va 42 ta rasmiy PDF (M01–M18 taqdimotlar hamda 19–30-mavzular uchun ma'ruza matnlari va taqdimotlar).
2. BIOKIMYO: 15 ta mavzu va 30 ta rasmiy PDF (1–15-mavzular uchun ma'ruza matnlari va taqdimotlar).
3. GENETIKA: 15 ta mavzu va 30 ta rasmiy PDF (1–15-mavzular uchun ma'ruza matnlari va taqdimotlar).
4. BIOLOGIYA (MILLIY SERTIFIKAT VA KUTUBXONA): 30 ta rasmiy test varianti (900 ta savol, variantlar va rasmiy javob kaliti) + rasmiy PDF to'plam.
5. INGLIZ TILI: 0 dan C1 gacha 180 ta video darslik ro'yxati va grammatik qoidalar.
6. KURS ISHI, MUSTAQIL ISH, MIKROBIOLOGIYA VA O'YINLAR.

QAT'IY QOIDALAR:
- Avvalo quyida sizga taqdim etilgan [DARSLIK MAVZUSI], [PDF VA TAQDIMOTLARDAN OLINGAN ANIQ MATNLAR] va [MILLIY SERTIFIKAT TEST BAZASI] ma'lumotlariga tayaning. Darslik, ma'ruza matni va taqdimot slaydlaridagi raqamlar, qonunlar, formulalar, tasniflar, jadvallar va atamalarni xatosiz keltiring.
- Javob berayotganda qaysi fan, mavzu va manbadan (masalan: "Genetika · 9-mavzu · Taqdimot" yoki "Biokimyo · 14-mavzu · Ma'ruza matni") foydalanganingizni ko'rsating.
- Agar foydalanuvchi savoli darsliklardagi mavzu yoki testga tegishli bo'lsa, taqdimot va PDF matnlaridagi barcha muhim tafsilotlarni qoldirmasdan, izchil va tushunarli bayon qiling.
- Agar savol kengroq akademik, hisob-kitob (masala yechish) yoki metodik izoh talab qilsa, darslik asoslarini chuqur ilmiy bilim bilan to'ldirib, bosqichma-bosqich tushuntiring.
- Javoblarni chiroyli Markdown formatida (sarlavhalar, ro'yxatlar, qalin atamalar, kerak bo'lsa jadvallar va formulalar) taqdim eting.
- Asosan o'zbek tilida javob bering (agar foydalanuvchi inglizcha so'rasa, inglizcha/o'zbekcha tushuntiring).`;

    // Try Gemini API if key is available
    if (apiKey) {
      try {
        const ai = new GoogleGenAI({
          apiKey,
          httpOptions: {
            headers: {
              "User-Agent": "aistudio-build",
            },
            timeout: 45000,
          },
        });

        // Format conversation history if provided (limit to last 6 turns)
        const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];
        if (data.history && data.history.length > 0) {
          data.history.slice(-6).forEach((item) => {
            contents.push({
              role: item.role === "assistant" || item.role === "model" ? "model" : "user",
              parts: [{ text: item.content }],
            });
          });
        }

        // Attach grounded textbook, presentation & PDF context alongside the student's question
        contents.push({
          role: "user",
          parts: [
            {
              text: `PLATFORMADAGI TEKSHIRILGAN DARSLIK, TAQDIMOT VA PDF MA'LUMOTLARI:\n${contextText}\n\n---\nTanlangan bo‘lim: ${data.category || "Barcha mavzular"}\nTalaba savoli: ${data.prompt}`,
            },
          ],
        });

        const response = await ai.models.generateContent({
          model: "gemini-4-hydrogen",
          contents,
          config: {
            systemInstruction,
            thinkingConfig: {
              thinkingLevel: ThinkingLevel.MEDIUM,
            },
          },
        });

        const textOutput = response.text;
        if (textOutput && textOutput.trim().length > 0) {
          return {
            success: true,
            response: textOutput,
            source: "gemini",
          };
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.warn("Gemini API call failed, falling back to grounded knowledge engine:", msg);
      }
    }

    // Fallback to grounded textbook/PDF knowledge synthesis first, then general guide
    const groundedFallback = synthesizeGroundedFallback(data.prompt, data.category, data.history);
    if (groundedFallback && groundedFallback.trim().length > 0) {
      return {
        success: true,
        response: groundedFallback,
        source: "knowledge_base",
      };
    }

    const fallbackResponse = generateAcademicFallback(data.prompt, data.category);
    return {
      success: true,
      response: fallbackResponse,
      source: "knowledge_base",
    };
  });
