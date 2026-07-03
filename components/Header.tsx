"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { navigation, type NavItem } from "@/data/navigation";
import {
  localeFromPathname,
  localeHome,
  localizedHref,
  localizedLandings,
  type ForeignLocale,
} from "@/data/i18n";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const localized = locale === "zh" ? null : localizedLandings[locale as ForeignLocale];
  const navItems: NavItem[] = localized ? localized.nav : navigation;

  useEffect(() => {
    document.documentElement.lang =
      locale === "zh" ? "zh-CN" : locale;
  }, [locale]);

  return (
    <header className="relative z-50 bg-white">
      <div className="border-b border-slate-200/80">
        <div className="shell flex h-24 items-center justify-between">
          <Brand href={localeHome(locale)} locale={locale} />
          <div className="hidden items-center gap-5 text-xs text-slate-500 lg:flex">
            <span>
              {localized
                ? localized.eyebrow.replaceAll(" · ", "  ·  ")
                : "合作 · 开放 · 专业 · 成长"}
            </span>
            <span className="h-4 w-px bg-slate-200" />
            <Link
              href={
                localized
                  ? locale === "en"
                    ? "/en/contact"
                    : `${localeHome(locale)}#contact`
                  : "/contact"
              }
              className="font-medium text-[#174f8f]"
            >
              {localized ? localized.secondaryCta : "课程咨询"} →
            </Link>
            <LanguageSwitcher />
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              className="grid size-11 place-items-center border border-slate-200"
              onClick={() => setOpen((value) => !value)}
              aria-label={localized ? "Open navigation menu" : "打开导航菜单"}
              aria-expanded={open}
            >
              <span className="text-xl">{open ? "×" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>
      <nav className="bg-[#0b2f5b] text-white">
        <div
          className={`shell ${
            open ? "grid py-3" : "hidden"
          } gap-1 lg:flex lg:h-14 lg:items-stretch lg:justify-between lg:py-0`}
        >
          {navItems.map((item) => (
            <div
              key={item.href}
              className="group relative border-b border-white/10 lg:flex lg:items-center lg:border-0"
            >
              <Link
                href={localized ? localizedHref(locale, item.href) : item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm tracking-[0.06em] transition hover:bg-white/10 lg:px-4 lg:py-[18px]"
              >
                {item.label}
                {item.children && (
                  <span className="ml-1.5 text-[9px] text-white/45">▾</span>
                )}
              </Link>
              {item.children && (
                <>
                  <div className="grid gap-1 bg-[#071f3e] px-4 pb-3 lg:hidden">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="py-2 pl-3 text-xs text-white/68"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                  <div className="invisible fixed left-1/2 top-[152px] z-50 hidden w-[min(760px,calc(100vw-48px))] -translate-x-1/2 grid-cols-2 gap-px border-t-2 border-[#c99b48] bg-slate-200 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:grid">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="bg-white p-5 text-[#11233e] transition hover:bg-[#f7f5f0]"
                      >
                        <strong className="block font-serif text-base">
                          {child.label}
                        </strong>
                        {child.description && (
                          <span className="mt-1.5 block text-xs leading-5 text-slate-500">
                            {child.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
