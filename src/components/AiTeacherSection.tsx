import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Send,
  ArrowLeft,
  Bot,
  User,
  Copy,
  Check,
  RotateCcw,
  BookOpen,
  FileText,
  ClipboardCheck,
  Gamepad2,
  Languages,
  Leaf,
  Lightbulb,
  Zap,
  Info,
  CheckCircle2,
  Trash2,
  HelpCircle,
} from "lucide-react";
import { askAiTeacher } from "@/services/aiTeacherService";

interface AiTeacherSectionProps {
  onBack: () => void;
  initialCategory?: string;
  initialPrompt?: string;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  category?: string;
  source?: "gemini" | "knowledge_base";
}

const CATEGORIES = [
  { id: "all", label: "Barcha mavzular", icon: Sparkles, color: "text-amber-500 bg-amber-500/10" },
  { id: "darsliklar", label: "Darsliklar", icon: BookOpen, color: "text-blue-500 bg-blue-500/10" },
  {
    id: "kurs_ishi",
    label: "Kurs ishi",
    icon: FileText,
    color: "text-violet-500 bg-violet-500/10",
  },
  {
    id: "mustaqil_ish",
    label: "Mustaqil ish",
    icon: ClipboardCheck,
    color: "text-orange-500 bg-orange-500/10",
  },
  { id: "oyinlar", label: "O‘yinlar", icon: Gamepad2, color: "text-purple-500 bg-purple-500/10" },
  {
    id: "ingliz_tili",
    label: "Ingliz tili (0-C1)",
    icon: Languages,
    color: "text-cyan-500 bg-cyan-500/10",
  },
  {
    id: "biologiya",
    label: "Biologiya (Milliy sertifikat)",
    icon: Leaf,
    color: "text-emerald-500 bg-emerald-500/10",
  },
];

const SUGGESTIONS: Record<string, string[]> = {
  all: [
    "Universitetda kurs ishini qanday a'lo bahoga yozish mumkin?",
    "DNK masalalarini yechish formulalari va Chargaff qoidasi",
    "Ingliz tilida B2 darajadan C1 darajaga o'tish usullari",
    "Fotosintezning yorug'lik va qorong'ulik bosqichlari tahlili",
  ],
  darsliklar: [
    "Biokimyoda ATF ning tuzilishi va energetik ahamiyati",
    "Mikrobiologiyada gram-musbat va gram-manfiy bakteriyalar farqi",
    "Botanika fanida o'tkazuvchi to'qimalarning tuzilishi va turlari",
    "Genetika fanining zamonaviy qishloq xo'jaligidagi o'rni",
  ],
  kurs_ishi: [
    "Mavzu: 'Tijorat banklarida risklarni boshqarish' uchun 2 bobli reja tuzib ber",
    "Kirish qismidagi dolzarblik, obyekt va predmetni qanday yozish kerak?",
    "Kurs ishi xulosasida qanday amaliy takliflar keltiriladi?",
    "Foydalanilgan adabiyotlar ro'yxatini GOST talabi bo'yicha rasmiylashtirish",
  ],
  mustaqil_ish: [
    "Sifatli referat va ilmiy esse yozish qoidalari va strukturasi",
    "15 slayddan iborat ilmiy taqdimot tayyorlash mezonlari",
    "Mustaqil ishda plagiatdan qochish va o'ziga xoslikni oshirish",
  ],
  oyinlar: [
    "Biologiya fanidan talabalar uchun 5 ta qiziqarli intellektual savol tuz",
    "Zakovat uslubidagi mantiqiy savollar va ularning to'liq javoblari",
    "Ingliz tili bo'yicha qiziqarli so'z o'yinlari va viktorinalar",
  ],
  ingliz_tili: [
    "Present Perfect va Past Simple o'rtasidagi asosiy farqlar",
    "IELTS Speaking va Writing uchun C1 darajadagi akademik frazalar",
    "Ingliz tilidagi 0, 1, 2, 3 Conditionals (shart mayllari) qoidalari",
    "Passive Voice (Majhul nisbat) formulalari va misollar",
  ],
  biologiya: [
    "DNK replikatsiyasi va oqsil biosintezi (transkripsiya, translatsiya) tahlili",
    "Mendelning 1, 2 va 3-qonunlari bo'yicha chatishtirish formulalari",
    "Odam anatomiyasi: Katta va kichik qon aylanish doiralari harakati",
    "Milliy sertifikat testlarida ko'p tushadigan sitologiya masalalari",
  ],
};

