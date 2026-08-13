export type ContentPage = {
  slug: string;
  title: string;
  english: string;
  summary: string;
  heroImage: string;
  intro: string[];
  highlights: { title: string; text: string }[];
  sections: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  image?: string;
  imageAlt?: string;
};

export const languagePages: ContentPage[] = [
  {
    slug: "english",
    title: "英语课程",
    english: "English Programs",
    summary: "无论为了课堂、考试还是工作，都从真正能听懂、能表达、能写清楚开始。",
    heroImage: "/images/language-class.png",
    intro: [
      "英语学了很多年，真正开口时仍然犹豫，这是许多学员来到中心时最直接的困扰。我们的课程不把词汇和语法单独摆在课本里，而是把它们放进课堂讨论、邮件写作、会议表达和日常交流中反复使用。",
      "入学前先了解基础、目标和时间安排，再决定从综合能力还是专项课程开始。每个阶段都要完成看得见的表达任务，让学员知道自己哪里进步了，下一步该练什么。",
    ],
    highlights: [
      { title: "分级进阶", text: "从基础巩固到高阶表达，设置清晰的阶段目标。" },
      { title: "场景导向", text: "课堂任务覆盖生活、校园、职场与学术交流。" },
      { title: "及时反馈", text: "课堂表现、阶段任务和学习档案都有清楚回应。" },
      { title: "多元选择", text: "通用、商务、考试、写作、口语等方向灵活组合。" },
    ],
    sections: [
      {
        title: "分级学习路线",
        paragraphs: ["英语班级以综合能力进阶为主线，同时设置口语、商务和雅思衔接等专项。可以从基础一级逐级学习，也可以在测评后进入相应阶段。"],
        bullets: [
          "A1—A2：基础一、基础二，建立日常综合能力",
          "B1—B2：中级一、中级二和高级表达",
          "口语与商务：按真实交流和职业任务集中训练",
          "雅思衔接：先补语言能力，再进入系统备考",
        ],
      },
      {
        title: "建议学习路径",
        paragraphs: [
          "基础不够扎实，先从综合能力课程补齐听说读写；已有稳定基础，则可以直接进入口语、写作、商务或考试专项。课程顾问会结合测评结果给出建议，不让学员在过难或过浅的班级里消耗时间。",
          "一次主题表达、一封正式邮件、一篇结构完整的短文或一场模拟测评，都会成为阶段成果。进步不只体现在分数上，也体现在面对真实任务时更从容。",
        ],
      },
      {
        title: "课堂之外",
        paragraphs: [
          "英语角、阅读分享会、主题演讲、电影讨论和写作诊所，把课堂延伸到更轻松的交流场景。没有标准答案的对话，往往最能练出真正的表达能力。",
        ],
      },
    ],
    image: "/images/student-collaboration.png",
    imageAlt: "学员进行英语主题讨论",
  },
  {
    slug: "french",
    title: "法语课程",
    english: "Programmes de français",
    summary: "从第一句 Bonjour 开始，学会交流，也慢慢读懂法语世界。",
    heroImage: "/images/library-hero.png",
    intro: [
      "法语不仅属于法国，也连接着欧洲、北美、非洲和许多国际组织。有人为留学和工作学习，有人因为旅行、电影或文学走近它；不同起点，都需要一条清楚而不仓促的学习路径。",
      "课程面向零基础和已有学习经历的学员，参照欧洲语言共同参考框架组织阶段目标。语音、语法和词汇会讲清楚，但每节课最终都要回到一句话：在真实场景里，你能不能把意思说出来。",
    ],
    highlights: [
      { title: "零基础友好", text: "从语音规则、问候和基础句型稳步开始。" },
      { title: "四项能力", text: "听、说、读、写在每个阶段同步训练。" },
      { title: "文化融入", text: "结合城市、节日、文学、电影与日常生活。" },
      { title: "目标清晰", text: "适合兴趣、留学、考试与职业等不同方向。" },
    ],
    sections: [
      {
        title: "分级学习路线",
        paragraphs: ["综合课程从 A1.1、A1.2 逐步衔接至 A2、B1 和 B2；已有相应基础的学员可以经沟通或测评进入合适级别。"],
        bullets: [
          "A1.1—A1.2：语音、基础句型与生活沟通",
          "A2：经历叙述、旅行生活与综合读写",
          "B1—B2：主题讨论、正式表达与综合应用",
          "DELF 专项：按目标级别进行四项考试训练",
        ],
      },
      {
        title: "特色模块",
        paragraphs: [
          "分级课程之外，还设有旅行会话、留学生活准备、法语电影赏析、DELF/DALF 训练和法语文化工作坊。它们更聚焦，也更适合在某个阶段集中解决一个具体目标。",
        ],
      },
      {
        title: "适合人群",
        paragraphs: [
          "适合希望掌握第二外语的高校学生、准备前往法语地区学习或生活的人，也适合单纯喜欢法语文化、希望拓展职业与交流边界的成年人。",
        ],
      },
    ],
    image: "/images/study-desk.jpg",
    imageAlt: "法语学习资料与自主学习场景",
  },
  {
    slug: "japanese",
    title: "日语课程",
    english: "日本語プログラム",
    summary: "从五十音到自然会话，把兴趣变成一套扎实、能继续走下去的能力。",
    heroImage: "/images/campus-autumn.png",
    intro: [
      "日语入门并不难，难的是在最初的新鲜感过去以后，仍然清楚自己该学什么。课程从文字和发音打底，再把语法、听解、阅读和表达逐层接起来，不让知识停在零散记忆里。",
      "无论因为兴趣、升学、工作还是赴日交流而学习，都能找到对应方向。需要参加 JLPT 的学员，也可以在综合课程之外加入考试训练。",
    ],
    highlights: [
      { title: "体系完整", text: "从五十音到综合应用，学习路径连贯。" },
      { title: "表达优先", text: "通过情景任务让语言尽快成为可用能力。" },
      { title: "文化比较", text: "理解语言背后的礼仪、社会与生活方式。" },
      { title: "考试支持", text: "针对 JLPT 各阶段提供规划和专项练习。" },
    ],
    sections: [
      {
        title: "分级学习路线",
        paragraphs: ["日语课程从零基础启蒙开始，依次衔接 N5、N4、N3 与 N2 综合能力阶段，也可以在考前进入 JLPT 专项训练。"],
        bullets: [
          "零基础—N5：假名、基础语法与生活会话",
          "N4：复句表达、经历叙述与初中级听读",
          "N3—N2：主题表达、正式沟通与复杂语篇",
          "JLPT 专项：N3/N2 题型、限时训练与模拟复盘",
        ],
      },
      {
        title: "课程采风",
        paragraphs: [
          "动漫视听、城市旅行、饮食文化、职场礼仪和新闻阅读都会进入课堂。日语角、配音体验、短剧展示和文化活动，则让学过的表达有机会真正被用起来。",
        ],
      },
      {
        title: "学习成果",
        paragraphs: [
          "阶段结束时，学员应当能够谈论相应难度的生活与学习主题，读懂常见文本、抓住音频重点，也知道离开课堂后如何继续学习。",
        ],
      },
    ],
    image: "/images/classroom-students.jpg",
    imageAlt: "多语种课堂学习场景",
  },
  {
    slug: "korean",
    title: "韩语课程",
    english: "한국어 프로그램",
    summary: "看懂韩文字母只是第一步，更重要的是在合适的场合说出自然、得体的韩语。",
    heroImage: "/images/student-collaboration.png",
    intro: [
      "韩文字母结构清楚，初学者通常很快就能读出简单词句。课程会利用这种成就感带动后续学习，从发音、基础句型走向生活会话、阅读和短篇表达。",
      "韩语里，称谓、礼貌层级和场合关系非常重要。我们不仅解释一句话“怎么说”，也会说明“什么时候这样说更合适”，让表达更自然、更得体。",
    ],
    highlights: [
      { title: "轻松入门", text: "用结构化方法掌握韩文字母与发音。" },
      { title: "生活表达", text: "围绕校园、旅行、兴趣和日常交往学习。" },
      { title: "文化语境", text: "理解称谓、礼貌层级与真实语言习惯。" },
      { title: "能力拓展", text: "可衔接 TOPIK、留学或综合应用方向。" },
    ],
    sections: [
      {
        title: "分级学习路线",
        paragraphs: ["韩语课程从字母与发音起步，经过初级一、初级二进入中级一和中级二；有考试目标的学员可以衔接 TOPIK II 专项。"],
        bullets: [
          "零基础：字母、发音规则与第一批核心句型",
          "初级一—二：生活沟通、基础听读与短篇表达",
          "中级一—二：主题讨论、正式语体与综合应用",
          "TOPIK II：听力、阅读、写作与模拟训练",
        ],
      },
      {
        title: "文化课堂",
        paragraphs: [
          "韩文书写、影视片段、音乐、传统节日、饮食和当代生活都会成为课堂材料。语言不再只属于教材，也与学员熟悉和感兴趣的内容发生联系。",
        ],
      },
      {
        title: "学习支持",
        paragraphs: [
          "发音纠正、学习清单和阶段任务会贯穿入门阶段。有留学或 TOPIK 目标的学员，还可以据此安排更长线的学习计划。",
        ],
      },
    ],
    image: "/images/learning-consultation.png",
    imageAlt: "教师为学员提供学习咨询",
  },
];

