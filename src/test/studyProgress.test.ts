import { describe, expect, it } from "vitest";
import { BOTANIKA_TOPICS } from "@/data/botanikaTopics";
import { ENGLISH_VIDEO_LESSONS } from "@/data/englishVideoLessons";
import { BIOLOGY_VARIANTS } from "@/data/biologyVariantsData";
import { calculateStudyProgress, getDefaultStudyProgress } from "@/utils/studyProgress";

describe("calculateStudyProgress", () => {
  it("computes accurate baseline progress from default starter completions", () => {
    const progress = getDefaultStudyProgress();
    expect(progress.botanikaTotal).toBe(30);
    expect(progress.englishTotal).toBe(180);
    expect(progress.mustaqilTotal).toBe(6);
    expect(progress.bioTotal).toBe(30);
    expect(progress.completedLessons).toBe(2);
    expect(progress.activeCoursesCount).toBe(3);
    expect(progress.completedTasks).toBe(1);
    expect(progress.overallPercent).toBe(5);
  });

  it("updates metrics dynamically when completing lessons, tasks, and biology tests", () => {
    const progress = calculateStudyProgress({
      botanikaIds: ["bot-1", "bot-2", "bot-3", "bot-4", "bot-5", "bot-6"], // 6 / 30 = 20%
      englishVideoIds: [1, 2, 3, 4, 5, 6, 7, 8, 9], // 9 / 180 = 5%
      mustaqilCompletedIds: ["m1", "m2", "m3"], // 3 / 6 = 50%
      mustaqilCustomTaskIds: [],
      bioCompletedVariantIds: ["1", "2", "3", "4", "5", "6"], // 6 / 30 = 20%
    });

    expect(progress.completedLessons).toBe(15);
    expect(progress.activeCoursesCount).toBe(4);
    expect(progress.completedTasks).toBe(9);
    // Average of (20% + 5% + 50% + 20%) / 4 = 23.75% -> 24%
    expect(progress.overallPercent).toBe(24);
  });

  it("returns 100% and 0 in-progress courses when all curriculum modules are completed", () => {
    const progress = calculateStudyProgress({
      botanikaIds: BOTANIKA_TOPICS.map((t) => t.id),
      englishVideoIds: ENGLISH_VIDEO_LESSONS.map((v) => v.id),
      mustaqilCompletedIds: ["m1", "m2", "m3", "m4", "m5", "m6"],
      mustaqilCustomTaskIds: [],
      bioCompletedVariantIds: BIOLOGY_VARIANTS.map((b) => String(b.id)),
    });

    expect(progress.completedLessons).toBe(210);
    expect(progress.completedTasks).toBe(36);
    expect(progress.activeCoursesCount).toBe(0);
    expect(progress.overallPercent).toBe(100);
  });

  it("ignores invalid or duplicate IDs and handles empty state cleanly", () => {
    const empty = calculateStudyProgress({
      botanikaIds: ["invalid-id", "bot-999"],
      englishVideoIds: [-5, 9999],
      mustaqilCompletedIds: ["nonexistent"],
      mustaqilCustomTaskIds: [],
      bioCompletedVariantIds: ["999"],
    });

    expect(empty.completedLessons).toBe(0);
    expect(empty.activeCoursesCount).toBe(0);
    expect(empty.completedTasks).toBe(0);
    expect(empty.overallPercent).toBe(0);
  });
});
