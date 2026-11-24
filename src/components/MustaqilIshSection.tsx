import { useState, useMemo, useEffect } from "react";
import {
  ArrowLeft,
  ClipboardCheck,
  FileText,
  Presentation,
  PenTool,
  Briefcase,
  Search,
  CheckCircle2,
  Circle,
  Copy,
  Check,
  Download,
  Sparkles,
  BookOpen,
  Clock,
  Award,
  Plus,
  Trash2,
  Printer,
  ListChecks,
  ChevronRight,
  SlidersHorizontal,
  ShieldCheck,
  X,
} from "lucide-react";

interface MustaqilIshSectionProps {
  onBack: () => void;
  onAskAi?: (prompt: string) => void;
}

type TaskType = "Referat" | "Taqdimot" | "Ilmiy esse" | "Keys-stadi";
type SubjectArea =
  | "Barchasi"
  | "Botanika"
  | "Genetika"
  | "Mikrobiologiya"
  | "Biokimyo"
  | "Ingliz tili"
  | "Umumiy fanlar";

interface IndependentTask {
  id: string;
  subject: Exclude<SubjectArea, "Barchasi">;
  type: TaskType;
  title: string;
  description: string;
  requirements: string[];
  volume: string;
  maxScore: number;
  deadlineHint: string;
  isCustom?: boolean;
}

interface TemplateFormat {
  id: string;
  type: TaskType;
  subtitle: string;
  volume: string;
  sourcesCount: string;
  structure: { step: string; title: string; detail: string }[];
  sampleContent: string;
}

const DEFAULT_TASKS: IndependentTask[] = [
  {
    id: "m1",
    subject: "Botanika",
    type: "Referat",
    title:
      "O‘zbekiston cho‘l va chala cho‘l mintaqasi dorivor o‘simliklarining morfologik moslashuvi",
    description:
      "Kserofit o‘simliklarning suv tanqisligiga chidamlilik mexanizmlari, barg va ildiz tizimidagi anatomik o‘zgarishlarni tahlil qilish.",
    requirements: [
      "Kamida 6 ta ilmiy manba (O‘zbekiston florasi ensiklopediyasi va darsliklar)",
      "Qiyosiy morfologik jadval (kamida 5 tur misolida)",
      "Rasmlar va sxemalar ilova qilinishi shart",
    ],
    volume: "12-15 bet",
    maxScore: 20,
    deadlineHint: "6-hafta",
  },
  {
    id: "m2",
    subject: "Genetika",
    type: "Keys-stadi",
    title: "Qishloq xo‘jaligi ekinlarida geterozis hodisasi va poliploidiya usullari",
    description:
      "G‘o‘za va bug‘doy navlari hosildorligini oshirishda uzoq duragaylash va sun’iy poliploidiya qo‘llanilishining amaliy tahlili.",
    requirements: [
      "Muammo qo‘yilishi va genetik asoslanishi",
      "F1 va F2 avlodlarda belgilar ajralish hisob-kitobi",
      "3 ta muqobil seleksiya yechimini solishtirish",
    ],
    volume: "6-8 bet",
    maxScore: 25,
    deadlineHint: "8-hafta",
  },
  {
    id: "m3",
    subject: "Biokimyo",
    type: "Taqdimot",
    title: "Fermentlar faolligiga harorat, pH muhiti va ingibitorlarning ta’siri",
    description:
      "Katalaza va amilaza fermentlari misolida biokimyoviy kataliz mexanizmi hamda Mixaelis-Menten tenglamasini slaydlar orqali yoritish.",
    requirements: [
      "12-15 ta mantiqiy bog‘langan slayd",
      "Har bir slaydda 6x6 qoidasi va grafik diagramma",
      "5 daqiqalik og‘zaki himoya nutqi matni",
    ],
    volume: "12-15 slayd",
    maxScore: 20,
    deadlineHint: "5-hafta",
  },
  {
    id: "m4",
    subject: "Mikrobiologiya",
    type: "Ilmiy esse",
    title:
      "Antibiotiklarga chidamli bakteriya shtammlari (AMR) va zamonaviy bakteriofag terapiyasi",
    description:
      "Tibbiyot va biotexnologiyada antibiotiklardan noto‘g‘ri foydalanish oqibatlari hamda bakteriofaglarning muqobil yechim sifatidagi istiqbollari.",
    requirements: [
      "Aniq ilmiy tezis va kamida 3 ta dalillangan argument",
      "Qarshi nuqtai nazar (risklar) va xulosa",
      "Plagiat darajasi 20% dan oshmasligi shart",
    ],
    volume: "4-5 bet",
    maxScore: 15,
    deadlineHint: "7-hafta",
  },
  {
    id: "m5",
    subject: "Ingliz tili",
    type: "Taqdimot",
    title: "Academic Presentation: Renewable Biofuels & Sustainable Ecosystems",
    description:
      "Ekologiya va bioenergetika mavzusida B2-C1 darajasidagi akademik leksika va bog‘lovchi iboralar asosida ingliz tilida taqdimot tayyorlash.",
    requirements: [
      "Kamida 10 ta akademik termin (C1 vocabulary)",
      "Signposting iboralari (First of all, Moving on to, In conclusion)",
      "Qisqa Q&A savol-javob tayyorgarligi",
    ],
    volume: "10-12 slayd",
    maxScore: 20,
    deadlineHint: "9-hafta",
  },
  {
    id: "m6",
    subject: "Umumiy fanlar",
    type: "Referat",
    title:
      "Raqamli iqtisodiyot sharoitida oliy ta’lim jarayonlarini avtomatlashtirish samaradorligi",
    description:
      "HEMIS, masofaviy LMS tizimlari va sun’iy intellekt vositalarining talabalar o‘zlashtirish ko‘rsatkichlariga ta’sirini o‘rganish.",
    requirements: [
      "Titul varaq, Reja, Kirish, 2 ta kichik bo‘lim, Xulosa",
      "Times New Roman 14 pt, 1.5 interval standarti",
      "Kamida 8 ta rasmiy manba va internet havola",
    ],
    volume: "10-14 bet",
    maxScore: 20,
    deadlineHint: "10-hafta",
  },
];