export const programPages: ContentPage[] = [
  {
    slug: "general",
    title: "通用语言能力",
    english: "General Language",
    summary: "把零散学过的知识重新连起来，为考试、工作和长期进阶打好基础。",
    heroImage: "/images/language-class.png",
    intro: [
      "很多人并不是没学过，而是词汇、语法、听力和表达各自分散，遇到真实交流就调动不起来。通用能力课程从现有基础出发，把这些部分重新连成一套可使用的语言能力。",
    ],
    highlights: [
      { title: "能力诊断", text: "了解起点、目标与学习习惯。" },
      { title: "小班互动", text: "每位学员都有练习和被反馈的机会。" },
      { title: "阶段任务", text: "用可完成的成果看见进步。" },
      { title: "学习档案", text: "记录表现与后续提升重点。" },
    ],
    sections: [
      { title: "学习内容", paragraphs: ["每个单元都从一个常见主题出发，让听、说、读、写在同一语境里互相支撑。"], bullets: ["核心词汇和语法", "日常沟通与主题表达", "分级阅读与听力", "基础写作与信息整理"] },
      { title: "适合人群", paragraphs: ["适合基础不够系统、长期缺少使用环境的人，也适合希望在进入考试或职业专项前，把综合能力补齐的学员。"] },
    ],
    image: "/images/classroom-students.jpg",
  },
  {
    slug: "exam-preparation",
    title: "考试与升学辅导",
    english: "Exam Preparation",
    summary: "不靠盲目刷题，用诊断、规划和复盘把有限的备考时间花在关键处。",
    heroImage: "/images/study-desk.jpg",
    intro: [
      "备考最怕两件事：不知道问题在哪里，也不知道时间应该怎么分。课程先看基础与目标，再安排语言补强、题型训练和模考复盘，让每一阶段都有明确重点。",
    ],
    highlights: [
      { title: "入学测评", text: "识别能力短板与时间风险。" },
      { title: "目标规划", text: "按周期拆解阶段任务。" },
      { title: "专项突破", text: "聚焦听说读写薄弱环节。" },
      { title: "模考复盘", text: "用数据调整学习策略。" },
    ],
    sections: [
      { title: "辅导方向", paragraphs: ["不同考试考查方式不同，但都离不开扎实的语言能力和清楚的应试节奏。"], bullets: ["雅思与托福基础/强化", "大学英语能力提升", "JLPT / TOPIK / DELF 等小语种方向", "留学文书语言与面试表达"] },
      { title: "学习流程", paragraphs: ["测评之后形成阶段计划；课堂训练解决方法，课后任务巩固能力，模拟测试检验节奏。每次复盘都要回答：下一分最有可能从哪里拿到。"] },
    ],
    image: "/images/solo-auditorium-study.jpg",
  },
  {
    slug: "business",
    title: "商务与职业语言",
    english: "Business Communication",
    summary: "邮件写得清楚，会议敢于开口，面对客户能够专业、得体地回应。",
    heroImage: "/images/meeting-room.jpg",
    intro: [
      "职业语言不追求复杂辞藻，首先要做到准确、清楚、得体。课程直接从工作任务出发：怎样写一封让人迅速抓住重点的邮件，怎样在会议中表达不同意见，怎样向客户介绍方案。",
    ],
    highlights: [
      { title: "场景化", text: "围绕实际工作任务设计课程。" },
      { title: "可定制", text: "结合岗位、行业与团队目标。" },
      { title: "重表达", text: "提升清晰度、专业度与回应能力。" },
      { title: "跨文化", text: "减少不同沟通习惯造成的误解。" },
    ],
    sections: [
      { title: "核心模块", paragraphs: ["可根据个人或组织需要组合模块。"], bullets: ["商务邮件与书面表达", "会议主持与参与", "产品介绍与专业演示", "客户接待与关系维护", "跨文化团队协作"] },
      { title: "怎样上课", paragraphs: ["课堂使用案例分析、角色模拟、文本修改和录制复盘。练习尽量接近真实工作，同时保留安全、具体的反馈空间。"] },
    ],
    image: "/images/learning-consultation.png",
  },
  {
    slug: "academic",
    title: "学术英语与表达",
    english: "Academic Communication",
    summary: "读文献更快抓住重点，写作更有结构，做英文陈述时把研究讲明白。",
    heroImage: "/images/university-lecture.jpg",
    intro: [
      "学术表达并不是把句子写得更长，而是让观点、证据和逻辑更清楚。课程面向需要阅读文献、撰写英文文本、完成课程展示或参与国际交流的高校学生与研究人员。",
    ],
    highlights: [
      { title: "阅读", text: "提升文献结构识别和信息提取。" },
      { title: "写作", text: "训练段落、论证与语言规范。" },
      { title: "陈述", text: "组织内容并自信回应问题。" },
      { title: "交流", text: "适应研讨、会议与合作语境。" },
    ],
    sections: [
      { title: "课程内容", paragraphs: ["课程可按短期工作坊或连续课程开展。"], bullets: ["学术阅读与笔记", "摘要和短篇学术写作", "展示设计与口头陈述", "国际会议沟通", "研究写作语言辅导"] },
      { title: "课程成果", paragraphs: ["一篇经过多轮修改的文本、一次完整陈述、一份文献阅读档案或一场模拟学术问答，都可以成为课程结束时带得走的成果。"] },
    ],
    image: "/images/library-hero.png",
  },
  {
    slug: "young-learners",
    title: "青少年语言成长",
    english: "Young Learners",
    summary: "不抢跑、不填鸭，让兴趣、阅读和表达能力陪孩子走得更久。",
    heroImage: "/images/classroom-students.jpg",
    intro: [
      "青少年语言学习不该只剩背单词和做题。课程按照年龄与认知特点安排内容，让孩子在故事、阅读、项目和表达中建立兴趣，也慢慢学会管理自己的学习。",
    ],
    highlights: [
      { title: "年龄适配", text: "内容、节奏与任务符合成长阶段。" },
      { title: "兴趣驱动", text: "通过故事、项目和主题探索学习。" },
      { title: "表达成长", text: "让每个孩子都有开口和展示机会。" },
      { title: "家校反馈", text: "定期沟通学习表现和下一步建议。" },
    ],
    sections: [
      { title: "课程方向", paragraphs: ["课程可覆盖英语阅读表达、小语种启蒙、寒暑期主题营和考试基础等方向。"] },
      { title: "课堂怎么学", paragraphs: ["绘本、项目任务、角色表演、主题阅读和小组合作，不是为了把课堂变得热闹，而是让孩子愿意开口、能够理解，也有内容可以表达。"] },
    ],
    image: "/images/student-discussion.jpg",
  },
  {
    slug: "corporate",
    title: "企业定制培训",
    english: "Corporate Training",
    summary: "从企业真实业务出发，让培训内容与岗位、客户和国际沟通直接相关。",
    heroImage: "/images/meeting-room.jpg",
    intro: [
      "同一套商务英语，放在不同企业里未必都有效。我们先了解员工在哪里使用外语、最常遇到什么困难，再把岗位任务、行业表达和企业案例写进课程。",
    ],
    highlights: [
      { title: "需求访谈", text: "明确业务场景、人员基础和成果要求。" },
      { title: "方案共创", text: "课程模块与企业案例共同设计。" },
      { title: "灵活交付", text: "线下、线上、集中或周期式开展。" },
      { title: "效果回顾", text: "形成学习反馈和后续建议。" },
    ],
    sections: [
      { title: "常见主题", paragraphs: ["培训可覆盖以下主题并根据行业进行改写。"], bullets: ["海外客户接待", "跨境会议与演示", "商务邮件与文件", "外派前语言准备", "跨文化团队协作"] },
      { title: "合作流程", paragraphs: ["先访谈需求、了解人员基础，再确认课程方案与交付节奏。培训过程中保留阶段反馈，结项时向组织说明学习表现和后续建议。"] },
    ],
    image: "/images/team.jpg",
  },
  {
    slug: "workshops",
    title: "短期专题工作坊",
    english: "Short Workshops",
    summary: "一次解决一个具体问题，时间不长，但方法和练习都能带走。",
    heroImage: "/images/student-collaboration.png",
    intro: [
      "专题工作坊通常从半天到数周，主题小而明确。它适合想改善某项表达、体验一门新语言，或还没决定是否进入长期课程的人。",
    ],
    highlights: [
      { title: "主题集中", text: "一次解决一个清晰问题。" },
      { title: "重视练习", text: "讲解与现场任务紧密结合。" },
      { title: "便于参与", text: "时间灵活，适合首次体验。" },
      { title: "资料可带走", text: "提供清单、模板或练习建议。" },
    ],
    sections: [
      { title: "近期主题", paragraphs: ["主题会随学习需求和季节活动更新，每一期都保留足够的现场练习。"], bullets: ["英文邮件写作", "三分钟英文表达", "法语旅行会话", "日语五十音体验", "韩文字母与书写", "跨文化沟通入门"] },
      { title: "开放方式", paragraphs: ["可面向个人公开报名，也可为班级、社团与组织定制专场。"] },
    ],
    image: "/images/modern-classroom.jpg",
  },
  {
    slug: "study-abroad",
    title: "留学语言准备",
    english: "Study Abroad Readiness",
    summary: "不只准备一场考试，也提前准备海外课堂、生活沟通和文化适应。",
    heroImage: "/images/graduation.jpg",
    intro: [
      "拿到目标分数只是留学准备的一部分。进入海外课堂以后，怎样参与讨论、读文献、完成展示，怎样处理住宿、出行和日常沟通，同样会影响最初几个月的状态。",
    ],
    highlights: [
      { title: "目标拆解", text: "按申请和入学时间倒排计划。" },
      { title: "学术适应", text: "熟悉阅读、写作与课堂讨论。" },
      { title: "生活沟通", text: "覆盖住宿、出行、就医等情境。" },
      { title: "文化准备", text: "理解差异并建立主动沟通能力。" },
    ],
    sections: [
      { title: "准备模块", paragraphs: ["可按个人时间和目的地组合。"], bullets: ["语言考试规划", "学术阅读与写作", "课堂表达与小组合作", "海外生活会话", "跨文化适应工作坊"] },
      { title: "从哪里开始", paragraphs: ["课程开始前先梳理目的地、申请与入学时间、当前水平和可投入精力，再决定考试、学术或生活沟通模块如何组合。"] },
    ],
    image: "/images/library.jpg",
  },
];

