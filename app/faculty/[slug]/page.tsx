import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/ContentDetail";
import { facultyPages } from "@/data/content";
import { createPageMetadata } from "@/lib/site-metadata";

const frenchTeacherProfiles = [
  {
    name: "林嘉怡 Claire Lin",
    title: "法语教学主管 / 国际测评项目负责人",
    summary:
      "毕业于国内外知名高校法语专业，具备扎实的法语语言学背景与多年高校法语教学经验。",
    credential: "持有法国国家教育部 FLE（对外法语教学）专业认证。",
    focus: "专注于国际法语证书备考、企业商务法语培训、教学经验丰富，深谙多元文化交融。",
  },
  {
    name: "周明轩 Marc Zhou",
    title: "法语分级课程负责人",
    summary:
      "长期承担 A1 至 B2 阶段课程设计与课堂教学，熟悉零基础学员的语音、语法与表达进阶需求。",
    credential: "具备高校法语教学与课程建设经验，参与分级课程大纲与阶段测评设计。",
    focus: "擅长把语音、语法、听说读写训练与真实交流任务结合，帮助学员稳定进入下一阶段。",
  },
  {
    name: "顾安琪 Camille Gu",
    title: "法语文化与考试辅导教师",
    summary:
      "关注法语国家文化、跨文化交流与考试应用，能够将语言学习与文化理解、留学准备结合。",
    credential: "具备法语考试辅导、主题工作坊和文化课程组织经验。",
    focus: "负责 DELF 备考支持、法语文化专题、口语表达训练与学习反馈跟进。",
  },
];

function FrenchFacultyTeachers() {
  return (
    <section className="bg-[#f7f5f0] py-24">
      <div className="shell">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">Nos Enseignants</span>
          <h2 className="section-title">师资力量</h2>
          <p className="section-copy">
            法语教学团队由课程负责人、分级课程教师和考试辅导教师共同组成，覆盖法语分级教学、国际测评备考、商务法语与跨文化交流等方向。
          </p>
        </div>
        <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-3">
          {frenchTeacherProfiles.map((teacher) => (
            <article key={teacher.name} className="min-h-[420px] bg-white p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#174f8f]">
                {teacher.title}
              </p>
              <h3 className="mt-4 font-serif text-3xl font-semibold text-[#11233e]">
                {teacher.name}
              </h3>
              <div className="mt-7 space-y-5 text-sm leading-8 text-slate-600">
                <p>{teacher.summary}</p>
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
    </ContentDetail>
  );
}
