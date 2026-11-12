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

// Fallback high-yield academic response generator when GEMINI_API_KEY is not configured
function generateAcademicFallback(prompt: string, category?: string): string {
  const p = prompt.toLowerCase();

  // 1. Biologiya & Milliy sertifikat
  if (
    category === "biologiya" ||
    p.includes("biologiya") ||
    p.includes("dnk") ||
    p.includes("rnk") ||
    p.includes("genetika") ||
    p.includes("xromosoma") ||
    p.includes("fotosintez") ||
    p.includes("mitoz") ||
    p.includes("meyoz") ||
    p.includes("mendel") ||
    p.includes("hujayra")
  ) {
    if (p.includes("dnk") || p.includes("nukleotid") || p.includes("chagaff")) {
      return `🧬 **DNK va Molekulyar Biologiya Masalasi Bo'yicha Ilmiy Tushuntirish**

1. **Chargaff qoidasi va komplementarlik:**
   - DNK qo'sh zanjirida Adenin (A) har doim Timin (T) bilan 2 ta vodorod bog'i orqali bog'lanadi: \`A = T\`.
   - Guanin (G) har doim Sitozin (S/C) bilan 3 ta vodorod bog'i orqali bog'lanadi: \`G ≡ S\`.
   - Purin asoslari (A + G) yig'indisi har doim Pirimidin asoslari (T + S) yig'indisiga teng: \`A + G = T + S = 50%\`.

2. **Masalalarda qo'llaniladigan asosiy formulalar:**
   - Jami nukleotidlar soni: \`N = 2 × (A + G)\` yoki \`N = 2 × (T + S)\`.
   - Vodorod bog'lari soni: \`H = 2A + 3G\` (chunki A-T o'rtasida 2 ta, G-S o'rtasida 3 ta bog' mavjud).
   - DNK zanjirining uzunligi: Bitta nukleotidning uzunligi \`0.34 nm\` (yoki \`3.4 Å\`) ga teng. Bitta zanjirdagi nukleotidlar soni \`n = N / 2\`. Demak, \`L = (N / 2) × 0.34 nm\`.
   - O'rtacha molekulyar massa: Bitta nukleotidning o'rtacha massasi \`345 a.m.b\` (ba'zi darsliklarda 300). Umumiy massa: \`M = N × 345\`.

3. **Milliy sertifikat DTM tavsiyasi:**
   - Transkripsiya jarayonida DNK ning ma'lumot beruvchi zanjiridan i-RNK sintezlanadi (\`A -> U\`, \`T -> A\`, \`G -> S\`, \`S -> G\`).
   - Bitta aminokislotani 3 ta nukleotid (1 ta kodon / triplet) kodlaydi. 100 ta aminokislotali oqsil uchun \`100 × 3 = 300\` ta nukleotiddan iborat i-RNK kerak bo'ladi.`;
    }

    if (
      p.includes("mendel") ||
      p.includes("chatishtirish") ||
      p.includes("genotip") ||
      p.includes("fenotip")
    ) {
      return `🌱 **Genetika va Mendel Qonuniyatlari Tahlili**

1. **Mendelning 1-qonuni (Bir xillik qonuni):**
   - Gomozigota dominant (AA) va gomozigota retsessiv (aa) organizmlar chatishtirilganda, F1 birinchi bo'g'inda barcha duragaylar bir xil genotip (Aa) va dominant fenotipga ega bo'ladi.

2. **Mendelning 2-qonuni (Belgilarning ajralish qonuni):**
   - F1 duragaylari (Aa × Aa) o'zaro chatishtirilganda, F2 bo'g'inda:
     - **Fenotip bo'yicha ajralish:** \`3 : 1\` (75% dominant, 25% retsessiv).
     - **Genotip bo'yicha ajralish:** \`1 AA : 2 Aa : 1 aa\` (1 : 2 : 1).
     - **Chala dominantlikda:** Fenotip ham, genotip ham \`1 : 2 : 1\` nisbatda ajraladi.

3. **Mendelning 3-qonuni (Mustaqil taqsimlanish qonuni):**
   - Diduragay chatishtirishda (AaBb × AaBb):
     - Fenotip bo'yicha 4 ta sinf hosil bo'ladi: \`9 : 3 : 3 : 1\` (jami 16 ta kombinatsiya).
     - Genotip bo'yicha 9 ta sinf: \`1:2:1:2:4:2:1:2:1\`.`;
    }

    return `🔬 **Biologiya va Milliy Sertifikat Bo'yicha Ilmiy Tavsiyalar**

Milliy sertifikat imtihonida (DTM standarti) biologiya fanidan yuqori ball (A yoki A+) to'plash uchun quyidagi asosiy bo'limlarga alohida e'tibor qarating:

1. **Sitologiya va Hujayra biologiyasi:**
   - Prokariotlar (bakteriyalar, ko'k-yashil suvo'tlar) va Eukariotlar (o'simlik, hayvon, zamburug') hujayralari farqi.
   - Organoidlar: Bir membranali (EPTo'r, Golji majmuasi, lizosoma, vakuola), Ikki membranali (mitoxondriya, plastidalar) va Membranasiz (ribosoma, hujayra markazi).

2. **Energiya almashinuvi (Disimilyatsiya):**
   - 1-bosqich: Tayyorgarlik (oshqozon-ichakda, ATF hosil bo'lmaydi, energiya issiqlik sifatida tarqaladi).
   - 2-bosqich: Glikoliz / Kislorodsiz (sitoplazmada, 1 mol glyukozadan 2 mol sut kislotasi va 2 mol ATF hosil bo'ladi).
   - 3-bosqich: Kislorodli / Nafas olish (mitoxondriyada, 36 mol ATF hosil bo'ladi).
   - Jami: 1 mol glyukozaning to'liq parchalanishidan \`38 mol ATF\` sintezlanadi.

Siz platformamizning **"Biologiya (Milliy sertifikat)"** bo'limida 30 ta to'liq variantni 1 soatlik taymer asosida yechib, o'z bilimlaringizni sinab ko'rishingiz mumkin!`;
  }

  // 2. Kurs ishi
  if (
    category === "kurs_ishi" ||
    p.includes("kurs ishi") ||
    p.includes("kursishi") ||
    p.includes("reja") ||
    p.includes("kirish") ||
    p.includes("adabiyotlar") ||
    p.includes("titul")
  ) {
    return `📚 **Kurs Ishini Tayyorlash Bo'yicha Ilmiy-Metodik Tavsiyalar**

Kurs ishi — talabaning o'quv dasturi bo'yicha mustaqil bajargan dastlabki ilmiy-tadqiqot ishi hisoblanadi.

1. **Rasmiy Reja Strukturasi (Oliy ta'lim standarti):**
   - **Titul varaq** (Muassasa, fakultet, kafedra, mavzu, muallif va ilmiy rahbar)
   - **Mundarija / Reja**
   - **KIRISH** (2-3 bet): Dolzarblik, maqsad, vazifalar, obyekt va predmet, tadqiqot usullari.
   - **I-BOB: Nazariy asoslar** (10-15 bet, 3 ta paragraf: 1.1, 1.2, 1.3) — olimlar fikrlari, tushunchalar va xorijiy tajriba.
   - **II-BOB: Amaliy tahlil va tadqiqot** (10-15 bet, 3 ta paragraf: 2.1, 2.2, 2.3) — statistika, jadvallar, diagrammalar va yechimlar.
   - **XULOSA** (2-3 bet) — boblar bo'yicha xulosalar va 3-5 ta amaliy tavsiya.
   - **FOYDALANILGAN ADABIYOTLAR** (Kamida 15-20 ta ilmiy manba, qonunlar va rasmiy saytlar).
   - **ILOVALAR** (Katta jadvallar, hisob-kitoblar va namunalar).

2. **Texnik Talablar (GOST):**
   - Shrift: **Times New Roman, 14 pt**.
   - Qatorlar orasi: **1.5 interval**.
   - Hoshiyalar: Chap — 30 mm, O'ng — 15 mm, Yuqori — 20 mm, Pastki — 20 mm.
   - Xat boshi (abzas): **1.25 sm**.

Platformamizdagi **"Kurs ishi"** bo'limida avtomatik **Reja Generator** va **Kirish Konstruktori** mavjud bo'lib, ulardan bepul foydalanishingiz mumkin!`;
  }

  // 3. Ingliz tili
  if (
    category === "ingliz_tili" ||
    p.includes("english") ||
    p.includes("ingliz") ||
    p.includes("grammar") ||
    p.includes("tense") ||
    p.includes("cefr") ||
    p.includes("ielts") ||
    p.includes("vocabulary")
  ) {
    return `🇬🇧 **Ingliz Tili (English Language Mastery) Bo'yicha Qo'llanma**

1. **CEFR Darajalar Tizimi:**
   - **A1-A2 (Beginner / Elementary):** Kundalik oddiy frazalar, Present Simple, Past Simple, asosiy lug'at (1000-1500 so'z).
   - **B1-B2 (Intermediate / Upper-Intermediate):** Murakkab zamonlar (Perfect, Continuous), Conditionals (0, 1, 2, 3), Passive Voice, murakkab insholar va suhbatlar.
   - **C1 (Advanced):** Idiomalar, akademik so'z boyligi, ravon nutq va ilmiy maqolalarni tahlil qilish.

2. **Grammatika Oltin Qoidasi (12 ta asosiy zamon):**
   - **Simple:** Doimiy takrorlanuvchi yoki umumiy faktlar (*I study biology*).
   - **Continuous:** Aynan nutq paytida sodir bo'layotgan jarayon (*I am writing my coursework*).
   - **Perfect:** Natijasi hozirgi vaqtga bog'liq bo'lgan tugallangan ish (*I have passed the test*).
   - **Perfect Continuous:** O'tmishda boshlanib, ma'lum vaqt davom etayotgan harakat (*I have been learning English for 3 years*).

3. **Platformadagi Imkoniyatlar:**
   Platformamizning **"Ingliz tili"** bo'limida siz uchun maxsus saralangan **180 ta video darslik**, interaktiv audio player va CEFR bosqichlari joylashtirilgan!`;
  }

  // 4. Darsliklar
  if (
    category === "darsliklar" ||
    p.includes("darslik") ||
    p.includes("fan") ||
    p.includes("botanika") ||
    p.includes("mikrobiologiya") ||
    p.includes("biokimyo")
  ) {
    return `📖 **Universitet Fanlari va Darsliklar Bo'yicha Ma'lumot**

Platformamizda O'zbekiston OTMlarining asosiy tabiiy va ijtimoiy-gumanitar fanlari bo'yicha elektron darsliklar va o'quv materiallari mavjud:

1. **Botanika:** O'simliklar anatomiyasi, morfologiyasi, sistematikasi, yuksak va tuban o'simliklar evolutsiyasi.
2. **Genetika:** Mendel qonuniyatlari, xromosoma nazariyasi, populyatsion genetika, gen muhandisligi va biotexnologiya.
3. **Mikrobiologiya:** Bakteriyalar, viruslar, zamburug'lar fiziologiyasi, antibiotiklar ta'sir mexanizmi va sanoat mikrobiologiyasi.
4. **Biokimyo:** Oqsillar, uglevodlar, lipidlar va nuklein kislotalar almashinuvi, fermentlar kinetikasi va bioenergetika.

Har bir darslik bo'yicha mavzular, test savollari va audio-video tushuntirishlar muntazam yangilanib boradi.`;
  }

  // 5. Mustaqil ish
  if (
    category === "mustaqil_ish" ||
    p.includes("mustaqil ish") ||
    p.includes("referat") ||
    p.includes("taqdimot") ||
    p.includes("esse")
  ) {
    return `📝 **Mustaqil Ishlarni Tayyorlash Mezonlari**

Mustaqil ish — talabaning o'quv fani doirasida darsdan tashqari bajaradigan mustaqil ijodiy va amaliy faoliyati turi.

1. **Mustaqil ish shakllari:**
   - **Referat:** Mavzu bo'yicha 10-15 betlik ilmiy tahlil va manbalar sharhi.
   - **Esse:** Muayyan ilmiy yoki amaliy muammo yuzasidan 3-5 betlik shaxsiy fikr va dalillar bayoni.
   - **Taqdimot (PowerPoint):** 12-15 slayd, har bir slaydda kamida 60% vizual (diagramma, rasm, sxema) va 40% lo'nda matn.
   - **Keys-stadi (Case study):** Haqiqiy korxona yoki amaliy vaziyat tahlili va muammoning innovatsion yechimi.

2. **Baholash mezonlari:**
   - Mavzuning to'liq ochib berilganligi (30%)
   - Shaxsiy fikr, mustaqil tahlil va kreativlik (30%)
   - Ilmiy adabiyotlar va statistik ma'lumotlarning aniqligi (20%)
   - Rasmiylashtirish va taqdim etish madaniyati (20%)`;
  }

  // 6. O'yinlar & Interaktiv ta'lim
  if (
    category === "oyinlar" ||
    p.includes("o‘yin") ||
    p.includes("oyinar") ||
    p.includes("viktorina")
  ) {
    return `🎮 **Interaktiv Bilim O'yinlari va Gamifikatsiya**

Zamonaviy ta'limda "Gamification" (o'yinlashtirish) talabaning bilimlarni mustahkamlash va eslab qolish samaradorligini 60-70% ga oshiradi.

1. **Platformamizdagi O'yin formatlari:**
   - **"Blitz-viktorina":** Har bir savolga 30 soniya vaqt beriladigan tezkor fan savollari.
   - **"Biologiya & Kimyo labirinti":** Reaksiyalar va genetik zanjirlarni to'g'ri ketma-ketlikda yig'ish.
   - **"So'zlar jangi (English Vocabulary Quest)":** Inglizcha so'z va iboralarni darajalar bo'yicha topish.
   - **"Kurs ishi simulyatori":** Reja tuzish va ilmiy atamalarni joy-joyiga qo'yish o'yini.`;
  }

  // General academic response
  return `🎓 **EduUni AI Ustozi — Savolingizga Javob**

Hurmatli talaba! Savolingizni atroflicha o'rganib chiqdim:

**Tahlil va Ilmiy Yondashuv:**
Universitet ta'limida har bir mavzuni o'zlashtirish nazariy asoslarni chuqur tushunish, ilmiy atamalarni to'g'ri qo'llash va ularni amaliyotda sinab ko'rish orqali amalga oshadi. 

Siz murojaat qilgan masala bo'yicha:
1. **Asosiy tushunchalar:** Mavzuning poydevorini tashkil etuvchi ilmiy mezonlarni aniqlashtirib oling.
2. **Qonuniyatlar va manbalar:** O'zbekiston Oliy ta'lim mezonlari va rasmiy darsliklar talablariga tayaning.
3. **Amaliy qo'llash:** Nazariyani topshiriqlar, testlar yoki kurs ishi boblarida ifodalang.

Siz platformamizning istalgan bo'limi — **Darsliklar**, **Kurs ishi**, **Mustaqil ish**, **O'yinlar**, **Ingliz tili** yoki **Biologiya (Milliy sertifikat)** bo'yicha istalgan ilmiy savolni berishingiz mumkin, men sizga batafsil tushuntirib beraman!`;
}