export function AiTeacherSection({
  onBack,
  initialCategory = "all",
  initialPrompt = "",
}: AiTeacherSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [inputPrompt, setInputPrompt] = useState<string>(initialPrompt);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Initialize messages from localStorage or welcome message
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const saved = localStorage.getItem("eduuni_ai_teacher_chat");
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    return [
      {
        id: "welcome-1",
        role: "assistant",
        content: `Assalomu alaykum! Men **EduUni AI Ustozi**man — sizning barcha fanlar bo'yicha shaxsiy ilmiy maslahatchingizman. 🎓

Quyidagi barcha yo'nalishlar bo'yicha savollaringizga ilmiy asosda to'liq javob bera olaman:
- 📖 **Darsliklar** (Botanika, Genetika, Mikrobiologiya, Biokimyo va b.)
- 📝 **Kurs ishi** (Reja tuzish, kirish qismi, tahlil, xulosa, adabiyotlar)
- 📑 **Mustaqil ish** (Referat, esse, taqdimot talablari)
- 🎮 **O'yinlar** (Intellektual viktorinalar va bilim o'yinlari)
- 🇬🇧 **Ingliz tili** (0 dan C1 gacha grammatika, leksika, speaking)
- 🧬 **Biologiya (Milliy sertifikat)** (30 ta variant masalalari, formulalar)

Kerakli bo'limni tanlang yoki savolingizni to'g'ridan-to'g'ri yozing!`,
        timestamp: "Hozir",
      },
    ];
  });

  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem("eduuni_ai_teacher_chat", JSON.stringify(messages));
    } catch {
      // Ignore
    }
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const responseCache = useRef<
    Map<string, { content: string; source: "gemini" | "knowledge_base" }>
  >(new Map());

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputPrompt).trim();
    if (!text || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" }),
      category: selectedCategory,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputPrompt("");
    setIsLoading(true);

    const cacheKey = `${selectedCategory}:${text.toLowerCase().trim()}`;
    if (responseCache.current.has(cacheKey)) {
      const cached = responseCache.current.get(cacheKey)!;
      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: cached.content,
        timestamp: new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" }),
        source: cached.source,
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsLoading(false);
      return;
    }

    try {
      const history = messages
        .filter((m) => m.id !== "welcome-1")
        .slice(-4)
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      const res = await askAiTeacher({
        prompt: text,
        category: selectedCategory,
        history,
      });

      const replyContent =
        res.response || "Savolingizga javob tayyorlanmoqda, iltimos qaytadan yuboring.";
      responseCache.current.set(cacheKey, { content: replyContent, source: res.source });

      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: replyContent,
        timestamp: new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" }),
        source: res.source,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      const errorMsg: Message = {
        id: `err-${Date.now()}`,
        role: "assistant",
        content:
          "Kechirasiz, sun'iy intellekt xizmatida vaqtinchalik xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.",
        timestamp: new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleClearChat = () => {
    if (confirm("Haqiqatan ham barcha xabarlar tarixini tozalamoqchimisiz?")) {
      const initial = [
        {
          id: "welcome-1",
          role: "assistant" as const,
          content: "Chat tarixi tozalandi. Yangi savolingizni berishingiz mumkin!",
          timestamp: "Hozir",
        },
      ];
      setMessages(initial);
      localStorage.removeItem("eduuni_ai_teacher_chat");
    }
  };

  const currentSuggestions = SUGGESTIONS[selectedCategory] ?? SUGGESTIONS["all"] ?? [];

  return (
    <div className="space-y-6 px-4 pb-16 md:px-8">
      {/* Top Breadcrumb & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 font-medium transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Bosh sahifa
          </button>
          <span>/</span>
          <span className="font-semibold text-foreground">
            AI Teacher (Sun'iy Intellekt Ustozi)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleClearChat}
            className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-all hover:bg-muted hover:text-rose-500"
            title="Chat tarixini tozalash"
          >
            <Trash2 className="h-3.5 w-3.5" /> Tozalash
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-indigo-700 via-purple-800 to-slate-950 p-6 text-white shadow-xl md:p-8">
        <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-primary/20 blur-2xl" />

        <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold backdrop-blur-md">
              <Bot className="h-4 w-4 text-cyan-300" />
              <span>EduUni Sun'iy Intellekt Ustozi (24/7 Ilmiy Maslahatchi)</span>
            </div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
              Universitet Fanlari Bo‘yicha Barcha Savollaringizga Ilmiy Javoblar
            </h2>
            <p className="mt-2 text-xs text-indigo-100/90 md:text-sm">
              Platformaga yuklangan barcha 76 ta mavzu, 119 ta rasmiy PDF ma’ruza va taqdimotlar,
              Kurs ishi, Mustaqil ish, Ingliz tili hamda Biologiya Milliy sertifikat testlari
              asosida limitsiz va tezkor ilmiy javob oling.
            </p>
          </div>

          <div className="shrink-0 rounded-2xl bg-white/10 p-4 backdrop-blur-md text-xs space-y-1.5 border border-white/10">
            <div className="flex items-center gap-2 text-emerald-300 font-bold">
              <Zap className="h-4 w-4" /> Tezkor · Limitsiz AI Baza
            </div>
            <div className="text-[11px] text-indigo-100">
              Hech qanday limit sarflamaydi · 119 ta PDF
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-border">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const Icon = cat.icon;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex shrink-0 items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition-all ${
                isSelected
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "border border-border bg-card text-muted-foreground hover:bg-muted"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Quick Suggestions */}
      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground mb-2.5">
          <Lightbulb className="h-4 w-4 text-amber-500" />
          <span>
            Tavsiya etilgan ilmiy savollar (
            {CATEGORIES.find((c) => c.id === selectedCategory)?.label}):
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {currentSuggestions.map((sug, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(sug)}
              className="rounded-xl border border-border bg-background px-3 py-1.5 text-xs text-left text-muted-foreground transition-all hover:border-primary hover:text-foreground hover:bg-primary/5"
            >
              "{sug}"
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Container */}
      <div className="rounded-3xl border border-border bg-card shadow-card min-h-[480px] flex flex-col justify-between overflow-hidden">
        {/* Messages List */}
        <div className="p-4 md:p-6 space-y-6 overflow-y-auto max-h-[600px]">
          {messages.map((msg) => {
            const isUser = msg.role === "user";

            return (
              <div
                key={msg.id}
                className={`flex items-start gap-3.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Avatar */}
                <div
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-2xl text-xs font-bold shadow-sm ${
                    isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
                  }`}
                >
                  {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[85%] md:max-w-[75%] space-y-1 ${isUser ? "items-end" : "items-start"}`}
                >
                  <div className="flex items-center gap-2 px-1 text-[11px] text-muted-foreground">
                    <span className="font-semibold">{isUser ? "Siz" : "AI Ustoz"}</span>
                    <span>•</span>
                    <span>{msg.timestamp}</span>
                    {msg.source && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                        Darslik & PDF Bazasi (Limitsiz)
                      </span>
                    )}
                  </div>

                  <div
                    className={`group relative rounded-3xl p-4 md:p-5 text-xs md:text-sm leading-relaxed shadow-sm transition-all ${
                      isUser
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-background border border-border text-foreground rounded-tl-none"
                    }`}
                  >
                    {/* Render message with line breaks and markdown format */}
                    <div className="whitespace-pre-wrap leading-relaxed space-y-2">
                      {msg.content}
                    </div>

                    {/* Copy action for assistant */}
                    {!isUser && (
                      <div className="mt-3 flex items-center justify-end border-t border-border/40 pt-2">
                        <button
                          onClick={() => handleCopy(msg.id, msg.content)}
                          className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {copiedId === msg.id ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-500" />
                              <span className="text-emerald-500">Nusxa olindi!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              <span>Nusxa olish</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex items-start gap-3.5 animate-in fade-in duration-150">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-sm">
                <Bot className="h-4 w-4 animate-pulse" />
              </div>
              <div className="rounded-3xl rounded-tl-none border border-primary/30 bg-primary/5 p-3.5 shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-primary">
                  <Zap className="h-3.5 w-3.5 animate-bounce text-amber-500" />
                  <span>Tezkor ilmiy tahlil va javob tayyorlanmoqda...</span>
                </div>
                <div className="flex gap-1.5 pt-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Input Bar */}
        <div className="border-t border-border bg-background/50 p-4 md:p-5 backdrop-blur-md">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-3"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                placeholder="Savolingizni kiriting (masalan: DNK formulalari, Kurs ishi rejasi, Present Perfect qoidalari)..."
                disabled={isLoading}
                className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-xs md:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !inputPrompt.trim()}
              className="flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-xs md:text-sm font-bold text-primary-foreground shadow-glow transition-all hover:bg-primary/90 hover:scale-105 disabled:opacity-40 disabled:pointer-events-none"
            >
              <Send className="h-4 w-4" />
              <span className="hidden sm:inline">Yuborish</span>
            </button>
          </form>

          <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground px-1">
            <span>
              Tanlangan soha:{" "}
              <strong>{CATEGORIES.find((c) => c.id === selectedCategory)?.label}</strong>
            </span>
            <span>Enter tugmasi orqali yuboring</span>
          </div>
        </div>
      </div>
    </div>
  );
}
