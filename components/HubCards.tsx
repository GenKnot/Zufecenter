import Image from "next/image";
import Link from "next/link";
import type { ContentPage } from "@/data/content";

export function HubCards({
  items,
  basePath,
}: {
  items: ContentPage[];
  basePath: string;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.slug}
          id={item.slug}
          className="group overflow-hidden border border-slate-200 bg-white"
        >
          <Link href={`${basePath}/${item.slug}`} className="block">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0b2f5b]">
              <Image
                src={item.heroImage}
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071f3e]/55 to-transparent" />
            </div>
            <div className="p-7">
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#174f8f]">
                {item.english}
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold transition group-hover:text-[#174f8f]">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                {item.summary}
              </p>
              <span className="mt-7 inline-block text-sm font-semibold text-[#174f8f]">
                查看详情 →
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
