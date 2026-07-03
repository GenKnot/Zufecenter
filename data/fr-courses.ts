import { languageCourses, type LanguageSlug } from "@/data/language-courses";

type FrCourseCopy = {
  code: string;
  title: string;
  level: string;
  track: string;
  summary: string;
  audience: string;
  modules: [string, string][];
};

const copies: FrCourseCopy[] = [
  {
    code: "EN-A1", title: "Anglais Fondation 1", level: "Débutant · CECRL A1", track: "Anglais général",
    summary: "Construire la prononciation, les structures de phrases essentielles et la confiance pour s'exprimer dans des situations quotidiennes familières.",
    audience: "Apprenants avec peu d'anglais, une longue pause dans les études ou un besoin de reconstruire les bases systématiquement.",
    modules: [["Faire connaissance", "Sons essentiels, présentations, pays et professions, être et pronoms sujets."], ["La vie quotidienne", "L'heure, les dates, les routines, le présent simple, la fréquence et les questions de base."], ["En ville", "Les lieux, les directions, les transports, il y a et les prépositions courantes."], ["Une première interaction complète", "Commander, faire des achats, messages téléphoniques et tâche d'expression orale intégrée."]],
  },
  {
    code: "EN-A2", title: "Anglais Fondation 2", level: "Élémentaire · CECRL A2", track: "Anglais général",
    summary: "Relier le vocabulaire familier en messages complets pour la vie quotidienne et les études.",
    audience: "Apprenants qui comprennent les phrases de base et les textes courts mais ont besoin d'une expression plus stable et connectée.",
    modules: [["Expériences et histoires", "Le passé simple, la mise en séquence, décrire des personnes et des événements, et raconter."], ["Plans et choix", "Les formes du futur, les comparaisons, les conseils, les projets de voyage et d'études."], ["Santé et mode de vie", "Le corps, les habitudes, les verbes modaux, les rendez-vous et demander de l'aide."], ["Exprimer une idée complète", "Les mots de liaison, les courts e-mails, un discours de deux minutes et une tâche intégrée."]],
  },
  {
    code: "EN-B1", title: "Anglais Intermédiaire 1", level: "Intermédiaire · CECRL B1", track: "Anglais général",
    summary: "Passer des réponses courtes à la narration structurée, l'explication et les points de vue personnels.",
    audience: "Apprenants avec des compétences de communication quotidienne qui veulent plus de portée, de précision et de confiance en lecture.",
    modules: [["Apprentissage et croissance", "Stratégies d'apprentissage, partager des expériences, le présent parfait et les questions de suivi."], ["Personnes et société", "Interviews, relations, communautés, les propositions relatives et soutenir une opinion."], ["Médias et information", "L'essentiel des nouvelles, fait et opinion, le passif et les informations rapportées."], ["Projet thématique", "Lecture de sources, discussion en groupe, un texte de point de vue et une présentation de cinq minutes."]],
  },
  {
    code: "EN-B1+", title: "Anglais Intermédiaire 2", level: "Intermédiaire supérieur · CECRL B1+", track: "Anglais général",
    summary: "Gérer des informations plus complexes en combinant discussion, lecture et écriture.",
    audience: "Apprenants qui communiquent confortablement dans la vie quotidienne et veulent un anglais général plus solide avant des études spécialisées.",
    modules: [["Points de vue et arguments", "Affirmations, raisons, exemples, liens complexes, accord, défi et clarification."], ["Problèmes et solutions", "Sujets urbains, environnementaux et technologiques, causes, comparaisons et recommandations."], ["Communication interculturelle", "Différences culturelles, ton, politesse, réparation des malentendus et discussion de cas."], ["Tâche de recherche intégrée", "Sources multiples, un entretien, un rapport écrit et une présentation de groupe."]],
  },
  {
    code: "EN-B2", title: "Communication Anglaise Avancée", level: "Avancé · CECRL B2", track: "Anglais général",
    summary: "Développer une communication précise et bien calibrée avec une meilleure précision, logique et stratégies d'interaction.",
    audience: "Apprenants avec une base anglaise solide qui ont besoin de progresser dans des contextes académiques, publics ou professionnels.",
    modules: [["Précision et portée", "Nuance, collocation, registre et façons de condenser ou développer une idée complexe."], ["Lecture critique", "Position, preuves et hypothèses à travers les sources, suivi d'une réponse écrite."], ["Discussion et négociation", "Présider, gérer les objections, concession, recadrage et construction du consensus."], ["Projet de communication publique", "Recherche, structure du discours, support visuel, questions en direct et réflexion."]],
  },
  {
    code: "EN-SPK", title: "Anglais oral intensif", level: "Ciblé · A2—B1+", track: "Expression orale",
    summary: "Augmenter le temps de parole intentionnel tout en améliorant la fluidité, la prononciation et l'interaction.",
    audience: "Apprenants qui comprennent plus qu'ils ne peuvent dire ou qui veulent une période ciblée d'amélioration de l'expression orale.",
    modules: [["Parler clairement", "Diagnostic de prononciation, accentuation, rythme, groupes de pensée et shadowing."], ["Maintenir une conversation", "Questions, suivis, réponses, changements de sujet et stratégies de réparation."], ["Construire un message complet", "Récits, description d'image, développement de points de vue et cadres improvisés."], ["Semaine de tâches réelles", "Interaction sociale, résolution de problèmes, discussion et revue de performance enregistrée."]],
  },
  {
    code: "EN-BIZ", title: "Communication d'Affaires en Anglais", level: "Ciblé · B1 et au-dessus", track: "Anglais professionnel",
    summary: "Pratiquer l'anglais pour les réunions, les e-mails, les présentations et le travail d'équipe interculturel.",
    audience: "Professionnels qui utilisent l'anglais pour le travail quotidien, la communication client ou la collaboration internationale.",
    modules: [["Présence professionnelle", "Rôles, small talk professionnel, construction de relations et étiquette interculturelle."], ["E-mail et messagerie", "Objets, demandes, réponses, ton, messages difficiles et suivi."], ["Réunions et collaboration", "Ordres du jour, mises à jour, clarification, désaccord et confirmation des points d'action."], ["Présentations et propositions", "Données, récit, comparaison d'options, questions client et simulation de pitch."]],
  },
  {
    code: "EN-IELTS", title: "IELTS Fondation et Pont de Compétences", level: "Préparation à l'examen · A2+ recommandé", track: "Préparation à l'examen",
    summary: "Renforcer la langue sous-jacente avant de construire des méthodes stables pour les tâches et le passage du test IELTS.",
    audience: "Candidats IELTS potentiels dont le vocabulaire, la grammaire ou les quatre compétences ne sont pas encore cohérents.",
    modules: [["Diagnostic et base linguistique", "Diagnostic d'entrée, vocabulaire de base, phrases complexes et plan d'étude."], ["Fondations d'écoute et de lecture", "Localiser des informations, paraphrase, structure du texte et analyse des erreurs."], ["Fondations d'expression orale et d'écriture", "Développer les réponses, ressources thématiques, paragraphage, graphiques et opinions."], ["Pratique intégrée", "Pratique chronométrée des compétences, un test mock de stade, retours et planification des prochaines étapes."]],
  },
  {
    code: "FR-A1.1", title: "Découverte du Français A1.1", level: "Débutant · CECRL A1.1", track: "Français général",
    summary: "Commencer avec les modèles sonores et une première présentation, en établissant des bases françaises fiables.",
    audience: "Débutants complets ou apprenants qui veulent reconstruire la prononciation et les structures de phrases de base.",
    modules: [["Bonjour, enchanté", "L'alphabet et les sons, les salutations, les présentations, les pronoms sujets et être."], ["Moi et ma vie", "Les pays, les professions, les chiffres, les dates, le genre, les articles de base et avoir."], ["Une journée en ville", "Les lieux, les transports, les directions, les verbes réguliers et les prépositions courantes."], ["Une première tâche en français", "Commander dans un café, faire des achats, prononciation et évaluation situationnelle."]],
  },
  {
    code: "FR-A1.2", title: "Français Fondation A1.2", level: "Élémentaire · CECRL A1", track: "Français général",
    summary: "Élargir les situations quotidiennes et la grammaire de base pour aller au-delà de l'expression mot à mot.",
    audience: "Apprenants familiers avec la prononciation de base et le présent qui veulent une communication quotidienne plus complète.",
    modules: [["Famille et routine", "Les possessifs, les verbes réfléchis, dire l'heure et les habitudes quotidiennes."], ["Maison et ville", "Décrire une maison, la localisation, l'impératif, les questions et les directions."], ["Nourriture et achats", "Les articles partitifs, la quantité, les préférences, la comparaison et les situations de service."], ["Plans du week-end", "Le futur proche, les invitations, les réponses, la planification et une tâche d'expression orale intégrée."]],
  },
  {
    code: "FR-A2", title: "Français Progression A2", level: "Pré-intermédiaire · CECRL A2", track: "Français général",
    summary: "Parler d'expériences et de plans tout en gérant des interactions de voyage et de vie quotidienne plus complètes.",
    audience: "Apprenants qui ont complété A1 et veulent un meilleur contrôle des temps, de l'écoute et de la parole connectée.",
    modules: [["Histoires du passé", "Le passé composé, une introduction à l'imparfait, la narration et les questions de suivi."], ["Voyage et services", "L'hébergement, les transports, les demandes d'aide, les réclamations et la confirmation."], ["Santé et choix", "La santé, l'obligation, les conseils, les pronoms, la comparaison et donner des raisons."], ["Projet de ville française", "Recherche, conception d'itinéraire, rédaction d'e-mail et présentation de groupe."]],
  },
  {
    code: "FR-B1", title: "Français Intermédiaire B1", level: "Intermédiaire · CECRL B1", track: "Français général",
    summary: "Discuter de sujets sociaux et culturels familiers tout en développant des points de vue personnels plus clairs.",
    audience: "Apprenants avec des compétences de communication quotidienne qui veulent plus de profondeur en lecture, discussion et écriture.",
    modules: [["Études et travail", "L'éducation, l'expérience, les CV, la motivation, les pronoms relatifs et l'expression formelle."], ["Médias et culture", "Les reportages, les critiques, relayer des informations, les pronoms et comparer des points de vue."], ["Société et environnement", "La cause, le résultat, la condition, la discussion et un court débat."], ["Projet de résultat thématique", "Textes multiples, un entretien, un rapport écrit et une présentation orale."]],
  },
  {
    code: "FR-B2", title: "Application du Français Avancé B2", level: "Intermédiaire supérieur · CECRL B2", track: "Français général",
    summary: "Traiter des informations et des arguments complexes pour les études, le travail ou la préparation ciblée aux examens.",
    audience: "Apprenants avec une base intermédiaire solide qui ont besoin du français pour un usage académique, professionnel ou public.",
    modules: [["Registre et précision", "Registre formel et informel, cohésion, paraphrase et édition linguistique."], ["Analyse et argumentation", "Structure de l'argumentation, évaluation des preuves, concession, réfutation et lecture critique."], ["Discussion sur des questions publiques", "Éducation, technologie et culture à travers la table ronde et la synthèse."], ["Recherche et présentation", "Revue de sources, rédaction argumentative, expression formelle et questions en direct."]],
  },
  {
    code: "FR-DELF", title: "Préparation au DELF", level: "Préparation à l'examen · A2/B1", track: "Préparation à l'examen",
    summary: "Comprendre les quatre composantes du DELF et les critères d'évaluation, puis construire des méthodes de test fiables.",
    audience: "Apprenants planifiant le DELF A2 ou B1 qui atteignent déjà le niveau de langue générale correspondant.",
    modules: [["Diagnostic d'examen", "Confirmation du niveau, critères, lacunes individuelles et plan de formation."], ["Stratégies d'écoute et de lecture", "Prédiction, localisation, paraphrase, vérification et travail chronométré."], ["Tâches d'expression et d'écriture", "Interaction, points de vue, lettres, courts textes et retours ciblés."], ["Examen blanc et révision", "Une simulation complète, discussion des scores, révision des erreurs et planification finale."]],
  },
  {
    code: "JP-START", title: "Japonais Débutant", level: "Débutant · N5 précoce", track: "Japonais général",
    summary: "Maîtriser le kana, la prononciation et les premiers modèles essentiels pour un départ assuré.",
    audience: "Débutants complets ou apprenants qui veulent reconstruire le kana et commencer systématiquement.",
    modules: [["Kana et son", "Kana de base, sons voisés, voyelles longues, consonnes doubles et sons contractés."], ["Première rencontre", "Salutations, présentations, démonstratifs, affirmations et questions."], ["Ma journée", "L'heure, les dates, les verbes introduits, les particules に・で・を et les routines."], ["Première tâche situationnelle", "Achats, commande, directions sur le campus et présentation de base."]],
  },
  {
    code: "JP-N5", title: "Japonais Élémentaire", level: "Élémentaire · JLPT N5", track: "Japonais général",
    summary: "Construire un système grammatical élémentaire et une communication quotidienne pour les textes courts et échanges courants.",
    audience: "Apprenants qui connaissent le kana et quelques modèles et veulent compléter une étape élémentaire systématique.",
    modules: [["Vie et action", "Groupes et formes verbales, existence, invitations et activités quotidiennes."], ["Description et comparaison", "Adjectifs, préférences, capacité, comparaison, personnes et lieux."], ["Demandes et permission", "La forme て, les demandes, la permission, l'interdiction et les actions en cours."], ["Tâche élémentaire intégrée", "Lecture et écoute courtes, planification de voyage et évaluation de stade."]],
  },
  {
    code: "JP-N4", title: "Japonais Pré-intermédiaire", level: "Pré-intermédiaire · JLPT N4", track: "Japonais général",
    summary: "Étendre les temps, les phrases complexes, l'écoute et la lecture pour communiquer au-delà des déclarations isolées.",
    audience: "Apprenants qui ont complété un cours élémentaire et veulent une capacité plus large ou la préparation au JLPT N4.",
    modules: [["Expérience et changement", "Formes simples, expérience, changements d'état, séquence et liens de phrases."], ["Plans et conseils", "Intention, plans, conditions, recommandations et dialogue de résolution de problèmes."], ["Information et rapport", "Ouï-dire, inférence, raisons, courtes nouvelles et relayer des informations."], ["Projet de vie quotidienne", "Un sondage, une courte rédaction, un rapport de groupe et une pratique de stade N4."]],
  },
  {
    code: "JP-N3", title: "Japonais Intermédiaire", level: "Intermédiaire · JLPT N3", track: "Japonais général",
    summary: "Comprendre des phrases plus longues et exprimer des thèmes en utilisant des matériaux japonais de plus en plus naturels.",
    audience: "Apprenants avec une grammaire élémentaire complète prêts pour la lecture, l'écoute et l'expression intermédiaires.",
    modules: [["Longues phrases et textes", "Modification, connecteurs, référence et identification du focus du paragraphe."], ["Écoute et lecture en société", "Avis, interviews, courtes nouvelles, prise de notes et résumé."], ["Points de vue et interaction", "Accord, désaccord, tact, raisons et discussion thématique."], ["Tâche de résultat intermédiaire", "Lecture thématique, un court rapport, présentation orale et évaluation N3."]],
  },
  {
    code: "JP-N2", title: "Application du Japonais Intermédiaire Supérieur", level: "Intermédiaire supérieur · JLPT N2", track: "Japonais général",
    summary: "Gérer des textes sociaux et professionnels complexes avec une expression plus précise et appropriée.",
    audience: "Apprenants autour du N3 qui ont besoin de progresser pour des études supérieures, le travail ou le JLPT N2.",
    modules: [["Lecture attentive et nuance", "Vocabulaire abstrait, quasi-synonymes, connexions complexes et structure de l'argumentation."], ["Communication professionnelle", "Langage honorifique, e-mail, appels téléphoniques, rapports, demandes et résolution de problèmes."], ["Questions sociales", "Écoute et lecture de nouvelles, analyse de position, discussion et rédaction de résumé."], ["Présentation de recherche", "Collecte de sources, rédaction de rapport, expression formelle et questions."]],
  },
  {
    code: "JP-JLPT", title: "Préparation Intensive au JLPT", level: "Préparation à l'examen · N3/N2", track: "Préparation à l'examen",
    summary: "Utiliser une pratique chronométrée de langue, lecture et écoute avec une révision systématique pour une meilleure cohérence.",
    audience: "Apprenants ayant complété le niveau général correspondant et planifiant le JLPT N3 ou N2.",
    modules: [["Diagnostic, vocabulaire et grammaire", "Diagnostic de capacité, points clés du test, nuance et classification des erreurs."], ["Vitesse et structure de lecture", "Méthodes chronométrées pour les textes courts, moyens, longs et la recherche d'informations."], ["Stratégies d'écoute", "Tâche, point clé, réponse rapide et compréhension intégrée."], ["Mocks et ajustement final", "Simulations complètes, revue de données, amélioration ciblée et rythme d'examen."]],
  },
  {
    code: "KR-START", title: "Coréen Débutant", level: "Débutant · TOPIK 1 précoce", track: "Coréen général",
    summary: "Comprendre comment fonctionne le Hangul et passer rapidement à la lecture de base et à l'expression quotidienne.",
    audience: "Débutants complets qui veulent une introduction systématique aux lettres, aux sons et aux modèles de base.",
    modules: [["Comprendre le Hangul", "Voyelles et consonnes de base, blocs syllabiques, consonnes finales et écriture."], ["Première rencontre", "Salutations, présentations, pays, professions et 이에요/예요."], ["Temps et lieu", "Les chiffres, les dates, l'heure, les expressions d'existence et les particules de base."], ["Tâche de vie sur le campus", "Demander des lieux, les routines, commander et une présentation situationnelle."]],
  },
  {
    code: "KR-1", title: "Coréen Élémentaire 1", level: "Élémentaire · TOPIK 1", track: "Coréen général",
    summary: "Établir le vocabulaire et la grammaire élémentaires pour une communication de base dans des situations familières.",
    audience: "Apprenants qui connaissent le Hangul et les salutations de base et veulent un cours élémentaire systématique.",
    modules: [["Ce que je fais chaque jour", "Le présent, les verbes courants, l'heure, la fréquence et les routines."], ["Manger et faire des achats", "La quantité, les prix, commander, les demandes et les choix."], ["Ville et voyage", "La localisation, les transports, le but, les directions et la planification d'itinéraire."], ["Présenter ma vie", "Les préférences, la capacité, les phrases liées, la courte rédaction et l'expression orale."]],
  },
  {
    code: "KR-2", title: "Coréen Élémentaire 2", level: "Pré-intermédiaire · TOPIK 2", track: "Coréen général",
    summary: "Étendre les temps, les raisons et les plans pour une conversation et une écriture plus complètes et connectées.",
    audience: "Apprenants qui ont complété l'Élémentaire 1 et veulent une communication quotidienne et une alphabétisation plus solides.",
    modules: [["Expériences et souvenirs", "Le passé, l'expérience, la mise en séquence et la description de photographies."], ["Plans et invitations", "Le futur, l'intention, les invitations, les arrangements et les plans de voyage."], ["Santé et résolution de problèmes", "Les raisons, les conseils, l'obligation, les symptômes et les situations de service."], ["Projet intégré élémentaire", "Écoute et lecture courtes, rédaction personnelle, présentation et évaluation."]],
  },
  {
    code: "KR-3", title: "Coréen Intermédiaire 1", level: "Intermédiaire · TOPIK 3", track: "Coréen général",
    summary: "Passer de la conversation quotidienne à l'expression thématique, la lecture, l'écoute et la rédaction de paragraphes.",
    audience: "Apprenants avec un niveau élémentaire qui veulent une discussion plus riche ou un pont vers le TOPIK II.",
    modules: [["Études et travail", "L'expérience, les objectifs, le discours rapporté, les situations formelles et relayer des informations."], ["Médias et culture", "Film, médias en ligne, sujets culturels, comparaison et réponse aux points de vue."], ["Vie en société", "Règles publiques, environnement, communauté, causes et solutions."], ["Projet de sondage thématique", "Questionnaires, lecture de sources, graphiques, un rapport et une présentation."]],
  },
  {
    code: "KR-4", title: "Coréen Intermédiaire 2", level: "Intermédiaire supérieur · TOPIK 4", track: "Coréen général",
    summary: "Gérer des textes complexes et les différences de registre pour les études et la communication professionnelle.",
    audience: "Apprenants intermédiaires cherchant plus de précision, d'expression formelle et d'application intégrée.",
    modules: [["Registre et relations", "Les niveaux d'honorifiques, le style écrit et parlé, les demandes formelles et le contexte."], ["Analyse de l'information", "Nouvelles, interviews, graphiques, résumés et intégration de sources multiples."], ["Points de vue et argumentation", "Affirmations, raisons, exemples, concession et stratégies d'avancement de la discussion."], ["Projet de résultat intégré", "Recherche thématique, un rapport écrit, présentation formelle et questions en direct."]],
  },
  {
    code: "KR-TOPIK", title: "Préparation au TOPIK II", level: "Préparation à l'examen · Niveaux 3—4", track: "Préparation à l'examen",
    summary: "Construire des méthodes pour l'écoute, la lecture et l'écriture, en utilisant une révision régulière pour stabiliser les performances.",
    audience: "Apprenants pré-intermédiaires planifiant le TOPIK II avec un objectif de niveau 3 ou 4.",
    modules: [["Diagnostic et connaissances linguistiques", "Diagnostic de niveau, vocabulaire et grammaire à haute fréquence, carte des tâches et plan."], ["Écoute et lecture", "Objectif, idées principales, détails, ordre du texte et stratégies chronométrées."], ["Focus sur l'écriture", "Complétion de phrases, descriptions de graphiques, structure d'opinion et retours sur brouillon."], ["Test mock complet", "Simulation complète, analyse des scores, regroupement des erreurs et rythme final."]],
  },
];