export const practicePages: ContentPage[] = [
  {
    slug: "tutoring",
    title: "语言辅导",
    english: "Language Tutoring",
    summary: "卡在发音、写作或学习安排上时，用一次有准备的辅导把问题说清楚。",
    heroImage: "/images/learning-consultation.png",
    intro: ["有些问题不需要重上一门课，却值得单独花时间解决。语言辅导采用预约方式，集中处理发音、写作、口语表达、学习计划或阶段瓶颈。"],
    highlights: [
      { title: "预约制", text: "围绕明确问题提前准备。" },
      { title: "短时聚焦", text: "一次解决一个重点困难。" },
      { title: "带走方法", text: "辅导结束后知道接下来怎样练。" },
      { title: "多语种", text: "按师资安排开放不同语种时段。" },
    ],
    sections: [
      { title: "辅导内容", paragraphs: ["可提供发音纠正、文本反馈、口语练习、学习规划与课程衔接建议。"] },
      { title: "怎样准备", paragraphs: ["预约时说明问题，并提前准备文本、录音或学习记录。信息越具体，辅导越容易落到真正的困难上。"] },
    ],
    image: "/images/study-desk.jpg",
  },
  {
    slug: "language-clubs",
    title: "语言角与学习社群",
    english: "Language Clubs",
    summary: "有人一起开口、一起读、一起坚持，语言学习就不再是一件孤单的事。",
    heroImage: "/images/student-discussion.jpg",
    intro: ["英语角、法语沙龙、日语交流会和韩语学习小组，是中心持续多年的课外活动。这里不追求标准答案，更在意每个人是否愿意表达、是否能听见不同的观点。"],
    highlights: [
      { title: "低压力", text: "重参与，不以考试和排名为目的。" },
      { title: "主题制", text: "每期围绕生活或文化主题展开。" },
      { title: "同伴学习", text: "在互相回应中积累表达经验。" },
      { title: "彼此连接", text: "在稳定、开放的社群里找到学习伙伴。" },
    ],
    sections: [
      { title: "活动形式", paragraphs: ["常见形式包括主题讨论、读书分享、电影交流、桌游会话与线上打卡。"] },
      { title: "如何参加", paragraphs: ["活动时间、主题和报名方式会发布在新闻动态中，也可通过电话或邮箱咨询近期安排。大多数活动面向相应语种的在读学员开放。"] },
    ],
    image: "/images/student-collaboration.png",
  },
  {
    slug: "cultural-events",
    title: "语言文化体验",
    english: "Cultural Experiences",
    summary: "从电影、书写、节日和日常生活里，理解一句话为什么要这样说。",
    heroImage: "/images/library-hero.png",
    intro: ["文化不是课堂里的几页背景知识。它藏在称谓、礼貌、幽默、节日和日常选择中。文化体验活动用真实材料和共同参与，让语言背后的逻辑变得可感知。"],
    highlights: [
      { title: "多元主题", text: "文学、影视、节日、饮食与城市文化。" },
      { title: "轻量参与", text: "适合新学员和语言初学者。" },
      { title: "动手体验", text: "书写、配音、短剧与主题创作。" },
      { title: "文化比较", text: "在差异中理解自己的表达方式。" },
    ],
    sections: [
      { title: "四季活动", paragraphs: ["春季语言文化周、暑期主题营、秋季多语种体验日和冬季学习成果展，构成中心一年的文化活动节奏。"] },
      { title: "不止于热闹", paragraphs: ["每场活动都从具体语言材料出发，并补充必要的历史背景和当代生活语境，让文化体验既有趣，也有内容。"] },
    ],
    image: "/images/classroom-students.jpg",
  },
  {
    slug: "competitions",
    title: "赛事与成果展示",
    english: "Competitions & Showcase",
    summary: "为一次演讲、一篇文章或一场展示认真准备，往往能看见平时看不见的进步。",
    heroImage: "/images/university-lecture.jpg",
    intro: ["中心根据课程进度组织演讲、写作、朗读、配音和项目展示。对准备参加校内外语言活动的学员，教师也会提供内容、语言和现场表达方面的训练。"],
    highlights: [
      { title: "过程导向", text: "重视准备、修改与复盘。" },
      { title: "多种形式", text: "演讲、写作、朗读、短剧和视频。" },
      { title: "自愿参与", text: "尊重不同性格和学习目标。" },
      { title: "成果沉淀", text: "优秀作品形成年度学习档案。" },
    ],
    sections: [
      { title: "常见活动", paragraphs: ["年度英语演讲展示、多语种朗读会、短篇写作计划、主题配音和学习项目展。"] },
      { title: "辅导支持", paragraphs: ["教师可在内容结构、语言准确度、发音表达和现场呈现等方面提供阶段指导。"] },
    ],
    image: "/images/graduation.jpg",
  },
  {
    slug: "study-tours",
    title: "主题研学与交流",
    english: "Study Tours & Exchange",
    summary: "离开熟悉的课桌，在城市、行业与跨文化交流中检验语言能不能真正派上用场。",
    heroImage: "/images/campus-autumn.png",
    intro: ["主题研学把课程内容带到真实环境中。学员在高校、企业或城市文化场景里观察、提问、交流，再把经历整理成自己的语言成果。"],
    highlights: [
      { title: "主题明确", text: "围绕语言、文化或职业能力设计。" },
      { title: "任务驱动", text: "在参访与交流中完成学习任务。" },
      { title: "行前准备", text: "提供语言和文化背景支持。" },
      { title: "成果回顾", text: "通过分享或作品完成学习闭环。" },
    ],
    sections: [
      { title: "项目方向", paragraphs: ["项目包括高校语言文化访问、企业国际沟通观察、城市文化主题研学和线上国际伙伴交流。"] },
      { title: "项目设计", paragraphs: ["每个项目均围绕清晰的学习主题、行前准备、现场任务与成果分享展开，让一次参访真正形成完整的学习体验。"] },
    ],
    image: "/images/team.jpg",
  },
];

