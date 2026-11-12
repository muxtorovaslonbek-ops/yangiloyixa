import { useState, useMemo } from "react";
import {
  Play,
  CheckCircle2,
  Circle,
  Search,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Tv,
  ListOrdered,
  Sparkles,
} from "lucide-react";
import { ENGLISH_VIDEO_LESSONS, type VideoLesson } from "@/data/englishVideoLessons";

export function EnglishVideoLessons() {
  const [selectedId, setSelectedId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [completedIds, setCompletedIds] = useState<Set<number>>(() => new Set([1]));

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

  const toggleCompleted = (id: number) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleNext = () => {
    if (selectedId < ENGLISH_VIDEO_LESSONS.length) {
      setSelectedId((id) => id + 1);
    }
  };

  const handlePrev = () => {
    if (selectedId > 1) {
      setSelectedId((id) => id - 1);
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
      return true;
    });
  }, [searchQuery, categoryFilter]);

  const progressPercent = Math.round((completedIds.size / ENGLISH_VIDEO_LESSONS.length) * 100);

  return (
    <div className="space-y-6">
      {/* Top Progress & Stats Bar */}
      <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-5 shadow-card sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
            <Tv className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-foreground">Video darslar kursi</h3>
              <span className="rounded-md bg-cyan/15 px-2.5 py-0.5 text-xs font-bold text-navy dark:text-cyan">
                180 ta video dars
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Ketma-ketlikda 001 dan 180 gacha barcha grammatik qoidalar va video darsliklar
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:border-l sm:border-border sm:pl-6">
          <div className="w-36 space-y-1">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-muted-foreground">O'zlashtirildi:</span>
              <span className="text-primary">{completedIds.size} / 180</span>
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

      {/* Main Video Viewport & Playlist Split */}
      <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
        {/* Left: Active Video Player Area */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            {/* Embedded YouTube Player */}
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

            {/* Video Meta & Controls */}
            <div className="space-y-4 p-5 md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-lg bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                      Dars {currentLesson.code}
                    </span>
                    <span className="text-xs text-muted-foreground">{currentLesson.category}</span>
                  </div>
                  <h2 className="text-xl font-extrabold text-foreground md:text-2xl">
                    {currentLesson.code}. {currentLesson.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={currentLesson.youtubeUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-1.5 rounded-xl border border-border bg-muted/40 px-3 py-2 text-xs font-semibold text-foreground transition-all hover:bg-muted"
                  >
                    <span>YouTube'da ochish</span>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  </a>

                  <button
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

          {/* Quick learning tips */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs leading-relaxed text-foreground/90">
            <div className="flex items-center gap-2 font-bold text-primary">
              <Sparkles className="h-4 w-4" />
              <span>Darsni o'zlashtirish bo'yicha maslahat:</span>
            </div>
            <p className="mt-1">
              Videoni to'liq ko'rib chiqqach, daftaringizga darsdagi qoidalar va misollarni qayd
              qiling. Keyin "So'z boyligi" va "Darslar & Grammatika" bo'limlaridagi interaktiv
              mashqlar orqali bilimingizni mustahkamlang.
            </p>
          </div>
        </div>

        {/* Right: 180-Video Playlist Sidebar */}
        <div className="flex flex-col rounded-3xl border border-border bg-card p-5 shadow-card max-h-[820px]">
          <div className="space-y-3 pb-3 border-b border-border">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
                <ListOrdered className="h-4 w-4 text-primary" />
                <span>Darslar ro'yxati (180 ta)</span>
              </h3>
              <span className="text-xs font-semibold text-muted-foreground">
                {filteredLessons.length} ta dars
              </span>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Dars raqami yoki mavzusi..."
                className="w-full rounded-xl border border-border bg-muted/40 py-2 pl-9 pr-3 text-xs outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Quick Segmented Category Filters */}
            <div className="flex flex-wrap gap-1">
              {[
                { id: "all", label: "Barchasi" },
                { id: "1-24", label: "001-024" },
                { id: "25-60", label: "025-060" },
                { id: "61-100", label: "061-100" },
                { id: "101-140", label: "101-140" },
                { id: "141-180", label: "141-180" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-all ${
                    categoryFilter === cat.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable List */}
          <div className="mt-3 flex-1 overflow-y-auto space-y-1.5 pr-1">
            {filteredLessons.map((lesson) => {
              const isCurrent = lesson.id === selectedId;
              const isDone = completedIds.has(lesson.id);

              return (
                <button
                  key={lesson.id}
                  onClick={() => setSelectedId(lesson.id)}
                  className={`flex w-full items-center justify-between rounded-xl border p-2.5 text-left text-xs transition-all ${
                    isCurrent
                      ? "border-primary bg-primary/10 font-bold text-primary shadow-sm"
                      : "border-transparent bg-muted/20 hover:border-border hover:bg-muted/50 text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                    <span
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg font-mono text-[11px] font-bold ${
                        isCurrent
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {isCurrent ? <Play className="h-3 w-3 fill-current" /> : lesson.code}
                    </span>
                    <span className="truncate">{lesson.title}</span>
                  </div>

                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCompleted(lesson.id);
                    }}
                    title={isDone ? "Ko'rilgan" : "Ko'rilmagan"}
                    className="shrink-0 cursor-pointer p-0.5 text-muted-foreground hover:text-foreground"
                  >
                    {isDone ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Circle className="h-4 w-4 opacity-40 hover:opacity-100" />
                    )}
                  </span>
                </button>
              );
            })}

            {filteredLessons.length === 0 && (
              <div className="py-8 text-center text-xs text-muted-foreground">
                Mavzu topilmadi. Qidiruv so'zini tekshiring.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
