import { useState, useId } from "react";
import {
  BookOpen,
  Volume2,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  Headphones,
  Award,
  MessageCircle,
  HelpCircle,
  GraduationCap,
  Play,
  Flame,
  Check,
  Tv,
} from "lucide-react";
import icEn from "@/assets/icon-english.png";
import { EnglishVideoLessons } from "./EnglishVideoLessons";

type Props = {
  onBack: () => void;
};

type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1";

interface GrammarLesson {
  id: string;
  level: CEFRLevel;
  title: string;
  topicUz: string;
  ruleUz: string;
  formula: string;
  examples: { en: string; uz: string }[];
  practice: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

interface Flashcard {
  id: string;
  level: CEFRLevel;
  en: string;
  phonetic: string;
  uz: string;
  exampleEn: string;
  exampleUz: string;
  category: string;
}

interface ListeningExercise {
  id: string;
  level: CEFRLevel;
  title: string;
  targetSentence: string;
  contextUz: string;
  hints: string[];
}

interface QuizQuestion {
  id: number;
  level: CEFRLevel;
  question: string;
  options: string[];
  correct: number;
  explanationUz: string;
}

interface DialogueLine {
  speaker: string;
  en: string;
  uz: string;
}

const CEFR_LEVELS: { id: CEFRLevel; label: string; sub: string }[] = [
  { id: "A1", label: "A1 — Beginner", sub: "0 dan boshlang'ich asoslar" },
  { id: "A2", label: "A2 — Elementary", sub: "Oddiy kundalik jumlalar" },
  { id: "B1", label: "B1 — Intermediate", sub: "Mustaqil muloqot va grammatika" },
  { id: "B2", label: "B2 — Upper-Int", sub: "IELTS 5.5-6.5 / Ilmiy nutq" },
  { id: "C1", label: "C1 — Advanced", sub: "IELTS 7.0+ / Mukammal ilmiy daraja" },
];

const GRAMMAR_LESSONS: GrammarLesson[] = [
  {
    id: "g1",
    level: "A1",
    title: "Present Simple Tense",
    topicUz: "Oddiy hozirgi zamon (Odatlar va doimiy faktlar)",
    ruleUz:
      "Present Simple kundalik odatlar, doimiy qoidalar va ilmiy haqiqatlarni ifodalash uchun ishlatiladi. He/She/It olmoshlaridan keyin fe'lga -s yoki -es qo'shiladi.",
    formula: "Ega (Subject) + Fe'l (V1/V-s) + To'ldiruvchi (Object)",
    examples: [
      {
        en: "I study biology at the university every day.",
        uz: "Men har kuni universitetda biologiya o'rganaman.",
      },
      { en: "Water boils at 100 degrees Celsius.", uz: "Suv 100 daraja Selsiyda qaynaydi." },
      {
        en: "She speaks English fluently with her professors.",
        uz: "U professorlari bilan inglizcha ravon gaplashadi.",
      },
    ],
    practice: {
      question: "He usually _____ to university by metro.",
      options: ["go", "goes", "going", "went"],
      correctIndex: 1,
      explanation: "Uchinchi shaxs birlikda (He/She/It) fe'lga '-es' qo'shiladi: He goes.",
    },
  },
  {
    id: "g2",
    level: "A2",
    title: "Past Simple vs Past Continuous",
    topicUz: "O'tgan oddiy zamon va O'tgan davomli zamon",
    ruleUz:
      "O'tgan zamonda biror harakat davom etayotgan paytda (Past Continuous) boshqa qisqa harakat uni bo'lib qo'ysa (Past Simple) 'when' yoki 'while' bilan bog'lanadi.",
    formula: "While + was/were + V-ing, Ega + V2 (Past Simple)",
    examples: [
      {
        en: "While I was preparing my coursework, my friend called me.",
        uz: "Men kurs ishimni tayyorlayotganimda do'stim qo'ng'iroq qildi.",
      },
      { en: "We conducted an experiment yesterday.", uz: "Biz kecha tajriba o'tkazdik." },
    ],
    practice: {
      question: "They _____ in the lab when the power went out.",
      options: ["are working", "were working", "worked", "was working"],
      correctIndex: 1,
      explanation: "'They' ko'plik shakli uchun Past Continuous da 'were working' ishlatiladi.",
    },
  },
  {
    id: "g3",
    level: "B1",
    title: "Present Perfect Tense",
    topicUz: "Hozirgi tugallangan zamon (Natijasi hozir ko'rinib turgan harakatlar)",
    ruleUz:
      "Harakat o'tmishda sodir bo'lgan, ammo uning natijasi ayni daqiqada muhim bo'lgan hollarda have/has + V3 shaklida ishlatiladi.",
    formula: "Ega + have/has + V3 (Past Participle)",
    examples: [
      {
        en: "I have already submitted my independent research project.",
        uz: "Men mustaqil ilmiy loyihamni topshirib bo'ldim.",
      },
      {
        en: "Scientists have discovered a new enzyme in microflora.",
        uz: "Olimlar mikroflorada yangi fermentni kashf etishdi.",
      },
    ],
    practice: {
      question: "Have you ever _____ an international conference in English?",
      options: ["attend", "attending", "attended", "attends"],
      correctIndex: 2,
      explanation: "Present Perfect savolida have/has + V3 (attended) ishlatiladi.",
    },
  },
  {
    id: "g4",
    level: "B2",
    title: "Passive Voice in Academic Writing",
    topicUz: "Akademik matnlarda Majhul nisbat",
    ruleUz:
      "Ilmiy maqolalar va kurs ishlarida shaxs emas, balki jarayon yoki natija birinchi o'ringa chiqqanda Majhul nisbatdan foydalaniladi.",
    formula: "Subject + to be (am/is/are/was/were) + Past Participle (V3)",
    examples: [
      {
        en: "The samples were collected from five different regions.",
        uz: "Namunalar besh xil hududdan yig'ib olindi.",
      },
      {
        en: "The research data has been thoroughly analyzed.",
        uz: "Tadqiqot ma'lumotlari chuqur tahlil qilindi.",
      },
    ],
    practice: {
      question: "The chemical reaction _____ under strict laboratory conditions.",
      options: ["was observed", "observed", "is observe", "was observing"],
      correctIndex: 0,
      explanation:
        "Reaksiya o'z-o'zidan emas, olimlar tomonidan kuzatilgan, shuning uchun Passive Voice: 'was observed'.",
    },
  },
  {
    id: "g5",
    level: "C1",
    title: "Inversion & Advanced Sentence Structures",
    topicUz: "Inversiya va murakkab sintaksis (IELTS 7.5+ & Academic Style)",
    ruleUz:
      "Inversiya gapga kuchli ta'sirchanlik va rasmiy ilmiy ohang beradi. Salbiy ma'noli so'zlar (Rarely, Seldom, Not only, Under no circumstances) gap boshida kelsa, yordamchi fe'l egadan oldinga o'tadi.",
    formula: "Negative Adverb + Auxiliary Verb + Subject + Main Verb",
    examples: [
      {
        en: "Rarely do we encounter such groundbreaking discoveries in genetics.",
        uz: "Genetikada bunday olamshumul kashfiyotlarga kamdan-kam duch kelamiz.",
      },
      {
        en: "Not only did the team publish the paper, but they also won the grant.",
        uz: "Jamoa nafaqat maqola chop etdi, balki grantni ham qo'lga kiritdi.",
      },
    ],
    practice: {
      question: "Seldom _____ such complex equations solved in the first trial.",
      options: ["are", "they are", "is", "have they"],
      correctIndex: 0,
      explanation:
        "Inversiyada 'Seldom' dan keyin yordamchi fe'l 'are' egadan oldin keladi: Seldom are such complex equations...",
    },
  },
];

const FLASHCARDS: Flashcard[] = [
  {
    id: "fc1",
    level: "A1",
    en: "Lecture",
    phonetic: "/ˈlek.tʃər/",
    uz: "Ma'ruza",
    exampleEn: "Our chemistry lecture starts at 9:00 AM.",
    exampleUz: "Bizning kimyo ma'ruzamiz ertalab soat 9:00 da boshlanadi.",
    category: "Universitet",
  },
  {
    id: "fc2",
    level: "A2",
    en: "Curriculum",
    phonetic: "/kəˈrɪk.jə.ləm/",
    uz: "O'quv dasturi, reja",
    exampleEn: "The biology curriculum covers modern genetics.",
    exampleUz: "Biologiya o'quv dasturi zamonaviy genetikani qamrab oladi.",
    category: "Ta'lim",
  },
  {
    id: "fc3",
    level: "B1",
    en: "Hypothesis",
    phonetic: "/haɪˈpɒθ.ə.sɪs/",
    uz: "Faraz, gipoteza",
    exampleEn: "The researchers formulated a clear hypothesis.",
    exampleUz: "Tadqiqotchilar aniq ilmiy gipotezani shakllantirdilar.",
    category: "Ilmiy tadqiqot",
  },
  {
    id: "fc4",
    level: "B2",
    en: "Comprehensive",
    phonetic: "/ˌkɒm.prɪˈhen.sɪv/",
    uz: "Keng qamrovli, har tomonlama",
    exampleEn: "He conducted a comprehensive review of literature.",
    exampleUz: "U ilmiy adabiyotlarni keng qamrovli tahlil qildi.",
    category: "Akademik so'zlar",
  },
  {
    id: "fc5",
    level: "C1",
    en: "Ubiquitous",
    phonetic: "/juːˈbɪk.wɪ.təs/",
    uz: "Hamma joyda uchraydigan, universal",
    exampleEn: "Microorganisms are ubiquitous in our biosphere.",
    exampleUz: "Mikroorganizmlar bizning biosferamizda hamma joyda uchraydi.",
    category: "Ilg'or terminlar",
  },
  {
    id: "fc6",
    level: "B1",
    en: "Methodology",
    phonetic: "/ˌmeθ.əˈdɒl.ə.dʒi/",
    uz: "Metodologiya, uslubiyot",
    exampleEn: "The methodology of the course project was approved.",
    exampleUz: "Kurs ishining metodologiyasi ma'qullandi.",
    category: "Kurs ishi",
  },
  {
    id: "fc7",
    level: "B2",
    en: "Substantiate",
    phonetic: "/səbˈstæn.ʃi.eɪt/",
    uz: "Isbotlamoq, asoslamoq",
    exampleEn: "You need empirical data to substantiate your claim.",
    exampleUz: "O'z da'vongizni asoslash uchun empirik ma'lumotlar kerak.",
    category: "Akademik bahs",
  },
  {
    id: "fc8",
    level: "A1",
    en: "Assignment",
    phonetic: "/əˈsaɪn.mənt/",
    uz: "Topshiriq, vazifa",
    exampleEn: "Please submit your independent assignment by Friday.",
    exampleUz: "Iltimos, mustaqil ish topshirig'ingizni jumagacha topshiring.",
    category: "Topshiriqlar",
  },
];

const LISTENING_EXERCISES: ListeningExercise[] = [
  {
    id: "l1",
    level: "A1",
    title: "Kutubxonadagi oddiy iltimos",
    targetSentence: "Excuse me, where can I find the biology textbooks?",
    contextUz: "Kutubxonachidan darsliklar qayerda ekanligini so'rash",
    hints: ["Excuse me", "where can I find", "the biology textbooks"],
  },
  {
    id: "l2",
    level: "B1",
    title: "Kurs ishi mavzusini tasdiqlash",
    targetSentence: "I have prepared the outline of my research paper for your review.",
    contextUz: "Professorga maqola rejasini ko'rib chiqish uchun taqdim etish",
    hints: ["I have prepared", "the outline of my research", "for your review"],
  },
  {
    id: "l3",
    level: "B2",
    title: "Laboratoriya xulosasi",
    targetSentence:
      "The experiment demonstrated a significant correlation between temperature and enzyme activity.",
    contextUz: "Harorat va ferment faolligi o'rtasidagi bog'liqlik xulosasi",
    hints: ["The experiment demonstrated", "a significant correlation", "enzyme activity"],
  },
];

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    level: "A1",
    question:
      "Choose the correct verb: 'Every student in our department _____ access to the digital library.'",
    options: ["have", "has", "having", "are having"],
    correct: 1,
    explanationUz:
      "'Every student' birlik tushuncha hisoblanadi, shuning uchun 'has' fe'li to'g'ri.",
  },
  {
    id: 2,
    level: "A2",
    question:
      "Complete the sentence: 'If you _____ biology diligently, you will pass the national certificate exam.'",
    options: ["study", "will study", "studied", "studying"],
    correct: 0,
    explanationUz: "First Conditional da 'If' bandida Present Simple (study) ishlatiladi.",
  },
  {
    id: 3,
    level: "B1",
    question:
      "Which word best fits: 'The professor asked us to write an _____ of the academic article.'",
    options: ["abstract", "admission", "ancestor", "accident"],
    correct: 0,
    explanationUz: "Ilmiy maqolaning qisqacha mazmuni 'abstract' (annotatsiya) deyiladi.",
  },
  {
    id: 4,
    level: "B2",
    question: "Identify the passive form: 'The genetic mutation _____ by researchers last month.'",
    options: ["was identified", "identifies", "has identified", "was identifying"],
    correct: 0,
    explanationUz:
      "'last month' o'tgan zamon bo'lgani uchun o'tgan zamon majhul nisbati 'was identified' to'g'ri.",
  },
  {
    id: 5,
    level: "C1",
    question: "Select the sentence with correct inversion:",
    options: [
      "Hardly had we started the presentation when the projector failed.",
      "Hardly we had started the presentation when the projector failed.",
      "Hardly started we the presentation when the projector failed.",
      "Hardly we did start the presentation when the projector failed.",
    ],
    correct: 0,
    explanationUz: "'Hardly had + Subject + V3' inversiya formulasi to'g'ri qo'llangan.",
  },
];

