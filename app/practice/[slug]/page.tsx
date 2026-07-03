import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/ContentDetail";
import { practicePages } from "@/data/content";
import { createPageMetadata } from "@/lib/site-metadata";

export function generateStaticParams() {
  return practicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = practicePages.find((entry) => entry.slug === slug);
  return page
    ? createPageMetadata(page.title, page.summary, `/practice/${slug}`)
    : {};
}

export default async function PracticeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = practicePages.find((entry) => entry.slug === slug);
  if (!page) notFound();

  return (
    <ContentDetail
      page={page}
      backHref="/practice"
      backLabel="返回教学实践"
      context="practice"
    />
  );
}