const TEMPLATE_FORMATS: TemplateFormat[] = [
  {
    id: "tpl-referat",
    type: "Referat",
    subtitle: "Nazariy manbalar tahliliga asoslangan yozma ilmiy ish",
    volume: "10–15 bet",
    sourcesCount: "5–10 ta manba",
    structure: [
      {
        step: "01",
        title: "Titul varaq (1-bet)",
        detail:
          "Vazirlik, universitet, kafedra, mavzu, talaba F.I.Sh., guruh va yil ko‘rsatiladi (raqam qo‘yilmaydi).",
      },
      {
        step: "02",
        title: "Reja (2-bet)",
        detail:
          "Kirish, 2–3 ta asosiy savol (paragraf), Xulosa va Foydalanilgan adabiyotlar ro‘yxati.",
      },
      {
        step: "03",
        title: "Kirish (1–2 bet)",
        detail: "Mavzuning dolzarbligi, maqsadi va vazifalari qisqa va lo‘nda asoslanadi.",
      },
      {
        step: "04",
        title: "Asosiy qism (7–10 bet)",
        detail:
          "Rejadagi savollar ketma-ketlikda darsliklar, ilmiy maqolalar va jadvallar bilan yoritiladi.",
      },
      {
        step: "05",
        title: "Xulosa va Adabiyotlar (2 bet)",
        detail:
          "Shaxsiy yakuniy xulosalar hamda alifbo tartibida rasmiylashtirilgan adabiyotlar ro‘yxati.",
      },
    ],
    sampleContent: `REJA:
Kirish
1. Mavzuning nazariy asoslari va asosiy tushunchalar
2. Zamonaviy tadqiqotlar va amaliy qo‘llanilish xususiyatlari
3. Muammolar va rivojlantirish istiqbollari
Xulosa
Foydalanilgan adabiyotlar ro‘yxati

KIRISH
Ushbu mustaqil ishda tanlangan mavzuning zamonaviy fan va amaliyotdagi o‘rni o‘rganiladi. Bugungi kunda mazkur yo‘nalishda olib borilayotgan tadqiqotlar natijadorligini oshirish muhim ilmiy ahamiyat kasb etmoqda.
Ishning maqsadi — mavzuga oid nazariy qarashlarni umumlashtirish hamda amaliy jihatlarni tahlil qilishdan iborat.

XULOSA
O‘rganilgan ilmiy adabiyotlar tahlili shuni ko‘rsatadiki, tizimli yondashuv va zamonaviy texnologiyalarni tatbiq etish yuqori samaradorlik beradi.`,
  },
  {
    id: "tpl-taqdimot",
    type: "Taqdimot",
    subtitle: "Vizual slaydlar va og‘zaki himoyaga mo‘ljallangan loyiha",
    volume: "12–15 slayd",
    sourcesCount: "4–6 ta manba",
    structure: [
      {
        step: "01",
        title: "1-slayd: Muqova",
        detail:
          "Mavzu nomi, talaba F.I.Sh., guruh, fan nomi va sana. Ortiqcha bezaksiz aniq sarlavha.",
      },
      {
        step: "02",
        title: "2-slayd: Reja va maqsad",
        detail: "Taqdimotda ko‘rib chiqiladigan 3–4 ta asosiy blok va tadqiqot maqsadi.",
      },
      {
        step: "03",
        title: "3–11-slaydlar: Asosiy mazmun (6x6 qoidasi)",
        detail:
          "Har slaydda ko‘pi bilan 6 qator va har qatorda 6 so‘z. Jadval, sxema va grafiklardan foydalaning.",
      },
      {
        step: "04",
        title: "12–13-slaydlar: Xulosa va takliflar",
        detail: "Tadqiqotdan olingan asosiy xulosalar qisqa punktlarda beriladi.",
      },
      {
        step: "05",
        title: "14–15-slaydlar: Adabiyotlar va Rahmat",
        detail: "Foydalanilgan manbalar ro‘yxati va savol-javob (Q&A) uchun yakuniy slayd.",
      },
    ],
    sampleContent: `[1-SLAYD] Mavzu nomi | Talaba F.I.Sh. | Guruh
[2-SLAYD] Maqsad va asosiy vazifalar (3-4 ta qisqa punkt)
[3-SLAYD] Asosiy tushunchalar va ta’riflar (Infografika shaklida)
[4-6-SLAYD] Qiyosiy tahlil va statistik ko‘rsatkichlar (Diagramma)
[7-9-SLAYD] Amaliy misollar va tajriba natijalari (Jadval)
[10-11-SLAYD] Mavjud muammolar va yechim variantlari
[12-SLAYD] Yakuniy xulosalar (3 ta asosiy natija)
[13-SLAYD] E’tiboringiz uchun rahmat! Savollaringiz bormi?

HIMOYA NUTQI SHABLONI:
"Assalomu alaykum, hurmatli ustoz va guruhdoshlar! Bugungi mustaqil ishim mavzusi — ...
Taqdimot davomida quyidagi uchta asosiy masalaga to‘xtalib o‘tamiz..."`,
  },
  {
    id: "tpl-esse",
    type: "Ilmiy esse",
    subtitle: "Muallifning mustaqil tanqidiy fikri va dalillangan pozitsiyasi",
    volume: "3–5 bet",
    sourcesCount: "3–6 ta manba",
    structure: [
      {
        step: "01",
        title: "Kirish va Tezis (15%)",
        detail:
          "Mavzuga qiziqarli kirish (hook), muammoning qo‘yilishi va muallifning aniq tezisi (asosiy g‘oya).",
      },
      {
        step: "02",
        title: "1-Dalil bloki (25%)",
        detail: "Tezisni tasdiqlovchi birinchi ilmiy argument, olim fikri yoki statistik fakt.",
      },
      {
        step: "03",
        title: "2-Dalil bloki (25%)",
        detail: "Ikkinchi mustaqil dalil va amaliy hayotiy misol bilan mustahkamlash.",
      },
      {
        step: "04",
        title: "Qarshi fikr va raddiya (20%)",
        detail:
          "Mavzu bo‘yicha muqobil qarashni keltirish va uni ilmiy dalillar bilan tahlil qilish.",
      },
      {
        step: "05",
        title: "Xulosa (15%)",
        detail: "Tezisni yangicha talqinda umumlashtirish va kelajak uchun xulosaviy fikr.",
      },
    ],
    sampleContent: `SARLAVHA: [Mavzuning muammoli savol yoki tezis shaklidagi nomi]

KIRISH:
So‘nggi o‘n yillikda [soha nomi] da ro‘y berayotgan o‘zgarishlar yangi ilmiy yondashuvlarni talab qilmoqda. Ushbu esseda men [asosiy g‘oya/tezis] ekanligini ilmiy dalillar asosida asoslab beraman.

ASOSIY QISM:
Birinchidan, [1-argument va ilmiy manbaga tayangan fakt]...
Ikkinchidan, [2-argument va qiyosiy tahlil]...
Boshqa tomondan qaraganda, ayrim tadqiqotchilar [qarshi fikr] ni ilgari suradilar. Biroq [raddiya va muvozanatli baho]...

XULOSA:
Yuqoridagi dalillarni umumlashtirib aytish mumkinki, [yakuniy xulosa va amaliy ahamiyat].`,
  },
  {
    id: "tpl-keys",
    type: "Keys-stadi",
    subtitle: "Aniq muammoli vaziyat (case) bo‘yicha yechim ishlab chiqish",
    volume: "5–8 bet",
    sourcesCount: "4–7 ta manba",
    structure: [
      {
        step: "01",
        title: "Vaziyat tavsifi (Case overview)",
        detail:
          "Obyekt, mavjud sharoit va hal qilinishi zarur bo‘lgan asosiy muammo bayon qilinadi.",
      },
      {
        step: "02",
        title: "Muammo omillari tahlili",
        detail: "SWOT yoki sabab-oqibat tahlili yordamida muammoning ildiz sabablari aniqlanadi.",
      },
      {
        step: "03",
        title: "Muqobil yechimlar (3 ta variant)",
        detail:
          "Kamida uchta yechim taklif etiladi va ularning afzallik hamda kamchiliklari jadvalda solishtiriladi.",
      },
      {
        step: "04",
        title: "Optimal yechim va amalga oshirish rejasi",
        detail: "Eng samarali variant tanlanib, bosqichma-bosqich joriy etish xaritasi tuziladi.",
      },
    ],
    sampleContent: `1. MUAMMOLI VAZIYAT (KEYS) TAVSIFI:
Obyekt: [Laboratoriya / Korxona / Ekotizim nomi]
Muammo: [Aniq ko‘rsatkich pasayishi yoki texnik/biologik nosozlik]

2. SABAB-OQIBAT VA SWOT TAHLIL:
- Kuchli tomonlar (Strengths): ...
- Zaif tomonlar (Weaknesses): ...
- Imkoniyatlar (Opportunities): ...
- Xavflar (Threats): ...

3. MUQOBIL YECHIMLAR JADVALI:
Variant A: Tezkor texnik yechim (Xarajat: o‘rta, Samara: qisqa muddatli)
Variant B: Innovatsion tizimli yechim (Xarajat: maqbul, Samara: uzoq muddatli — TAVSIYA ETILADI)
Variant V: Tashqi resurs jalb qilish

4. YAKUNIY TAVSIYA:
Variant B asosida bosqichma-bosqich chora-tadbirlar rejasini joriy etish.`,
  },
];

