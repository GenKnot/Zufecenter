import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/ContentDetail";
import { ResourceDownloads } from "@/components/ResourceDownloads";
import { resourcePages } from "@/data/content";
import { createPageMetadata } from "@/lib/site-metadata";

export function generateStaticParams() {
  return resourcePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = resourcePages.find((entry) => entry.slug === slug);
  return page
    ? createPageMetadata(page.title, page.summary, `/resources/${slug}`)
    : {};
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = resourcePages.find((entry) => entry.slug === slug);
  if (!page) notFound();

  return (
    <ContentDetail
      page={page}
      backHref="/resources"
      backLabel="返回学习资源"
      context="resource"
    >
      {page.slug === "downloads" ? <ResourceDownloads locale="zh" /> : null}
    </ContentDetail>
  );
}
