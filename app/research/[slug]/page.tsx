import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/ContentDetail";
import { researchPages } from "@/data/content";
import { createPageMetadata } from "@/lib/site-metadata";

export function generateStaticParams() {
  return researchPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = researchPages.find((entry) => entry.slug === slug);
  return page
    ? createPageMetadata(page.title, page.summary, `/research/${slug}`)
    : {};
}

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = researchPages.find((entry) => entry.slug === slug);
  if (!page) notFound();

  return (
    <ContentDetail
      page={page}
      backHref="/research"
      backLabel="返回教学研究"
      context="research"
    />
  );
}
