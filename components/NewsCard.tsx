import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/data/site";

type NewsCardItem = Pick<
  NewsItem,
  "slug" | "date" | "category" | "title" | "summary" | "image"
>;

const fallbackImages: Record<string, string> = {
  中心活动: "/images/student-collaboration.png",
  语言社群: "/images/student-discussion.jpg",
  课程动态: "/images/language-class.png",
  文化体验: "/images/classroom-students.jpg",
  公开课: "/images/modern-classroom.jpg",
  教学研讨: "/images/meeting-room.jpg",
  学员活动: "/images/student-collaboration.png",
  教学服务: "/images/learning-consultation.png",
  学习支持: "/images/study-desk.jpg",
  专题工作坊: "/images/language-class.png",
  定制培训: "/images/meeting-room.jpg",
  中心记忆: "/images/classroom-students.jpg",
  通知公告: "/images/library-hero.png",
};

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
  const image = item.image || fallbackImages[item.category] || "/images/student-collaboration.png";

  return (
    <article className="group border-t border-slate-200 py-6">
      <div className="grid gap-5 sm:grid-cols-[132px_112px_1fr_auto] sm:items-start">
        <Link
          href={href}
          className="relative aspect-[4/3] overflow-hidden bg-[#0b2f5b]"
          aria-label={`${readLabel} ${item.title}`}
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, 132px"
          />
        </Link>
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
