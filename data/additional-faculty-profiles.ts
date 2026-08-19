export type AdditionalFacultyLanguage =
  | "english"
  | "japanese"
  | "korean"
  | "chinese";

export type AdditionalFacultyProfile = {
  language: AdditionalFacultyLanguage;
  name: string;
  school: string;
  experience: { zh: string; en: string };
  focus: { zh: string; en: string };
  bio: { zh: string; en: string };
};

export const additionalFacultyProfiles: AdditionalFacultyProfile[] = [
  {
    language: "english",
    name: "Emily Carter",
    school: "University of British Columbia",
    experience: { zh: "8 年以上英语教学经验", en: "More than 8 years of English teaching" },
    focus: { zh: "学术英语、商务沟通、雅思、发音与写作", en: "Academic English, business communication, IELTS, pronunciation and writing" },
    bio: {
      zh: "拥有英属哥伦比亚大学英语作为第二语言教学方向教育学硕士学位，面向成人、国际学生和职场人士设计定制课程，具备从初级到高级的课堂及线上教学经验。",
      en: "An experienced English instructor with a Master of Education in Teaching English as a Second Language from the University of British Columbia. She develops customized lessons for adult learners, international students and professionals, and has taught beginner-to-advanced classes both in person and online.",
    },
  },
  {
    language: "english",
    name: "Daniel Thompson",
    school: "McGill University",
    experience: { zh: "6 年以上英语教学经验", en: "More than 6 years of English teaching" },
    focus: { zh: "英语会话、职业英语、大学预备与演讲表达", en: "Conversation, professional English, university preparation and presentations" },
    bio: {
      zh: "毕业于麦吉尔大学教育学专业，并完成 TESL 教学法培训。长期服务青少年、大学生和职场人士，重视自然词汇、语法准确度、听力理解与真实沟通。",
      en: "A McGill University education graduate with professional TESL methodology training. He works with teenagers, university students and professionals, emphasizing natural vocabulary, grammatical accuracy, listening, presentation skills and real-world communication.",
    },
  },
  {
    language: "english",
    name: "Sophia Bennett",
    school: "University of Toronto",
    experience: { zh: "英语教学与学术写作经验", en: "ESL and academic-writing experience" },
    focus: { zh: "学术写作、雅思、面试、演讲与高级词汇", en: "Academic writing, IELTS, interviews, presentations and advanced vocabulary" },
    bio: {
      zh: "拥有多伦多大学英语文学学士及教学硕士学位，曾辅导国际学生准备大学申请、雅思、求职面试和专业演讲，善于运用项目任务与真实语料提升表达。",
      en: "A certified English instructor with a BA in English Literature and a Master of Teaching from the University of Toronto. She supports international students preparing for university admission, IELTS, interviews and professional presentations through project-based activities and authentic materials.",
    },
  },
  {
    language: "english",
    name: "Michael Anderson",
    school: "Concordia University",
    experience: { zh: "7 年英语教学经验", en: "7 years of English teaching" },
    focus: { zh: "通用英语、职场沟通、托福与个别辅导", en: "General English, workplace communication, TOEFL and individual tutoring" },
    bio: {
      zh: "拥有康考迪亚大学应用语言学学位及 TESL 证书，具备成人、青少年和多文化课堂经验，善于诊断学习困难并以语法基础、角色扮演和情境交流制定个性化计划。",
      en: "A professional educator with a degree in Applied Linguistics from Concordia University and TESL certification. He teaches adults and young learners in multicultural settings and combines language foundations with speaking practice, role-play, media and personalized study plans.",
    },
  },
  {
    language: "japanese",
    name: "山田 美咲 · Misaki Yamada",
    school: "Waseda University",
    experience: { zh: "7 年以上日语教学经验", en: "More than 7 years of Japanese teaching" },
    focus: { zh: "分级日语、JLPT N5–N1、会话、汉字与文化适应", en: "Level-based Japanese, JLPT N5–N1, conversation, kanji and cultural guidance" },
    bio: {
      zh: "毕业于早稻田大学日本语言文学专业并完成日语教育专业培训，长期面向国际学生开展初级至高级教学，也为赴日学习、旅行和工作的学员提供文化指导。",
      en: "A Waseda University Japanese Language and Literature graduate with professional training in Japanese language education. She teaches international learners from beginner through advanced levels and provides cultural guidance for study, travel and work in Japan.",
    },
  },
  {
    language: "japanese",
    name: "佐藤 健太 · Kenta Sato",
    school: "Keio University",
    experience: { zh: "6 年以上日语教学经验", en: "More than 6 years of Japanese teaching" },
    focus: { zh: "实用会话、商务日语、敬语、邮件与 JLPT", en: "Practical communication, business Japanese, keigo, email and JLPT" },
    bio: {
      zh: "拥有庆应义塾大学语言学学士学位，主要面向成人、大学生及日企相关职场人士授课，重视母语者常用自然表达、职场词汇、邮件写作和演讲技能。",
      en: "A Keio University linguistics graduate specializing in practical and business Japanese. He teaches adults, university students and professionals working with Japanese companies, with close attention to natural expression, keigo, email, presentations and JLPT preparation.",
    },
  },
  {
    language: "japanese",
    name: "高橋 彩乃 · Ayano Takahashi",
    school: "Sophia University",
    experience: { zh: "跨文化日语教学经验", en: "Japanese teaching and intercultural-communication experience" },
    focus: { zh: "日语入门、会话、汉字策略与 JLPT N4–N2", en: "Beginner Japanese, conversation, kanji strategies and JLPT N4–N2" },
    bio: {
      zh: "毕业于上智大学并完成认证日语教师培训项目，拥有跨文化教学背景和小组课、个别课经验，善于把日本媒体、日常情境与文化主题融入结构化课堂。",
      en: "A Sophia University graduate who completed a certified Japanese Language Teacher Training Program. She has taught learners from North America, Europe and Asia in group and private classes, combining structured lessons with media, everyday situations and cultural topics.",
    },
  },
  {
    language: "japanese",
    name: "中村 翔太 · Shota Nakamura",
    school: "Osaka University",
    experience: { zh: "8 年教学与课程研发经验", en: "8 years of teaching and curriculum development" },
    focus: { zh: "高级语法、学术日语、正式写作、商务沟通与 JLPT N2/N1", en: "Advanced grammar, academic Japanese, formal writing, business communication and JLPT N2/N1" },
    bio: {
      zh: "拥有大阪大学日本研究硕士学位，曾为准备升读日本大学的国际学生和赴日工作的专业人士授课，并通过个性化进度评估识别薄弱环节、建立明确目标。",
      en: "An Osaka University Japanese Studies master's graduate with experience teaching international students preparing for Japanese universities and professionals relocating to Japan. He uses personalized progress assessments to identify weaknesses and set clear objectives.",
    },
  },
  {
    language: "korean",
    name: "김서연 · Seo-yeon Kim",
    school: "Yonsei University",
    experience: { zh: "7 年韩语教学经验", en: "7 years of Korean teaching" },
    focus: { zh: "TOPIK、韩语会话、发音、语法与学术写作", en: "TOPIK, conversation, pronunciation, grammar and academic writing" },
    bio: {
      zh: "毕业于延世大学国语国文专业并完成正规韩语教师培训，覆盖初级至高级学习者，常将韩国文化、媒体与日常生活情境融入课堂。",
      en: "A Yonsei University Korean Language and Literature graduate with formal Korean-language teacher training. She works with beginner-to-advanced learners and regularly integrates culture, media and everyday situations into lessons.",
    },
  },
  {
    language: "korean",
    name: "박지훈 · Ji-hoon Park",
    school: "Korea University",
    experience: { zh: "6 年以上课堂与个别辅导经验", en: "More than 6 years of classroom and private tutoring" },
    focus: { zh: "实用沟通、职业韩语、商务表达与 TOPIK", en: "Practical communication, professional Korean, business language and TOPIK" },
    bio: {
      zh: "拥有高丽大学语言学学士学位，专注日常会话、语法、词汇、商务韩语和考试准备，尤其善于帮助中级学习者改善自然句式、听力和口语流利度。",
      en: "A Korea University linguistics graduate specializing in practical and professional Korean. He is particularly experienced in helping intermediate learners improve natural sentence structure, listening comprehension and speaking fluency.",
    },
  },
  {
    language: "korean",
    name: "이민지 · Min-ji Lee",
    school: "Ewha Womans University",
    experience: { zh: "线上与线下韩语教学经验", en: "Online and in-person Korean teaching experience" },
    focus: { zh: "韩语入门、韩文字母、会话、发音与 TOPIK I/II", en: "Beginner Korean, Hangul, conversation, pronunciation and TOPIK I/II" },
    bio: {
      zh: "拥有梨花女子大学对外韩语教学硕士学位，服务大学生、职场人士和青少年学习者，通过互动练习与个性化反馈支持稳定进步。",
      en: "An Ewha Womans University master's graduate in Teaching Korean as a Foreign Language. She teaches university students, professionals and younger learners through online and in-person courses, using interactive practice and personalized feedback.",
    },
  },
  {
    language: "korean",
    name: "최현우 · Hyun-woo Choi",
    school: "Seoul National University",
    experience: { zh: "8 年以上韩语教学经验", en: "More than 8 years of Korean teaching" },
    focus: { zh: "强化韩语、大学预备、商务沟通、敬语与正式表达", en: "Intensive Korean, university preparation, business communication, honorifics and formal language" },
    bio: {
      zh: "拥有首尔大学韩国语教育学位，曾承担面向外国学生的强化课程、大学入学准备和商务沟通课程，重视自然交流、敬语体系与文化语境。",
      en: "A Seoul National University Korean Language Education graduate with experience in intensive programs, university-entrance preparation and business communication. His courses emphasize natural communication, honorifics, formal Korean and cultural context.",
    },
  },
  {
    language: "korean",
    name: "정수빈 · Soo-bin Jung",
    school: "Sogang University",
    experience: { zh: "5 年以上韩语教学经验", en: "More than 5 years of Korean teaching" },
    focus: { zh: "会话流利度、听力、日常表达、发音与 TOPIK 规划", en: "Speaking fluency, listening, everyday expressions, pronunciation and TOPIK planning" },
    bio: {
      zh: "毕业于西江大学并取得韩语教育相关认证，具有多元文化学习者教学经验，课程组织清晰，并提供结构化 TOPIK 学习计划和定期进度评估。",
      en: "A Sogang University graduate with additional Korean-language education certification. She teaches learners from diverse backgrounds and provides structured TOPIK study plans together with regular progress evaluation.",
    },
  },
  {
    language: "korean",
    name: "한유진 · Yu-jin Han",
    school: "Hankuk University of Foreign Studies",
    experience: { zh: "多语与国际教育环境教学经验", en: "Multilingual and international education experience" },
    focus: { zh: "学术韩语、旅行与职业沟通、TOPIK、语音与语法", en: "Academic Korean, travel and professional communication, TOPIK, phonetics and grammar" },
    bio: {
      zh: "拥有韩国外国语大学韩国语言学硕士学位，具备个别课和小组课经验，能够针对语音和复杂语法提供细致纠正与清晰讲解。",
      en: "A certified teacher with a master's degree in Korean Linguistics from Hankuk University of Foreign Studies. She teaches academic, travel and professional Korean and provides detailed pronunciation correction and clear explanations of complex grammar.",
    },
  },
  {
    language: "chinese",
    name: "王雨桐 · Yutong Wang",
    school: "Beijing Normal University",
    experience: { zh: "7 年以上国际中文教学经验", en: "More than 7 years of Mandarin teaching" },
    focus: { zh: "HSK、中文会话、汉字、语音与学术中文", en: "HSK, conversation, characters, pronunciation and academic Chinese" },
    bio: {
      zh: "毕业于北京师范大学汉语教育专业，并完成汉语国际教育方向研究生学习，曾面向儿童、大学生和成人职场人士开展国际中文教学。",
      en: "A Beijing Normal University Chinese Language Education graduate with postgraduate study in Teaching Chinese to Speakers of Other Languages. She has taught children, university students and adult professionals from diverse language backgrounds.",
    },
  },
  {
    language: "chinese",
    name: "李晨曦 · Chenxi Li",
    school: "Beijing Language and Culture University",
    experience: { zh: "6 年以上国际中文教学经验", en: "More than 6 years of Mandarin teaching" },
    focus: { zh: "HSK、口语、阅读写作、声调与自然句式", en: "HSK, speaking, reading, writing, tones and natural sentence patterns" },
    bio: {
      zh: "拥有北京语言大学汉语国际教育硕士学位，覆盖初级至高级课程，尤其重视声调、发音及自然句式的形成，并结合中国文化开展语言训练。",
      en: "A Beijing Language and Culture University master's graduate in Teaching Chinese to Speakers of Other Languages. She teaches beginner-to-advanced learners with particular attention to tones, pronunciation, natural sentence patterns and cultural context.",
    },
  },
  {
    language: "chinese",
    name: "张子涵 · Zihan Zhang",
    school: "East China Normal University",
    experience: { zh: "5 年以上国际中文教学经验", en: "More than 5 years of Mandarin teaching" },
    focus: { zh: "中文入门、会话、HSK 1–6、旅行与职业中文", en: "Beginner Chinese, conversation, HSK 1–6, travel and professional Chinese" },
    bio: {
      zh: "毕业于华东师范大学，具有应用语言学和国际教育背景，兼具课堂与线上教学经验，善于通过角色扮演、实用对话和结构化词汇复习建立表达信心。",
      en: "An East China Normal University graduate with a background in applied linguistics and international education. She uses role-play, practical dialogues, reading and structured vocabulary review in classroom and online teaching.",
    },
  },
  {
    language: "chinese",
    name: "刘思远 · Siyuan Liu",
    school: "Fudan University",
    experience: { zh: "8 年国际中文教学经验", en: "8 years of Mandarin teaching" },
    focus: { zh: "商务中文、高级会话、正式写作、阅读与 HSK", en: "Business Chinese, advanced conversation, formal writing, reading and HSK" },
    bio: {
      zh: "拥有复旦大学汉语言文学学位及对外汉语教师专业认证，长期服务国际学生和商务人士，能够根据职业或学术目标调整课程并开展口语、发音评估。",
      en: "A Fudan University Chinese Language and Literature graduate with professional certification in teaching Chinese as a foreign language. He adapts courses to the professional and academic goals of international students and business professionals.",
    },
  },
  {
    language: "chinese",
    name: "陈嘉宁 · Jianing Chen",
    school: "Nanjing University",
    experience: { zh: "6 年以上国际中文教学经验", en: "More than 6 years of Mandarin teaching" },
    focus: { zh: "普通话语音、语法、汉字、阅读与 HSK", en: "Mandarin pronunciation, grammar, characters, reading and HSK" },
    bio: {
      zh: "拥有南京大学语言学及应用语言学硕士学位，覆盖初级至高级学习者，并为计划在中国旅行、学习或工作的学生开发定制课程。",
      en: "A Nanjing University master's graduate in Linguistics and Applied Linguistics. She teaches beginner-to-advanced learners and develops customized programs for students planning to travel, study or work in China.",
    },
  },
  {
    language: "chinese",
    name: "赵欣怡 · Xinyi Zhao",
    school: "Shanghai International Studies University",
    experience: { zh: "7 年以上国际中文教学经验", en: "More than 7 years of Mandarin teaching" },
    focus: { zh: "通用中文、HSK、职业中文、写作与文化适应", en: "General Mandarin, HSK, professional Chinese, writing and cultural orientation" },
    bio: {
      zh: "拥有上海外国语大学语言教育硕士学位，专注交际型中文课堂，将结构化语法教学与真实对话、多媒体资源和情境任务相结合。",
      en: "A multilingual Mandarin instructor with a master's degree in Language Education from Shanghai International Studies University. She combines structured grammar teaching with realistic conversations, multimedia resources and scenario-based practice.",
    },
  },
];

export const additionalFacultyByLanguage = (
  language: AdditionalFacultyLanguage,
) => additionalFacultyProfiles.filter((profile) => profile.language === language);
