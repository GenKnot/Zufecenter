export type EnglishSection = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  introTitle: string;
  intro: string[];
  image: string;
  cards: {
    title: string;
    label: string;
    text: string;
    href?: string;
  }[];
  closingTitle: string;
  closingText: string;
  ctaLabel: string;
};

export const englishSections: EnglishSection[] = [
  {
    slug: "about",
    eyebrow: "ABOUT THE CENTER",
    title: "Language education built through a decade of everyday practice",
    description:
      "Learn about our role, development and approach to language education for students, professionals and organizations.",
    introTitle: "A center shaped by steady teaching and learner progress",
    intro: [
      "The Language Center works with the Zheshang Capital Market Research Institute at Zhejiang University of Finance and Economics. It brings university learning resources together with flexible programs for individual and organizational needs.",
      "Since around 2015, the center has grown from English classes and small learning groups into a four-language program covering general ability, examinations, academic communication, professional use and customized training.",
    ],
    image: "/images/library-hero.png",
    cards: [
      { title: "Our story", label: "2015—2026", text: "Courses, language clubs, workshops and teaching reviews form the center’s living history." },
      { title: "Educational approach", label: "LEARN BY USING", text: "Clear stage goals connect language knowledge with communication learners can actually use." },
      { title: "How we work", label: "TEACHING & SUPPORT", text: "Teaching, curriculum development, learner support and project teams work around shared standards." },
      { title: "Testing facilities", label: "CBT SPACE", text: "Computer-based testing workstations, partitions and audio equipment support language assessment." },
    ],
    closingTitle: "Progress should be visible, useful and sustainable",
    closingText:
      "We value the confidence to speak, the ability to write with purpose and the curiosity to understand another culture—not simply the completion of a textbook.",
    ctaLabel: "Talk to the center",
  },
  {
    slug: "languages",
    eyebrow: "LANGUAGE COURSES",
    title: "Four languages, twenty-six structured ways to progress",
    description:
      "Choose from English, French, Japanese and Korean pathways designed around level, purpose and practical use.",
    introTitle: "Start from your current level, not from a generic chapter one",
    intro: [
      "Each language follows a clear progression from foundations to more independent communication. Focused classes support speaking, business use and major language examinations.",
      "Before recommending a class, we consider prior study, current ability, learning goals and the time a learner can realistically invest.",
    ],
    image: "/images/language-class.png",
    cards: [
      { title: "English", label: "8 COURSE FORMATS", text: "A1 to B2 progression, spoken English, business communication and IELTS preparation.", href: "/en/languages/english" },
      { title: "French", label: "6 COURSE FORMATS", text: "A1.1 to B2 progression with a focused DELF preparation option.", href: "/en/languages/french" },
      { title: "Japanese", label: "6 COURSE FORMATS", text: "A structured route from first steps through N5–N2 and JLPT preparation.", href: "/en/languages/japanese" },
      { title: "Korean", label: "6 COURSE FORMATS", text: "Beginner and intermediate progression with practical communication and TOPIK II.", href: "/en/languages/korean" },
    ],
    closingTitle: "Not sure which level is right?",
    closingText:
      "Tell us what you have studied, where you want to go and how much time you have. A short conversation or placement check can prevent a class from feeling too easy or too demanding.",
    ctaLabel: "Ask for a placement suggestion",
  },
  {
    slug: "programs",
    eyebrow: "PROGRAMS & TRAINING",
    title: "Different goals call for different learning paths",
    description:
      "Combine language courses with focused training for examinations, study, work, young learners or organizational needs.",
    introTitle: "Build the program around the outcome",
    intro: [
      "A learner preparing for overseas study needs a different rhythm from a professional preparing for client meetings. We begin with the situation, then choose the language, content and format.",
      "Programs may run as a sustained course, an intensive workshop or a customized sequence for a group.",
    ],
    image: "/images/modern-classroom.jpg",
    cards: [
      { title: "General ability", label: "FOUNDATIONS", text: "Balanced listening, speaking, reading and writing with a clear level progression." },
      { title: "Exams and study", label: "PREPARATION", text: "Language assessment, exam skills, academic expression and overseas-study readiness." },
      { title: "Business and careers", label: "PROFESSIONAL", text: "Meetings, presentations, email, client communication and cross-cultural teamwork." },
      { title: "Academic communication", label: "UNIVERSITY & RESEARCH", text: "Critical reading, structured writing, presentations and academic discussion." },
      { title: "Young learners", label: "LONG-TERM GROWTH", text: "Age-appropriate programs that build interest, confidence and durable learning habits." },
      { title: "Corporate training", label: "CUSTOMIZED", text: "Programs designed around roles, sectors, international business and team objectives." },
      { title: "Short workshops", label: "FOCUSED PRACTICE", text: "Compact training for one practical skill or communication challenge." },
      { title: "Overseas study preparation", label: "STUDY ABROAD", text: "Language, academic participation and everyday communication for studying overseas." },
    ],
    closingTitle: "A useful plan begins with a specific need",
    closingText:
      "Share the learners involved, the problem to solve and the available schedule. We can then recommend a realistic course combination.",
    ctaLabel: "Discuss a program",
  },
  {
    slug: "practice",
    eyebrow: "LEARNING IN PRACTICE",
    title: "Language grows stronger when it leaves the textbook",
    description:
      "Tutoring, language communities, cultural activities and shared projects create more reasons to communicate.",
    introTitle: "A second classroom built around real participation",
    intro: [
      "Practice beyond class helps learners turn recently acquired language into something more spontaneous and personal.",
      "Activities are designed with an achievable communication task, enough support to participate and space to learn from peers.",
    ],
    image: "/images/student-collaboration.png",
    cards: [
      { title: "Language tutoring", label: "TARGETED SUPPORT", text: "Diagnosis, questions and focused guidance for individual learning challenges." },
      { title: "Language clubs", label: "COMMUNITY", text: "Regular opportunities to speak, listen and respond outside formal lessons." },
      { title: "Cultural experiences", label: "CONTEXT", text: "Language, everyday customs, media and creative activities explored together." },
      { title: "Competitions and showcases", label: "VISIBLE OUTCOMES", text: "Speaking, writing and project work presented to a real audience." },
      { title: "Study visits", label: "EXPLORATION", text: "Theme-based learning that connects language with campuses, organizations and city life." },
    ],
    closingTitle: "Every meaningful use makes the next one easier",
    closingText:
      "Learners do not need perfect language before participating. Well-designed practice gives them a safe reason to try, reflect and try again.",
    ctaLabel: "Ask about current activities",
  },
  {
    slug: "faculty",
    eyebrow: "FACULTY & TEACHING",
    title: "Professional teaching is visible in the preparation behind every class",
    description:
      "Our language teams share goals, develop materials and review learner feedback to maintain consistent course quality.",
    introTitle: "Individual expertise, shared responsibility",
    intro: [
      "English, French, Japanese and Korean teachers contribute different experience and specializations while working from common stage outcomes.",
      "Collective planning, classroom observation and regular review help the team improve what learners experience from one course to the next.",
    ],
    image: "/images/team.jpg",
    cards: [
      { title: "English team", label: "GENERAL & SPECIALIST", text: "General ability, speaking, academic communication, business and exam preparation." },
      { title: "French team", label: "LANGUAGE & CULTURE", text: "CEFR-aligned progression, cultural understanding and DELF preparation." },
      { title: "Japanese team", label: "PROGRESSION & USE", text: "Structured language development, communication practice and JLPT preparation." },
      { title: "Korean team", label: "FOUNDATIONS & PRACTICE", text: "Systematic foundations, daily communication and TOPIK-focused learning." },
    ],
    closingTitle: "Meet the teaching team behind the courses",
    closingText:
      "Representative teachers support course delivery, curriculum review and learner feedback across the center’s language programs.",
    ctaLabel: "Ask about teaching arrangements",
  },
  {
    slug: "research",
    eyebrow: "TEACHING & RESEARCH",
    title: "Classroom questions become the starting point for improvement",
    description:
      "Teaching research, curriculum development and faculty learning turn experience into methods the whole team can use.",
    introTitle: "Research that stays close to learners",
    intro: [
      "The center’s research begins with practical questions: where learners hesitate, which tasks reveal progress and how feedback can lead to better independent study.",
      "Discussion, observation and small-scale trials help the team test an idea before it becomes part of a course standard.",
    ],
    image: "/images/library/sections/home-research-overview.webp",
    cards: [
      { title: "Language teaching research", label: "CLASSROOM QUESTIONS", text: "Observe learning, analyze recurring difficulties and refine teaching responses." },
      { title: "Curriculum development", label: "COURSE DESIGN", text: "Align outcomes, tasks, materials and assessment across each progression." },
      { title: "Faculty development", label: "SHARED PRACTICE", text: "Peer observation, teaching cases and workshops support continuous improvement." },
    ],
    closingTitle: "Good methods should be discussable and repeatable",
    closingText:
      "The goal is not to add academic language to ordinary teaching, but to make teaching decisions clearer, more testable and easier to improve.",
    ctaLabel: "Discuss teaching collaboration",
  },
  {
    slug: "resources",
    eyebrow: "LEARNING RESOURCES",
    title: "Support that keeps learning moving between classes",
    description:
      "Guides, course information, common questions and digital tools help learners make better decisions and practise with purpose.",
    introTitle: "Find the right support for the next step",
    intro: [
      "Learning resources should reduce uncertainty rather than create another pile of material. We organize information around decisions learners actually need to make.",
      "Some materials are shared directly with current classes so that teachers can match them to course level and progress.",
    ],
    image: "/images/study-desk.jpg",
    cards: [
      { title: "Study guides", label: "METHODS & PLANNING", text: "Practical guidance for goals, routines, vocabulary, listening and speaking practice." },
      { title: "Course materials", label: "CLASS SUPPORT", text: "Course handbooks, learning checklists and selected classroom resources." },
      { title: "Frequently asked questions", label: "CLEAR ANSWERS", text: "Course levels, placement, schedules, learning expectations and consultation." },
      { title: "Digital learning", label: "TOOLS", text: "Ways to use digital resources without losing focus or a sustainable routine." },
    ],
    closingTitle: "More material is not always better",
    closingText:
      "A smaller set of well-chosen resources, used consistently and reviewed with feedback, is usually more valuable than collecting endlessly.",
    ctaLabel: "Ask for learning advice",
  },
  {
    slug: "collaboration",
    eyebrow: "COLLABORATION",
    title: "Connecting language education with campuses, organizations and the wider world",
    description:
      "We connect international educational resources with language advancement, academic standards and assessment-oriented collaboration.",
    introTitle: "Partnerships built around standards and measurable progress",
    intro: [
      "The center works with universities, official education organizations and institutional partners to support language advancement, international assessment readiness and shared course development.",
      "Collaboration is guided by academic management, consistent assessment expectations and a practical delivery plan so that high-quality resources can be used locally.",
    ],
    image: "/images/library/sections/home-collaboration-overview.webp",
    cards: [
      { title: "Campus partnerships", label: "COURSES & ACTIVITIES", text: "Joint courses, lectures, workshops and language-cultural activities for specific student groups." },
      { title: "Enterprise partnerships", label: "WORKPLACE NEEDS", text: "Training derived from roles, client communication and international business situations." },
      { title: "International exchange", label: "GLOBAL STANDARDS", text: "Partnerships that connect international education resources with language advancement and assessment services." },
    ],
    closingTitle: "A partnership should strengthen learning quality and assessment readiness",
    closingText:
      "Clear academic expectations, careful implementation and review help participants benefit from international resources in a structured way.",
    ctaLabel: "Start a partnership conversation",
  },
  {
    slug: "news",
    eyebrow: "NEWS & ARCHIVE",
    title: "A record of courses, activities and everyday learning since 2015",
    description:
      "The archive traces how classes, teaching discussions, language communities and learner support have developed over time.",
    introTitle: "History made from ordinary, meaningful work",
    intro: [
      "The center’s story is not built around exaggerated awards. It is visible in course openings, language clubs, teaching reviews, cultural activities and learner reflections.",
      "The archive brings together course openings, language communities, teaching reviews and learner support records since 2015.",
    ],
    image: "/images/classroom-students.jpg",
    cards: [
      { title: "Courses and open classes", label: "2015—2026", text: "New classes, placement activities, focused workshops and learning support." },
      { title: "Language communities", label: "LEARNING TOGETHER", text: "Language corners, reading groups, online speaking and cultural experiences." },
      { title: "Teaching development", label: "BEHIND THE CLASSROOM", text: "Lesson observations, teaching cases, material updates and annual review." },
    ],
    closingTitle: "The archive shows the center’s everyday work over time",
    closingText:
      "Courses, open classes, language communities and teaching development together create a steady record of ongoing activity.",
    ctaLabel: "Ask about recent activities",
  },
  {
    slug: "contact",
    eyebrow: "CONTACT",
    title: "A useful learning plan often begins with one honest conversation",
    description:
      "Contact the center about individual courses, placement, group learning, campus programs or customized organizational training.",
    introTitle: "Tell us what you need language learning to accomplish",
    intro: [
      "For an individual enquiry, it helps to include the language, previous learning, current goal and times you may be available.",
      "For a group or organization, tell us who the participants are, the situations they face and the outcome you hope to see.",
    ],
    image: "/images/learning-consultation.png",
    cards: [
      { title: "Individual learning", label: "COURSES & PLACEMENT", text: "Language choice, level recommendation, exam planning and long-term progression." },
      { title: "Campus and group programs", label: "SHARED LEARNING", text: "Classes, student communities, workshops and language-cultural activities." },
      { title: "Customized training", label: "ORGANIZATIONS", text: "Programs built around roles, sectors, international work and team development." },
    ],
    closingTitle: "Contact the Language Center",
    closingText:
      "Email info@zufelanguage.cn or call 0571-88922801. Consultation hours are Monday to Sunday, 09:00–20:00.",
    ctaLabel: "Email the center",
  },
];

export function findEnglishSection(slug: string) {
  return englishSections.find((section) => section.slug === slug);
}
