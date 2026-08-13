/**
 * 学期课程与活动信息集中配置。
 *
 * 日期、教师、地点和状态调整后，首页、课程页和师资页会同步更新。
 */

export type OfferingStatus = "预约测评中" | "开放咨询" | "接受意向登记";

export type CourseOffering = {
  code: string;
  title: string;
  language: string;
  href: string;
  startDate: string;
  schedule: string;
  teacher: string;
  location: string;
  status: OfferingStatus;
  note: string;
};

export type UpcomingActivity = {
  date: string;
  day: string;
  time: string;
  category: string;
  title: string;
  summary: string;
  location: string;
  status: "预约开放" | "学员报名" | "即将开放";
};

export const currentTerm = {
  eyebrow: "2026 AUTUMN TERM",
  title: "2026 秋季课程与活动安排",
  summary:
    "秋季课程从入学沟通和分级测评开始，按语种与学习目标陆续开班。现公布本学期课程与活动安排，具体班次以报名通知为准。",
  updatedAt: "2026-08-13",
  consultationPeriod: "8 月 17 日—9 月 13 日",
  teachingPeriod: "9 月—12 月",
  placement: "线上基础测评 + 15 分钟学习沟通",
};

export const currentOfferings: CourseOffering[] = [
  {
    code: "EN-A1",
    title: "英语基础一级",
    language: "英语",
    href: "/languages/english/foundation-1",
    startDate: "2026-09-07",
    schedule: "周一、周四 18:30—20:00",
    teacher: "英语综合能力教学组",
    location: "文一西路教学点",
    status: "预约测评中",
    note: "适合基础薄弱或希望重新系统入门的学习者",
  },
  {
    code: "EN-BIZ",
    title: "商务英语沟通班",
    language: "英语",
    href: "/languages/english/business-communication",
    startDate: "2026-09-12",
    schedule: "周六 09:30—12:30",
    teacher: "英语职业语言教学组",
    location: "文一西路教学点",
    status: "开放咨询",
    note: "面向需要会议、邮件与客户沟通能力的学习者",
  },
  {
    code: "FR-A1.1",
    title: "法语启蒙 A1.1",
    language: "法语",
    href: "/languages/french/a1-1",
    startDate: "2026-09-08",
    schedule: "周二、周五 18:30—20:00",
    teacher: "法语分级教学组",
    location: "文一西路教学点",
    status: "预约测评中",
    note: "零基础可报名，首阶段重点建立语音与日常表达",
  },
  {
    code: "JP-START",
    title: "日语零基础启蒙",
    language: "日语",
    href: "/languages/japanese/starter",
    startDate: "2026-09-09",
    schedule: "周三 18:30—20:30、周日 10:00—12:00",
    teacher: "日语分级教学组",
    location: "文一西路教学点",
    status: "开放咨询",
    note: "从假名、发音与第一批生活表达开始",
  },
  {
    code: "KR-START",
    title: "韩语零基础启蒙",
    language: "韩语",
    href: "/languages/korean/starter",
    startDate: "2026-09-13",
    schedule: "周日 13:30—16:30",
    teacher: "韩语分级教学组",
    location: "文一西路教学点",
    status: "接受意向登记",
    note: "适合希望系统掌握韩文字母与基础会话的学习者",
  },
  {
    code: "EN-IELTS",
    title: "雅思基础与能力衔接班",
    language: "英语",
    href: "/languages/english/ielts-foundation",
    startDate: "2026-09-14",
    schedule: "周一、周三 18:30—20:30",
    teacher: "英语考试辅导教学组",
    location: "文一西路教学点",
    status: "预约测评中",
    note: "建议具备 A2 及以上基础，入班前安排能力诊断",
  },
];

export const upcomingActivities: UpcomingActivity[] = [
  {
    date: "08.22",
    day: "周六",
    time: "14:00—15:30",
    category: "课程说明",
    title: "秋季课程与分班测评说明会",
    summary: "介绍四个语种的分级路径、测评方式与秋季班次，并预留一对一咨询时间。",
    location: "语言中心多功能教室",
    status: "预约开放",
  },
  {
    date: "08.29",
    day: "周六",
    time: "13:30—16:30",
    category: "体验活动",
    title: "多语种零基础体验日",
    summary: "英语、法语、日语、韩语短时体验课连续开放，帮助学习者比较不同语种的入门方式。",
    location: "文一西路教学点",
    status: "预约开放",
  },
  {
    date: "09.12",
    day: "周六",
    time: "18:30—20:00",
    category: "语言社群",
    title: "新学期语言角：第一次见面",
    summary: "围绕校园、城市和新学期计划展开轻量交流，设置初级与进阶任务。",
    location: "语言中心共享学习空间",
    status: "即将开放",
  },
];

export const resourceDownloads = [
  {
    title: "2026 秋季课程与活动安排",
    meta: "PDF · 课程排期",
    description: "查看本学期班次、分班测评、近期活动与咨询说明。",
    href: "/resources/2026-autumn-course-guide.pdf",
  },
  {
    title: "入学测评准备清单",
    meta: "PDF · 选课工具",
    description: "在咨询前整理学习经历、目标、时间与当前困难。",
    href: "/resources/placement-preparation-checklist.pdf",
  },
  {
    title: "12 周语言学习计划表",
    meta: "PDF · 学习工具",
    description: "按周记录输入、输出、反馈与阶段成果，适合打印使用。",
    href: "/resources/12-week-language-study-plan.pdf",
  },
];

export const findCurrentOffering = (code: string) =>
  currentOfferings.find((offering) => offering.code === code);
