import { currentTerm, resourceDownloads } from "@/data/operations";

export function ResourceDownloads() {
  return (
    <section className="bg-[#edf2f6] py-24">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <span className="eyebrow">Public downloads</span>
            <h2 className="section-title">公开资料下载</h2>
            <p className="section-copy">
              先从课程安排和学习工具开始。班级讲义、作业与教师反馈材料将在开课后按教学进度发放。
            </p>
            <p className="mt-6 text-xs text-slate-400">
              资料版本：{currentTerm.updatedAt}
            </p>
          </div>
          <div className="grid gap-4">
            {resourceDownloads.map((resource, index) => (
              <a
                key={resource.href}
                href={resource.href}
                download
                className="group grid gap-5 border border-slate-200 bg-white p-7 transition hover:border-[#c99b48] sm:grid-cols-[64px_1fr_auto] sm:items-center"
              >
                <span className="font-serif text-2xl text-[#c99b48]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <small className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {resource.meta}
                  </small>
                  <strong className="mt-2 block font-serif text-xl text-[#11233e]">
                    {resource.title}
                  </strong>
                  <span className="mt-2 block text-sm leading-7 text-slate-500">
                    {resource.description}
                  </span>
                </span>
                <span className="text-sm font-semibold text-[#174f8f]">
                  下载 PDF ↓
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