const DIALOGUES: { id: string; title: string; desc: string; lines: DialogueLine[] }[] = [
  {
    id: "d1",
    title: "Professor bilan kurs ishi maslahati",
    desc: "Talaba ilmiy rahbaridan kurs ishi bo'yicha maslahat olmoqda",
    lines: [
      {
        speaker: "Talaba (Aslonbek)",
        en: "Good afternoon, Professor. May I consult you about my coursework on genetics?",
        uz: "Xayrli kun, professor. Genetika bo'yicha kurs ishim yuzasidan maslahatlashsam bo'ladimi?",
      },
      {
        speaker: "Professor",
        en: "Good afternoon! Certainly. Have you finalized your research hypothesis and methodology?",
        uz: "Xayrli kun! Albatta. Tadqiqot gipotezangiz va metodologiyangizni aniqlab oldingizmi?",
      },
      {
        speaker: "Talaba (Aslonbek)",
        en: "Yes, I have collected the initial laboratory data and structured the literature review.",
        uz: "Ha, men dastlabki laboratoriya ma'lumotlarini to'pladim va adabiyotlar tahlilini shakllantirdim.",
      },
      {
        speaker: "Professor",
        en: "Excellent progress! Make sure to cite reliable peer-reviewed scientific journals.",
        uz: "Juda yaxshi natija! Ishonchli, taqriz qilingan ilmiy jurnallardan iqtibos keltirishni unutmang.",
      },
    ],
  },
  {
    id: "d2",
    title: "Xalqaro talabalar bilan kampusda muloqot",
    desc: "Universitet xalqaro ilmiy klubida talabalar tanishuvi",
    lines: [
      {
        speaker: "Student A",
        en: "Hello! Are you participating in the biology debate competition today?",
        uz: "Salom! Bugun biologiya bo'yicha bahs-munozara tanlovida qatnashyapsizmi?",
      },
      {
        speaker: "Student B",
        en: "Yes, our team is presenting a case study on renewable biofuels.",
        uz: "Ha, bizning jamoamiz qayta tiklanuvchi bioyoqilg'i bo'yicha amaliy tadqiqot taqdim etyapti.",
      },
      {
        speaker: "Student A",
        en: "That sounds fascinating! Best of luck with your presentation.",
        uz: "Bu juda qiziqarli eshitiladi! Taqdimotingizda omad tilayman.",
      },
    ],
  },
];

