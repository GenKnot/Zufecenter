import { PageHero } from "@/components/PageHero";
import { HubCards } from "@/components/HubCards";
import { facultyPages } from "@/data/content";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata(
  "师资与教研",
  "了解英语、法语、日语、韩语教学团队，以及中心的共同备课、课堂观察与课程质量机制。",
  "/faculty",
);

const facultyProfiles = [
  {
    name: "陈新民",
    role: "英语课程负责人",
    focus: "通用英语、商务沟通、学术表达",
    experience: "10 年语言教学经验",
    bio: "长期负责英语分级课程与职场沟通课程设计，关注学员从基础表达走向真实场景应用的能力提升。",
  },
  {
    name: "王利明",
    role: "考试与升学辅导教师",
    focus: "雅思衔接、英语写作、面试表达",
    experience: "12 年教学与备考辅导经验",
    bio: "擅长把考试目标拆解为可执行的阶段任务，帮助学员在语言能力、答题方法和学习节奏之间建立清楚路径。",
  },
  {
    name: "林嘉怡",
    role: "法语教学教师",
    focus: "法语入门、DELF 准备、文化专题",
    experience: "9 年法语教学经验",
    bio: "课程重视语音基础和实际交流，把法语文化、城市生活与课堂任务结合起来，让初学者稳步建立表达信心。",
  },
  {
    name: "赵明远",
    role: "日语教学教师",
    focus: "日语分级进阶、JLPT、文化实践",
    experience: "11 年日语教学经验",
    bio: "熟悉从五十音到中高级表达的学习难点，善于用结构化讲解和主题任务帮助学员形成持续进阶能力。",
  },
  {
    name: "李若晴",
    role: "韩语教学教师",
    focus: "韩语入门、生活会话、TOPIK 训练",
    experience: "8 年韩语教学经验",
    bio: "注重发音、句型和礼貌表达的系统训练，通过生活情境、影视材料和文化活动提升课堂参与度。",
  },
  {
    name: "金贤宇",
    role: "跨文化项目教师",
    focus: "语言实践、文化活动、主题工作坊",
    experience: "10 年跨文化课程经验",
    bio: "参与语言角、文化体验和短期工作坊设计，帮助学员把课堂所学转化为更自然的交流和展示能力。",
  },
];

export default function FacultyPage() {
  return (
    <>
      <PageHero
        eyebrow="FACULTY"
        title="专业所抵达的地方，是每一堂值得信任的课"
        description="中心汇集语言教育、考试辅导与跨文化沟通等方向的教学力量，以共同备课、课堂观察和学习反馈构成稳定的课程质量体系。"
      />
      <section className="py-24">
        <div className="shell">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">Teaching teams</span>
            <h2 className="section-title">教学团队</h2>
            <p className="section-copy">
              四个语种团队共同研发课程、分析课堂表现并组织文化活动。每位教师各有专长，也共同对学员的阶段成果负责。
            </p>
          </div>
          <HubCards items={facultyPages} basePath="/faculty" />

          <div className="mt-20">
            <div className="mb-10 max-w-3xl">
              <span className="eyebrow">Faculty members</span>
              <h2 className="section-title">教师代表</h2>
              <p className="section-copy">
                中心教师覆盖英语、法语、日语、韩语及跨文化实践方向，既承担课堂教学，也参与课程建设、学习反馈和活动设计。
              </p>
            </div>
            <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 xl:grid-cols-3">
              {facultyProfiles.map((teacher) => (
                <article key={teacher.name} className="bg-white p-8">
                  <p className="text-xs font-semibold tracking-[0.14em] text-[#174f8f]">
                    {teacher.experience}
                  </p>
                  <h3 className="mt-5 font-serif text-3xl font-semibold text-[#11233e]">
                    {teacher.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#c99b48]">
                    {teacher.role}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-slate-500">
                    {teacher.bio}
                  </p>
                  <div className="mt-7 border-t border-slate-100 pt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Teaching focus
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-700">
                      {teacher.focus}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-8 bg-[#edf2f6] p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="eyebrow">Faculty profile</span>
              <h2 className="mt-5 font-serif text-3xl font-semibold">专业不是标签，而是每一堂课背后的准备</h2>
            </div>
            <div className="text-sm leading-8 text-slate-600">
              <p>
                中心重视教师的专业背景与真实教学经验，也重视团队之间的课程共建。每个语种团队都围绕明确的阶段目标和统一的质量标准开展教学。
              </p>
              <p className="mt-4">
                集体备课让目标一致，课堂观摩让问题被看见，学员反馈则告诉我们下一次应该改在哪里。课程质量正是在这些具体工作中积累起来的。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
