import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/ContentDetail";
import { facultyPages } from "@/data/content";
import { createPageMetadata } from "@/lib/site-metadata";

export function generateStaticParams() {
  return facultyPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = facultyPages.find((entry) => entry.slug === slug);
  return page
    ? createPageMetadata(page.title, page.summary, `/faculty/${slug}`)
    : {};
}

export default async function FacultyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = facultyPages.find((entry) => entry.slug === slug);
  if (!page) notFound();

  return (
    <ContentDetail
      page={page}
      backHref="/faculty"
      backLabel="返回师资团队"
      context="faculty"
    />
  );
}
