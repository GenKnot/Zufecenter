import {
  languageCourses,
  type LanguageCourse,
  type LanguageSlug,
} from "@/data/language-courses";

type EnglishCourseCopy = {
  code: string;
  title: string;
  level: string;
  track: string;
  summary: string;
  audience: string;
  modules: [string, string][];
};

const copies: EnglishCourseCopy[] = [
  {
    code: "EN-A1", title: "English Foundation 1", level: "Entry · CEFR A1", track: "General English",
    summary: "Build pronunciation, essential sentence patterns and the confidence to speak in familiar daily situations.",
    audience: "Learners with limited English, a long break from study or a need to rebuild the foundations systematically.",
    modules: [["Getting to know one another", "Core sounds, introductions, countries and jobs, be and subject pronouns."], ["Everyday life", "Time, dates, routines, the present simple, frequency and basic questions."], ["Around the city", "Places, directions, transport, there is/are and common prepositions."], ["A complete first interaction", "Ordering, shopping, telephone messages and an integrated speaking task."]],
  },
  {
    code: "EN-A2", title: "English Foundation 2", level: "Elementary · CEFR A2", track: "General English",
    summary: "Connect familiar vocabulary into complete messages for everyday life and study.",
    audience: "Learners who understand basic sentences and short texts but need more stable, connected expression.",
    modules: [["Experiences and stories", "The past simple, sequencing, describing people and events, and retelling."], ["Plans and choices", "Future forms, comparisons, advice, travel and study plans."], ["Health and lifestyle", "The body, habits, modal verbs, appointments and asking for help."], ["Expressing a complete idea", "Linking words, short emails, a two-minute talk and an integrated task."]],
  },
  {
    code: "EN-B1", title: "English Intermediate 1", level: "Intermediate · CEFR B1", track: "General English",
    summary: "Move from short answers to structured narration, explanation and personal viewpoints.",
    audience: "Learners with everyday communication skills who want greater range, accuracy and reading confidence.",
    modules: [["Learning and growth", "Learning strategies, sharing experience, the present perfect and follow-up questions."], ["People and society", "Interviews, relationships, communities, relative clauses and supporting an opinion."], ["Media and information", "News essentials, fact and opinion, the passive and reported information."], ["Topic project", "Source reading, group discussion, a viewpoint text and a five-minute presentation."]],
  },
  {
    code: "EN-B1+", title: "English Intermediate 2", level: "Upper-intermediate bridge · CEFR B1+", track: "General English",
    summary: "Handle more complex information by connecting discussion, reading and writing.",
    audience: "Learners who communicate comfortably in daily life and want stronger general English before specialist study.",
    modules: [["Views and arguments", "Claims, reasons, examples, complex links, agreement, challenge and clarification."], ["Problems and solutions", "Urban, environmental and technology topics, causes, comparisons and recommendations."], ["Cross-cultural communication", "Cultural differences, tone, politeness, repairing misunderstanding and case discussion."], ["Integrated research task", "Multiple sources, an interview, a written report and a group presentation."]],
  },
  {
    code: "EN-B2", title: "Advanced English Communication", level: "Advanced · CEFR B2", track: "General English",
    summary: "Develop precise, well-judged communication with stronger accuracy, logic and interaction strategies.",
    audience: "Learners with a stable English foundation who need to progress in academic, public or professional settings.",
    modules: [["Precision and range", "Nuance, collocation, register and ways to condense or develop a complex idea."], ["Critical reading", "Position, evidence and assumptions across sources, followed by a written response."], ["Discussion and negotiation", "Chairing, handling objections, concession, reframing and building consensus."], ["Public communication project", "Research, speech structure, visual support, live questions and reflection."]],
  },
  {
    code: "EN-SPK", title: "English Speaking Intensive", level: "Focused · A2—B1+", track: "Speaking",
    summary: "Increase purposeful speaking time while improving fluency, pronunciation and interaction.",
    audience: "Learners who understand more than they can say or want a focused period of speaking improvement.",
    modules: [["Speaking clearly", "Pronunciation diagnosis, stress, rhythm, thought groups and shadowing."], ["Keeping a conversation going", "Questions, follow-ups, responses, topic changes and repair strategies."], ["Building a complete message", "Narratives, image description, developing views and impromptu frameworks."], ["Real-task week", "Social interaction, problem-solving, discussion and recorded performance review."]],
  },
  {
    code: "EN-BIZ", title: "Business English Communication", level: "Focused · B1 and above", track: "Professional English",
    summary: "Practise English for meetings, email, presentations and cross-cultural teamwork.",
    audience: "Professionals who use English for everyday work, client communication or international collaboration.",
    modules: [["Professional presence", "Roles, business small talk, relationship-building and cross-cultural etiquette."], ["Email and messaging", "Subject lines, requests, replies, tone, difficult messages and follow-up."], ["Meetings and collaboration", "Agendas, updates, clarification, disagreement and confirming action items."], ["Presentations and proposals", "Data, narrative, comparing options, client questions and a simulated pitch."]],
  },
  {
    code: "EN-IELTS", title: "IELTS Foundation and Skills Bridge", level: "Exam-focused · A2+ recommended", track: "Exam preparation",
    summary: "Strengthen the underlying language before building stable IELTS task and test-taking methods.",
    audience: "Prospective IELTS candidates whose vocabulary, grammar or four skills are not yet consistent.",
    modules: [["Diagnosis and language base", "Entry diagnosis, core vocabulary, complex sentences and a study plan."], ["Listening and reading foundations", "Locating information, paraphrase, text structure and error analysis."], ["Speaking and writing foundations", "Developing answers, topic resources, paragraphing, charts and opinions."], ["Integrated practice", "Timed skills practice, a stage mock test, feedback and next-step planning."]],
  },
  {
    code: "FR-A1.1", title: "French Discovery A1.1", level: "Beginner · CEFR A1.1", track: "General French",
    summary: "Begin with sound patterns and a first introduction, establishing reliable French foundations.",
    audience: "Complete beginners or learners who want to rebuild pronunciation and basic sentence patterns.",
    modules: [["Bonjour, enchanté", "The alphabet and sounds, greetings, introductions, subject pronouns and être."], ["Me and my life", "Countries, jobs, numbers, dates, gender, basic articles and avoir."], ["A day in the city", "Places, transport, directions, regular verbs and common prepositions."], ["A first French task", "Ordering in a café, shopping, pronunciation and a situational assessment."]],
  },
  {
    code: "FR-A1.2", title: "French Foundation A1.2", level: "Elementary · CEFR A1", track: "General French",
    summary: "Expand everyday situations and core grammar to move beyond word-by-word expression.",
    audience: "Learners familiar with basic pronunciation and the present tense who want fuller daily communication.",
    modules: [["Family and routine", "Possessives, reflexive verbs, telling time and daily habits."], ["Home and city", "Describing a home, location, the imperative, questions and directions."], ["Food and shopping", "Partitive articles, quantity, preferences, comparison and service encounters."], ["Weekend plans", "The near future, invitations, responses, planning and an integrated speaking task."]],
  },
  {
    code: "FR-A2", title: "French Progression A2", level: "Pre-intermediate · CEFR A2", track: "General French",
    summary: "Talk about experience and plans while handling more complete travel and daily-life interactions.",
    audience: "Learners who have completed A1 and want greater control of tense, listening and connected speech.",
    modules: [["Stories from the past", "The perfect tense, an introduction to the imperfect, narration and follow-up questions."], ["Travel and services", "Accommodation, transport, requests for help, complaints and confirmation."], ["Health and choices", "Health, obligation, advice, pronouns, comparison and giving reasons."], ["French city project", "Research, itinerary design, email writing and a group presentation."]],
  },
  {
    code: "FR-B1", title: "French Intermediate B1", level: "Intermediate · CEFR B1", track: "General French",
    summary: "Discuss familiar social and cultural topics while developing clearer personal viewpoints.",
    audience: "Learners with daily communication skills who want more depth in reading, discussion and writing.",
    modules: [["Study and work", "Education, experience, CVs, motivation, relative pronouns and formal expression."], ["Media and culture", "Reports, reviews, relaying information, pronouns and comparing viewpoints."], ["Society and environment", "Cause, result, condition, discussion and a short debate."], ["Topic outcome project", "Multiple texts, an interview, a written report and an oral presentation."]],
  },
  {
    code: "FR-B2", title: "Advanced French Application B2", level: "Upper-intermediate · CEFR B2", track: "General French",
    summary: "Process complex information and argument for study, work or focused examination preparation.",
    audience: "Learners with a stable intermediate foundation who need French for academic, professional or public use.",
    modules: [["Register and precision", "Formal and informal register, cohesion, paraphrase and language editing."], ["Analysis and argument", "Argument structure, evaluating evidence, concession, rebuttal and critical reading."], ["Public-issue discussion", "Education, technology and culture through round-table discussion and synthesis."], ["Research and presentation", "Source review, argumentative writing, formal speaking and live questions."]],
  },
  {
    code: "FR-DELF", title: "DELF Preparation", level: "Exam-focused · A2/B1", track: "Exam preparation",
    summary: "Understand the four DELF components and assessment criteria, then build reliable test methods.",
    audience: "Learners planning DELF A2 or B1 who already meet the corresponding general-language level.",
    modules: [["Exam diagnosis", "Level confirmation, criteria, individual gaps and a training plan."], ["Listening and reading strategies", "Prediction, locating, paraphrase, verification and timed work."], ["Speaking and writing tasks", "Interaction, viewpoints, letters, short texts and focused feedback."], ["Mock exam and review", "A full simulation, scoring discussion, error review and final planning."]],
  },
  {
    code: "JP-START", title: "Japanese Starter", level: "Beginner · Early N5", track: "General Japanese",
    summary: "Master kana, pronunciation and the first essential patterns for a confident start.",
    audience: "Complete beginners or learners who want to rebuild kana and start systematically.",
    modules: [["Kana and sound", "Basic kana, voiced sounds, long vowels, double consonants and contracted sounds."], ["Meeting for the first time", "Greetings, introductions, demonstratives, statements and questions."], ["My day", "Time, dates, introductory verbs, particles に・で・を and routines."], ["First situational task", "Shopping, ordering, campus directions and a basic conversation showcase."]],
  },
  {
    code: "JP-N5", title: "Elementary Japanese", level: "Elementary · JLPT N5", track: "General Japanese",
    summary: "Build an elementary grammar system and daily communication for common short texts and exchanges.",
    audience: "Learners who know kana and a few patterns and want to complete a systematic elementary stage.",
    modules: [["Life and action", "Verb groups and forms, existence, invitations and daily activities."], ["Description and comparison", "Adjectives, preferences, ability, comparison, people and places."], ["Requests and permission", "The て-form, requests, permission, prohibition and actions in progress."], ["Elementary integrated task", "Short reading, listening, travel planning and a stage assessment."]],
  },
  {
    code: "JP-N4", title: "Pre-intermediate Japanese", level: "Pre-intermediate · JLPT N4", track: "General Japanese",
    summary: "Extend tense, complex sentences, listening and reading to communicate beyond isolated statements.",
    audience: "Learners who have completed an elementary course and want broader ability or JLPT N4 preparation.",
    modules: [["Experience and change", "Plain forms, experience, changes of state, sequence and sentence links."], ["Plans and advice", "Intention, plans, conditions, recommendations and problem-solving dialogue."], ["Information and reporting", "Hearsay, inference, reasons, short news and relaying information."], ["Daily-life project", "A survey, short writing, group reporting and N4-stage practice."]],
  },
  {
    code: "JP-N3", title: "Intermediate Japanese", level: "Intermediate · JLPT N3", track: "General Japanese",
    summary: "Understand longer sentences and express themes using increasingly natural Japanese materials.",
    audience: "Learners with complete elementary grammar who are ready for intermediate reading, listening and expression.",
    modules: [["Long sentences and texts", "Modification, connectors, reference and identifying paragraph focus."], ["Listening and reading in society", "Notices, interviews, short news, note-taking and summary."], ["Views and interaction", "Agreement, disagreement, tact, reasons and topic discussion."], ["Intermediate outcome task", "Theme reading, a short report, oral presentation and N3 assessment."]],
  },
  {
    code: "JP-N2", title: "Upper-intermediate Japanese Application", level: "Upper-intermediate · JLPT N2", track: "General Japanese",
    summary: "Handle complex social and professional texts with more accurate, appropriate expression.",
    audience: "Learners around N3 who need to progress for further study, work or JLPT N2.",
    modules: [["Close reading and nuance", "Abstract vocabulary, near-synonyms, complex connections and argument structure."], ["Professional communication", "Honorific language, email, telephone calls, reports, requests and problem-solving."], ["Social issues", "News listening and reading, position analysis, discussion and summary writing."], ["Research presentation", "Source gathering, report writing, formal speaking and questions."]],
  },
  {
    code: "JP-JLPT", title: "JLPT Intensive Preparation", level: "Exam-focused · N3/N2", track: "Exam preparation",
    summary: "Use timed language, reading and listening practice with systematic review for greater consistency.",
    audience: "Learners who have completed the relevant general level and plan to sit JLPT N3 or N2.",
    modules: [["Diagnosis, vocabulary and grammar", "Ability diagnosis, core test points, nuance and error classification."], ["Reading speed and structure", "Timed methods for short, medium, long and information-search texts."], ["Listening strategies", "Task, key-point, quick-response and integrated comprehension."], ["Mocks and final adjustment", "Full simulations, data review, focused improvement and exam pacing."]],
  },
  {
    code: "KR-START", title: "Korean Starter", level: "Beginner · Early TOPIK 1", track: "General Korean",
    summary: "Understand how Hangul works and move quickly into basic reading and everyday expression.",
    audience: "Complete beginners who want a systematic introduction to letters, sounds and core patterns.",
    modules: [["Understanding Hangul", "Basic vowels and consonants, syllable blocks, final consonants and writing."], ["Meeting for the first time", "Greetings, introductions, countries, jobs and 이에요/예요."], ["Time and place", "Numbers, dates, time, existence expressions and core particles."], ["Campus-life task", "Asking about places, routines, ordering and a situational showcase."]],
  },
  {
    code: "KR-1", title: "Elementary Korean 1", level: "Elementary · TOPIK 1", track: "General Korean",
    summary: "Establish elementary vocabulary and grammar for basic communication in familiar situations.",
    audience: "Learners who know Hangul and basic greetings and want a systematic elementary course.",
    modules: [["What I do every day", "Present tense, common verbs, time, frequency and routines."], ["Eating and shopping", "Quantity, prices, ordering, requests and choices."], ["City and travel", "Location, transport, purpose, directions and itinerary planning."], ["Introducing my life", "Preferences, ability, linked sentences, short writing and speaking."]],
  },
  {
    code: "KR-2", title: "Elementary Korean 2", level: "Pre-intermediate · TOPIK 2", track: "General Korean",
    summary: "Extend tense, reasons and plans for more complete, connected conversation and writing.",
    audience: "Learners who have completed Elementary 1 and want stronger daily communication and literacy.",
    modules: [["Experiences and memories", "Past tense, experience, sequencing and describing photographs."], ["Plans and invitations", "Future, intention, invitations, arrangements and travel plans."], ["Health and problem-solving", "Reasons, advice, obligation, symptoms and service situations."], ["Elementary integrated project", "Short listening and reading, personal writing, presentation and assessment."]],
  },
  {
    code: "KR-3", title: "Intermediate Korean 1", level: "Intermediate · TOPIK 3", track: "General Korean",
    summary: "Move from daily conversation to topic-based expression, reading, listening and paragraph writing.",
    audience: "Learners with elementary ability who want richer discussion or a bridge to TOPIK II.",
    modules: [["Study and work", "Experience, goals, reported speech, formal situations and relaying information."], ["Media and culture", "Film, online media, cultural topics, comparison and responding to views."], ["Life in society", "Public rules, environment, community, causes and solutions."], ["Topic survey project", "Questionnaires, source reading, charts, a report and presentation."]],
  },
  {
    code: "KR-4", title: "Intermediate Korean 2", level: "Upper-intermediate · TOPIK 4", track: "General Korean",
    summary: "Handle complex texts and differences in register for study and professional communication.",
    audience: "Intermediate learners seeking greater accuracy, formal expression and integrated application.",
    modules: [["Register and relationships", "Honorifics, written and spoken style, formal requests and context."], ["Information analysis", "News, interviews, charts, summaries and integrating multiple sources."], ["Views and argument", "Claims, reasons, examples, concession and strategies for advancing discussion."], ["Integrated outcome project", "Topic research, a written report, formal presentation and live questions."]],
  },
  {
    code: "KR-TOPIK", title: "TOPIK II Preparation", level: "Exam-focused · Levels 3—4", track: "Exam preparation",
    summary: "Build methods for listening, reading and writing, using regular review to stabilize performance.",
    audience: "Pre-intermediate learners planning TOPIK II with a target of Level 3 or 4.",
    modules: [["Diagnosis and language knowledge", "Level diagnosis, high-frequency vocabulary and grammar, task map and plan."], ["Listening and reading", "Purpose, main ideas, details, text order and timed strategies."], ["Writing focus", "Sentence completion, chart descriptions, opinion structure and draft feedback."], ["Full mock test", "Complete simulation, score analysis, error grouping and final pacing."]],
  },
];

