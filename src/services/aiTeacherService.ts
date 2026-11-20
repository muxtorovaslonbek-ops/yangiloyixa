import { answerWithLocalTeacher, ensurePdfCorpusLoaded } from "@/lib/aiKnowledgeEngine";

export interface ChatMessage {
  id: string;
  role: "user" | "model" | "assistant";
  content: string;
  timestamp: string;
  category?: string;
}

export interface AskAiTeacherInput {
  prompt: string;
  category?: string;
  history?: Array<{ role: string; content: string }>;
}

export interface AskAiTeacherOutput {
  success: boolean;
  response: string;
  source: "gemini" | "knowledge_base";
  error?: string;
}

/**
 * 100% Client-Side, Zero-Token, Zero-AI-API Academic Search & Synthesis Engine.
 * Works natively on static Vercel deployments without any backend server function or external API calls.
 */
export async function askAiTeacher(input: AskAiTeacherInput): Promise<AskAiTeacherOutput> {
  try {
    // Ensure the 119-PDF static corpus is loaded in memory (0ms once cached; bounded timeout so UI never hangs)
    await Promise.race([
      ensurePdfCorpusLoaded(),
      new Promise<boolean>((resolve) => setTimeout(() => resolve(false), 1800)),
    ]);

    const response = answerWithLocalTeacher(input.prompt, input.category, input.history);
    return {
      success: true,
      response,
      source: "knowledge_base",
    };
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Noma'lum xatolik";
    console.error("Local AI Teacher error:", errMsg);
    return {
      success: false,
      response:
        "Kechirasiz, mahalliy darslik bazasidan qidirishda kutilmagan xatolik yuz berdi. Iltimos, savolingizni qaytadan yuboring.",
      source: "knowledge_base",
      error: errMsg,
    };
  }
}
