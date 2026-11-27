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
  Waves,
  Atom,
  Binary,
} from "lucide-react";
import botanikaImg from "@/assets/botanika.jpg";
import genetikaImg from "@/assets/genetika.jpg";
import mikroImg from "@/assets/mikro.jpg";
import biokimyoImg from "@/assets/biokimyo.jpg";
import gidrobiologiyaImg from "@/assets/images/gidrobiologiya_card_1795159354389.jpg";
import biotexnologiyaImg from "@/assets/images/biotexnologiya_card_1795159350578.jpg";
import bioinformatikaImg from "@/assets/images/bioinformatika_card_1795550419194.jpg";
import { BOTANIKA_TOPICS } from "@/data/botanikaTopics";
import { BIOKIMYO_TOPICS } from "@/data/biokimyoTopics";
import { GENETIKA_TOPICS } from "@/data/genetikaTopics";
import { MIKROBIOLOGIYA_TOPICS } from "@/data/mikrobiologiyaTopics";
import { GIDROBIOLOGIYA_TOPICS } from "@/data/gidrobiologiyaTopics";
import { BIOTEXNOLOGIYA_TOPICS } from "@/data/biotexnologiyaTopics";
import {
  BIOINFORMATIKA_LAB_TOPICS,
  BIOINFORMATIKA_PRACTICAL_TOPICS,
  BIOINFORMATIKA_TOPICS,
} from "@/data/bioinformatikaTopics";

export type SubjectKey =
  | "botanika"
  | "genetika"
  | "mikrobiologiya"
  | "biokimyo"
  | "gidrobiologiya"
  | "biotexnologiya"
  | "bioinformatika";

interface DarsliklarSectionProps {
  onBack: () => void;
  onOpenBotanika: () => void;
  onOpenGenetika: () => void;
  onOpenMikrobiologiya: () => void;
  onOpenBiokimyo: () => void;
  onOpenGidrobiologiya: () => void;
  onOpenBiotexnologiya: () => void;
  onOpenBioinformatika: () => void;
  onAskAi?: (prompt: string) => void;
  initialSubject?: SubjectKey;
}

