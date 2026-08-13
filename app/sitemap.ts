import type { MetadataRoute } from "next";
import {
  aboutPages,
  collaborationPages,
  facultyPages,
  languagePages,
  practicePages,
  programPages,
  researchPages,
  resourcePages,
} from "@/data/content";
import { news } from "@/data/site";
import { siteConfig } from "@/data/site-config";
import { languageCourses } from "@/data/language-courses";
import { foreignLocales } from "@/data/i18n";
import { englishSections } from "@/data/english-sections";
import { englishCourses } from "@/data/english-courses";
import { englishContentDetails } from "@/data/english-content-details";
import { englishNews } from "@/data/english-news";
import { frSections } from "@/data/fr-sections";
import { frCourses } from "@/data/fr-courses";
import { frContentDetails } from "@/data/fr-content-details";
import { frNews } from "@/data/fr-news";
import { esSections } from "@/data/es-sections";
import { esCourses } from "@/data/es-courses";
import { esContentDetails } from "@/data/es-content-details";
import { esNews } from "@/data/es-news";
import { jaSections } from "@/data/ja-sections";
import { jaCourses } from "@/data/ja-courses";
import { jaContentDetails } from "@/data/ja-content-details";
import { jaNews } from "@/data/ja-news";
import { koSections } from "@/data/ko-sections";
import { koCourses } from "@/data/ko-courses";
import { koContentDetails } from "@/data/ko-content-details";
import { koNews } from "@/data/ko-news";

export const dynamic = "force-static";

const newsDateMetadata = (date: string) =>
  /^\d{4}-\d{2}-\d{2}$/.test(date)
    ? { lastModified: new Date(date) }
    : {};

const staticRoutes = [
  "",
  "/about",
  "/languages",
  "/programs",
  "/practice",
  "/faculty",
  "/research",
  "/collaboration",
  "/resources",
  "/news",
  "/contact",
];

const contentRoutes = [
  ...aboutPages.map((page) => `/about/${page.slug}`),
  ...languagePages.map((page) => `/languages/${page.slug}`),
  ...languageCourses.map(
    (course) => `/languages/${course.language}/${course.slug}`,
  ),
  ...programPages.map((page) => `/programs/${page.slug}`),
  ...practicePages.map((page) => `/practice/${page.slug}`),
  ...facultyPages.map((page) => `/faculty/${page.slug}`),
  ...researchPages.map((page) => `/research/${page.slug}`),
  ...collaborationPages.map((page) => `/collaboration/${page.slug}`),
  ...resourcePages.map((page) => `/resources/${page.slug}`),
  ...news.map((item) => `/news/${item.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const chinesePages: MetadataRoute.Sitemap = [...staticRoutes, ...contentRoutes].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: now,
      changeFrequency: route.startsWith("/news") ? "weekly" : "monthly",
      priority: route === "" ? 1 : route.split("/").length === 2 ? 0.8 : 0.6,
    }),
  );

  const localizedLandings: MetadataRoute.Sitemap = foreignLocales.map((locale) => ({
    url: `${siteConfig.url}/${locale}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const englishSectionPages: MetadataRoute.Sitemap = englishSections.map((section) => ({
    url: `${siteConfig.url}/en/${section.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const englishLanguagePages: MetadataRoute.Sitemap = [
    ...new Set(englishCourses.map((course) => course.language)),
  ].map((language) => ({
    url: `${siteConfig.url}/en/languages/${language}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const englishCoursePages: MetadataRoute.Sitemap = englishCourses.map((course) => ({
    url: `${siteConfig.url}/en/languages/${course.language}/${course.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const englishContentPages: MetadataRoute.Sitemap = englishContentDetails
    .filter((detail) => detail.slug !== "downloads")
    .map((detail) => ({
      url: `${siteConfig.url}/en/${detail.parent}/${detail.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  const englishNewsPages: MetadataRoute.Sitemap = englishNews.map((item) => ({
    url: `${siteConfig.url}/en/news/${item.slug}/`,
    ...newsDateMetadata(item.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const localizedPages = (
    [
      ["fr", frSections, frCourses, frContentDetails, frNews],
      ["es", esSections, esCourses, esContentDetails, esNews],
      ["ja", jaSections, jaCourses, jaContentDetails, jaNews],
      ["ko", koSections, koCourses, koContentDetails, koNews],
    ] as const
  ).flatMap(([locale, sections, courses, details, newsItems]) => [
    ...sections.map((s) => ({
      url: `${siteConfig.url}/${locale}/${s.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...[...new Set(courses.map((c) => c.language))].map((lang) => ({
      url: `${siteConfig.url}/${locale}/languages/${lang}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...courses.map((c) => ({
      url: `${siteConfig.url}/${locale}/languages/${c.language}/${c.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...details.map((d) => ({
      url: `${siteConfig.url}/${locale}/${d.parent}/${d.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${siteConfig.url}/${locale}/news/`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.6 },
    ...newsItems.map((item) => ({
      url: `${siteConfig.url}/${locale}/news/${item.slug}/`,
      ...newsDateMetadata(item.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ]);

  return [
    ...chinesePages,
    ...localizedLandings,
    ...englishSectionPages,
    ...englishLanguagePages,
    ...englishCoursePages,
    ...englishContentPages,
    ...englishNewsPages,
    ...localizedPages,
  ];
}
