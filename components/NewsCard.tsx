import Link from "next/link";
import type { NewsItem } from "@/data/site";

type NewsCardItem = Pick<NewsItem, "slug" | "date" | "category" | "title" | "summary">;

export function NewsCard({
  item,
  prefix = "",
  readLabel = "阅读",
}: {
  item: NewsCardItem;
  prefix?: string;
  readLabel?: string;
}) {
  const href = `${prefix}/news/${item.slug}`;

  return (
    <article className="group border-t border-slate-200 py-6">
      <div className="grid gap-4 sm:grid-cols-[120px_1fr_auto] sm:items-start">
        <div>
          <time className="font-serif text-xl text-[#174f8f]">
            {item.date.slice(0, 7).replace("-", ".")}
          </time>
          <p className="mt-1 text-xs text-slate-400">{item.category}</p>
        </div>
        <div>
          <h3 className="font-serif text-xl font-semibold leading-8 text-[#11233e] transition group-hover:text-[#174f8f]">
            <Link href={href}>{item.title}</Link>
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
            {item.summary}
          </p>
        </div>
        <Link
          href={href}
          className="mt-1 text-sm text-[#174f8f]"
          aria-label={`${readLabel} ${item.title}`}
        >
          {readLabel} →
        </Link>
      </div>
    </article>
  );
}
