import Link from "next/link";
import { news } from "@/data/site";
import { englishNews } from "@/data/english-news";
import { frNews } from "@/data/fr-news";
import { esNews } from "@/data/es-news";
import { jaNews } from "@/data/ja-news";
import { koNews } from "@/data/ko-news";
import { wuXinMilestones, wuXinProfileCopy, type WuXinLocale } from "@/data/wuxin-profile";

const newsSlugs = [
  "2026-wuxin-zhejiang-finance-forum",
  "2025-wuxin-qiantang-research",
  "2024-wuxin-finance-french-lecture",
];

export function WuXinProfile({ locale = "zh" }: { locale?: WuXinLocale }) {
  const copy = wuXinProfileCopy[locale];
  const prefix = locale === "zh" ? "" : `/${locale}`;
  const localizedNews = locale === "en" ? englishNews : locale === "fr" ? frNews : locale === "es" ? esNews : locale === "ja" ? jaNews : locale === "ko" ? koNews : news;
  const articles = newsSlugs.map((slug) => localizedNews.find((item) => item.slug === slug)).filter(Boolean);

  return (
    <section className="bg-[#f7f5f0] py-24">
      <div className="shell">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h2 className="section-title">{copy.title}</h2>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5 text-sm leading-8 text-slate-600">
            {copy.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#11233e]">{copy.rolesTitle}</h3>
              <ul className="mt-5 space-y-3">
                {copy.roles.map((role) => <li key={role} className="border-l-2 border-[#c99b48] pl-4 text-sm leading-7 text-slate-600">{role}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#11233e]">{copy.focusTitle}</h3>
              <ul className="mt-5 space-y-3">
                {copy.focus.map((focus) => <li key={focus} className="border-l-2 border-[#174f8f] pl-4 text-sm leading-7 text-slate-600">{focus}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-slate-300 pt-14">
          <h3 className="font-serif text-3xl font-semibold text-[#11233e]">{copy.recordTitle}</h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">{copy.recordIntro}</p>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200 bg-white">
            {wuXinMilestones.map((item) => (
              <article key={`${item.date}-${item.href}`} className="grid gap-3 px-6 py-5 sm:grid-cols-[120px_1fr_auto] sm:items-center">
                <time className="font-serif text-lg text-[#174f8f]">{item.date}</time>
                <p className="text-sm leading-7 text-slate-700">{item.title}</p>
                <a href={item.href} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#174f8f]">{copy.sourceLabel} ↗</a>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="font-serif text-3xl font-semibold text-[#11233e]">{copy.newsTitle}</h3>
          <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-3">
            {articles.map((item) => item && (
              <article key={item.slug} className="flex min-h-64 flex-col bg-white p-7">
                <time className="text-xs font-semibold tracking-[0.12em] text-[#174f8f]">{item.date}</time>
                <h4 className="mt-5 font-serif text-xl font-semibold leading-8 text-[#11233e]">{item.title}</h4>
                <Link href={`${prefix}/news/${item.slug}`} className="mt-auto pt-8 text-sm font-semibold text-[#174f8f]">{copy.newsLabel} →</Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
