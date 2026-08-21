import type { LanguageSlug } from "@/data/language-courses";

const imageSets: Record<LanguageSlug, Record<"foundation" | "conversation" | "exam", string>> = {
  english: {
    foundation: "/images/library/courses/english-foundation.png",
    conversation: "/images/library/courses/english-business.png",
    exam: "/images/library/courses/english-exam-prep.png",
  },
  french: {
    foundation: "/images/library/courses/french-foundation.png",
    conversation: "/images/library/courses/french-conversation.png",
    exam: "/images/library/courses/french-delf-prep.png",
  },
  japanese: {
    foundation: "/images/library/courses/japanese-foundation.png",
    conversation: "/images/library/courses/japanese-conversation.png",
    exam: "/images/library/courses/japanese-jlpt-prep.png",
  },
  korean: {
    foundation: "/images/library/courses/korean-foundation.png",
    conversation: "/images/library/courses/korean-conversation.png",
    exam: "/images/library/courses/korean-topik-prep.png",
  },
};

const courseImageOverrides: Record<string, string> = {
  "english/foundation-2": "/images/library/courses/english-foundation-2.webp",
  "english/intermediate-1": "/images/library/courses/english-intermediate-1.webp",
  "english/intermediate-2": "/images/library/courses/english-intermediate-2.webp",
  "english/advanced-communication": "/images/library/courses/english-advanced-communication.webp",
  "english/speaking-workshop": "/images/library/courses/english-speaking-workshop.webp",
  "french/a1-2": "/images/library/courses/french-a1-2.webp",
  "french/a2": "/images/library/courses/french-a2.webp",
  "french/b2": "/images/library/courses/french-b2.webp",
  "japanese/elementary": "/images/library/courses/japanese-elementary.webp",
  "japanese/pre-intermediate": "/images/library/courses/japanese-pre-intermediate.webp",
  "japanese/upper-intermediate": "/images/library/courses/japanese-upper-intermediate.webp",
  "korean/elementary-1": "/images/library/courses/korean-elementary-1.webp",
  "korean/elementary-2": "/images/library/courses/korean-elementary-2.webp",
  "korean/intermediate-2": "/images/library/courses/korean-intermediate-2.webp",
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
