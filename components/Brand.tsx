import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { localizedLandings, type ForeignLocale, type Locale } from "@/data/i18n";

export function Brand({
  light = false,
  href = "/",
  locale = "zh",
}: {
  light?: boolean;
  href?: string;
  locale?: Locale;
}) {
  const localized = locale === "zh" ? null : localizedLandings[locale as ForeignLocale];

  if (!light) {
    return (
      <Link
        href={href}
        className="flex min-w-0 h-[60px] items-center gap-2 sm:h-[76px] sm:gap-4"
        aria-label={localized ? localized.siteName : "返回首页"}
      >
        <Image
          src="/logo-dark.svg"
          alt={localized ? localized.siteName : "浙江财经大学"}
          width={370}
          height={81}
          priority
          className="h-auto w-[140px] shrink-0 sm:w-[210px]"
        />
        <span className="h-9 w-px shrink-0 bg-slate-300 sm:h-11" />
        <span className="max-w-[72px] font-serif text-[13px] font-semibold leading-snug tracking-[0.02em] text-[#0b2f5b] sm:max-w-[190px] sm:text-[17px] sm:tracking-[0.03em]">
          {localized ? localized.siteName : siteConfig.name}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="flex items-center gap-4"
      aria-label={localized ? localized.siteName : "返回首页"}
    >
      <Image
        src="/logo-light.svg"
        alt={localized ? localized.siteName : "浙江财经大学"}
        width={370}
        height={81}
        className="h-auto w-[210px] shrink-0 sm:w-[235px]"
      />
      <span className="hidden h-10 w-px shrink-0 bg-white/25 sm:block" />
      <span className="hidden sm:block">
        <strong className="block max-w-[190px] font-serif text-[15px] leading-snug tracking-[0.04em] text-white lg:text-[17px]">
          {localized ? localized.siteName : siteConfig.name}
        </strong>
      </span>
    </Link>
  );
}
