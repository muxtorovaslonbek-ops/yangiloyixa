import { useState, useMemo, useEffect } from "react";
import {
  ArrowLeft,
  BookOpen,
  Search,
  CheckCircle2,
  Circle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  Leaf,
  Maximize2,
  BookmarkCheck,
} from "lucide-react";
import botanikaImg from "@/assets/botanika.jpg";
import { BOTANIKA_TOPICS, type BotanikaTopic } from "@/data/botanikaTopics";

interface BotanikaSectionProps {
  onBack: () => void;
  onAskAi?: (prompt: string) => void;
}

export function BotanikaSection({ onBack, onAskAi }: BotanikaSectionProps) {
  const [semesterFilter, setSemesterFilter] = useState<"all" | "I semestr" | "II semestr" | "done">(
    "all",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  // Persist completed Botanika topics in localStorage
  const [completedIds, setCompletedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem("eduuni_botanika_completed");
      if (saved) return new Set(JSON.parse(saved));
    } catch {
      // Ignore
    }
    return new Set(["bot-1"]);
  });

  useEffect(() => {
    try {
      localStorage.setItem("eduuni_botanika_completed", JSON.stringify(Array.from(completedIds)));
    } catch {
      // Ignore
    }
  }, [completedIds]);

  // Allow Escape key to close active topic reader or return back
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

  const filteredTopics = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return BOTANIKA_TOPICS.filter((topic) => {
      if (semesterFilter === "I semestr" && topic.semester !== "I semestr") return false;
      if (semesterFilter === "II semestr" && topic.semester !== "II semestr") return false;
      if (semesterFilter === "done" && !completedIds.has(topic.id)) return false;

      if (q) {
        const searchable =
          `${topic.code} ${topic.topicLabel} ${topic.title} ${topic.syllabusPoints.join(" ")} ${topic.keyTerms.join(" ")}`.toLowerCase();
        if (!searchable.includes(q)) return false;
      }
      return true;
    });
  }, [semesterFilter, searchQuery, completedIds]);

  const activeTopic: BotanikaTopic | null = useMemo(() => {
    if (!selectedTopicId) return null;
    return BOTANIKA_TOPICS.find((t) => t.id === selectedTopicId) ?? null;
  }, [selectedTopicId]);

  const activeTopicIndex = activeTopic
    ? BOTANIKA_TOPICS.findIndex((t) => t.id === activeTopic.id)
    : -1;

  const progressPercent = Math.round((completedIds.size / BOTANIKA_TOPICS.length) * 100);

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
                src={botanikaImg}
                alt="Botanika logosi"
                className="h-9 w-9 rounded-lg object-cover shadow-sm"
              />
              <div>
                <h1 className="text-sm font-extrabold leading-tight md:text-base">Botanika fani</h1>
                <p className="text-[11px] text-muted-foreground">
                  O‘quv dasturi mavzulari · 1–17-mavzular ({BOTANIKA_TOPICS.length} ta mavzu)
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 text-xs">
              <BookmarkCheck className="h-4 w-4 text-emerald-500" />
              <span className="font-semibold text-muted-foreground">O‘zlashtirildi:</span>
              <span className="font-extrabold text-primary tabular-nums">
                {completedIds.size} / {BOTANIKA_TOPICS.length} ({progressPercent}%)
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Full-Window Workspace */}
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 md:px-8">
        {/* Hero Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-sidebar-grad p-6 text-navy-foreground shadow-card md:p-8">
          <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-emerald-400/20 blob" />
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <img
                src={botanikaImg}
                alt="Botanika"
                className="h-20 w-20 shrink-0 rounded-2xl border-2 border-cyan/40 object-cover shadow-glow md:h-24 md:w-24"
              />
              <div className="max-w-2xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan">
                  <Leaf className="h-4 w-4" />
                  <span>I va II semestr · To‘liq o‘quv dasturi</span>
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                  Botanika: O‘simliklar anatomiyasi, morfologiyasi va sistematikasi
                </h2>
                <p className="text-xs leading-relaxed text-navy-foreground/85 md:text-sm">
                  O‘quv dasturi asosidagi barcha 17 ta mavzu (1-mavzudan 17-mavzugacha) ketma-ket
                  tartibda alohida to‘rtburchak kartochkalarda jamlangan. Istalgan mavzuni ochib,
                  nazariy ma’lumotlarni o‘qing va o‘zlashtirib boring.
                </p>
              </div>
            </div>

            <div className="w-full space-y-2 rounded-2xl bg-navy-foreground/10 p-4 backdrop-blur-md lg:w-64 shrink-0">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-navy-foreground/80">Umumiy natija</span>
                <span className="text-cyan font-extrabold tabular-nums">{progressPercent}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-navy-foreground/20">
                <div
                  className="h-full rounded-full bg-cyan transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-[11px] text-navy-foreground/75">
                {completedIds.size} ta mavzu o‘qib chiqildi (
                {BOTANIKA_TOPICS.length - completedIds.size} ta qoldi)
              </p>
            </div>
          </div>
        </section>

        {/* Search & Semester Filters */}
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: `Barcha mavzular (${BOTANIKA_TOPICS.length})` },
              { id: "I semestr", label: "I semestr (1–11-mavzular)" },
              { id: "II semestr", label: "II semestr (12–17-mavzular)" },
              { id: "done", label: `O‘zlashtirilganlar (${completedIds.size})` },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSemesterFilter(tab.id as typeof semesterFilter)}
                className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                  semesterFilter === tab.id
                    ? "bg-primary text-primary-foreground font-bold shadow-sm"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Mavzu raqami (1–17) yoki nomi..."
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
                      <div className="flex items-center gap-2 text-xs">
                        <span className="rounded-lg bg-primary/10 px-2.5 py-1 font-mono font-extrabold text-primary tabular-nums">
                          {topic.topicLabel}
                        </span>
                        <span aria-hidden="true" className="text-muted-foreground">
                          ·
                        </span>
                        <span className="text-[11px] font-medium text-muted-foreground">
                          {topic.semester}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCompleted(topic.id);
                        }}
                        title={isDone ? "O‘zlashtirilgan" : "O‘zlashtirildi deb belgilash"}
                        className={`rounded-full p-1 transition-colors ${
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

                    {/* Syllabus Summary Preview */}
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                      {topic.syllabusPoints[0]}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3.5 text-xs">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      Adabiyot: {topic.references}
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
                setSemesterFilter("all");
              }}
              className="mt-3 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground"
            >
              Barcha mavzularni ko‘rsatish
            </button>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* TOPIC FULL-VIEW READER MODAL */}
      {/* ========================================================= */}
      {activeTopic && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/70 p-3 backdrop-blur-sm md:p-6"
          onClick={() => setSelectedTopicId(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
          >
            {/* Reader Header */}
            <div className="flex items-start justify-between gap-4 border-b border-border bg-muted/30 p-5 md:p-6">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-lg bg-primary px-2.5 py-0.5 font-mono font-extrabold text-primary-foreground tabular-nums">
                    {activeTopic.topicLabel}
                  </span>
                  <span aria-hidden="true" className="text-muted-foreground">
                    ·
                  </span>
                  <span className="text-muted-foreground">{activeTopic.semester}</span>
                  <span aria-hidden="true" className="text-muted-foreground">
                    ·
                  </span>
                  <span className="font-mono text-muted-foreground">
                    Manbalar: {activeTopic.references}
                  </span>
                </div>
                <h2 className="text-lg font-extrabold leading-snug text-foreground md:text-2xl">
                  {activeTopic.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedTopicId(null)}
                className="rounded-xl border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Yopish"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Reader Scrollable Body */}
            <div className="flex-1 space-y-6 overflow-y-auto p-5 md:p-7">
              {/* Theoretical Summary */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <h3 className="flex items-center gap-2 text-sm font-extrabold text-primary">
                  <Leaf className="h-4 w-4" /> Qisqacha nazariy ma’lumot
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-foreground">
                  {activeTopic.studyNotes}
                </p>
              </div>

              {/* PDF Syllabus Breakdown */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-foreground">
                  O‘quv dasturi bo‘yicha asosiy masalalar:
                </h3>
                <div className="space-y-2.5">
                  {activeTopic.syllabusPoints.map((pt, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-2xl border border-border bg-muted/30 p-4 text-sm leading-relaxed text-foreground"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs font-extrabold text-primary tabular-nums">
                        {idx + 1}
                      </span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Terms */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-foreground">Tayanch atamalar:</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {activeTopic.keyTerms.join("  ·  ")}
                </p>
              </div>
            </div>

            {/* Reader Footer Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-muted/20 px-5 py-4 md:px-6">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={activeTopicIndex <= 0}
                  onClick={() => {
                    if (activeTopicIndex > 0) {
                      setSelectedTopicId(BOTANIKA_TOPICS[activeTopicIndex - 1].id);
                    }
                  }}
                  className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-bold text-foreground transition-colors hover:bg-muted disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Oldingi mavzu</span>
                </button>
                <button
                  type="button"
                  disabled={activeTopicIndex >= BOTANIKA_TOPICS.length - 1}
                  onClick={() => {
                    if (activeTopicIndex < BOTANIKA_TOPICS.length - 1) {
                      setSelectedTopicId(BOTANIKA_TOPICS[activeTopicIndex + 1].id);
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
                      const prompt = `Botanika fani (${activeTopic.topicLabel} — ${activeTopic.title}) mavzusi bo‘yicha talabaga to‘liq va tushunarli ilmiy ma’ruza matni hamda test savollarini tuzib ber.`;
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
          </div>
        </div>
      )}
    </div>
  );
}
