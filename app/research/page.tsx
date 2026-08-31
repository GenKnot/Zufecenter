import { HubCards } from "@/components/HubCards";
import { PageHero } from "@/components/PageHero";
import { researchPages } from "@/data/content";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata(
  "教学研究",
  "聚焦语言教学研究、课程建设与教师发展，让一线经验经过验证与迭代沉淀为专业方法。",
  "/research",
);

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="TEACHING & RESEARCH"
        title="从课堂发现问题，以研究推动下一次进步"
        description="中心持续开展语言教学研究、课程建设与教师发展，让一线经验经过讨论、验证和迭代，沉淀为更成熟的教学方法。"
        image="/images/section-heroes/teaching-research-hero.webp"
      />
      <section className="py-24">
        <div className="shell">
          <div className="mb-12 max-w-3xl">
            <span className="eyebrow">从课堂出发<small>Research areas</small></span>
            <h2 className="section-title">教研方向</h2>
          </div>
          <HubCards items={researchPages} basePath="/research" />
        </div>
      </section>
    </>
  );
}
