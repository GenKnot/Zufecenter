import Link from "next/link";
import type { NewsItem } from "@/data/site";

export function NewsCard({ item }: { item: NewsItem }) {
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
            <Link href={`/news/${item.slug}`}>{item.title}</Link>
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
            {item.summary}
          </p>
        </div>
        <Link
          href={`/news/${item.slug}`}
          className="mt-1 text-sm text-[#174f8f]"
          aria-label={`阅读${item.title}`}
        >
          阅读 →
        </Link>
      </div>
    </article>
  );
}
