import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const canonical = `${siteConfig.url}${path === "/" ? "" : path}/`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "zh_CN",
      type: "website",
    },
  };
}
