import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/ContentDetail";
import { programPages } from "@/data/content";
import { createPageMetadata } from "@/lib/site-metadata";

export function generateStaticParams() {
  return programPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = programPages.find((entry) => entry.slug === slug);
  return page
    ? createPageMetadata(page.title, page.summary, `/programs/${slug}`)
    : {};
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = programPages.find((entry) => entry.slug === slug);
  if (!page) notFound();

  return (
    <ContentDetail
      page={page}
      backHref="/programs"
      backLabel="返回培训项目"
      context="program"
    />
  );
}
