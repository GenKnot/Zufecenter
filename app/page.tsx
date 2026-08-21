import Image from "next/image";
import Link from "next/link";
import { HomeHero, type HeroSlide } from "@/components/HomeHero";
import { NewsCard } from "@/components/NewsCard";
import {
  languagePages,
  practicePages,
  programPages,
  resourcePages,
} from "@/data/content";
import { news } from "@/data/site";
import { selectHomepageNews } from "@/data/news-utils";
import {
  currentOfferings,
  currentTerm,
  upcomingActivities,
} from "@/data/operations";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata(
  "英语法语日语韩语课程与培训",
  "浙江财经大学语言中心提供英语、法语、日语、韩语分级课程、考试升学辅导、商务职业语言、青少年课程与企业定制培训。",
  "/",
);

const stats = [
  { value: "11", label: "年教学与服务经验" },
  { value: "13,000+", label: "累计服务学员" },
  { value: "4", label: "核心语种方向" },
  { value: "26", label: "分级与专项班型" },
];

/*
  首屏轮播的五幕。

  选图来自 output/website-image-library：空镜、远景、背影，没有正脸。
  人物的脸、手和牙齿最容易露馅，与其把人做得更真，不如不拍人；
  阴天与荧光灯混光、墙面磨损、椅子不成套这些"普通"的细节反而带来可信度。
  六张候选的左三分之一平均亮度都在 140 以下，白色标题压上去稳得住。

  每一幕的图和文案对应：总起用校园林荫路，起步用普通教室，
  备考用图书馆自习区，表达用教学走廊，长期用书架纵深。
*/
const heroSlides: HeroSlide[] = [
  {
    image: "/images/campus/01-hero-campus-tree-walkway.webp",
    titleTop: "让语言成为",
    titleBottom: "通往更大世界的能力",
    description:
      "英语、法语、日语、韩语，从零基础分级进阶到考试、升学与职业应用，为个人与组织提供有目标、有路径、有反馈的语言学习方案。",
  },
  {
    image: "/images/campus/03-hero-empty-classroom.webp",
    titleTop: "从零基础到",
    titleBottom: "能开口的那一步",
    description:
      "四个语种、二十六个分级与专项班型，每一级都有明确的阶段目标与可见成果，让学习者清楚知道自己在哪里、下一步该练什么。",
  },
  {
    image: "/images/campus/05-hero-library-study-area.webp",
    titleTop: "考试、升学、职业",
    titleBottom: "每条路径都有准备",
    description:
      "雅思、DELF、JLPT、TOPIK 与商务沟通专项，围绕具体目标安排内容与节奏，把有限的备考时间用在真正关键的地方。",
  },
  {
    image: "/images/campus/06-hero-language-center-corridor.webp",
    titleTop: "让每一次表达",
    titleBottom: "都更准确、更自信",
    description:
      "课堂讨论、邮件写作、会议表达与日常交流中反复使用，语言角、工作坊与文化体验让课堂所学真正成为能拿出来用的能力。",
  },
  {
    image: "/images/campus/02-hero-library-aisle.webp",
    titleTop: "把语言教育",
    titleBottom: "做成一件长期的事",
    description:
      "从课程设计到教学研讨，持续打磨教学方法与反馈机制，服务学生、职场人士及企事业单位的多元学习目标。",
  },
];

const languageMarks: Record<string, string> = {
  english: "EN",
  french: "FR",
  japanese: "日",
  korean: "한",
};

