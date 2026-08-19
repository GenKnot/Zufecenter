import Image from "next/image";
import type { ForeignLocale } from "@/data/i18n";

export type FacultyTeamLanguage =
  | "english"
  | "french"
  | "japanese"
  | "korean"
  | "chinese";

type FacultyPhotoLocale = "zh" | ForeignLocale;

const teamImages: Record<FacultyTeamLanguage, string> = {
  english: "/images/generated/faculty/english-team.png",
  french: "/images/generated/faculty/french-team.png",
  japanese: "/images/generated/faculty/japanese-team.png",
  korean: "/images/generated/faculty/korean-team.png",
  chinese: "/images/generated/faculty/chinese-team.png",
};

const captions: Record<FacultyPhotoLocale, string> = {
  zh: "教学团队与共同备课场景示意图",
  en: "Illustrative teaching-team and lesson-planning scene",
  fr: "Scène illustrative de l’équipe pédagogique et de la préparation des cours",
  es: "Escena ilustrativa del equipo docente y la preparación de clases",
  ja: "講師チームと授業準備を示すイメージ",
  ko: "강사진과 공동 수업 준비를 보여 주는 예시 이미지",
};

export function FacultyTeamPhoto({
  language,
  locale,
}: {
  language: FacultyTeamLanguage;
  locale: FacultyPhotoLocale;
}) {
  return (
    <figure className="mb-12">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#0b2f5b]">
        <Image
          src={teamImages[language]}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1200px"
        />
      </div>
      <figcaption className="mt-3 text-xs leading-6 text-slate-400">
        {captions[locale]}
      </figcaption>
    </figure>
  );
}