export const aboutPages: ContentPage[] = [
  {
    slug: "leadership",
    title: "中心院长 武鑫教授",
    english: "Leadership",
    summary: "武鑫教授现任本中心院长，推动金融创新、国际化服务与法语复合型人才培养。",
    heroImage: "/images/leadership/wu-xin.jpg",
    intro: ["武鑫教授现任中心院长、浙江财经大学浙商资本市场研究院执行院长，长期从事金融创新、资本市场与社会经济发展研究。"],
    highlights: [
      { title: "金融创新", text: "关注金融创新、资本市场与社会经济发展。" },
      { title: "国际服务", text: "服务浙江企业国际化与跨境金融实践。" },
      { title: "法语融合", text: "推动法语、金融与跨文化能力协同培养。" },
      { title: "产学协同", text: "连接高校、政府、行业与企业资源。" },
    ],
    sections: [
      { title: "教学与人才培养", paragraphs: ["以真实国际商务和跨境金融场景为背景，倡导语言能力与金融、合规及跨文化素养同步发展。"] },
      { title: "研究与社会服务", paragraphs: ["围绕资本市场、科技金融、地方治理和企业国际化开展研究与咨询服务。"] },
    ],
    image: "/images/news/wuxin-finance-forum-2026-a.jpg",
    imageAlt: "武鑫教授在浙江金融投资论坛会场作报告",
  },
  {
    slug: "history",
    title: "发展历程",
    english: "Our History",
    summary: "十一年里，课程形式不断变化，认真服务每一位学习者这件事没有变。",
    heroImage: "/images/campus-autumn.png",
    intro: ["中心的语言培训与学习服务始于2015年前后。最初从英语课程和小型学习活动起步，后来加入小语种、职业沟通、线上学习和企业培训，累计服务学员超过13,000人。"],
    highlights: [
      { title: "2015—2017", text: "从基础英语课程和周末学习活动起步。" },
      { title: "2018—2020", text: "职业语言、小语种和线上支持拓展。" },
      { title: "2021—2023", text: "课程体系、教研与定制服务完善。" },
      { title: "2024—至今", text: "拓展多语种课程与数字化学习服务。" },
    ],
    sections: [
      { title: "从课堂和社群开始", paragraphs: ["最初的课程回应的是学员最直接的英语学习需求。随着一批批学员的反馈和口碑积累，考试辅导、职业沟通与小语种兴趣课程陆续加入。"] },
      { title: "十一年的日常", paragraphs: ["开班、答疑、语言角、阅读分享和教师研讨，这些看似普通的日常，构成了中心真正的历史，也让课程一届比一届更成熟。"] },
    ],
    image: "/images/classroom-students.jpg",
  },
  {
    slug: "approach",
    title: "教育理念",
    english: "Learning Approach",
    summary: "讲清楚，练充分，用得上——好的语言课最终要回到这三件事。",
    heroImage: "/images/language-class.png",
    intro: ["好的语言课既要有清晰目标，也要允许学员按自己的节奏进步。内容不能太轻，难度也不能高到让人失去信心；讲解、练习和反馈之间需要保持平衡。"],
    highlights: [
      { title: "真实任务", text: "围绕生活、学习和工作中的表达任务。" },
      { title: "循序进阶", text: "控制难度，让每个阶段可完成。" },
      { title: "反馈驱动", text: "通过观察和成果调整下一步。" },
      { title: "自主学习", text: "帮助学员建立离开课堂后的方法。" },
    ],
    sections: [
      { title: "课堂设计", paragraphs: ["讲解、示范、练习、反馈与再应用构成基本课堂循环，避免只有输入、没有输出。"] },
      { title: "评价方式", paragraphs: ["评价关注学习过程与综合表现，可使用口头任务、短篇写作、项目作品和阶段测评等多种形式。"] },
    ],
    image: "/images/student-collaboration.png",
  },
  {
    slug: "organization",
    title: "组织架构",
    english: "Organization",
    summary: "一门课的背后，不只有讲台上的教师，还有教研、学员服务与项目团队。",
    heroImage: "/images/meeting-room.jpg",
    intro: ["中心以教学为核心。语种团队负责课堂和学习反馈，教研团队打磨课程与材料，学员服务团队衔接咨询、测评和班务，合作项目团队则面向高校与企业设计专项方案。"],
    highlights: [
      { title: "教学组", text: "英语、法语、日语、韩语课程实施。" },
      { title: "教研组", text: "课程研发、材料更新与教师发展。" },
      { title: "学员服务", text: "咨询、测评、班务与学习反馈。" },
      { title: "合作项目", text: "高校、企业和交流项目协同。" },
    ],
    sections: [
      { title: "怎样协作", paragraphs: ["课程负责人把握教学目标和质量，各语种团队定期集体备课；学员服务团队把课堂反馈带回教研，合作项目团队则把新的使用场景带进课程。"] },
      { title: "共同的标准", paragraphs: ["无论语种和班型如何变化，课程都要做到目标清楚、内容扎实、练习充分、反馈及时。"] },
    ],
    image: "/images/team.jpg",
  },
  {
    slug: "facilities",
    title: "硬件设施",
    english: "Testing Facilities",
    summary: "配备标准化机考工位、独立隔断与听说设备，支持语言测评与多媒体教学。",
    heroImage: "/images/testing-lab-workstations.png",
    intro: [
      "中心配备面向语言测评和多媒体教学的计算机辅助测试空间，可用于听力、口语、阅读、写作等环节的集中训练与阶段测评。",
      "每个考位设置独立隔断、电脑终端和语音耳麦，便于在相对安静、互不干扰的环境中完成机考、模拟测评或听说训练。",
    ],
    highlights: [
      { title: "标准化工位", text: "电脑终端、键盘鼠标与独立考位保持统一配置。" },
      { title: "听说设备", text: "配备语音耳麦，支持听力输入与口语表达训练。" },
      { title: "空间隔断", text: "考位之间设置隔板，降低相互干扰。" },
      { title: "教学兼容", text: "可服务语言测评、模拟机考与多媒体课堂。" },
    ],
    sections: [
      {
        title: "面向机考场景",
        paragraphs: [
          "多媒体测评空间参照标准化语言测试和课堂测评场景配置，适合开展阶段水平测试、听说训练、模拟机考和课程反馈评估。",
        ],
      },
      {
        title: "稳定与安全",
        paragraphs: [
          "工位布局强调独立性、可观察性和运行稳定性，便于教师或考务人员组织测评、巡视现场并处理设备使用问题。",
        ],
      },
    ],
    image: "/images/testing-lab-partitioned-seats.png",
    imageAlt: "标准化语言机考工位与语音耳麦",
  },
];

