import { createServerFn } from "@tanstack/react-start";

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

// Local instant academic guide (zero API quota usage)
function generateAcademicGuide(prompt: string, category?: string): string {
  const p = prompt.toLowerCase().trim();

  // Greetings & polite responses
  if (/^(assalom|salom|privet|hello|hi|hayrli|xayrli)\b/i.test(p) && p.length < 45) {
    return `Assalomu alaykum! 👋 Men **EduUni Tezkor AI Ustozi**man — hech qanday limit sarflamasdan, soniyalar ichida platformadagi barcha rasmiy darsliklar va **119 ta PDF** asosida javob beraman.

Quyidagi fanlar bo‘yicha istalgan mavzu, atama, formula yoki test savolini yozing:
- 🌿 **Botanika** (30 ta mavzu · 42 ta PDF)
- 🧬 **Genetika** (15 ta mavzu · 30 ta PDF)
- 🧫 **Mikrobiologiya va virusologiya** (16 ta mavzu · 16 ta PDF)
- 🧪 **Biokimyo** (15 ta mavzu · 30 ta PDF)
- 🔬 **Biologiya Milliy sertifikat** (30 variant · 900 ta savol)
- 🇬🇧 **Ingliz tili** (180 ta video darslik · 0 dan C1 gacha)
- 📝 **Kurs ishi va Mustaqil ish** (reja, kirish, GOST talablari)`;
  }

  if (/^(rahmat|raxmat|tashakkur|ok|tushundim|zo‘r|zor)\b/i.test(p) && p.length < 45) {
    return `Arzimaydi! O‘qishingizda ulkan muvaffaqiyatlar tilayman. 🎓 Yana qaysi fan, mavzu yoki test savoli bo‘yicha yordam kerak bo‘lsa, bemalol yozing!`;
  }

  // 1. Kurs ishi (with dynamic custom 2-bobli plan if a topic in quotes is provided)
  if (
    category === "kurs_ishi" ||
    p.includes("kurs ishi") ||
    p.includes("kursishi") ||
    p.includes("reja") ||
    p.includes("kirish") ||
    p.includes("adabiyotlar") ||
    p.includes("titul") ||
    p.includes("gost")
  ) {
    const quotedTopic = prompt.match(/['"«“]([^'"»”]{4,120})['"»”]/)?.[1]?.trim();
    if (quotedTopic) {
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
    p.includes("esse") ||
    p.includes("plagiat")
  ) {
    return `📝 **Mustaqil Ishlarni Tayyorlash Mezonlari**

Mustaqil ish — talabaning o‘quv fani doirasida darsdan tashqari bajaradigan mustaqil ijodiy va amaliy faoliyati turi.

1. **Mustaqil ish shakllari:**
   - **Referat:** Mavzu bo‘yicha 10–15 betlik ilmiy tahlil va manbalar sharhi.
   - **Esse:** Muayyan ilmiy yoki amaliy muammo yuzasidan 3–5 betlik shaxsiy fikr va dalillar bayoni.
   - **Taqdimot (PowerPoint):** 12–15 slayd, har bir slaydda kamida 60% vizual (diagramma, rasm, sxema) va 40% lo‘nda matn.
   - **Keys-stadi (Case study):** Haqiqiy korxona yoki amaliy vaziyat tahlili va muammoning innovatsion yechimi.

2. **Antiplagiat va o‘ziga xoslikni oshirish qoidalari:**
   - Manbalarni to‘g‘ridan-to‘g‘ri ko‘chirmasdan, o‘z so‘zingiz bilan qayta bayon qiling (parafraz).
   - Har bir iqtibos va statistik raqamga kvadrat qavsda manba raqamini `[1]` ko‘rsating.
   - O‘zingiz tuzgan qiyosiy jadval va shaxsiy xulosa qo‘shing (kamida 70–75% originallik).

3. **Baholash mezonlari:**
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
    p.includes("viktorina") ||
    p.includes("zakovat")
  ) {
    return `🎮 **Interaktiv Bilim O‘yinlari va Intellektual Viktorina**

Mana talabalar uchun tezkor 5 ta biologik-mantiqiy blitz-savol (javoblari bilan):

1. **Savol:** Qaysi bakteriya guruhi peptidoglikanli hujayra devoriga umuman ega emasligi sababli penitsillinga 100% tabiiy chidamli?
   - **Javob:** *Mikoplazmalar (Mycoplasma va Ureaplasma)* — Mikrobiologiya 16-mavzu.
2. **Savol:** 1 mol glyukoza aerob nafas olishda 38 ATF bersa, spirtli yoki sut kislotali bijg‘ishda nechta ATF hosil qiladi?
   - **Javob:** *Atigi 2 ATF* (substrat fosforillanishi) — Biokimyo 14-mavzu / Mikrobiologiya 5-mavzu.
3. **Savol:** Nima uchun qon guruhi tekshirilganda ota-onasi A va B bo‘lgan oilada O(I) guruhli bola tug‘ilishi hamda «Bombay fenomeni» kuzatilishi mumkin?
   - **Javob:** Ota-ona geterozigota ($I^A i_0 \\times I^B i_0$) bo‘lishi yoki *hh* retsessiv epistazi (Bombay fenomeni) tufayli H-antigen sintezlanmasligi mumkin — Genetika 4–5-mavzular.
4. **Savol:** Qaysi qizil suvo‘tlardan mikrobiologik oziqa muhitlarni qotiruvchi agar-agar olinadi?
   - **Javob:** *Gelidium, Gracilaria va Ahnfeltia* — Botanika 21-mavzu / Mikrobiologiya 4-mavzu.
5. **Savol:** Fermentativ reaksiyada tezlik maksimal tezlikning yarmiga ($V_{max}/2$) teng bo‘lgandagi substrat konsentratsiyasi nima deb ataladi?
   - **Javob:** *Mixaelis doimiysi ($K_m$)* — Biokimyo 9-mavzu.`;
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
  return `🎓 **EduUni AI Ustozi — Limitsiz Tezkor Darslik va PDF Bazasi**

Savolingizni biroz aniqroq yozsangiz (masalan, fan nomi, mavzu raqami yoki aniq ilmiy atamani kiritsangiz), men hech qanday limit sarflamasdan platformaga yuklangan barcha rasmiy darsliklar, ma’ruza matnlari va PDF taqdimotlar asosida darhol javob beraman:

- 🌿 **Botanika:** 30 ta mavzu va 42 ta PDF (1–18-mavzu taqdimotlar, 19–30-mavzu ma’ruza matnlari va taqdimotlar)
- 🧬 **Genetika:** 15 ta mavzu va 30 ta PDF (har bir mavzu uchun ma’ruza matni va taqdimot)
- 🧫 **Mikrobiologiya va virusologiya:** 16 ta mavzu va 16 ta PDF (1–16-mavzular uchun to‘liq ma’ruza matnlari)
- 🧪 **Biokimyo:** 15 ta mavzu va 30 ta PDF (har bir mavzu uchun ma’ruza matni va taqdimot)
- 🔬 **Biologiya (Milliy sertifikat):** 30 ta rasmiy variant (900 ta savol va javob kalitlari bilan)
- 🇬🇧 **Ingliz tili:** 0 dan C1 gacha 180 ta video darslik
- 📝 **Kurs ishi va Mustaqil ish:** Standart rejalar, GOST talablari va namunalar

_Namuna savollar: «Mikrobiologiya 13-mavzu qoqshol», «Genetika 9-mavzu krossingover», «Biokimyo 14-mavzu Krebs sikli», «Variant 1 2-savol»._`;
}

export const askAiTeacherServerFn = createServerFn({ method: "POST" })
  .validator((data: AskAiTeacherInput) => data)
  .handler(async ({ data }): Promise<AskAiTeacherOutput> => {
    // Purely local, zero-quota, instant grounded knowledge engine (no external LLM API calls)
    const { synthesizeGroundedFallback } = await import("@/lib/aiKnowledgeEngine");

    const groundedResponse = synthesizeGroundedFallback(data.prompt, data.category, data.history);
    if (groundedResponse && groundedResponse.trim().length > 0) {
      return {
        success: true,
        response: groundedResponse,
        source: "knowledge_base",
      };
    }

    const guideResponse = generateAcademicGuide(data.prompt, data.category);
    return {
      success: true,
      response: guideResponse,
      source: "knowledge_base",
    };
  });
