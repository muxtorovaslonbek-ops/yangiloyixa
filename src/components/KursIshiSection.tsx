import { useState, useMemo } from "react";
import {
  FileText,
  BookOpen,
  CheckSquare,
  Sparkles,
  Download,
  Copy,
  Check,
  ChevronRight,
  ArrowLeft,
  Info,
  ListChecks,
  PenTool,
  Printer,
  FileCheck,
  Layers,
  Lightbulb,
  CheckCircle2,
  ChevronLeft,
  ArrowRight,
  HelpCircle,
  Clock,
  ShieldAlert,
} from "lucide-react";

interface KursIshiSectionProps {
  onBack: () => void;
}

export function KursIshiSection({ onBack }: KursIshiSectionProps) {
  // Navigation tabs: "guide" | "generator" | "intro_builder" | "formatting" | "checklist"
  const [activeTab, setActiveTab] = useState<
    "guide" | "generator" | "intro_builder" | "formatting" | "checklist"
  >("guide");

  // Step state for the 6-step guide
  const [currentStep, setCurrentStep] = useState(0);

  // Reja Generator State
  const [genSubject, setGenSubject] = useState("Iqtisodiyot va moliya");
  const [genTopic, setGenTopic] = useState(
    "Tijorat banklarida kredit risklarini boshqarish mexanizmini takomillashtirish",
  );
  const [genObject, setGenObject] = useState("O‘zbekiston Respublikasi tijorat banklari");
  const [copiedPlan, setCopiedPlan] = useState(false);

  // Kirish Konstruktori State
  const [introTopic, setIntroTopic] = useState(
    "Tijorat banklarida kredit risklarini boshqarish mexanizmini takomillashtirish",
  );
  const [introRelevance, setIntroRelevance] = useState(
    "Bugungi kunda jahon iqtisodiyotida ro'y berayotgan transformatsion jarayonlar va bank tizimidagi raqobat sharoitida kredit risklarini samarali boshqarish har bir moliya muassasasining barqaror rivojlanishini ta'minlovchi asosiy omillardan biri hisoblanadi. O'zbekiston Respublikasida bank tizimini isloh qilish strategiyasida ham aktivlar sifatini oshirish va kredit risklarini minimallashtirish ustuvor vazifa sifatida belgilangan.",
  );
  const [introGoal, setIntroGoal] = useState(
    "Tijorat banklarida kredit risklarini baholash va boshqarish mexanizmini tahlil qilish hamda risklarni kamaytirish bo'yicha amaliy taklif va tavsiyalar ishlab chiqishdan iborat.",
  );
  const [introTasks, setIntroTasks] = useState(
    "- Kredit risklarining nazariy asoslari va iqtisodiy mohiyatini o'rganish;\n- Kredit risklarini baholashda ilg'or xorijiy tajribalarni tahlil qilish;\n- Tijorat banklarining kredit portfeli va risklar darajasini tahlil qilish;\n- Kredit risklarini boshqarish samaradorligini oshirish bo'yicha ilmiy-amaliy takliflar ishlab chiqish.",
  );
  const [introObject, setIntroObject] = useState(
    "O'zbekiston Respublikasi tijorat banklarining kreditlash amaliyoti va risklarni boshqarish tizimi.",
  );
  const [introSubject, setIntroSubject] = useState(
    "Kredit risklarini baholash, monitoring qilish va minimallashtirish jarayonida yuzaga keladigan iqtisodiy-moliyaviy munosabatlar.",
  );
  const [introMethods, setIntroMethods] = useState(
    "Tadqiqot jarayonida tizimli tahlil, qiyosiy taqqoslash, iqtisodiy-statistik guruhlash, grafik va ekspert baholash usullaridan foydalanildi.",
  );
  const [copiedIntro, setCopiedIntro] = useState(false);

  // Checklist State
  const [checklist, setChecklist] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
  });

  const checklistItems = [
    {
      id: 1,
      title: "Mavzu ilmiy rahbar bilan kelishilgan va tasdiqlangan",
      desc: "Mavzu dolzarb va kafedra tomonidan rasmiy ro'yxatga kiritilgan bo'lishi kerak.",
    },
    {
      id: 2,
      title: "Reja standart talablarga mos (Kirish, 2 bob, 6 paragraf, Xulosa)",
      desc: "Har bir bob 3 tadan kichik paragraflarga ajratilgan va mantiqiy bog'langan.",
    },
    {
      id: 3,
      title: "Umumiy hajm 30-50 bet oralig'ida",
      desc: "Kirish (2-3 bet), I bob (10-15 bet), II bob (10-15 bet), Xulosa (2-3 bet).",
    },
    {
      id: 4,
      title: "Kirish qismida 5 ta majburiy element to'liq yoritilgan",
      desc: "Dolzarblik, maqsad, vazifalar, obyekt va predmet, tadqiqot usullari ko'rsatilgan.",
    },
    {
      id: 5,
      title: "I-bob (Nazariy qism)da olimlarning fikrlari va manbalarga iqtibos bor",
      desc: "Nazariy tushunchalar, xorijiy va mahalliy tajriba havolalar (snoska) bilan boyitilgan.",
    },
    {
      id: 6,
      title: "II-bob (Amaliy qism)da haqiqiy statistika, jadval va diagrammalar mavjud",
      desc: "Quruq matn emas, amaliy tahlil, foizlar, hisob-kitoblar va solishtirma jadvallar kiritilgan.",
    },
    {
      id: 7,
      title: "Xulosada aniq 3-5 ta amaliy taklif va xulosa bayon qilingan",
      desc: "Tadqiqot natijalariga asoslangan holda muallifning shaxsiy xulosalari keltirilgan.",
    },
    {
      id: 8,
      title: "Foydalanilgan adabiyotlar kamida 15-20 ta va alifbo tartibida",
      desc: "Qonunlar, darsliklar, ilmiy maqolalar va rasmiy internet saytlar to'g'ri rasmiylashtirilgan.",
    },
    {
      id: 9,
      title: "Texnik talablar (Times New Roman 14, 1.5 interval, hoshiyalar) bajarilgan",
      desc: "Chap: 30 mm, o'ng: 15 mm, yuqori: 20 mm, pastki: 20 mm, abzas 1.25 sm.",
    },
    {
      id: 10,
      title: "Matn antiplagiat tizimidan o'tkazilgan (o'zlashtirish me'yorda)",
      desc: "Matnning o'ziga xosligi (originalligi) universitet mezoniga mos (kamida 70-80%).",
    },
  ];

  const checklistProgress = useMemo(() => {
    const checkedCount = Object.values(checklist).filter(Boolean).length;
    return Math.round((checkedCount / checklistItems.length) * 100);
  }, [checklist, checklistItems.length]);

  // The 6 guide steps from the user's brief
  const guideSteps = [
    {
      step: 1,
      title: "1-bosqich: Mavzu tanlash",
      subtitle: "Muvaffaqiyatli kurs ishi to'g'ri tanlangan mavzudan boshlanadi",
      color: "from-blue-600 to-indigo-700",
      content: (
        <div className="space-y-4 text-sm leading-relaxed text-foreground">
          <p className="font-medium text-base">
            Mavzu tanlashda quyidagi 4 ta asosiy qoidaga qat'iy e'tibor bering:
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-primary">
                <CheckCircle2 className="h-4 w-4" /> Dolzarblik
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Mavzu bugungi kunda jamiyat, iqtisodiyot yoki fan rivoji uchun ahamiyatli va
                zamonaviy bo'lishi kerak.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-primary">
                <CheckCircle2 className="h-4 w-4" /> Adabiyotlar bazasi
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Mavzu bo'yicha yetarli miqdorda o'zbek va xorijiy ilmiy maqolalar, darsliklar va
                statistik manbalar mavjud bo'lsin.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-primary">
                <CheckCircle2 className="h-4 w-4" /> Hajm imkoniyati
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Mavzu 30-50 betlik hajmda to'liq va ortiqcha so'zbozliksiz yoritib beriladigan
                darajada qamrovga ega bo'lishi lozim.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-primary">
                <CheckCircle2 className="h-4 w-4" /> Ilmiy rahbar bilan kelishish
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Tanlangan mavzuni albatta biriktirilgan ilmiy rahbar bilan maslahatlashib, kafedra
                tasdig'idan o'tkazing.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-900 dark:text-amber-200">
            <span className="font-bold flex items-center gap-1.5">
              <Lightbulb className="h-4 w-4" /> Maslahat:
            </span>
            Juda keng mavzu tanlamang (masalan, "Jahon iqtisodiyoti"). Aniq va tor yo'naltirilgan
            mavzu tanlang (masalan, "O'zbekistonda agrar sohani kreditlash mexanizmi").
          </div>
        </div>
      ),
    },
    {
      step: 2,
      title: "2-bosqich: Reja tuzish",
      subtitle: "Kurs ishi rejasi — bu tadqiqot ishining skeleti va asosi",
      color: "from-indigo-600 to-purple-700",
      content: (
        <div className="space-y-4 text-sm leading-relaxed text-foreground">
          <p className="font-medium text-base">
            O'zbekiston Oliy ta'lim tizimidagi rasmiy standart reja quyidagi strukturadan iborat:
          </p>

          <div className="rounded-2xl border border-border bg-card p-5 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-border/80 pb-2 font-bold text-foreground font-sans">
              <span>Bo'lim nomi</span>
              <span>Tavsiya etilgan hajm</span>
            </div>
            <div className="flex items-center justify-between text-primary font-bold">
              <span>KIRISH — mavzuning dolzarbligi, maqsad, vazifalar, ob'ekt va predmet</span>
              <span>2-3 bet</span>
            </div>
            <div className="pl-2 border-l-2 border-primary/40 space-y-1">
              <div className="font-bold text-foreground">
                I-BOB: NAZARIY ASOSLAR (Mavzuning nazariy tahlili)
              </div>
              <div className="text-muted-foreground pl-3">
                1.1. Asosiy tushunchalar va ta'riflar
              </div>
              <div className="text-muted-foreground pl-3">
                1.2. Mavzuning nazariy asoslari va olimlarning qarashlari
              </div>
              <div className="text-muted-foreground pl-3">
                1.3. Xorijiy va mahalliy tajriba tahlili
              </div>
              <div className="text-right text-[11px] text-primary font-semibold">
                Jami: 10-15 bet
              </div>
            </div>
            <div className="pl-2 border-l-2 border-emerald-500/40 space-y-1">
              <div className="font-bold text-foreground">
                II-BOB: AMALIY QISM (Tahlil va tadqiqot natijalari)
              </div>
              <div className="text-muted-foreground pl-3">
                2.1. Hozirgi holat tahlili va statistik ma'lumotlar
              </div>
              <div className="text-muted-foreground pl-3">
                2.2. Sohadagi mavjud muammolar va omillar tahlili
              </div>
              <div className="text-muted-foreground pl-3">
                2.3. Muammolarni bartaraf etish bo'yicha taklif va tavsiyalar
              </div>
              <div className="text-right text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                Jami: 10-15 bet
              </div>
            </div>
            <div className="flex items-center justify-between text-foreground font-bold">
              <span>XULOSA — asosiy xulosalar va amaliy tavsiyalar</span>
              <span>2-3 bet</span>
            </div>
            <div className="flex items-center justify-between text-muted-foreground font-semibold">
              <span>FOYDALANILGAN ADABIYOTLAR RO'YXATI</span>
              <span>kamida 15-20 ta manba</span>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => setActiveTab("generator")}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-glow hover:bg-primary/90"
            >
              <Sparkles className="h-4 w-4" /> Reja generatorini ochish
            </button>
          </div>
        </div>
      ),
    },
    {
      step: 3,
      title: "3-bosqich: Kirish qismini yozish",
      subtitle: "Kirish qismi — kurs ishining vizit kartkasi va eng muhim bo'limi",
      color: "from-purple-600 to-pink-700",
      content: (
        <div className="space-y-4 text-sm leading-relaxed text-foreground">
          <p className="font-medium text-base">
            Kirish qismida quyidagi 5 ta asosiy element ko'rsatilishi shart:
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="font-bold text-primary flex items-center gap-1.5">
                <FileCheck className="h-4 w-4" /> 1. Mavzuning dolzarbligi
              </span>
              <p className="mt-1 text-xs text-muted-foreground">
                Nima uchun aynan shu mavzu tanlandi? Ushbu muammoni o'rganish bugun nima uchun
                zarur? Qanday qaror va farmonlarga asoslanadi?
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="font-bold text-primary flex items-center gap-1.5">
                <FileCheck className="h-4 w-4" /> 2. Tadqiqot maqsadi
              </span>
              <p className="mt-1 text-xs text-muted-foreground">
                Ushbu tadqiqot orqali nimaga erishmoqchisiz? Asosiy maqsad 1-2 jumlada aniq va
                lo'nda ifodalanadi.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="font-bold text-primary flex items-center gap-1.5">
                <FileCheck className="h-4 w-4" /> 3. Tadqiqot vazifalari
              </span>
              <p className="mt-1 text-xs text-muted-foreground">
                Maqsadga erishish uchun qanday aniq qadamlar bajariladi? Odatda 3-4 ta vazifa qat'iy
                ketma-ketlikda sanab o'tiladi.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="font-bold text-primary flex items-center gap-1.5">
                <FileCheck className="h-4 w-4" /> 4. Obyekt va predmet
              </span>
              <p className="mt-1 text-xs text-muted-foreground">
                <strong>Obyekt:</strong> Nimani o'rganasiz (soha, korxona).{" "}
                <strong>Predmet:</strong> Uning aynan qaysi jihatlari va mexanizmlari tadqiq
                qilinadi.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <span className="font-bold text-primary flex items-center gap-1.5">
              <FileCheck className="h-4 w-4" /> 5. Tadqiqot usullari (metodologiya)
            </span>
            <p className="mt-1 text-xs text-muted-foreground">
              Qanday metodlar qo'llanildi: qiyosiy tahlil, statistik guruhlash, kuzatish,
              modellashtirish, induksiya va deduksiya.
            </p>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => setActiveTab("intro_builder")}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-glow hover:bg-primary/90"
            >
              <PenTool className="h-4 w-4" /> Kirish qismi konstruktorini ochish
            </button>
          </div>
        </div>
      ),
    },
    {
      step: 4,
      title: "4-bosqich: Asosiy qism (I va II boblar)",
      subtitle: "Nazariy poydevor va amaliy tadqiqot natijalarining uyg'unligi",
      color: "from-emerald-600 to-teal-700",
      content: (
        <div className="space-y-4 text-sm leading-relaxed text-foreground">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-2">
              <div className="flex items-center gap-2 font-bold text-base text-primary">
                <BookOpen className="h-5 w-5" /> I-BOB: Nazariy asos (10-15 bet)
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Mavzuga oid ilmiy adabiyotlarni sinchkovlik bilan tahlil qiling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Turli mahalliy va xorijiy olimlarning qarashlarini keltiring va solishtiring.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>O'z ilmiy pozitsiyangiz va fikringizni bildiring.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Har bir keltirilgan fikrga aniq manba (snoska) bering.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-2">
              <div className="flex items-center gap-2 font-bold text-base text-emerald-600 dark:text-emerald-400">
                <Layers className="h-5 w-5" /> II-BOB: Amaliy qism (10-15 bet)
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>
                    Haqiqiy statistik ma'lumotlar, ko'rsatkichlar va dinamikani keltiring.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>
                    Ma'lumotlarni jadvallar, diagrammalar va grafiklar ko'rinishida
                    rasmiylashtiring.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>
                    Bu bob kurs ishining eng qimmatli qismi — shaxsiy tahlil va xulosalaringiz
                    bo'lsin.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Mavjud muammolar yechimiga amaliy takliflar bering.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs">
            <span className="font-bold text-primary">Jadvallarni rasmiylashtirish qoidasi:</span>
            <p className="mt-1 text-muted-foreground">
              Har bir jadvalning yuqori o'ng burchagida raqami ("1.1-jadval") va o'rtasida nomi
              bo'lishi, pastida esa manbasi ("Manba: Muallif ishlanmasi" yoki rasmiy hisobot)
              ko'rsatilishi shart.
            </p>
          </div>
        </div>
      ),
    },
    {
      step: 5,
      title: "5-bosqich: Xulosa yozish",
      subtitle: "Tadqiqot davomida erishilgan natijalarning qat'iy umumlashtirilishi",
      color: "from-amber-600 to-orange-700",
      content: (
        <div className="space-y-4 text-sm leading-relaxed text-foreground">
          <p className="font-medium text-base">
            Xulosa (2-3 bet) kurs ishining umumiy yakuni bo'lib, quyidagi 4 ta asosiy qismdan iborat
            bo'ladi:
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="font-bold text-amber-600 dark:text-amber-400">
                1. Boblar bo'yicha qisqa xulosa
              </span>
              <p className="mt-1 text-xs text-muted-foreground">
                I va II boblarda bajarilgan nazariy va amaliy tadqiqotlarning eng muhim jihatlari
                1-2 abzatsda keltiriladi.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="font-bold text-amber-600 dark:text-amber-400">
                2. Maqsadga erishilganlik tasdig'i
              </span>
              <p className="mt-1 text-xs text-muted-foreground">
                Kirish qismida belgilangan maqsad va vazifalar qay darajada to'liq bajarilgani
                ochiqlanadi.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="font-bold text-amber-600 dark:text-amber-400">
                3. Amaliy taklif va tavsiyalar
              </span>
              <p className="mt-1 text-xs text-muted-foreground">
                Tadqiq qilingan muammo bo'yicha amaliyotga joriy etilishi mumkin bo'lgan 3-5 ta
                aniq, asoslangan takliflar sanaladi.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="font-bold text-amber-600 dark:text-amber-400">
                4. Kelgusi tadqiqot yo'nalishlari
              </span>
              <p className="mt-1 text-xs text-muted-foreground">
                Mavzuni kelgusida bitiruv malakaviy ishi (BMI) yoki magistratura bosqichida qanday
                rivojlantirish mumkinligi ko'rsatiladi.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      step: 6,
      title: "6-bosqich: Adabiyotlar ro'yxati",
      subtitle: "Ilmiy manbalarning alifbo tartibidagi qat'iy ro'yxati (kamida 15-20 ta)",
      color: "from-cyan-600 to-blue-700",
      content: (
        <div className="space-y-4 text-sm leading-relaxed text-foreground">
          <p className="font-medium text-base">
            Foydalanilgan adabiyotlar ro'yxati alifbo tartibida quyidagi guruhlar ketma-ketligida
            tuziladi:
          </p>

          <div className="space-y-3">
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="font-bold text-primary">
                1. O'zbekiston Respublikasi Qonunlari va me'yoriy hujjatlari
              </span>
              <p className="mt-1 text-xs text-muted-foreground">
                Konstitutsiya, tegishli Qonunlar, O'zbekiston Respublikasi Prezidenti Farmon va
                Qarorlari, Vazirlar Mahkamasi qarorlari.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="font-bold text-primary">2. Darsliklar va o'quv qo'llanmalar</span>
              <p className="mt-1 text-xs text-muted-foreground">
                Muallif F.I.SH., Kitob nomi, nashriyot, nashr yili va umumiy betlar soni.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="font-bold text-primary">
                3. Ilmiy maqolalar, monografiyalar va dissertatsiyalar
              </span>
              <p className="mt-1 text-xs text-muted-foreground">
                OAK ro'yxatidagi jurnallar, xalqaro Scopus/Web of Science maqolalari, ilmiy anjuman
                to'plamlari.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="font-bold text-primary">
                4. Internet manbalari (rasmiy va ishonchli saytlar)
              </span>
              <p className="mt-1 text-xs text-muted-foreground">
                Statistika agentligi (stat.uz), Markaziy bank (cbu.uz), Lex.uz va boshqa rasmiy
                veb-resurslar to'liq havolasi bilan.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Generated Plan calculation
  const generatedPlanText = useMemo(() => {
    return `KURS ISHI REJASI

Mavzu: ${genTopic}
Fan: ${genSubject}
Tadqiqot obyekti: ${genObject}

KIRISH (2-3 bet)
- Mavzuning dolzarbligi
- Tadqiqot maqsadi va vazifalari
- Tadqiqot obyekti va predmeti
- Tadqiqotning nazariy va amaliy usullari

I-BOB. ${genTopic.toUpperCase().includes("NAZARIY") ? genTopic : genTopic + "NING NAZARIY-USLUBIY ASOSLARI"} (10-15 bet)
1.1. Mavzuga oid asosiy tushunchalar, iqtisodiy-ijtimoiy mohiyat va ta'riflar
1.2. Mavzuning nazariy asoslari va mahalliy hamda xorijiy olimlarning qarashlari
1.3. Ushbu sohada ilg'or xorijiy davlatlar tajribasi va uni qo'llash imkoniyatlari

II-BOB. ${genObject.toUpperCase()}DA ${genTopic.toUpperCase()}NI AMALIY TAHLIL QILISH VA SAMARADORLIGINI OSHIRISH (10-15 bet)
2.1. Hozirgi holatning statistik va qiyosiy tahlili
2.2. Sohada mavjud muammolar va ularning yuzaga kelish sabablari tahlili
2.3. Aniqlangan muammolarni bartaraf etish hamda rivojlantirish bo'yicha amaliy taklif va tavsiyalar

XULOSA (2-3 bet)
- Nazariy va amaliy tadqiqot natijalari bo'yicha umumlashtirilgan xulosalar
- Amaliyotga joriy etish uchun takliflar

FOYDALANILGAN ADABIYOTLAR RO'YXATI (kamida 15-20 ta manba)`;
  }, [genSubject, genTopic, genObject]);

  // Copy plan handler
  const handleCopyPlan = () => {
    navigator.clipboard.writeText(generatedPlanText);
    setCopiedPlan(true);
    setTimeout(() => setCopiedPlan(false), 2500);
  };

  // Download plan file handler
  const handleDownloadPlan = () => {
    const blob = new Blob([generatedPlanText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `kurs_ishi_rejasi_${genTopic.slice(0, 20)}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Generated Introduction Text
  const generatedIntroText = useMemo(() => {
    return `KIRISH

Mavzuning dolzarbligi:
${introRelevance}

Tadqiqot maqsadi:
${introGoal}

Tadqiqot vazifalari:
${introTasks}

Tadqiqot obyekti:
${introObject}

Tadqiqot predmeti:
${introSubject}

Tadqiqot usullari:
${introMethods}`;
  }, [introRelevance, introGoal, introTasks, introObject, introSubject, introMethods]);

  const handleCopyIntro = () => {
    navigator.clipboard.writeText(generatedIntroText);
    setCopiedIntro(true);
    setTimeout(() => setCopiedIntro(false), 2500);
  };

  const handleDownloadIntro = () => {
    const blob = new Blob([generatedIntroText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `kurs_ishi_kirish_${introTopic.slice(0, 20)}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 px-4 pb-16 md:px-8">
      {/* Top Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 font-medium transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Bosh sahifa
          </button>
          <span>/</span>
          <span className="font-semibold text-foreground">Kurs ishi yo‘riqnomasi</span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 font-bold text-primary">
            <FileText className="h-3.5 w-3.5" /> Rasmiy standart (30-50 bet)
          </span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-700 via-purple-800 to-indigo-950 p-8 text-white shadow-xl md:p-10">
        <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-violet-400/20 blur-2xl" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md">
            <BookOpen className="h-4 w-4 text-amber-300" />
            <span>Talabaning mustaqil ilmiy-tadqiqot ishi</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Kurs Ishi Qanday Yoziladi?
          </h2>
          <p className="mt-3 text-base text-violet-100/90 md:text-lg">
            Mavzu tanlashdan tortib himoyagacha bo'lgan 6 ta asosiy bosqich, standart reja
            strukturasi, interaktiv reja generatori, kirish konstruktori va tekshiruv nazorati.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 backdrop-blur-md">
              <Layers className="h-4 w-4 text-amber-300" />
              <span className="text-sm font-bold">6 ta Bosqich</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 backdrop-blur-md">
              <FileCheck className="h-4 w-4 text-cyan-300" />
              <span className="text-sm font-bold">30-50 bet hajm</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-emerald-300" />
              <span className="text-sm font-bold">Reja & Kirish Generator</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 backdrop-blur-md">
              <ListChecks className="h-4 w-4 text-purple-300" />
              <span className="text-sm font-bold">10 bandlik Checklist</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tabs Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto border-b border-border pb-3">
        <button
          onClick={() => setActiveTab("guide")}
          className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-bold transition-all ${
            activeTab === "guide"
              ? "bg-primary text-primary-foreground shadow-glow"
              : "border border-border bg-card text-muted-foreground hover:bg-muted"
          }`}
        >
          <BookOpen className="h-4 w-4" /> 6 ta Bosqichli Yo‘riqnoma
        </button>

        <button
          onClick={() => setActiveTab("generator")}
          className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-bold transition-all ${
            activeTab === "generator"
              ? "bg-primary text-primary-foreground shadow-glow"
              : "border border-border bg-card text-muted-foreground hover:bg-muted"
          }`}
        >
          <Sparkles className="h-4 w-4 text-amber-400" /> Reja Konstruktori
        </button>

        <button
          onClick={() => setActiveTab("intro_builder")}
          className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-bold transition-all ${
            activeTab === "intro_builder"
              ? "bg-primary text-primary-foreground shadow-glow"
              : "border border-border bg-card text-muted-foreground hover:bg-muted"
          }`}
        >
          <PenTool className="h-4 w-4" /> Kirish Qismi Konstruktori
        </button>

        <button
          onClick={() => setActiveTab("formatting")}
          className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-bold transition-all ${
            activeTab === "formatting"
              ? "bg-primary text-primary-foreground shadow-glow"
              : "border border-border bg-card text-muted-foreground hover:bg-muted"
          }`}
        >
          <Printer className="h-4 w-4" /> Standart & Titul Varaq
        </button>

        <button
          onClick={() => setActiveTab("checklist")}
          className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-bold transition-all ${
            activeTab === "checklist"
              ? "bg-primary text-primary-foreground shadow-glow"
              : "border border-border bg-card text-muted-foreground hover:bg-muted"
          }`}
        >
          <CheckSquare className="h-4 w-4" /> Tayyorgarlik Checklisti
        </button>
      </div>

      {/* ========================================================= */}
      {/* TAB 1: 6-STEP GUIDE */}
      {/* ========================================================= */}
      {activeTab === "guide" && (
        <div className="space-y-6">
          {/* Step Selector Pills */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {guideSteps.map((s, idx) => (
              <button
                key={s.step}
                onClick={() => setCurrentStep(idx)}
                className={`flex flex-col items-start rounded-2xl border p-3.5 text-left transition-all ${
                  currentStep === idx
                    ? "border-primary bg-primary/10 ring-2 ring-primary shadow-sm"
                    : "border-border bg-card hover:bg-muted"
                }`}
              >
                <span
                  className={`text-[10px] font-extrabold uppercase tracking-wider ${
                    currentStep === idx ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {s.step}-bosqich
                </span>
                <span className="mt-1 text-xs font-bold line-clamp-1">
                  {s.title.split(": ")[1]}
                </span>
              </button>
            ))}
          </div>

          {/* Active Step Content Card */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
              <div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-extrabold text-primary">
                  {guideSteps[currentStep].step}-bosqich
                </span>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight">
                  {guideSteps[currentStep].title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {guideSteps[currentStep].subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={currentStep === 0}
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="grid h-10 w-10 place-items-center rounded-2xl border border-border bg-card text-foreground transition-all hover:bg-muted disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-xs font-bold text-muted-foreground">
                  {currentStep + 1} / {guideSteps.length}
                </span>
                <button
                  disabled={currentStep === guideSteps.length - 1}
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  className="grid h-10 w-10 place-items-center rounded-2xl border border-border bg-card text-foreground transition-all hover:bg-muted disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-6">{guideSteps[currentStep].content}</div>

            {/* Step navigation bottom */}
            <div className="mt-8 flex items-center justify-between border-t border-border/80 pt-6">
              <button
                disabled={currentStep === 0}
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-2.5 text-xs font-bold text-foreground transition-all hover:bg-muted disabled:opacity-40 disabled:pointer-events-none"
              >
                <ChevronLeft className="h-4 w-4" /> Oldingi bosqich
              </button>

              {currentStep < guideSteps.length - 1 ? (
                <button
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  className="flex items-center gap-2 rounded-2xl bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-glow transition-all hover:bg-primary/90 hover:scale-105"
                >
                  Keyingi bosqich <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={() => setActiveTab("generator")}
                  className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white shadow-glow transition-all hover:bg-emerald-500 hover:scale-105"
                >
                  <Sparkles className="h-4 w-4" /> Reja tuzishni boshlash
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2: REJA KONSTRUKTORI (PLAN GENERATOR) */}
      {/* ========================================================= */}
      {activeTab === "generator" && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Inputs Column */}
          <div className="space-y-5 lg:col-span-5">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <Sparkles className="h-5 w-5 text-amber-500" /> Reja Ma'lumotlari
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Mavzu va faningizni kiriting, tizim rasmiy standartdagi reja strukturasini tuzib
                beradi.
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <label className="text-xs font-bold text-foreground">
                    Fan yoki yo'nalish nomi
                  </label>
                  <input
                    type="text"
                    value={genSubject}
                    onChange={(e) => setGenSubject(e.target.value)}
                    placeholder="Masalan: Iqtisodiyot, Biologiya, Pedagogika"
                    className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs font-medium focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground">Kurs ishi mavzusi</label>
                  <textarea
                    rows={3}
                    value={genTopic}
                    onChange={(e) => setGenTopic(e.target.value)}
                    placeholder="Mavzuni to'liq kiriting..."
                    className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs font-medium focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground">
                    Tadqiqot obyekti (korxona, soha yoki davlat)
                  </label>
                  <input
                    type="text"
                    value={genObject}
                    onChange={(e) => setGenObject(e.target.value)}
                    placeholder="Masalan: O'zbekiston tijorat banklari"
                    className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs font-medium focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Sample Topics Helper */}
              <div className="mt-6 border-t border-border/80 pt-4">
                <span className="text-[11px] font-bold text-muted-foreground">
                  Namuna mavzular:
                </span>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    "Tijorat banklarida kredit risklarini boshqarish",
                    "Raqamli iqtisodiyot sharoitida korxona moliyasini boshqarish",
                    "G‘o‘za seleksiyasida genetika qonuniyatlarining qo‘llanilishi",
                    "Zamonaviy ta'limda interaktiv metodlardan foydalanish",
                  ].map((sample) => (
                    <button
                      key={sample}
                      onClick={() => setGenTopic(sample)}
                      className="rounded-xl border border-border bg-muted/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      {sample.slice(0, 32)}...
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Generated Preview Column */}
          <div className="space-y-4 lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
                <div>
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" /> Standart Reja Namunasi
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Rasmiy Oliy ta'lim talablari asosidagi 2 ta bob, 6 ta paragrafli to'liq reja
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyPlan}
                    className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-1.5 text-xs font-bold transition-all hover:bg-muted"
                  >
                    {copiedPlan ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-500" /> Nusxalandi!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" /> Nusxa olish
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleDownloadPlan}
                    className="flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-glow transition-all hover:bg-primary/90"
                  >
                    <Download className="h-3.5 w-3.5" /> Faylni yuklab olish
                  </button>
                </div>
              </div>

              {/* Styled Plan Viewer */}
              <div className="mt-5 space-y-4 font-mono text-xs leading-relaxed">
                <div className="rounded-2xl border border-border bg-background/50 p-5 space-y-4">
                  <div className="text-center font-bold text-sm font-sans uppercase tracking-wider text-primary">
                    MUNDARIJA / REJA
                  </div>

                  <div className="flex items-center justify-between font-bold border-b border-border/60 pb-2">
                    <span>KIRISH</span>
                    <span className="text-muted-foreground font-normal">2-3 bet</span>
                  </div>

                  <div className="space-y-2">
                    <div className="font-bold text-foreground">
                      I-BOB.{" "}
                      {genTopic.toUpperCase().includes("NAZARIY")
                        ? genTopic
                        : genTopic + "NING NAZARIY-USLUBIY ASOSLARI"}
                    </div>
                    <div className="pl-4 space-y-1.5 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>
                          1.1. Mavzuga oid asosiy tushunchalar, iqtisodiy-ijtimoiy mohiyat va
                          ta'riflar
                        </span>
                        <span className="text-[11px]">3-5 bet</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1.2. Mavzuning nazariy asoslari va olimlarning qarashlari</span>
                        <span className="text-[11px]">4-5 bet</span>
                      </div>
                      <div className="flex justify-between">
                        <span>
                          1.3. Ilg'or xorijiy tajriba va uni O'zbekiston sharoitida qo'llash
                          imkoniyatlari
                        </span>
                        <span className="text-[11px]">3-5 bet</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-bold text-foreground">
                      II-BOB. {genObject.toUpperCase()}DA {genTopic.toUpperCase()}NI AMALIY TAHLIL
                      QILISH VA TAKOMILLASHTIRISH
                    </div>
                    <div className="pl-4 space-y-1.5 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>2.1. Hozirgi holatning statistik va qiyosiy tahlili</span>
                        <span className="text-[11px]">4-5 bet</span>
                      </div>
                      <div className="flex justify-between">
                        <span>
                          2.2. Sohadagi mavjud muammolar va ularning kelib chiqish sabablari
                        </span>
                        <span className="text-[11px]">3-5 bet</span>
                      </div>
                      <div className="flex justify-between">
                        <span>
                          2.3. Aniqlangan muammolarni bartaraf etish bo'yicha amaliy taklif va
                          tavsiyalar
                        </span>
                        <span className="text-[11px]">3-5 bet</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between font-bold border-t border-border/60 pt-2">
                    <span>XULOSA VA TAVSIYALAR</span>
                    <span className="text-muted-foreground font-normal">2-3 bet</span>
                  </div>

                  <div className="flex items-center justify-between font-bold">
                    <span>FOYDALANILGAN ADABIYOTLAR RO'YXATI</span>
                    <span className="text-muted-foreground font-normal">kamida 15-20 ta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 3: KIRISH QISMI KONSTRUKTORI (INTRODUCTION BUILDER) */}
      {/* ========================================================= */}
      {activeTab === "intro_builder" && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Form Input Column */}
          <div className="space-y-4 lg:col-span-5">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <PenTool className="h-5 w-5 text-primary" /> Kirish Qismi Shablonlari
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Kirish qismining barcha 5 ta mezonini o'z mavzungizga moslab to'ldiring.
              </p>

              <div className="mt-4 space-y-3.5">
                <div>
                  <label className="text-xs font-bold text-foreground">
                    1. Mavzuning dolzarbligi
                  </label>
                  <textarea
                    rows={4}
                    value={introRelevance}
                    onChange={(e) => setIntroRelevance(e.target.value)}
                    className="mt-1 w-full rounded-2xl border border-border bg-background p-3 text-xs leading-relaxed focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground">2. Tadqiqot maqsadi</label>
                  <textarea
                    rows={2}
                    value={introGoal}
                    onChange={(e) => setIntroGoal(e.target.value)}
                    className="mt-1 w-full rounded-2xl border border-border bg-background p-3 text-xs leading-relaxed focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground">
                    3. Tadqiqot vazifalari
                  </label>
                  <textarea
                    rows={3}
                    value={introTasks}
                    onChange={(e) => setIntroTasks(e.target.value)}
                    className="mt-1 w-full rounded-2xl border border-border bg-background p-3 text-xs leading-relaxed focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground">
                    4. Tadqiqot obyekti va predmeti
                  </label>
                  <div className="mt-1 space-y-2">
                    <input
                      type="text"
                      value={introObject}
                      onChange={(e) => setIntroObject(e.target.value)}
                      placeholder="Obyekt (kim yoki nima o'rganiladi)"
                      className="w-full rounded-2xl border border-border bg-background px-3 py-2 text-xs focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <input
                      type="text"
                      value={introSubject}
                      onChange={(e) => setIntroSubject(e.target.value)}
                      placeholder="Predmet (aynan qaysi xususiyatlari)"
                      className="w-full rounded-2xl border border-border bg-background px-3 py-2 text-xs focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground">5. Tadqiqot usullari</label>
                  <input
                    type="text"
                    value={introMethods}
                    onChange={(e) => setIntroMethods(e.target.value)}
                    className="mt-1 w-full rounded-2xl border border-border bg-background px-3 py-2 text-xs focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form Preview Column */}
          <div className="space-y-4 lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
                <div>
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-emerald-500" /> Kirish Qismi Matni (Oldindan
                    ko'rish)
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Times New Roman 14pt, 1.5 interval standartidagi tayyor matn
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyIntro}
                    className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-1.5 text-xs font-bold transition-all hover:bg-muted"
                  >
                    {copiedIntro ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-500" /> Nusxalandi!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" /> Nusxa olish
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleDownloadIntro}
                    className="flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-glow transition-all hover:bg-primary/90"
                  >
                    <Download className="h-3.5 w-3.5" /> Yuklab olish
                  </button>
                </div>
              </div>

              {/* Document Sheet Simulation */}
              <div className="mt-5 rounded-2xl border border-border/80 bg-background/60 p-6 md:p-8 font-serif text-sm leading-relaxed text-foreground shadow-inner space-y-4">
                <div className="text-center font-bold text-base uppercase tracking-wider mb-6">
                  KIRISH
                </div>

                <p className="indent-8 text-justify">
                  <strong>Mavzuning dolzarbligi.</strong> {introRelevance}
                </p>

                <p className="indent-8 text-justify">
                  <strong>Tadqiqotning maqsadi.</strong> {introGoal}
                </p>

                <div className="indent-8 text-justify">
                  <strong>Tadqiqotning vazifalari.</strong> Yuqoridagi maqsadga erishish uchun
                  quyidagi vazifalarni hal qilish lozim:
                  <div className="mt-2 pl-4 space-y-1 font-sans text-xs">
                    {introTasks.split("\n").map((task, idx) => (
                      <div key={idx} className="leading-relaxed">
                        {task}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="indent-8 text-justify">
                  <strong>Tadqiqotning obyekti.</strong> {introObject}
                </p>

                <p className="indent-8 text-justify">
                  <strong>Tadqiqotning predmeti.</strong> {introSubject}
                </p>

                <p className="indent-8 text-justify">
                  <strong>Tadqiqot usullari.</strong> {introMethods}
                </p>

                <p className="indent-8 text-justify text-xs text-muted-foreground font-sans">
                  <strong>Kurs ishining tuzilishi.</strong> Kurs ishi kirish, ikki bob, oltita
                  paragraf, xulosa hamda foydalanilgan adabiyotlar ro'yxatidan iborat bo'lib, umumiy
                  hajmi {35} betni tashkil etadi.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 4: FORMATTING & TITLE PAGE SAMPLE */}
      {/* ========================================================= */}
      {activeTab === "formatting" && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Rules info */}
          <div className="space-y-4 lg:col-span-5">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <Printer className="h-5 w-5 text-primary" /> Rasmiy Texnik Talablar (GOST)
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Barcha OTMlar uchun umumiy qabul qilingan matn terish qoidalari
              </p>

              <div className="mt-4 space-y-3 text-xs">
                <div className="flex items-center justify-between rounded-xl border border-border bg-background p-3">
                  <span className="font-bold text-foreground">Shrift (Font)</span>
                  <span className="font-mono text-primary font-bold">Times New Roman, 14 pt</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-border bg-background p-3">
                  <span className="font-bold text-foreground">Qatorlar orasi (Interval)</span>
                  <span className="font-mono text-primary font-bold">1.5 qatorli interval</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-border bg-background p-3">
                  <span className="font-bold text-foreground">Abzas (Xat boshi)</span>
                  <span className="font-mono text-primary font-bold">1.25 sm</span>
                </div>
                <div className="rounded-xl border border-border bg-background p-3 space-y-1.5">
                  <span className="font-bold text-foreground">Varaq hoshiyalari (Polya):</span>
                  <div className="grid grid-cols-2 gap-2 text-muted-foreground pt-1">
                    <div>
                      • Chapdan: <strong className="text-foreground">30 mm (3 sm)</strong>
                    </div>
                    <div>
                      • O'ngdan: <strong className="text-foreground">15 mm (1.5 sm)</strong>
                    </div>
                    <div>
                      • Yuqoridan: <strong className="text-foreground">20 mm (2 sm)</strong>
                    </div>
                    <div>
                      • Pastdan: <strong className="text-foreground">20 mm (2 sm)</strong>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-border bg-background p-3">
                  <span className="font-bold text-foreground">Bet raqamlari</span>
                  <span className="text-muted-foreground">Pastki o'rtada (yoki o'ngda)</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-border bg-background p-3">
                  <span className="font-bold text-foreground">Titul bet raqami</span>
                  <span className="text-muted-foreground">Hisobga olinadi, lekin qo'yilmaydi</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h4 className="font-bold text-sm flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-amber-500" /> Antiplagiat talabi
              </h4>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Kurs ishi internetdan ko'chirilgan (plagiat) bo'lmasligi kerak. Aksariyat
                universitetlar o'zlashtirish darajasini tekshiruvchi dasturlardan foydalanadi.
                O'ziga xoslik darajasi kamida <strong>70-75%</strong> bo'lishi talab etiladi.
              </p>
            </div>
          </div>

          {/* Title Page Simulation */}
          <div className="space-y-4 lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center justify-between border-b border-border/80 pb-3">
                <h3 className="font-bold text-base flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" /> Titul Varaq Namunasi
                </h3>
                <span className="text-xs font-semibold text-muted-foreground">A4 formati</span>
              </div>

              {/* Title Page Mock */}
              <div className="mt-4 rounded-2xl border-2 border-border/80 bg-background/80 p-8 font-serif text-center shadow-inner space-y-8 text-foreground">
                <div className="space-y-1 text-xs uppercase font-bold tracking-wide">
                  <p>O'zbekiston Respublikasi Oliy Ta'lim, Fan va Innovatsiyalar Vazirligi</p>
                  <p className="text-primary text-sm">O'zbekiston Milliy Universiteti</p>
                  <p className="text-muted-foreground font-normal normal-case">
                    Iqtisodiyot fakulteti / "Moliya va kredit" kafedrasi
                  </p>
                </div>

                <div className="py-8 space-y-3">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans">
                    KURS ISHI
                  </p>
                  <h4 className="text-base font-bold uppercase leading-snug px-6">
                    "Tijorat banklarida kredit risklarini boshqarish mexanizmini takomillashtirish"
                  </h4>
                  <p className="text-xs text-muted-foreground italic">
                    Fan: "Bank ishi va moliya bozori"
                  </p>
                </div>

                <div className="flex justify-between items-end text-xs text-left pt-6 border-t border-border/40 font-sans">
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Bajaruvchi:</p>
                    <p className="font-bold">Muxtorov Aslonbek</p>
                    <p className="text-[11px] text-muted-foreground">
                      3-bosqich talabasi, 301-guruh
                    </p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-muted-foreground">Ilmiy rahbar:</p>
                    <p className="font-bold">dots. prof. I.I. Ismoilov</p>
                    <p className="text-[11px] text-muted-foreground">I.f.n., dotsent</p>
                  </div>
                </div>

                <div className="pt-8 text-xs font-sans text-muted-foreground">TOSHKENT — 2026</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 5: CHECKLIST & READINESS TEST */}
      {/* ========================================================= */}
      {activeTab === "checklist" && (
        <div className="space-y-6">
          {/* Progress Header */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="space-y-2 text-center md:text-left">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-extrabold text-primary">
                  <CheckSquare className="h-4 w-4" /> Tayyorgarlik Mezonlari
                </span>
                <h3 className="text-2xl font-extrabold tracking-tight">
                  Kurs Ishingiz Topshirishga Tayyormi?
                </h3>
                <p className="max-w-xl text-xs text-muted-foreground">
                  Kurs ishini ilmiy rahbarga topshirishdan avval quyidagi 10 ta mezon bo'yicha
                  to'liq tekshirib chiqing. Har bir band kafedra talablariga mos kelishi lozim.
                </p>
              </div>

              {/* Progress Ring Card */}
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4 shadow-sm">
                <div className="relative grid h-16 w-16 place-items-center rounded-full border-4 border-primary/20 bg-card">
                  <span className="text-base font-black text-primary">{checklistProgress}%</span>
                </div>
                <div>
                  <div className="text-sm font-bold">
                    {checklistProgress === 100
                      ? "A'lo darajada tayyor!"
                      : checklistProgress >= 60
                        ? "Deyarli tayyor!"
                        : "Tekshiruv davom etmoqda"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {Object.values(checklist).filter(Boolean).length} / {checklistItems.length}{" "}
                    mezon bajarildi
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist Items */}
          <div className="space-y-3">
            {checklistItems.map((item) => {
              const isChecked = !!checklist[item.id];

              return (
                <div
                  key={item.id}
                  onClick={() =>
                    setChecklist((prev) => ({
                      ...prev,
                      [item.id]: !prev[item.id],
                    }))
                  }
                  className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-4 transition-all duration-200 ${
                    isChecked
                      ? "border-emerald-500/50 bg-emerald-500/5 ring-1 ring-emerald-500/20 shadow-sm"
                      : "border-border bg-card hover:bg-muted/40"
                  }`}
                >
                  <div
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg border transition-colors ${
                      isChecked
                        ? "border-emerald-600 bg-emerald-600 text-white"
                        : "border-border bg-background"
                    }`}
                  >
                    {isChecked && <Check className="h-4 w-4" />}
                  </div>

                  <div className="flex-1">
                    <h4
                      className={`text-sm font-bold transition-colors ${
                        isChecked ? "text-emerald-900 dark:text-emerald-200" : "text-foreground"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {checklistProgress === 100 && (
            <div className="rounded-3xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-center text-emerald-900 dark:text-emerald-200 shadow-glow">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600 dark:text-emerald-400" />
              <h4 className="mt-3 text-lg font-extrabold">Barcha 10 ta mezon to'liq bajarildi!</h4>
              <p className="mt-1 text-xs max-w-md mx-auto opacity-90">
                Kurs ishingiz kafedraga topshirish va himoya qilish uchun to'liq standartlarga javob
                beradi. Himoyada muvaffaqiyat tilaymiz!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
