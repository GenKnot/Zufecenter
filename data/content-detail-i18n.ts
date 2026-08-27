import {
  aboutPages,
  collaborationPages,
  facultyPages,
  languagePages,
  practicePages,
  programPages,
  researchPages,
  resourcePages,
  type ContentPage,
} from "@/data/content";
import type { ForeignLocale } from "@/data/i18n";
import { enDetailProse } from "@/data/detail-prose/en";
import { esDetailProse } from "@/data/detail-prose/es";
import { frDetailProse } from "@/data/detail-prose/fr";
import { jaDetailProse } from "@/data/detail-prose/ja";
import { koDetailProse } from "@/data/detail-prose/ko";

/**
 * 栏目详情页的外语正文。
 *
 * 中文详情页走 ContentDetail 组件，有 intro + 4 张卡片 + 若干正文段；外语侧
 * 原来只有 {title, summary, points[3]} 的薄版式，同一个页面中文 8 段、外语 3 段。
 * 这里补齐正文，图片与 slug 仍从中文源取——那是事实数据，不该有两份。
 */
export type DetailProse = {
  title: string;
  /** 英文小标（hero 上方那行大写字），中文侧对应 page.english */
  eyebrow: string;
  summary: string;
  intro: string[];
  highlights: { title: string; text: string }[];
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
};

const prose: Record<ForeignLocale, Record<string, DetailProse>> = {
  en: enDetailProse,
  fr: frDetailProse,
  ja: jaDetailProse,
  ko: koDetailProse,
  es: esDetailProse,
};

const sourceGroups: Record<string, ContentPage[]> = {
  about: aboutPages,
  languages: languagePages,
  programs: programPages,
  practice: practicePages,
  faculty: facultyPages,
  research: researchPages,
  resources: resourcePages,
  collaboration: collaborationPages,
};

/**
 * 拼出一个完整的 ContentPage 交给 ContentDetail 渲染，
 * 这样中外文共用同一个组件，版式不会再各走各的。
 */
export function findLocalizedDetail(
  locale: ForeignLocale,
  parent: string,
  slug: string,
): ContentPage | undefined {
  const source = sourceGroups[parent]?.find((page) => page.slug === slug);
  const text = prose[locale]?.[`${parent}/${slug}`];
  if (!source || !text) return undefined;

  return {
    slug: source.slug,
    title: text.title,
    english: text.eyebrow,
    summary: text.summary,
    heroImage: source.heroImage,
    image: source.image,
    imageAlt: source.imageAlt,
    intro: text.intro,
    highlights: text.highlights,
    sections: text.sections,
  };
}
