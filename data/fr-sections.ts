export type LocalizedSection = {
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

export const frSections: LocalizedSection[] = [
  {
    slug: "about",
    eyebrow: "LE CENTRE",
    title: "Une éducation linguistique forgée par dix ans de pratique quotidienne",
    description:
      "Découvrez notre mission, notre histoire et notre approche de l'enseignement des langues pour les étudiants, les professionnels et les organisations.",
    introTitle: "Un centre façonné par un enseignement régulier et la progression des apprenants",
    intro: [
      "Le Centre de langues travaille en partenariat avec l'Institut de recherche sur les marchés de capitaux Zheshang de l'Université des finances et de l'économie du Zhejiang. Il réunit les ressources pédagogiques universitaires et des programmes flexibles adaptés aux besoins individuels et organisationnels.",
      "Depuis 2015 environ, le centre a évolué de cours d'anglais et de petits groupes d'étude vers un programme en quatre langues couvrant les compétences générales, les examens, la communication académique, l'usage professionnel et la formation sur mesure.",
    ],
    image: "/images/library-hero.png",
    cards: [
      { title: "Notre histoire", label: "2015—2026", text: "Cours, clubs de langues, ateliers et bilans pédagogiques constituent l'histoire vivante du centre." },
      { title: "Notre approche", label: "APPRENDRE EN UTILISANT", text: "Des objectifs d'étape clairs relient les connaissances linguistiques à une communication réellement utilisable." },
      { title: "Notre organisation", label: "ENSEIGNEMENT & ACCOMPAGNEMENT", text: "L'enseignement, le développement curriculaire, le soutien aux apprenants et les équipes de projet fonctionnent autour de standards communs." },
      { title: "Installations de test", label: "ESPACE CBT", text: "Postes de test informatisé, cloisons et équipement audio soutiennent l'évaluation linguistique." },
    ],
    closingTitle: "Les progrès doivent être visibles, utiles et durables",
    closingText:
      "Nous valorisons la confiance pour s'exprimer, la capacité à écrire avec intention et la curiosité de comprendre une autre culture — pas seulement l'achèvement d'un manuel.",
    ctaLabel: "Contacter le centre",
  },
  {
    slug: "languages",
    eyebrow: "COURS DE LANGUES",
    title: "Quatre langues, vingt-six façons structurées de progresser",
    description:
      "Choisissez parmi les parcours anglais, français, japonais et coréen conçus autour du niveau, de l'objectif et de l'usage pratique.",
    introTitle: "Commencez à votre niveau actuel, pas au chapitre un générique",
    intro: [
      "Chaque langue suit une progression claire des bases vers une communication plus autonome. Des cours ciblés soutiennent l'expression orale, l'usage professionnel et les principaux examens de langue.",
      "Avant de recommander un cours, nous prenons en compte les études antérieures, le niveau actuel, les objectifs d'apprentissage et le temps que l'apprenant peut réellement consacrer.",
    ],
    image: "/images/language-class.png",
    cards: [
      { title: "Anglais", label: "8 FORMATS", text: "Progression A1 à B2, anglais oral, communication professionnelle et préparation à l'IELTS.", href: "/fr/languages/english" },
      { title: "Français", label: "6 FORMATS", text: "Progression A1.1 à B2 avec une option de préparation ciblée au DELF.", href: "/fr/languages/french" },
      { title: "Japonais", label: "6 FORMATS", text: "Un parcours structuré des premiers pas jusqu'au N5–N2 et à la préparation au JLPT.", href: "/fr/languages/japanese" },
      { title: "Coréen", label: "6 FORMATS", text: "Progression débutant et intermédiaire avec communication pratique et TOPIK II.", href: "/fr/languages/korean" },
    ],
    closingTitle: "Pas sûr de votre niveau ?",
    closingText:
      "Dites-nous ce que vous avez étudié, où vous voulez aller et combien de temps vous disposez. Une courte conversation ou un test de positionnement peut éviter un cours trop facile ou trop exigeant.",
    ctaLabel: "Demander une suggestion de niveau",
  },
  {
    slug: "programs",
    eyebrow: "PROGRAMMES & FORMATION",
    title: "Des objectifs différents appellent des parcours différents",
    description:
      "Combinez des cours de langue avec une préparation ciblée pour les examens, les études, le travail, les jeunes apprenants ou les besoins organisationnels.",
    introTitle: "Construire le programme autour des résultats attendus",
    intro: [
      "Un apprenant qui prépare des études à l'étranger a besoin d'un rythme différent d'un professionnel qui se prépare à des réunions avec des clients. Nous partons de la situation, puis choisissons la langue, le contenu et le format.",
      "Les programmes peuvent se dérouler sous forme de cours continu, d'atelier intensif ou d'un parcours personnalisé pour un groupe.",
    ],
    image: "/images/modern-classroom.jpg",
    cards: [
      { title: "Compétences générales", label: "FONDAMENTAUX", text: "Écoute, expression, lecture et écriture équilibrées avec une progression de niveau claire." },
      { title: "Examens et études", label: "PRÉPARATION", text: "Évaluation linguistique, compétences d'examen, expression académique et préparation aux études à l'étranger." },
      { title: "Affaires et carrières", label: "PROFESSIONNEL", text: "Réunions, présentations, e-mail, communication client et travail interculturel en équipe." },
      { title: "Communication académique", label: "UNIVERSITÉ & RECHERCHE", text: "Lecture critique, rédaction structurée, présentations et discussion académique." },
      { title: "Jeunes apprenants", label: "CROISSANCE À LONG TERME", text: "Programmes adaptés à l'âge qui développent l'intérêt, la confiance et des habitudes d'apprentissage durables." },
      { title: "Formation en entreprise", label: "PERSONNALISÉ", text: "Programmes conçus autour des fonctions, des secteurs, des affaires internationales et des objectifs d'équipe." },
      { title: "Ateliers courts", label: "PRATIQUE CIBLÉE", text: "Formation compacte sur une compétence pratique ou un défi de communication spécifique." },
      { title: "Préparation aux études à l'étranger", label: "ÉTUDES INTERNATIONALES", text: "Langue, participation académique et communication quotidienne pour étudier à l'étranger." },
    ],
    closingTitle: "Un plan utile commence par un besoin précis",
    closingText:
      "Présentez-nous les apprenants concernés, le problème à résoudre et le calendrier disponible. Nous pourrons alors recommander une combinaison de cours réaliste.",
    ctaLabel: "Discuter d'un programme",
  },
  {
    slug: "practice",
    eyebrow: "LA LANGUE EN PRATIQUE",
    title: "La langue se renforce quand elle sort du manuel",
    description:
      "Tutorat, communautés linguistiques, activités culturelles et projets partagés créent davantage de raisons de communiquer.",
    introTitle: "Une deuxième classe fondée sur la participation réelle",
    intro: [
      "La pratique au-delà du cours aide les apprenants à transformer une langue récemment acquise en quelque chose de plus spontané et personnel.",
      "Les activités sont conçues avec une tâche de communication réalisable, suffisamment de soutien pour y participer et de l'espace pour apprendre des pairs.",
    ],
    image: "/images/student-collaboration.png",
    cards: [
      { title: "Tutorat linguistique", label: "SOUTIEN CIBLÉ", text: "Diagnostic, questions et conseils ciblés pour les difficultés d'apprentissage individuelles." },
      { title: "Clubs de langues", label: "COMMUNAUTÉ", text: "Des occasions régulières de parler, d'écouter et de répondre en dehors des cours formels." },
      { title: "Expériences culturelles", label: "CONTEXTE", text: "Langue, coutumes quotidiennes, médias et activités créatives explorés ensemble." },
      { title: "Concours et présentations", label: "RÉSULTATS VISIBLES", text: "Expression orale, rédaction et travaux de projet présentés à un public réel." },
      { title: "Sorties thématiques", label: "EXPLORATION", text: "Apprentissage thématique qui connecte la langue aux campus, aux organisations et à la vie urbaine." },
    ],
    closingTitle: "Chaque usage significatif facilite le suivant",
    closingText:
      "Les apprenants n'ont pas besoin d'une langue parfaite pour participer. Une pratique bien conçue leur donne une raison sûre d'essayer, de réfléchir et de recommencer.",
    ctaLabel: "Se renseigner sur les activités",
  },
  {
    slug: "faculty",
    eyebrow: "ENSEIGNANTS & PÉDAGOGIE",
    title: "L'enseignement professionnel se voit dans la préparation derrière chaque cours",
    description:
      "Nos équipes linguistiques partagent des objectifs, développent des matériaux et examinent les retours des apprenants pour maintenir une qualité de cours constante.",
    introTitle: "Expertise individuelle, responsabilité partagée",
    intro: [
      "Les enseignants d'anglais, de français, de japonais et de coréen apportent des expériences et des spécialisations différentes tout en travaillant à partir d'objectifs d'étape communs.",
      "La planification collective, l'observation en classe et les bilans réguliers aident l'équipe à améliorer ce que vivent les apprenants d'un cours à l'autre.",
    ],
    image: "/images/team.jpg",
    cards: [
      { title: "Équipe d'anglais", label: "GÉNÉRAL & SPÉCIALISÉ", text: "Compétences générales, expression orale, communication académique, affaires et préparation aux examens." },
      { title: "Équipe de français", label: "LANGUE & CULTURE", text: "Progression alignée CECRL, compréhension culturelle et préparation au DELF." },
      { title: "Équipe de japonais", label: "PROGRESSION & USAGE", text: "Développement linguistique structuré, pratique de la communication et préparation au JLPT." },
      { title: "Équipe de coréen", label: "BASES & PRATIQUE", text: "Fondamentaux systématiques, communication quotidienne et apprentissage axé sur le TOPIK." },
    ],
    closingTitle: "Rencontrer l'équipe pédagogique derrière les cours",
    closingText:
      "Des enseignants représentatifs participent aux cours, au suivi des apprenants et au développement des programmes linguistiques du centre.",
    ctaLabel: "Se renseigner sur l'enseignement",
  },
  {
    slug: "research",
    eyebrow: "ENSEIGNEMENT & RECHERCHE",
    title: "Les questions de classe deviennent le point de départ de l'amélioration",
    description:
      "La recherche pédagogique, le développement curriculaire et la formation des enseignants transforment l'expérience en méthodes utilisables par toute l'équipe.",
    introTitle: "Une recherche proche des apprenants",
    intro: [
      "La recherche du centre part de questions pratiques : où les apprenants hésitent, quelles tâches révèlent les progrès et comment les retours peuvent conduire à une meilleure étude autonome.",
      "Les discussions, l'observation et les essais à petite échelle aident l'équipe à tester une idée avant qu'elle devienne une norme de cours.",
    ],
    image: "/images/meeting-room.jpg",
    cards: [
      { title: "Recherche pédagogique", label: "QUESTIONS DE CLASSE", text: "Observer l'apprentissage, analyser les difficultés récurrentes et affiner les réponses pédagogiques." },
      { title: "Développement curriculaire", label: "CONCEPTION DE COURS", text: "Aligner les objectifs, les tâches, les matériaux et l'évaluation à chaque progression." },
      { title: "Développement des enseignants", label: "PRATIQUE PARTAGÉE", text: "L'observation par les pairs, les cas d'enseignement et les ateliers soutiennent l'amélioration continue." },
    ],
    closingTitle: "Les bonnes méthodes doivent être discutables et reproductibles",
    closingText:
      "L'objectif n'est pas d'ajouter un langage académique à un enseignement ordinaire, mais de rendre les décisions pédagogiques plus claires, plus testables et plus faciles à améliorer.",
    ctaLabel: "Discuter de collaboration pédagogique",
  },
  {
    slug: "resources",
    eyebrow: "RESSOURCES D'APPRENTISSAGE",
    title: "Un soutien qui maintient l'apprentissage entre les cours",
    description:
      "Guides, informations sur les cours, questions fréquentes et outils numériques aident les apprenants à prendre de meilleures décisions et à pratiquer avec intention.",
    introTitle: "Trouver le bon soutien pour la prochaine étape",
    intro: [
      "Les ressources d'apprentissage doivent réduire l'incertitude plutôt que créer un autre tas de matériaux. Nous organisons l'information autour des décisions que les apprenants ont réellement besoin de prendre.",
      "Certains matériaux sont partagés directement avec les classes en cours afin que les enseignants puissent les adapter au niveau et à la progression.",
    ],
    image: "/images/study-desk.jpg",
    cards: [
      { title: "Guides d'étude", label: "MÉTHODES & PLANIFICATION", text: "Conseils pratiques pour les objectifs, les routines, le vocabulaire, l'écoute et la pratique orale." },
      { title: "Matériaux de cours", label: "SOUTIEN EN CLASSE", text: "Manuels de cours, listes de contrôle d'apprentissage et ressources de classe sélectionnées." },
      { title: "Questions fréquentes", label: "RÉPONSES CLAIRES", text: "Niveaux, positionnement, horaires, attentes d'apprentissage et consultation." },
      { title: "Apprentissage numérique", label: "OUTILS", text: "Façons d'utiliser les ressources numériques sans perdre le focus ni une routine durable." },
    ],
    closingTitle: "Plus de matériaux n'est pas toujours mieux",
    closingText:
      "Un ensemble plus restreint de ressources bien choisies, utilisées régulièrement et examinées avec des retours, est généralement plus précieux qu'une collection sans fin.",
    ctaLabel: "Demander des conseils d'apprentissage",
  },
  {
    slug: "collaboration",
    eyebrow: "COLLABORATION",
    title: "Relier l'enseignement des langues aux campus, aux organisations et au monde",
    description:
      "Nous relions des ressources éducatives internationales au développement linguistique, aux standards académiques et à la coopération en matière d'évaluation.",
    introTitle: "Des partenariats fondés sur des standards et des progrès mesurables",
    intro: [
      "Le centre travaille avec des universités, des organismes éducatifs officiels et des partenaires institutionnels pour soutenir le développement linguistique, la préparation aux évaluations internationales et la co-construction de cours.",
      "La coopération suit une gestion académique claire, des attentes d'évaluation cohérentes et un plan de mise en œuvre pratique afin que les ressources de qualité puissent être utilisées localement.",
    ],
    image: "/images/meeting-room.jpg",
    cards: [
      { title: "Partenariats universitaires", label: "COURS & ACTIVITÉS", text: "Cours communs, conférences, ateliers et activités linguistiques pour des groupes d'étudiants spécifiques." },
      { title: "Partenariats entreprises", label: "BESOINS EN MILIEU DE TRAVAIL", text: "Formation issue des fonctions, de la communication client et des situations d'affaires internationales." },
      { title: "Échange international", label: "STANDARDS INTERNATIONAUX", text: "Partenariats reliant ressources éducatives internationales, progression linguistique et services d'évaluation." },
    ],
    closingTitle: "Un partenariat doit renforcer la qualité d'apprentissage et la préparation à l'évaluation",
    closingText:
      "Des attentes académiques claires, une mise en œuvre attentive et une révision régulière aident les participants à bénéficier de ressources internationales de manière structurée.",
    ctaLabel: "Engager une conversation partenariale",
  },
  {
    slug: "news",
    eyebrow: "ACTUALITÉS & ARCHIVES",
    title: "Un historique de cours, d'activités et d'apprentissage quotidien depuis 2015",
    description:
      "Les archives retracent l'évolution des cours, des discussions pédagogiques, des communautés linguistiques et du soutien aux apprenants au fil du temps.",
    introTitle: "Une histoire faite de travail ordinaire et significatif",
    intro: [
      "L'histoire du centre ne repose pas sur des récompenses exagérées. Elle est visible dans les ouvertures de cours, les clubs de langues, les bilans pédagogiques, les activités culturelles et les réflexions des apprenants.",
      "Les archives actuelles offrent un aperçu des années d'activité depuis 2015.",
    ],
    image: "/images/classroom-students.jpg",
    cards: [
      { title: "Cours et classes ouvertes", label: "2015—2026", text: "Nouveaux cours, activités de positionnement, ateliers ciblés et soutien à l'apprentissage." },
      { title: "Communautés linguistiques", label: "APPRENDRE ENSEMBLE", text: "Coins de langues, groupes de lecture, expression orale en ligne et expériences culturelles." },
      { title: "Développement pédagogique", label: "EN COULISSES", text: "Observations de cours, cas d'enseignement, mises à jour des matériaux et bilan annuel." },
    ],
    closingTitle: "Les archives montrent le travail quotidien du centre",
    closingText:
      "Cours, classes ouvertes, communautés linguistiques et développement pédagogique forment un récit régulier des activités depuis 2015.",
    ctaLabel: "Se renseigner sur les activités récentes",
  },
  {
    slug: "contact",
    eyebrow: "CONTACT",
    title: "Un plan d'apprentissage utile commence souvent par une conversation honnête",
    description:
      "Contactez le centre pour les cours individuels, le positionnement, l'apprentissage en groupe, les programmes sur campus ou la formation organisationnelle personnalisée.",
    introTitle: "Dites-nous ce que vous voulez accomplir avec l'apprentissage des langues",
    intro: [
      "Pour une demande individuelle, il est utile d'inclure la langue, l'apprentissage antérieur, l'objectif actuel et vos disponibilités.",
      "Pour un groupe ou une organisation, dites-nous qui sont les participants, les situations auxquelles ils font face et le résultat que vous espérez.",
    ],
    image: "/images/learning-consultation.png",
    cards: [
      { title: "Apprentissage individuel", label: "COURS & POSITIONNEMENT", text: "Choix de la langue, recommandation de niveau, planification d'examen et progression à long terme." },
      { title: "Programmes campus et groupes", label: "APPRENTISSAGE PARTAGÉ", text: "Cours, communautés étudiantes, ateliers et activités linguistiques culturelles." },
      { title: "Formation personnalisée", label: "ORGANISATIONS", text: "Programmes construits autour des fonctions, des secteurs, du travail international et du développement d'équipe." },
    ],
    closingTitle: "Contacter le Centre de langues",
    closingText:
      "Envoyez un e-mail à info@zufelanguage.cn ou appelez le 0571-88922801. Les heures de consultation sont du lundi au dimanche, de 09h00 à 20h00.",
    ctaLabel: "Envoyer un e-mail au centre",
  },
];

export function findFrSection(slug: string) {
  return frSections.find((section) => section.slug === slug);
}
