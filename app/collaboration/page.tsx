import { HubCards } from "@/components/HubCards";
import { PageHero } from "@/components/PageHero";
import { collaborationPages } from "@/data/content";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata(
  "合作交流",
  "对接国际优质教育资源，围绕语言提升、国际化测评、课程共建与组织培训开展合作。",
  "/collaboration",
);

export default function CollaborationPage() {
  return (
    <>
      <PageHero
        eyebrow="COLLABORATION"
        title="让语言教育连接校园、产业与更广阔的世界"
        description="中心积极开展与海外高校、官方教育机构及组织伙伴的深度合作，为华东地区师生构建高标准的国际语言提升与国际化测评平台。"
        image="/images/section-heroes/collaboration-hero.webp"
      />
      <section className="py-24">
        <div className="shell">
          <div className="mb-12 max-w-3xl">
            <span className="eyebrow">伙伴与项目<small>Partnership</small></span>
            <h2 className="section-title">合作方向</h2>
            <p className="section-copy">
              对接国际优质教育资源，严格遵循全球统一的学术管理与测评规范。中心围绕课程共建、组织培训、国际交流与语言测评服务，推动高质量语言教育资源落地。
            </p>
          </div>
          <HubCards items={collaborationPages} basePath="/collaboration" />
        </div>
      </section>
    </>
  );
}
