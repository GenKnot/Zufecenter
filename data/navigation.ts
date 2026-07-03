export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const navigation: NavItem[] = [
  { label: "首页", href: "/" },
  {
    label: "关于中心",
    href: "/about",
    children: [
      { label: "中心简介", href: "/about", description: "了解中心定位与发展历程" },
      { label: "发展历程", href: "/about/history", description: "十余年的课程与服务积累" },
      { label: "教育理念", href: "/about/approach", description: "以真实能力为导向的教学" },
      { label: "组织架构", href: "/about/organization", description: "教学、教研与运营支持" },
    ],
  },
  {
    label: "语种课程",
    href: "/languages",
    children: [
      { label: "英语课程", href: "/languages/english", description: "通用、商务、学术与考试英语" },
      { label: "法语课程", href: "/languages/french", description: "从零基础到综合应用" },
      { label: "日语课程", href: "/languages/japanese", description: "语言能力与文化理解并进" },
      { label: "韩语课程", href: "/languages/korean", description: "系统入门与生活表达" },
    ],
  },
  {
    label: "培训项目",
    href: "/programs",
    children: [
      { label: "通用语言能力", href: "/programs/general", description: "听说读写分级提升" },
      { label: "考试与升学", href: "/programs/exam-preparation", description: "语言考试与留学准备" },
      { label: "商务与职业", href: "/programs/business", description: "真实工作场景沟通" },
      { label: "青少年成长", href: "/programs/young-learners", description: "兴趣与长期能力培养" },
      { label: "企业定制", href: "/programs/corporate", description: "面向组织的培训方案" },
      { label: "短期工作坊", href: "/programs/workshops", description: "小而精的专项训练" },
    ],
  },
  {
    label: "教学实践",
    href: "/practice",
    children: [
      { label: "语言辅导", href: "/practice/tutoring", description: "诊断、答疑与个性化支持" },
      { label: "语言角与社群", href: "/practice/language-clubs", description: "持续发生的课外交流" },
      { label: "文化体验", href: "/practice/cultural-events", description: "从语言进入多元文化" },
      { label: "赛事与展示", href: "/practice/competitions", description: "演讲、写作与成果展示" },
      { label: "研学与交流", href: "/practice/study-tours", description: "主题研学和跨文化实践" },
    ],
  },
  {
    label: "师资与教研",
    href: "/faculty",
    children: [
      { label: "英语教学团队", href: "/faculty/english", description: "英语综合能力与专项教学" },
      { label: "法语教学团队", href: "/faculty/french", description: "法语语言与文化课程" },
      { label: "日语教学团队", href: "/faculty/japanese", description: "日语分级课程与活动" },
      { label: "韩语教学团队", href: "/faculty/korean", description: "韩语入门与综合实践" },
      { label: "教学研究", href: "/research", description: "课程建设与教师发展" },
    ],
  },
  {
    label: "动态资源",
    href: "/news",
    children: [
      { label: "新闻动态", href: "/news", description: "课程、活动与中心记忆" },
      { label: "学习指南", href: "/resources/study-guides", description: "方法、规划与常见问题" },
      { label: "课程资料", href: "/resources/downloads", description: "手册、清单与课堂资料" },
      { label: "合作交流", href: "/collaboration", description: "高校、企业与国际交流" },
      { label: "联系我们", href: "/contact", description: "课程咨询与合作洽谈" },
    ],
  },
];
