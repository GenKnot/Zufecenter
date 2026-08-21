import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { HubCards } from "@/components/HubCards";
import { aboutPages } from "@/data/content";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata(
  "关于中心",
  "十一年专注语言教育，以系统课程、专业教学和持续反馈，服务学生、职场人士与企事业单位的多元学习目标。",
  "/about",
);

const milestones = [
  ["2015", "从首批英语能力提升课程与小语种兴趣课起步。"],
  ["2017", "阅读分享会、周末语言角等学习活动成为固定安排。"],
  ["2019", "课程拓展至职业沟通、多语种学习与文化体验。"],
  ["2020", "建立线上课程与学习支持机制，服务不同地区的学员。"],
  ["2023", "完善课程评估、教学研讨和定制培训服务。"],
  ["2026", "完善四语种分级课程体系，进一步整合教学、活动与学习资源。"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT THE CENTER"
        title="十一年专注语言教育，让每一次进阶都有方向"
        description="从高校课堂到职业现场，从零基础入门到考试、留学与国际沟通，我们以系统课程、专业教学和持续反馈陪伴学习者稳步向前。"
        image="/images/section-heroes/about-center-hero.jpg"
      />
      <section className="py-24">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="relative min-h-[520px] overflow-hidden bg-[#0b2f5b]">
            <Image
              src="/images/library/sections/about-overview-image.webp"
              alt="开放的学习与阅读空间"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="prose-page">
            <span className="eyebrow">Our story</span>
            <h2 className="section-title">中心简介</h2>
            <p className="mt-7">
              浙江财经大学语言中心依托高校教育资源与开放合作平台，面向学生、职场人士及企事业单位开展多层次语言学习与培训服务。
            </p>
            <p>
              十一年来，中心从英语基础能力课程出发，课程已涵盖通用英语、商务沟通、留学与考试辅导、法语、日语、韩语以及企业定制培训，累计服务学员超过13,000人。
            </p>
            <p>
              我们相信，语言学习不止于掌握词汇和语法，更在于建立表达自信、理解不同文化、拓展人生与职业的可能。因此，课堂之外还有语言角、主题工作坊、文化体验和学习社群，让所学内容在交流中被反复使用。
            </p>
            <Link
              href="/about/approach"
              className="mt-5 inline-block border-b border-[#c99b48] pb-2 text-sm font-semibold text-[#174f8f]"
            >
              了解教育理念 →
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="shell">
          <div className="mb-12">
            <span className="eyebrow">Discover more</span>
            <h2 className="section-title">进一步了解中心</h2>
          </div>
          <HubCards items={aboutPages} basePath="/about" compact />
        </div>
      </section>
      <section className="bg-[#f7f5f0] py-24">
        <div className="shell">
          <span className="eyebrow">Milestones</span>
          <h2 className="section-title">一路走来</h2>
          <div className="mt-12 border-t border-slate-300">
            {milestones.map(([year, text]) => (
              <div
                key={year}
                className="grid gap-3 border-b border-slate-300 py-7 sm:grid-cols-[160px_1fr]"
              >
                <strong className="font-serif text-3xl text-[#174f8f]">
                  {year}
                </strong>
                <p className="text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
