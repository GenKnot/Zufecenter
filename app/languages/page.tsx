import { PageHero } from "@/components/PageHero";
import { HubCards } from "@/components/HubCards";
import { languagePages } from "@/data/content";
import {
  coursesByLanguage,
  type LanguageSlug,
} from "@/data/language-courses";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata(
  "语种课程",
  "英语、法语、日语、韩语共二十六个分级与专项班型，覆盖零基础、进阶应用及考试训练。",
  "/languages",
);

export default function LanguagesPage() {
  return (
    <>
      <PageHero
        eyebrow="LANGUAGE PROGRAMS"
        title="四种语言，二十六条通往世界的进阶路径"
        description="从零基础、初级、中级到高级应用与考试专项，每个语种都有清晰的班级层级、阶段目标和衔接方向。"
        image="/images/section-heroes/language-programs-hero.jpg"
      />
      <section className="border-b border-slate-200 bg-[#f7f5f0]">
        <div className="shell grid grid-cols-2 lg:grid-cols-4">
          {languagePages.map((language) => {
            const count = coursesByLanguage(
              language.slug as LanguageSlug,
            ).length;
            return (
              <a
                key={language.slug}
                href={`#${language.slug}`}
                className="border-b border-r border-slate-200 px-5 py-8 lg:border-b-0 lg:px-8"
              >
                <strong className="font-serif text-3xl text-[#0b2f5b]">
                  {count}
                </strong>
                <span className="ml-2 text-xs text-slate-500">
                  个{language.title.replace("课程", "")}班型
                </span>
              </a>
            );
          })}
        </div>
      </section>
      <section className="py-24">
        <div className="shell">
          <div className="mb-12 max-w-3xl">
            <span className="eyebrow">Choose a language</span>
            <h2 className="section-title">选择一种语言，开启一段有方向的进阶</h2>
            <p className="section-copy">
              从兴趣与目标出发，再结合现有基础、每周可投入时间和未来使用场景选择班型。拿不准时，也可以通过入学沟通找到合适起点。
            </p>
          </div>
          <HubCards items={languagePages} basePath="/languages" />
        </div>
      </section>
    </>
  );
}
