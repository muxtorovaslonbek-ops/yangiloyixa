import {
  askAiTeacherServerFn,
  type AskAiTeacherInput,
  type AskAiTeacherOutput,
} from "@/functions/aiTeacher";

export async function askAiTeacher(input: AskAiTeacherInput): Promise<AskAiTeacherOutput> {
  try {
    const res = await askAiTeacherServerFn({
      data: input,
    });
    return res;
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Noma'lum xatolik";
    console.error("AI Teacher invocation error:", errMsg);
    return {
      success: false,
      response:
        "Kechirasiz, sun'iy intellekt xizmatiga ulanishda vaqtinchalik muammo yuz berdi. Iltimos, qaytadan urinib ko'ring.",
      source: "knowledge_base",
      error: errMsg,
    };
  }
}