export const askAiTeacherServerFn = createServerFn({ method: "POST" })
  .validator((data: AskAiTeacherInput) => data)
  .handler(async ({ data }): Promise<AskAiTeacherOutput> => {
    const apiKey = process.env.GEMINI_API_KEY;

    const systemInstruction = `Siz 'EduUni' raqamli universitet ta'limi platformasining rasmiy va bosh sun'iy intellekt ustozi (AI Teacher)siz.
Sizning vazifangiz universitet talabalari, abituriyentlar va o'qituvchilarga quyidagi barcha bo'limlar bo'yicha ilmiy, qat'iy, aniq, batafsil va tushunarli javoblar berishdir:

1. DARSLIKLAR (Universitet fanlari: Botanika, Genetika, Mikrobiologiya, Biokimyo, Iqtisodiyot, Huquq, Axborot texnologiyalari, Falsafa va h.k.)
2. KURS ISHI (Kurs ishi qanday yoziladi, mavzu tanlash, 2 bob va 6 paragraflik standart reja tuzish, kirish qismi 5 ta mezoni, amaliy statistika, xulosa, 15-20 ta adabiyotlar ro'yxati, GOST texnik talablari: Times New Roman 14, 1.5 interval, hoshiyalar, antiplagiat)
3. MUSTAQIL ISH (Referat, esse, ilmiy maqola, taqdimotlar va amaliy topshiriqlar mezonlari)
4. O'YINLAR (Interaktiv bilim o'yinlari, viktorinalar, intellektual mantiqiy savollar va ularning yechimlari)
5. INGLIZ TILI (0 dan C1 gacha: CEFR darajalari, 12 ta zamon, grammatika, leksika, speaking frazalari, 180 video darslik mavzulari)
6. BIOLOGIYA — MILLIY SERTIFIKATGA TAYYORGARLIK (DTM standarti, 30 ta variant masalalari, DNK/RNK hisob-kitoblari, xromosomalar, Mendel qonunlari, fotosintez, dissimilyatsiya, botanika, zoologiya, odam anatomiyasi va genetik masalalar)

TALABLAR:
- Javoblarni doimo ilmiy asosda, professional va o'rganuvchiga qulay, chiroyli Markdown formatida (sarlavhalar, ro'yxatlar, qalin shriftlar, formulalar) taqdim eting.
- Javobingiz quruq bo'lmasin, talabaga amaliy misol, formula yoki bosqichma-bosqich yechim ko'rsating.
- Asosan o'zbek tilida javob bering (agar foydalanuvchi ingliz tilini so'rasa yoki inglizcha yozsa, inglizcha/o'zbekcha tushuntiring).`;

    // Try Gemini API if key is available
    if (apiKey) {
      try {
        const ai = new GoogleGenAI({
          apiKey,
          httpOptions: {
            headers: {
              "User-Agent": "aistudio-build",
            },
            timeout: 8000,
          },
        });

        // Format conversation history if provided (limit to last 4 turns for speed)
        const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];
        if (data.history && data.history.length > 0) {
          data.history.slice(-4).forEach((item) => {
            contents.push({
              role: item.role === "assistant" || item.role === "model" ? "model" : "user",
              parts: [{ text: item.content }],
            });
          });
        }

        // Add current user prompt
        contents.push({
          role: "user",
          parts: [
            {
              text: `Kategoriya: ${data.category || "Umumiy ta'lim"}\n\nTalaba savoli: ${data.prompt}`,
            },
          ],
        });

        const response = await ai.models.generateContent({
          model: "gemini-3.8-flash",
          contents,
          config: {
            systemInstruction,
            thinkingConfig: {
              thinkingLevel: ThinkingLevel.LOW,
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
        console.warn("Gemini API call failed, falling back to academic knowledge engine:", msg);
      }
    }

    // Fallback to rich academic knowledge base
    const fallbackResponse = generateAcademicFallback(data.prompt, data.category);
    return {
      success: true,
      response: fallbackResponse,
      source: "knowledge_base",
    };
  });
