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
        className="block h-[60px] w-[280px] overflow-hidden sm:h-[76px] sm:w-[350px]"
        aria-label={localized ? localized.siteName : "返回首页"}
      >
        <Image
          src="/logo.png"
          alt={localized ? localized.siteName : "浙江财经大学浙商资本市场研究院语言中心"}
          width={2167}
          height={725}
          priority
          className="h-auto w-[280px] -translate-y-[16px] sm:w-[350px] sm:-translate-y-[20px]"
        />
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
