import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import {
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  Bookmark,
  Award,
  Search,
  Check,
  ChevronRight,
  Timer,
  Zap,
  BarChart2,
  BookOpen,
  Filter,
} from "lucide-react";
import {
  BIOLOGY_VARIANTS,
  type BiologyVariant,
  type BiologyQuestion,
} from "@/data/biologyVariantsData";

interface BiologySectionProps {
  onBack: () => void;
}

interface StoredResult {
  variantId: number;
  score: number;
  total: number;
  percentage: number;
  timeSpentSeconds: number;
  date: string;
}

export function BiologySection({ onBack }: BiologySectionProps) {
  // Navigation state: "list" | "test" | "result"
  const [view, setView] = useState<"list" | "test" | "result">("list");
  const [selectedVariantId, setSelectedVariantId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "completed" | "uncompleted">("all");

  // Test state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState<number>(60 * 60); // 1 hour in seconds
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);
  const [showConfirmExit, setShowConfirmExit] = useState(false);

  // Review state
  const [reviewFilter, setReviewFilter] = useState<"all" | "correct" | "incorrect" | "skipped">(
    "all",
  );

  // Stored results in localStorage
  const [storedResults, setStoredResults] = useState<Record<number, StoredResult>>(() => {
    try {
      const data = localStorage.getItem("eduuni_bio_results");
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  });

  const activeVariant: BiologyVariant = useMemo(() => {
    return BIOLOGY_VARIANTS.find((v) => v.id === selectedVariantId) || BIOLOGY_VARIANTS[0];
  }, [selectedVariantId]);

  const currentQuestion: BiologyQuestion | undefined =
    activeVariant.questions[currentQuestionIndex];

  // Filtered variants list
  const filteredVariants = useMemo(() => {
    return BIOLOGY_VARIANTS.filter((v) => {
      const matchesSearch =
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.id.toString().includes(searchQuery.trim());
      const isCompleted = !!storedResults[v.id];

      if (statusFilter === "completed") return matchesSearch && isCompleted;
      if (statusFilter === "uncompleted") return matchesSearch && !isCompleted;
      return matchesSearch;
    });
  }, [searchQuery, statusFilter, storedResults]);

  // Start a specific variant
  const handleStartVariant = (variantId: number) => {
    setSelectedVariantId(variantId);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setTimeLeft(60 * 60); // Exactly 1 hour
    setIsTimerRunning(true);
    setView("test");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Submit test and calculate score
  const handleFinishTest = useCallback(() => {
    setIsTimerRunning(false);
    setShowConfirmFinish(false);

    let score = 0;
    activeVariant.questions.forEach((q) => {
      const answer = userAnswers[q.id];
      if (answer && answer.toUpperCase() === q.correctAnswer.toUpperCase()) {
        score++;
      }
    });

    const total = activeVariant.questions.length;
    const percentage = Math.round((score / total) * 100);
    const timeSpentSeconds = 60 * 60 - timeLeft;

    const result: StoredResult = {
      variantId: activeVariant.id,
      score,
      total,
      percentage,
      timeSpentSeconds,
      date: new Date().toLocaleDateString("uz-UZ"),
    };

    const updated = { ...storedResults, [activeVariant.id]: result };
    setStoredResults(updated);
    try {
      localStorage.setItem("eduuni_bio_results", JSON.stringify(updated));
    } catch {
      // Ignore localStorage errors
    }

    setView("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeVariant, userAnswers, timeLeft, storedResults]);

  // Timer countdown hook
  const handleFinishTestRef = useRef(handleFinishTest);
  useEffect(() => {
    handleFinishTestRef.current = handleFinishTest;
  }, [handleFinishTest]);

  useEffect(() => {
    if (view !== "test" || !isTimerRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishTestRef.current();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [view, isTimerRunning]);

  // Format seconds to MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Keyboard shortcut listener for options (1-4 or A-D)
  useEffect(() => {
    if (view !== "test") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const key = e.key.toUpperCase();
      let selectedKey: string | null = null;

      if (key === "1" || key === "A") selectedKey = "A";
      else if (key === "2" || key === "B") selectedKey = "B";
      else if (key === "3" || key === "C") selectedKey = "C";
      else if (key === "4" || key === "D") selectedKey = "D";

      if (selectedKey && currentQuestion) {
        setUserAnswers((prev) => ({
          ...prev,
          [currentQuestion.id]: selectedKey,
        }));
      }

      if (e.key === "ArrowRight") {
        if (currentQuestionIndex < activeVariant.questions.length - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
        }
      } else if (e.key === "ArrowLeft") {
        if (currentQuestionIndex > 0) {
          setCurrentQuestionIndex((prev) => prev - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [view, currentQuestion, currentQuestionIndex, activeVariant.questions.length]);

  // Certificate grade calculation
  const getCertificateGrade = (percentage: number) => {
    if (percentage >= 86)
      return {
        grade: "A+",
        label: "Eng yuqori daraja (A+)",
        color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300",
      };
    if (percentage >= 76)
      return {
        grade: "A",
        label: "A'lo daraja (A)",
        color: "text-blue-500 bg-blue-50 dark:bg-blue-950/40 border-blue-300",
      };
    if (percentage >= 66)
      return {
        grade: "B+",
        label: "Yaxshi daraja (B+)",
        color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-300",
      };
    if (percentage >= 56)
      return {
        grade: "B",
        label: "Qoniqarli daraja (B)",
        color: "text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-300",
      };
    return {
      grade: "C",
      label: "Sertifikat talabiga yetmadi",
      color: "text-rose-500 bg-rose-50 dark:bg-rose-950/40 border-rose-300",
    };
  };

  const answeredCount = Object.keys(userAnswers).length;
  const currentResult = storedResults[activeVariant.id];

  return (
    <div className="space-y-6 px-4 pb-16 md:px-8">
      {/* Top Breadcrumb & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 font-medium transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Bosh sahifa
          </button>
          <span>/</span>
          <span className="font-semibold text-foreground">Biologiya (Milliy sertifikat)</span>
          {view !== "list" && (
            <>
              <span>/</span>
              <span className="font-medium text-primary">Variant {activeVariant.id}</span>
            </>
          )}
        </div>

        {view !== "list" && (
          <button
            onClick={() => {
              if (view === "test") setShowConfirmExit(true);
              else setView("list");
            }}
            className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold shadow-sm transition-all hover:bg-muted"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Variantlar ro'yxatiga qaytish
          </button>
        )}
      </div>

      {/* ========================================================= */}
      {/* VIEW 1: VARIANT SELECTION LIST */}
      {/* ========================================================= */}
      {view === "list" && (
        <div className="space-y-8">
          {/* Hero Banner */}
          <section className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-600 via-teal-700 to-indigo-900 p-8 text-white shadow-xl md:p-10">
            <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-emerald-400/20 blur-2xl" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md">
                <Award className="h-4 w-4 text-amber-300" />
                <span>Davlat test markazi (DTM) standarti</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                Biologiya — Milliy Sertifikatga Tayyorgarlik
              </h2>
              <p className="mt-3 text-base text-emerald-50/90 md:text-lg">
                30 ta to'liq rasmiy variant. Har bir variantda 30 ta savol va real imtihondagi kabi
                aniq 1 soat (60 daqiqa) vaqt beriladi. Natijangizni darhol bilib oling!
              </p>

              {/* Stats badges */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 backdrop-blur-md">
                  <BookOpen className="h-4 w-4 text-emerald-300" />
                  <span className="text-sm font-bold">30 ta Variant</span>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 backdrop-blur-md">
                  <Zap className="h-4 w-4 text-amber-300" />
                  <span className="text-sm font-bold">900 ta Savol</span>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 backdrop-blur-md">
                  <Clock className="h-4 w-4 text-cyan-300" />
                  <span className="text-sm font-bold">1 soat (60 daqiqa) timer</span>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 backdrop-blur-md">
                  <BarChart2 className="h-4 w-4 text-purple-300" />
                  <span className="text-sm font-bold">Avtomatik tahlil va sertifikat darajasi</span>
                </div>
              </div>
            </div>
          </section>

          {/* Filter & Search Bar */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <button
                onClick={() => setStatusFilter("all")}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                  statusFilter === "all"
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "border border-border bg-card text-muted-foreground hover:bg-muted"
                }`}
              >
                Barcha variantlar ({BIOLOGY_VARIANTS.length})
              </button>
              <button
                onClick={() => setStatusFilter("completed")}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                  statusFilter === "completed"
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "border border-border bg-card text-muted-foreground hover:bg-muted"
                }`}
              >
                Bajarilganlar ({Object.keys(storedResults).length})
              </button>
              <button
                onClick={() => setStatusFilter("uncompleted")}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                  statusFilter === "uncompleted"
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "border border-border bg-card text-muted-foreground hover:bg-muted"
                }`}
              >
                Kutilayotganlar ({BIOLOGY_VARIANTS.length - Object.keys(storedResults).length})
              </button>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Variant qidirish (1-30)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-border bg-card py-2.5 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Variants Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredVariants.map((variant) => {
              const res = storedResults[variant.id];
              const grade = res ? getCertificateGrade(res.percentage) : null;

              return (
                <div
                  key={variant.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl"
                >
                  <div>
                    {/* Top status */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                        <BookOpen className="h-3.5 w-3.5" />
                        Variant {variant.id}
                      </span>

                      {res ? (
                        <span
                          className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-bold ${grade?.color}`}
                        >
                          <CheckCircle2 className="h-3 w-3" />
                          {res.score}/30 ({res.percentage}%)
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                          <Clock className="h-3 w-3" /> 60 daqiqa
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 text-lg font-bold leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {variant.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {variant.subtitle}
                    </p>

                    {/* Features pill list */}
                    <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
                      <span className="rounded-lg bg-muted px-2 py-1 font-medium">30 ta savol</span>
                      <span className="rounded-lg bg-muted px-2 py-1 font-medium">1 soat vaqt</span>
                      {res && (
                        <span className="rounded-lg bg-emerald-500/10 px-2 py-1 font-semibold text-emerald-600 dark:text-emerald-400">
                          {grade?.grade} daraja
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 border-t border-border/60 pt-4">
                    <button
                      onClick={() => handleStartVariant(variant.id)}
                      className="group/btn flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-2.5 text-xs font-bold text-primary-foreground shadow-glow transition-all hover:bg-primary/90 hover:scale-[1.02]"
                    >
                      <Play className="h-3.5 w-3.5 fill-current" />
                      {res ? "Qaytadan ishlash" : "Testni boshlash (1 soat)"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredVariants.length === 0 && (
            <div className="rounded-3xl border border-dashed border-border p-12 text-center">
              <AlertCircle className="mx-auto h-10 w-10 text-muted-foreground" />
              <h4 className="mt-3 text-base font-bold">Hech qanday variant topilmadi</h4>
              <p className="mt-1 text-xs text-muted-foreground">
                Qidiruv so'zini o'zgartiring yoki filtrlarni tozalang.
              </p>
            </div>
          )}

          {/* Test Instructions Card */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h4 className="flex items-center gap-2 font-bold text-base">
              <Award className="h-5 w-5 text-amber-500" />
              Milliy sertifikat test qoidalari va tavsiyalar
            </h4>
            <div className="mt-4 grid grid-cols-1 gap-4 text-xs text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-border/80 bg-background/50 p-4">
                <span className="font-bold text-foreground">1. 60 daqiqa vaqt</span>
                <p className="mt-1">
                  Har bir variant uchun roppa-rosa 1 soat vaqt beriladi. Taymer 00:00 ga yetganda
                  test avtomatik yakunlanadi.
                </p>
              </div>
              <div className="rounded-2xl border border-border/80 bg-background/50 p-4">
                <span className="font-bold text-foreground">2. 30 ta savol</span>
                <p className="mt-1">
                  Savollarning barchasi DTM biologiya milliy sertifikati talablariga mos tuzilgan.
                </p>
              </div>
              <div className="rounded-2xl border border-border/80 bg-background/50 p-4">
                <span className="font-bold text-foreground">3. Klaviatura boshqaruvi</span>
                <p className="mt-1">
                  Variantlarni tez belgilash uchun klaviaturadagi 1-4 yoki A, B, C, D tugmalaridan
                  foydalanishingiz mumkin.
                </p>
              </div>
              <div className="rounded-2xl border border-border/80 bg-background/50 p-4">
                <span className="font-bold text-foreground">4. Xatolar tahlili</span>
                <p className="mt-1">
                  Test yakunida to'g'ri va noto'g'ri javoblaringiz hamda to'liq tahlil taqdim
                  etiladi.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* VIEW 2: ACTIVE TEST RUNNER WITH 1-HOUR TIMER */}
      {/* ========================================================= */}
      {view === "test" && currentQuestion && (
        <div className="space-y-6">
          {/* Top Sticky Test Bar */}
          <div className="sticky top-20 z-30 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold">{activeVariant.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {answeredCount} / {activeVariant.questions.length} savol belgilandi
                </p>
              </div>
            </div>

            {/* Timer & Controls */}
            <div className="flex items-center gap-3">
              <div
                className={`flex items-center gap-2 rounded-2xl border px-4 py-2 font-mono text-base font-extrabold transition-colors ${
                  timeLeft <= 300
                    ? "animate-pulse border-rose-500 bg-rose-50 text-rose-600 dark:bg-rose-950/40"
                    : timeLeft <= 900
                      ? "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/40"
                      : "border-primary/40 bg-primary/10 text-primary"
                }`}
              >
                <Timer className="h-4 w-4" />
                <span>{formatTime(timeLeft)}</span>
                {timeLeft <= 300 && (
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-rose-500">
                    Oxirgi 5 daqiqa!
                  </span>
                )}
              </div>

              <button
                onClick={() => setIsTimerRunning((prev) => !prev)}
                title={isTimerRunning ? "Vaqtni to'xtatib turish" : "Davom ettirish"}
                className="grid h-10 w-10 place-items-center rounded-2xl border border-border bg-card text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                {isTimerRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>

              <button
                onClick={() => setShowConfirmFinish(true)}
                className="flex items-center gap-1.5 rounded-2xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-glow transition-all hover:bg-emerald-500 hover:scale-105"
              >
                <Check className="h-4 w-4" />
                <span>Testni yakunlash</span>
              </button>
            </div>
          </div>

          {/* Question Grid Navigator (1 to 30) */}
          <div className="rounded-3xl border border-border bg-card p-4 shadow-sm">
            <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Savollar xaritasi:</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Belgilangan
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500" /> Belgilab qo'yilgan
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" /> Belgilanmagan
                </span>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-2 sm:grid-cols-10 md:grid-cols-15 lg:grid-cols-30">
              {activeVariant.questions.map((q, idx) => {
                const isCurrent = idx === currentQuestionIndex;
                const isAnswered = !!userAnswers[q.id];
                const isFlagged = !!flaggedQuestions[q.id];

                let btnClass = "border border-border bg-card text-foreground hover:bg-muted";
                if (isCurrent) {
                  btnClass =
                    "ring-2 ring-primary ring-offset-2 ring-offset-background font-extrabold bg-primary text-primary-foreground";
                } else if (isFlagged) {
                  btnClass = "bg-amber-500/20 text-amber-600 border-amber-500 font-bold";
                } else if (isAnswered) {
                  btnClass = "bg-emerald-500/15 text-emerald-600 border-emerald-500/50 font-bold";
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-9 w-full rounded-xl text-xs transition-all ${btnClass}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Question Box */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-primary/10 px-3.5 py-1.5 text-xs font-extrabold text-primary">
                  Savol {currentQuestionIndex + 1} / {activeVariant.questions.length}
                </span>
                <span className="text-xs text-muted-foreground">
                  (Klaviaturadagi 1-4 yoki A-D orqali ham tanlashingiz mumkin)
                </span>
              </div>

              <button
                onClick={() =>
                  setFlaggedQuestions((prev) => ({
                    ...prev,
                    [currentQuestion.id]: !prev[currentQuestion.id],
                  }))
                }
                className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all ${
                  flaggedQuestions[currentQuestion.id]
                    ? "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/40"
                    : "border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                <Bookmark className="h-3.5 w-3.5" />
                {flaggedQuestions[currentQuestion.id]
                  ? "Eslatma olib tashlash"
                  : "Keyinroqqa belgilash"}
              </button>
            </div>

            {/* Question Text */}
            <div className="my-6">
              <h3 className="text-lg font-bold leading-relaxed md:text-xl text-foreground">
                {currentQuestion.question}
              </h3>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {currentQuestion.options.map((opt, oIdx) => {
                const optKey = ["A", "B", "C", "D"][oIdx] || opt.charAt(0);
                const isSelected = userAnswers[currentQuestion.id] === optKey;

                return (
                  <div
                    key={oIdx}
                    onClick={() => {
                      setUserAnswers((prev) => ({
                        ...prev,
                        [currentQuestion.id]: optKey,
                      }));
                    }}
                    className={`group flex cursor-pointer items-start gap-4 rounded-2xl border p-4 transition-all duration-200 ${
                      isSelected
                        ? "border-primary bg-primary/10 ring-1 ring-primary shadow-sm"
                        : "border-border bg-background/50 hover:border-border hover:bg-muted/50"
                    }`}
                  >
                    <div
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl text-xs font-extrabold transition-transform group-hover:scale-105 ${
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-glow"
                          : "border border-border bg-card text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {optKey}
                    </div>
                    <div className="pt-1 text-sm font-medium leading-relaxed text-foreground">
                      {opt.replace(/^[A-DА-Д]\s*[).\-–]\s*/i, "")}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/80 pt-6">
              <button
                disabled={currentQuestionIndex === 0}
                onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                className="flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-2.5 text-xs font-bold text-foreground transition-all hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" /> Oldingi savol
              </button>

              <div className="flex items-center gap-3">
                {userAnswers[currentQuestion.id] && (
                  <button
                    onClick={() => {
                      setUserAnswers((prev) => {
                        const copy = { ...prev };
                        delete copy[currentQuestion.id];
                        return copy;
                      });
                    }}
                    className="text-xs font-semibold text-muted-foreground transition-colors hover:text-rose-500"
                  >
                    Javobni tozalash
                  </button>
                )}

                {currentQuestionIndex < activeVariant.questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                    className="flex items-center gap-2 rounded-2xl bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-glow transition-all hover:bg-primary/90 hover:scale-105"
                  >
                    Keyingi savol <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setShowConfirmFinish(true)}
                    className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white shadow-glow transition-all hover:bg-emerald-500 hover:scale-105"
                  >
                    <Check className="h-4 w-4" /> Natijani ko'rish
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* VIEW 3: RESULTS AND QUESTION-BY-QUESTION REVIEW */}
      {/* ========================================================= */}
      {view === "result" && currentResult && (
        <div className="space-y-8">
          {/* Main Results Card */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="space-y-3 text-center md:text-left">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-extrabold text-primary">
                  <Award className="h-4 w-4" />
                  {activeVariant.title} natijalari
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                  {currentResult.percentage >= 76
                    ? "Ajoyib natija! Tabriklaymiz!"
                    : currentResult.percentage >= 56
                      ? "Yaxshi natija, davom eting!"
                      : "Mashg'ulotni davom ettiring!"}
                </h2>
                <p className="max-w-xl text-sm text-muted-foreground">
                  Siz 30 ta savoldan {currentResult.score} tasiga to'g'ri javob berdingiz. Quyida
                  to'liq xatolar tahlili va har bir savol bo'yicha to'g'ri javoblar keltirilgan.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2 md:justify-start">
                  <button
                    onClick={() => handleStartVariant(activeVariant.id)}
                    className="flex items-center gap-2 rounded-2xl bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-glow transition-all hover:bg-primary/90 hover:scale-105"
                  >
                    <RotateCcw className="h-4 w-4" /> Qaytadan topshirish
                  </button>
                  <button
                    onClick={() => {
                      if (activeVariant.id < 30) {
                        handleStartVariant(activeVariant.id + 1);
                      } else {
                        setView("list");
                      }
                    }}
                    className="flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-2.5 text-xs font-bold transition-all hover:bg-muted"
                  >
                    Keyingi variantga o'tish <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setView("list")}
                    className="text-xs font-semibold text-muted-foreground hover:text-foreground"
                  >
                    Barcha variantlar
                  </button>
                </div>
              </div>

              {/* Big Circular Score Display */}
              <div className="flex flex-col items-center">
                <div className="relative grid h-44 w-44 place-items-center rounded-full border-8 border-emerald-500/20 bg-background shadow-inner">
                  <div className="text-center">
                    <span className="text-4xl font-black text-foreground">
                      {currentResult.percentage}%
                    </span>
                    <p className="text-xs font-bold text-muted-foreground">
                      {currentResult.score} / {currentResult.total} to'g'ri
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-extrabold ${
                      getCertificateGrade(currentResult.percentage).color
                    }`}
                  >
                    <Award className="h-4 w-4" />
                    {getCertificateGrade(currentResult.percentage).label}
                  </span>
                </div>
              </div>
            </div>

            {/* Score summary grid */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border/80 pt-6 md:grid-cols-4">
              <div className="rounded-2xl border border-border/60 bg-muted/30 p-4 text-center">
                <p className="text-xs text-muted-foreground font-medium">To'g'ri javoblar</p>
                <p className="mt-1 text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  {currentResult.score}
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-muted/30 p-4 text-center">
                <p className="text-xs text-muted-foreground font-medium">Noto'g'ri javoblar</p>
                <p className="mt-1 text-2xl font-black text-rose-500">
                  {answeredCount - currentResult.score}
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-muted/30 p-4 text-center">
                <p className="text-xs text-muted-foreground font-medium">Belgilanmagan</p>
                <p className="mt-1 text-2xl font-black text-muted-foreground">
                  {currentResult.total - answeredCount}
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-muted/30 p-4 text-center">
                <p className="text-xs text-muted-foreground font-medium">Sarflangan vaqt</p>
                <p className="mt-1 text-2xl font-black text-foreground">
                  {formatTime(currentResult.timeSpentSeconds)}
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Question Review */}
          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Filter className="h-5 w-5 text-primary" /> Savollar tahlili
              </h3>

              <div className="flex items-center gap-2 overflow-x-auto">
                <button
                  onClick={() => setReviewFilter("all")}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                    reviewFilter === "all"
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "border border-border bg-card text-muted-foreground hover:bg-muted"
                  }`}
                >
                  Barchasi (30)
                </button>
                <button
                  onClick={() => setReviewFilter("correct")}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                    reviewFilter === "correct"
                      ? "bg-emerald-600 text-white shadow-glow"
                      : "border border-border bg-card text-muted-foreground hover:bg-muted"
                  }`}
                >
                  To'g'rilar ({currentResult.score})
                </button>
                <button
                  onClick={() => setReviewFilter("incorrect")}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                    reviewFilter === "incorrect"
                      ? "bg-rose-600 text-white shadow-glow"
                      : "border border-border bg-card text-muted-foreground hover:bg-muted"
                  }`}
                >
                  Xatolar ({answeredCount - currentResult.score})
                </button>
                <button
                  onClick={() => setReviewFilter("skipped")}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                    reviewFilter === "skipped"
                      ? "bg-muted text-foreground"
                      : "border border-border bg-card text-muted-foreground hover:bg-muted"
                  }`}
                >
                  Tashlab ketilganlar ({currentResult.total - answeredCount})
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {activeVariant.questions
                .filter((q) => {
                  const userAns = userAnswers[q.id];
                  const isCorrect =
                    userAns && userAns.toUpperCase() === q.correctAnswer.toUpperCase();
                  if (reviewFilter === "correct") return isCorrect;
                  if (reviewFilter === "incorrect") return userAns && !isCorrect;
                  if (reviewFilter === "skipped") return !userAns;
                  return true;
                })
                .map((q, idx) => {
                  const userAns = userAnswers[q.id];
                  const isCorrect =
                    userAns && userAns.toUpperCase() === q.correctAnswer.toUpperCase();

                  return (
                    <div
                      key={q.id}
                      className="rounded-3xl border border-border bg-card p-6 shadow-sm"
                    >
                      <div className="flex items-center justify-between gap-3 border-b border-border/60 pb-3">
                        <span className="text-xs font-extrabold text-muted-foreground">
                          Savol {idx + 1}
                        </span>

                        {isCorrect ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 className="h-3.5 w-3.5" /> To'g'ri javob
                          </span>
                        ) : userAns ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-500">
                            <XCircle className="h-3.5 w-3.5" /> Xato javob
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">
                            <AlertCircle className="h-3.5 w-3.5" /> Belgilanmagan
                          </span>
                        )}
                      </div>

                      <h4 className="mt-4 text-base font-bold leading-relaxed text-foreground">
                        {q.question}
                      </h4>

                      <div className="mt-4 space-y-2">
                        {q.options.map((opt, oIdx) => {
                          const key = ["A", "B", "C", "D"][oIdx] || opt.charAt(0);
                          const isUserChoice = userAns === key;
                          const isRightAnswer = q.correctAnswer.toUpperCase() === key;

                          let optStyle = "border-border bg-background/50";
                          if (isRightAnswer) {
                            optStyle =
                              "border-emerald-500 bg-emerald-500/15 text-emerald-950 dark:text-emerald-200 font-semibold";
                          } else if (isUserChoice && !isCorrect) {
                            optStyle =
                              "border-rose-500 bg-rose-500/15 text-rose-950 dark:text-rose-200";
                          }

                          return (
                            <div
                              key={oIdx}
                              className={`flex items-start gap-3 rounded-2xl border p-3.5 text-xs transition-all ${optStyle}`}
                            >
                              <div
                                className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg text-xs font-extrabold ${
                                  isRightAnswer
                                    ? "bg-emerald-600 text-white"
                                    : isUserChoice
                                      ? "bg-rose-500 text-white"
                                      : "border border-border bg-card text-muted-foreground"
                                }`}
                              >
                                {key}
                              </div>
                              <div className="pt-0.5 leading-relaxed">
                                {opt.replace(/^[A-DА-Д]\s*[).\-–]\s*/i, "")}
                              </div>
                              {isRightAnswer && (
                                <span className="ml-auto flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                                  <Check className="h-3.5 w-3.5" /> To'g'ri kalit
                                </span>
                              )}
                              {isUserChoice && !isRightAnswer && (
                                <span className="ml-auto text-[11px] font-bold text-rose-500">
                                  Sizning javobingiz
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal: Finish Test */}
      {showConfirmFinish && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-2xl">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-500/15 text-amber-500">
              <AlertCircle className="h-6 w-6" />
            </div>
            <h4 className="mt-4 text-lg font-bold">Testni yakunlaysizmi?</h4>
            <p className="mt-2 text-xs text-muted-foreground">
              Siz {answeredCount} / {activeVariant.questions.length} ta savolga javob berdingiz.
              {answeredCount < activeVariant.questions.length && (
                <span className="block mt-1 font-semibold text-amber-500">
                  Diqqat: {activeVariant.questions.length - answeredCount} ta savol belgilanmagan!
                </span>
              )}
            </p>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowConfirmFinish(false)}
                className="rounded-2xl border border-border px-4 py-2 text-xs font-bold hover:bg-muted"
              >
                Davom ettirish
              </button>
              <button
                onClick={handleFinishTest}
                className="rounded-2xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow-glow hover:bg-emerald-500"
              >
                Yakunlash va natijani ko'rish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal: Exit Test */}
      {showConfirmExit && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-2xl">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-rose-500/15 text-rose-500">
              <AlertCircle className="h-6 w-6" />
            </div>
            <h4 className="mt-4 text-lg font-bold">Testdan chiqmoqchimisiz?</h4>
            <p className="mt-2 text-xs text-muted-foreground">
              Agar hozir chiqsangiz, ushbu urinishdagi javoblaringiz saqlanmaydi.
            </p>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowConfirmExit(false)}
                className="rounded-2xl border border-border px-4 py-2 text-xs font-bold hover:bg-muted"
              >
                Yo'q, testda qolish
              </button>
              <button
                onClick={() => {
                  setShowConfirmExit(false);
                  setView("list");
                }}
                className="rounded-2xl bg-rose-600 px-5 py-2 text-xs font-bold text-white hover:bg-rose-500"
              >
                Ha, chiqish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