const copyByCode = new Map(copies.map((copy) => [copy.code, copy]));

function formatDuration(value: string) {
  const match = value.match(/(\d+) 周 · (\d+) 课时/);
  return match ? `${match[1]} semaines · ${match[2]} heures de cours` : value;
}

function formatFrequency(value: string) {
  const standard = value.match(/每周 (\d+) 次 · 每次 (\d+) 课时/);
  if (standard) return `${standard[1]} séances par semaine · ${standard[2]} heures chacune`;
  const range = value.match(/每周 (\d+)—(\d+) 次/);
  return range ? `${range[1]}–${range[2]} séances par semaine` : value;
}

function formatClassSize(value: string) {
  const match = value.match(/(\d+)—(\d+) 人/);
  return match ? `${match[1]}–${match[2]} apprenants` : value;
}

function outcomesFor(track: string) {
  if (track === "Préparation à l'examen") {
    return [
      "Comprendre les types de tâches testées et les attentes d'évaluation",
      "Appliquer des stratégies pratiques dans des conditions chronométrées",
      "Utiliser les résultats des mocks et les retours pour planifier une amélioration ciblée",
    ];
  }
  if (track === "Expression orale") {
    return [
      "Parler plus clairement avec un meilleur rythme et une meilleure intelligibilité",
      "Maintenir une interaction en utilisant des questions et des stratégies de réponse",
      "Faire un court discours structuré avec plus de confiance",
    ];
  }
  if (track === "Anglais professionnel") {
    return [
      "Communiquer de manière appropriée dans des situations professionnelles courantes",
      "Rédiger des e-mails et des messages de réunion professionnels plus clairs",
      "Présenter une idée et répondre aux questions avec confiance",
    ];
  }
  return [
    "Utiliser le vocabulaire et les structures d'étape dans une communication significative",
    "Accomplir des tâches intégrées d'écoute, d'expression, de lecture et d'écriture",
    "Reconnaître les points forts actuels et l'étape d'apprentissage suivante appropriée",
  ];
}

export type FrCourse = {
  code: string;
  slug: string;
  language: LanguageSlug;
  languageLabel: string;
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

export const frCourses: FrCourse[] = languageCourses.map((course) => {
  const copy = copyByCode.get(course.code);
  if (!copy) throw new Error(`Missing French course copy for ${course.code}`);

  return {
    code: course.code,
    slug: course.slug,
    language: course.language,
    languageLabel: {
      english: "Anglais",
      french: "Français",
      japanese: "Japonais",
      korean: "Coréen",
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

export const frCoursesByLanguage = (language: LanguageSlug) =>
  frCourses.filter((course) => course.language === language);

export const findFrCourse = (language: string, slug: string) =>
  frCourses.find((course) => course.language === language && course.slug === slug);
