import { ENGLISH_VIDEO_LESSONS } from "./englishVideoLessons";
import { BIOLOGY_VARIANTS } from "./biologyVariantsData";
import { BOTANIKA_TOPICS } from "./botanikaTopics";

export interface SearchResultItem {
  id: string;
  title: string;
  description: string;
  category:
    | "Darsliklar"
    | "Kurs ishi"
    | "Mustaqil ish"
    | "Kutubxona"
    | "Ingliz tili"
    | "Biologiya"
    | "AI Teacher";
  targetActiveTab: number; // 0: Home, 1: Darsliklar, 2: Kurs ishi, 3: Mustaqil ish, 4: Kutubxona, 5: Ingliz tili, 6: Biologiya, 7: AI Teacher
  metadata?: string;
  badge?: string;
  targetVideoId?: number;
  targetVariantId?: number;
}

export const SEARCH_DIRECTORY: SearchResultItem[] = [
  // 1. Darsliklar & Kurslar
  {
    id: "course-botanika",
    title: "Botanika darsligi va kurslari",
    description: `O‘simliklar anatomiyasi, morfologiyasi, to‘qimalar va sistematika bo‘yicha ${BOTANIKA_TOPICS.length} ta mavzu.`,
    category: "Darsliklar",
    targetActiveTab: 1,
    badge: `${BOTANIKA_TOPICS.length} ta mavzu`,
  },
  {
    id: "course-genetika",
    title: "Genetika darsligi va masalalar",
    description:
      "Mendel qonuniyatlari, xromosomalar, irsiyat turlari va seleksiya bo‘yicha 18 ta mavzu.",
    category: "Darsliklar",
    targetActiveTab: 1,
    badge: "18 ta mavzu",
  },
  {
    id: "course-mikro",
    title: "Mikrobiologiya fani",
    description:
      "Bakteriyalar, viruslar, zamburug'lar fiziologiyasi va antibiotiklar bo‘yicha 20 ta mavzu.",
    category: "Darsliklar",
    targetActiveTab: 1,
    badge: "20 ta mavzu",
  },
  {
    id: "course-biokimyo",
    title: "Biokimyo darsligi",
    description:
      "Oqsillar, nuklein kislotalar, fermentlar kinetikasi va ATF bioenergetikasi bo‘yicha 26 ta mavzu.",
    category: "Darsliklar",
    targetActiveTab: 1,
    badge: "26 ta mavzu",
  },

  // 2. Kurs ishi bo'limi
  {
    id: "kurs-yo-riqnoma",
    title: "Kurs ishi qanday yoziladi? (6 ta bosqich)",
    description:
      "Mavzu tanlashdan himoyagacha bo'lgan to'liq bosqichma-bosqich qo'llanma va rasmiy GOST standarti.",
    category: "Kurs ishi",
    targetActiveTab: 2,
    badge: "Yo'riqnoma",
  },
  {
    id: "kurs-reja",
    title: "Interaktiv Reja Konstruktori (Mundarija)",
    description:
      "Oliy ta'lim standarti bo'yicha 2 bob va 6 paragraflik kurs ishi rejasini avtomatik tuzish va yuklab olish.",
    category: "Kurs ishi",
    targetActiveTab: 2,
    badge: "Generator",
  },
  {
    id: "kurs-kirish",
    title: "Kirish qismi konstruktori",
    description:
      "Dolzarblik, maqsad, vazifalar, obyekt, predmet va tadqiqot usullarini kiritish va tayyor matn olish.",
    category: "Kurs ishi",
    targetActiveTab: 2,
    badge: "Shablon",
  },
  {
    id: "kurs-titul",
    title: "Titul varaq namunasi va texnik talablar",
    description:
      "Times New Roman 14 pt, 1.5 interval, varaq hoshiyalari (30mm, 15mm, 20mm) va rasmiy titul varaq.",
    category: "Kurs ishi",
    targetActiveTab: 2,
    badge: "GOST talab",
  },
  {
    id: "kurs-checklist",
    title: "Kurs ishi tayyorgarlik checklisti (10 ta mezon)",
    description:
      "Topshirishdan avval tekshirish: hajm, reja, adabiyotlar soni, jadvallar va antiplagiat darajasi.",
    category: "Kurs ishi",
    targetActiveTab: 2,
    badge: "Tekshiruv",
  },

  // 3. Mustaqil ish
  {
    id: "mustaqil-referat",
    title: "Mustaqil ish: Referat va esse yozish",
    description:
      "10-15 betlik referat, ilmiy esse va keys-stadi tayyorlash mezonlari va tayyor namunalar.",
    category: "Mustaqil ish",
    targetActiveTab: 3,
    badge: "Namunalar",
  },
  {
    id: "mustaqil-taqdimot",
    title: "Mustaqil ish: Slayd va taqdimotlar tayyorlash",
    description:
      "12-15 slayddan iborat taqdimotlar, vizual dizayn qoidalari va himoya qilish sirlari.",
    category: "Mustaqil ish",
    targetActiveTab: 3,
    badge: "Taqdimot",
  },

  // 4. Kutubxona
  {
    id: "kutubxona-main",
    title: "Elektron kutubxona va PDF manbalar",
    description:
      "Biologiya Milliy sertifikat 30 ta rasmiy test varianti PDF to‘plami va elektron o‘quv manbalari.",
    category: "Kutubxona",
    targetActiveTab: 4,
    badge: "Elektron kitoblar",
  },

  // 5. Ingliz tili (English)
  {
    id: "english-main",
    title: "Ingliz tili: 0 dan C1 gacha to'liq kurs",
    description:
      "180 ta video darslik, YouTube player, interaktiv audio player va CEFR darajalari (A1 dan C1 gacha).",
    category: "Ingliz tili",
    targetActiveTab: 5,
    badge: "180 video dars",
  },
  {
    id: "english-grammar",
    title: "Ingliz tili grammatikasi va zamonlar",
    description:
      "12 ta zamon (Present, Past, Future), Conditionals (0, 1, 2, 3), Passive Voice va modal fe'llar.",
    category: "Ingliz tili",
    targetActiveTab: 5,
    badge: "Grammar",
  },
  {
    id: "english-cefr",
    title: "CEFR va IELTS tayyorgarligi",
    description:
      "Akademik so'z boyligi, speaking frazalari, listening mashqlari va grammatik testlar.",
    category: "Ingliz tili",
    targetActiveTab: 5,
    badge: "CEFR A1-C1",
  },

  // 6. Biologiya (Milliy sertifikat)
  {
    id: "bio-sertifikat-main",
    title: "Biologiya: Milliy sertifikatga tayyorgarlik",
    description:
      "DTM standarti bo'yicha 30 ta rasmiy variant, 900 ta savol va real 1 soatlik (60 daqiqa) taymerli imtihon.",
    category: "Biologiya",
    targetActiveTab: 6,
    badge: "30 ta variant",
  },
  {
    id: "bio-variant-1",
    title: "Biologiya Milliy sertifikat — Variant 1 dan 10 gacha",
    description:
      "Sitologiya, hujayra membranasi, dissimilyatsiya, fotosintez va genetika bo'yicha test savollari.",
    category: "Biologiya",
    targetActiveTab: 6,
    badge: "Testlar",
  },
  {
    id: "bio-variant-2",
    title: "Biologiya Milliy sertifikat — Variant 11 dan 20 gacha",
    description:
      "DNK masalalari, Chargaff qoidasi, oqsil biosintezi, xromosomalar va botanika testlari.",
    category: "Biologiya",
    targetActiveTab: 6,
    badge: "Testlar",
  },
  {
    id: "bio-variant-3",
    title: "Biologiya Milliy sertifikat — Variant 21 dan 30 gacha",
    description:
      "Zoologiya, odam anatomiyasi va fiziologiyasi, qon aylanish sistemasi, evolutsiya va ekologiya.",
    category: "Biologiya",
    targetActiveTab: 6,
    badge: "Testlar",
  },

  // 7. AI Teacher
  {
    id: "ai-teacher-main",
    title: "AI Teacher (Sun'iy Intellekt Ustozi)",
    description:
      "Universitet darsliklari, kurs ishi, mustaqil ish, ingliz tili va biologiya bo'yicha barcha ilmiy savollarga tezkor javob.",
    category: "AI Teacher",
    targetActiveTab: 7,
    badge: "Gemini AI",
  },
];

