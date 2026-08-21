/**
 * 把 course-syllabus/*.md 里的 26 门课教学大纲转成 data/course-syllabus.ts。
 *
 * 大纲是人写的 markdown，网站要的是结构化数据。与其手抄一遍（26 门 × 7 个字段，
 * 抄错了也看不出来），不如让它可重跑：以后大纲改了，重新执行本脚本即可。
 *
 *   node scripts/build-course-syllabus.mjs
 *
 * 两种考核安排写法都要吃下：
 *   英语用「- 第3周：…」的列表，法/日/韩用「第3周…；第6周…」的整段。
 */
import fs from "node:fs";
import path from "node:path";

const SOURCE_DIR = "course-syllabus";
const FILES = ["english", "french", "japanese", "korean"];
const OUT = "data/course-syllabus.ts";

/** 取 **字段：** 后面那一段（到行尾或下一个空行） */
function field(block, name) {
  const re = new RegExp(`\\*\\*${name}[:：]\\*\\*\\s*([^\\n]+)`);
  const m = block.match(re);
  return m ? m[1].trim().replace(/\s+$/, "") : "";
}

/** 解析章节表格：| 章节 | 周次 | 教学内容 | 课堂任务 | 作业与章节检测 | */
function chapters(block) {
  const rows = [];
  for (const line of block.split("\n")) {
    if (!line.startsWith("| 第")) continue;
    const cells = line
      .split("|")
      .slice(1, -1)
      .map((c) => c.trim());
    if (cells.length < 5) continue;
    const [chapter, weeks, content, classwork, homework] = cells;
    rows.push({ chapter, weeks, content, classwork, homework });
  }
  return rows;
}

/**
 * 考核安排。英语是 markdown 列表，其余三种语言是一整段用「；」分隔。
 * 明确标了「结课成果」的单独抽出来，它是给学员看的产出，不是考核节点。
 */
function assessments(block) {
  const idx = block.indexOf("考核安排");
  if (idx < 0) return { items: [], outcome: "" };
  const tail = block.slice(idx);

  const bullets = [...tail.matchAll(/^- (.+)$/gm)].map((m) => m[1].trim());
  let raw = bullets;

  if (raw.length === 0) {
    const inline = field(block, "考核安排");
    raw = inline
      .split("；")
      .map((s) => s.trim().replace(/[。]$/, ""))
      .filter(Boolean)
      .map((s) => `${s}。`);
  }

  let outcome = "";
  const items = [];
  for (const line of raw) {
    const m = line.match(/^结课成果[:：]\s*(.+)$/);
    if (m) outcome = m[1].trim();
    else items.push(line);
  }
  return { items, outcome };
}

const all = [];
for (const name of FILES) {
  const text = fs.readFileSync(path.join(SOURCE_DIR, `${name}.md`), "utf8");
  const blocks = text.split(/^## /m).slice(1);
  for (const block of blocks) {
    const heading = block.split("\n")[0].trim();
    const [code, ...titleParts] = heading.split(/\s+/);
    const { items, outcome } = assessments(block);
    const entry = {
      code,
      title: titleParts.join(" "),
      duration: field(block, "周期"),
      prerequisite: field(block, "入班基础"),
      materials: field(block, "定制教材"),
      teaching: field(block, "教学安排"),
      chapters: chapters(block),
      assessments: items,
      outcome,
    };
    const missing = ["duration", "prerequisite", "materials", "teaching"].filter(
      (k) => !entry[k],
    );
    if (missing.length) {
      console.warn(`  ⚠ ${code} 缺字段: ${missing.join(", ")}`);
    }
    if (entry.chapters.length === 0) {
      console.warn(`  ⚠ ${code} 没解析到章节表`);
    }
    if (entry.assessments.length === 0) {
      console.warn(`  ⚠ ${code} 没解析到考核安排`);
    }
    all.push(entry);
  }
}

const q = (s) => JSON.stringify(s);

const body = all
  .map(
    (c) => `  ${q(c.code)}: {
    code: ${q(c.code)},
    title: ${q(c.title)},
    duration: ${q(c.duration)},
    prerequisite: ${q(c.prerequisite)},
    materials: ${q(c.materials)},
    teaching: ${q(c.teaching)},
    chapters: [
${c.chapters
  .map(
    (ch) => `      {
        chapter: ${q(ch.chapter)},
        weeks: ${q(ch.weeks)},
        content: ${q(ch.content)},
        classwork: ${q(ch.classwork)},
        homework: ${q(ch.homework)},
      },`,
  )
  .join("\n")}
    ],
    assessments: [
${c.assessments.map((a) => `      ${q(a)},`).join("\n")}
    ],${c.outcome ? `\n    outcome: ${q(c.outcome)},` : ""}
  },`,
  )
  .join("\n");

const file = `// 本文件由 scripts/build-course-syllabus.mjs 从 course-syllabus/*.md 生成，请勿手动修改。
// 大纲内容有更新时，改 markdown 后重新执行：node scripts/build-course-syllabus.mjs

export type SyllabusChapter = {
  /** 形如「第一章 认识彼此」 */
  chapter: string;
  /** 形如「第1—3周」 */
  weeks: string;
  content: string;
  classwork: string;
  homework: string;
};

export type CourseSyllabus = {
  code: string;
  title: string;
  duration: string;
  prerequisite: string;
  materials: string;
  /** 课程负责人与协同教师 */
  teaching: string;
  chapters: SyllabusChapter[];
  /** 阶段考核节点 */
  assessments: string[];
  /** 结课成果，仅部分课程明确列出 */
  outcome?: string;
};

export const courseSyllabi: Record<string, CourseSyllabus> = {
${body}
};

export function findCourseSyllabus(code: string): CourseSyllabus | undefined {
  return courseSyllabi[code];
}
`;

fs.writeFileSync(OUT, file);
console.log(
  `已写出 ${OUT}：${all.length} 门课，共 ${all.reduce((n, c) => n + c.chapters.length, 0)} 个章节、${all.reduce((n, c) => n + c.assessments.length, 0)} 条考核安排`,
);
