import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/ContentDetail";
import { resourcePages } from "@/data/content";
import { createPageMetadata } from "@/lib/site-metadata";

export function generateStaticParams() {
  return resourcePages
    .filter((page) => page.slug !== "downloads")
    .map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = resourcePages.find(
    (entry) => entry.slug === slug && entry.slug !== "downloads",
  );
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
  const page = resourcePages.find(
    (entry) => entry.slug === slug && entry.slug !== "downloads",
  );
  if (!page) notFound();

  return (
    <ContentDetail
      page={page}
      backHref="/resources"
      backLabel="返回学习资源"
      context="resource"
    />
  );
}