const RUBRIC_CRITERIA = [
  {
    name: "Mavzuning to‘liq va ilmiy yoritilishi",
    percent: "35%",
    desc: "Reja bandlarining mantiqiy ketma-ketligi, nazariy tushunchalarning aniqligi va dolzarbligi.",
  },
  {
    name: "Mustaqillik va antiplagiat darajasi",
    percent: "25%",
    desc: "Matn originalligi kamida 75% bo‘lishi, manbalarga to‘g‘ri havola (iqtibos) qo‘yilishi.",
  },
  {
    name: "Amaliy tahlil, jadval va misollar",
    percent: "20%",
    desc: "Real statistik ma’lumotlar, sxemalar, formulalar va shaxsiy tahlilning mavjudligi.",
  },
  {
    name: "Texnik rasmiylashtirish (GOST) va himoya",
    percent: "20%",
    desc: "Times New Roman 14 pt, 1.5 interval, hoshiyalar (30/15/20/20 mm) va savollarga aniq javob.",
  },
];

export function MustaqilIshSection({ onBack, onAskAi }: MustaqilIshSectionProps) {
  const [activeTab, setActiveTab] = useState<"tasks" | "templates" | "builder" | "rubric">("tasks");

  // Task bank filtering
  const [subjectFilter, setSubjectFilter] = useState<SubjectArea>("Barchasi");
  const [typeFilter, setTypeFilter] = useState<TaskType | "Barchasi">("Barchasi");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>("m1");

  // Custom tasks & completed tracking (persisted in localStorage)
  const [customTasks, setCustomTasks] = useState<IndependentTask[]>(() => {
    try {
      const saved = localStorage.getItem("eduuni_mustaqil_custom_tasks");
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    return [];
  });

  const [completedIds, setCompletedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem("eduuni_mustaqil_completed");
      if (saved) return new Set(JSON.parse(saved));
    } catch {
      // Ignore
    }
    return new Set(["m1"]);
  });

  useEffect(() => {
    try {
      localStorage.setItem("eduuni_mustaqil_custom_tasks", JSON.stringify(customTasks));
    } catch {
      // Ignore
    }
  }, [customTasks]);

  useEffect(() => {
    try {
      localStorage.setItem("eduuni_mustaqil_completed", JSON.stringify(Array.from(completedIds)));
    } catch {
      // Ignore
    }
  }, [completedIds]);

  // Add custom task form modal state
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSubject, setNewSubject] = useState<Exclude<SubjectArea, "Barchasi">>("Biokimyo");
  const [newType, setNewType] = useState<TaskType>("Referat");
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newDeadline, setNewDeadline] = useState("12-hafta");

  // Templates tab state
  const [selectedTemplateId, setSelectedTemplateId] = useState("tpl-referat");
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  // Builder tab state (Titul varaq & Reja generator)
  const [university, setUniversity] = useState("O‘zbekiston Milliy Universiteti");
  const [faculty, setFaculty] = useState("Biologiya fakulteti");
  const [department, setDepartment] = useState("Genetika va ekologiya kafedrasi");
  const [builderSubject, setBuilderSubject] = useState("Genetika");
  const [builderType, setBuilderType] = useState<TaskType>("Referat");
  const [builderTopic, setBuilderTopic] = useState(
    "Zamonaviy biotexnologiya va gen muhandisligining qishloq xo‘jaligidagi ahamiyati",
  );
  const [studentName, setStudentName] = useState("Muxtorov Aslonbek");
  const [studentGroup, setStudentGroup] = useState("BIO-204");
  const [teacherName, setTeacherName] = useState("prof. A. Karimov");
  const [cityYear, setCityYear] = useState("Toshkent — 2026");
  const [copiedBuilder, setCopiedBuilder] = useState(false);

  // Checklist state
  const [readyChecks, setReadyChecks] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const allTasks = useMemo(() => [...customTasks, ...DEFAULT_TASKS], [customTasks]);

  const filteredTasks = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allTasks.filter((t) => {
      if (subjectFilter !== "Barchasi" && t.subject !== subjectFilter) return false;
      if (typeFilter !== "Barchasi" && t.type !== typeFilter) return false;
      if (q) {
        const text = `${t.title} ${t.description} ${t.subject} ${t.type}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });
  }, [allTasks, subjectFilter, typeFilter, searchQuery]);

  const toggleCompleted = (id: string) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleAddCustomTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const item: IndependentTask = {
      id: `custom-${Date.now()}`,
      subject: newSubject,
      type: newType,
      title: newTitle.trim(),
      description:
        newDesc.trim() ||
        "Talaba tomonidan qo‘shilgan shaxsiy mustaqil ish topshirig‘i. Standart talablar asosida tayyorlanadi.",
      requirements: [
        "Belgilangan muddatga qadar HEMIS tizimiga yuklash",
        "Titul varaq, reja va adabiyotlar ro‘yxatini to‘liq rasmiylashtirish",
        "O‘ziga xoslik (antiplagiat) kamida 75% bo‘lishi",
      ],
      volume:
        newType === "Taqdimot" ? "12-15 slayd" : newType === "Ilmiy esse" ? "4-5 bet" : "10-14 bet",
      maxScore: 20,
      deadlineHint: newDeadline.trim() || "Joriy semestr",
      isCustom: true,
    };
    setCustomTasks((prev) => [item, ...prev]);
    setNewTitle("");
    setNewDesc("");
    setShowAddForm(false);
    setExpandedTaskId(item.id);
  };

  const handleDeleteCustomTask = (id: string) => {
    setCustomTasks((prev) => prev.filter((t) => t.id !== id));
    setCompletedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const selectedTemplate =
    TEMPLATE_FORMATS.find((t) => t.id === selectedTemplateId) ?? TEMPLATE_FORMATS[0];

  const handleCopyText = (text: string, setFlag: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setFlag(true);
    setTimeout(() => setFlag(false), 2000);
  };

  const handleDownloadTxt = (filename: string, content: string) => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const generatedWorkText = useMemo(() => {
    return `O‘ZBEKISTON RESPUBLIKASI OLIY TA’LIM, FAN VA INNOVATSIYALAR VAZIRLIGI
${university.toUpperCase()}
${faculty}
${department}

"${builderSubject}" fanidan

MUSTAQIL ISH (${builderType.toUpperCase()})

Mavzu: ${builderTopic}

Bajardi: ${studentGroup} guruh talabasi ${studentName}
Tekshirdi: ${teacherName}

${cityYear}

============================================================

REJA:
Kirish
1. ${builderTopic}ning nazariy asoslari va asosiy tushunchalari
2. Mavzuning zamonaviy holati va amaliy tahlili
3. Mavjud muammolar hamda ularni hal etish istiqbollari
Xulosa
Foydalanilgan adabiyotlar ro‘yxati

============================================================

KIRISH
Mavzuning dolzarbligi: Bugungi kunda ${builderSubject.toLowerCase()} sohasida "${builderTopic}" masalasini chuqur o‘rganish ilmiy va amaliy jihatdan katta ahamiyatga ega.
Ishning maqsadi: Mazkur mavzu bo‘yicha mavjud ilmiy adabiyotlarni tahlil qilish, asosiy qonuniyatlarni aniqlash va xulosalar ishlab chiqishdan iborat.
Vazifalari:
- Mavzuga oid nazariy manbalarni o‘rganish va tizimlashtirish;
- Amaliy misollar va statistik ko‘rsatkichlarni tahlil qilish;
- Xulosa va amaliy takliflarni shakllantirish.
`;
  }, [
    university,
    faculty,
    department,
    builderSubject,
    builderType,
    builderTopic,
    studentGroup,
    studentName,
    teacherName,
    cityYear,
  ]);

  const completedRatio = Math.round((completedIds.size / Math.max(1, allTasks.length)) * 100);
  const checklistReadyCount = Object.values(readyChecks).filter(Boolean).length;

  return (
    <div className="space-y-6 px-4 pb-16 md:px-8">
      {/* Top Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-4 pt-2">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-all hover:bg-muted hover:shadow-sm"
          >
            <ArrowLeft className="h-4 w-4 text-primary" />
            <span>Bosh sahifaga qaytish</span>
          </button>
          <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
            <span>EduUni</span>
            <span>/</span>
            <span className="font-semibold text-foreground">
              Mustaqil ish (Topshiriqlar va namunalar)
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs font-semibold">
          <span className="text-muted-foreground">
            Bajarildi:{" "}
            <strong className="text-primary tabular-nums">
              {completedIds.size} / {allTasks.length}
            </strong>
          </span>
          <span className="text-border">|</span>
          <span className="text-emerald-600 dark:text-emerald-400 tabular-nums">
            {completedRatio}% tayyor
          </span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-sidebar-grad p-5 text-navy-foreground shadow-card sm:p-6 md:p-8">
        <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-cyan/25 blob" />
        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan/20 text-cyan">
                <ClipboardCheck className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold tracking-wide text-cyan">
                Kredit-modul tizimi · Talabaning mustaqil ta’limi
              </span>
            </div>
            <h1 className="text-2xl font-extrabold leading-tight md:text-4xl">
              Mustaqil ish: <span className="text-shine">Topshiriqlar va namunalar</span>
            </h1>
            <p className="text-sm leading-relaxed text-navy-foreground/85 md:text-base">
              Universitet fanlari bo‘yicha tayyor topshiriqlar banki, referat, ilmiy esse, slayd
              taqdimot va keys-stadi shablonlari hamda avtomatik titul varaq konstruktori.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:w-72 shrink-0">
            <div className="rounded-2xl bg-navy-foreground/10 p-3.5 backdrop-blur-md">
              <p className="text-xs text-navy-foreground/70">Topshiriq turlari</p>
              <p className="mt-1 text-xl font-extrabold text-cyan tabular-nums">4 xil format</p>
            </div>
            <div className="rounded-2xl bg-navy-foreground/10 p-3.5 backdrop-blur-md">
              <p className="text-xs text-navy-foreground/70">Bajarilgan ishlar</p>
              <p className="mt-1 text-xl font-extrabold text-white tabular-nums">
                {completedIds.size} ta
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab("builder")}
              className="col-span-2 flex items-center justify-center gap-2 rounded-xl bg-cyan px-4 py-2.5 text-xs font-extrabold text-navy shadow-glow transition-all hover:scale-[1.02]"
            >
              <PenTool className="h-4 w-4" />
              <span>Titul varaq & Reja yaratish</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Tabs Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto border-b border-border pb-3 sm:flex-wrap">
        {[
          { id: "tasks", label: "Topshiriqlar banki", icon: BookOpen },
          { id: "templates", label: "Tayyor namunalar (4 tur)", icon: FileText },
          { id: "builder", label: "Titul & Reja konstruktori", icon: PenTool },
          { id: "rubric", label: "Baholash mezonlari & Tekshiruv", icon: ListChecks },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-semibold transition-all sm:px-4 sm:py-2.5 sm:text-sm ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* TAB 1: TOPSHIRIQLAR BANKI */}
      {/* ========================================================= */}
      {activeTab === "tasks" && (
        <div className="space-y-6">
          {/* Filter & Add Toolbar */}
          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-5 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="relative w-full min-w-0 flex-1 sm:min-w-[220px]">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Fan, mavzu yoki topshiriq turini qidiring..."
                  className="w-full rounded-xl border border-border bg-muted/40 py-2.5 pl-10 pr-9 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label="Tozalash"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={() => setShowAddForm((v) => !v)}
                className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
              >
                <Plus className="h-4 w-4" />
                <span>Shaxsiy topshiriq qo‘shish</span>
              </button>
            </div>

            {/* Subject & Type filters */}
            <div className="flex flex-wrap items-center gap-4 border-t border-border/60 pt-4">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="mr-1 flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                  <SlidersHorizontal className="h-3.5 w-3.5" /> Fan:
                </span>
                {(
                  [
                    "Barchasi",
                    "Botanika",
                    "Genetika",
                    "Biokimyo",
                    "Mikrobiologiya",
                    "Ingliz tili",
                    "Umumiy fanlar",
                  ] as SubjectArea[]
                ).map((subj) => (
                  <button
                    key={subj}
                    type="button"
                    onClick={() => setSubjectFilter(subj)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                      subjectFilter === subj
                        ? "bg-primary text-primary-foreground font-bold"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {subj}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                <span className="mr-1 text-xs font-semibold text-muted-foreground">Turi:</span>
                {(["Barchasi", "Referat", "Taqdimot", "Ilmiy esse", "Keys-stadi"] as const).map(
                  (t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTypeFilter(t)}
                      className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                        typeFilter === t
                          ? "bg-navy text-white dark:bg-cyan dark:text-navy font-bold"
                          : "bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {t}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Inline Custom Task Creator */}
            {showAddForm && (
              <form
                onSubmit={handleAddCustomTask}
                className="space-y-4 rounded-2xl border border-primary/30 bg-primary/5 p-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-foreground">
                    Yangi shaxsiy mustaqil ish topshirig‘ini qo‘shish
                  </h4>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="text-xs font-medium text-muted-foreground hover:text-foreground"
                  >
                    Bekor qilish
                  </button>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground">Fan nomi</label>
                    <select
                      value={newSubject}
                      onChange={(e) =>
                        setNewSubject(e.target.value as Exclude<SubjectArea, "Barchasi">)
                      }
                      className="mt-1 w-full rounded-xl border border-border bg-card px-3 py-2 text-xs outline-none focus:border-primary"
                    >
                      <option value="Botanika">Botanika</option>
                      <option value="Genetika">Genetika</option>
                      <option value="Biokimyo">Biokimyo</option>
                      <option value="Mikrobiologiya">Mikrobiologiya</option>
                      <option value="Ingliz tili">Ingliz tili</option>
                      <option value="Umumiy fanlar">Umumiy fanlar</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-muted-foreground">Ish turi</label>
                    <select
                      value={newType}
                      onChange={(e) => setNewType(e.target.value as TaskType)}
                      className="mt-1 w-full rounded-xl border border-border bg-card px-3 py-2 text-xs outline-none focus:border-primary"
                    >
                      <option value="Referat">Referat</option>
                      <option value="Taqdimot">Taqdimot</option>
                      <option value="Ilmiy esse">Ilmiy esse</option>
                      <option value="Keys-stadi">Keys-stadi</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-muted-foreground">Muddat</label>
                    <input
                      type="text"
                      value={newDeadline}
                      onChange={(e) => setNewDeadline(e.target.value)}
                      placeholder="Masalan: 15-dekabr"
                      className="mt-1 w-full rounded-xl border border-border bg-card px-3 py-2 text-xs outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-foreground">
                    Mavzu nomi *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Masalan: DNK replikatsiyasi fermentlari va ularning vazifalari"
                    className="mt-1 w-full rounded-xl border border-border bg-card px-3 py-2 text-xs outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-foreground">
                    Qisqacha izoh (ixtiyoriy)
                  </label>
                  <input
                    type="text"
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    placeholder="O‘qituvchi bergan qo‘shimcha talablar..."
                    className="mt-1 w-full rounded-xl border border-border bg-card px-3 py-2 text-xs outline-none focus:border-primary"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="rounded-xl bg-primary px-5 py-2 text-xs font-bold text-primary-foreground shadow-sm hover:bg-primary/90"
                  >
                    Saqlash va ro‘yxatga qo‘shish
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Tasks Grid */}
          {filteredTasks.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {filteredTasks.map((task) => {
                const isDone = completedIds.has(task.id);
                const isExpanded = expandedTaskId === task.id;
                return (
                  <div
                    key={task.id}
                    className={`flex flex-col justify-between rounded-3xl border bg-card p-5 shadow-card transition-all ${
                      isDone ? "border-emerald-500/40" : "border-border hover:border-primary/40"
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="font-bold text-primary">{task.subject}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-semibold text-foreground">{task.type}</span>
                          <span aria-hidden="true">·</span>
                          <span>{task.volume}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {task.isCustom && (
                            <button
                              type="button"
                              onClick={() => handleDeleteCustomTask(task.id)}
                              className="rounded-lg p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                              title="O‘chirish"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => toggleCompleted(task.id)}
                            className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-bold transition-colors ${
                              isDone
                                ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                                : "bg-muted text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {isDone ? (
                              <>
                                <CheckCircle2 className="h-3.5 w-3.5" />
                                <span>Bajarildi</span>
                              </>
                            ) : (
                              <>
                                <Circle className="h-3.5 w-3.5" />
                                <span>Bajarish</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      <h3 className="mt-3 text-base font-bold leading-snug text-foreground">
                        {task.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {task.description}
                      </p>

                      {/* Metadata stats row */}
                      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1 tabular-nums">
                          <Award className="h-3.5 w-3.5 text-primary" /> Maks: {task.maxScore} ball
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-orange-500" /> Muddat:{" "}
                          {task.deadlineHint}
                        </span>
                      </div>

                      {/* Expandable details */}
                      {isExpanded && (
                        <div className="mt-4 space-y-2 border-t border-border pt-3">
                          <p className="text-xs font-bold text-foreground">Asosiy talablar:</p>
                          <ul className="space-y-1.5 text-xs text-muted-foreground">
                            {task.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Footer actions */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/70 pt-3">
                      <button
                        type="button"
                        onClick={() => setExpandedTaskId(isExpanded ? null : task.id)}
                        className="text-xs font-semibold text-primary hover:underline"
                      >
                        {isExpanded ? "Talablarni yopish" : "Talablarni ko‘rish"}
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setBuilderSubject(task.subject);
                            setBuilderType(task.type);
                            setBuilderTopic(task.title);
                            setActiveTab("builder");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="flex items-center gap-1 rounded-xl bg-muted px-3 py-1.5 text-xs font-bold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          <PenTool className="h-3.5 w-3.5" />
                          <span>Shablon ochish</span>
                        </button>

                        {onAskAi && (
                          <button
                            type="button"
                            onClick={() =>
                              onAskAi(
                                `Mustaqil ish (${task.type}, ${task.subject} fani): "${task.title}" mavzusi bo‘yicha reja va asosiy ilmiy tezislarni tuzib ber.`,
                              )
                            }
                            className="flex items-center gap-1 rounded-xl bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                          >
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>AI yordam</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-border bg-card p-10 text-center">
              <ClipboardCheck className="mx-auto h-10 w-10 text-muted-foreground/50" />
              <p className="mt-3 text-sm font-bold text-foreground">
                Tanlangan filtr bo‘yicha topshiriq topilmadi
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubjectFilter("Barchasi");
                  setTypeFilter("Barchasi");
                  setSearchQuery("");
                }}
                className="mt-3 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground"
              >
                Filtrlarni tozalash
              </button>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2: TAYYOR NAMUNALAR */}
      {/* ========================================================= */}
      {activeTab === "templates" && (
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* Left selector */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-foreground">Mustaqil ish turlari:</h3>
            {TEMPLATE_FORMATS.map((tpl) => {
              const Icon =
                tpl.type === "Referat"
                  ? FileText
                  : tpl.type === "Taqdimot"
                    ? Presentation
                    : tpl.type === "Ilmiy esse"
                      ? PenTool
                      : Briefcase;
              const isSelected = tpl.id === selectedTemplate.id;
              return (
                <button
                  key={tpl.id}
                  type="button"
                  onClick={() => setSelectedTemplateId(tpl.id)}
                  className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                    isSelected
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border bg-card hover:bg-muted/50"
                  }`}
                >
                  <div
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                      isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-foreground">{tpl.type}</span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${
                          isSelected ? "translate-x-0.5 text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {tpl.volume} · {tpl.sourcesCount}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right detail view */}
          <div className="space-y-6 rounded-3xl border border-border bg-card p-6 shadow-card">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-4">
              <div>
                <p className="text-xs font-semibold text-primary">
                  Rasmiy namuna · {selectedTemplate.volume} · {selectedTemplate.sourcesCount}
                </p>
                <h2 className="mt-1 text-2xl font-extrabold text-foreground">
                  {selectedTemplate.type} tayyorlash tartibi
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">{selectedTemplate.subtitle}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopyText(selectedTemplate.sampleContent, setCopiedTemplate)}
                  className="flex items-center gap-1.5 rounded-xl border border-border bg-muted/50 px-3.5 py-2 text-xs font-bold text-foreground transition-colors hover:bg-muted"
                >
                  {copiedTemplate ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Nusxa olindi</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Nusxa olish</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleDownloadTxt(
                      `${selectedTemplate.type.toLowerCase()}_namuna.txt`,
                      selectedTemplate.sampleContent,
                    )
                  }
                  className="flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs font-bold text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Yuklab olish</span>
                </button>
              </div>
            </div>

            {/* Structure Breakdown */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-foreground">Tarkibiy tuzilishi:</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {selectedTemplate.structure.map((s) => (
                  <div key={s.step} className="rounded-2xl border border-border bg-muted/30 p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-extrabold text-primary tabular-nums">
                        {s.step}.
                      </span>
                      <h4 className="text-sm font-bold text-foreground">{s.title}</h4>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {s.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ready Sample Text */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-foreground">Tayyor matn shabloni:</h3>
              <pre className="whitespace-pre-wrap rounded-2xl border border-border bg-muted/40 p-4 font-mono text-xs leading-relaxed text-foreground">
                {selectedTemplate.sampleContent}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 3: TITUL VARAQ & REJA KONSTRUKTORI */}
      {/* ========================================================= */}
      {activeTab === "builder" && (
        <div className="grid gap-6 xl:grid-cols-[420px_1fr]">
          {/* Left Form */}
          <div className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-card">
            <div>
              <h3 className="text-lg font-bold text-foreground">Ma’lumotlarni kiriting</h3>
              <p className="text-xs text-muted-foreground">
                Barcha maydonlar o‘ng tomondagi rasmiy titul varaq va rejada darhol aks etadi
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-muted-foreground">OTM (Universitet)</label>
                <input
                  type="text"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-border bg-muted/30 px-3 py-2 outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="font-semibold text-muted-foreground">Fakultet</label>
                  <input
                    type="text"
                    value={faculty}
                    onChange={(e) => setFaculty(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-border bg-muted/30 px-3 py-2 outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-semibold text-muted-foreground">Kafedra</label>
                  <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-border bg-muted/30 px-3 py-2 outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="font-semibold text-muted-foreground">Fan nomi</label>
                  <input
                    type="text"
                    value={builderSubject}
                    onChange={(e) => setBuilderSubject(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-border bg-muted/30 px-3 py-2 outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-semibold text-muted-foreground">Ish turi</label>
                  <select
                    value={builderType}
                    onChange={(e) => setBuilderType(e.target.value as TaskType)}
                    className="mt-1 w-full rounded-xl border border-border bg-muted/30 px-3 py-2 outline-none focus:border-primary"
                  >
                    <option value="Referat">Referat</option>
                    <option value="Taqdimot">Taqdimot</option>
                    <option value="Ilmiy esse">Ilmiy esse</option>
                    <option value="Keys-stadi">Keys-stadi</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold text-muted-foreground">Mavzu nomi</label>
                <textarea
                  rows={2}
                  value={builderTopic}
                  onChange={(e) => setBuilderTopic(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-border bg-muted/30 px-3 py-2 outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="font-semibold text-muted-foreground">Talaba F.I.Sh.</label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-border bg-muted/30 px-3 py-2 outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-semibold text-muted-foreground">Guruh</label>
                  <input
                    type="text"
                    value={studentGroup}
                    onChange={(e) => setStudentGroup(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-border bg-muted/30 px-3 py-2 outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="font-semibold text-muted-foreground">Tekshiruvchi ustoz</label>
                  <input
                    type="text"
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-border bg-muted/30 px-3 py-2 outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-semibold text-muted-foreground">Shahar va yil</label>
                  <input
                    type="text"
                    value={cityYear}
                    onChange={(e) => setCityYear(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-border bg-muted/30 px-3 py-2 outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Live Preview */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="text-xs font-bold text-foreground">
                Rasmiy A4 Titul Varaq va Reja ko‘rinishi
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopyText(generatedWorkText, setCopiedBuilder)}
                  className="flex items-center gap-1.5 rounded-xl border border-border bg-muted/50 px-3.5 py-2 text-xs font-bold text-foreground hover:bg-muted"
                >
                  {copiedBuilder ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Nusxalandi</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Matnni nusxalash</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleDownloadTxt("mustaqil_ish_titul_reja.txt", generatedWorkText)
                  }
                  className="flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs font-bold text-primary-foreground hover:bg-primary/90"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Yuklab olish (.txt)</span>
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-bold text-foreground hover:bg-muted"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>Chop etish</span>
                </button>
              </div>
            </div>

            {/* A4 Sheet Preview */}
            <div className="rounded-3xl border border-border bg-white p-8 text-slate-900 shadow-card md:p-12">
              <div className="mx-auto flex min-h-[460px] max-w-xl flex-col justify-between text-center font-serif">
                <div className="space-y-1 text-xs md:text-sm">
                  <p className="font-bold">
                    O‘ZBEKISTON RESPUBLIKASI OLIY TA’LIM, FAN VA INNOVATSIYALAR VAZIRLIGI
                  </p>
                  <p className="font-bold uppercase">{university}</p>
                  <p>{faculty}</p>
                  <p>{department}</p>
                </div>

                <div className="my-10 space-y-3">
                  <p className="text-sm font-semibold italic">"{builderSubject}" fanidan</p>
                  <h2 className="text-2xl font-extrabold tracking-wide md:text-3xl">
                    MUSTAQIL ISH
                  </h2>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    ({builderType})
                  </p>
                  <p className="mx-auto max-w-lg pt-3 text-sm font-bold leading-relaxed md:text-base">
                    Mavzu: {builderTopic}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="ml-auto max-w-xs space-y-1 text-left text-xs md:text-sm">
                    <p>
                      <span className="font-bold">Bajardi:</span> {studentGroup} guruh talabasi{" "}
                      {studentName}
                    </p>
                    <p>
                      <span className="font-bold">Tekshirdi:</span> {teacherName}
                    </p>
                  </div>
                  <p className="pt-4 text-xs font-bold md:text-sm">{cityYear}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 4: BAHOLASH MEZONLARI & CHECKLIST */}
      {/* ========================================================= */}
      {activeTab === "rubric" && (
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left: Grading Rubric */}
          <div className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">
                Kredit-modul baholash mezonlari (100%)
              </h3>
            </div>
            <p className="text-xs text-muted-foreground">
              Universitetlarda mustaqil ish odatda joriy va oraliq nazorat ballarining muhim qismini
              tashkil etadi. Quyidagi 4 mezon asosida baholanadi:
            </p>

            <div className="space-y-3 pt-2">
              {RUBRIC_CRITERIA.map((r) => (
                <div key={r.name} className="rounded-2xl border border-border bg-muted/30 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-foreground">{r.name}</h4>
                    <span className="font-mono text-sm font-extrabold text-primary tabular-nums">
                      {r.percent}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Submission Checklist */}
          <div className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <ListChecks className="h-5 w-5 text-emerald-500" />
                <h3 className="text-lg font-bold text-foreground">Topshirishdan oldingi nazorat</h3>
              </div>
              <span className="text-xs font-extrabold text-primary tabular-nums">
                {checklistReadyCount} / 6 bajarildi
              </span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary-grad transition-all duration-300"
                style={{ width: `${Math.round((checklistReadyCount / 6) * 100)}%` }}
              />
            </div>

            <div className="space-y-2.5 pt-1">
              {[
                { id: 1, label: "Mavzu va ish turi (Referat / Taqdimot / Esse) aniq belgilangan" },
                { id: 2, label: "Titul varaq universitet talablari asosida to‘ldirilgan" },
                { id: 3, label: "Matn Times New Roman 14 pt, 1.5 interval va 30/15/20/20 mm da" },
                { id: 4, label: "Kamida 5-8 ta ilmiy adabiyot va ishonchli manba keltirilgan" },
                { id: 5, label: "Antiplagiat tekshiruvi: matn originalligi 75% dan yuqori" },
                { id: 6, label: "HEMIS tizimiga PDF/DOCX formatida yuklashga va himoyaga tayyor" },
              ].map((item) => {
                const checked = Boolean(readyChecks[item.id]);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setReadyChecks((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                    }
                    className={`flex w-full items-center gap-3 rounded-2xl border p-3.5 text-left text-xs font-medium transition-all ${
                      checked
                        ? "border-emerald-500/40 bg-emerald-500/10 text-foreground"
                        : "border-border bg-muted/20 text-muted-foreground hover:bg-muted/40"
                    }`}
                  >
                    {checked ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    ) : (
                      <Circle className="h-4 w-4 shrink-0 text-muted-foreground" />
                    )}
                    <span className={checked ? "font-semibold" : ""}>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
