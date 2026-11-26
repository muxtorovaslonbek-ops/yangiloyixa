import { useState, useMemo, useEffect, useRef } from "react";
import {
  ArrowLeft,
  BookOpen,
  Search,
  CheckCircle2,
  Circle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
  Binary,
  Maximize2,
  BookmarkCheck,
  Table2,
  HelpCircle,
  ListChecks,
  GraduationCap,
  FileText,
  FlaskConical,
  ClipboardList,
} from "lucide-react";
import bioinformatikaImg from "@/assets/images/bioinformatika_card_1795550419194.jpg";
import {
  BIOINFORMATIKA_PRACTICAL_TOPICS,
  type BioinformatikaCategory,
  type BioinformatikaPdfDocument,
  type BioinformatikaTopic,
} from "@/data/bioinformatikaTopics";
import { PdfSlideViewer } from "./PdfSlideViewer";

function getTopicPdfDocuments(topic: BioinformatikaTopic): BioinformatikaPdfDocument[] {
  if (topic.pdfDocuments && topic.pdfDocuments.length > 0) {
    return topic.pdfDocuments;
  }
  if (topic.pdfUrl) {
    return [
      {
        title: topic.pdfTitle || `${topic.topicLabel} — PDF`,
        url: topic.pdfUrl,
      },
    ];
  }
  return [];
}

interface BioinformatikaSectionProps {
  onBack: () => void;
  onAskAi?: (prompt: string) => void;
}

