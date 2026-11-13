import { BIOLOGY_VARIANTS } from "@/data/biologyVariantsData";
import { BOTANIKA_TOPICS } from "@/data/botanikaTopics";
import { ENGLISH_VIDEO_LESSONS } from "@/data/englishVideoLessons";

const DEFAULT_MUSTAQIL_TASK_IDS = ["m1", "m2", "m3", "m4", "m5", "m6"] as const;

const VALID_BOTANIKA_IDS = new Set(BOTANIKA_TOPICS.map((topic) => topic.id));
const VALID_ENGLISH_VIDEO_IDS = new Set(ENGLISH_VIDEO_LESSONS.map((lesson) => lesson.id));
const VALID_BIOLOGY_VARIANT_IDS = new Set(BIOLOGY_VARIANTS.map((variant) => String(variant.id)));

export interface StudyProgressInput {
  botanikaIds: string[];
  englishVideoIds: number[];
  mustaqilCompletedIds: string[];
  mustaqilCustomTaskIds: string[];
  bioCompletedVariantIds: string[];
}

export interface StudyProgressSummary {
  overallPercent: number;
  completedLessons: number;
  totalLessons: number;
  activeCoursesCount: number;
  totalCoursesCount: number;
  completedTasks: number;
  totalTasks: number;
  botanikaDone: number;
  botanikaTotal: number;
  englishDone: number;
  englishTotal: number;
  mustaqilDone: number;
  mustaqilTotal: number;
  bioDone: number;
  bioTotal: number;
}

export const DEFAULT_STUDY_PROGRESS_INPUT: StudyProgressInput = {
  botanikaIds: ["bot-1"],
  englishVideoIds: [1],
  mustaqilCompletedIds: ["m1"],
  mustaqilCustomTaskIds: [],
  bioCompletedVariantIds: [],
};

export function calculateStudyProgress(input: StudyProgressInput): StudyProgressSummary {
  const uniqueCustomIds = new Set(
    input.mustaqilCustomTaskIds.filter((id) => typeof id === "string" && id.trim().length > 0),
  );
  const validMustaqilIds = new Set<string>([...DEFAULT_MUSTAQIL_TASK_IDS, ...uniqueCustomIds]);

  const botanikaDone = new Set(input.botanikaIds.filter((id) => VALID_BOTANIKA_IDS.has(id))).size;
  const englishDone = new Set(input.englishVideoIds.filter((id) => VALID_ENGLISH_VIDEO_IDS.has(id)))
    .size;
  const mustaqilDone = new Set(input.mustaqilCompletedIds.filter((id) => validMustaqilIds.has(id)))
    .size;
  const bioDone = new Set(
    input.bioCompletedVariantIds.filter((id) => VALID_BIOLOGY_VARIANT_IDS.has(String(id))),
  ).size;

  const botanikaTotal = BOTANIKA_TOPICS.length;
  const englishTotal = ENGLISH_VIDEO_LESSONS.length;
  const mustaqilTotal = validMustaqilIds.size;
  const bioTotal = BIOLOGY_VARIANTS.length;

  const modules = [
    { done: botanikaDone, total: botanikaTotal },
    { done: englishDone, total: englishTotal },
    { done: mustaqilDone, total: mustaqilTotal },
    { done: bioDone, total: bioTotal },
  ];

  const activeCoursesCount = modules.filter((m) => m.done > 0 && m.done < m.total).length;
  const totalRatio = modules.reduce((sum, m) => sum + (m.total > 0 ? m.done / m.total : 0), 0);
  const overallPercent = Math.min(
    100,
    Math.max(0, Math.round((totalRatio / modules.length) * 100)),
  );

  return {
    overallPercent,
    completedLessons: botanikaDone + englishDone,
    totalLessons: botanikaTotal + englishTotal,
    activeCoursesCount,
    totalCoursesCount: modules.length,
    completedTasks: mustaqilDone + bioDone,
    totalTasks: mustaqilTotal + bioTotal,
    botanikaDone,
    botanikaTotal,
    englishDone,
    englishTotal,
    mustaqilDone,
    mustaqilTotal,
    bioDone,
    bioTotal,
  };
}

export function getDefaultStudyProgress(): StudyProgressSummary {
  return calculateStudyProgress(DEFAULT_STUDY_PROGRESS_INPUT);
}

function safeParseJson<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function readStudyProgressFromStorage(): StudyProgressSummary {
  if (typeof window === "undefined" || typeof window.localStorage === "undefined") {
    return getDefaultStudyProgress();
  }

  try {
    const rawBotanika = safeParseJson<unknown>(localStorage.getItem("eduuni_botanika_completed"));
    const botanikaIds = Array.isArray(rawBotanika)
      ? rawBotanika.filter((x): x is string => typeof x === "string")
      : DEFAULT_STUDY_PROGRESS_INPUT.botanikaIds;

    const rawEnglish = safeParseJson<unknown>(
      localStorage.getItem("eduuni_completed_video_lessons"),
    );
    const englishVideoIds = Array.isArray(rawEnglish)
      ? rawEnglish.filter((x): x is number => typeof x === "number")
      : DEFAULT_STUDY_PROGRESS_INPUT.englishVideoIds;

    const rawCustomTasks = safeParseJson<unknown>(
      localStorage.getItem("eduuni_mustaqil_custom_tasks"),
    );
    const mustaqilCustomTaskIds = Array.isArray(rawCustomTasks)
      ? rawCustomTasks
          .map((item) =>
            item && typeof item === "object" && "id" in item && typeof item.id === "string"
              ? item.id
              : null,
          )
          .filter((id): id is string => id !== null)
      : [];

    const rawMustaqilCompleted = safeParseJson<unknown>(
      localStorage.getItem("eduuni_mustaqil_completed"),
    );
    const mustaqilCompletedIds = Array.isArray(rawMustaqilCompleted)
      ? rawMustaqilCompleted.filter((x): x is string => typeof x === "string")
      : DEFAULT_STUDY_PROGRESS_INPUT.mustaqilCompletedIds;

    const rawBioResults = safeParseJson<unknown>(localStorage.getItem("eduuni_bio_results"));
    const bioCompletedVariantIds =
      rawBioResults && typeof rawBioResults === "object" && !Array.isArray(rawBioResults)
        ? Object.keys(rawBioResults as Record<string, unknown>)
        : [];

    return calculateStudyProgress({
      botanikaIds,
      englishVideoIds,
      mustaqilCompletedIds,
      mustaqilCustomTaskIds,
      bioCompletedVariantIds,
    });
  } catch {
    return getDefaultStudyProgress();
  }
}
