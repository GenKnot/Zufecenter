"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  localeFromPathname,
  localeHome,
  localeLabels,
  locales,
} from "@/data/i18n";

const switcherLabels = {
  zh: "选择网站语言",
  en: "Select site language",
  fr: "Choisir la langue du site",
  ja: "サイトの言語を選択",
  ko: "사이트 언어 선택",
  es: "Elegir el idioma del sitio",
};

export function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const pathname = usePathname();
  const current = localeFromPathname(pathname);

  return (
    <details className="group/language relative">
      <summary
        className={`flex cursor-pointer list-none items-center gap-2 border px-3 py-2 text-xs font-semibold ${
          light
            ? "border-white/25 text-white"
            : "border-slate-200 text-[#174f8f]"
        }`}
        aria-label={switcherLabels[current]}
      >
        <span>{localeLabels[current].short}</span>
        <span className={light ? "text-white/55" : "text-slate-400"}>▾</span>
      </summary>
      <div className="absolute right-0 top-[calc(100%+8px)] z-[70] min-w-36 border border-slate-200 bg-white py-1 text-[#11233e] shadow-xl">
        {locales.map((locale) => (
          <Link
            key={locale}
            href={localeHome(locale)}
            hrefLang={localeLabels[locale].htmlLang}
            className={`block px-4 py-2.5 text-xs transition hover:bg-slate-50 ${
              locale === current ? "font-semibold text-[#174f8f]" : ""
            }`}
          >
            {localeLabels[locale].native}
          </Link>
        ))}
      </div>
    </details>
  );
}
