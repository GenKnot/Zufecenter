import { PageHero } from "@/components/PageHero";
import { NewsCard } from "@/components/NewsCard";
import { news } from "@/data/site";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata(
  "新闻动态",
  "浏览中心自 2015 年以来的课程动态、教学研讨、语言活动与学习故事。",
  "/news",
);

export default function NewsPage() {
  const years = [...new Set(news.map((item) => item.date.slice(0, 4)))];
  const yearGroups = years.map((year) => ({
    year,
    items: news.filter((item) => item.date.startsWith(year)),
  }));

  return (
    <>
      <PageHero
        eyebrow="NEWS & STORIES"
        title="记录每一次出发，也珍藏每一段成长"
        description="从 2015 年至今，课程动态、教学研讨、语言活动与中心记忆共同勾勒出十一年的语言教育日常。"
        image="/images/section-heroes/news-hero.jpg"
      />
      <section className="py-24">
        <div className="shell grid gap-14 lg:grid-cols-[180px_1fr]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-xs font-semibold tracking-[0.15em] text-slate-400">
              按年份浏览
            </p>
            <nav className="mt-5 flex flex-wrap gap-2 lg:grid">
              {years.map((year) => (
                <a
                  key={year}
                  href={`#year-${year}`}
                  className="border border-slate-200 px-4 py-2 text-sm text-slate-600 transition hover:border-[#c99b48] hover:text-[#174f8f]"
                >
                  {year}
                </a>
              ))}
            </nav>
          </aside>
          <div className="space-y-16">
            {yearGroups.map((group) => (
              <section
                key={group.year}
                id={`year-${group.year}`}
                className="scroll-mt-8"
              >
                <div className="mb-4 flex items-end gap-4">
                  <h2 className="font-serif text-4xl font-semibold text-[#0b2f5b]">
                    {group.year}
                  </h2>
                  <span className="pb-1 text-xs text-slate-400">
                    {group.items.length} 条记录
                  </span>
                </div>
                {group.items.map((item) => (
                  <NewsCard key={item.slug} item={item} />
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
