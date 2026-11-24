import { useState, useEffect } from "react";
import { Download, Share, PlusSquare, Smartphone, X, WifiOff, MoreVertical } from "lucide-react";
import { usePWAInstall, useOnlineStatus } from "@/hooks/usePWAInstall";

interface InstallGuideModalProps {
  open: boolean;
  isIOS: boolean;
  onClose: () => void;
}

function InstallGuideModal({ open, isIOS, onClose }: InstallGuideModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-navy/60 p-4 backdrop-blur-xs sm:items-center"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pwa-guide-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card text-foreground shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-border bg-sidebar-grad px-5 py-4 text-navy-foreground">
          <div className="flex items-center gap-3">
            <img
              src="/pwa-192x192.png"
              alt="EduUni"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl shadow-md"
            />
            <div>
              <h3 id="pwa-guide-title" className="text-base font-extrabold leading-tight">
                EduUni ilovasini o‘rnatish
              </h3>
              <p className="text-xs text-navy-foreground/80">
                {isIOS ? "iPhone / iPad (Safari)" : "Android / Brauzer yo‘riqnomasi"}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Yopish"
            className="grid h-9 w-9 place-items-center rounded-xl text-navy-foreground/80 transition-colors hover:bg-white/15 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 p-5">
          {isIOS ? (
            <ol className="space-y-3 text-sm text-foreground">
              <li className="flex items-start gap-3 rounded-2xl bg-muted/60 p-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary text-xs font-extrabold text-primary-foreground">
                  1
                </span>
                <p className="leading-relaxed">
                  Safari pastki panelidagi{" "}
                  <span className="inline-flex items-center gap-1 rounded-md bg-background px-1.5 py-0.5 text-xs font-bold text-primary">
                    <Share className="h-3.5 w-3.5" /> Ulashish (Share)
                  </span>{" "}
                  tugmasini bosing.
                </p>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-muted/60 p-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary text-xs font-extrabold text-primary-foreground">
                  2
                </span>
                <p className="leading-relaxed">
                  Pastga surib{" "}
                  <span className="inline-flex items-center gap-1 rounded-md bg-background px-1.5 py-0.5 text-xs font-bold text-primary">
                    <PlusSquare className="h-3.5 w-3.5" /> Asosiy ekranga qo‘shish
                  </span>{" "}
                  (Add to Home Screen) bandini tanlang.
                </p>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-muted/60 p-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary text-xs font-extrabold text-primary-foreground">
                  3
                </span>
                <p className="leading-relaxed">
                  Yuqori o‘ng burchakdagi <strong>Qo‘shish (Add)</strong> tugmasini bosing — EduUni
                  asosiy ekranga alohida ilova bo‘lib tushadi.
                </p>
              </li>
            </ol>
          ) : (
            <ol className="space-y-3 text-sm text-foreground">
              <li className="flex items-start gap-3 rounded-2xl bg-muted/60 p-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary text-xs font-extrabold text-primary-foreground">
                  1
                </span>
                <p className="leading-relaxed">
                  Brauzer yuqori o‘ng burchagidagi{" "}
                  <span className="inline-flex items-center gap-0.5 rounded-md bg-background px-1.5 py-0.5 text-xs font-bold text-primary">
                    <MoreVertical className="h-3.5 w-3.5" /> Menyu
                  </span>{" "}
                  tugmasini oching.
                </p>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-muted/60 p-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary text-xs font-extrabold text-primary-foreground">
                  2
                </span>
                <p className="leading-relaxed">
                  <strong>«Ilovani o‘rnatish»</strong> (Install app) yoki{" "}
                  <strong>«Asosiy ekranga qo‘shish»</strong> (Add to Home screen) bandini bosing.
                </p>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-muted/60 p-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary text-xs font-extrabold text-primary-foreground">
                  3
                </span>
                <p className="leading-relaxed">
                  Tasdiqlang — EduUni logotipi bilan telefoningiz asosiy ekraniga o‘rnatiladi.
                </p>
              </li>
            </ol>
          )}

          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Tushunarli
          </button>
        </div>
      </div>
    </div>
  );
}

interface PWAInstallButtonProps {
  variant?: "sidebar" | "header";
  onInstalledOrOpened?: () => void;
}

