import { PageHero } from "@/components/PageHero";
import { HubCards } from "@/components/HubCards";
import { resourcePages } from "@/data/content";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata(
  "学习资源",
  "汇集学习指南、常见问题与数字学习支持，为课前选择和课后练习提供方向。",
  "/resources",
);

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="LEARNING RESOURCES"
        title="好的学习支持，让课堂之外依然有路可循"
        description="从学习规划到方法指南，从常见问题到数字学习支持，我们把关键说明整理在一起，让课前选择更从容、课后练习更有效。"
      />
      <section className="py-24">
        <div className="shell">
          <div className="mb-12 max-w-3xl">
            <span className="eyebrow">Resource center</span>
            <h2 className="section-title">学习支持与资料中心</h2>
            <p className="section-copy">
              这里集中整理学习指南、常见问题和数字学习支持。你可以先了解课程，也可以找到适合自己日常使用的练习工具。
            </p>
          </div>
          <HubCards items={resourcePages} basePath="/resources" />
        </div>
      </section>
    </>
  );
}
