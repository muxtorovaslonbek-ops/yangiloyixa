import { useEffect, useRef } from "react";
import { ArrowLeft, Send } from "lucide-react";

interface BizHaqimizdaSectionProps {
  onBack: () => void;
}

export function BizHaqimizdaSection({ onBack }: BizHaqimizdaSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Autoplay fallback handled silently if browser restricts playback
      });
    }
  }, []);

  return (
    <div className="space-y-10 px-4 pb-16 md:px-8">
      {/* Full-Height Hero Section with Video Background */}
      <section className="relative min-h-[60vh] w-full overflow-hidden rounded-3xl bg-slate-950 shadow-card sm:min-h-[calc(100vh-112px)]">
        {/* Background Autoplay Loop Muted Video */}
        <video
          ref={videoRef}
          src="/assets/aistudio/hero__2__087f4f9b.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Translucent Overlay for Text Legibility */}
        <div className="pointer-events-none absolute inset-0 bg-black/50" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/75" />

        {/* Translucent Glass Top Bar Floating Over Hero Video */}
        <header className="relative z-20 flex flex-wrap items-center justify-between gap-3 border-b border-white/15 bg-black/25 px-4 py-3.5 backdrop-blur-md sm:gap-4 sm:px-5 sm:py-4 md:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/assets/aistudio/nsu-seal-2048_4a843caa.png"
              alt="Navoiy Davlat Universiteti logotipi"
              referrerPolicy="no-referrer"
              className="h-10 w-10 shrink-0 rounded-full bg-white/95 object-cover p-0.5 shadow-md ring-2 ring-white/40 sm:h-12 sm:w-12 md:h-14 md:w-14"
            />
            <span className="text-sm font-extrabold tracking-tight text-white drop-shadow-sm sm:text-base md:text-xl">
              Navoiy Davlat Universiteti
            </span>
          </div>

          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:px-4 md:text-sm"
          >
            <ArrowLeft className="h-4 w-4 text-cyan" />
            <span>Bosh sahifaga qaytish</span>
          </button>
        </header>

        {/* Centered Hero Content */}
        <div className="relative z-10 flex min-h-[46vh] flex-col items-center justify-center px-5 py-12 text-center text-white sm:min-h-[calc(100vh-204px)] sm:px-6 sm:py-16 md:px-12">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold tracking-wide text-cyan/95 md:text-sm">
              Navoiy Davlat Universiteti · Biz haqimizda
            </p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-balance drop-shadow-md md:text-5xl">
              Navoiy Davlat Universiteti
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/90 drop-shadow-sm md:text-lg">
              Ilm-fan, zamonaviy ta’lim va talabalar uchun raqamli o‘quv imkoniyatlarini
              birlashtiruvchi oliy ta’lim maskani.
            </p>
          </div>
        </div>
      </section>

      {/* Scientific Advisor, Project Owner & Developer Section */}
      <section className="mx-auto max-w-6xl space-y-6">
        <div className="space-y-1.5">
          <p className="text-xs font-semibold text-primary">Loyiha mualliflari</p>
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            Ilmiy rahbar, loyiha egasi va dasturchi
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* 1-rasm: Ilmiy rahbar */}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform duration-300 hover:-translate-y-1">
            <div className="relative h-80 w-full overflow-hidden bg-white sm:h-96">
              <img
                src="/assets/aistudio/0000_58d9b195.jpg"
                alt="Salimova Sarvinoz Farhodovna"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between space-y-4 border-t border-border/70 p-6 md:p-7">
              <div className="space-y-2.5">
                <p className="text-xs font-bold text-primary">Ilmiy rahbar</p>
                <h3 className="text-xl font-extrabold leading-snug text-foreground">
                  Salimova Sarvinoz Farhodovna
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Buxoro davlat universiteti professori, p.f.d. (DSc)
                </p>
              </div>
            </div>
          </article>

          {/* 2-rasm: Loyiha egasi */}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform duration-300 hover:-translate-y-1">
            <div className="relative h-80 w-full overflow-hidden bg-muted sm:h-96">
              <img
                src="/assets/aistudio/photo_2026-11-14_00-02-11_3997f170.jpg"
                alt="Halimova Nazokat To‘xtasinovna"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between space-y-4 border-t border-border/70 p-6 md:p-7">
              <div className="space-y-2.5">
                <p className="text-xs font-bold text-primary">Loyiha egasi</p>
                <h3 className="text-xl font-extrabold leading-snug text-foreground">
                  Halimova Nazokat To‘xtasinovna
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Oʻzbekiston Respublikasi Taʼlim va ilm-fan vazirligi Navoiy davlat universiteti
                  tabiiy fanlar va tibbiyot fakulteti Biologiya kafedrasi oʻqituvchisi
                </p>
              </div>
            </div>
          </article>

          {/* 2-rasm: Dasturchi */}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform duration-300 hover:-translate-y-1">
            <div className="relative h-80 w-full overflow-hidden bg-white pt-4 sm:h-96">
              <img
                src="/assets/aistudio/5c94d94c-0fe3-4427-a97f-55c871978497_26b076c5.png"
                alt="Muxtorov Aslonbek Maksudovich"
                referrerPolicy="no-referrer"
                className="h-full w-full object-contain object-bottom"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between space-y-5 border-t border-border/70 p-6 md:p-7">
              <div className="space-y-2.5">
                <p className="text-xs font-bold text-primary">Dasturchi</p>
                <h3 className="text-xl font-extrabold leading-snug text-foreground">
                  Muxtorov Aslonbek Maksudovich
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Oʻzbekiston Respublikasi Taʼlim va ilm-fan vazirligi Navoiy davlat universiteti
                  tabiiy fanlar va tibbiyot fakulteti Biologiya yo‘nalishi talabasi
                </p>
              </div>

              <div className="pt-1">
                <a
                  href="https://t.me/ASLONBEK_MUXTOROV"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                  <span>Telegram orqali bog‘lanish</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
