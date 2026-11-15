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
  FlaskConical,
  Maximize2,
  BookmarkCheck,
  Table2,
  HelpCircle,
  ListChecks,
  GraduationCap,
  FileText,
} from "lucide-react";
import biokimyoImg from "@/assets/biokimyo.jpg";
import {
  BIOKIMYO_TOPICS,
  type BiokimyoPdfDocument,
  type BiokimyoTopic,
} from "@/data/biokimyoTopics";
import { PdfSlideViewer } from "./PdfSlideViewer";

function getTopicPdfDocuments(topic: BiokimyoTopic): BiokimyoPdfDocument[] {
  if (topic.pdfDocuments && topic.pdfDocuments.length > 0) {
    return topic.pdfDocuments;
  }
  if (topic.pdfUrl) {
    return [
      {
        title: topic.pdfTitle || `${topic.topicLabel} — PDF ma’ruza`,
        url: topic.pdfUrl,
      },
    ];
  }
  return [];
}

interface BiokimyoSectionProps {
  onBack: () => void;
  onAskAi?: (prompt: string) => void;
}

export function BiokimyoSection({ onBack, onAskAi }: BiokimyoSectionProps) {
  const [moduleFilter, setModuleFilter] = useState<
    | "all"
    | "I bo‘lim: Biomolekulalar"
    | "II bo‘lim: Biokataliz va regulyatsiya"
    | "III bo‘lim: Moddalar almashinuvi"
    | "done"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [readerTab, setReaderTab] = useState<"all" | "pdf" | "lecture">("all");
  const [selectedPdfIndex, setSelectedPdfIndex] = useState(0);
  const [revealedAnswers, setRevealedAnswers] = useState<Set<number>>(new Set());
  const topicScrollRef = useRef<HTMLDivElement>(null);

  // Persist completed Biokimyo topics in localStorage
  const [completedIds, setCompletedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem("eduuni_biokimyo_completed");
      if (saved) return new Set(JSON.parse(saved));
    } catch {
      // Ignore
    }
    return new Set(["biokimyo-1"]);
  });

  useEffect(() => {
    try {
      localStorage.setItem("eduuni_biokimyo_completed", JSON.stringify(Array.from(completedIds)));
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

  const filteredTopics = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return BIOKIMYO_TOPICS.filter((topic) => {
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
  }, [moduleFilter, searchQuery, completedIds]);

  const activeTopic: BiokimyoTopic | null = useMemo(() => {
    if (!selectedTopicId) return null;
    return BIOKIMYO_TOPICS.find((t) => t.id === selectedTopicId) ?? null;
  }, [selectedTopicId]);

  const activeTopicIndex = activeTopic
    ? BIOKIMYO_TOPICS.findIndex((t) => t.id === activeTopic.id)
    : -1;

  const activeTopicDocs = useMemo(
    () => (activeTopic ? getTopicPdfDocuments(activeTopic) : []),
    [activeTopic],
  );
  const activePdf = activeTopicDocs[selectedPdfIndex] ?? activeTopicDocs[0] ?? null;

  const progressPercent = Math.round((completedIds.size / BIOKIMYO_TOPICS.length) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background text-foreground">
      {/* Sticky Full-Window Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3.5 md:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground transition-all hover:bg-muted md:text-sm"
            >
              <ArrowLeft className="h-4 w-4 text-primary" />
              <span>Darsliklarga qaytish</span>
            </button>

            <div className="flex items-center gap-2.5 border-l border-border pl-3">
              <img
                src={biokimyoImg}
                alt="Biokimyo logosi"
                className="h-9 w-9 rounded-lg object-cover shadow-sm"
              />
              <div>
                <h1 className="text-sm font-extrabold leading-tight md:text-base">Biokimyo fani</h1>
                <p className="text-[11px] text-muted-foreground">
                  O‘quv dasturi mavzulari · 1–{BIOKIMYO_TOPICS.length}-mavzular (
                  {BIOKIMYO_TOPICS.length} ta mavzu)
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 text-xs">
              <BookmarkCheck className="h-4 w-4 text-emerald-500" />
              <span className="font-semibold text-muted-foreground">O‘zlashtirildi:</span>
              <span className="font-extrabold text-primary tabular-nums">
                {completedIds.size} / {BIOKIMYO_TOPICS.length} ({progressPercent}%)
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Full-Window Workspace */}
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 md:px-8">
        {/* Hero Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-sidebar-grad p-6 text-navy-foreground shadow-card md:p-8">
          <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-cyan/20 blob" />
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <img
                src={biokimyoImg}
                alt="Biokimyo"
                className="h-20 w-20 shrink-0 rounded-2xl border-2 border-cyan/40 object-cover shadow-glow md:h-24 md:w-24"
              />
              <div className="max-w-2xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan">
                  <FlaskConical className="h-4 w-4" />
                  <span>Navoiy Davlat Universiteti · To‘liq ma’ruzalar to‘plami</span>
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                  Biokimyo: Tirik organizmlar kimyoviy tarkibi va metabolizmi
                </h2>
                <p className="text-xs leading-relaxed text-navy-foreground/85 md:text-sm">
                  Biokimyo fanining barcha {BIOKIMYO_TOPICS.length} ta mavzusi (1-mavzudan{" "}
                  {BIOKIMYO_TOPICS.length}-mavzugacha) ketma-ket tartibda alohida kartochkalarda
                  jamlangan. Har bir mavzu to‘liq oynada rasmiy PDF ma’ruza matni, nazariy konspekt,
                  qiyosiy jadval, atamalar lug‘ati va nazorat savollari bilan ochiladi.
                </p>
              </div>
            </div>

            <div className="w-full shrink-0 space-y-2 rounded-2xl bg-navy-foreground/10 p-4 backdrop-blur-md lg:w-64">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-navy-foreground/80">Umumiy natija</span>
                <span className="font-extrabold text-cyan tabular-nums">{progressPercent}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-navy-foreground/20">
                <div
                  className="h-full rounded-full bg-cyan transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-[11px] text-navy-foreground/75">
                {completedIds.size} ta mavzu o‘qib chiqildi (
                {BIOKIMYO_TOPICS.length - completedIds.size} ta qoldi)
              </p>
            </div>
          </div>
        </section>

        {/* Search & Module Filters */}
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: `Barcha mavzular (${BIOKIMYO_TOPICS.length})` },
              { id: "I bo‘lim: Biomolekulalar", label: "Biomolekulalar (1–7)" },
              {
                id: "II bo‘lim: Biokataliz va regulyatsiya",
                label: "Ferment, vitamin, gormon (8–11)",
              },
              { id: "III bo‘lim: Moddalar almashinuvi", label: "Metabolizm (12–15)" },
              { id: "done", label: `O‘zlashtirilganlar (${completedIds.size})` },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setModuleFilter(tab.id as typeof moduleFilter)}
                className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
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
              placeholder={`Mavzu raqami (1–${BIOKIMYO_TOPICS.length}) yoki nomi...`}
              className="w-full rounded-xl border border-border bg-muted/40 py-2 pl-9 pr-8 text-xs outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
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

        {/* RECTANGULAR TOPIC CARDS GRID */}
        {filteredTopics.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTopics.map((topic) => {
              const isDone = completedIds.has(topic.id);
              const topicDocs = getTopicPdfDocuments(topic);
              return (
                <div
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`group flex cursor-pointer flex-col justify-between rounded-2xl border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow ${
                    isDone ? "border-emerald-500/40" : "border-border hover:border-primary/50"
                  }`}
                >
                  <div>
                    {/* Card Top Metadata Row */}
                    <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-3">
                      <div className="flex items-center gap-2 text-xs min-w-0">
                        <span className="shrink-0 rounded-lg bg-primary/10 px-2.5 py-1 font-mono font-extrabold text-primary tabular-nums">
                          {topic.topicLabel}
                        </span>
                        <span aria-hidden="true" className="text-muted-foreground">
                          ·
                        </span>
                        <span className="truncate text-[11px] font-medium text-muted-foreground">
                          {topic.module}
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
                    <h3 className="mt-3.5 text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {topic.title}
                    </h3>

                    {/* Overview Summary Preview */}
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                      {topic.overview}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3.5 text-xs">
                    <span className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
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

                    <span className="flex items-center gap-1.5 font-bold text-primary transition-transform group-hover:translate-x-0.5">
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>Mavzuni ochish</span>
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
              Qidiruv bo‘yicha mavzu topilmadi
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setModuleFilter("all");
              }}
              className="mt-3 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground"
            >
              Barcha mavzularni ko‘rsatish
            </button>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* FULL-WINDOW TOPIC READER (OCCUPIES ENTIRE SCREEN) */}
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
                  <span>Barcha mavzularga qaytish</span>
                </button>

                <div className="hidden items-center gap-2 border-l border-border pl-3 text-xs sm:flex">
                  <span className="rounded-lg bg-primary px-2.5 py-0.5 font-mono font-extrabold text-primary-foreground tabular-nums">
                    {activeTopic.topicLabel}
                  </span>
                  <span className="font-semibold text-muted-foreground">{activeTopic.module}</span>
                  <span aria-hidden="true" className="text-muted-foreground">
                    ·
                  </span>
                  <span className="font-mono text-muted-foreground">{activeTopic.references}</span>
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

          {/* Scrollable Full-Window Lesson Content */}
          <div ref={topicScrollRef} className="flex-1 overflow-y-auto">
            <div className="mx-auto max-w-5xl space-y-8 px-4 py-8 md:px-8">
              {/* Lesson Hero Header */}
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
                      Manba: {activeTopic.references}
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
                      { id: "all", label: "Barchasi (PDF + Ma’ruza)" },
                      { id: "pdf", label: "PDF ma’ruza taqdimoti" },
                      { id: "lecture", label: "Nazariy darslik" },
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

              {/* Syllabus Outline & Lecture */}
              {readerTab !== "pdf" && (
                <>
                  <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                    <h3 className="flex items-center gap-2 text-base font-extrabold text-primary">
                      <ListChecks className="h-5 w-5" />
                      <span>O‘quv dasturi bo‘yicha asosiy rejalar va masalalar</span>
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

                  {/* Detailed Academic Lecture Sections */}
                  <section className="space-y-5">
                    <div className="flex items-center gap-2 border-b border-border pb-3">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-extrabold text-foreground md:text-xl">
                        Mavzu bo‘yicha batafsil ilmiy ma’ruza
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

                  {/* Structured Comparison / Classification Table */}
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

                  {/* Key Scientific Glossary Concepts */}
                  <section className="space-y-4">
                    <h3 className="flex items-center gap-2 text-base font-extrabold text-foreground md:text-lg">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Asosiy tayanch atamalar va ularning ta’riflari</span>
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
                      <span>O‘z-o‘zini tekshirish uchun nazorat savollari</span>
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Bilimingizni mustahkamlash uchun savolni bosing va ilmiy javobni solishtiring.
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
                    const prev = BIOKIMYO_TOPICS[activeTopicIndex - 1];
                    if (prev) {
                      setSelectedTopicId(prev.id);
                    }
                  }}
                  className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-bold text-foreground transition-colors hover:bg-muted disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Oldingi mavzu</span>
                </button>

                <span className="hidden px-2 font-mono text-xs font-bold text-muted-foreground tabular-nums sm:inline">
                  {activeTopicIndex + 1} / {BIOKIMYO_TOPICS.length}
                </span>

                <button
                  type="button"
                  disabled={activeTopicIndex >= BIOKIMYO_TOPICS.length - 1}
                  onClick={() => {
                    const next = BIOKIMYO_TOPICS[activeTopicIndex + 1];
                    if (next) {
                      setSelectedTopicId(next.id);
                    }
                  }}
                  className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-bold text-foreground transition-colors hover:bg-muted disabled:opacity-40"
                >
                  <span>Keyingi mavzu</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {onAskAi && (
                  <button
                    type="button"
                    onClick={() => {
                      const prompt = `Biokimyo fani (${activeTopic.topicLabel} — ${activeTopic.title}) mavzusi bo‘yicha talabaga to‘liq va tushunarli ilmiy ma’ruza matni hamda test savollarini tuzib ber.`;
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
