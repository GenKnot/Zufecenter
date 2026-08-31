import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/ContentDetail";
import { FacultyTeamPhoto } from "@/components/FacultyTeamPhoto";
import { FacultyProfilesGrid } from "@/components/FacultyProfilesGrid";
import { facultyPages } from "@/data/content";
import { facultyProfilesZh } from "@/data/faculty-profiles";
import type { AdditionalFacultyLanguage } from "@/data/additional-faculty-profiles";
import { createPageMetadata } from "@/lib/site-metadata";

function FrenchFacultyTeachers() {
  return (
    <section className="bg-[#f7f5f0] py-24">
      <div className="shell">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">教师简历<small>Nos Enseignants</small></span>
          <h2 className="section-title">师资力量</h2>
          <p className="section-copy">
            法语教学团队由课程负责人、分级课程教师和考试辅导教师共同组成，覆盖法语分级教学、国际测评备考、商务法语与跨文化交流等方向。
          </p>
        </div>
        <FacultyTeamPhoto language="french" locale="zh" />
        <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-2">
          {facultyProfilesZh.map((teacher) => (
            <article key={teacher.name} className="min-h-[420px] bg-white p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#174f8f]">
                {teacher.role}
              </p>
              <h3 className="mt-4 font-serif text-3xl font-semibold text-[#11233e]">
                {teacher.name}
              </h3>
              <div className="mt-7 space-y-5 text-sm leading-8 text-slate-600">
                <p>{teacher.bio}</p>
                <p>{teacher.credential}</p>
                <p>{teacher.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    >
      {slug === "french" && <FrenchFacultyTeachers />}
      {slug !== "french" && (
        <FacultyProfilesGrid
          locale="zh"
          language={slug as AdditionalFacultyLanguage}
        />
      )}
    </ContentDetail>
  );
}
