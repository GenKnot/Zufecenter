import Image from "next/image";
import Link from "next/link";
import type { ContentPage } from "@/data/content";

export function HubCards({
  items,
  basePath,
  compact = false,
}: {
  items: ContentPage[];
  basePath: string;
  compact?: boolean;
}) {
  return (
    <div
      className={
        compact
          ? "grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 xl:grid-cols-4"
          : "grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      }
    >
      {items.map((item, index) => {
        // 末尾孤卡横跨整行、改为图左文右，避免拼格网格空出整块底色。
        const wide =
          compact && index === items.length - 1 && items.length % 4 === 1;

        return (
          <article
            key={item.slug}
            id={item.slug}
            className={`group overflow-hidden bg-white ${
              compact ? "" : "border border-slate-200"
            } ${wide ? "md:col-span-2 xl:col-span-4" : ""}`}
          >
            <Link
              href={`${basePath}/${item.slug}`}
              className={
                wide ? "block md:grid md:grid-cols-[0.42fr_0.58fr]" : "block"
              }
            >
              <div
                className={`relative overflow-hidden bg-[#0b2f5b] ${
                  wide
                    ? "aspect-[16/10] md:aspect-auto md:h-full md:min-h-[250px]"
                    : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={item.heroImage}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes={
                    wide
                      ? "(max-width: 768px) 100vw, 42vw"
                      : compact
                        ? "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        : "(max-width: 768px) 100vw, 33vw"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071f3e]/55 to-transparent" />
              </div>
              <div
                className={`${compact ? "p-6" : "p-7"} ${
                  wide ? "md:flex md:flex-col md:justify-center md:p-9" : ""
                }`}
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#174f8f]">
                  {item.english}
                </p>
                <h2
                  className={`mt-3 font-serif font-semibold transition group-hover:text-[#174f8f] ${
                    compact ? "text-xl" : "text-2xl"
                  }`}
                >
                  {item.title}
                </h2>
                <p
                  className={`mt-4 text-sm leading-7 text-slate-500 ${
                    wide ? "md:max-w-xl" : ""
                  }`}
                >
                  {item.summary}
                </p>
                <span className="mt-7 inline-block text-sm font-semibold text-[#174f8f]">
                  查看详情 →
                </span>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