export function EnglishSection({ onBack }: Props) {
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>("B1");
  const [activeTab, setActiveTab] = useState<
    "videos" | "lessons" | "vocabulary" | "listening" | "test" | "speaking"
  >("videos");

  // Lessons state
  const [activeLessonId, setActiveLessonId] = useState<string>("g1");
  const [lessonAnswer, setLessonAnswer] = useState<number | null>(null);
  const [lessonFeedback, setLessonFeedback] = useState<boolean | null>(null);

  // Flashcards state
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [learnedCount, setLearnedCount] = useState(42);

  // Listening state
  const [activeListeningIndex, setActiveListeningIndex] = useState(0);
  const [userDictation, setUserDictation] = useState("");
  const [dictationChecked, setDictationChecked] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(0.9);

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Dialogue state
  const [activeDialogueId, setActiveDialogueId] = useState("d1");
  const [showUzTranslation, setShowUzTranslation] = useState(true);

  const dictationInputId = useId();

  const speak = (text: string, rate = speechRate) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  };

  const filteredFlashcards = FLASHCARDS.filter(
    (c) => c.level === selectedLevel || selectedLevel === "B1" || selectedLevel === "B2",
  );
  const currentCard =
    filteredFlashcards[cardIndex % Math.max(1, filteredFlashcards.length)] ?? FLASHCARDS[0];

  const currentListening = LISTENING_EXERCISES[activeListeningIndex] ?? LISTENING_EXERCISES[0];
  const currentLesson = GRAMMAR_LESSONS.find((l) => l.id === activeLessonId) ?? GRAMMAR_LESSONS[0];
  const currentDialogue = DIALOGUES.find((d) => d.id === activeDialogueId) ?? DIALOGUES[0];

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  return (
    <div className="space-y-6 px-4 pb-16 md:px-8">
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-4 pt-2">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-all hover:bg-muted hover:shadow-sm"
          >
            <ArrowLeft className="h-4 w-4 text-primary" />
            <span>Bosh sahifaga qaytish</span>
          </button>
          <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
            <span>EduUni</span>
            <span>/</span>
            <span className="font-semibold text-foreground">Ingliz tili (0 dan C1 gacha)</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <Flame className="h-4 w-4" /> 5 kunlik faollik
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-4 w-4" /> {learnedCount} so'z o'rganildi
          </span>
        </div>
      </div>

      {/* Hero Banner for English */}
      <div className="relative overflow-hidden rounded-3xl bg-sidebar-grad p-6 text-navy-foreground shadow-card md:p-8">
        <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-cyan/30 blob" />
        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-3">
              <img src={icEn} alt="Ingliz tili" className="h-10 w-10 object-contain drop-shadow" />
              <span className="rounded-md bg-navy-foreground/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan">
                Universitet talabalari uchun
              </span>
            </div>
            <h1 className="text-2xl font-extrabold md:text-4xl">
              Ingliz tili: <span className="text-shine">0 dan C1 gacha</span> bosqichma-bosqich
            </h1>
            <p className="text-sm leading-relaxed text-navy-foreground/80 md:text-base">
              Grammatika, ilmiy va akademik so'zlar, interaktiv diktantlar hamda xalqaro CEFR va
              IELTS imtihonlariga samarali tayyorgarlik platformasi.
            </p>
          </div>

          {/* Quick CEFR selector bar */}
          <div className="flex flex-col gap-2 rounded-2xl bg-navy-foreground/10 p-4 backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan">
              Darajani tanlang (CEFR):
            </p>
            <div className="flex flex-wrap gap-1.5">
              {CEFR_LEVELS.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedLevel(lvl.id)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                    selectedLevel === lvl.id
                      ? "bg-cyan text-navy shadow-glow scale-105"
                      : "bg-navy-foreground/15 text-navy-foreground hover:bg-navy-foreground/25"
                  }`}
                >
                  {lvl.id}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-navy-foreground/70">
              {CEFR_LEVELS.find((l) => l.id === selectedLevel)?.sub}
            </p>
          </div>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border pb-2">
        {[
          { id: "videos", label: "Video darslar (180 ta)", icon: Tv },
          { id: "lessons", label: "Darslar & Grammatika", icon: BookOpen },
          { id: "vocabulary", label: "So'z boyligi & Flashcard", icon: Sparkles },
          { id: "listening", label: "Tinglab tushunish & Diktant", icon: Headphones },
          { id: "test", label: "Darajani aniqlash testi", icon: Award },
          { id: "speaking", label: "Speaking & Muloqot", icon: MessageCircle },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 0: VIDEO LESSONS (180 videos) */}
      {activeTab === "videos" && <EnglishVideoLessons />}

      {/* TAB 1: GRAMMAR LESSONS */}
      {activeTab === "lessons" && (
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          {/* Lessons list */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
              <GraduationCap className="h-5 w-5 text-primary" /> Mavzular ro'yxati
            </h3>
            <div className="space-y-2">
              {GRAMMAR_LESSONS.map((lesson) => {
                const isSelected = activeLessonId === lesson.id;
                return (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      setActiveLessonId(lesson.id);
                      setLessonAnswer(null);
                      setLessonFeedback(null);
                    }}
                    className={`flex w-full flex-col items-start rounded-2xl border p-4 text-left transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-border bg-card hover:border-primary/40 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                        {lesson.level}
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 text-muted-foreground transition-transform ${isSelected ? "translate-x-1 text-primary" : ""}`}
                      />
                    </div>
                    <h4 className="mt-2 text-sm font-bold text-foreground">{lesson.title}</h4>
                    <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                      {lesson.topicUz}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Lesson Content */}
          <div className="space-y-6 rounded-3xl border border-border bg-card p-6 shadow-card">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                  {currentLesson.level} daraja
                </span>
                <span className="text-xs text-muted-foreground">Akademik grammatika kursi</span>
              </div>
              <h2 className="mt-2 text-2xl font-extrabold text-foreground">
                {currentLesson.title}
              </h2>
              <p className="text-sm font-medium text-muted-foreground">{currentLesson.topicUz}</p>
            </div>

            {/* Formula / Rule Box */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Qoida va formula:
              </p>
              <div className="mt-2 rounded-xl bg-card p-3 font-mono text-sm font-semibold text-foreground shadow-sm">
                {currentLesson.formula}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                {currentLesson.ruleUz}
              </p>
            </div>

            {/* Examples with Audio playback */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-foreground">
                Misollar (Tinglash va o'rganish):
              </h4>
              <div className="space-y-2">
                {currentLesson.examples.map((ex) => (
                  <div
                    key={ex.en}
                    className="flex flex-col gap-2 rounded-2xl border border-border bg-muted/40 p-3.5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-semibold text-foreground">{ex.en}</p>
                      <p className="text-xs text-muted-foreground">{ex.uz}</p>
                    </div>
                    <button
                      onClick={() => speak(ex.en)}
                      className="flex shrink-0 items-center gap-1.5 self-start rounded-xl bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:self-auto"
                      title="Talaffuzni eshitish"
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                      <span>Eshitish</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini practice check */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h4 className="flex items-center gap-2 text-sm font-bold text-foreground">
                <HelpCircle className="h-4 w-4 text-cyan" /> Bilimni sinab ko'ring (Tezkor mashq):
              </h4>
              <p className="mt-2 text-sm font-medium text-foreground">
                {currentLesson.practice.question}
              </p>

              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {currentLesson.practice.options.map((opt, idx) => {
                  const isChosen = lessonAnswer === idx;
                  const isCorrect = idx === currentLesson.practice.correctIndex;
                  return (
                    <button
                      key={opt}
                      onClick={() => {
                        setLessonAnswer(idx);
                        setLessonFeedback(isCorrect);
                      }}
                      className={`rounded-xl border p-2.5 text-center text-sm font-bold transition-all ${
                        isChosen
                          ? isCorrect
                            ? "border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                            : "border-destructive bg-destructive/10 text-destructive"
                          : "border-border bg-muted/50 hover:bg-muted"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {lessonFeedback !== null && (
                <div
                  className={`mt-4 flex items-start gap-2 rounded-xl p-3 text-xs leading-relaxed ${
                    lessonFeedback
                      ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                      : "bg-destructive/10 text-destructive"
                  }`}
                >
                  {lessonFeedback ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  ) : (
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  )}
                  <div>
                    <span className="font-bold">
                      {lessonFeedback ? "To'g'ri javob! " : "Noto'g'ri. "}
                    </span>
                    <span>{currentLesson.practice.explanation}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: VOCABULARY & FLASHCARDS */}
      {activeTab === "vocabulary" && (
        <div className="space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Interaktiv so'z kartochkalari (Flashcards)
              </h3>
              <p className="text-xs text-muted-foreground">
                Kartochkani bosib tarjimasini ko'ring, talaffuzni eshiting va o'rganilgan deb
                belgilang.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-muted-foreground">
                Kartochka {(cardIndex % filteredFlashcards.length) + 1} /{" "}
                {filteredFlashcards.length}
              </span>
            </div>
          </div>

          {/* Flashcard container */}
          <div className="mx-auto max-w-xl">
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="group relative flex min-h-[300px] cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border-2 border-border bg-card p-8 shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
            >
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="rounded-md bg-primary/10 px-2.5 py-1 font-bold text-primary">
                  {currentCard.level} · {currentCard.category}
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <RotateCcw className="h-3.5 w-3.5" /> Ag'darish uchun bosing
                </span>
              </div>

              {!isFlipped ? (
                /* Front Side: English */
                <div className="my-auto text-center space-y-3">
                  <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
                    {currentCard.en}
                  </h2>
                  <p className="font-mono text-base text-primary">{currentCard.phonetic}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speak(currentCard.en);
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    <Volume2 className="h-4 w-4" /> Talaffuzni eshitish
                  </button>
                  <p className="mt-4 text-xs italic text-muted-foreground">
                    "{currentCard.exampleEn}"
                  </p>
                </div>
              ) : (
                /* Back Side: Uzbek */
                <div className="my-auto text-center space-y-3">
                  <h2 className="text-3xl font-extrabold text-cyan">{currentCard.uz}</h2>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    O'zbekcha tarjimasi
                  </p>
                  <div className="rounded-xl bg-muted/60 p-3 text-xs text-foreground">
                    <p className="font-semibold text-primary">Namuna konteksti:</p>
                    <p className="mt-1 italic">"{currentCard.exampleUz}"</p>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>Holat: {!isFlipped ? "Inglizcha (Front)" : "O'zbekcha (Back)"}</span>
                <span className="text-primary font-bold">EduUni Flashcard</span>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={() => {
                  setIsFlipped(false);
                  setCardIndex((prev) => (prev > 0 ? prev - 1 : filteredFlashcards.length - 1));
                }}
                className="rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-muted"
              >
                Oldingisi
              </button>

              <button
                onClick={() => {
                  setLearnedCount((c) => c + 1);
                  setIsFlipped(false);
                  setCardIndex((prev) => prev + 1);
                }}
                className="flex items-center gap-2 rounded-xl bg-primary-grad px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-glow transition-all hover:scale-105"
              >
                <Check className="h-4 w-4" /> O'rgandim! Keyingisi
              </button>

              <button
                onClick={() => {
                  setIsFlipped(false);
                  setCardIndex((prev) => prev + 1);
                }}
                className="rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-muted"
              >
                Keyingisi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: LISTENING & DICTATION */}
      {activeTab === "listening" && (
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6 rounded-3xl border border-border bg-card p-6 shadow-card">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                  {currentListening.level}
                </span>
                <span className="text-xs text-muted-foreground">Audio diktant mashqi</span>
              </div>
              <h3 className="mt-1 text-xl font-bold text-foreground">{currentListening.title}</h3>
              <p className="text-xs text-muted-foreground">{currentListening.contextUz}</p>
            </div>

            {/* Audio player card */}
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-sidebar-grad p-8 text-center text-navy-foreground shadow-inner">
              <button
                onClick={() => speak(currentListening.targetSentence)}
                className="group flex h-20 w-20 items-center justify-center rounded-full bg-cyan text-navy shadow-glow transition-all duration-300 hover:scale-110"
                title="Gapni eshitish"
              >
                <Play className="ml-1 h-8 w-8 fill-current" />
              </button>
              <div>
                <p className="text-base font-bold text-cyan">
                  Tugmani bosing va diqqat bilan eshiting
                </p>
                <p className="text-xs text-navy-foreground/75">
                  Eshitgan jumlangizni pastdagi maydonga yozing
                </p>
              </div>

              {/* Speech speed selector */}
              <div className="flex items-center gap-2 rounded-xl bg-navy-foreground/10 px-3 py-1.5 text-xs">
                <span>Tezlik:</span>
                {[0.75, 0.9, 1.1].map((r) => (
                  <button
                    key={r}
                    onClick={() => setSpeechRate(r)}
                    className={`rounded-md px-2 py-0.5 font-bold transition-all ${
                      speechRate === r
                        ? "bg-cyan text-navy"
                        : "text-navy-foreground hover:bg-navy-foreground/20"
                    }`}
                  >
                    {r}x
                  </button>
                ))}
              </div>
            </div>

            {/* Dictation Input Form */}
            <div className="space-y-3">
              <label
                htmlFor={dictationInputId}
                className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Eshitgan jumlangizni kiriting:
              </label>
              <textarea
                id={dictationInputId}
                value={userDictation}
                onChange={(e) => {
                  setUserDictation(e.target.value);
                  setDictationChecked(false);
                }}
                placeholder="Masalan: Excuse me, where can I find..."
                className="w-full rounded-2xl border border-border bg-muted/30 p-4 text-sm font-medium text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                rows={3}
              />

              <div className="flex items-center justify-between">
                <button
                  onClick={() => speak(currentListening.targetSentence)}
                  className="flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
                >
                  <Volume2 className="h-4 w-4" /> Qayta eshitish
                </button>
                <button
                  onClick={() => setDictationChecked(true)}
                  disabled={!userDictation.trim()}
                  className="rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 disabled:opacity-50"
                >
                  Tekshirish
                </button>
              </div>
            </div>

            {/* Dictation Evaluation Result */}
            {dictationChecked && (
              <div
                className={`rounded-2xl border p-4 text-sm ${
                  userDictation
                    .trim()
                    .toLowerCase()
                    .replace(/[.,?!]/g, "") ===
                  currentListening.targetSentence
                    .trim()
                    .toLowerCase()
                    .replace(/[.,?!]/g, "")
                    ? "border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300"
                    : "border-border bg-muted/60 text-foreground"
                }`}
              >
                <p className="font-bold">To'g'ri variant:</p>
                <p className="mt-1 font-mono text-base font-semibold text-primary">
                  "{currentListening.targetSentence}"
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Sizning yozganingiz: "{userDictation}"
                </p>
              </div>
            )}
          </div>

          {/* Listening Playlist */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-foreground">Boshqa mashqlar</h4>
            <div className="space-y-2">
              {LISTENING_EXERCISES.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveListeningIndex(idx);
                    setUserDictation("");
                    setDictationChecked(false);
                  }}
                  className={`flex w-full flex-col items-start rounded-2xl border p-4 text-left transition-all ${
                    activeListeningIndex === idx
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border bg-card hover:bg-muted/50"
                  }`}
                >
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                    {item.level}
                  </span>
                  <p className="mt-1 text-sm font-bold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.contextUz}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: PLACEMENT & CEFR TEST */}
      {activeTab === "test" && (
        <div className="space-y-6 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                CEFR Test
              </span>
              <span className="text-xs text-muted-foreground">
                Universitet talabalari uchun diagnostik test
              </span>
            </div>
            <h3 className="mt-2 text-2xl font-extrabold text-foreground">
              Ingliz tili darajasini aniqlash testi
            </h3>
            <p className="text-xs text-muted-foreground">
              Barcha savollarga javob bering va o'z bilim darajangiz (A1-C1) bo'yicha tavsiyalarni
              oling.
            </p>
          </div>

          <div className="space-y-6">
            {QUIZ_QUESTIONS.map((q, idx) => {
              const selectedOpt = quizAnswers[q.id];
              return (
                <div key={q.id} className="rounded-2xl border border-border bg-muted/20 p-5">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-bold text-primary">
                      Savol #{idx + 1} ({q.level})
                    </span>
                    {quizSubmitted && selectedOpt === q.correct && (
                      <span className="flex items-center gap-1 font-bold text-emerald-600">
                        <CheckCircle2 className="h-3.5 w-3.5" /> To'g'ri
                      </span>
                    )}
                    {quizSubmitted && selectedOpt !== undefined && selectedOpt !== q.correct && (
                      <span className="flex items-center gap-1 font-bold text-destructive">
                        <XCircle className="h-3.5 w-3.5" /> Xato
                      </span>
                    )}
                  </div>
                  <h4 className="mt-2 text-sm font-semibold text-foreground md:text-base">
                    {q.question}
                  </h4>

                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {q.options.map((opt, optIdx) => {
                      const isChosen = selectedOpt === optIdx;
                      const isCorrect = optIdx === q.correct;
                      return (
                        <button
                          key={opt}
                          disabled={quizSubmitted}
                          onClick={() => setQuizAnswers((prev) => ({ ...prev, [q.id]: optIdx }))}
                          className={`flex items-center gap-3 rounded-xl border p-3 text-left text-xs font-semibold transition-all md:text-sm ${
                            quizSubmitted
                              ? isCorrect
                                ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold"
                                : isChosen
                                  ? "border-destructive bg-destructive/10 text-destructive"
                                  : "border-border bg-card opacity-60"
                              : isChosen
                                ? "border-primary bg-primary/10 text-primary shadow-sm"
                                : "border-border bg-card hover:border-primary/40 hover:bg-muted"
                          }`}
                        >
                          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-muted font-mono text-xs">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <p className="mt-3 text-xs text-muted-foreground border-t border-border pt-2">
                      <strong className="text-foreground">Izoh: </strong>
                      {q.explanationUz}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {!quizSubmitted ? (
            <div className="flex justify-end pt-4">
              <button
                onClick={() => setQuizSubmitted(true)}
                disabled={Object.keys(quizAnswers).length < QUIZ_QUESTIONS.length}
                className="rounded-full bg-primary-grad px-8 py-3 text-sm font-bold text-primary-foreground shadow-glow transition-all hover:scale-105 disabled:opacity-50"
              >
                Natijani hisoblash ({Object.keys(quizAnswers).length}/{QUIZ_QUESTIONS.length})
              </button>
            </div>
          ) : (
            <div className="rounded-3xl bg-sidebar-grad p-6 text-center text-navy-foreground shadow-card">
              <Award className="mx-auto h-12 w-12 text-cyan float" />
              <h4 className="mt-3 text-2xl font-extrabold">
                Sizning natijangiz: {calculateScore()} / {QUIZ_QUESTIONS.length}
              </h4>
              <p className="mt-1 text-sm text-cyan">
                {calculateScore() >= 4
                  ? "Tavsiya etilgan daraja: B2 — Upper-Intermediate / IELTS tayyorgarlik"
                  : "Tavsiya etilgan daraja: B1 — Intermediate darslaridan boshlang"}
              </p>
              <button
                onClick={() => {
                  setQuizAnswers({});
                  setQuizSubmitted(false);
                }}
                className="mt-5 rounded-full bg-card px-6 py-2.5 text-xs font-bold text-primary shadow-card transition-all hover:scale-105"
              >
                Testni qayta topshirish
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB 5: SPEAKING & UNIVERSITY DIALOGUES */}
      {activeTab === "speaking" && (
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* Dialogue switcher */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-foreground">Universitet vaziyatlari</h4>
            <div className="space-y-2">
              {DIALOGUES.map((dlg) => (
                <button
                  key={dlg.id}
                  onClick={() => setActiveDialogueId(dlg.id)}
                  className={`flex w-full flex-col items-start rounded-2xl border p-4 text-left transition-all ${
                    activeDialogueId === dlg.id
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border bg-card hover:bg-muted/50"
                  }`}
                >
                  <p className="text-sm font-bold text-foreground">{dlg.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{dlg.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Dialogue Lines */}
          <div className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">{currentDialogue.title}</h3>
                <p className="text-xs text-muted-foreground">{currentDialogue.desc}</p>
              </div>
              <button
                onClick={() => setShowUzTranslation(!showUzTranslation)}
                className="rounded-xl border border-border bg-muted/50 px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-muted"
              >
                {showUzTranslation
                  ? "O'zbekcha tarjimani yashirish"
                  : "O'zbekcha tarjimani ko'rsatish"}
              </button>
            </div>

            <div className="space-y-4 pt-2">
              {currentDialogue.lines.map((line) => (
                <div
                  key={line.en}
                  className="rounded-2xl border border-border/80 bg-muted/20 p-4 transition-all hover:border-primary/40 hover:bg-muted/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs uppercase tracking-wider text-primary">
                      {line.speaker}
                    </span>
                    <button
                      onClick={() => speak(line.en)}
                      className="flex items-center gap-1.5 rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                      title="Audio talaffuz"
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                      <span>Eshitish</span>
                    </button>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-foreground md:text-base">
                    "{line.en}"
                  </p>
                  {showUzTranslation && (
                    <p className="mt-1 text-xs text-muted-foreground">{line.uz}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