export function BioinformatikaSection({ onBack, onAskAi }: BioinformatikaSectionProps) {
  const [sectionTab, setSectionTab] = useState<BioinformatikaCategory>("amaliy");
  const [moduleFilter, setModuleFilter] = useState<
    | "all"
    | "I qism: Axborot nazariyasi, bazalar va ketma-ketliklarni tekislash"
    | "II qism: Filogenetika, genom tahrirlash va oqsil strukturalari"
    | "done"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [readerTab, setReaderTab] = useState<"all" | "pdf" | "lecture">("all");
  const [selectedPdfIndex, setSelectedPdfIndex] = useState(0);
  const [revealedAnswers, setRevealedAnswers] = useState<Set<number>>(new Set());
  const topicScrollRef = useRef<HTMLDivElement>(null);

  // Persist completed Bioinformatika topics in localStorage
  const [completedIds, setCompletedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem("eduuni_bioinformatika_completed");
      if (saved) return new Set(JSON.parse(saved));
    } catch {
      // Ignore
    }
    return new Set(["bioinf-amaliy-1"]);
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "eduuni_bioinformatika_completed",
        JSON.stringify(Array.from(completedIds)),
      );
    } catch {
      // Ignore
    }
  }, [completedIds]);

  useEffect(() => {
    setRevealedAnswers(new Set());
    setReaderTab("all");
    setSelectedPdfIndex(0);
    if (topicScrollRef.current) {
      topicScrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedTopicId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedTopicId) {
          setSelectedTopicId(null);
        } else {
          onBack();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedTopicId, onBack]);

  const toggleCompleted = (id: string) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleRevealAnswer = (idx: number) => {
    setRevealedAnswers((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const currentSectionTopics = useMemo(() => {
    if (sectionTab === "amaliy") return BIOINFORMATIKA_PRACTICAL_TOPICS;
    return [];
  }, [sectionTab]);

  const filteredTopics = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return currentSectionTopics.filter((topic) => {
      if (moduleFilter === "done" && !completedIds.has(topic.id)) return false;
      if (moduleFilter !== "all" && moduleFilter !== "done" && topic.module !== moduleFilter) {
        return false;
      }

      if (q) {
        const searchable =
          `${topic.code} ${topic.topicLabel} ${topic.module} ${topic.title} ${topic.overview} ${topic.syllabusPoints.join(" ")} ${topic.keyTerms.join(" ")}`.toLowerCase();
        if (!searchable.includes(q)) return false;
      }
      return true;
    });
  }, [currentSectionTopics, moduleFilter, searchQuery, completedIds]);

  const activeTopic: BioinformatikaTopic | null = useMemo(() => {
    if (!selectedTopicId) return null;
    return BIOINFORMATIKA_PRACTICAL_TOPICS.find((t) => t.id === selectedTopicId) ?? null;
  }, [selectedTopicId]);

  const activeTopicIndex = activeTopic
    ? BIOINFORMATIKA_PRACTICAL_TOPICS.findIndex((t) => t.id === activeTopic.id)
    : -1;

  const activeTopicDocs = useMemo(
    () => (activeTopic ? getTopicPdfDocuments(activeTopic) : []),
    [activeTopic],
  );
  const activePdf = activeTopicDocs[selectedPdfIndex] ?? activeTopicDocs[0] ?? null;

  const progressPercent = Math.round(
    (completedIds.size / BIOINFORMATIKA_PRACTICAL_TOPICS.length) * 100,
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background text-foreground">
      {/* Sticky Full-Window Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2.5 px-3 py-2.5 sm:gap-4 sm:px-4 sm:py-3.5 md:px-8">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={onBack}
              className="flex min-h-[38px] shrink-0 items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-xs font-bold text-foreground transition-all hover:bg-muted sm:gap-2 sm:px-4 md:text-sm"
            >
              <ArrowLeft className="h-4 w-4 text-primary" />
              <span>Darsliklarga qaytish</span>
            </button>

            <div className="hidden min-w-0 items-center gap-2.5 border-l border-border pl-3 sm:flex">
              <img
                src={bioinformatikaImg}
                alt="Bioinformatika logosi"
                className="h-9 w-9 shrink-0 rounded-lg object-cover shadow-sm"
              />
              <div className="min-w-0">
                <h1 className="truncate text-sm font-extrabold leading-tight md:text-base">
                  Bioinformatika fani
                </h1>
                <p className="truncate text-[11px] text-muted-foreground">
                  Amaliy mashg‘ulotlar · 1–{BIOINFORMATIKA_PRACTICAL_TOPICS.length}-amaliy
                  mashg‘ulot ({BIOINFORMATIKA_PRACTICAL_TOPICS.length} ta PDF)
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-2.5 py-1.5 text-xs sm:gap-2 sm:px-3.5 sm:py-2">
              <BookmarkCheck className="h-4 w-4 shrink-0 text-emerald-500" />
              <span className="hidden font-semibold text-muted-foreground sm:inline">
                O‘zlashtirildi:
              </span>
              <span className="font-extrabold text-primary tabular-nums">
                {completedIds.size} / {BIOINFORMATIKA_PRACTICAL_TOPICS.length} ({progressPercent}%)
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Full-Window Workspace */}
      <div className="mx-auto max-w-7xl space-y-5 px-3 py-4 sm:space-y-6 sm:px-4 sm:py-6 md:px-8">
        {/* Hero Banner */}
        <section className="relative overflow-hidden rounded-2xl bg-sidebar-grad p-4 text-navy-foreground shadow-card sm:rounded-3xl sm:p-6 md:p-8">
          <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-cyan/20 blob" />
          <div className="relative z-10 flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4">
              <img
                src={bioinformatikaImg}
                alt="Bioinformatika"
                className="h-16 w-16 shrink-0 rounded-2xl border-2 border-cyan/40 object-cover shadow-glow sm:h-20 sm:w-20 md:h-24 md:w-24"
              />
              <div className="max-w-2xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan">
                  <Binary className="h-4 w-4 shrink-0" />
                  <span>Bioinformatika darsligi · Amaliy mashg‘ulotlar to‘plami</span>
                </div>
                <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl">
                  Bioinformatika: Axborot nazariyasi, BLAST, filogenetika, CRISPR va PDB tahlili
                </h2>
                <p className="text-xs leading-relaxed text-navy-foreground/85 md:text-sm">
                  Bioinformatika fanining amaliy qismidagi barcha{" "}
                  {BIOINFORMATIKA_PRACTICAL_TOPICS.length} ta mashg‘ulot (1-amaliy mashg‘ulotdan{" "}
                  {BIOINFORMATIKA_PRACTICAL_TOPICS.length}-amaliy mashg‘ulotgacha) ketma-ket
                  kartochkalarda jamlangan. Har bir mashg‘ulot to‘liq oynada rasmiy PDF qo‘llanma,
                  maqsad-vazifalar, qiyosiy jadval, glossariy va nazorat savollari bilan ochiladi.
                </p>
              </div>
            </div>

            <div className="w-full shrink-0 space-y-2 rounded-2xl bg-navy-foreground/10 p-4 backdrop-blur-md lg:w-64">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-navy-foreground/80">Amaliy qism natijasi</span>
                <span className="font-extrabold text-cyan tabular-nums">{progressPercent}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-navy-foreground/20">
                <div
                  className="h-full rounded-full bg-cyan transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-[11px] text-navy-foreground/75">
                {completedIds.size} ta amaliy mashg‘ulot bajarildi (
                {BIOINFORMATIKA_PRACTICAL_TOPICS.length - completedIds.size} ta qoldi)
              </p>
            </div>
          </div>
        </section>

        {/* Textbook Part Switcher (Amaliy / Ma'ruza / Laboratoriya) */}
        <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-card p-2.5 shadow-sm">
          {[
            {
              id: "amaliy" as BioinformatikaCategory,
              label: `Amaliy qism (${BIOINFORMATIKA_PRACTICAL_TOPICS.length})`,
              icon: ClipboardList,
            },
            {
              id: "maruza" as BioinformatikaCategory,
              label: "Ma’ruzalar (tez kunda)",
              icon: BookOpen,
            },
            {
              id: "laboratoriya" as BioinformatikaCategory,
              label: "Laboratoriya (tez kunda)",
              icon: FlaskConical,
            },
          ].map((tab) => {
            const TabIcon = tab.icon;
            const isActive = sectionTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSectionTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <TabIcon className="h-4 w-4 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search & Module Filters (shown when section has topics) */}
        {currentSectionTopics.length > 0 && (
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-sm sm:gap-4 sm:p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
              {[
                {
                  id: "all",
                  label: `Barcha amaliy mashg‘ulotlar (${BIOINFORMATIKA_PRACTICAL_TOPICS.length})`,
                },
                {
                  id: "I qism: Axborot nazariyasi, bazalar va ketma-ketliklarni tekislash",
                  label: "Bazalar va tekislash (1–5)",
                },
                {
                  id: "II qism: Filogenetika, genom tahrirlash va oqsil strukturalari",
                  label: "Filogeniya, CRISPR va PDB (6–10)",
                },
                { id: "done", label: `O‘zlashtirilganlar (${completedIds.size})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setModuleFilter(tab.id as typeof moduleFilter)}
                  className={`shrink-0 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                    moduleFilter === tab.id
                      ? "bg-primary font-bold text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Amaliyot raqami (1–10) yoki atama..."
                className="w-full rounded-xl border border-border bg-muted/40 py-2.5 pl-9 pr-8 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 sm:py-2 sm:text-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* RECTANGULAR TOPIC CARDS GRID */}
        {currentSectionTopics.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-card p-10 text-center">
            <BookOpen className="mx-auto h-10 w-10 text-primary/60" />
            <h3 className="mt-3 text-base font-extrabold text-foreground">
              {sectionTab === "maruza"
                ? "Ma’ruzalar bo‘limi tayyorlanmoqda"
                : "Laboratoriya mashg‘ulotlari bo‘limi tayyorlanmoqda"}
            </h3>
            <p className="mx-auto mt-1.5 max-w-md text-xs leading-relaxed text-muted-foreground">
              Hozircha Bioinformatika fanining barcha 10 ta amaliy mashg‘ulot PDF qo‘llanmalari
              yuklangan. Amaliy qismga qaytib darslarni o‘qishingiz mumkin.
            </p>
            <button
              type="button"
              onClick={() => setSectionTab("amaliy")}
              className="mt-4 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Amaliy qismga o‘tish (10 ta PDF)
            </button>
          </div>
        ) : filteredTopics.length > 0 ? (
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {filteredTopics.map((topic) => {
              const isDone = completedIds.has(topic.id);
              const topicDocs = getTopicPdfDocuments(topic);
              return (
                <div
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`group flex cursor-pointer flex-col justify-between rounded-2xl border bg-card p-4 shadow-card transition-all duration-300 active:scale-[0.99] sm:p-5 sm:hover:-translate-y-1 sm:hover:shadow-glow ${
                    isDone ? "border-emerald-500/40" : "border-border hover:border-primary/50"
                  }`}
                >
                  <div>
                    {/* Card Top Metadata Row */}
                    <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-3">
                      <div className="flex min-w-0 items-center gap-2 text-xs">
                        <span className="shrink-0 rounded-lg bg-primary/10 px-2.5 py-1 font-mono font-extrabold text-primary tabular-nums">
                          {topic.topicLabel}
                        </span>
                        <span aria-hidden="true" className="text-muted-foreground">
                          ·
                        </span>
                        <span className="truncate text-[11px] font-medium text-muted-foreground">
                          {topic.code}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCompleted(topic.id);
                        }}
                        title={isDone ? "O‘zlashtirilgan" : "O‘zlashtirildi deb belgilash"}
                        className={`shrink-0 rounded-full p-1 transition-colors ${
                          isDone
                            ? "text-emerald-500 hover:bg-emerald-500/10"
                            : "text-muted-foreground/50 hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {isDone ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <Circle className="h-5 w-5" />
                        )}
                      </button>
                    </div>

                    {/* Topic Title */}
                    <h3 className="mt-3 text-[15px] font-bold leading-snug text-foreground transition-colors group-hover:text-primary sm:mt-3.5 sm:text-base">
                      {topic.title}
                    </h3>

                    {/* Overview Summary Preview */}
                    <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:mt-2">
                      {topic.overview}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2.5 border-t border-border/60 pt-3 text-xs sm:mt-5 sm:pt-3.5">
                    <span className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-muted-foreground">
                      <span>
                        {topic.sections.length} ta bo‘lim · {topic.selfCheckQuestions.length} ta
                        savol
                      </span>
                      {topicDocs.length > 0 && (
                        <span className="inline-flex items-center gap-1 rounded-md bg-rose-500/10 px-1.5 py-0.5 font-semibold text-rose-600 dark:text-rose-400">
                          <FileText className="h-3 w-3" />
                          {topicDocs.length > 1 ? `${topicDocs.length} PDF` : "PDF"}
                        </span>
                      )}
                    </span>

                    <span className="flex items-center gap-1.5 rounded-xl bg-primary/10 px-3 py-1.5 font-bold text-primary transition-transform group-hover:translate-x-0.5 sm:bg-transparent sm:p-0">
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>Mashg‘ulotni ochish</span>
                      <Maximize2 className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
            <BookOpen className="mx-auto h-10 w-10 text-muted-foreground/50" />
            <p className="mt-3 text-sm font-bold text-foreground">
              Qidiruv bo‘yicha amaliy mashg‘ulot topilmadi
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setModuleFilter("all");
              }}
              className="mt-3 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground"
            >
              Barcha amaliy mashg‘ulotlarni ko‘rsatish
            </button>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* FULL-WINDOW PRACTICAL SESSION READER */}
      {/* ========================================================= */}
      {activeTopic && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-background text-foreground">
          {/* Sticky Top Navigation Bar */}
          <header className="shrink-0 border-b border-border bg-background/95 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3.5 md:px-8">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedTopicId(null)}
                  className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground transition-all hover:bg-muted md:text-sm"
                >
                  <ArrowLeft className="h-4 w-4 text-primary" />
                  <span>Barcha mashg‘ulotlarga qaytish</span>
                </button>

                <div className="hidden items-center gap-2 border-l border-border pl-3 text-xs sm:flex">
                  <span className="rounded-lg bg-primary px-2.5 py-0.5 font-mono font-extrabold text-primary-foreground tabular-nums">
                    {activeTopic.topicLabel}
                  </span>
                  <span className="font-semibold text-muted-foreground">Amaliy qism</span>
                  <span aria-hidden="true" className="text-muted-foreground">
                    ·
                  </span>
                  <span className="font-mono text-muted-foreground">{activeTopic.code}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => toggleCompleted(activeTopic.id)}
                  className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                    completedIds.has(activeTopic.id)
                      ? "bg-emerald-500 text-white shadow-sm"
                      : "border border-border bg-card text-foreground hover:bg-muted"
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>
                    {completedIds.has(activeTopic.id)
                      ? "O‘zlashtirilgan"
                      : "O‘zlashtirildi deb belgilash"}
                  </span>
                </button>
              </div>
            </div>
          </header>

          {/* Scrollable Full-Window Content */}
          <div ref={topicScrollRef} className="flex-1 overflow-y-auto">
            <div className="mx-auto max-w-5xl space-y-8 px-4 py-8 md:px-8">
              {/* Session Hero Header */}
              <section className="relative overflow-hidden rounded-3xl bg-sidebar-grad p-6 text-navy-foreground shadow-card md:p-9">
                <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-cyan/20 blob" />
                <div className="relative z-10 space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-lg bg-cyan px-3 py-1 font-mono font-extrabold text-navy tabular-nums">
                      {activeTopic.topicLabel}
                    </span>
                    <span className="rounded-lg bg-navy-foreground/15 px-3 py-1 font-semibold text-navy-foreground">
                      {activeTopic.module}
                    </span>
                    <span className="rounded-lg bg-navy-foreground/15 px-3 py-1 font-mono text-navy-foreground/90">
                      {activeTopic.references}
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight md:text-4xl">
                    {activeTopic.title}
                  </h2>

                  <p className="text-sm leading-relaxed text-navy-foreground/90 md:text-base">
                    {activeTopic.overview}
                  </p>
                </div>
              </section>

              {/* Mode Switcher */}
              {activePdf && (
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card p-3 shadow-sm">
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      { id: "all", label: "Barchasi (PDF + Qo‘llanma)" },
                      { id: "pdf", label: "PDF amaliy mashg‘ulot" },
                      { id: "lecture", label: "Nazariy qo‘llanma" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setReaderTab(tab.id as typeof readerTab)}
                        className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                          readerTab === tab.id
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "bg-muted text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {activeTopicDocs.length > 1 && readerTab !== "lecture" && (
                    <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-border bg-muted/40 p-1">
                      {activeTopicDocs.map((doc, idx) => (
                        <button
                          key={doc.url}
                          type="button"
                          onClick={() => setSelectedPdfIndex(idx)}
                          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                            selectedPdfIndex === idx
                              ? "bg-rose-600 text-white shadow-sm"
                              : "text-muted-foreground hover:bg-background hover:text-foreground"
                          }`}
                        >
                          <FileText className="h-3.5 w-3.5" />
                          <span>{doc.kind || `${idx + 1}-PDF`}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Embedded Interactive PDF Canvas Viewer */}
              {activePdf && readerTab !== "lecture" && (
                <PdfSlideViewer
                  url={activePdf.url}
                  title={activePdf.title}
                  compactHeight={readerTab === "all"}
                />
              )}

              {/* Structured Academic Guide */}
              {readerTab !== "pdf" && (
                <>
                  <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                    <h3 className="flex items-center gap-2 text-base font-extrabold text-primary">
                      <ListChecks className="h-5 w-5" />
                      <span>Amaliy mashg‘ulot maqsadi va asosiy vazifalari</span>
                    </h3>
                    <div className="mt-4 grid gap-3">
                      {activeTopic.syllabusPoints.map((pt, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 rounded-xl border border-border/80 bg-card p-4 text-sm leading-relaxed text-foreground shadow-sm"
                        >
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary font-mono text-xs font-extrabold text-primary-foreground tabular-nums">
                            {idx + 1}
                          </span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Detailed Theoretical Notes */}
                  <section className="space-y-5">
                    <div className="flex items-center gap-2 border-b border-border pb-3">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-extrabold text-foreground md:text-xl">
                        Mavzu yuzasidan nazariy asoslar va uslubiy ko‘rsatmalar
                      </h3>
                    </div>

                    <div className="space-y-5">
                      {activeTopic.sections.map((sec, idx) => (
                        <article
                          key={idx}
                          className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/30"
                        >
                          <h4 className="text-base font-extrabold text-primary md:text-lg">
                            {sec.heading}
                          </h4>
                          <p className="mt-3 text-sm leading-relaxed text-foreground/95 md:text-[15px]">
                            {sec.content}
                          </p>

                          {sec.highlights && sec.highlights.length > 0 && (
                            <ul className="mt-4 space-y-2 rounded-xl border border-border/70 bg-muted/40 p-4">
                              {sec.highlights.map((hl, hIdx) => (
                                <li
                                  key={hIdx}
                                  className="flex items-start gap-2.5 text-xs leading-relaxed text-foreground md:text-sm"
                                >
                                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                  <span>{hl}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </article>
                      ))}
                    </div>
                  </section>

                  {/* Comparison Table */}
                  <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <h3 className="flex items-center gap-2 text-base font-extrabold text-foreground md:text-lg">
                      <Table2 className="h-5 w-5 text-primary" />
                      <span>{activeTopic.comparisonTable.title}</span>
                    </h3>

                    <div className="mt-4 overflow-x-auto rounded-xl border border-border">
                      <table className="w-full min-w-[540px] border-collapse text-left text-xs md:text-sm">
                        <thead>
                          <tr className="border-b border-border bg-muted/60">
                            {activeTopic.comparisonTable.columns.map((col, cIdx) => (
                              <th key={cIdx} className="px-4 py-3 font-extrabold text-foreground">
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/70">
                          {activeTopic.comparisonTable.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="transition-colors hover:bg-muted/30">
                              {row.map((cell, cellIdx) => (
                                <td
                                  key={cellIdx}
                                  className={`px-4 py-3 leading-relaxed ${
                                    cellIdx === 0 ? "font-bold text-primary" : "text-foreground/90"
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Key Glossary Concepts */}
                  <section className="space-y-4">
                    <h3 className="flex items-center gap-2 text-base font-extrabold text-foreground md:text-lg">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Glossariy — asosiy tayanch atamalar</span>
                    </h3>
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      {activeTopic.keyConcepts.map((concept, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl border border-border bg-card p-4 shadow-sm"
                        >
                          <p className="text-sm font-extrabold text-primary">{concept.term}</p>
                          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
                            {concept.definition}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Interactive Self-Check Q&A */}
                  <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <h3 className="flex items-center gap-2 text-base font-extrabold text-foreground md:text-lg">
                      <HelpCircle className="h-5 w-5 text-primary" />
                      <span>Nazorat savollari va namunaviy javoblar</span>
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Bilimingizni tekshirish uchun savolni bosing va ilmiy javob bilan
                      solishtiring.
                    </p>

                    <div className="mt-4 space-y-3">
                      {activeTopic.selfCheckQuestions.map((qa, qIdx) => {
                        const isOpen = revealedAnswers.has(qIdx);
                        return (
                          <div
                            key={qIdx}
                            className="overflow-hidden rounded-xl border border-border bg-muted/20"
                          >
                            <button
                              type="button"
                              onClick={() => toggleRevealAnswer(qIdx)}
                              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-xs font-bold text-foreground transition-colors hover:bg-muted/50 md:text-sm"
                            >
                              <span className="flex items-start gap-2.5">
                                <span className="font-mono text-primary tabular-nums">
                                  {qIdx + 1}.
                                </span>
                                <span>{qa.question}</span>
                              </span>
                              <ChevronDown
                                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                                  isOpen ? "rotate-180 text-primary" : ""
                                }`}
                              />
                            </button>

                            {isOpen && (
                              <div className="border-t border-border/70 bg-primary/5 px-4 py-3.5 text-xs leading-relaxed text-foreground md:text-sm">
                                <span className="font-bold text-primary">Javob: </span>
                                {qa.answer}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </section>

                  {/* Quick Summary Note Card */}
                  <section className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      Tezkor xulosa
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                      {activeTopic.studyNotes}
                    </p>
                  </section>
                </>
              )}
            </div>
          </div>

          {/* Sticky Bottom Controls Bar */}
          <footer className="shrink-0 border-t border-border bg-background/95 px-4 py-3.5 backdrop-blur-xl md:px-8">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={activeTopicIndex <= 0}
                  onClick={() => {
                    const prev = BIOINFORMATIKA_PRACTICAL_TOPICS[activeTopicIndex - 1];
                    if (prev) {
                      setSelectedTopicId(prev.id);
                    }
                  }}
                  className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-bold text-foreground transition-colors hover:bg-muted disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Oldingi mashg‘ulot</span>
                </button>

                <span className="hidden px-2 font-mono text-xs font-bold text-muted-foreground tabular-nums sm:inline">
                  {activeTopicIndex + 1} / {BIOINFORMATIKA_PRACTICAL_TOPICS.length}
                </span>

                <button
                  type="button"
                  disabled={activeTopicIndex >= BIOINFORMATIKA_PRACTICAL_TOPICS.length - 1}
                  onClick={() => {
                    const next = BIOINFORMATIKA_PRACTICAL_TOPICS[activeTopicIndex + 1];
                    if (next) {
                      setSelectedTopicId(next.id);
                    }
                  }}
                  className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-bold text-foreground transition-colors hover:bg-muted disabled:opacity-40"
                >
                  <span>Keyingi mashg‘ulot</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {onAskAi && (
                  <button
                    type="button"
                    onClick={() => {
                      const prompt = `Bioinformatika (${activeTopic.topicLabel} — ${activeTopic.title}) bo‘yicha talabaga tushunarli tahlil va namunaviy masala yechimini tushuntirib ber.`;
                      setSelectedTopicId(null);
                      onBack();
                      onAskAi(prompt);
                    }}
                    className="flex items-center gap-1.5 rounded-xl bg-primary/10 px-4 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>AI Ustozdan batafsil so‘rash</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => toggleCompleted(activeTopic.id)}
                  className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                    completedIds.has(activeTopic.id)
                      ? "bg-emerald-500 text-white shadow-sm"
                      : "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>
                    {completedIds.has(activeTopic.id)
                      ? "O‘zlashtirilgan"
                      : "O‘zlashtirildi deb belgilash"}
                  </span>
                </button>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