const SUBJECTS = [
  {
    id: "botanika" as SubjectKey,
    title: "Botanika",
    subtitle: "O‘simliklar anatomiyasi, morfologiyasi va sistematikasi",
    description: `I va II semestr bo‘yicha o‘quv dasturi asosidagi barcha ${BOTANIKA_TOPICS.length} ta mavzu (1-mavzudan ${BOTANIKA_TOPICS.length}-mavzugacha) ketma-ket to‘rtburchak kartochkalar, PDF taqdimotlar va nazariy konspektlar ko‘rinishida.`,
    topicsCount: BOTANIKA_TOPICS.length,
    status: "To‘liq ishga tushirilgan",
    img: botanikaImg,
    icon: Leaf,
    ready: true,
    topicsPreview: [
      "1–7-mavzular: Kirish, hujayra, to‘qimalar va ildiz anatomiyasi (PDF + ma’ruza)",
      "8–18-mavzular: Novda, poya, barg, gul, urug‘, meva va ekologiya (PDF + ma’ruza)",
      `19–${BOTANIKA_TOPICS.length}-mavzular: Sistematika, suvo‘tlar, zamburug‘lar, sporali va urug‘li o‘simliklar (PDF + ma’ruza)`,
    ],
  },
  {
    id: "genetika" as SubjectKey,
    title: "Genetika",
    subtitle: "Irsiyat va o‘zgaruvchanlik qonuniyatlari",
    description: `Genetika va genomika asoslari, DNK replikatsiyasi, Mendel qonunlari, xromosoma nazariyasi, mutatsiyalar va odam genetikasi bo‘yicha barcha ${GENETIKA_TOPICS.length} ta mavzu (1-mavzudan ${GENETIKA_TOPICS.length}-mavzugacha) PDF ma’ruza matnlari, taqdimotlar va nazariy konspektlar ko‘rinishida.`,
    topicsCount: GENETIKA_TOPICS.length,
    status: "To‘liq ishga tushirilgan",
    img: genetikaImg,
    icon: Dna,
    ready: true,
    topicsPreview: [
      "1–7-mavzular: Genetika va genomika asoslari, DNK replikatsiyasi, Mendel qonunlari va genlar o‘zaro ta’siri (PDF + ma’ruza)",
      "8–12-mavzular: Xromosoma tuzilishi, Morgan nazariyasi, krossingover, kariotip va mutatsiyalar (PDF + ma’ruza)",
      `13–${GENETIKA_TOPICS.length}-mavzular: Populyatsion genetika, Xardi-Vaynberg qonuni, odam genetikasi va irsiy kasalliklar (PDF + ma’ruza)`,
    ],
  },
  {
    id: "mikrobiologiya" as SubjectKey,
    title: "Mikrobiologiya",
    subtitle: "Mikroorganizmlar biologiyasi, virusologiya va xususiy bakteriologiya",
    description: `Mikrobiologiya va virusologiya, bakteriyalar morfologiyasi, ekologiya, oziqa muhitlar, bijg‘ish, bakteriofaglar, antibiotiklar va patogen qo‘zg‘atuvchilar bo‘yicha barcha ${MIKROBIOLOGIYA_TOPICS.length} ta mavzu (1-mavzudan ${MIKROBIOLOGIYA_TOPICS.length}-mavzugacha) PDF ma’ruza matnlari va nazariy konspektlar ko‘rinishida.`,
    topicsCount: MIKROBIOLOGIYA_TOPICS.length,
    status: "To‘liq ishga tushirilgan",
    img: mikroImg,
    icon: Microscope,
    ready: true,
    topicsPreview: [
      "1–7-mavzular: Kirish, bakteriyalar tuzilishi, ekologiya, oziqa muhitlar, bijg‘ish, faglar va antibiotiklar (PDF + ma’ruza)",
      "8–11-mavzular: Patogen kokklar (stafilokokk, streptokokk, neysseriya) va enterobakteriyalar (PDF + ma’ruza)",
      `12–${MIKROBIOLOGIYA_TOPICS.length}-mavzular: Vabo, toun, sil, qoqshol, botulizm, spiroxetalar, rikketsiyalar, xlamidiya va mikoplazmalar (PDF + ma’ruza)`,
    ],
  },
  {
    id: "biokimyo" as SubjectKey,
    title: "Biokimyo",
    subtitle: "Tirik organizmlar kimyoviy tarkibi va metabolizmi",
    description: `Statik biokimyo, fermentologiya, vitaminlar, gormonlar va moddalar almashinuvi bo‘yicha barcha ${BIOKIMYO_TOPICS.length} ta mavzu (1-mavzudan ${BIOKIMYO_TOPICS.length}-mavzugacha) PDF ma’ruza matnlari va nazariy konspektlar ko‘rinishida.`,
    topicsCount: BIOKIMYO_TOPICS.length,
    status: "To‘liq ishga tushirilgan",
    img: biokimyoImg,
    icon: FlaskConical,
    ready: true,
    topicsPreview: [
      "1–7-mavzular: Biokimyo asoslari, oqsillar, nuklein kislotalar, uglevodlar va lipidlar (PDF + ma’ruza)",
      "8–11-mavzular: Fermentlar kinetikasi, vitaminlar va gormonlar (PDF + ma’ruza)",
      `12–${BIOKIMYO_TOPICS.length}-mavzular: Moddalar almashinuvi, glikoliz, Krebs sikli va oqsil-nuklein metabolizmi (PDF + ma’ruza)`,
    ],
  },
  {
    id: "gidrobiologiya" as SubjectKey,
    title: "Gidrobiologiya",
    subtitle: "Suv ekotizimlari, gidrobiontlar biologiyasi va ekologiya",
    description: `Suv muhiti xususiyatlari, plankton, nekton, bentos, makrofitlar, fitoplankton, baliqlar ekologiyasi, oziq zanjirlari, biologik mahsuldorlik, evtrofikatsiya va monitoring bo‘yicha barcha ${GIDROBIOLOGIYA_TOPICS.length} ta mavzu (1-mavzudan ${GIDROBIOLOGIYA_TOPICS.length}-mavzugacha) PDF ma’ruza matnlari va nazariy konspektlar ko‘rinishida.`,
    topicsCount: GIDROBIOLOGIYA_TOPICS.length,
    status: "To‘liq ishga tushirilgan",
    img: gidrobiologiyaImg,
    icon: Waves,
    ready: true,
    topicsPreview: [
      "1–4-mavzular: Kirish, suv muhiti xususiyatlari, gidrobiontlar va makrofitlar (PDF + ma’ruza)",
      "5–8-mavzular: Fitoplankton, baliqlar ekologiyasi, oziq zanjirlari va mahsuldorlik (PDF + ma’ruza)",
      `9–${GIDROBIOLOGIYA_TOPICS.length}-mavzular: Evtrofikatsiya, biologik monitoring, bioresurslar va zamonaviy muammolar (PDF + ma’ruza)`,
    ],
  },
  {
    id: "biotexnologiya" as SubjectKey,
    title: "Biotexnologiya",
    subtitle: "Gen va hujayra muhandisligi, bioprotsesslar texnologiyasi",
    description: `Biotexnologiya asoslari, gen muhandisligi fermentlari, rekombinant DNK, transgen ekinlar, mikrobiologik sintez, antibiotiklar, organik kislotalar, enzimatik muhandislik, immobilizatsiya, biosensorlar, bioreaktorlar, agro-, tibbiyot va ekologik biotexnologiya bo‘yicha barcha ${BIOTEXNOLOGIYA_TOPICS.length} ta mavzu (1-mavzudan ${BIOTEXNOLOGIYA_TOPICS.length}-mavzugacha) PDF ma’ruza matnlari va nazariy konspektlar ko‘rinishida.`,
    topicsCount: BIOTEXNOLOGIYA_TOPICS.length,
    status: "To‘liq ishga tushirilgan",
    img: biotexnologiyaImg,
    icon: Atom,
    ready: true,
    topicsPreview: [
      "1–10-mavzular: Kirish, hujayralar, markaziy dogma, gen muhandisligi, vektorlar, transgenika va CRISPR (PDF + ma’ruza)",
      "11–17-mavzular: Mikrobiologik sintez, antibiotiklar, organik kislotalar, fermentlar, immobilizatsiya va bioreaktorlar (PDF + ma’ruza)",
      `18–${BIOTEXNOLOGIYA_TOPICS.length}-mavzular: O‘simlik in vitro, agrobiotexnologiya, tibbiyot, ekologik biotexnologiya va soha kelajagi (PDF + ma’ruza)`,
    ],
  },
  {
    id: "bioinformatika" as SubjectKey,
    title: "Bioinformatika",
    subtitle: "Biologik ma’lumotlar tahlili, genomika va hisoblash biologiyasi",
    description: `Bioinformatika fanining barcha ${BIOINFORMATIKA_PRACTICAL_TOPICS.length} ta amaliy mashg‘uloti (1–${BIOINFORMATIKA_PRACTICAL_TOPICS.length}-amaliy) hamda ${BIOINFORMATIKA_LAB_TOPICS.length} ta laboratoriya ishi (1–${BIOINFORMATIKA_LAB_TOPICS.length}-laboratoriya): ma’lumotlar bazalari, BLAST, ORFfinder, filogenetika, RasMol/PyMOL, gomologik modellashtirish, AutoDock Vina dokingi, CRISPR va TALEN PDF qo‘llanmalari.`,
    topicsCount: BIOINFORMATIKA_TOPICS.length,
    status: "Laboratoriya va amaliy qism",
    img: bioinformatikaImg,
    icon: Binary,
    ready: true,
    topicsPreview: [
      `1–${BIOINFORMATIKA_PRACTICAL_TOPICS.length}-amaliy mashg‘ulotlar: Axborot entropiyasi, tekislash, BLAST, filogenetika, CRISPR, PDB va TALEN (PDF)`,
      "1–5-laboratoriya ishlari: PubMed/Entrez, BLAST, ORF qidirish, ORFfinder va Clustal/MEGA (PDF)",
      `6–${BIOINFORMATIKA_LAB_TOPICS.length}-laboratoriya ishlari: 3D vizuallashtirish, PDB/UniProt, SWISS-MODEL/AlphaFold, RasMol va AutoDock doking (PDF)`,
    ],
  },
];