export function PWAInstallButton({
  variant = "sidebar",
  onInstalledOrOpened,
}: PWAInstallButtonProps) {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  if (isInstalled) return null;

  const handleClick = async () => {
    if (isInstallable) {
      await install();
      onInstalledOrOpened?.();
    } else {
      setShowGuide(true);
    }
  };

  if (variant === "header") {
    return (
      <>
        <button
          type="button"
          onClick={() => void handleClick()}
          className="flex h-9 shrink-0 items-center gap-1.5 rounded-xl bg-primary px-2.5 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:scale-95 sm:h-10 sm:px-3.5"
          title="EduUni ilovasini o‘rnatish"
          aria-label="Ilovani o‘rnatish"
        >
          <Download className="h-4 w-4 shrink-0" />
          <span className="hidden min-[440px]:inline">Ilova</span>
        </button>
        <InstallGuideModal open={showGuide} isIOS={isIOS} onClose={() => setShowGuide(false)} />
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => void handleClick()}
        className="group flex w-full items-center gap-3 rounded-xl border border-cyan/30 bg-cyan/15 px-4 py-3 text-left text-sm font-bold text-white shadow-sm transition-all hover:bg-cyan/25 active:scale-[0.98]"
      >
        <Smartphone className="h-5 w-5 shrink-0 text-cyan transition-transform group-hover:scale-110" />
        <div className="min-w-0 flex-1">
          <span className="block truncate leading-tight">Ilovani o‘rnatish</span>
          <span className="block truncate text-[10px] font-medium text-navy-foreground/75">
            {isInstallable ? "Telefonga bir bosishda yuklash" : "Asosiy ekranga qo‘shish"}
          </span>
        </div>
        <Download className="h-4 w-4 shrink-0 text-cyan" />
      </button>
      <InstallGuideModal open={showGuide} isIOS={isIOS} onClose={() => setShowGuide(false)} />
    </>
  );
}

const DISMISS_STORAGE_KEY = "eduuni_pwa_banner_dismissed_v1";

export function PWAInstallBanner() {
  const { isInstallable, isInstalled, isIOS, isMobile, install } = usePWAInstall();
  const [dismissed, setDismissed] = useState(true);
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    try {
      const wasDismissed = sessionStorage.getItem(DISMISS_STORAGE_KEY) === "1";
      setDismissed(wasDismissed);
    } catch {
      setDismissed(false);
    }
  }, []);

  if (isInstalled || dismissed) return null;

  // Show floating banner automatically when browser offers native install OR on mobile devices (iOS/Android)
  if (!isInstallable && !isMobile) return null;

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_STORAGE_KEY, "1");
    } catch {
      // Ignore storage error
    }
  };

  const handleInstall = async () => {
    if (isInstallable) {
      const accepted = await install();
      if (accepted) handleDismiss();
    } else {
      setShowGuide(true);
    }
  };

  return (
    <>
      <div className="fixed bottom-[76px] left-3 right-3 z-30 mx-auto max-w-md lg:bottom-5 lg:left-auto lg:right-5">
        <div className="flex items-center gap-3 rounded-2xl border border-primary/25 bg-card/95 p-3 shadow-2xl backdrop-blur-xl">
          <img
            src="/pwa-192x192.png"
            alt="EduUni"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-xl shadow-sm"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-extrabold text-foreground sm:text-sm">
              EduUni ilovasini o‘rnating
            </p>
            <p className="line-clamp-1 text-[11px] text-muted-foreground">
              Asosiy ekrandan tezkor va qulay kirish
            </p>
          </div>
          <button
            type="button"
            onClick={() => void handleInstall()}
            className="flex h-9 shrink-0 items-center gap-1.5 rounded-xl bg-primary px-3.5 text-xs font-extrabold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:scale-95"
          >
            <Download className="h-3.5 w-3.5" />
            <span>O‘rnatish</span>
          </button>
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Yopish"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <InstallGuideModal open={showGuide} isIOS={isIOS} onClose={() => setShowGuide(false)} />
    </>
  );
}

export function OfflineIndicator() {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-[78px] left-3 z-50 flex items-center gap-2 rounded-xl bg-amber-500 px-3.5 py-2 text-xs font-bold text-white shadow-lg lg:bottom-4 lg:left-4"
    >
      <WifiOff className="h-4 w-4 shrink-0" />
      <span>Oflayn rejim — saqlangan ma’lumotlar ishlatilmoqda</span>
    </div>
  );
}
