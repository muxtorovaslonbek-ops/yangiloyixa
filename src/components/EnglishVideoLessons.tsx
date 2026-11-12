import { useState, useMemo, useRef, useEffect } from "react";
import {
  Play,
  CheckCircle2,
  Circle,
  Search,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Tv,
  Sparkles,
  X,
  RotateCcw,
  Check,
  Eye,
} from "lucide-react";
import { ENGLISH_VIDEO_LESSONS, type VideoLesson } from "@/data/englishVideoLessons";

export interface EnglishVideoLessonsProps {
  completedIds?: Set<number>;
  onToggleCompleted?: (id: number) => void;
}

export function EnglishVideoLessons({
  completedIds: propCompletedIds,
  onToggleCompleted: propOnToggleCompleted,
}: EnglishVideoLessonsProps = {}) {
  const [selectedId, setSelectedId] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const playerRef = useRef<HTMLDivElement>(null);

  // Persist completed lessons in localStorage if not controlled from parent
  const [localCompletedIds, setLocalCompletedIds] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem("eduuni_completed_video_lessons");
      if (saved) {
        return new Set(JSON.parse(saved));
      }
    } catch {
      // Ignore
    }
    return new Set<number>([1]);
  });

  const completedIds = propCompletedIds ?? localCompletedIds;

  const toggleCompleted = (id: number) => {
    if (propOnToggleCompleted) {
      propOnToggleCompleted(id);
    } else {
      setLocalCompletedIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        try {
          localStorage.setItem("eduuni_completed_video_lessons", JSON.stringify(Array.from(next)));
        } catch {
          // Ignore
        }
        return next;
      });
    }
  };

  const currentLesson: VideoLesson = useMemo(() => {
    return (
      ENGLISH_VIDEO_LESSONS.find((v) => v.id === selectedId) ??
      ENGLISH_VIDEO_LESSONS[0] ?? {
        id: 1,
        code: "001",
        title: "Alphabet",
        youtubeUrl: "https://www.youtube.com/watch?v=d-fvgkbTED0",
        youtubeId: "d-fvgkbTED0",
        category: "Asosiy zamonlar va To Be",
      }
    );
  }, [selectedId]);

  const handleSelectAndPlay = (id: number) => {
    setSelectedId(id);
    setIsPlaying(true);
    // Smoothly scroll to player area
    if (playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNext = () => {
    if (selectedId < ENGLISH_VIDEO_LESSONS.length) {
      setSelectedId((id) => id + 1);
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    if (selectedId > 1) {
      setSelectedId((id) => id - 1);
      setIsPlaying(true);
    }
  };

  const filteredLessons = useMemo(() => {
    return ENGLISH_VIDEO_LESSONS.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (categoryFilter === "all") return true;
      if (categoryFilter === "1-24") return item.id >= 1 && item.id <= 24;
      if (categoryFilter === "25-60") return item.id >= 25 && item.id <= 60;
      if (categoryFilter === "61-100") return item.id >= 61 && item.id <= 100;
      if (categoryFilter === "101-140") return item.id >= 101 && item.id <= 140;
      if (categoryFilter === "141-180") return item.id >= 141 && item.id <= 180;
      if (categoryFilter === "completed") return completedIds.has(item.id);
      return true;
    });
  }, [searchQuery, categoryFilter, completedIds]);

  const progressPercent = Math.round((completedIds.size / ENGLISH_VIDEO_LESSONS.length) * 100);

  return (
    <div className="space-y-8">
      {/* Top Progress & Stats Bar */}
      <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-5 shadow-card sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
            <Tv className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-foreground">180 ta Video darslik kursi</h3>
              <span className="rounded-md bg-cyan/15 px-2.5 py-0.5 text-xs font-bold text-navy dark:text-cyan">
                001 dan 180 gacha
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              To'liq ketma-ketlikda grammatika, to be, zamonlar va xalqaro imtihonlarga tayyorgarlik
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:border-l sm:border-border sm:pl-6">
          <div className="w-40 space-y-1">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-muted-foreground">O'zlashtirildi:</span>
              <span className="text-primary font-bold">
                {completedIds.size} / {ENGLISH_VIDEO_LESSONS.length}
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary-grad transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <span className="text-sm font-extrabold text-foreground">{progressPercent}%</span>
        </div>
      </div>

      {/* Main Video Player / Preview Area (Does NOT autoplay when section opens) */}
      <div ref={playerRef} className="scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
          {isPlaying ? (
            /* Active YouTube Video Player */
            <div className="relative aspect-video w-full bg-slate-950">
              <iframe
                key={currentLesson.youtubeId}
                src={`https://www.youtube-nocookie.com/embed/${currentLesson.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={`${currentLesson.code}. ${currentLesson.title}`}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            /* Clean Poster Banner (NO AUTO-PLAY ON ENTERING) */
            <div className="relative aspect-video max-h-[460px] w-full overflow-hidden bg-slate-950">
              <img
                src={`https://img.youtube.com/vi/${currentLesson.youtubeId}/hqdefault.jpg`}
                alt={currentLesson.title}
                className="h-full w-full object-cover opacity-60 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              {/* Central Start Lesson Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="group flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transition-all duration-300 hover:scale-110 hover:bg-cyan hover:text-navy"
                  aria-label="Darsni boshlash"
                >
                  <Play className="ml-1.5 h-9 w-9 fill-current" />
                </button>
                <div className="mt-4 space-y-1">
                  <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-cyan backdrop-blur-md">
                    Dars #{currentLesson.code} · {currentLesson.category}
                  </span>
                  <h2 className="text-2xl font-extrabold md:text-3xl">
                    {currentLesson.code}. {currentLesson.title}
                  </h2>
                  <p className="max-w-md text-xs text-white/80 md:text-sm">
                    Darsni boshlash uchun bosing. Video darslar birdaniga boshlanmaydi, siz xohlagan
                    vaqtingizda tomosha qilishingiz mumkin.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="mt-4 flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-glow transition-all hover:scale-105"
                >
                  <Play className="h-4 w-4 fill-current" />
                  <span>Darsni tomosha qilish</span>
                </button>
              </div>
            </div>
          )}

          {/* Video Meta & Controls Bar */}
          <div className="space-y-4 p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                    Dars #{currentLesson.code}
                  </span>
                  <span className="text-xs text-muted-foreground">{currentLesson.category}</span>
                </div>
                <h2 className="text-xl font-extrabold text-foreground md:text-2xl">
                  {currentLesson.code}. {currentLesson.title}
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {isPlaying && (
                  <button
                    type="button"
                    onClick={() => setIsPlaying(false)}
                    className="flex items-center gap-1.5 rounded-xl border border-border bg-muted/60 px-3.5 py-2 text-xs font-semibold text-foreground transition-all hover:bg-muted"
                  >
                    <X className="h-4 w-4 text-muted-foreground" />
                    <span>Pleyerni yopish</span>
                  </button>
                )}

                <a
                  href={currentLesson.youtubeUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-1.5 rounded-xl border border-border bg-muted/40 px-3.5 py-2 text-xs font-semibold text-foreground transition-all hover:bg-muted"
                >
                  <span>YouTube'da ochish</span>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                </a>

                <button
                  type="button"
                  onClick={() => toggleCompleted(currentLesson.id)}
                  className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                    completedIds.has(currentLesson.id)
                      ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {completedIds.has(currentLesson.id) ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Ko'rildi</span>
                    </>
                  ) : (
                    <>
                      <Circle className="h-4 w-4" />
                      <span>Ko'rildi deb belgilash</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Prev / Next navigation buttons */}
            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={handlePrev}
                disabled={selectedId <= 1}
                className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-bold text-foreground transition-all hover:bg-muted disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Oldingi dars</span>
              </button>

              <div className="text-center">
                <span className="text-xs font-bold text-primary">
                  {currentLesson.id} / {ENGLISH_VIDEO_LESSONS.length}
                </span>
                <p className="text-[11px] text-muted-foreground">Ketma-ketlik bo'yicha</p>
              </div>

              <button
                type="button"
                onClick={handleNext}
                disabled={selectedId >= ENGLISH_VIDEO_LESSONS.length}
                className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 disabled:opacity-40"
              >
                <span>Keyingi dars</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER & SEARCH HEADER FOR 180 RECTANGULAR CARDS */}
      <div className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-extrabold text-foreground">
              Barcha video darslar ro'yxati
            </h3>
            <p className="text-xs text-muted-foreground">
              Har bir dars to'rtburchak shakldagi qulay kartochkalar orqali taqdim etilgan (
              {filteredLessons.length} ta dars ko'rsatilmoqda)
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Dars raqami yoki mavzusi..."
              className="w-full rounded-xl border border-border bg-card py-2 pl-9 pr-8 text-xs outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
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

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: "all", label: "Barchasi (180)" },
            { id: "1-24", label: "001-024 (To Be & Asosiy zamonlar)" },
            { id: "25-60", label: "025-060 (Grammatika & Savollar)" },
            { id: "61-100", label: "061-100 (Modal fe'llar & Nutq)" },
            { id: "101-140", label: "101-140 (Passive & Conditionals)" },
            { id: "141-180", label: "141-180 (Ilg'or & Imtihon)" },
            { id: "completed", label: `Ko'rilganlar (${completedIds.size})` },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategoryFilter(cat.id)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                categoryFilter === cat.id
                  ? "bg-primary text-primary-foreground font-bold shadow-sm scale-102"
                  : "bg-card text-muted-foreground border border-border hover:bg-muted hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* RECTANGULAR VIDEO CARDS GRID ("to'rt burchak qilib chiroyli qilib joylashtirish") */}
      {filteredLessons.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filteredLessons.map((lesson) => {
            const isSelected = selectedId === lesson.id;
            const isDone = completedIds.has(lesson.id);

            return (
              <div
                key={lesson.id}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow ${
                  isSelected
                    ? "border-primary ring-2 ring-primary/40 shadow-glow"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {/* 16:9 Rectangular Thumbnail Container */}
                <div
                  onClick={() => handleSelectAndPlay(lesson.id)}
                  className="relative aspect-video w-full cursor-pointer overflow-hidden bg-slate-900"
                >
                  <img
                    src={`https://img.youtube.com/vi/${lesson.youtubeId}/mqdefault.jpg`}
                    alt={lesson.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity group-hover:from-black/95" />

                  {/* Lesson Number Tag (Top Left) */}
                  <div className="absolute left-3 top-3 flex items-center gap-1.5">
                    <span className="rounded-lg bg-black/70 px-2 py-0.5 font-mono text-[11px] font-bold text-white shadow-sm backdrop-blur-md">
                      #{lesson.code}
                    </span>
                    {isSelected && isPlaying && (
                      <span className="flex items-center gap-1 rounded-lg bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground shadow-sm animate-pulse">
                        <Play className="h-2.5 w-2.5 fill-current" /> Ijro
                      </span>
                    )}
                  </div>

                  {/* Watched Status Checkbox (Top Right) */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCompleted(lesson.id);
                    }}
                    title={isDone ? "Ko'rilgan (o'chirish uchun bosing)" : "Ko'rildi deb belgilash"}
                    className={`absolute right-3 top-3 rounded-full p-1.5 backdrop-blur-md transition-all ${
                      isDone
                        ? "bg-emerald-500 text-white shadow-md scale-105"
                        : "bg-black/50 text-white/70 hover:bg-black/80 hover:text-white"
                    }`}
                  >
                    {isDone ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                  </button>

                  {/* Hover Play Icon Overlay */}
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow transition-all duration-300 group-hover:scale-115 group-hover:bg-cyan group-hover:text-navy">
                      <Play className="ml-0.5 h-5 w-5 fill-current" />
                    </div>
                  </div>

                  {/* Bottom Category Tag */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white/90">
                    <span className="truncate font-semibold text-cyan">{lesson.category}</span>
                    <span className="rounded bg-black/60 px-1.5 py-0.2 font-mono text-[10px] text-white/80">
                      HD
                    </span>
                  </div>
                </div>

                {/* Rectangular Card Content */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h4 className="font-bold text-sm text-foreground line-clamp-2 leading-snug transition-colors group-hover:text-primary">
                      {lesson.code}. {lesson.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                      {lesson.category}
                    </p>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                    <button
                      type="button"
                      onClick={() => handleSelectAndPlay(lesson.id)}
                      className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                        isSelected && isPlaying
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                      }`}
                    >
                      <Play className="h-3.5 w-3.5 fill-current" />
                      <span>{isSelected && isPlaying ? "Ijroda" : "Tomosha qilish"}</span>
                    </button>

                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => toggleCompleted(lesson.id)}
                        className={`rounded-lg p-1.5 transition-colors ${
                          isDone
                            ? "text-emerald-500 hover:bg-emerald-500/10"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                        title={isDone ? "Ko'rilgan" : "Ko'rildi deb belgilash"}
                      >
                        {isDone ? <Check className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>

                      <a
                        href={lesson.youtubeUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        title="YouTube orqali ochish"
                        className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
          <Tv className="mx-auto h-12 w-12 text-muted-foreground/50" />
          <h4 className="mt-3 text-base font-bold text-foreground">Bunday video dars topilmadi</h4>
          <p className="mt-1 text-xs text-muted-foreground">
            Qidiruv so'zini o'zgartirib ko'ring yoki boshqa toifani tanlang.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setCategoryFilter("all");
            }}
            className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition-all hover:bg-primary/90"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Filtrni tozalash</span>
          </button>
        </div>
      )}
    </div>
  );
}
