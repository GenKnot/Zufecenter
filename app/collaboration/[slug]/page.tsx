import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/ContentDetail";
import { collaborationPages } from "@/data/content";
import { createPageMetadata } from "@/lib/site-metadata";

export function generateStaticParams() {
  return collaborationPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = collaborationPages.find((entry) => entry.slug === slug);
  return page
    ? createPageMetadata(page.title, page.summary, `/collaboration/${slug}`)
    : {};
}

export default async function CollaborationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = collaborationPages.find((entry) => entry.slug === slug);
  if (!page) notFound();

  return (
    <ContentDetail
      page={page}
      backHref="/collaboration"
      backLabel="返回合作交流"
      context="collaboration"
    />
  );
}