const copyByCode = new Map(copies.map((copy) => [copy.code, copy]));

function formatDuration(value: string) {
  const match = value.match(/(\d+) 周 · (\d+) 课时/);
  return match ? `${match[1]} weeks · ${match[2]} class hours` : value;
}

function formatFrequency(value: string) {
  const standard = value.match(/每周 (\d+) 次 · 每次 (\d+) 课时/);
  if (standard) return `${standard[1]} sessions per week · ${standard[2]} class hours each`;
  const range = value.match(/每周 (\d+)—(\d+) 次/);
  return range ? `${range[1]}–${range[2]} sessions per week` : value;
}

function formatClassSize(value: string) {
  const match = value.match(/(\d+)—(\d+) 人/);
  return match ? `${match[1]}–${match[2]} learners` : value;
}

function outcomesFor(track: string) {
  if (track === "Exam preparation") {
    return [
      "Understand the tested task types and assessment expectations",
      "Apply practical strategies under timed conditions",
      "Use mock results and feedback to plan focused improvement",
    ];
  }
  if (track === "Speaking") {
    return [
      "Speak more clearly with improved rhythm and intelligibility",
      "Sustain an interaction using questions and response strategies",
      "Deliver a structured short talk with greater confidence",
    ];
  }
  if (track === "Professional English") {
    return [
      "Communicate appropriately in common workplace situations",
      "Write clearer professional email and meeting messages",
      "Present an idea and respond to questions with confidence",
    ];
  }
  return [
    "Use the stage vocabulary and structures in meaningful communication",
    "Complete integrated listening, speaking, reading and writing tasks",
    "Recognize current strengths and the appropriate next learning stage",
  ];
}

