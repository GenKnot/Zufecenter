import { PageHero } from "@/components/PageHero";
import { HubCards } from "@/components/HubCards";
import { programPages } from "@/data/content";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata(
  "培训项目",
  "提供通用能力、考试升学、商务职业、学术表达、青少年成长、企业定制及留学语言准备等培训项目。",
  "/programs",
);

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="PROGRAMS & TRAINING"
        title="目标不同，抵达它的课程路径也应不同"
        description="从基础提升、考试升学到职业沟通与企业定制，我们把长期目标拆解为可执行、可反馈、可衡量的学习阶段。"
        image="/images/section-heroes/programs-training-hero.jpg"
      />
      <section className="py-24">
        <div className="shell">
          <div className="mb-12 max-w-3xl">
            <span className="eyebrow">Learning pathways</span>
            <h2 className="section-title">按目标选择培训路径</h2>
            <p className="section-copy">
              培训项目与语种课程可以交叉组合。例如，商务方向可选择英语，也可根据团队需要定制日语、法语或韩语模块。
            </p>
          </div>
          <HubCards items={programPages} basePath="/programs" />
        </div>
      </section>
    </>
  );
}
