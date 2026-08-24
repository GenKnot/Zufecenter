import type { SyllabusProse } from "@/data/course-syllabus-i18n";

/**
 * 课程大纲的英文散文字段。周次、教学安排由 course-syllabus-i18n.ts 机械推导，
 * 章节标题与教学内容复用 english-courses.ts 的 modules，这里都不重复。
 */
export const enSyllabusProse: Record<string, SyllabusProse> = {
  "EN-A1": {
    prerequisite: "Complete beginners, or learners with only fragmentary English. No prior course required.",
    materials: "English Integrated Skills A1 course pack, pronunciation audio, situation task cards and a stage workbook.",
    classwork: [
      "Build a personal information card; introduce yourself in pairs; listen for names, countries and occupations",
      "Interview a partner about their week; describe a typical working day; complete an information-gap timetable task",
      "Ask for directions on a campus map; plan a simple journey; read transport and venue signs",
      "Order in a restaurant; ask prices in a shop; leave a phone message; rotate through everyday scenes in groups",
    ],
    homework: [
      "Shadow the audio; write a short self-introduction; pronunciation and basic sentence-pattern quiz in week 3",
      "Record your daily routine; practise time expressions; listening and schedule-description stage task in week 6",
      "Write directions from a map; prepare a directions dialogue; situational speaking test in week 9",
      "Consolidation worksheet; speaking recording; prepare the closing situational presentation",
    ],
    assessments: [
      "Week 3: pronunciation and basic sentence patterns.",
      "Week 6: listening comprehension and describing daily arrangements.",
      "Week 9: speaking test on directions and getting around.",
      "Week 12, final: integrated speaking on everyday scenes, basic reading and a short written message.",
    ],
    outcome: "A complete self-introduction, a personal schedule and one everyday-scene conversation.",
  },

  "EN-A2": {
    prerequisite: "Completion of EN-A1, or placement at roughly CEFR A1.",
    materials: "English Integrated Skills A2 course pack, graded listening and reading materials, and a writing task book.",
    classwork: [
      "Retell a weekend experience; tell a story from picture prompts; interview a partner about a memorable event",
      "Compare two travel options; agree a group weekend plan; explain the reasons behind a choice",
      "Doctor and patient role-play; survey daily habits; give advice on improvements",
      "State a view on study habits; take questions from peers; rewrite a badly structured email",
    ],
    homework: [
      "Past-tense practice; a 90-second story recording; narrative speaking quiz in week 3",
      "Write a planning email; practise comparison language; reading and planning-writing test in week 6",
      "Keep a health log; record a piece of advice; service-scene listening and speaking check in week 9",
      "Write a topic paragraph; prepare a two-minute talk; final consolidation",
    ],
    assessments: [
      "Week 3: spoken account of a past experience.",
      "Week 6: reading on travel plans and an email-writing task.",
      "Week 9: listening and speaking task in a health-service scenario.",
      "Week 12, final: integrated listening and reading, a two-minute topic talk and a short email.",
    ],
    outcome: "A personal story, a travel plan and a well-structured everyday email.",
  },

  "EN-B1": {
    prerequisite: "Completion of EN-A2, or placement at roughly CEFR A2.",
    materials: "English Integrated Skills B1-1, a themed reading pack, a listening notebook and a project handbook.",
    classwork: [
      "Share a learning experience; run a learning-strategy interview; summarise a partner's points",
      "Design a profile interview; discuss a community issue; support a view with evidence",
      "Compare two reports; summarise a news item; separate the stance of a headline from the body text",
      "Research a topic in groups; peer-review each other's writing; give a five-minute presentation with questions",
    ],
    homework: [
      "Write a learning reflection; submit the interview recording; grammar and narration quiz in week 3",
      "Write a profile piece; complete the themed reading; reading and opinion writing in week 6",
      "Take news listening notes; write a summary; mid-term test in week 8 and an information-relay task in week 10",
      "Keep a research log; draft and revise an opinion article; prepare the closing presentation",
    ],
    assessments: [
      "Week 3: language knowledge and narrating experience.",
      "Week 6: medium-length reading and an opinion paragraph.",
      "Week 8, mid-term: listening, reading, applied grammar and short writing.",
      "Week 10: news summary and relaying information.",
      "Week 14, final: a three-part opinion article, a five-minute presentation and live questions.",
    ],
  },

  "EN-B1+": {
    prerequisite: "Completion of EN-B1, or placement at a stable CEFR B1.",
    materials: "English Integrated Skills B1-2, multi-source themed materials and a research task book.",
    classwork: [
      "Take apart the argument in a short text; hold a position discussion; practise responding to objections",
      "Analyse a case problem; compare three options; run a decision meeting",
      "Work through a cross-cultural conflict case; rewrite an inappropriate message; simulate a negotiation",
      "Define a research question; carry out interviews; reach conclusions and present them",
    ],
    homework: [
      "Write an argument paragraph; submit the discussion recording; argument-structure test in week 3",
      "Write up a proposal; describe data; written problem-solving task in week 6",
      "Write a case reflection; rewrite an email; mid-term test in week 8 and a role simulation in week 10",
      "Annotate sources; summarise interviews; draft and revise the report",
    ],
    assessments: [
      "Week 3: identifying arguments and stating a position.",
      "Week 6: problem analysis and a recommendation report.",
      "Week 8, mid-term: integrated multi-skill test.",
      "Week 10: cross-cultural case negotiation.",
      "Week 14, final: a multi-source written report, a group presentation and questions.",
    ],
  },

  "EN-B2": {
    prerequisite: "Completion of EN-B1+, or placement at roughly CEFR B1+.",
    materials: "Advanced English Communication B2, critical reading materials, and a discussion and speech task pack.",
    classwork: [
      "Compare near-synonyms; rewrite a text for a different reader; explain a complex idea without preparation",
      "Set several sources against each other; weigh the evidence; write a critical response",
      "Chair a round-table discussion; negotiate between stakeholders; review your own interaction strategies",
      "Rehearse the speech; give and take peer feedback; deliver formally and handle questions",
    ],
    homework: [
      "Keep a collocation log; rewrite a text; precision-of-language check in week 3",
      "Annotate the sources; write a response essay; reading and writing stage exam in week 6",
      "Complete a discussion observation sheet; prepare for the negotiation; live discussion assessment in week 9",
      "Revise the script and visual material; write a personal reflection report",
    ],
    assessments: [
      "Week 3: register and text-editing task.",
      "Week 6: critical reading and a response essay.",
      "Week 9: performance in chairing a discussion and negotiating.",
      "Week 12, final: an 8–10 minute research-based talk, live questions and a written reflection.",
    ],
  },

  "EN-SPK": {
    prerequisite: "CEFR A2 or above recommended; a short speaking diagnostic is completed before the course starts.",
    materials: "Spoken English intensive task pack, pronunciation audio, recording review sheets and situation cards.",
    classwork: [
      "Baseline recording; shadowing; peer feedback on how easy you are to follow",
      "Rotating conversations; information gaps; handling the unexpected",
      "Graded talks of one, two and three minutes",
      "Group discussion; task negotiation; recording the final piece",
    ],
    homework: [
      "Short daily shadowing; record your corrected sounds; pronunciation retest in week 2",
      "Log two real conversations; paired interaction test in week 4",
      "Record a topic talk and assess it yourself; impromptu speaking check in week 6",
      "Prepare the closing recording; analyse your own progress",
    ],
    assessments: [
      "Week 1: establish a baseline speaking recording.",
      "Week 2: pronunciation and intelligibility retest.",
      "Week 4: paired interaction test.",
      "Week 6: impromptu topic talk.",
      "Week 8, final: situational interaction, group discussion and an individual topic talk, compared against the entry recording.",
    ],
  },

  "EN-BIZ": {
    prerequisite: "CEFR B1 or above recommended; please state your role and the main situations in which you use English.",
    materials: "Business communication case pack, an email-revision book, meeting role cards and reporting templates.",
    classwork: [
      "A 30-second professional introduction; pre-meeting small talk; receiving a visitor",
      "Rewrite an ineffective email; handle a client enquiry; write an action confirmation",
      "Chair a short meeting; report progress; deal with disagreement",
      "A three-minute data briefing; a client proposal; questions under pressure",
    ],
    homework: [
      "Record your professional introduction; social communication speaking test in week 2",
      "Submit two rewritten emails; timed email exam in week 4",
      "Build a meeting language checklist; mid-term meeting simulation in week 6, review in week 7",
      "Prepare the briefing script, a slide outline and a question bank",
    ],
    assessments: [
      "Week 2: professional introduction and relationship-building speaking test.",
      "Week 4: timed business email writing.",
      "Week 6, mid-term: simulated meeting and minutes of action items.",
      "Week 10, final: a project briefing or client proposal, live questions and a written follow-up email.",
    ],
  },

  "EN-IELTS": {
    prerequisite: "CEFR A2 or above recommended; a four-skill diagnostic is completed on entry, along with a statement of your target band.",
    materials: "IELTS foundation bridging materials, skill workbooks, speaking cue cards, a marked writing folder and mock papers.",
    classwork: [
      "Four-skill diagnostic; unpacking long sentences; setting up error categories",
      "Practice by question type; scanning races; discussing why answers were wrong",
      "Speaking simulation; paragraph reordering; describing charts; peer feedback",
      "Half and full mock papers; feedback interviews; agreeing what comes next",
    ],
    homework: [
      "Vocabulary review and long-sentence analysis; language foundations quiz in week 3",
      "Intensive listening transcripts and reading review; listening and reading stage test in week 6",
      "Speaking recordings and writing drafts; speaking and writing stage test in week 9",
      "Redo missed items, revise writing, re-record speaking",
    ],
    assessments: [
      "Week 1: four-skill entry diagnostic, not counted towards the final result.",
      "Week 3: vocabulary, grammar and long-sentence comprehension quiz.",
      "Week 6: listening and reading stage test.",
      "Week 9: speaking simulation and a timed writing task.",
      "Weeks 11–12: full mock, score analysis and an individual feedback interview.",
      "The course is positioned as foundation bridging; no fixed score gain or target band is promised.",
    ],
  },

  "FR-A1.1": {
    prerequisite: "Complete beginners. No prior requirement.",
    materials: "French Foundations A1.1, pronunciation audio, situation cards and a basic workbook.",
    classwork: [
      "Spell out names; introduce yourself; exchange basic personal details",
      "Fill in a personal profile; introduce your family; listen for numbers and dates",
      "Use a map to ask for directions; explain your route to class; read signs in public places",
      "Order from a menu; ask prices in a shop; give a short spoken presentation",
    ],
    homework: [
      "Shadow the pronunciation audio; record an introduction; pronunciation and greetings speaking test in week 3",
      "Write a profile card; vocabulary practice; basic listening, reading and sentence-pattern quiz in week 6",
      "Write out a route; prepare a directions dialogue; situational speaking test on directions in week 9",
      "Consolidation review; record an ordering dialogue; prepare the closing situational task",
    ],
    assessments: [
      "Week 3: pronunciation speaking test.",
      "Week 6: listening, reading and language knowledge quiz.",
      "Week 9: speaking test on asking for directions.",
      "Week 12: self-introduction, an ordering or shopping dialogue, and basic reading and writing tasks.",
    ],
  },

  "FR-A1.2": {
    prerequisite: "Completion of FR-A1.1, or command of basic pronunciation, greetings, numbers and common present-tense expressions.",
    materials: "French Foundations A1.2, everyday listening materials and a writing workbook.",
    classwork: [
      "Introduce your family; compare daily routines; interview a partner about their day",
      "Describe a room; give directions from a map; find suitable accommodation",
      "Draw up a shopping list; order a meal; compare products",
      "Issue an invitation; agree a time; put together a weekend plan",
    ],
    homework: [
      "Write a family introduction; record your routine; speaking and grammar quiz in week 3",
      "Describe a home; practise routes; listening and situational exam in week 6",
      "Complete the menu task; record a shopping dialogue; service-scene speaking test in week 9",
      "Write an invitation message; write up the plan; prepare the closing presentation",
    ],
    assessments: [
      "Week 3: family and daily-routine expression.",
      "Week 6: listening and speaking on accommodation and routes.",
      "Week 9: speaking test on ordering and shopping.",
      "Week 12: a weekend plan, an invitation message and integrated listening and reading.",
    ],
  },

  "FR-A2": {
    prerequisite: "Completion of the A1 stage, or placement at CEFR A1.",
    materials: "French Progression A2, a travel-and-services task pack and graded reading materials.",
    classwork: [
      "Tell the story of a trip or of growing up; retell a story from pictures",
      "Check into a hotel; make enquiries at a station; deal with a problem in a service situation",
      "Book a medical appointment; discuss lifestyle; choose between options",
      "Research a French-speaking city; build an itinerary; respond to questions",
    ],
    homework: [
      "Write about an experience; submit a speaking recording; narrative check in week 3",
      "Write a service email; prepare a dialogue; situational listening and speaking exam in week 6",
      "Write health advice; mid-term quiz in week 8 and an opinion task in week 10",
      "Summarise your sources; write up the itinerary; revise the project report",
    ],
    assessments: [
      "Week 3: narrating an experience.",
      "Week 6: travel and services situational exam.",
      "Week 8, mid-term: listening, reading and language knowledge.",
      "Week 10: giving health advice.",
      "Week 14: the city project, an email and an oral presentation.",
    ],
  },

  "FR-B1": {
    prerequisite: "Completion of FR-A2, or placement at CEFR A2.",
    materials: "Intermediate French B1, a social and cultural reading pack, and a formal writing task book.",
    classwork: [
      "Simulate an interview; revise a section of a CV; explain a study plan",
      "Compare cultural reviews; summarise a news item; recommend a book, film or album",
      "Analyse a problem; propose solutions; take part in a structured debate",
      "Choose and research a topic; interview; peer-review reports; present orally",
    ],
    homework: [
      "Write a paragraph of a motivation letter; formal expression exam in week 4",
      "Write a short review; summarise a listening text; mid-term exam in week 8",
      "Write an opinion article; debate and writing check in week 12",
      "Annotate sources; produce a first and final draft of the report",
    ],
    assessments: [
      "Week 4: formal email or statement of motivation.",
      "Week 8, mid-term: integrated listening, reading and writing exam.",
      "Week 12: a short debate and an opinion article.",
      "Week 16: research report, oral presentation and questions.",
    ],
  },

  "FR-B2": {
    prerequisite: "Completion of FR-B1, or placement at a stable CEFR B1.",
    materials: "Advanced French B2, critical reading materials and a formal expression task pack.",
    classwork: [
      "Rewrite a text for different readers; edit faulty sentences; explain a concept",
      "Take apart an editorial; rank the evidence; write a response",
      "Chair a discussion; synthesise views from several sources; work towards consensus",
      "Choose a research topic; rehearse the talk; take part in peer review",
    ],
    homework: [
      "Compile a set of rewritten texts; language-editing exam in week 4",
      "Write an argumentative essay; mid-term reading and writing exam in week 8",
      "Write a synthesis summary; discussion and synthesis writing in week 12",
      "Revise the research article and the speech across several drafts",
    ],
    assessments: [
      "Week 4: register and language editing.",
      "Week 8, mid-term: critical reading and writing.",
      "Week 12: round-table discussion and a synthesis summary.",
      "Week 16: argumentative essay, formal presentation and live questions.",
    ],
  },

  "FR-DELF": {
    prerequisite: "Candidates for A2 or B1 need the corresponding overall level and a confirmed exam date.",
    materials: "DELF A2/B1 graded task books, an analysis of the marking criteria, speaking cue cards and mock papers.",
    classwork: [
      "Sit a diagnostic paper; analyse a sample script; open a personal error file",
      "Practice by question type; timed reading; listening notes",
      "Rotating speaking tests; timed writing; peer marking against the criteria",
      "Full mock; individual feedback; final adjustments",
    ],
    homework: [
      "Classify your errors; skill-by-skill diagnostic feedback in week 2",
      "Complete listening and reading sets; half mock in week 4",
      "Speaking recordings and writing revisions; speaking and writing mock in week 6",
      "Redo missed items; build a personal pre-exam checklist",
    ],
    assessments: [
      "Week 1: diagnostic.",
      "Week 4: half mock in listening and reading.",
      "Week 6: speaking and writing mock.",
      "Weeks 7–8: full mock. A2 and B1 use different materials and marking criteria; passing the exam is not promised.",
    ],
  },

  "JP-START": {
    prerequisite: "Complete beginners. No knowledge of kana required.",
    materials: "Japanese for Absolute Beginners, a kana workbook, pronunciation audio and everyday situation cards.",
    classwork: [
      "Read kana aloud; choose the character you hear; sound out names and loanwords",
      "Exchange names, nationalities and fields of study; describe objects",
      "Build a schedule; interview a partner; describe a day on campus",
      "Order in a restaurant; ask a price; complete a campus map task",
    ],
    homework: [
      "Kana handwriting; shadowing; kana reading and dictation in week 3",
      "Record a self-introduction; basic conversation speaking test in week 5",
      "Write up your schedule; verb practice; listening, reading and sentence-pattern check in week 8",
      "Consolidation review; prepare the closing presentation",
    ],
    assessments: [
      "Week 3: kana reading, handwriting and dictation.",
      "Week 5: self-introduction speaking test.",
      "Week 8: basic listening and reading.",
      "Week 10: an ordering or directions scenario, short reading and writing, and an integrated speaking test.",
    ],
  },

  "JP-N5": {
    prerequisite: "Completion of the beginners' course, or command of kana, basic greetings and simple copula sentences.",
    materials: "Integrated Japanese N5, a basic kanji list, listening materials and unit exercises.",
    classwork: [
      "Describe a day; look for a missing item; invite a classmate",
      "Compare cities; talk about an activity you enjoy; describe a person",
      "Explain campus rules; ask for help; role-play a service situation",
      "Plan a trip; read a notice; give a group introduction",
    ],
    homework: [
      "Verb practice; record your routine; language knowledge quiz in week 3",
      "Write a description; speaking and reading check in week 6",
      "Te-form practice; mid-term exam in week 8 and a situational speaking test in week 10",
      "Write a travel plan; keep a listening log; final revision",
    ],
    assessments: [
      "Week 3: verb conjugation.",
      "Week 6: descriptive expression.",
      "Week 8, mid-term: listening, reading and language knowledge.",
      "Week 10: speaking test on requests and permission.",
      "Week 14: a travel plan, short reading and writing, and an integrated N5-stage assessment.",
    ],
  },

  "JP-N4": {
    prerequisite: "Completion of JP-N5, or placement at roughly JLPT N5 overall.",
    materials: "Japanese Upper Beginner N4, a grammar-function book, graded reading and listening exercises.",
    classwork: [
      "Talk about growing up; explain a change; retell an event",
      "Plan an activity; give advice; negotiate between alternatives",
      "Summarise a news item; relay what a partner said; explain the basis for a judgement",
      "Carry out a survey on everyday life; organise the results; present orally",
    ],
    homework: [
      "Write about an experience; language knowledge and narrative speaking test in week 4",
      "Write a proposal; mid-term listening, reading and writing exam in week 8",
      "Take listening notes; information-relay task in week 12",
      "Write the survey report; review the practice papers",
    ],
    assessments: [
      "Week 4: narrating an experience.",
      "Week 8, mid-term: integrated exam.",
      "Week 12: listening and relaying information.",
      "Week 16: the survey project, an oral report and an N4-stage mock.",
    ],
  },

  "JP-N3": {
    prerequisite: "Completion of JP-N4, or placement at roughly JLPT N4 overall.",
    materials: "Integrated Japanese N3, a long-sentence reading book, news listening and themed writing materials.",
    classwork: [
      "Break sentences into sense units; reorder paragraphs; extract the main point",
      "Listen to an interview; read a notice; summarise orally",
      "Discuss a position; respond to objections; chair a group exchange",
      "Choose and research a topic; peer-review reports; present formally",
    ],
    homework: [
      "Analyse long sentences; reading-structure exam in week 4",
      "Keep a listening log; mid-term listening and reading exam in week 9",
      "Write a short opinion piece; discussion speaking test in week 13",
      "First and final draft of the report; review the practice papers",
    ],
    assessments: [
      "Week 4: long sentences and text-level reading.",
      "Week 9, mid-term: listening, reading and language knowledge.",
      "Week 13: topic discussion.",
      "Week 18: a short report, an oral presentation and an integrated N3-stage mock.",
    ],
  },

  "JP-N2": {
    prerequisite: "Completion of JP-N3, or placement at roughly JLPT N3 overall.",
    materials: "Applied Japanese N2, close-reading materials, workplace communication cases and a research presentation task book.",
    classwork: [
      "Substitute near-synonyms; analyse paragraph logic; summarise",
      "Take a business phone call; revise an email; report a problem",
      "Compare news reports; hold a round-table discussion; synthesise information",
      "Choose a research topic; peer-review the report; rehearse the presentation",
    ],
    homework: [
      "Annotate the close reading; vocabulary and reading exam in week 4",
      "Write a formal email; mid-term applied exam in week 9",
      "Write a news summary; discussion and writing check in week 13",
      "Iterate on the research report and the speech",
    ],
    assessments: [
      "Week 4: close reading and distinguishing usage.",
      "Week 9, mid-term: workplace communication.",
      "Week 13: news synthesis and discussion.",
      "Week 18: research report, formal presentation, live questions and integrated N2-stage practice.",
    ],
  },

  "JP-JLPT": {
    prerequisite: "For the N3 group, N4 level is recommended; for the N2 group, N3. Please confirm your target level and exam date.",
    materials: "N3/N2 graded vocabulary and grammar, reading and listening training books, and mock papers.",
    classwork: [
      "Diagnostic paper; summary of test points; a personal plan",
      "Timed reading; marking up paragraph structure",
      "Predicting options; keyword notes; continuous listening",
      "Full mock; data analysis; adjusting strategy",
    ],
    homework: [
      "Vocabulary and grammar sets; diagnostic feedback in week 2",
      "Reading sets; reading mock in week 4",
      "Listening sets; listening mock in week 6",
      "Redo missed items; build a personal pre-exam checklist",
    ],
    assessments: [
      "Week 1: diagnostic.",
      "Week 4: reading mock.",
      "Week 6: listening mock.",
      "Weeks 7–8: full mock and individual feedback. N3 and N2 use separate papers, groups and criteria; passing the exam is not promised.",
    ],
  },

  "KR-START": {
    prerequisite: "Complete beginners. No knowledge of Hangul required.",
    materials: "Korean for Absolute Beginners, a letter-writing workbook, pronunciation audio and everyday situation cards.",
    classwork: [
      "Spell out names; build syllables from what you hear; recognise common words",
      "Exchange personal details; introduce a classmate; read a name card",
      "Ask the time; describe the classroom; make a personal schedule",
      "Ask directions on campus; order at a café; rotate through everyday dialogues",
    ],
    homework: [
      "Letter handwriting; shadowing; spelling, dictation and pronunciation check in week 3",
      "Record a self-introduction; basic speaking test in week 5",
      "Number discrimination; write up your schedule; listening and reading check in week 8",
      "Consolidation review; prepare the closing presentation",
    ],
    assessments: [
      "Week 3: letter reading and dictation.",
      "Week 5: self-introduction.",
      "Week 8: listening and reading on numbers, time and place.",
      "Week 10: a directions or ordering scenario, basic reading and short writing.",
    ],
  },

  "KR-1": {
    prerequisite: "Completion of the beginners' course, or command of Hangul, basic greetings and simple copula sentences.",
    materials: "Elementary Korean 1, pronunciation consolidation audio, everyday conversation and unit exercises.",
    classwork: [
      "Interview about routines; describe a week; complete a schedule information gap",
      "Order from a menu; ask prices; compare products",
      "Ask for directions from a map; plan a route; explain the purpose of a trip",
      "Talk about your interests; describe campus life; take questions from peers",
    ],
    homework: [
      "Write about your routine; shadowing; verb and speaking quiz in week 3",
      "Write a shopping list; record a dialogue; situational speaking test in week 6",
      "Write out a route; listening and route task in week 9",
      "Draft a talk about your life; prepare the closing presentation",
    ],
    assessments: [
      "Week 3: everyday expression.",
      "Week 6: shopping and ordering scenarios.",
      "Week 9: listening and speaking task on getting around.",
      "Week 12: a short piece about daily life, a personal presentation and integrated listening and reading.",
    ],
  },

  "KR-2": {
    prerequisite: "Completion of KR-1, or placement at an equivalent elementary level.",
    materials: "Elementary Korean 2, graded listening and reading materials, and an everyday writing task book.",
    classwork: [
      "Tell a story from pictures; interview about a trip; sequence events",
      "Issue an invitation; agree a time; build a group itinerary",
      "A medical consultation; explain a problem; propose a solution",
      "Themed reading; a personal story; a group presentation",
    ],
    homework: [
      "Write about an experience; narrative speaking test in week 3",
      "Write an invitation; planning writing and dialogue check in week 6",
      "Write health advice; mid-term exam in week 8 and a situational speaking test in week 10",
      "First draft of the project; review the stage papers",
    ],
    assessments: [
      "Week 3: narrating an experience.",
      "Week 6: invitation and planning task.",
      "Week 8, mid-term: listening, reading and grammar.",
      "Week 10: problem-solving speaking test.",
      "Week 14: a personal piece, a themed presentation and an integrated elementary assessment.",
    ],
  },

  "KR-3": {
    prerequisite: "Completion of KR-2, or placement at roughly TOPIK level 2 overall.",
    materials: "Intermediate Korean 1, a media and culture listening and reading pack, and chart and paragraph writing exercises.",
    classwork: [
      "Share a plan; simulate an interview; relay what a partner said",
      "Review a work; compare cultural practices; summarise a news item",
      "Analyse a community problem; make recommendations; hold a topic discussion",
      "Run a survey; organise the charts; write the report; present",
    ],
    homework: [
      "Write about your goals; relaying and formal expression exam in week 4",
      "Write a short review; mid-term listening, reading and writing exam in week 8",
      "Write an opinion paragraph; discussion and writing check in week 12",
      "First and final draft of the survey report",
    ],
    assessments: [
      "Week 4: formal expression and relaying information.",
      "Week 8, mid-term: integrated exam.",
      "Week 12: discussion of a social issue and paragraph writing.",
      "Week 16: survey report, chart commentary and oral presentation.",
    ],
  },

  "KR-4": {
    prerequisite: "Completion of KR-3, or placement at roughly TOPIK level 3 overall.",
    materials: "Intermediate Korean 2, news and interview materials, and a formal communication and argumentative writing task pack.",
    classwork: [
      "Rewrite across speech levels; simulate a formal request; analyse a case of misjudged politeness",
      "Compare two reports; extract the data; write a synthesis summary",
      "Take apart an argument; hold a round-table discussion; respond to objections",
      "Choose and research a topic; peer-review the report; rehearse the talk",
    ],
    homework: [
      "Rewrite across speech levels; formal communication exam in week 4",
      "Write a news summary; mid-term listening, reading and writing exam in week 8",
      "Write an opinion article; discussion and writing check in week 12",
      "Revise the report and the speech across several drafts",
    ],
    assessments: [
      "Week 4: speech levels and formal requests.",
      "Week 8, mid-term: information analysis.",
      "Week 12: an opinion article and a structured discussion.",
      "Week 16: research report, formal presentation and questions.",
    ],
  },

  "KR-TOPIK": {
    prerequisite: "Completion of KR-2 or roughly TOPIK level 2 recommended; those targeting level 4 should have a stable intermediate command.",
    materials: "TOPIK II listening, reading and writing task books targeting levels 3–4, plus mock papers.",
    classwork: [
      "Sit a diagnostic paper; set up error categories",
      "Practice by question type; listening notes; timed reading",
      "Chart-based writing; expanding paragraphs; feedback draft by draft",
      "Full mock; skill-by-skill review; individual reinforcement",
    ],
    homework: [
      "Vocabulary and grammar sets; diagnostic feedback in week 2",
      "Listening and reading sets; listening and reading stage mock in week 5",
      "Two rounds of writing revision; timed writing exam in week 8",
      "Redo missed items; build a personal pre-exam plan",
    ],
    assessments: [
      "Week 1: diagnostic.",
      "Week 5: listening and reading mock.",
      "Week 8: timed writing.",
      "Weeks 9–10: full mock and individual feedback. Task difficulty is adjusted for a level 3 or level 4 target; no fixed grade is promised.",
    ],
  },
};