import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Layers,
  Play,
  Sparkles,
  Leaf,
  Dna,
  Microscope,
  FlaskConical,
} from "lucide-react";
import botanikaImg from "@/assets/botanika.jpg";
import genetikaImg from "@/assets/genetika.jpg";
import mikroImg from "@/assets/mikro.jpg";
import biokimyoImg from "@/assets/biokimyo.jpg";
import { BOTANIKA_TOPICS } from "@/data/botanikaTopics";

export type SubjectKey = "botanika" | "genetika" | "mikrobiologiya" | "biokimyo";

interface DarsliklarSectionProps {
  onBack: () => void;
  onOpenBotanika: () => void;
  onAskAi?: (prompt: string) => void;
  initialSubject?: SubjectKey;
}

const SUBJECTS = [
  {
    id: "botanika" as SubjectKey,
    title: "Botanika",
    subtitle: "O‘simliklar anatomiyasi, morfologiyasi va sistematikasi",
    description:
      "I va II semestr bo‘yicha o‘quv dasturi asosidagi barcha 17 ta mavzu (1-mavzudan 17-mavzugacha) ketma-ket to‘rtburchak kartochkalar va nazariy konspektlar ko‘rinishida.",
    topicsCount: BOTANIKA_TOPICS.length,
    status: "To‘liq ishga tushirilgan",
    img: botanikaImg,
    icon: Leaf,
    ready: true,
    topicsPreview: [
      "1–3-mavzular: Novda, kurtak, poya va barg anatomiyasi",
      "4–9-mavzular: Ko‘payish, gul, to‘pgul, urug‘ va meva",
      "10–17-mavzular: Ekologiya, sistematika, suvo‘tlar, zamburug‘lar va yuksak o‘simliklar",
    ],
  },
  {
    id: "genetika" as SubjectKey,
    title: "Genetika",
    subtitle: "Irsiyat va o‘zgaruvchanlik qonuniyatlari",
    description:
      "Mendel qonunlari, xromosoma nazariyasi, irsiy kasalliklar, gen muhandisligi va seleksiya asoslari bo‘yicha 18 ta asosiy universitet mavzusi.",
    topicsCount: 18,
    status: "Tayanch darslik & AI yordam",
    img: genetikaImg,
    icon: Dna,
    ready: false,
    topicsPreview: [
      "Mendelning irsiyat qonunlari va chatishtirish tahlili",
      "DNK replikatsiyasi, transkripsiya va translatsiya",
      "Mutatsiyalar, populyatsion genetika va biotexnologiya",
    ],
  },
  {
    id: "mikrobiologiya" as SubjectKey,
    title: "Mikrobiologiya",
    subtitle: "Mikroorganizmlar biologiyasi va ekologiyasi",
    description:
      "Bakteriyalar, viruslar, zamburug‘lar tuzilishi, oziqlanishi, moddalar almashinuvi, antibiotiklar va immunologiya asoslari.",
    topicsCount: 20,
    status: "Tayanch darslik & AI yordam",
    img: mikroImg,
    icon: Microscope,
    ready: false,
    topicsPreview: [
      "Prokariot va eukariot mikroorganizmlar morfologiyasi",
      "Mikroblar genetikasi, metabolizmi va kultivatsiyasi",
      "Tuproq, suv va tibbiy mikrobiologiya asoslari",
    ],
  },
  {
    id: "biokimyo" as SubjectKey,
    title: "Biokimyo",
    subtitle: "Tirik organizmlar kimyoviy tarkibi va metabolizmi",
    description:
      "Oqsillar, fermentlar kinetikasi, uglevodlar, lipidlar, nuklein kislotalar va hujayraviy bioenergetika (ATF sintezi).",
    topicsCount: 26,
    status: "Tayanch darslik & AI yordam",
    img: biokimyoImg,
    icon: FlaskConical,
    ready: false,
    topicsPreview: [
      "Aminokislotalar va oqsillarning strukturaviy darajalari",
      "Fermentlar faolligi va allosterik boshqaruv",
      "Glikoliz, Krebs sikli va oksidlovchi fosforlanish",
    ],
  },
];

export function DarsliklarSection({
  onBack,
  onOpenBotanika,
  onAskAi,
  initialSubject = "botanika",
}: DarsliklarSectionProps) {
  const [focusedSubject, setFocusedSubject] = useState<SubjectKey>(initialSubject);

  return (
    <div className="space-y-6 px-4 pb-16 md:px-8">
      {/* Breadcrumb Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-4 pt-2">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-all hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4 text-primary" />
            <span>Bosh sahifaga qaytish</span>
          </button>
          <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
            <span>EduUni</span>
            <span>/</span>
            <span className="font-semibold text-foreground">Darsliklar</span>
          </div>
        </div>

        <span className="text-xs font-semibold text-muted-foreground">
          4 ta asosiy universitet fani
        </span>
      </div>

      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-sidebar-grad p-6 text-navy-foreground shadow-card md:p-8">
        <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-cyan/25 blob" />
        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan">
              <BookOpen className="h-4 w-4" />
              <span>Universitet fanlari elektron kutubxonasi</span>
            </div>
            <h1 className="text-2xl font-extrabold md:text-4xl">
              Darsliklar:{" "}
              <span className="text-shine">Botanika, Genetika, Mikrobiologiya va Biokimyo</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 4 Subject Cards with Logos */}
      <div className="grid gap-6 md:grid-cols-2">
        {SUBJECTS.map((subj) => {
          const Icon = subj.icon;
          const isFocused = focusedSubject === subj.id;
          return (
            <div
              key={subj.id}
              onClick={() => {
                setFocusedSubject(subj.id);
                if (subj.id === "botanika") {
                  onOpenBotanika();
                }
              }}
              className={`group flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow ${
                isFocused
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div>
                {/* Top visual header with logo */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={subj.img}
                    alt={subj.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3 text-white">
                    <div className="flex items-center gap-3">
                      <img
                        src={subj.img}
                        alt=""
                        className="h-12 w-12 rounded-xl border-2 border-white/40 object-cover shadow-md"
                      />
                      <div>
                        <h2 className="text-xl font-extrabold tracking-tight">{subj.title}</h2>
                        <p className="text-xs text-white/80">{subj.subtitle}</p>
                      </div>
                    </div>

                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15 backdrop-blur-md">
                      <Icon className="h-5 w-5 text-cyan" />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5 font-semibold text-foreground">
                      <Layers className="h-3.5 w-3.5 text-primary" />
                      {subj.topicsCount} ta mavzu
                    </span>
                    <span
                      className={
                        subj.ready
                          ? "font-bold text-emerald-600 dark:text-emerald-400"
                          : "font-medium"
                      }
                    >
                      {subj.status}
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {subj.description}
                  </p>

                  <ul className="space-y-1.5 border-t border-border/60 pt-3 text-xs text-foreground/90">
                    {subj.topicsPreview.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Action */}
              <div className="flex items-center justify-between gap-3 border-t border-border/60 bg-muted/20 px-5 py-3.5">
                {subj.id === "botanika" ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBotanika();
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-extrabold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Darsni boshlash</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onAskAi) {
                        onAskAi(
                          `${subj.title} fani bo‘yicha asosiy universitet mavzulari ro‘yxati va qisqacha ma’ruza konspektini taqdim et.`,
                        );
                      }
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-bold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    <span>{subj.title} bo‘yicha AI Ustozdan konspekt olish</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
