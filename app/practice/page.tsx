import { HubCards } from "@/components/HubCards";
import { PageHero } from "@/components/PageHero";
import { practicePages } from "@/data/content";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata(
  "教学实践",
  "通过语言辅导、学习社群、文化体验、成果展示与主题研学，让课堂所学进入真实交流。",
  "/practice",
);

export default function PracticePage() {
  return (
    <>
      <PageHero
        eyebrow="LEARNING IN PRACTICE"
        title="语言的边界，在每一次使用中被打开"
        description="从语言辅导与学习社群，到文化体验、赛事展示和主题研学，中心以丰富的第二课堂连接知识、表达与世界。"
        image="/images/section-heroes/learning-practice-hero.jpg"
      />
      <section className="py-24">
        <div className="shell">
          <div className="mb-12 max-w-3xl">
            <span className="eyebrow">Beyond classroom</span>
            <h2 className="section-title">课堂之外的学习现场</h2>
            <p className="section-copy">
              在语言角主动开口，在文化活动中理解语境，在分享与展示中完成表达。每一次真实使用，都让课堂所学更稳、更活。
            </p>
          </div>
          <HubCards items={practicePages} basePath="/practice" />
        </div>
      </section>
    </>
  );
}