export const researchPages: ContentPage[] = [
  {
    slug: "teaching-research",
    title: "语言教学研究",
    english: "Language Education Research",
    summary: "把课堂里反复出现的问题留下来研究，再把答案带回下一次教学。",
    heroImage: "/images/modern-classroom.jpg",
    intro: ["为什么同一项口语任务在不同班级效果不同？怎样给写作反馈，学员才知道下一步怎么改？教学研究从这些具体问题开始。"],
    highlights: [
      { title: "课堂观察", text: "从学习表现发现真实问题。" },
      { title: "行动研究", text: "在教学循环中尝试和验证改进。" },
      { title: "案例沉淀", text: "记录有效设计与常见困难。" },
      { title: "同行交流", text: "把个人经验变成团队可以讨论的方法。" },
    ],
    sections: [
      { title: "关注议题", paragraphs: ["分级教学、口语互动、写作反馈、混合式学习、学习动机与多语种课程设计等。"] },
      { title: "成果形式", paragraphs: ["阶段报告、教学案例、课程材料、公开课与专题分享。"] },
    ],
    image: "/images/university-lecture.jpg",
  },
  {
    slug: "curriculum-development",
    title: "课程建设",
    english: "Curriculum Development",
    summary: "课程不是一份写完就不再动的大纲，而是一套需要被课堂不断检验的设计。",
    heroImage: "/images/study-desk.jpg",
    intro: ["学习者的基础会变，语言使用场景也在变。课程团队根据课堂表现和实际需求更新目标、材料、任务与评价，让每一级课程都接得上、用得着。"],
    highlights: [
      { title: "目标清晰", text: "说明每个阶段能够完成什么。" },
      { title: "内容连贯", text: "不同课程之间形成合理衔接。" },
      { title: "任务有效", text: "课堂活动服务于能力目标。" },
      { title: "评价一致", text: "用成果验证课程目标。" },
    ],
    sections: [
      { title: "建设流程", paragraphs: ["需求分析、目标设定、材料开发、试教观察、学习反馈和版本更新。"] },
      { title: "资源积累", paragraphs: ["教案、任务模板、学习清单、题库与数字资源由团队共同维护，成熟内容可以复用，也会随着课堂反馈及时修订。"] },
    ],
    image: "/images/library.jpg",
  },
  {
    slug: "faculty-development",
    title: "教师发展",
    english: "Faculty Development",
    summary: "教师彼此看课、谈课、改课，课程质量才不会只依赖个人经验。",
    heroImage: "/images/meeting-room.jpg",
    intro: ["稳定的课程质量来自团队协作。集体备课统一目标，课堂观摩看见细节，课后复盘则把一次教学经验变成下一次改进。"],
    highlights: [
      { title: "集体备课", text: "共建目标、任务和评价标准。" },
      { title: "课堂观摩", text: "从真实课堂互相学习。" },
      { title: "专题研修", text: "关注教学法与数字工具。" },
      { title: "新师支持", text: "让新教师更快理解课程目标与课堂标准。" },
    ],
    sections: [
      { title: "年度安排", paragraphs: ["春秋季各设置课程复盘与公开课，结合需要组织材料设计、课堂互动和学习评价等专题。"] },
      { title: "开放交流", paragraphs: ["中心邀请高校同行与行业实践者参与专题交流，让教学方法既有专业依据，也能回应真实语言场景。"] },
    ],
    image: "/images/team.jpg",
  },
];