export function DarsliklarSection({
  onBack,
  onOpenBotanika,
  onOpenGenetika,
  onOpenMikrobiologiya,
  onOpenBiokimyo,
  onOpenGidrobiologiya,
  onOpenBiotexnologiya,
  onOpenBioinformatika,
  onAskAi,
  initialSubject = "botanika",
}: DarsliklarSectionProps) {
  const [focusedSubject, setFocusedSubject] = useState<SubjectKey>(initialSubject);

  return (
    <div className="space-y-5 px-3 pb-16 sm:space-y-6 sm:px-4 md:px-8">
      {/* Breadcrumb Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-3.5 pt-2 sm:gap-4 sm:pb-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="flex min-h-[40px] items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-semibold text-foreground transition-all hover:bg-muted sm:px-4 sm:text-sm"
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

        <span className="rounded-lg bg-muted/60 px-2.5 py-1 text-xs font-semibold text-muted-foreground sm:bg-transparent sm:p-0">
          {SUBJECTS.length} ta asosiy universitet fani
        </span>
      </div>

      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-2xl bg-sidebar-grad p-5 text-navy-foreground shadow-card sm:rounded-3xl sm:p-6 md:p-8">
        <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-cyan/25 blob" />
        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan">
              <BookOpen className="h-4 w-4 shrink-0" />
              <span>Universitet fanlari elektron kutubxonasi</span>
            </div>
            <h1 className="text-xl font-extrabold leading-snug sm:text-2xl md:text-4xl">
              Darsliklar:{" "}
              <span className="text-shine">
                Botanika, Genetika, Mikrobiologiya, Biokimyo, Gidrobiologiya, Biotexnologiya va
                Bioinformatika
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Subject Cards with Logos */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
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
                } else if (subj.id === "genetika") {
                  onOpenGenetika();
                } else if (subj.id === "mikrobiologiya") {
                  onOpenMikrobiologiya();
                } else if (subj.id === "biokimyo") {
                  onOpenBiokimyo();
                } else if (subj.id === "gidrobiologiya") {
                  onOpenGidrobiologiya();
                } else if (subj.id === "biotexnologiya") {
                  onOpenBiotexnologiya();
                } else if (subj.id === "bioinformatika") {
                  onOpenBioinformatika();
                }
              }}
              className={`group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border bg-card shadow-card transition-all duration-300 active:scale-[0.99] sm:rounded-3xl sm:hover:-translate-y-1 sm:hover:shadow-glow ${
                isFocused
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div>
                {/* Top visual header with logo */}
                <div className="relative h-40 overflow-hidden bg-slate-900 sm:h-44">
                  <img
                    src={subj.img}
                    alt={subj.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                  <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between gap-2.5 text-white sm:bottom-4 sm:left-5 sm:right-5 sm:gap-3">
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <img
                        src={subj.img}
                        alt=""
                        referrerPolicy="no-referrer"
                        className="h-11 w-11 shrink-0 rounded-xl border-2 border-white/40 object-cover shadow-md sm:h-12 sm:w-12"
                      />
                      <div className="min-w-0 flex-1">
                        <h2 className="truncate text-lg font-extrabold tracking-tight sm:text-xl">
                          {subj.title}
                        </h2>
                        <p className="line-clamp-2 text-[11px] leading-snug text-white/85 sm:text-xs">
                          {subj.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/15 backdrop-blur-md sm:h-10 sm:w-10">
                      <Icon className="h-4 w-4 text-cyan sm:h-5 sm:w-5" />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="space-y-3.5 p-4 sm:space-y-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-2.5 py-1 font-semibold text-foreground sm:bg-transparent sm:p-0">
                      <Layers className="h-3.5 w-3.5 text-primary" />
                      {subj.topicsCount > 0 ? `${subj.topicsCount} ta mavzu` : "Mavzular tez kunda"}
                    </span>
                    <span
                      className={
                        subj.ready
                          ? "rounded-lg bg-emerald-500/10 px-2.5 py-1 font-bold text-emerald-600 dark:text-emerald-400 sm:bg-transparent sm:p-0"
                          : "rounded-lg bg-muted px-2.5 py-1 font-medium sm:bg-transparent sm:p-0"
                      }
                    >
                      {subj.status}
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {subj.description}
                  </p>

                  <ul className="space-y-2 border-t border-border/60 pt-3 text-xs text-foreground/90 sm:space-y-1.5">
                    {subj.topicsPreview.map((item) => (
                      <li key={item} className="flex items-start gap-2 sm:items-center">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary sm:mt-0" />
                        <span className="line-clamp-2 leading-relaxed sm:truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Action */}
              <div className="flex items-center justify-between gap-3 border-t border-border/60 bg-muted/20 px-4 py-3 sm:px-5 sm:py-3.5">
                {subj.id === "botanika" ||
                subj.id === "genetika" ||
                subj.id === "mikrobiologiya" ||
                subj.id === "biokimyo" ||
                subj.id === "gidrobiologiya" ||
                subj.id === "biotexnologiya" ||
                subj.id === "bioinformatika" ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (subj.id === "botanika") {
                        onOpenBotanika();
                      } else if (subj.id === "genetika") {
                        onOpenGenetika();
                      } else if (subj.id === "mikrobiologiya") {
                        onOpenMikrobiologiya();
                      } else if (subj.id === "biokimyo") {
                        onOpenBiokimyo();
                      } else if (subj.id === "gidrobiologiya") {
                        onOpenGidrobiologiya();
                      } else if (subj.id === "biotexnologiya") {
                        onOpenBiotexnologiya();
                      } else {
                        onOpenBioinformatika();
                      }
                    }}
                    className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-extrabold text-primary-foreground shadow-sm transition-all active:scale-[0.98] hover:bg-primary/90"
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
                    className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-bold text-foreground transition-all active:scale-[0.98] hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                  >
                    <Sparkles className="h-3.5 w-3.5 shrink-0 text-primary" />
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
