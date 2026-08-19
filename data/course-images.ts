import type { LanguageSlug } from "@/data/language-courses";

const imageSets: Record<LanguageSlug, Record<"foundation" | "conversation" | "exam", string>> = {
  english: {
    foundation: "/images/generated/courses/english-foundation.png",
    conversation: "/images/generated/courses/english-business.png",
    exam: "/images/generated/courses/english-exam-prep.png",
  },
  french: {
    foundation: "/images/generated/courses/french-foundation.png",
    conversation: "/images/generated/courses/french-conversation.png",
    exam: "/images/generated/courses/french-delf-prep.png",
  },
  japanese: {
    foundation: "/images/generated/courses/japanese-foundation.png",
    conversation: "/images/generated/courses/japanese-conversation.png",
    exam: "/images/generated/courses/japanese-jlpt-prep.png",
  },
  korean: {
    foundation: "/images/generated/courses/korean-foundation.png",
    conversation: "/images/generated/courses/korean-conversation.png",
    exam: "/images/generated/courses/korean-topik-prep.png",
  },
};

const courseImageOverrides: Record<string, string> = {
  "english/foundation-2": "/images/generated/courses-v2/english-foundation-2.webp",
  "english/intermediate-1": "/images/generated/courses-v2/english-intermediate-1.webp",
  "english/intermediate-2": "/images/generated/courses-v2/english-intermediate-2.webp",
  "english/advanced-communication": "/images/generated/courses-v2/english-advanced-communication.webp",
  "english/speaking-workshop": "/images/generated/courses-v2/english-speaking-workshop.webp",
  "french/a1-2": "/images/generated/courses-v2/french-a1-2.webp",
  "french/a2": "/images/generated/courses-v2/french-a2.webp",
  "french/b2": "/images/generated/courses-v2/french-b2.webp",
  "japanese/elementary": "/images/generated/courses-v2/japanese-elementary.webp",
  "japanese/pre-intermediate": "/images/generated/courses-v2/japanese-pre-intermediate.webp",
  "japanese/upper-intermediate": "/images/generated/courses-v2/japanese-upper-intermediate.webp",
  "korean/elementary-1": "/images/generated/courses-v2/korean-elementary-1.webp",
  "korean/elementary-2": "/images/generated/courses-v2/korean-elementary-2.webp",
  "korean/intermediate-2": "/images/generated/courses-v2/korean-intermediate-2.webp",
};

export function getCourseImage(language: string, slug: string) {
  const override = courseImageOverrides[`${language}/${slug}`];
  if (override) return override;

  const languageKey = language as LanguageSlug;
  const images = imageSets[languageKey] ?? imageSets.english;

  if (/ielts|delf|jlpt|topik/.test(slug)) return images.exam;

  if (
    language === "english" &&
    /intermediate|advanced|speaking|business/.test(slug)
  ) {
    return images.conversation;
  }

  if (language === "french" && !/^a1/.test(slug)) {
    return images.conversation;
  }

  if (
    (language === "japanese" || language === "korean") &&
    /intermediate/.test(slug)
  ) {
    return images.conversation;
  }

  return images.foundation;
}
