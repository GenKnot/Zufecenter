import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/ContentDetail";
import { CourseCatalog } from "@/components/CourseCatalog";
import { languagePages } from "@/data/content";
import {
  coursesByLanguage,
  type LanguageSlug,
} from "@/data/language-courses";
import { createPageMetadata } from "@/lib/site-metadata";

export function generateStaticParams() {
  return languagePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = languagePages.find((entry) => entry.slug === slug);
  return page
    ? createPageMetadata(page.title, page.summary, `/languages/${slug}`)
    : {};
}

export default async function LanguageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = languagePages.find((entry) => entry.slug === slug);
  if (!page) notFound();
  const courses = coursesByLanguage(slug as LanguageSlug);

  return (
    <ContentDetail
      page={page}
      backHref="/languages"
      backLabel="返回语种课程"
      context="language"
    >
      <CourseCatalog language={slug} courses={courses} />
    </ContentDetail>
  );
}
