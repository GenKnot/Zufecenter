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

export type LocalizedContentParent =
  | "about"
  | "programs"
  | "practice"
  | "faculty"
  | "research"
  | "resources"
  | "collaboration";

type DetailCopy = {
  parent: LocalizedContentParent;
  slug: string;
  title: string;
  summary: string;
  points: [string, string, string];
};

const copies: DetailCopy[] = [
  { parent: "about", slug: "leadership", title: "Professeur Wu Xin, doyen du centre", summary: "Le professeur Wu Xin est le doyen de notre centre. Il dirige les travaux sur l'innovation financière, les services internationaux et la formation interdisciplinaire francophone.", points: ["Recherche en innovation financière, marchés de capitaux et développement socio-économique", "Accompagnement de l'internationalisation des entreprises et de la finance transfrontalière", "Intégration du français, de la finance et des compétences interculturelles"] },
  { parent: "about", slug: "history", title: "Notre histoire", summary: "Plus de dix ans de cours, de communautés d'apprentissage et de développement pédagogique ont façonné le centre tel qu'il est aujourd'hui.", points: ["Des cours d'anglais et de petits groupes d'étude vers un système de cours en quatre langues", "Des clubs de langues réguliers, des ateliers et un soutien aux apprenants au-delà des cours formels", "Révision continue du programme, de la pratique pédagogique et des services organisationnels"] },
  { parent: "about", slug: "approach", title: "Notre approche pédagogique", summary: "Nous transformons les connaissances linguistiques en communication grâce à des étapes claires, des tâches significatives et des retours que les apprenants peuvent utiliser.", points: ["Partir du niveau actuel, de l'objectif et du temps d'étude disponible de l'apprenant", "Relier le vocabulaire et la grammaire à des situations réelles et des tâches purposives", "Utiliser les objectifs d'étape et les retours pour rendre les progrès et les prochaines étapes visibles"] },
  { parent: "about", slug: "organization", title: "Comment fonctionne le centre", summary: "Les fonctions d'enseignement, de programme, de soutien aux apprenants et de partenariat travaillent ensemble autour d'un cahier des charges pédagogique commun.", points: ["Les équipes linguistiques dispensent les cours et répondent aux performances des apprenants", "Le travail curriculaire et de recherche aligne les objectifs, les matériaux et l'évaluation", "Les équipes de soutien aux apprenants et de projets coordonnent le positionnement, les cours et les partenariats"] },
  { parent: "about", slug: "facilities", title: "Installations de test", summary: "Des postes de test informatisé, des cloisons et des équipements audio soutiennent l'évaluation linguistique et l'enseignement multimédia.", points: ["Les postes sont organisés pour les tests informatisés et les évaluations linguistiques par étapes", "Les casques soutiennent l'écoute et les réponses orales", "Les places cloisonnées réduisent les interférences pendant les tests, simulations et exercices ciblés"] },

  { parent: "programs", slug: "general", title: "Compétences linguistiques générales", summary: "Développez une écoute, une expression, une lecture et une écriture équilibrées grâce à une progression adaptée à votre niveau actuel.", points: ["Un parcours par niveaux des fondamentaux vers une communication plus autonome", "Travail intégré sur les compétences langagières réceptives et productives", "Des tâches d'application régulières montrant ce que l'apprenant peut désormais faire"] },
  { parent: "programs", slug: "exam-preparation", title: "Examens et études supérieures", summary: "Combinez le développement linguistique de fond avec une préparation pratique aux examens et aux études futures.", points: ["Diagnostic avant les stratégies de test, pour que la préparation parte du vrai niveau", "Pratique chronométrée, analyse des tâches et retours sur l'ensemble des compétences testées", "Planification des études reliant un objectif de score à une croissance linguistique durable"] },
  { parent: "programs", slug: "business", title: "Langue professionnelle et des affaires", summary: "Pratiquez la communication pour les réunions, les e-mails, les présentations, les clients et le travail d'équipe interculturel.", points: ["Langue issue de situations professionnelles plutôt que de terminologie isolée", "Pratique basée sur les rôles pour la communication écrite, orale et collaborative", "Retours sur la clarté, le ton, le jugement professionnel et les stratégies de réponse"] },
  { parent: "programs", slug: "academic", title: "Anglais académique et communication", summary: "Développez une lecture, une rédaction, une présentation et une discussion plus claires pour les contextes universitaires et de recherche.", points: ["Lire les sources de manière critique et organiser des notes utiles", "Rédiger avec une position visible, des preuves et une progression logique", "Présenter des idées académiques et répondre aux questions avec plus d'assurance"] },
  { parent: "programs", slug: "young-learners", title: "Croissance linguistique pour les jeunes apprenants", summary: "Développez l'intérêt, l'expression et des habitudes d'étude durables grâce à un apprentissage par étapes adapté à l'âge.", points: ["Activités adaptées à l'âge, à l'attention et au développement linguistique actuel", "Un équilibre entre communication, littératie, projets et exploration culturelle", "Retours constructifs pour les apprenants et communication claire des progrès aux familles"] },
  { parent: "programs", slug: "corporate", title: "Formation en entreprise personnalisée", summary: "Concevez une formation linguistique autour des fonctions, des secteurs, du travail international et des résultats spécifiques de l'équipe.", points: ["Analyse des besoins basée sur les participants et les situations professionnelles réelles", "Format flexible de langue, de contenu, de calendrier et de diffusion", "Un processus de révision reliant la participation à des résultats de communication observables"] },
  { parent: "programs", slug: "workshops", title: "Ateliers courts ciblés", summary: "Abordez un défi pratique de communication grâce à une formation compacte et concentrée.", points: ["Un thème étroitement défini comme l'e-mail, la présentation ou la confiance à l'oral", "Démonstration, pratique, retours et révision immédiate à chaque session", "Formats adaptés aux individus, aux campus, aux équipes et aux groupes professionnels"] },
  { parent: "programs", slug: "study-abroad", title: "Préparation linguistique pour les études à l'étranger", summary: "Préparez-vous à la communication académique, à l'adaptation quotidienne et aux exigences linguistiques pratiques des études à l'étranger.", points: ["Relier les objectifs d'examen à la langue nécessaire après l'admission", "Pratiquer la participation en classe, les présentations, les e-mails et l'étude autonome", "Développer la conscience interculturelle pour la vie quotidienne et les attentes académiques"] },

  { parent: "practice", slug: "tutoring", title: "Tutorat linguistique", summary: "Utilisez le diagnostic, les questions et les retours ciblés pour résoudre des difficultés d'apprentissage spécifiques.", points: ["Clarifier si l'obstacle est lié aux connaissances, à la pratique, à la stratégie ou à la confiance", "Travailler sur une cible gérable grâce à des exemples et une correction guidée", "Repartir avec une prochaine étape pratique pour la pratique autonome"] },
  { parent: "practice", slug: "language-clubs", title: "Clubs de langues et communautés d'apprentissage", summary: "Créez des occasions régulières et sans pression de parler, d'écouter et d'apprendre avec les autres.", points: ["Des thèmes qui donnent à chaque participant une raison claire de contribuer", "Soutien de l'enseignant ou du facilitateur sans transformer l'activité en cours supplémentaire", "Une communauté continue qui aide les apprenants à maintenir leur pratique entre les cours"] },
  { parent: "practice", slug: "cultural-events", title: "Expériences linguistiques et culturelles", summary: "Explorez comment la langue vit dans les coutumes, les médias, les choix quotidiens et l'expression créative.", points: ["Utiliser du matériel culturel authentique à un niveau accessible aux participants", "Relier le vocabulaire et les expressions aux situations qui leur donnent leur sens", "Encourager l'observation, la comparaison et la discussion interculturelle respectueuse"] },
  { parent: "practice", slug: "competitions", title: "Concours et présentations d'apprentissage", summary: "Donnez à l'expression orale, à la rédaction et aux projets un public réel et un résultat visible.", points: ["Une préparation qui traite l'événement comme un processus d'apprentissage, pas seulement un résultat", "Des critères clairs pour le contenu, la langue, la présentation et la réflexion", "Des occasions de partager les progrès par des discours, des écrits et des travaux collaboratifs"] },
  { parent: "practice", slug: "study-tours", title: "Sorties thématiques et échanges", summary: "Transportez les tâches linguistiques dans des campus, des organisations et des contextes culturels où l'observation mène à la communication.", points: ["Un thème clair et un cahier des charges de communication avant chaque visite", "Observation guidée, questions, entretiens ou tâches collaboratives sur place", "Un rapport final, une présentation ou une réflexion qui transforme l'expérience en apprentissage"] },

  { parent: "faculty", slug: "english", title: "Équipe d'enseignement de l'anglais", summary: "Des standards partagés relient l'enseignement de l'anglais général, oral, académique, professionnel et d'examen.", points: ["Les enseignants planifient autour d'objectifs d'étape communs tout en apportant des forces spécialisées", "Les preuves en classe et les retours des apprenants informent la révision régulière des cours", "Le développement de l'équipe relie la progression générale aux parcours de cours ciblés"] },
  { parent: "faculty", slug: "french", title: "Équipe d'enseignement du français", summary: "La progression en langue française est enseignée avec le contexte culturel et la communication pratique.", points: ["Étapes alignées CECRL de la première prononciation à l'expression autonome", "Écoute, expression, lecture et écriture intégrées à chaque niveau", "Soutien ciblé pour l'apprentissage culturel et la préparation au DELF"] },
  { parent: "faculty", slug: "japanese", title: "Équipe d'enseignement du japonais", summary: "L'explication structurée et l'usage significatif aident les apprenants à relier les scripts, la grammaire et la communication naturelle.", points: ["Un parcours systématique du kana jusqu'au développement linguistique intermédiaire", "Des tâches en classe qui font passer les apprenants de la reconnaissance à l'usage approprié", "Soutien intégré pour la communication pratique et la progression au JLPT"] },
  { parent: "faculty", slug: "korean", title: "Équipe d'enseignement du coréen", summary: "Des bases claires et une pratique répétée soutiennent la progression du Hangul à l'expression intermédiaire connectée.", points: ["Travail systématique sur le son, le script, la structure et le langage à haute fréquence", "Des situations quotidiennes et un contexte culturel pour rendre l'apprentissage mémorable", "Une progression qui soutient à la fois la communication pratique et les objectifs TOPIK"] },
  { parent: "faculty", slug: "chinese", title: "Équipe de chinois international", summary: "L'enseignement du chinois comme langue internationale, reliant prononciation, caractères, grammaire et communication réelle.", points: ["Pinyin, tons, caractères et expressions de base pour débuter", "Préparation au HSK, de la compétence générale à l'entraînement ciblé", "Chinois académique et professionnel pour les études, la recherche et le travail"] },

  { parent: "research", slug: "teaching-research", title: "Recherche en enseignement des langues", summary: "L'observation en classe transforme les difficultés récurrentes des apprenants en questions que l'équipe pédagogique peut examiner.", points: ["Partir des performances visibles des apprenants plutôt que des tendances abstraites", "Utiliser des essais à petite échelle, des discussions et des preuves pour tester les réponses pédagogiques", "Partager les résultats sous des formes pouvant améliorer les décisions en classe au quotidien"] },
  { parent: "research", slug: "curriculum-development", title: "Développement curriculaire", summary: "Aligner les objectifs, les tâches de classe, les matériaux et l'évaluation à chaque progression linguistique.", points: ["Définir ce que les apprenants doivent être capables de faire à la fin de chaque étape", "Choisir du contenu et des pratiques qui soutiennent directement ces objectifs", "Revoir les transitions pour qu'un cours prépare les apprenants au suivant"] },
  { parent: "research", slug: "faculty-development", title: "Développement des enseignants", summary: "La planification collective, l'observation par les pairs et les cas d'enseignement maintiennent l'apprentissage professionnel pratique.", points: ["La préparation partagée rend les objectifs et les attentes de qualité plus cohérents", "L'observation crée une base concrète pour la discussion professionnelle", "La réflexion transforme l'expérience individuelle en connaissances utilisables par l'équipe"] },

  { parent: "resources", slug: "study-guides", title: "Guides d'étude", summary: "Des conseils pratiques aident les apprenants à définir des objectifs, à établir des routines et à utiliser leur temps d'étude limité plus efficacement.", points: ["Choisir un objectif assez précis pour guider la pratique hebdomadaire", "Équilibrer les entrées, le rappel actif, la communication et la révision", "Ajuster la routine à l'aide de preuves issues des tâches et des retours de l'enseignant"] },
  { parent: "resources", slug: "downloads", title: "Matériaux de cours", summary: "Les manuels de cours, les listes de contrôle et les matériaux pédagogiques sélectionnés sont partagés dans le contexte où ils sont le plus utiles.", points: ["Les informations de cours aident les apprenants à comprendre le niveau et les attentes", "Les listes de contrôle d'apprentissage soutiennent la préparation et la révision entre les leçons", "Les matériaux pédagogiques sont adaptés au cours actuel plutôt qu'offerts comme une archive non structurée"] },
  { parent: "resources", slug: "faq", title: "Questions fréquentes", summary: "Des réponses claires sur les niveaux, le positionnement, les horaires et les attentes d'apprentissage facilitent les décisions de cours.", points: ["Choisir une langue et un niveau sur la base de preuves, pas seulement d'intérêt", "Confirmer les dates actuelles, le format, les frais et la disponibilité avant l'inscription", "Demander une conversation de positionnement quand les études précédentes ne correspondent pas à une étiquette simple"] },
  { parent: "resources", slug: "digital-learning", title: "Apprentissage numérique", summary: "Utilisez les outils numériques avec un objectif précis pour que la technologie soutienne, plutôt que fragmente, la pratique linguistique.", points: ["Sélectionner des outils pour une compétence spécifique ou un problème d'apprentissage récurrent", "Combiner la pratique numérique courte avec une lecture, une écriture et une communication plus profondes", "Revoir régulièrement les progrès plutôt que de collecter davantage d'applications et de ressources"] },

  { parent: "collaboration", slug: "campus", title: "Partenariats universitaires", summary: "Co-concevoir des cours, des ateliers et un appui à l'évaluation linguistique pour les besoins d'une communauté étudiante particulière.", points: ["Partir des participants, du contexte académique et du résultat souhaité", "Combiner l'apprentissage des langues avec les disciplines, la vie étudiante et les initiatives du campus", "Partager des ressources d'enseignement et d'évaluation académique alignées sur des standards internationaux comme le CECRL"] },
  { parent: "collaboration", slug: "enterprise", title: "Partenariats entreprises et organisationnels", summary: "Construire une formation à partir de situations professionnelles, des rôles des participants et des besoins de communication internationale de l'organisation.", points: ["Identifier les tâches à haute fréquence et les risques de communication avant de concevoir le contenu", "Utiliser des cas pertinents, des simulations et des documents sans exposer d'informations sensibles", "Revoir la participation et le transfert pratique au lieu de travail"] },
  { parent: "collaboration", slug: "international", title: "Échange international", summary: "Relier les ressources éducatives internationales au développement linguistique, aux standards académiques et aux services d'évaluation.", points: ["Construire la coopération avec des universités, des organismes éducatifs officiels et des partenaires institutionnels", "Suivre une gestion académique claire et des attentes d'évaluation cohérentes", "Soutenir une plateforme de haut niveau pour le développement linguistique et la préparation aux évaluations internationales"] },
];

const sourceGroups: Record<LocalizedContentParent, ContentPage[]> = {
  about: aboutPages,
  programs: programPages,
  practice: practicePages,
  faculty: facultyPages,
  research: researchPages,
  resources: resourcePages,
  collaboration: collaborationPages,
};

export type LocalizedContentDetail = DetailCopy & {
  heroImage: string;
  image?: string;
};

export const frContentDetails: LocalizedContentDetail[] = copies.map((copy) => {
  const source = sourceGroups[copy.parent].find((page) => page.slug === copy.slug);
  if (!source) throw new Error(`Missing source page for ${copy.parent}/${copy.slug}`);
  return { ...copy, heroImage: source.heroImage, image: source.image };
});

export const findFrContentDetail = (parent: string, slug: string) =>
  frContentDetails.find((detail) => detail.parent === parent && detail.slug === slug);

export const frDetailsByParent = (parent: string) =>
  frContentDetails.filter((detail) => detail.parent === parent);
