import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";

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
    <div className="px-4 pb-10 md:px-8">
      {/* Full-Height Hero Section with Video Background */}
      <section className="relative min-h-[calc(100vh-112px)] w-full overflow-hidden rounded-3xl bg-slate-950 shadow-card">
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
        <header className="relative z-20 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 bg-black/25 px-5 py-4 backdrop-blur-md md:px-8">
          <div className="flex items-center gap-3.5">
            <img
              src="/assets/aistudio/nsu-seal-2048_4a843caa.png"
              alt="Navoiy Davlat Universiteti logotipi"
              referrerPolicy="no-referrer"
              className="h-12 w-12 shrink-0 rounded-full bg-white/95 object-cover p-0.5 shadow-md ring-2 ring-white/40 md:h-14 md:w-14"
            />
            <span className="text-base font-extrabold tracking-tight text-white drop-shadow-sm md:text-xl">
              Navoiy Davlat Universiteti
            </span>
          </div>

          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20 md:text-sm"
          >
            <ArrowLeft className="h-4 w-4 text-cyan" />
            <span>Bosh sahifaga qaytish</span>
          </button>
        </header>

        {/* Centered Hero Content */}
        <div className="relative z-10 flex min-h-[calc(100vh-204px)] flex-col items-center justify-center px-6 py-16 text-center text-white md:px-12">
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
    </div>
  );
}
