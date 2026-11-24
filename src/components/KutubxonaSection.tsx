import { useMemo, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Download,
  Dna,
  ExternalLink,
  FileText,
  Library,
  Search,
  X,
} from "lucide-react";
import { PdfSlideViewer } from "./PdfSlideViewer";

interface KutubxonaSectionProps {
  onBack: () => void;
  onOpenDarslik?: () => void;
}

type LibraryCategory = "Barchasi" | "Biologiya";

interface LibraryItem {
  id: string;
  title: string;
  category: Exclude<LibraryCategory, "Barchasi">;
  meta: string;
  description: string;
  pdfUrl: string;
}

const LIBRARY_ITEMS: LibraryItem[] = [
  {
    id: "lib-bio-30-variant",
    title: "Biologiya fanidan Milliy sertifikat — 30 ta rasmiy test varianti",
    category: "Biologiya",
    meta: "Biologiya · DTM standarti · 900 savol · PDF",
    description:
      "Sitologiya, genetika, molekulyar biologiya, botanika, zoologiya va odam anatomiyasi bo‘yicha 30 ta to‘liq imtihon varianti jamlanmasi.",
    pdfUrl: "/assets/aistudio/30_Variant_sertifikat_042325ac.pdf",
  },
];

const CATEGORIES: LibraryCategory[] = ["Barchasi", "Biologiya"];

export function KutubxonaSection({ onBack, onOpenDarslik }: KutubxonaSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<LibraryCategory>("Barchasi");
  const [searchQuery, setSearchQuery] = useState("");
  const [readingItem, setReadingItem] = useState<LibraryItem | null>(null);

  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return LIBRARY_ITEMS.filter((item) => {
      const matchCat = selectedCategory === "Barchasi" || item.category === selectedCategory;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.meta.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, searchQuery]);

  if (readingItem) {
    return (
      <div className="space-y-6 px-4 pb-16 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-4 pt-2">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setReadingItem(null)}
              className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <ArrowLeft className="h-4 w-4 text-primary" />
              <span>Kutubxonaga qaytish</span>
            </button>
            <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
              <span>EduUni</span>
              <span>/</span>
              <span>Kutubxona</span>
              <span>/</span>
              <span className="max-w-xs truncate font-semibold text-foreground">
                {readingItem.title}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={readingItem.pdfUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-bold text-foreground transition-colors hover:bg-muted"
            >
              <ExternalLink className="h-3.5 w-3.5 text-primary" />
              <span>Yangi oynada</span>
            </a>
            <a
              href={readingItem.pdfUrl}
              download
              className="flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Yuklab olish</span>
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground">{readingItem.meta}</p>
          <h1 className="text-xl font-extrabold tracking-tight text-foreground md:text-2xl">
            {readingItem.title}
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {readingItem.description}
          </p>
        </div>

        <PdfSlideViewer url={readingItem.pdfUrl} title={readingItem.title} />
      </div>
    );
  }

  return (
    <div className="space-y-6 px-4 pb-16 md:px-8">
      {/* Breadcrumb Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-4 pt-2">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4 text-primary" />
            <span>Bosh sahifaga qaytish</span>
          </button>
          <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
            <span>EduUni</span>
            <span>/</span>
            <span className="font-semibold text-foreground">Kutubxona</span>
          </div>
        </div>

        <span className="text-xs font-semibold text-muted-foreground tabular-nums">
          {LIBRARY_ITEMS.length} ta PDF to‘plam
        </span>
      </div>

      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-sidebar-grad p-5 text-navy-foreground shadow-card sm:p-6 md:p-8">
        <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-cyan/25 blob" />
        <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan">
              <Library className="h-4 w-4" />
              <span>EduUni Elektron Kutubxonasi</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-balance md:text-4xl">
              Elektron <span className="text-shine">Kutubxona</span> va O‘quv Manbalari
            </h1>
            <p className="text-sm leading-relaxed text-navy-foreground/85">
              Biologiya fanidan Milliy sertifikat — 30 ta rasmiy test varianti PDF to‘plamini shu
              yerning o‘zida o‘qing yoki yuklab oling.
            </p>
          </div>

          {onOpenDarslik && (
            <button
              type="button"
              onClick={onOpenDarslik}
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20 lg:self-center"
            >
              <BookOpen className="h-4 w-4 text-cyan" />
              <span>Darsliklar bo‘limiga o‘tish</span>
            </button>
          )}
        </div>
      </section>

      {/* Filter & Search Bar */}
      <div className="flex flex-col gap-3.5 rounded-2xl border border-border bg-card p-3.5 shadow-sm sm:p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 sm:flex-wrap">
          {CATEGORIES.map((category) => {
            const count =
              category === "Barchasi"
                ? LIBRARY_ITEMS.length
                : LIBRARY_ITEMS.filter((i) => i.category === category).length;
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Kitob yoki mavzu nomini qidiring..."
            className="w-full rounded-xl border border-border bg-background py-2 pl-9 pr-8 text-xs text-foreground outline-none transition-colors focus:border-primary"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Qidiruvni tozalash"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Library Resource Cards */}
      {filteredItems.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Dna className="h-5 w-5" />
                  </div>
                  <p className="flex-1 pt-0.5 text-xs font-medium text-muted-foreground">
                    {item.meta}
                  </p>
                </div>

                <h2 className="text-base font-extrabold leading-snug text-foreground">
                  {item.title}
                </h2>

                <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border/70 pt-4">
                <button
                  type="button"
                  onClick={() => setReadingItem(item)}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>O‘qish</span>
                </button>
                <a
                  href={item.pdfUrl}
                  download
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-background px-3.5 py-2 text-xs font-bold text-foreground transition-colors hover:bg-muted"
                >
                  <Download className="h-3.5 w-3.5 text-primary" />
                  <span>Yuklab olish</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
          <Library className="mx-auto h-10 w-10 text-muted-foreground/60" />
          <p className="mt-3 text-sm font-bold text-foreground">
            "{searchQuery}" bo‘yicha kutubxona manbasi topilmadi
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Boshqa kalit so‘zni kiriting yoki barcha bo‘limlarni tanlang.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("Barchasi");
            }}
            className="mt-4 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground"
          >
            Barcha manbalarni ko‘rsatish
          </button>
        </div>
      )}
    </div>
  );
}
