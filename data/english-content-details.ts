import {
  aboutPages,
  collaborationPages,
  facultyPages,
  practicePages,
  programPages,
  researchPages,
  resourcePages,
  type ContentPage,
} from "@/data/content";

export type EnglishContentParent =
  | "about"
  | "programs"
  | "practice"
  | "faculty"
  | "research"
  | "resources"
  | "collaboration";

type DetailCopy = {
  parent: EnglishContentParent;
  slug: string;
  title: string;
  summary: string;
  points: [string, string, string];
};

const copies: DetailCopy[] = [
  { parent: "about", slug: "leadership", title: "Professor Wu Xin, Dean of the Center", summary: "Professor Wu Xin is Dean of our center, leading work across financial innovation, international service and French-speaking interdisciplinary talent development.", points: ["Research in financial innovation, capital markets and socioeconomic development", "Service for enterprise internationalization and cross-border finance", "Integration of French communication, finance and intercultural competence"] },
  { parent: "about", slug: "history", title: "Our History", summary: "More than ten years of classes, learning communities and teaching development have shaped the center as it is today.", points: ["From English classes and small study groups to a four-language course system", "Regular language clubs, workshops and learner support beyond formal lessons", "Continuous review of curriculum, teaching practice and organizational services"] },
  { parent: "about", slug: "approach", title: "Our Educational Approach", summary: "We turn language knowledge into communication through clear stages, meaningful tasks and feedback learners can use.", points: ["Begin from the learner’s current level, goal and available study time", "Connect vocabulary and grammar with real situations and purposeful tasks", "Use stage outcomes and feedback to make progress and next steps visible"] },
  { parent: "about", slug: "organization", title: "How the Center Works", summary: "Teaching, curriculum, learner support and partnership functions work together around a shared learning brief.", points: ["Language teams deliver courses and respond to learner performance", "Curriculum and research work aligns outcomes, materials and assessment", "Learner support and project teams coordinate placement, classes and partnerships"] },
  { parent: "about", slug: "facilities", title: "Testing Facilities", summary: "Computer-based testing workstations, partitions and audio equipment support language assessment and multimedia teaching.", points: ["Workstations are arranged for computer-based testing and staged language assessment", "Headsets support listening input and spoken-response practice", "Partitioned seats reduce interference during tests, simulations and focused practice"] },

  { parent: "programs", slug: "general", title: "General Language Ability", summary: "Build balanced listening, speaking, reading and writing through a progression suited to your current level.", points: ["A level-based route from foundations to more independent communication", "Integrated work across receptive and productive language skills", "Regular application tasks that show what the learner can now do"] },
  { parent: "programs", slug: "exam-preparation", title: "Examinations and Further Study", summary: "Combine underlying language development with practical preparation for examinations and future study.", points: ["Diagnosis before test strategies, so preparation begins from the real level", "Timed practice, task analysis and feedback across the tested skills", "Study planning that connects a score target with sustainable language growth"] },
  { parent: "programs", slug: "business", title: "Business and Professional Language", summary: "Practise communication for meetings, email, presentations, clients and cross-cultural teamwork.", points: ["Language drawn from workplace situations rather than isolated terminology", "Role-based practice for written, spoken and collaborative communication", "Feedback on clarity, tone, professional judgement and response strategies"] },
  { parent: "programs", slug: "academic", title: "Academic English and Communication", summary: "Develop clearer reading, writing, presentation and discussion for university and research settings.", points: ["Read sources critically and organize useful notes", "Write with a visible claim, evidence and logical progression", "Present academic ideas and respond to questions with greater confidence"] },
  { parent: "programs", slug: "young-learners", title: "Language Growth for Young Learners", summary: "Build interest, expression and lasting study habits through age-appropriate, staged learning.", points: ["Activities matched to age, attention and current language development", "A balance of communication, literacy, projects and cultural exploration", "Constructive feedback for learners and clear progress communication for families"] },
  { parent: "programs", slug: "corporate", title: "Customized Corporate Training", summary: "Design language training around roles, sectors, international work and specific team outcomes.", points: ["Needs analysis based on participants and actual workplace situations", "Flexible language, content, schedule and delivery format", "A review process linking participation with observable communication outcomes"] },
  { parent: "programs", slug: "workshops", title: "Focused Short Workshops", summary: "Address one practical communication challenge through compact, concentrated training.", points: ["A tightly defined theme such as email, presentation or speaking confidence", "Demonstration, practice, feedback and immediate revision in each session", "Formats suitable for individuals, campuses, teams and professional groups"] },
  { parent: "programs", slug: "study-abroad", title: "Language Preparation for Overseas Study", summary: "Prepare for academic communication, everyday adjustment and the practical language demands of studying abroad.", points: ["Connect examination goals with the language needed after admission", "Practise classroom participation, presentations, email and independent study", "Build cross-cultural awareness for daily life and academic expectations"] },

  { parent: "practice", slug: "tutoring", title: "Language Tutoring", summary: "Use diagnosis, questions and focused feedback to solve specific learning difficulties.", points: ["Clarify whether the obstacle is knowledge, practice, strategy or confidence", "Work on a manageable target through examples and guided correction", "Leave with a practical next step for independent practice"] },
  { parent: "practice", slug: "language-clubs", title: "Language Clubs and Learning Communities", summary: "Create regular, low-pressure opportunities to speak, listen and learn with others.", points: ["Themes that give every participant a clear reason to contribute", "Teacher or facilitator support without turning the activity into another lecture", "A continuing community that helps learners maintain practice between courses"] },
  { parent: "practice", slug: "cultural-events", title: "Language and Cultural Experiences", summary: "Explore how language lives in customs, media, everyday choices and creative expression.", points: ["Use authentic cultural material at a level participants can engage with", "Connect vocabulary and expressions with the situations that give them meaning", "Encourage observation, comparison and respectful cross-cultural discussion"] },
  { parent: "practice", slug: "competitions", title: "Competitions and Learning Showcases", summary: "Give speaking, writing and project work a real audience and a visible outcome.", points: ["Preparation that treats the event as a learning process, not only a result", "Clear criteria for content, language, delivery and reflection", "Opportunities to share progress through speeches, writing and collaborative work"] },
  { parent: "practice", slug: "study-tours", title: "Themed Study Visits and Exchange", summary: "Take language tasks into campuses, organizations and cultural settings where observation leads to communication.", points: ["A clear theme and communication brief before each visit", "Guided observation, questions, interviews or collaborative tasks on site", "A final report, presentation or reflection that turns experience into learning"] },

  { parent: "faculty", slug: "english", title: "English Teaching Team", summary: "Shared standards connect general English, speaking, academic, professional and examination teaching.", points: ["Teachers plan around common stage outcomes while contributing specialist strengths", "Classroom evidence and learner feedback inform regular course review", "Team development links general progression with focused course pathways"] },
  { parent: "faculty", slug: "french", title: "French Teaching Team", summary: "French language progression is taught together with cultural context and practical communication.", points: ["CEFR-aligned stages from first pronunciation to independent expression", "Integrated listening, speaking, reading and writing in every level", "Focused support for cultural learning and DELF preparation"] },
  { parent: "faculty", slug: "japanese", title: "Japanese Teaching Team", summary: "Structured explanation and meaningful use help learners connect script, grammar and natural communication.", points: ["A systematic path from kana through intermediate language development", "Classroom tasks that move learners from recognition to appropriate use", "Integrated support for practical communication and JLPT progression"] },
  { parent: "faculty", slug: "korean", title: "Korean Teaching Team", summary: "Clear foundations and repeated practice support progress from Hangul to connected intermediate expression.", points: ["Systematic work on sound, script, structure and high-frequency language", "Everyday situations and cultural context used to make learning memorable", "Progression that supports both practical communication and TOPIK goals"] },

  { parent: "research", slug: "teaching-research", title: "Language Teaching Research", summary: "Classroom observation turns recurring learner difficulties into questions the teaching team can examine.", points: ["Start with visible learner performance rather than abstract trends", "Use small trials, discussion and evidence to test teaching responses", "Share findings in forms that can improve everyday classroom decisions"] },
  { parent: "research", slug: "curriculum-development", title: "Curriculum Development", summary: "Align outcomes, classroom tasks, materials and assessment across each language progression.", points: ["Define what learners should be able to do at the end of each stage", "Choose content and practice that directly support those outcomes", "Review transitions so that one course prepares learners for the next"] },
  { parent: "research", slug: "faculty-development", title: "Faculty Development", summary: "Collective planning, peer observation and teaching cases help professional learning remain practical.", points: ["Shared preparation makes goals and quality expectations more consistent", "Observation creates a concrete basis for professional discussion", "Reflection turns individual experience into knowledge the team can use"] },

  { parent: "resources", slug: "study-guides", title: "Study Guides", summary: "Practical guidance helps learners set goals, build routines and use limited study time more effectively.", points: ["Choose a goal specific enough to guide weekly practice", "Balance input, active recall, communication and review", "Adjust the routine using evidence from tasks and teacher feedback"] },
  { parent: "resources", slug: "downloads", title: "Course Materials", summary: "Course handbooks, checklists and selected learning materials are shared in the context where they are most useful.", points: ["Class information helps learners understand level and expectations", "Learning checklists support preparation and review between lessons", "Teaching materials are matched to the current class rather than offered as an unstructured archive"] },
  { parent: "resources", slug: "faq", title: "Frequently Asked Questions", summary: "Clear answers about levels, placement, schedules and learning expectations make course decisions easier.", points: ["Choose a language and level based on evidence, not only interest", "Confirm current dates, format, fees and availability before enrolment", "Ask for a placement conversation when previous study does not fit a simple label"] },
  { parent: "resources", slug: "digital-learning", title: "Digital Learning", summary: "Use digital tools with a clear purpose so technology supports, rather than fragments, language practice.", points: ["Select tools for a specific skill or recurring learning problem", "Combine short digital practice with deeper reading, writing and communication", "Review progress regularly instead of collecting more applications and resources"] },

  { parent: "collaboration", slug: "campus", title: "Campus Partnerships", summary: "Co-design courses, workshops and language assessment support for the needs of a particular student community.", points: ["Begin with the participants, academic context and desired outcome", "Combine language learning with disciplines, student life and campus initiatives", "Share teaching and academic assessment resources aligned with international language standards such as CEFR"] },
  { parent: "collaboration", slug: "enterprise", title: "Enterprise and Organizational Partnerships", summary: "Build training from workplace situations, participant roles and the organization’s international communication needs.", points: ["Identify high-frequency tasks and communication risks before designing content", "Use relevant cases, simulations and documents without exposing sensitive information", "Review both participation and practical transfer back to the workplace"] },
  { parent: "collaboration", slug: "international", title: "International Exchange", summary: "Connect international education resources with language advancement, academic standards and assessment-oriented services.", points: ["Build cooperation with universities, official education organizations and institutional partners", "Follow clear academic management and consistent assessment expectations", "Support a high-standard platform for language advancement and international assessment readiness"] },
];

const sourceGroups: Record<EnglishContentParent, ContentPage[]> = {
  about: aboutPages,
  programs: programPages,
  practice: practicePages,
  faculty: facultyPages,
  research: researchPages,
  resources: resourcePages,
  collaboration: collaborationPages,
};

export type EnglishContentDetail = DetailCopy & {
  heroImage: string;
  image?: string;
};

export const englishContentDetails: EnglishContentDetail[] = copies.map(
  (copy) => {
    const source = sourceGroups[copy.parent].find(
      (page) => page.slug === copy.slug,
    );
    if (!source) {
      throw new Error(`Missing source page for ${copy.parent}/${copy.slug}`);
    }
    return {
      ...copy,
      heroImage: source.heroImage,
      image: source.image,
    };
  },
);

export const findEnglishContentDetail = (parent: string, slug: string) =>
  englishContentDetails.find(
    (detail) => detail.parent === parent && detail.slug === slug,
  );

export const englishDetailsByParent = (parent: string) =>
  englishContentDetails.filter((detail) => detail.parent === parent);
