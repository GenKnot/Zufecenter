"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand } from "./Brand";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { siteConfig } from "@/data/site-config";
import {
  localeFromPathname,
  localeHome,
  localizedHref,
  localizedLandings,
  type ForeignLocale,
} from "@/data/i18n";

export function Footer() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const localized = locale === "zh" ? null : localizedLandings[locale as ForeignLocale];
  const home = localeHome(locale);

  return (
    <footer className="bg-[#071f3e] text-white">
      <div className="shell grid gap-12 py-16 lg:grid-cols-[1.25fr_0.8fr_0.9fr]">
        <div>
          <Brand light href={home} locale={locale} />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/62">
            {localized
              ? localized.footerText
              : "十余年专注语言教育，以分级课程、专业教学与持续反馈，服务学生、职场人士及企事业单位的多元学习目标。"}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-[0.12em]">
            {localized ? localized.quickLinks : "快速链接"}
          </h3>
          <div className="mt-5 grid grid-cols-2 gap-y-3 text-sm text-white/60">
            {localized ? (
              localized.nav.map((item) => (
                <Link key={item.href} href={localizedHref(locale, item.href)}>
                  {item.label}
                </Link>
              ))
            ) : (
              <>
                <Link href="/about">中心简介</Link>
                <Link href="/languages">语种课程</Link>
                <Link href="/programs">培训项目</Link>
                <Link href="/practice">教学实践</Link>
                <Link href="/faculty">师资团队</Link>
                <Link href="/research">教学研究</Link>
                <Link href="/news">新闻动态</Link>
                <Link href="/resources">学习资源</Link>
                <Link href="/collaboration">合作交流</Link>
              </>
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-sm font-semibold tracking-[0.12em]">
              {localized ? localized.contact : "联系我们"}
            </h3>
            <LanguageSwitcher light />
          </div>
          <div className="mt-5 space-y-3 text-sm leading-6 text-white/60">
            {!localized && <p>{siteConfig.contact.locationName}</p>}
            <p>{localized ? localized.address : siteConfig.contact.address}</p>
            <p>
              <a href={siteConfig.contact.phoneHref}>
                {localized ? localized.consultation : "课程咨询"}：{siteConfig.contact.phone}
              </a>
            </p>
            <p>
              <a href={siteConfig.contact.emailHref}>
                {siteConfig.contact.email}
              </a>
            </p>
            <p>{siteConfig.domain}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-5 text-xs text-white/42 sm:flex-row sm:justify-between">
          <p>© 2026 {localized ? localized.siteName : siteConfig.name}</p>
          <p>
            {localized
              ? localized.footerTagline
              : "专业语言教育 · 多语种学习 · 国际交流服务"}
          </p>
        </div>
      </div>
    </footer>
  );
}