export function searchAppContent(query: string): SearchResultItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const tokens = q.split(/\s+/).filter(Boolean);

  // 1. Core Directory Matches
  const directoryMatches = SEARCH_DIRECTORY.filter((item) => {
    const combined =
      `${item.title} ${item.description} ${item.category} ${item.badge || ""}`.toLowerCase();
    return tokens.every((token) => combined.includes(token));
  });

  // 2. English Video Lessons Matches (limit to top 8)
  const videoMatches: SearchResultItem[] = [];
  for (const lesson of ENGLISH_VIDEO_LESSONS) {
    const combined =
      `${lesson.code} ${lesson.title} ${lesson.category} ingliz tili dars video`.toLowerCase();
    if (tokens.every((token) => combined.includes(token))) {
      videoMatches.push({
        id: `video-${lesson.id}`,
        title: `${lesson.code}. ${lesson.title}`,
        description: `Ingliz tili video darsi — ${lesson.category}. YouTube orqali tomosha qilish va amaliyot.`,
        category: "Ingliz tili",
        targetActiveTab: 5,
        badge: `Video #${lesson.code}`,
        targetVideoId: lesson.id,
      });
      if (videoMatches.length >= 8) break;
    }
  }

  // 3. Biology Variants Matches (limit to top 8)
  const biologyMatches: SearchResultItem[] = [];
  for (const variant of BIOLOGY_VARIANTS) {
    const variantHead =
      `${variant.title} ${variant.subtitle} biologiya milliy sertifikat variant test`.toLowerCase();
    let matches = tokens.every((token) => variantHead.includes(token));

    // Also check if any question matches if not matched by title
    let matchedQuestionSample = "";
    if (!matches && tokens.length > 0) {
      for (const qItem of variant.questions) {
        const qText = `${qItem.number} ${qItem.question} ${qItem.options.join(" ")}`.toLowerCase();
        if (tokens.every((token) => qText.includes(token))) {
          matches = true;
          matchedQuestionSample = qItem.question.slice(0, 90) + "...";
          break;
        }
      }
    }

    if (matches) {
      biologyMatches.push({
        id: `variant-${variant.id}`,
        title: `Biologiya: ${variant.title}`,
        description: matchedQuestionSample
          ? `Topilgan savol: "${matchedQuestionSample}" (60 daqiqa, 30 ta savol)`
          : `Milliy sertifikat sinovi: 30 ta rasmiy test savoli, 1 soatlik taymer va ball hisobi.`,
        category: "Biologiya",
        targetActiveTab: 6,
        badge: "60 daqiqa • 30 test",
        targetVariantId: variant.id,
      });
      if (biologyMatches.length >= 8) break;
    }
  }

  // 4. Botanika Topics Matches (limit to top 8)
  const botanikaMatches: SearchResultItem[] = [];
  for (const topic of BOTANIKA_TOPICS) {
    const combined =
      `botanika darslik ${topic.code} ${topic.topicLabel} ${topic.semester} ${topic.title} ${topic.syllabusPoints.join(" ")} ${topic.keyTerms.join(" ")}`.toLowerCase();
    if (tokens.every((token) => combined.includes(token))) {
      botanikaMatches.push({
        id: topic.id,
        title: `Botanika ${topic.topicLabel}: ${topic.title}`,
        description: topic.syllabusPoints[0] ?? topic.studyNotes,
        category: "Darsliklar",
        targetActiveTab: 1,
        badge: `${topic.topicLabel} · ${topic.semester}`,
      });
      if (botanikaMatches.length >= 8) break;
    }
  }

  // Combine and deduplicate
  const results = [...directoryMatches, ...botanikaMatches, ...videoMatches, ...biologyMatches];
  return results;
}
