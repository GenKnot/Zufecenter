import {
  additionalFacultyByLanguage,
  type AdditionalFacultyLanguage,
} from "@/data/additional-faculty-profiles";
import { FacultyTeamPhoto } from "@/components/FacultyTeamPhoto";

const languageNames: Record<
  AdditionalFacultyLanguage,
  { zh: string; en: string }
> = {
  english: { zh: "英语", en: "English" },
  japanese: { zh: "日语", en: "Japanese" },
  korean: { zh: "韩语", en: "Korean" },
  chinese: { zh: "国际中文", en: "Mandarin Chinese" },
};

export function FacultyProfilesGrid({
  language,
  locale,
}: {
  language: AdditionalFacultyLanguage;
  locale: "zh" | "en";
}) {
  const profiles = additionalFacultyByLanguage(language);
  const languageName = languageNames[language][locale];

  return (
    <section className="bg-[#f7f5f0] py-24">
      <div className="shell">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">
            {locale === "zh" ? "FACULTY MEMBERS" : "FACULTY MEMBERS"}
          </span>
          <h2 className="section-title">
            {locale === "zh"
              ? `${languageName}教师团队`
              : `${languageName} Faculty`}
          </h2>
          <p className="section-copy">
            {locale === "zh"
              ? `本页展示 ${profiles.length} 位${languageName}教师的教育背景、教学经验与专业方向。`
              : `Meet ${profiles.length} ${languageName} instructors and explore their education, teaching experience and specialist areas.`}
          </p>
        </div>

        <FacultyTeamPhoto language={language} locale={locale} />

        <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-2">
          {profiles.map((profile, index) => (
            <article key={profile.name} className="min-h-[430px] bg-white p-8 sm:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#174f8f]">
                    {profile.school}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#11233e]">
                    {profile.name}
                  </h3>
                </div>
                <span className="font-serif text-sm text-[#c99b48]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-7 text-sm font-semibold text-[#a77c31]">
                {profile.experience[locale]}
              </p>
              <p className="mt-5 text-sm leading-8 text-slate-600">
                {profile.bio[locale]}
              </p>

              <div className="mt-7 border-t border-slate-100 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {locale === "zh" ? "教学方向" : "Teaching focus"}
                </p>
                <p className="mt-2 text-sm font-semibold leading-7 text-slate-700">
                  {profile.focus[locale]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