export const collaborationPages: ContentPage[] = [
  {
    slug: "campus",
    title: "高校与校园合作",
    english: "Campus Collaboration",
    summary: "从一场讲座到一学期课程，与院系和学生组织一起把语言项目做得更贴近需求。",
    heroImage: "/images/campus-autumn.png",
    intro: ["不同专业、年级和学生群体，对语言学习的期待并不相同。中心从参与对象和实际目标出发，与合作方共同设计课程、讲座、工作坊和文化活动。"],
    highlights: [
      { title: "联合课程", text: "根据专业与学习需求共建内容。" },
      { title: "主题活动", text: "语言文化周、讲座与工作坊。" },
      { title: "学习支持", text: "针对学生群体安排专项辅导。" },
      { title: "资源共享", text: "共享教学与学术测评资源，协助院系对接国际标准化语言评估体系。" },
    ],
    sections: [
      { title: "合作方式", paragraphs: ["既可以从单场讲座、小型工作坊开始，也可以按学期组织系列课程或长期项目。形式可以灵活，全面对接国际通用语言标准（如 CEFR），确保学术成果与测评目标的清晰互认。"] },
      { title: "如何开始", paragraphs: ["告诉我们参与对象、希望解决的问题和大致时间，我们会据此整理主题、师资、课时与执行建议。"] },
    ],
    image: "/images/university-lecture.jpg",
  },
  {
    slug: "enterprise",
    title: "企业与组织合作",
    english: "Enterprise Partnership",
    summary: "不做与工作脱节的通用培训，让员工学到的表达可以直接回到业务现场。",
    heroImage: "/images/meeting-room.jpg",
    intro: ["企业语言培训应当先谈业务，再谈课程。我们会了解岗位任务、沟通对象和常见难点，再把邮件、会议、接待、谈判或外派准备变成可练习的课堂任务。"],
    highlights: [
      { title: "岗位场景", text: "从真实工作任务提取课程内容。" },
      { title: "分层培训", text: "根据基础和岗位安排班型。" },
      { title: "专题共创", text: "融入企业案例与行业表达。" },
      { title: "阶段反馈", text: "向组织说明学习表现与改进重点。" },
    ],
    sections: [
      { title: "适用项目", paragraphs: ["国际业务团队语言提升、外派前准备、客户沟通、行业英语和跨文化协作。"] },
      { title: "合作流程", paragraphs: ["初步沟通后形成需求简报，再确定测评、课程、时间和交付方式。"] },
    ],
    image: "/images/learning-consultation.png",
  },
  {
    slug: "international",
    title: "国际交流",
    english: "International Exchange",
    summary: "对接国际优质教育资源，建设高标准语言提升与国际化测评合作平台。",
    heroImage: "/images/student-collaboration.png",
    intro: ["中心积极拓展与海外高校、官方教育机构及国际伙伴的合作，在课程共建、师资交流、语言提升与测评服务等方向形成稳定协作，为学习者提供更高标准的国际化语言学习环境。"],
    highlights: [
      { title: "资源对接", text: "连接海外高校与官方教育资源。" },
      { title: "规范管理", text: "遵循统一学术与测评标准。" },
      { title: "平台建设", text: "服务语言提升与国际化测评。" },
      { title: "长期合作", text: "以课程、师资与项目形成持续协作。" },
    ],
    sections: [
      { title: "合作方向", paragraphs: ["合作内容包括国际课程资源引入、语言能力提升项目、教师研修、标准化测评服务和跨文化学习活动。"] },
      { title: "合作标准", paragraphs: ["项目设计强调清晰的学术管理流程、可执行的教学安排和规范化的测评要求，让国际合作真正服务于学习质量提升。"] },
    ],
    image: "/images/library-hero.png",
  },
];

