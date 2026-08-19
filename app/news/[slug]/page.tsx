import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { illustrativeNewsSlugs, news } from "@/data/site";
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
      <section className="relative isolate overflow-hidden bg-[#f7f5f0] py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 right-[-6%] hidden h-[115%] w-[54%] opacity-30 lg:block"
        >
          <Image
            src="/images/generated/news-header-editorial-ornament.png"
            alt=""
            fill
            className="object-contain object-right-bottom mix-blend-multiply"
            sizes="54vw"
          />
        </div>
        <div className="shell relative z-10 max-w-6xl">
          <div className="max-w-4xl">
            <Link href="/news" className="text-sm text-[#174f8f]">
              ← 返回新闻动态
            </Link>
            <p className="mt-10 text-xs tracking-[0.14em] text-slate-400">
              {item.category} · {item.date}
            </p>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#11233e] sm:text-5xl">
              {item.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-500">
              {item.summary}
            </p>
          </div>
        </div>
      </section>
      <article className="shell max-w-4xl py-20">
        <div className="relative aspect-[16/9] overflow-hidden bg-[#0b2f5b]">
          <Image
            src={item.image || newsImages[item.category] || "/images/student-collaboration.png"}
            alt={item.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <p className="mt-3 text-xs leading-6 text-slate-400">
          {illustrativeNewsSlugs.has(item.slug)
            ? "活动场景示意图（非历史现场照片）"
            : `${item.category} · 语言学习与交流场景`}
        </p>
        <div className="prose-page mt-12">
          {item.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {item.source && (
            <p className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
              来源：{" "}
              <a
                href={item.source.href}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#174f8f] underline decoration-[#c99b48]/60 underline-offset-4"
              >
                {item.source.label} ↗
              </a>
            </p>
          )}
          <p className="mt-10 border-l-2 border-[#c99b48] pl-5 text-sm text-slate-500">
            课程、公开课与语言文化活动信息会持续发布在新闻动态中，也可通过电话或邮箱咨询近期安排。
          </p>
        </div>
        {item.gallery && item.gallery.length > 0 && (
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {item.gallery.map((photo) => (
              <figure key={photo.src}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0b2f5b]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 440px"
                  />
                </div>
                <figcaption className="mt-3 text-xs leading-6 text-slate-400">
                  {photo.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </article>
    </>
  );
}
