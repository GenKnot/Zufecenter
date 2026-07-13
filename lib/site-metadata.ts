import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export function absoluteUrl(path: string) {
  if (path === "/" || path === "") return siteConfig.url;
  return `${siteConfig.url}${path.endsWith("/") ? path : `${path}/`}`;
}

export function localizedAlternates(path: string) {
  const normalized = path === "/" ? "" : path.replace(/\/$/, "");

  return {
    "zh-CN": absoluteUrl(path),
    en: `${siteConfig.url}/en${normalized}/`,
    fr: `${siteConfig.url}/fr${normalized}/`,
    es: `${siteConfig.url}/es${normalized}/`,
    ja: `${siteConfig.url}/ja${normalized}/`,
    ko: `${siteConfig.url}/ko${normalized}/`,
    "x-default": absoluteUrl(path),
  };
}

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const canonical = absoluteUrl(path);
  const image = siteConfig.ogImage;

  return {
    title,
    description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical,
      languages: localizedAlternates(path),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "zh_CN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
