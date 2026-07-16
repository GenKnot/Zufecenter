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
  const [expanded, setExpanded] = useState<string | null>(null);
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
                  ? `/${locale}/contact`
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
              onClick={() => {
                setOpen((value) => !value);
                setExpanded(null);
              }}
              aria-label={localized ? "Open navigation menu" : "打开导航菜单"}
              aria-expanded={open}
            >
              <span className="text-xl">{open ? "×" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>
      <nav
        className={`bg-[#0b2f5b] text-white ${
          open ? "fixed inset-x-0 bottom-0 top-24 z-40 lg:static" : ""
        }`}
      >
        <div
          className={`shell ${
            open ? "grid h-full content-start gap-2 overflow-y-auto py-4" : "hidden"
          } lg:flex lg:h-14 lg:items-stretch lg:justify-between lg:gap-1 lg:overflow-visible lg:py-0`}
        >
          {navItems.map((item) => (
            <div
              key={item.href}
              className="group relative overflow-hidden border border-white/10 bg-white/[0.035] lg:flex lg:items-center lg:overflow-visible lg:border-0 lg:bg-transparent"
            >
              {item.children ? (
                <button
                  type="button"
                  onClick={() =>
                    setExpanded((value) => (value === item.href ? null : item.href))
                  }
                  className="flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-semibold tracking-[0.04em] transition hover:bg-white/10 lg:hidden"
                  aria-expanded={expanded === item.href}
                >
                  <span>{item.label}</span>
                  <span
                    className={`text-xs text-white/50 transition ${
                      expanded === item.href ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>
              ) : (
                <Link
                  href={localized ? localizedHref(locale, item.href) : item.href}
                  onClick={() => {
                    setOpen(false);
                    setExpanded(null);
                  }}
                  className="flex items-center justify-between px-4 py-3.5 text-sm font-semibold tracking-[0.04em] transition hover:bg-white/10 lg:hidden"
                >
                  <span>{item.label}</span>
                </Link>
              )}
              <Link
                href={localized ? localizedHref(locale, item.href) : item.href}
                onClick={() => {
                  setOpen(false);
                  setExpanded(null);
                }}
                className="hidden px-4 py-3.5 text-sm font-semibold tracking-[0.04em] transition hover:bg-white/10 lg:block lg:px-4 lg:py-[18px] lg:font-normal lg:tracking-[0.06em]"
              >
                <span>{item.label}</span>
                {item.children && (
                  <span className="ml-1.5 hidden text-[9px] text-white/45 lg:inline">
                    ▾
                  </span>
                )}
              </Link>
              {item.children && (
                <>
                  <div
                    className={`grid gap-1 border-t border-white/10 bg-[#071f3e]/75 p-2 lg:hidden ${
                      expanded === item.href ? "" : "hidden"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={localized ? localizedHref(locale, child.href) : child.href}
                        onClick={() => {
                          setOpen(false);
                          setExpanded(null);
                        }}
                        className="px-3 py-2.5 text-xs leading-5 text-white/72 transition hover:bg-white/8 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                  <div className="invisible fixed left-0 top-[152px] z-50 hidden w-screen border-t-2 border-[#c99b48] bg-white/95 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:block">
                    <div className="shell grid max-w-[820px] grid-cols-2 gap-px bg-slate-200">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={localized ? localizedHref(locale, child.href) : child.href}
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