export const resourcePages: ContentPage[] = [
  {
    slug: "study-guides",
    title: "学习指南",
    english: "Study Guides",
    summary: "从制定目标到保持节奏，用更清楚的方法管理长期语言学习。",
    heroImage: "/images/study-desk.jpg",
    intro: ["语言学习容易开始，难的是长期管理。这里把选课、规划、复习、口语练习和阅读中的常见问题讲清楚，让每一段投入都有方向。"],
    highlights: [
      { title: "目标设置", text: "把长期目标转换为阶段任务。" },
      { title: "时间安排", text: "建立可长期坚持的学习节奏。" },
      { title: "有效练习", text: "兼顾输入、输出与反馈。" },
      { title: "阶段复盘", text: "根据表现调整方法。" },
    ],
    sections: [
      {
        title: "先把目标写成一件具体的事",
        paragraphs: ["“提升英语”很难指导每天的行动；“十二周后完成一次五分钟项目介绍”则可以拆成词汇、听力、结构与表达任务。先明确使用场景，再选择课程和材料。"],
        bullets: ["考试：目标日期、当前水平、单项短板", "工作：会议、邮件、汇报或客户沟通", "生活：旅行、日常交流或长期兴趣", "升学：课堂参与、阅读、写作与陈述"],
      },
      {
        title: "建立一周可以重复的节奏",
        paragraphs: ["与其偶尔集中学习三小时，不如安排四到五次短练习，再保留一次完整输出。把学习放进现实日程，才能知道这个计划能否持续。"],
        bullets: ["2 次 20 分钟听力或阅读", "2 次 15 分钟词汇与句型复现", "1 次口语录音或短篇写作", "1 次反馈整理与下周调整"],
      },
      {
        title: "材料不用多，但要反复使用",
        paragraphs: ["同一段材料可以先理解内容，再整理表达，随后进行复述、改写或讨论。材料数量少一些，反而更容易完成从输入到输出的完整循环。"],
      },
      {
        title: "把反馈变成下一次动作",
        paragraphs: ["教师指出的问题需要被重新使用。每周只保留三到五个重点：一个发音问题、一个常见语法、两组表达和一个组织内容的方法，并在下一次任务中主动检查。"],
      },
      {
        title: "每四周做一次阶段复盘",
        paragraphs: ["用同类任务比较变化：重新录制一次表达、重写一封邮件，或完成一次相近难度的阅读。记录已经能够完成的事、仍然反复出现的问题和下一阶段最值得投入的方向。"],
      },
    ],
    image: "/images/library.jpg",
  },
  {
    slug: "downloads",
    title: "课程资料",
    english: "Course Materials",
    summary: "从课程手册到学习清单，让每一份资料都服务于明确的学习任务。",
    heroImage: "/images/library-hero.png",
    intro: ["课程资料包括公开课程安排、阶段学习清单、课堂讲义和自主练习工具。公开资料可以直接下载，班级讲义、作业与教师反馈材料则按课程进度向学员发放。"],
    highlights: [
      { title: "课程手册", text: "课程方向、层级与学习安排。" },
      { title: "学习清单", text: "阶段目标和自主练习建议。" },
      { title: "活动资料", text: "公开课与工作坊配套内容。" },
      { title: "学习工具", text: "规划、复盘与成果记录模板。" },
    ],
    sections: [
      { title: "资料如何获取", paragraphs: ["班级手册与学习清单在入学和阶段转换时发放；课堂讲义、练习与反馈材料由教师按照教学进度统一组织。"] },
      { title: "使用与版权", paragraphs: ["中心原创资料供相应课程学习使用；涉及第三方版权的内容遵循原始授权，学员个人资料与内部教学记录不对外公开。"] },
    ],
    image: "/images/study-desk.jpg",
  },
  {
    slug: "faq",
    title: "常见问题",
    english: "Frequently Asked Questions",
    summary: "关于选课、测评、班型、学习基础和企业培训的常见说明。",
    heroImage: "/images/learning-consultation.png",
    intro: ["第一次咨询时，大家最常问的是从哪里开始、该选什么班、每周要投入多久。我们把这些问题集中说明，方便你先做判断，再与课程顾问细聊。"],
    highlights: [
      { title: "零基础", text: "四个语种均可设置零基础入门班。" },
      { title: "水平测评", text: "部分课程开课前安排基础诊断。" },
      { title: "授课形式", text: "可根据项目采用线下或线上。" },
      { title: "定制培训", text: "需先沟通人数、基础和业务场景。" },
    ],
    sections: [
      { title: "如何选择语种和课程？", paragraphs: ["结合使用目标、兴趣、可投入时间与现有基础选择。拿不准时可先参加课程说明、零基础体验活动或学习咨询。"] },
      { title: "零基础可以直接报名吗？", paragraphs: ["英语、法语、日语、韩语均设置零基础或基础阶段。报名时仍建议说明学习经历和目标，以便判断综合班、口语班或考试班哪一种更合适。"] },
      { title: "哪些课程需要分班测评？", paragraphs: ["中级及以上分级课程、考试辅导和部分专项班建议先完成基础测评。通常包括线上客观题与约十五分钟的学习沟通，重点了解真实起点而非选拔。"] },
      { title: "一个班通常有多少人？", paragraphs: ["综合课程建议班额通常为 8—14 人，口语、商务和高级专项课程会适当缩小。最终人数会结合课程任务和互动要求确定。"] },
      { title: "每周需要投入多少时间？", paragraphs: ["除课堂时间外，建议每周安排 2—4 小时进行复习、输入与输出练习。考试类和高级课程需要更稳定的课外投入。"] },
      { title: "错过课程可以补课吗？", paragraphs: ["补课、回看或资料使用方式按所报班型执行，报名说明中会列明相应安排。连续缺课时建议尽早与班务老师沟通学习衔接。"] },
      { title: "如何记录学习成果？", paragraphs: ["课程通过阶段任务、教师反馈与学习档案记录成长；不同项目还可设置结业展示、作品集或学习报告。"] },
      { title: "企业或院系如何定制项目？", paragraphs: ["先说明参与人数、人员基础、使用场景、期望周期与可上课时间。中心完成需求沟通后，再提出测评方式、课程模块、师资与交付节奏建议。"] },
    ],
    image: "/images/student-discussion.jpg",
  },
  {
    slug: "digital-learning",
    title: "数字学习",
    english: "Digital Learning",
    summary: "用线上资源、学习档案和社群支持延伸课堂，但不让工具取代真正的练习。",
    heroImage: "/images/library-hero.png",
    intro: ["数字工具的价值，是让课前准备更轻、课后反馈更快、学习记录更清楚。课程资料、线上任务与活动通知会按班级需要统一组织。"],
    highlights: [
      { title: "课前准备", text: "通过短材料进入课堂主题。" },
      { title: "课后巩固", text: "提供有重点的练习与反馈。" },
      { title: "学习记录", text: "沉淀阶段成果和教师建议。" },
      { title: "社群连接", text: "支持长期交流与活动组织。" },
    ],
    sections: [
      { title: "课前：用十分钟进入主题", paragraphs: ["课前材料以短文本、音频、词汇提示或背景问题为主，目标是降低进入课堂任务的门槛，而不是提前完成整节课。"] },
      { title: "课后：保留一次可反馈的输出", paragraphs: ["完成一段录音、一封邮件、一篇短文或一次题目复盘。只有留下可以回看和比较的成果，数字平台才真正服务于进步。"] },
      { title: "学习档案：记录重点而不是堆积文件", paragraphs: ["每个阶段保留代表性任务、教师反馈和个人复盘，帮助学习者在课程转换或继续进阶时清楚说明自己的起点与困难。"] },
      { title: "使用原则", paragraphs: ["数字工具应减少重复事务、增加反馈机会，而不是制造额外打卡负担。课程团队会区分必做、选做与拓展内容。"] },
    ],
    image: "/images/study-desk.jpg",
  },
];

