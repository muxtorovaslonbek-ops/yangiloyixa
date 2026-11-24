import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useMemo, useRef } from "react";
import type React from "react";
import {
  Home,
  BookOpen,
  FileText,
  ClipboardCheck,
  Library,
  Languages,
  Leaf,
  MessageSquare,
  Info,
  Search,
  Bell,
  ChevronDown,
  ArrowRight,
  GraduationCap,
  Play,
  Layers,
  BarChart3,
  Clock,
  Trophy,
  Dna,
  Menu,
  Sparkles,
  Bot,
  X,
  SearchX,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import botanika from "@/assets/botanika.jpg";
import genetika from "@/assets/genetika.jpg";
import mikro from "@/assets/mikro.jpg";
import biokimyo from "@/assets/biokimyo.jpg";
import support from "@/assets/support.png";
import university from "@/assets/university.png";
import avatar from "@/assets/avatar.jpg";
import icEn from "@/assets/icon-english.png";
import icBio from "@/assets/icon-biology.png";
import { EnglishSection } from "@/components/EnglishSection";
import { BiologySection } from "@/components/BiologySection";
import { KursIshiSection } from "@/components/KursIshiSection";
import { MustaqilIshSection } from "@/components/MustaqilIshSection";
import { DarsliklarSection, type SubjectKey } from "@/components/DarsliklarSection";
import { BotanikaSection } from "@/components/BotanikaSection";
import { GenetikaSection } from "@/components/GenetikaSection";
import { MikrobiologiyaSection } from "@/components/MikrobiologiyaSection";
import { BiokimyoSection } from "@/components/BiokimyoSection";
import { GidrobiologiyaSection } from "@/components/GidrobiologiyaSection";
import { BiotexnologiyaSection } from "@/components/BiotexnologiyaSection";
import { AiTeacherSection } from "@/components/AiTeacherSection";
import { BizHaqimizdaSection } from "@/components/BizHaqimizdaSection";
import { KutubxonaSection } from "@/components/KutubxonaSection";
import {
  PWAInstallBanner,
  PWAInstallButton,
  OfflineIndicator,
} from "@/components/PWAInstallPrompt";
import { searchAppContent, type SearchResultItem } from "@/data/searchIndex";
import { BOTANIKA_TOPICS } from "@/data/botanikaTopics";
import { GENETIKA_TOPICS } from "@/data/genetikaTopics";
import { MIKROBIOLOGIYA_TOPICS } from "@/data/mikrobiologiyaTopics";
import { BIOKIMYO_TOPICS } from "@/data/biokimyoTopics";
import {
  getDefaultStudyProgress,
  readStudyProgressFromStorage,
  type StudyProgressSummary,
} from "@/utils/studyProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EduUni — Universitet ta’limini oson o‘zlashtiring" },
      {
        name: "description",
        content:
          "Darsliklar, kurs ishi, mustaqil ish, kutubxona, ingliz tili va biologiya — universitet talabalari uchun zamonaviy raqamli ta’lim platformasi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "EduUni" },
      { property: "og:url", content: "https://eduuni.vercel.app/" },
      { property: "og:title", content: "EduUni — Universitet ta’limini oson o‘zlashtiring" },
      {
        property: "og:description",
        content:
          "Darsliklar, kurs ishi, mustaqil ish, kutubxona, ingliz tili va biologiya — barchasi bir platformada.",
      },
      { property: "og:image", content: "https://eduuni.vercel.app/og-image.png" },
      { property: "og:image:secure_url", content: "https://eduuni.vercel.app/og-image.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "EduUni — Universitet ta’limini oson o‘zlashtiring",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EduUni — Universitet ta’limini oson o‘zlashtiring" },
      {
        name: "twitter:description",
        content:
          "Darsliklar, kurs ishi, mustaqil ish, kutubxona, ingliz tili va biologiya — barchasi bir platformada.",
      },
      { name: "twitter:image", content: "https://eduuni.vercel.app/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://eduuni.vercel.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "EduUni",
          url: "https://eduuni.vercel.app/",
          image: "https://eduuni.vercel.app/og-image.png",
          applicationCategory: "EducationalApplication",
          operatingSystem: "All",
          inLanguage: "uz",
          description:
            "Darsliklar, kurs ishi, mustaqil ish, kutubxona, ingliz tili va biologiya — universitet talabalari uchun zamonaviy raqamli ta’lim platformasi.",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "UZS",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const nav = [
  { icon: Home, label: "Bosh sahifa" },
  { icon: BookOpen, label: "Darsliklar" },
  { icon: FileText, label: "Kurs ishi" },
  { icon: ClipboardCheck, label: "Mustaqil ish" },
  { icon: Library, label: "Kutubxona" },
  { icon: Languages, label: "Ingliz tili", img: icEn },
  { icon: Leaf, label: "Biologiya (Milliy sertifikat)", img: icBio },
  { icon: Sparkles, label: "AI Teacher (Ustoz)", badge: "AI" },
];
const features = [
  { icon: BookOpen, t: "Darsliklar", d: "Universitet fanlari bo‘yicha darsliklar", c: "icon-blue" },
  { icon: FileText, t: "Kurs ishi", d: "Kurs ishini yozish bo‘yicha yo‘riqnoma", c: "icon-violet" },
  { icon: ClipboardCheck, t: "Mustaqil ish", d: "Topshiriqlar va namunalar", c: "icon-orange" },
  { icon: Library, t: "Kutubxona", d: "Elektron kitoblar va PDF manbalar", c: "icon-purple" },
  {
    icon: Languages,
    t: "Ingliz tili",
    d: "0 dan C1 gacha bosqichma-bosqich",
    c: "bg-card-blue",
    img: icEn,
  },
  {
    icon: Dna,
    t: "Biologiya",
    d: "Milliy sertifikatga tayyorgarlik",
    c: "bg-card-violet",
    img: icBio,
  },
  {
    icon: Sparkles,
    t: "AI Teacher",
    d: "Barcha fanlar bo‘yicha ilmiy ustoz",
    c: "icon-blue",
  },
];
const list = [
  { t: "Botanika", n: BOTANIKA_TOPICS.length, p: 72, img: botanika },
  { t: "Genetika", n: GENETIKA_TOPICS.length, p: 60, img: genetika },
  { t: "Mikrobiologiya", n: MIKROBIOLOGIYA_TOPICS.length, p: 48, img: mikro },
  { t: "Biokimyo", n: BIOKIMYO_TOPICS.length, p: 35, img: biokimyo },
];

function useCount(to: number) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    const s = performance.now();
    const tick = (n: number) => {
      const k = Math.min(1, (n - s) / 1800);
      setV(Math.round(to * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return v;
}

function spot(e: React.MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function Index() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [botanikaFullscreen, setBotanikaFullscreen] = useState(false);
  const [genetikaFullscreen, setGenetikaFullscreen] = useState(false);
  const [mikrobiologiyaFullscreen, setMikrobiologiyaFullscreen] = useState(false);
  const [biokimyoFullscreen, setBiokimyoFullscreen] = useState(false);
  const [gidrobiologiyaFullscreen, setGidrobiologiyaFullscreen] = useState(false);
  const [biotexnologiyaFullscreen, setBiotexnologiyaFullscreen] = useState(false);
  const [selectedDarslikSubject, setSelectedDarslikSubject] = useState<SubjectKey>("botanika");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchCategory, setSearchCategory] = useState("Barchasi");
  const [aiPromptForTeacher, setAiPromptForTeacher] = useState("");
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const [studyProgress, setStudyProgress] = useState<StudyProgressSummary>(getDefaultStudyProgress);
  const pct = useCount(studyProgress.overallPercent);

  useEffect(() => {
    const syncProgress = () => {
      setStudyProgress(readStudyProgressFromStorage());
    };
    syncProgress();
    window.addEventListener("storage", syncProgress);
    window.addEventListener("focus", syncProgress);
    return () => {
      window.removeEventListener("storage", syncProgress);
      window.removeEventListener("focus", syncProgress);
    };
  }, [
    active,
    botanikaFullscreen,
    genetikaFullscreen,
    mikrobiologiyaFullscreen,
    biokimyoFullscreen,
    gidrobiologiyaFullscreen,
    biotexnologiyaFullscreen,
  ]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  const allSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchAppContent(searchQuery);
  }, [searchQuery]);

  const filteredSearchResults = useMemo(() => {
    if (searchCategory === "Barchasi") return allSearchResults;
    return allSearchResults.filter((item) => item.category === searchCategory);
  }, [allSearchResults, searchCategory]);

  const searchCategories = [
    "Barchasi",
    "Darsliklar",
    "Kurs ishi",
    "Mustaqil ish",
    "Kutubxona",
    "Ingliz tili",
    "Biologiya",
    "AI Teacher",
  ];

  const handleSelectResult = (item: SearchResultItem) => {
    if (item.id === "course-botanika" || item.id.startsWith("bot-")) {
      setActive(1);
      setBotanikaFullscreen(true);
    } else if (item.id === "course-genetika" || item.id.startsWith("genetika-")) {
      setActive(1);
      setGenetikaFullscreen(true);
    } else if (item.id === "course-mikro" || item.id.startsWith("mikro-")) {
      setActive(1);
      setMikrobiologiyaFullscreen(true);
    } else if (item.id === "course-biokimyo" || item.id.startsWith("biokimyo-")) {
      setActive(1);
      setBiokimyoFullscreen(true);
    } else if (item.id === "course-gidro" || item.id.startsWith("gidro-")) {
      setActive(1);
      setGidrobiologiyaFullscreen(true);
    } else if (item.id === "course-biotex" || item.id.startsWith("biotex-")) {
      setActive(1);
      setBiotexnologiyaFullscreen(true);
    } else {
      setActive(item.targetActiveTab);
    }
    setIsSearchOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAskAiTeacher = (queryText: string) => {
    setAiPromptForTeacher(queryText);
    setBotanikaFullscreen(false);
    setGenetikaFullscreen(false);
    setMikrobiologiyaFullscreen(false);
    setBiokimyoFullscreen(false);
    setGidrobiologiyaFullscreen(false);
    setBiotexnologiyaFullscreen(false);
    setActive(7);
    setIsSearchOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mesh-bg min-h-screen bg-background font-sans text-foreground">
      <aside
        aria-label="Asosiy menyu"
        className={`fixed inset-y-0 left-0 z-40 flex w-[280px] max-w-[85vw] flex-col bg-sidebar-grad text-navy-foreground transition-transform duration-300 ease-out lg:w-64 lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"} shadow-2xl`}
      >
        <div className="pointer-events-none absolute -left-10 top-1/3 h-48 w-48 rounded-full bg-primary/40 blob" />

        {/* Sticky Sidebar Header */}
        <div className="relative shrink-0 border-b border-navy-foreground/10 px-6 pb-4 pt-6 text-center">
          {open && (
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-xl p-1.5 text-navy-foreground/70 transition-colors hover:bg-navy-foreground/10 hover:text-navy-foreground lg:hidden"
              aria-label="Menyuni yopish"
            >
              <X className="h-5 w-5" />
            </button>
          )}
          <GraduationCap className="mx-auto h-12 w-12 text-cyan float" />
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight">
            Edu<span className="text-shine">Uni</span>
          </h1>
          <p className="mt-0.5 text-[11px] opacity-80 leading-snug">
            Universitet talabalari uchun raqamli ta’lim platformasi
          </p>
        </div>

        {/* Scrollable Navigation Items */}
        <nav className="menu-scrollbar relative flex-1 min-h-0 space-y-1 overflow-y-auto overflow-x-hidden px-3 pb-8 pt-3 overscroll-contain">
          {nav.map((n, i) => (
            <button
              key={n.label}
              type="button"
              onClick={() => {
                setActive(i);
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{ animationDelay: `${i * 60}ms` }}
              className={`fade-up group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-[14px] font-semibold transition-all duration-300 ${active === i ? "nav-active bg-primary-grad shadow-glow" : "hover:translate-x-1 hover:bg-navy-foreground/10"}`}
            >
              {"img" in n && n.img ? (
                <img
                  src={n.img}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain transition-transform group-hover:scale-125"
                />
              ) : (
                <n.icon className="h-5 w-5 shrink-0 transition-transform group-hover:scale-125" />
              )}
              <span className="truncate">{n.label}</span>
              {"badge" in n && n.badge && (
                <span className="ml-auto shrink-0 rounded-full bg-cyan/20 px-2 py-0.5 text-[10px] font-extrabold text-cyan">
                  {n.badge}
                </span>
              )}
            </button>
          ))}

          <div className="my-4 border-t border-navy-foreground/20" />

          {[
            { icon: MessageSquare, label: "Admin ga murojaat" },
            { icon: Info, label: "Biz haqimizda" },
          ].map((n) => {
            const isBizHaqimizdaActive = n.label === "Biz haqimizda" && active === 8;
            return (
              <button
                key={n.label}
                type="button"
                onClick={() => {
                  if (n.label === "Biz haqimizda") {
                    setActive(8);
                    setOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    setActive(0);
                    setOpen(false);
                    setTimeout(() => {
                      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                    }, 100);
                  }
                }}
                className={`group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-300 ${
                  isBizHaqimizdaActive
                    ? "nav-active bg-primary-grad shadow-glow"
                    : "hover:translate-x-1 hover:bg-navy-foreground/10"
                }`}
              >
                <n.icon className="h-5 w-5 shrink-0 transition-transform group-hover:rotate-12" />
                <span>{n.label}</span>
              </button>
            );
          })}

          <div className="pt-3">
            <PWAInstallButton variant="sidebar" onInstalledOrOpened={() => setOpen(false)} />
          </div>
        </nav>
      </aside>
      {open && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-30 bg-navy/55 backdrop-blur-[2px] transition-opacity lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <main className="min-w-0 pb-24 lg:pb-0 lg:pl-64">
        <header className="sticky top-0 z-20 flex items-center gap-2.5 bg-background/85 px-3 py-3 backdrop-blur-xl sm:gap-4 sm:px-4 sm:py-4 md:px-8">
          <button
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-card text-foreground shadow-xs transition-colors hover:bg-muted lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Menyuni ochish"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
          <div ref={searchContainerRef} className="relative min-w-0 flex-1 max-w-xl">
            <div className="flex items-center gap-2.5 rounded-full bg-muted px-3.5 py-2 transition-all focus-within:shadow-glow focus-within:ring-2 focus-within:ring-primary sm:gap-3 sm:px-4 sm:py-2.5">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground sm:h-5 sm:w-5" />
              <input
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setIsSearchOpen(false);
                  }
                }}
                placeholder="Fan, mavzu, video dars yoki testlarni qidiring..."
                className="min-w-0 w-full bg-transparent text-xs outline-none sm:text-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setIsSearchOpen(false);
                  }}
                  className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                  aria-label="Qidiruvni tozalash"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Floating quick search dropdown */}
            {isSearchOpen && searchQuery.trim().length > 0 && (
              <div className="fixed left-3 right-3 top-[66px] z-50 max-h-[calc(100vh-84px)] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl backdrop-blur-xl sm:absolute sm:left-0 sm:right-0 sm:top-full sm:mt-2 sm:max-h-[480px]">
                <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2">
                  <span className="text-xs font-semibold text-muted-foreground">
                    Topilgan natijalar ({filteredSearchResults.length})
                  </span>
                  <span className="text-[11px] text-muted-foreground">ESC — yopish</span>
                </div>

                {/* Category filter pills */}
                <div className="flex gap-1.5 overflow-x-auto border-b border-border/60 p-2 text-xs scrollbar-none">
                  {[
                    "Barchasi",
                    "Darsliklar",
                    "Kurs ishi",
                    "Ingliz tili",
                    "Biologiya",
                    "AI Teacher",
                  ].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setSearchCategory(cat);
                      }}
                      className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-all ${
                        searchCategory === cat
                          ? "bg-primary text-primary-foreground font-bold shadow-sm"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Results list */}
                <div className="max-h-72 overflow-y-auto p-2 space-y-1">
                  {filteredSearchResults.length > 0 ? (
                    filteredSearchResults.slice(0, 8).map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelectResult(item)}
                        className="group flex w-full items-start gap-3 rounded-xl p-2.5 text-left transition-colors hover:bg-muted/80"
                      >
                        <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                          {item.category === "Ingliz tili" ? (
                            <Languages className="h-3.5 w-3.5" />
                          ) : item.category === "Biologiya" ? (
                            <Leaf className="h-3.5 w-3.5" />
                          ) : item.category === "Kurs ishi" ? (
                            <FileText className="h-3.5 w-3.5" />
                          ) : item.category === "Kutubxona" ? (
                            <Library className="h-3.5 w-3.5" />
                          ) : item.category === "AI Teacher" ? (
                            <Sparkles className="h-3.5 w-3.5" />
                          ) : (
                            <BookOpen className="h-3.5 w-3.5" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="truncate text-xs font-bold text-foreground group-hover:text-primary">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="shrink-0 rounded bg-primary/10 px-1.5 py-0.2 text-[10px] font-semibold text-primary">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="line-clamp-1 text-[11px] text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 shrink-0 self-center text-muted-foreground opacity-0 transition-all group-hover:translate-x-1 group-hover:text-primary group-hover:opacity-100" />
                      </button>
                    ))
                  ) : (
                    <div className="p-4 text-center">
                      <p className="text-xs text-muted-foreground">
                        "{searchQuery}" bo'yicha to'g'ridan-to'g'ri bo'lim topilmadi
                      </p>
                    </div>
                  )}
                </div>

                {/* AI Teacher quick trigger footer */}
                <div className="border-t border-border bg-primary/5 p-2.5">
                  <button
                    type="button"
                    onClick={() => handleAskAiTeacher(searchQuery)}
                    className="flex w-full items-center justify-between rounded-xl bg-primary px-3 py-2 text-xs font-bold text-primary-foreground shadow-glow hover:opacity-95 transition-all"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <Sparkles className="h-4 w-4 shrink-0" />
                      <span className="truncate">
                        AI Ustozdan so'rash: "{searchQuery.slice(0, 26)}
                        {searchQuery.length > 26 ? "..." : ""}"
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 ml-2" />
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-4">
            <PWAInstallButton variant="header" />
            <button
              type="button"
              className="relative grid h-9 w-9 place-items-center rounded-xl transition-transform hover:rotate-12 sm:h-auto sm:w-auto"
              aria-label="Bildirishnomalar"
            >
              <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="absolute right-1 top-1 h-2 w-2 animate-ping rounded-full bg-destructive sm:-right-0.5 sm:-top-0.5 sm:h-2.5 sm:w-2.5" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive sm:-right-0.5 sm:-top-0.5 sm:h-2.5 sm:w-2.5" />
            </button>
            <div className="flex items-center gap-2.5 border-l border-border pl-2.5 sm:gap-3 sm:pl-5">
              <img
                src={avatar}
                alt="Aslonbek"
                width={44}
                height={44}
                className="h-9 w-9 rounded-full object-cover ring-2 ring-primary ring-offset-2 ring-offset-background transition-transform hover:scale-110 sm:h-11 sm:w-11"
              />
              <div className="hidden sm:block">
                <p className="font-bold leading-tight">Aslonbek</p>
                <p className="text-xs text-muted-foreground">Talaba</p>
              </div>
              <ChevronDown className="hidden h-4 w-4 sm:block" />
            </div>
          </div>
        </header>

        {active === 1 ? (
          <DarsliklarSection
            key={selectedDarslikSubject}
            initialSubject={selectedDarslikSubject}
            onBack={() => {
              setActive(0);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onOpenBotanika={() => setBotanikaFullscreen(true)}
            onOpenGenetika={() => setGenetikaFullscreen(true)}
            onOpenMikrobiologiya={() => setMikrobiologiyaFullscreen(true)}
            onOpenBiokimyo={() => setBiokimyoFullscreen(true)}
            onOpenGidrobiologiya={() => setGidrobiologiyaFullscreen(true)}
            onOpenBiotexnologiya={() => setBiotexnologiyaFullscreen(true)}
            onAskAi={handleAskAiTeacher}
          />
        ) : active === 2 ? (
          <KursIshiSection
            onBack={() => {
              setActive(0);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : active === 3 ? (
          <MustaqilIshSection
            onBack={() => {
              setActive(0);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onAskAi={handleAskAiTeacher}
          />
        ) : active === 4 ? (
          <KutubxonaSection
            onBack={() => {
              setActive(0);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onOpenDarslik={() => {
              setActive(1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : active === 5 ? (
          <EnglishSection
            onBack={() => {
              setActive(0);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : active === 6 ? (
          <BiologySection
            onBack={() => {
              setActive(0);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : active === 7 ? (
          <AiTeacherSection
            key={aiPromptForTeacher || "ai-teacher-root"}
            initialPrompt={aiPromptForTeacher}
            onBack={() => {
              setActive(0);
              setAiPromptForTeacher("");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : active === 8 ? (
          <BizHaqimizdaSection
            onBack={() => {
              setActive(0);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : (
          <div className="space-y-6 px-4 pb-10 md:px-8">
            {searchQuery.trim().length > 0 && (
              <section className="fade-up rounded-3xl border border-primary/20 bg-card p-6 shadow-card">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Search className="h-5 w-5 text-primary" />
                      <h2 className="text-xl font-bold">
                        Qidiruv natijalari:{" "}
                        <span className="text-primary font-extrabold">"{searchQuery}"</span>
                      </h2>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Platformaning barcha bo'limlari bo'yicha {filteredSearchResults.length} ta mos
                      keluvchi ma'lumot topildi
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleAskAiTeacher(searchQuery)}
                      className="flex items-center gap-1.5 rounded-xl bg-primary/10 px-3.5 py-2 text-xs font-bold text-primary transition-all hover:bg-primary/20"
                    >
                      <Sparkles className="h-4 w-4" /> AI Ustozdan so'rash
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        setIsSearchOpen(false);
                      }}
                      className="flex items-center gap-1.5 rounded-xl bg-muted px-3.5 py-2 text-xs font-medium text-muted-foreground transition-all hover:bg-muted/80 hover:text-foreground"
                    >
                      <X className="h-4 w-4" /> Tozalash
                    </button>
                  </div>
                </div>

                {/* Category filter pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {searchCategories.map((cat) => {
                    const count =
                      cat === "Barchasi"
                        ? allSearchResults.length
                        : allSearchResults.filter((i) => i.category === cat).length;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSearchCategory(cat)}
                        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                          searchCategory === cat
                            ? "bg-primary text-primary-foreground font-bold shadow-sm"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        <span>{cat}</span>
                        <span className="rounded-full bg-background/25 px-1.5 py-0.2 text-[10px]">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Results grid */}
                {filteredSearchResults.length > 0 ? (
                  <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredSearchResults.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleSelectResult(item)}
                        className="group flex flex-col justify-between rounded-2xl border border-border bg-background p-4.5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow cursor-pointer"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                              {item.category}
                            </span>
                            {item.badge && (
                              <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <h4 className="mt-2.5 font-bold text-sm text-foreground transition-colors group-hover:text-primary line-clamp-1">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs font-semibold text-primary">
                          <span>Bo'limga o'tish</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-6 rounded-2xl border border-dashed border-border p-8 text-center">
                    <SearchX className="mx-auto h-12 w-12 text-muted-foreground/60" />
                    <p className="mt-3 font-bold text-base">
                      "{searchQuery}" bo'yicha to'g'ridan-to'g'ri bo'lim topilmadi
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground max-w-md mx-auto">
                      Qidiruv so'zini qisqartirib ko'ring yoki sun'iy intellekt AI Ustoziga bevosita
                      ilmiy savolni yo'llang!
                    </p>
                    <button
                      type="button"
                      onClick={() => handleAskAiTeacher(searchQuery)}
                      className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-glow hover:scale-105 transition-all"
                    >
                      <Sparkles className="h-4 w-4" /> AI Ustozdan so'rash: "{searchQuery}"
                    </button>
                  </div>
                )}
              </section>
            )}
            <section className="fade-up hero-zoom relative min-h-[260px] overflow-hidden rounded-3xl shadow-card sm:min-h-[300px]">
              <img
                src={hero}
                alt="Universitet talabalari"
                width={1600}
                height={640}
                className="absolute inset-0 h-full w-full object-cover object-right transition-transform duration-[2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-hero-grad" />
              {Array.from({ length: 14 }).map((_, k) => (
                <span
                  key={k}
                  className="sparkle"
                  style={{
                    left: `${(k * 37) % 60}%`,
                    top: `${(k * 53) % 90}%`,
                    animationDelay: `${k * 0.35}s`,
                  }}
                />
              ))}
              <div className="relative z-10 flex min-h-[260px] flex-col justify-center p-5 text-navy-foreground sm:min-h-[300px] sm:p-8 md:p-12">
                <h2 className="max-w-3xl text-2xl font-extrabold leading-tight sm:text-3xl md:text-[2.6rem]">
                  Universitet ta’limini <br />
                  <span className="text-shine">oson va samarali</span> o‘zlashtiring!
                </h2>
                <p className="mt-2.5 max-w-md text-sm font-medium opacity-95 sm:mt-3 sm:text-base md:text-lg">
                  Darsliklar, topshiriqlar, kurs ishi, kutubxona va til o‘rganish — barchasi bir
                  platformada!
                </p>
                <button
                  onClick={() => {
                    setActive(5);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="btn-shine group mt-5 inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-bold text-primary transition-all hover:scale-105 hover:shadow-glow sm:mt-6 sm:px-7 sm:py-3 sm:text-base"
                >
                  Boshlash{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </section>

            <section className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
              {features.map((f, i) => (
                <div
                  key={f.t}
                  onMouseMove={spot}
                  onClick={() => {
                    if (f.t === "Kurs ishi") {
                      setActive(2);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else if (f.t === "Mustaqil ish") {
                      setActive(3);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else if (f.t === "Kutubxona") {
                      setActive(4);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else if (f.t === "Ingliz tili") {
                      setActive(5);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else if (f.t === "Biologiya" || f.d.includes("sertifikat")) {
                      setActive(6);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else if (f.t === "AI Teacher" || f.t.includes("AI")) {
                      setActive(7);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      const targetIndex =
                        i === 1 ? 2 : i === 2 ? 3 : i === 4 ? 5 : i === 5 ? 6 : i === 6 ? 7 : i + 1;
                      setActive(targetIndex);
                    }
                  }}
                  style={{ animationDelay: `${150 + i * 80}ms` }}
                  className="fade-up lift spot group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-card before:absolute before:inset-x-0 before:top-0 before:h-1 before:origin-left before:scale-x-0 before:bg-primary-grad before:transition-transform before:duration-500 hover:before:scale-x-100"
                >
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-xl ${f.c} text-primary-foreground transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[360deg] icon-pop`}
                  >
                    {"img" in f && f.img ? (
                      <img
                        src={f.img}
                        alt=""
                        width={40}
                        height={40}
                        loading="lazy"
                        className="h-10 w-10 object-contain"
                      />
                    ) : (
                      <f.icon />
                    )}
                  </div>
                  <h3 className="mt-3 font-bold">{f.t}</h3>
                  <div className="flex items-end justify-between gap-2">
                    <p className="text-xs text-muted-foreground">{f.d}</p>
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                </div>
              ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-[1fr_440px]">
              <div
                className="fade-up min-w-0 rounded-3xl bg-card p-4 shadow-card sm:p-5"
                style={{ animationDelay: "400ms" }}
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="flex items-center gap-2 text-lg font-bold sm:text-xl">
                    <GraduationCap className="shrink-0 text-primary" /> Tavsiya etilgan kurslar
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      setActive(1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="group flex shrink-0 items-center gap-1 text-sm font-semibold text-primary"
                  >
                    Barchasi{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-3.5 min-[400px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
                  {list.map((c) => (
                    <div
                      key={c.t}
                      onClick={() => {
                        const key = c.t.toLowerCase() as SubjectKey;
                        setSelectedDarslikSubject(key);
                        setActive(1);
                        if (key === "botanika") {
                          setBotanikaFullscreen(true);
                        } else if (key === "genetika") {
                          setGenetikaFullscreen(true);
                        } else if (key === "mikrobiologiya") {
                          setMikrobiologiyaFullscreen(true);
                        } else if (key === "biokimyo") {
                          setBiokimyoFullscreen(true);
                        } else {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className="lift spot group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card"
                      onMouseMove={spot}
                    >
                      <div className="h-24 overflow-hidden">
                        <img
                          src={c.img}
                          alt={c.t}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-3">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm font-bold leading-tight">{c.t}</p>
                          <span className="absolute right-2 top-2 z-10 grid h-8 w-8 place-items-center shadow-glow rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-125">
                            <Play className="h-3 w-3 fill-current" />
                          </span>
                        </div>
                        <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                          <Layers className="h-3 w-3" />
                          {c.n} dars
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="fade-up relative overflow-hidden rounded-3xl bg-sidebar-grad p-6 text-navy-foreground shadow-card"
                style={{ animationDelay: "500ms" }}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan/40 blob" />
                <h3 className="relative flex items-center gap-2 text-lg font-bold">
                  <BarChart3 className="text-cyan" /> O‘quv jarayoni
                </h3>
                <div className="relative mt-4 flex flex-col items-center gap-6 sm:flex-row">
                  <div className="relative h-40 w-40 shrink-0">
                    <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        strokeWidth="14"
                        className="stroke-navy-foreground/15"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        strokeWidth="14"
                        strokeLinecap="round"
                        className="ring-anim stroke-cyan"
                        strokeDasharray="440"
                        strokeDashoffset={440 - 440 * (studyProgress.overallPercent / 100)}
                      />
                    </svg>
                    <div className="absolute inset-0 grid place-items-center text-center">
                      <div>
                        <p className="text-4xl font-extrabold tabular-nums">{pct}%</p>
                        <p className="text-xs opacity-80">Umumiy natija</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full space-y-3">
                    {[
                      {
                        i: BookOpen,
                        n: studyProgress.completedLessons,
                        t: "Tugallangan darslar",
                        sub: `${studyProgress.botanikaDone}/${studyProgress.botanikaTotal} Botanika · ${studyProgress.englishDone}/${studyProgress.englishTotal} Ingliz tili`,
                      },
                      {
                        i: Clock,
                        n: studyProgress.activeCoursesCount,
                        t: "Davom etayotgan kurslar",
                        sub: `${studyProgress.totalCoursesCount} ta faol o‘quv yo‘nalishidan`,
                      },
                      {
                        i: Trophy,
                        n: studyProgress.completedTasks,
                        t: "Bajarilgan topshiriqlar",
                        sub: `${studyProgress.mustaqilDone}/${studyProgress.mustaqilTotal} Mustaqil ish · ${studyProgress.bioDone}/${studyProgress.bioTotal} Biologiya test`,
                      },
                    ].map((s) => (
                      <div
                        key={s.t}
                        className="flex items-center gap-3 rounded-xl bg-navy-foreground/10 px-4 py-3 transition-all hover:translate-x-1 hover:bg-navy-foreground/20"
                      >
                        <s.i className="h-5 w-5 shrink-0 text-cyan" />
                        <span className="text-xl font-bold tabular-nums">{s.n}</span>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold leading-tight">{s.t}</p>
                          <p className="truncate text-[11px] opacity-75 tabular-nums">{s.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              {[
                {
                  i: MessageSquare,
                  t: "Admin ga murojaat",
                  d: "Savol, taklif yoki muammo bo‘yicha admin bilan bog‘laning.",
                  c: "bg-card-blue",
                  ic: "icon-blue",
                  img: support,
                },
                {
                  i: Info,
                  t: "Biz haqimizda",
                  d: "Platforma maqsadi, imkoniyatlari va jamoa haqida batafsil ma’lumot.",
                  c: "bg-card-violet",
                  ic: "icon-purple",
                  img: university,
                },
              ].map((b, k) => (
                <div
                  key={b.t}
                  style={{ animationDelay: `${600 + k * 100}ms` }}
                  onMouseMove={spot}
                  onClick={() => {
                    if (b.t === "Biz haqimizda") {
                      setActive(8);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`fade-up lift spot group relative flex cursor-pointer items-center gap-3.5 overflow-hidden rounded-3xl ${b.c} p-5 sm:gap-5 sm:p-6 sm:pr-36 md:pr-40`}
                >
                  <div
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${b.ic} text-primary-foreground float sm:h-16 sm:w-16`}
                  >
                    <b.i className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold sm:text-xl">{b.t}</h3>
                    <p className="text-xs text-muted-foreground sm:text-sm">{b.d}</p>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-card text-primary shadow-card transition-transform group-hover:translate-x-1 sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <img
                    src={b.img}
                    alt=""
                    loading="lazy"
                    width={816}
                    height={816}
                    className="pointer-events-none absolute -bottom-3 right-2 hidden h-28 w-28 object-contain transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110 sm:block md:h-32 md:w-32"
                  />
                </div>
              ))}
            </section>
          </div>
        )}
      </main>

      {/* Mobile Native-Style Bottom Navigation Bar */}
      {!(
        botanikaFullscreen ||
        biokimyoFullscreen ||
        genetikaFullscreen ||
        mikrobiologiyaFullscreen ||
        gidrobiologiyaFullscreen ||
        biotexnologiyaFullscreen
      ) && (
        <>
          <PWAInstallBanner />
          <OfflineIndicator />
          <nav
            aria-label="Mobil navigatsiya"
            className="fixed inset-x-0 bottom-0 z-30 border-t border-border/90 bg-card/95 px-2 pt-1.5 pb-[calc(0.45rem+env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-12px_rgba(15,23,42,0.22)] backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto grid max-w-lg grid-cols-5 gap-1">
              {[
                { label: "Asosiy", icon: Home, tab: 0 },
                { label: "Darsliklar", icon: BookOpen, tab: 1 },
                { label: "Kutubxona", icon: Library, tab: 4 },
                { label: "AI Ustoz", icon: Sparkles, tab: 7 },
                { label: "Menyu", icon: Menu, tab: -1 },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = item.tab === -1 ? open : active === item.tab;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      if (item.tab === -1) {
                        setOpen((prev) => !prev);
                      } else {
                        setActive(item.tab);
                        setOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className={`flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1 text-[10px] font-bold transition-all active:scale-95 ${
                      isActive
                        ? "bg-primary/12 text-primary"
                        : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? "stroke-[2.4]" : "stroke-[2]"}`} />
                    <span className="truncate leading-none">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </>
      )}

      {botanikaFullscreen && (
        <BotanikaSection
          onBack={() => setBotanikaFullscreen(false)}
          onAskAi={(prompt) => {
            setBotanikaFullscreen(false);
            handleAskAiTeacher(prompt);
          }}
        />
      )}

      {biokimyoFullscreen && (
        <BiokimyoSection
          onBack={() => setBiokimyoFullscreen(false)}
          onAskAi={(prompt) => {
            setBiokimyoFullscreen(false);
            handleAskAiTeacher(prompt);
          }}
        />
      )}

      {genetikaFullscreen && (
        <GenetikaSection
          onBack={() => setGenetikaFullscreen(false)}
          onAskAi={(prompt) => {
            setGenetikaFullscreen(false);
            handleAskAiTeacher(prompt);
          }}
        />
      )}

      {mikrobiologiyaFullscreen && (
        <MikrobiologiyaSection
          onBack={() => setMikrobiologiyaFullscreen(false)}
          onAskAi={(prompt) => {
            setMikrobiologiyaFullscreen(false);
            handleAskAiTeacher(prompt);
          }}
        />
      )}

      {gidrobiologiyaFullscreen && (
        <GidrobiologiyaSection
          onBack={() => setGidrobiologiyaFullscreen(false)}
          onAskAi={(prompt) => {
            setGidrobiologiyaFullscreen(false);
            handleAskAiTeacher(prompt);
          }}
        />
      )}

      {biotexnologiyaFullscreen && (
        <BiotexnologiyaSection
          onBack={() => setBiotexnologiyaFullscreen(false)}
          onAskAi={(prompt) => {
            setBiotexnologiyaFullscreen(false);
            handleAskAiTeacher(prompt);
          }}
        />
      )}
    </div>
  );
}
