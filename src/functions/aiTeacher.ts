import { createServerFn } from "@tanstack/react-start";
import type {
  AskAiTeacherInput,
  AskAiTeacherOutput,
  ChatMessage,
} from "@/services/aiTeacherService";

export type { AskAiTeacherInput, AskAiTeacherOutput, ChatMessage };

// Retained only for backward compatibility; the web app invokes askAiTeacher() 100% client-side with zero tokens/API calls.
export const askAiTeacherServerFn = createServerFn({ method: "POST" })
  .validator((data: AskAiTeacherInput) => data)
  .handler(async ({ data }): Promise<AskAiTeacherOutput> => {
    const { answerWithLocalTeacher } = await import("@/lib/aiKnowledgeEngine");
    const response = answerWithLocalTeacher(data.prompt, data.category, data.history);
    return {
      success: true,
      response,
      source: "knowledge_base",
    };
  });
