import { useEffect, useRef, useState, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Loader2,
  Maximize2,
  Minimize2,
  RotateCcw,
  ScrollText,
  Square,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import type { PDFDocumentProxy, RenderTask } from "pdfjs-dist";

interface PdfSlideViewerProps {
  url: string;
  title: string;
  compactHeight?: boolean;
}

interface PdfPageCanvasProps {
  pdfDoc: PDFDocumentProxy;
  pageNumber: number;
  zoom: number;
  containerWidth: number;
  eager?: boolean;
}

function PdfPageCanvas({
  pdfDoc,
  pageNumber,
  zoom,
  containerWidth,
  eager = false,
}: PdfPageCanvasProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(eager);
  const [rendering, setRendering] = useState(false);

  useEffect(() => {
    if (eager) {
      setIsVisible(true);
      return;
    }
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
        }
      },
      { rootMargin: "450px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eager]);

  useEffect(() => {
    if (!isVisible) return;

    let cancelled = false;
    let renderTask: RenderTask | null = null;

    const renderPage = async () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      setRendering(true);
      try {
        const page = await pdfDoc.getPage(pageNumber);
        if (cancelled) return;

        const baseViewport = page.getViewport({ scale: 1 });
        const targetWidth = Math.max(280, containerWidth - 24);
        const fitScale = (targetWidth / baseViewport.width) * zoom;
        const outputScale = Math.min(window.devicePixelRatio || 1, 2);

        const viewport = page.getViewport({ scale: fitScale });
        const ctx = canvas.getContext("2d");
        if (!ctx || cancelled) return;

        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        ctx.setTransform(outputScale, 0, 0, outputScale, 0, 0);

        renderTask = page.render({
          canvasContext: ctx,
          viewport,
          canvas,
        });

        await renderTask.promise;
      } catch (err) {
        if (
          err &&
          typeof err === "object" &&
          "name" in err &&
          err.name === "RenderingCancelledException"
        ) {
          return;
        }
      } finally {
        if (!cancelled) {
          setRendering(false);
        }
      }
    };

    void renderPage();

    return () => {
      cancelled = true;
      if (renderTask) {
        renderTask.cancel();
      }
    };
  }, [pdfDoc, pageNumber, zoom, containerWidth, isVisible]);

  return (
    <div
      ref={wrapperRef}
      className="relative flex flex-col items-center rounded-xl border border-border/70 bg-white p-2 shadow-sm"
    >
      <div className="mb-1.5 flex w-full items-center justify-between px-2 text-[11px] font-semibold text-slate-500">
        <span>{pageNumber}-sahifa</span>
        {rendering && (
          <span className="inline-flex items-center gap-1 text-primary">
            <Loader2 className="h-3 w-3 animate-spin" />
            Yuklanmoqda...
          </span>
        )}
      </div>
      <canvas
        ref={canvasRef}
        className="max-w-full rounded-lg bg-white shadow-xs"
        aria-label={`${pageNumber}-sahifa`}
      />
    </div>
  );
}

export function PdfSlideViewer({ url, title, compactHeight = false }: PdfSlideViewerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [pdfDoc, setPdfDoc] = useState<PDFDocumentProxy | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"scroll" | "slide">("scroll");
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [containerWidth, setContainerWidth] = useState(820);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  const measureWidth = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const width = el.clientWidth;
    if (width > 120) {
      setContainerWidth(Math.min(width - 16, 1020));
    }
  }, []);

  useEffect(() => {
    measureWidth();
    const el = scrollContainerRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const ro = new ResizeObserver(() => measureWidth());
    ro.observe(el);
    return () => ro.disconnect();
  }, [measureWidth, isFullscreen, compactHeight]);

  useEffect(() => {
    if (!isFullscreen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopImmediatePropagation();
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [isFullscreen]);

  useEffect(() => {
    let active = true;
    let loadingTask: { promise: Promise<PDFDocumentProxy>; destroy: () => Promise<void> } | null =
      null;

    const loadPdf = async () => {
      setLoading(true);
      setErrorMsg(null);
      setCurrentPage(1);
      setNumPages(0);
      setPdfDoc(null);

      try {
        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        loadingTask = pdfjsLib.getDocument({ url });

        const loadedDoc = await loadingTask.promise;
        if (!active) {
          void loadingTask.destroy();
          return;
        }

        setPdfDoc(loadedDoc);
        setNumPages(loadedDoc.numPages);
      } catch {
        if (active) {
          setErrorMsg("PDF faylni brauzer ichida ochishda xatolik yuz berdi.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    void loadPdf();

    return () => {
      active = false;
      if (loadingTask) {
        void loadingTask.destroy();
      }
    };
  }, [url, reloadKey]);

  const pagesArray = Array.from({ length: numPages }, (_, i) => i + 1);

  return (
    <section
      className={
        isFullscreen
          ? "fixed inset-0 z-[80] flex flex-col bg-background text-foreground"
          : "overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
      }
    >
      {/* PDF Toolbar Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/40 px-4 py-3 md:px-5">
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400">
            <FileText className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-xs font-extrabold text-foreground md:text-sm">{title}</h3>
            <p className="text-[11px] text-muted-foreground">
              {numPages > 0 ? `Jami ${numPages} ta sahifa (slayd)` : "PDF ma’ruza taqdimoti"}
            </p>
          </div>
        </div>

        {/* Interactive Reader Controls */}
        <div className="flex flex-wrap items-center gap-1.5">
          {/* View Mode Toggle: Scroll all vs Single slide */}
          <div className="flex items-center rounded-xl border border-border bg-background p-0.5">
            <button
              type="button"
              onClick={() => setViewMode("scroll")}
              className={`flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[11px] font-bold transition-colors ${
                viewMode === "scroll"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              title="Barcha sahifalarni ketma-ket varaqlab o‘qish"
            >
              <ScrollText className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Varaqlash</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("slide")}
              className={`flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[11px] font-bold transition-colors ${
                viewMode === "slide"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              title="Slayd-ma-slayd ko‘rish"
            >
              <Square className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Slayd</span>
            </button>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center rounded-xl border border-border bg-background p-0.5">
            <button
              type="button"
              onClick={() => setZoom((z) => Math.max(0.6, Number((z - 0.15).toFixed(2))))}
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              title="Kichiklashtirish"
              aria-label="Kichiklashtirish"
            >
              <ZoomOut className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setZoom(1)}
              className="px-2 font-mono text-[11px] font-bold text-foreground tabular-nums"
              title="Asl o‘lcham"
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              type="button"
              onClick={() => setZoom((z) => Math.min(2.2, Number((z + 0.15).toFixed(2))))}
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              title="Kattalashtirish"
              aria-label="Kattalashtirish"
            >
              <ZoomIn className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={() => setIsFullscreen((f) => !f)}
            className="flex items-center gap-1 rounded-xl border border-border bg-background px-2.5 py-1.5 text-[11px] font-bold text-foreground transition-colors hover:bg-muted"
            title={isFullscreen ? "To‘liq ekrandan chiqish" : "PDFni to‘liq ekranda o‘qish"}
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="h-3.5 w-3.5 text-primary" />
                <span className="hidden md:inline">Kichraytirish</span>
              </>
            ) : (
              <>
                <Maximize2 className="h-3.5 w-3.5 text-primary" />
                <span className="hidden md:inline">To‘liq ekran</span>
              </>
            )}
          </button>

          <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1 rounded-xl border border-border bg-background px-2.5 py-1.5 text-[11px] font-bold text-foreground transition-colors hover:bg-muted"
            title="Yangi tabda ochish"
          >
            <ExternalLink className="h-3.5 w-3.5 text-primary" />
            <span className="hidden lg:inline">Yangi oyna</span>
          </a>

          <a
            href={url}
            download
            className="flex items-center gap-1 rounded-xl bg-primary px-2.5 py-1.5 text-[11px] font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            title="PDF faylni yuklab olish"
          >
            <Download className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Yuklab olish</span>
          </a>
        </div>
      </div>

      {/* Main Scrollable PDF Canvas Container */}
      <div
        ref={scrollContainerRef}
        className={`overflow-y-auto bg-muted/30 p-3 md:p-5 ${
          isFullscreen ? "flex-1" : compactHeight ? "max-h-[680px]" : "max-h-[78vh]"
        }`}
      >
        {loading && (
          <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <div>
              <p className="text-sm font-bold text-foreground">PDF ma’ruza ochilmoqda...</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Sahifalar yuqori sifatda tayyorlanmoqda
              </p>
            </div>
          </div>
        )}

        {!loading && errorMsg && (
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-card p-10 text-center">
            <FileText className="h-10 w-10 text-muted-foreground/60" />
            <p className="text-sm font-bold text-foreground">{errorMsg}</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setReloadKey((k) => k + 1)}
                className="flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Qayta urinish</span>
              </button>
              <a
                href={url}
                download
                className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground hover:bg-muted"
              >
                <Download className="h-3.5 w-3.5" />
                <span>PDF yuklab olish</span>
              </a>
            </div>
          </div>
        )}

        {!loading && !errorMsg && pdfDoc && (
          <div className="mx-auto flex max-w-4xl flex-col gap-4">
            {viewMode === "scroll" ? (
              pagesArray.map((pageNum) => (
                <PdfPageCanvas
                  key={`${url}-${pageNum}`}
                  pdfDoc={pdfDoc}
                  pageNumber={pageNum}
                  zoom={zoom}
                  containerWidth={containerWidth}
                  eager={pageNum <= 2}
                />
              ))
            ) : (
              <div className="space-y-4">
                <PdfPageCanvas
                  key={`${url}-slide-${currentPage}`}
                  pdfDoc={pdfDoc}
                  pageNumber={currentPage}
                  zoom={zoom}
                  containerWidth={containerWidth}
                  eager
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Slide Navigation Bar (in Slide mode or when pages > 0) */}
      {!loading && !errorMsg && numPages > 0 && viewMode === "slide" && (
        <div className="flex items-center justify-between border-t border-border bg-card px-4 py-2.5">
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="flex items-center gap-1 rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-bold text-foreground hover:bg-muted disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Oldingi slayd</span>
          </button>

          <span className="font-mono text-xs font-bold text-muted-foreground tabular-nums">
            {currentPage} / {numPages}
          </span>

          <button
            type="button"
            disabled={currentPage >= numPages}
            onClick={() => setCurrentPage((p) => Math.min(numPages, p + 1))}
            className="flex items-center gap-1 rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-bold text-foreground hover:bg-muted disabled:opacity-40"
          >
            <span>Keyingi slayd</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </section>
  );
}