export type EnglishCourse = Omit<
  LanguageCourse,
  "title" | "level" | "track" | "summary" | "audience" | "duration" | "frequency" | "classSize" | "outcomes" | "syllabus"
> & {
  title: string;
  level: string;
  track: string;
  summary: string;
  audience: string;
  duration: string;
  frequency: string;
  classSize: string;
  outcomes: string[];
  syllabus: { unit: string; title: string; content: string }[];
};

export const englishCourses: EnglishCourse[] = languageCourses.map((course) => {
  const copy = copyByCode.get(course.code);
  if (!copy) throw new Error(`Missing English course copy for ${course.code}`);

  return {
    ...course,
    languageLabel: {
      english: "English",
      french: "French",
      japanese: "Japanese",
      korean: "Korean",
    }[course.language],
    title: copy.title,
    level: copy.level,
    track: copy.track,
    summary: copy.summary,
    audience: copy.audience,
    duration: formatDuration(course.duration),
    frequency: formatFrequency(course.frequency),
    classSize: formatClassSize(course.classSize),
    outcomes: outcomesFor(copy.track),
    syllabus: copy.modules.map(([title, content], index) => ({
      unit: String(index + 1).padStart(2, "0"),
      title,
      content,
    })),
  };
});

export const englishCoursesByLanguage = (language: LanguageSlug) =>
  englishCourses.filter((course) => course.language === language);

export const findEnglishCourse = (language: string, slug: string) =>
  englishCourses.find(
    (course) => course.language === language && course.slug === slug,
  );