export default function HomePage() {
  const recentNews = selectHomepageNews(news);

  return (
    <>
      <HomeHero slides={heroSlides} />

      <section className="-mt-px bg-[#0b2f5b] text-white">
        <div className="shell grid sm:grid-cols-2 lg:grid-cols-4">
          {languagePages.map((language) => (
            <Link
              key={language.slug}
              href={`/languages/${language.slug}`}
              className="group flex min-h-40 items-center gap-5 border-b border-r border-white/10 p-6 transition hover:bg-white/8 sm:p-7"
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-full border border-[#c99b48]/50 font-serif text-xl text-[#ead7ad]">
                {languageMarks[language.slug]}
              </span>
              <span>
                <strong className="block font-serif text-xl">
                  {language.title}
                </strong>
                <small className="mt-1.5 block text-[10px] uppercase tracking-[0.14em] text-white/45">
                  {language.english}
                </small>
                <span className="mt-3 block text-xs text-white/55 transition group-hover:text-white">
                  课程详情 →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#f7f5f0]">
        <div className="shell grid grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border-r border-slate-200 px-5 py-9 last:border-r-0 lg:px-8"
            >
              <strong className="block font-serif text-3xl text-[#0b2f5b] sm:text-4xl">
                {item.value}
              </strong>
              <span className="mt-2 block text-xs tracking-[0.1em] text-slate-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-24" id="autumn-2026">
        <div className="shell">
          <div className="grid gap-10 border-b border-slate-200 pb-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
            <div>
              <span className="eyebrow">{currentTerm.eyebrow}</span>
              <h2 className="section-title">{currentTerm.title}</h2>
              <p className="section-copy">{currentTerm.summary}</p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-slate-200">
              <div className="bg-[#f7f5f0] p-5">
                <p className="text-[10px] font-semibold tracking-[0.14em] text-slate-400">
                  咨询与测评
                </p>
                <p className="mt-2 text-sm font-semibold text-[#0b2f5b]">
                  {currentTerm.consultationPeriod}
                </p>
              </div>
              <div className="bg-[#f7f5f0] p-5">
                <p className="text-[10px] font-semibold tracking-[0.14em] text-slate-400">
                  秋季教学周期
                </p>
                <p className="mt-2 text-sm font-semibold text-[#0b2f5b]">
                  {currentTerm.teachingPeriod}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {currentOfferings.map((offering) => (
              <Link
                key={offering.code}
                href={offering.href}
                className="group flex min-h-[300px] flex-col border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#c99b48] hover:shadow-[0_18px_45px_rgba(7,31,62,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="rounded-full bg-[#0b2f5b] px-3 py-1.5 text-[10px] font-semibold tracking-[0.12em] text-white">
                      {offering.code}
                    </span>
                    <span className="ml-2 text-xs text-slate-400">
                      {offering.language}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#a77c31]">
                    {offering.status}
                  </span>
                </div>
                <h3 className="mt-7 font-serif text-2xl font-semibold text-[#11233e]">
                  {offering.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {offering.note}
                </p>
                <dl className="mt-auto grid gap-2 border-t border-slate-100 pt-6 text-xs">
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-400">开课</dt>
                    <dd className="font-semibold text-slate-700">{offering.startDate}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-400">时间</dt>
                    <dd className="text-right font-semibold text-slate-700">{offering.schedule}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-400">教学</dt>
                    <dd className="text-right font-semibold text-slate-700">{offering.teacher}</dd>
                  </div>
                </dl>
              </Link>
            ))}
          </div>

          <div className="mt-7 flex flex-col justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
            <p>安排更新于 {currentTerm.updatedAt} · {currentTerm.placement}</p>
            <Link href="/contact" className="font-semibold text-[#174f8f]">
              预约分班与课程咨询 →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div>
            <span className="eyebrow">About us</span>
            <h2 className="section-title">十一年，把语言教育做成一件长期的事</h2>
            <p className="section-copy">
              从最初的英语课程与学习小组，到今天覆盖四个语种、多个级别和应用方向的课程体系，我们始终关注一件事：学过之后，能否更自信、更准确地表达。
            </p>
            <div className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <Link href="/about/history" className="border-l-2 border-[#c99b48] pl-4 py-1">
                中心发展历程 →
              </Link>
              <Link href="/about/approach" className="border-l-2 border-[#c99b48] pl-4 py-1">
                教育理念与方法 →
              </Link>
              <Link href="/about/organization" className="border-l-2 border-[#c99b48] pl-4 py-1">
                教学与组织架构 →
              </Link>
              <Link href="/faculty" className="border-l-2 border-[#c99b48] pl-4 py-1">
                认识教学团队 →
              </Link>
            </div>
          </div>
          <div className="relative min-h-[480px] overflow-hidden bg-[#0b2f5b]">
            <Image
              src="/images/library/sections/home-about-overview.webp"
              alt="多语种教学课堂"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#edf2f6] py-24">
        <div className="shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">Learning pathways</span>
              <h2 className="section-title">每一个学习目标，都有更合适的抵达方式</h2>
              <p className="section-copy">
                打牢基础、准备考试、走向海外课堂、提升职业沟通，或为团队定制培训——目标不同，课程组合与学习节奏也应不同。
              </p>
            </div>
            <Link href="/programs" className="text-sm font-semibold text-[#174f8f]">
              查看全部培训项目 →
            </Link>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
            {programPages.map((program, index) => (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="group min-h-[270px] bg-white p-7 transition hover:bg-[#0b2f5b] hover:text-white"
              >
                <span className="font-serif text-sm text-[#c99b48]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 font-serif text-2xl font-semibold leading-8">
                  {program.title}
                </h3>
                <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-slate-400 group-hover:text-white/45">
                  {program.english}
                </p>
                <p className="mt-5 text-sm leading-7 text-slate-500 group-hover:text-white/66">
                  {program.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell">
          <div className="grid overflow-hidden bg-[#071f3e] text-white lg:grid-cols-[1.04fr_0.96fr]">
            <div className="relative min-h-[520px]">
              <Image
                src="/images/library/sections/home-practice-overview.webp"
                alt="学员小组交流"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
            <div className="p-9 sm:p-14">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ead7ad]">
                Learning in practice
              </span>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight">
                让语言走出课本，进入真实交流
              </h2>
              <p className="mt-5 text-sm leading-8 text-white/62">
                语言辅导、学习社群、文化体验、赛事展示与主题研学，让课堂所学在一次次表达、协作和探索中转化为能力。
              </p>
              <div className="mt-8 divide-y divide-white/12 border-t border-white/12">
                {practicePages.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/practice/${item.slug}`}
                    className="flex items-center justify-between py-4 text-sm text-white/76 transition hover:text-white"
                  >
                    <span>{item.title}</span>
                    <span className="text-[#c99b48]">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071f3e] py-24 text-white">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ead7ad]">
                Upcoming activities
              </p>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                近期活动日历
              </h2>
              <p className="mt-5 max-w-md text-sm leading-8 text-white/62">
                从课程说明、零基础体验到语言社群，新学期先通过一次真实参与找到适合自己的学习方式。
              </p>
              <Link href="/contact" className="mt-8 inline-block text-sm font-semibold text-[#ead7ad]">
                咨询参与方式 →
              </Link>
            </div>
            <div className="divide-y divide-white/12 border-y border-white/12">
              {upcomingActivities.map((activity) => (
                <article
                  key={`${activity.date}-${activity.title}`}
                  className="grid gap-5 py-7 sm:grid-cols-[90px_1fr_auto] sm:items-start"
                >
                  <div>
                    <p className="font-serif text-3xl text-[#ead7ad]">{activity.date}</p>
                    <p className="mt-1 text-xs text-white/42">{activity.day} · {activity.time}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.14em] text-[#c99b48]">
                      {activity.category}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold">{activity.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/58">{activity.summary}</p>
                    <p className="mt-3 text-xs text-white/38">地点：{activity.location}</p>
                  </div>
                  <span className="w-fit border border-[#c99b48]/50 px-3 py-2 text-xs text-[#ead7ad]">
                    {activity.status}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f0] py-24">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-2">
            <Link
              href="/research"
              className="group relative min-h-[440px] overflow-hidden bg-[#0b2f5b] p-9 text-white sm:p-12"
            >
              <Image
                src="/images/library/sections/home-research-overview.webp"
                alt=""
                fill
                className="object-cover opacity-42 transition duration-500 group-hover:scale-[1.03]"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071f3e] via-[#071f3e]/45 to-transparent" />
              <div className="relative flex h-full flex-col justify-end">
                <p className="text-xs uppercase tracking-[0.18em] text-[#ead7ad]">
                  Teaching & Research
                </p>
                <h2 className="mt-3 font-serif text-4xl font-semibold">教学研究</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/68">
                  从课堂问题出发研究方法、更新课程，把十一年的教学经验沉淀为可验证、可延续的专业标准。
                </p>
                <span className="mt-6 text-sm font-semibold">进入栏目 →</span>
              </div>
            </Link>
            <Link
              href="/collaboration"
              className="group relative min-h-[440px] overflow-hidden bg-[#0b2f5b] p-9 text-white sm:p-12"
            >
              <Image
                src="/images/library/sections/home-collaboration-overview.webp"
                alt=""
                fill
                className="object-cover opacity-42 transition duration-500 group-hover:scale-[1.03]"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071f3e] via-[#071f3e]/45 to-transparent" />
              <div className="relative flex h-full flex-col justify-end">
                <p className="text-xs uppercase tracking-[0.18em] text-[#ead7ad]">
                  Collaboration
                </p>
                <h2 className="mt-3 font-serif text-4xl font-semibold">合作交流</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/68">
                  与高校、企业及国际伙伴共同设计语言项目，让课程回应校园发展、岗位能力与跨文化交流需求。
                </p>
                <span className="mt-6 text-sm font-semibold">进入栏目 →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <span className="eyebrow">News & archive</span>
            <h2 className="section-title">十一年的学习现场，汇成一部成长档案</h2>
            <p className="section-copy">
              开班、语言角、公开课与教学研讨，记录着课程如何成熟、教师如何精进，也记录着一届届学员如何走得更远。
            </p>
            <Link
              href="/news"
              className="mt-8 inline-block text-sm font-semibold text-[#174f8f]"
            >
              浏览 2015—2026 年动态 →
            </Link>
          </div>
          <div>
            {recentNews.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b2f5b] py-20 text-white">
        <div className="shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#ead7ad]">
                Resource center
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold">
                让每一次课后投入，都更有方向
              </h2>
            </div>
            <Link href="/resources" className="text-sm font-semibold text-white/76">
              查看资源中心 →
            </Link>
          </div>
          <div className="mt-10 grid gap-px bg-white/12 md:grid-cols-2 lg:grid-cols-4">
            {resourcePages.map((item) => (
              <Link
                key={item.slug}
                href={`/resources/${item.slug}`}
                className="min-h-44 bg-[#0b2f5b] p-6 transition hover:bg-[#174f8f]"
              >
                <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-xs leading-6 text-white/55">
                  {item.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#c99b48] py-16">
        <div className="shell flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#071f3e]/60">
              START A CONVERSATION
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#071f3e] sm:text-4xl">
              从目标出发，开启你的语言进阶路径
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit bg-[#071f3e] px-7 py-4 text-sm font-semibold text-white"
          >
            预约课程咨询 →
          </Link>
        </div>
      </section>
    </>
  );
}
