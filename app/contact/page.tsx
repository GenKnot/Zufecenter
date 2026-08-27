import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site-config";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata(
  "联系我们",
  "联系语言中心，咨询个人课程、水平评估、青少年项目、团体培训与企业定制方案。",
  "/contact",
);

const steps = [
  {
    number: "01",
    title: "说说你的目标",
    text: "告诉我们想学的语种、当前基础、学习目标和可安排时间。",
  },
  {
    number: "02",
    title: "获得学习建议",
    text: "课程顾问将结合你的情况，推荐适合的课程方向与学习节奏。",
  },
  {
    number: "03",
    title: "开启学习计划",
    text: "完成基础沟通或水平评估后，进入相应班型并建立阶段目标。",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT US"
        title="一次真诚交流，可能就是进步的起点"
        description="无论是个人学习、青少年课程、团体培训还是企业定制，先告诉我们你的目标，再一起找到合适的课程与节奏。"
        image="/images/section-heroes/contact-hero.webp"
      />

      <section className="py-24">
        <div className="shell grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2 className="section-title">联系语言中心</h2>
            <p className="section-copy">
              课程咨询、水平评估、团体报名与合作洽谈，均可通过以下方式与我们联系。
            </p>

            <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
              <div className="py-6">
                <p className="text-xs tracking-[0.12em] text-slate-400">
                  课程咨询热线
                </p>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="mt-2 block font-serif text-2xl font-semibold text-[#174f8f]"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="py-6">
                <p className="text-xs tracking-[0.12em] text-slate-400">
                  电子邮箱
                </p>
                <a
                  href={siteConfig.contact.emailHref}
                  className="mt-2 block text-base font-semibold text-[#174f8f]"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              {siteConfig.contact.wechatQrImage && (
                <div className="py-6">
                  <p className="text-xs tracking-[0.12em] text-slate-400">
                    微信咨询
                  </p>
                  <Image
                    src={siteConfig.contact.wechatQrImage}
                    alt="语言中心微信二维码"
                    width={220}
                    height={300}
                    className="mt-4 h-auto w-full max-w-[220px] border border-slate-200 bg-white"
                  />
                </div>
              )}
              <div className="py-6">
                <p className="text-xs tracking-[0.12em] text-slate-400">
                  地址与咨询时间
                </p>
                <p className="mt-2 font-semibold leading-7 text-slate-700">
                  {siteConfig.contact.locationName}
                </p>
                <p className="mt-2 leading-7">{siteConfig.contact.address}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {siteConfig.contact.hours}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#edf2f6] p-8 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#174f8f]">
              Course consultation
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">
              三步开启课程咨询
            </h2>
            <div className="mt-10 divide-y divide-slate-300 border-t border-slate-300">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-4 py-7 sm:grid-cols-[64px_1fr]"
                >
                  <span className="font-serif text-2xl text-[#c99b48]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {step.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.contact.phoneHref}
                className="bg-[#0b2f5b] px-6 py-4 text-sm font-semibold text-white"
              >
                电话咨询
              </a>
              <a
                href={siteConfig.contact.emailHref}
                className="border border-[#0b2f5b] px-6 py-4 text-sm font-semibold text-[#0b2f5b]"
              >
                邮件联系
              </a>
              <Link
                href="/programs"
                className="px-4 py-4 text-sm font-semibold text-[#174f8f]"
              >
                先看看课程 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b2f5b] py-16 text-white">
        <div className="shell grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-[#ead7ad]">
              Personal learning
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold">个人课程咨询</h2>
            <p className="mt-4 text-sm leading-7 text-white/60">
              语种选择、水平评估、考试规划与长期学习路径。
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-[#ead7ad]">
              Group programs
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold">团体与校园项目</h2>
            <p className="mt-4 text-sm leading-7 text-white/60">
              班级、社团、院系语言课程与主题文化活动。
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-[#ead7ad]">
              Corporate training
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold">企业定制培训</h2>
            <p className="mt-4 text-sm leading-7 text-white/60">
              基于岗位、行业与国际业务场景共创培训方案。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
