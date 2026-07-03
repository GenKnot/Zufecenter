import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/ContentDetail";
import { aboutPages } from "@/data/content";
import { createPageMetadata } from "@/lib/site-metadata";

export function generateStaticParams() {
  return aboutPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = aboutPages.find((entry) => entry.slug === slug);
  return page
    ? createPageMetadata(page.title, page.summary, `/about/${slug}`)
    : {};
}

export default async function AboutDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = aboutPages.find((entry) => entry.slug === slug);
  if (!page) notFound();

  return (
    <ContentDetail
      page={page}
      backHref="/about"
      backLabel="返回关于中心"
      context="about"
    />
  );
}
