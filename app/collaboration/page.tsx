import { HubCards } from "@/components/HubCards";
import { PageHero } from "@/components/PageHero";
import { collaborationPages } from "@/data/content";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata(
  "合作交流",
  "面向高校、企业与国际伙伴开展课程共建、定制培训、教师交流和语言文化项目。",
  "/collaboration",
);

export default function CollaborationPage() {
  return (
    <>
      <PageHero
        eyebrow="COLLABORATION"
        title="让语言教育连接校园、产业与更广阔的世界"
        description="面向高校、企业与国际伙伴开展课程共建、定制培训、教师交流和语言文化项目，以完整协作回应不同组织的发展需求。"
      />
      <section className="py-24">
        <div className="shell">
          <div className="mb-12 max-w-3xl">
            <span className="eyebrow">Partnership</span>
            <h2 className="section-title">合作方向</h2>
            <p className="section-copy">
              可以从一场工作坊开始，也可以共同设计一学期课程。我们先理解参与对象和要解决的问题，再确定内容、师资与执行方式。
            </p>
          </div>
          <HubCards items={collaborationPages} basePath="/collaboration" />
        </div>
      </section>
    </>
  );
}