export const facultyPages: ContentPage[] = [
  {
    slug: "english",
    title: "英语教学团队",
    english: "English Faculty",
    summary: "覆盖通用英语、商务沟通、学术表达和考试辅导等教学方向。",
    heroImage: "/images/language-class.png",
    intro: ["英语课程跨度很大：有人要重新建立基础，有人准备考试，也有人需要在会议或论文中更准确地表达。团队按学习目标分工，同时共享课程标准与课堂经验。"],
    highlights: [
      { title: "综合能力组", text: "听说读写分级课程。" },
      { title: "职业语言组", text: "商务与行业沟通。" },
      { title: "考试辅导组", text: "测评、规划与专项训练。" },
      { title: "学术表达组", text: "阅读、写作与陈述。" },
    ],
    sections: [
      { title: "怎样一起教好一门课", paragraphs: ["教师共同制定阶段目标、准备关键任务并分析学习反馈。课堂不是各自为战，成熟的方法会进入下一轮课程，反复出现的问题也会被团队集中研究。"] },
      { title: "我们看重什么", paragraphs: ["比讲完多少知识更重要的，是学员能否在新的场景中使用语言。课程因此重视表达任务、具体反馈与可以看见的阶段成果。"] },
    ],
    image: "/images/team.jpg",
  },
  {
    slug: "french",
    title: "法语教学团队",
    english: "French Faculty",
    summary: "负责法语分级课程、文化专题与留学语言准备。",
    heroImage: "/images/library-hero.png",
    intro: ["法语入门既需要耐心打好语音基础，也需要尽早感受到交流的乐趣。团队把分级语言训练与法语世界的文化内容放在同一条学习路径中。"],
    highlights: [
      { title: "语音基础", text: "让初学者尽早建立准确习惯。" },
      { title: "分级课程", text: "从入门到综合应用。" },
      { title: "文化专题", text: "文学、电影与城市文化。" },
      { title: "考试方向", text: "按学习目标安排专项训练。" },
    ],
    sections: [
      { title: "从发音到表达", paragraphs: ["课程不把语音、语法和文化拆成彼此无关的知识点。教师用对话、阅读与主题任务把它们连起来，让学员知道所学内容在什么场景下可以使用。"] },
      { title: "团队协作", paragraphs: ["统一的阶段目标保证课程衔接，共享的课堂案例则让教师可以根据不同班级的表现调整讲解和练习节奏。"] },
    ],
    image: "/images/team.jpg",
  },
  {
    slug: "japanese",
    title: "日语教学团队",
    english: "Japanese Faculty",
    summary: "负责日语入门、分级进阶、能力考试与文化实践课程。",
    heroImage: "/images/campus-autumn.png",
    intro: ["日语学习常在文字、语法和实际表达之间出现落差。团队把结构讲解放进真实场景，引导学员从“看得懂”走向“说得出、用得对”。"],
    highlights: [
      { title: "入门教学", text: "文字、发音与基础句型。" },
      { title: "综合进阶", text: "听解、阅读与表达。" },
      { title: "JLPT", text: "考试规划与专项练习。" },
      { title: "文化活动", text: "配音、朗读与文化体验。" },
    ],
    sections: [
      { title: "清楚的进阶路径", paragraphs: ["从文字语音、基础句型到听解阅读与主题表达，每一阶段都有明确任务。考试目标可以加入专项训练，但不会取代真正的语言能力。"] },
      { title: "课堂之外也要用", paragraphs: ["朗读、配音、文化体验和交流活动为课堂内容增加使用机会，让兴趣学习、考试准备和实际交流可以彼此支撑。"] },
    ],
    image: "/images/classroom-students.jpg",
  },
  {
    slug: "korean",
    title: "韩语教学团队",
    english: "Korean Faculty",
    summary: "负责韩语文字入门、生活表达、综合进阶与文化主题课程。",
    heroImage: "/images/student-collaboration.png",
    intro: ["韩语教学团队从初学者常见困难出发，重视发音、语法结构和礼貌表达的系统讲解。"],
    highlights: [
      { title: "文字入门", text: "理解韩文字母的构成逻辑。" },
      { title: "生活会话", text: "高频主题和真实语境。" },
      { title: "TOPIK", text: "按需求规划考试方向。" },
      { title: "文化体验", text: "书写、影视和当代生活。" },
    ],
    sections: [
      { title: "先把基础讲明白", paragraphs: ["教师会解释韩文字母的构成、发音变化和句子结构，不要求学员靠死记硬背跨过入门阶段。清楚的方法能让练习更有把握。"] },
      { title: "把礼貌表达放进场景", paragraphs: ["韩语表达与关系、语气和场合密切相关。课程用生活会话、影视片段和文化任务，让学员理解同一句话为什么要换一种说法。"] },
    ],
    image: "/images/team.jpg",
  },
];
