import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "@/data/site";
import { createPageMetadata } from "@/lib/site-metadata";

const newsImages: Record<string, string> = {
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

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);
  return item
    ? createPageMetadata(item.title, item.summary, `/news/${slug}`)
    : {};
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <section className="bg-[#f7f5f0] py-20">
        <div className="shell max-w-4xl">
          <Link href="/news" className="text-sm text-[#174f8f]">
            ← 返回新闻动态
          </Link>
          <p className="mt-10 text-xs tracking-[0.14em] text-slate-400">
            {item.category} · {item.date}
          </p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#11233e] sm:text-5xl">
            {item.title}
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-500">
            {item.summary}
          </p>
        </div>
      </section>
      <article className="shell max-w-4xl py-20">
        <div className="relative aspect-[16/9] overflow-hidden bg-[#0b2f5b]">
          <Image
            src={newsImages[item.category] || "/images/student-collaboration.png"}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <p className="mt-3 text-xs leading-6 text-slate-400">
          {item.category} · 语言学习与交流场景
        </p>
        <div className="prose-page mt-12">
          {item.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="mt-10 border-l-2 border-[#c99b48] pl-5 text-sm text-slate-500">
            课程、公开课与语言文化活动信息会持续发布在新闻动态中，也可通过电话或邮箱咨询近期安排。
          </p>
        </div>
      </article>
    </>
  );
}
