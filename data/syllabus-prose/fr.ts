import type { SyllabusProse } from "@/data/course-syllabus-i18n";

/** 课程大纲的法文散文字段。周次与教学安排由 course-syllabus-i18n.ts 推导。 */
export const frSyllabusProse: Record<string, SyllabusProse> = {
  "EN-A1": {
    prerequisite: "Grands débutants, ou apprenants aux bases très fragiles. Aucun cours préalable requis.",
    materials: "Manuel Anglais – compétences intégrées A1, audio de prononciation, cartes de situation et cahier d’étape.",
    classwork: [
      "Créer une fiche d’identité ; se présenter en binôme ; repérer noms, pays et professions à l’oral",
      "Interroger un partenaire sur sa semaine ; décrire une journée type ; compléter un emploi du temps à trous",
      "Demander son chemin sur un plan du campus ; préparer un trajet simple ; lire la signalétique",
      "Commander au restaurant ; demander un prix ; laisser un message téléphonique ; rotation de scènes du quotidien",
    ],
    homework: [
      "Répéter après l’audio ; rédiger une courte présentation ; test de prononciation et de structures en semaine 3",
      "Enregistrer sa routine ; travailler l’expression du temps ; épreuve d’étape en compréhension orale en semaine 6",
      "Rédiger un itinéraire ; préparer un dialogue de demande de route ; oral en situation en semaine 9",
      "Fiche de révision ; enregistrement oral ; préparation de la présentation finale",
    ],
    assessments: [
      "Semaine 3 : prononciation et structures de base.",
      "Semaine 6 : compréhension orale et expression des habitudes quotidiennes.",
      "Semaine 9 : oral en situation sur l’orientation et les déplacements.",
      "Semaine 12, épreuve finale : oral intégré sur des scènes du quotidien, lecture de base et rédaction d’un message court.",
    ],
    outcome: "Une présentation personnelle complète, un emploi du temps et une conversation du quotidien.",
  },

  "EN-A2": {
    prerequisite: "Avoir suivi EN-A1, ou être positionné autour du niveau A1 du CECRL.",
    materials: "Manuel Anglais – compétences intégrées A2, supports d’écoute et de lecture gradués, cahier de production écrite.",
    classwork: [
      "Raconter un week-end ; construire un récit à partir d’images ; interroger un partenaire sur un souvenir marquant",
      "Comparer deux propositions de voyage ; élaborer un programme de groupe ; justifier un choix",
      "Jeu de rôle médecin-patient ; enquête sur les habitudes de vie ; formuler des conseils",
      "Défendre un point de vue sur les méthodes de travail ; répondre aux questions ; réécrire un courriel mal construit",
    ],
    homework: [
      "Exercices sur le passé ; récit enregistré de 90 secondes ; oral narratif en semaine 3",
      "Rédiger un courriel de planification ; travailler la comparaison ; épreuve de lecture et d’écriture en semaine 6",
      "Tenir un carnet santé ; enregistrer un conseil ; épreuve orale en contexte de service en semaine 9",
      "Rédiger un paragraphe thématique ; préparer une intervention de deux minutes ; révision finale",
    ],
    assessments: [
      "Semaine 3 : récit oral d’une expérience passée.",
      "Semaine 6 : lecture sur un projet de voyage et rédaction d’un courriel.",
      "Semaine 9 : compréhension et expression orales en contexte de santé.",
      "Semaine 12, épreuve finale : compréhension intégrée, intervention thématique de deux minutes et courriel bref.",
    ],
    outcome: "Un récit personnel, un projet de voyage et un courriel du quotidien bien structuré.",
  },

  "EN-B1": {
    prerequisite: "Avoir suivi EN-A2, ou être positionné autour du niveau A2 du CECRL.",
    materials: "Anglais – compétences intégrées B1-1, dossier de lectures thématiques, carnet d’écoute et livret de projet.",
    classwork: [
      "Partager une expérience d’apprentissage ; mener un entretien sur les stratégies ; synthétiser les propos d’un pair",
      "Concevoir un entretien de portrait ; débattre d’un problème local ; étayer un avis par des exemples",
      "Comparer deux reportages ; résumer une actualité ; distinguer la position du titre de celle du corps du texte",
      "Mener une recherche en groupe ; relecture croisée ; présentation de cinq minutes suivie de questions",
    ],
    homework: [
      "Rédiger un bilan d’apprentissage ; rendre l’entretien enregistré ; test de grammaire et de narration en semaine 3",
      "Rédiger un portrait ; lecture thématique ; lecture et écriture argumentative en semaine 6",
      "Prendre des notes d’écoute ; rédiger un résumé ; partiel en semaine 8 et restitution d’information en semaine 10",
      "Tenir un journal de recherche ; rédiger puis réviser un article d’opinion ; préparer la présentation finale",
    ],
    assessments: [
      "Semaine 3 : connaissances linguistiques et récit d’expérience.",
      "Semaine 6 : lecture de longueur moyenne et paragraphe argumentatif.",
      "Semaine 8, partiel : écoute, lecture, grammaire appliquée et écrit court.",
      "Semaine 10 : résumé d’actualité et restitution d’information.",
      "Semaine 14, épreuve finale : article d’opinion en trois parties, présentation de cinq minutes et questions.",
    ],
  },

  "EN-B1+": {
    prerequisite: "Avoir suivi EN-B1, ou être positionné à un niveau B1 stable du CECRL.",
    materials: "Anglais – compétences intégrées B1-2, dossiers thématiques multi-sources et livret de recherche.",
    classwork: [
      "Décomposer l’argumentation d’un texte court ; débattre d’une position ; s’entraîner à répondre aux objections",
      "Analyser un cas ; comparer trois solutions ; conduire une réunion de décision",
      "Traiter un cas de malentendu interculturel ; reformuler un message maladroit ; simuler une négociation",
      "Formuler une question de recherche ; mener des entretiens ; dégager des conclusions et les présenter",
    ],
    homework: [
      "Rédiger un paragraphe argumentatif ; rendre l’enregistrement du débat ; test sur la structure argumentative en semaine 3",
      "Rédiger une proposition ; décrire des données ; travail écrit de résolution de problème en semaine 6",
      "Rédiger un retour sur le cas ; reformuler un courriel ; partiel en semaine 8 et simulation de rôle en semaine 10",
      "Annoter les sources ; résumer les entretiens ; rédiger puis réviser le rapport",
    ],
    assessments: [
      "Semaine 3 : identification des arguments et prise de position.",
      "Semaine 6 : analyse d’un problème et rapport de recommandations.",
      "Semaine 8, partiel : épreuve multi-compétences.",
      "Semaine 10 : négociation autour d’un cas interculturel.",
      "Semaine 14, épreuve finale : rapport écrit multi-sources, exposé de groupe et questions.",
    ],
  },

  "EN-B2": {
    prerequisite: "Avoir suivi EN-B1+, ou être positionné autour du niveau B1+ du CECRL.",
    materials: "Anglais – expression avancée B2, supports de lecture critique, dossier de discussion et de prise de parole.",
    classwork: [
      "Comparer des quasi-synonymes ; réécrire un texte pour un autre destinataire ; expliquer une notion complexe sans préparation",
      "Confronter plusieurs sources ; évaluer les preuves ; rédiger une réponse critique",
      "Animer une table ronde ; négocier entre parties prenantes ; analyser ses propres stratégies d’interaction",
      "Répéter l’intervention ; échanger des retours entre pairs ; présenter formellement et répondre aux questions",
    ],
    homework: [
      "Tenir un carnet de collocations ; réécrire un texte ; contrôle de précision linguistique en semaine 3",
      "Annoter les sources ; rédiger un article de réponse ; épreuve d’étape en lecture-écriture en semaine 6",
      "Remplir une grille d’observation ; préparer la négociation ; évaluation de la discussion en direct en semaine 9",
      "Réviser le texte et les supports visuels ; rédiger un bilan personnel",
    ],
    assessments: [
      "Semaine 3 : registre et édition de texte.",
      "Semaine 6 : lecture critique et article de réponse.",
      "Semaine 9 : animation d’une discussion et négociation.",
      "Semaine 12, épreuve finale : exposé de recherche de 8 à 10 minutes, questions en direct et bilan écrit.",
    ],
  },

  "EN-SPK": {
    prerequisite: "Niveau A2 du CECRL ou plus recommandé ; un diagnostic oral court est réalisé avant le début du cours.",
    materials: "Dossier d’intensif oral, audio de prononciation, grilles de réécoute et cartes de situation.",
    classwork: [
      "Enregistrement de référence ; shadowing ; retours des pairs sur l’intelligibilité",
      "Conversations tournantes ; écarts d’information ; gestion de l’imprévu",
      "Prises de parole graduées d’une, deux puis trois minutes",
      "Discussion de groupe ; négociation de tâche ; enregistrement du rendu final",
    ],
    homework: [
      "Shadowing quotidien court ; enregistrer les sons corrigés ; nouveau test de prononciation en semaine 2",
      "Consigner deux conversations réelles ; oral en binôme en semaine 4",
      "Enregistrer et auto-évaluer une intervention ; contrôle d’expression spontanée en semaine 6",
      "Préparer l’enregistrement final ; analyser sa propre progression",
    ],
    assessments: [
      "Semaine 1 : enregistrement oral de référence.",
      "Semaine 2 : nouveau test de prononciation et d’intelligibilité.",
      "Semaine 4 : oral d’interaction en binôme.",
      "Semaine 6 : prise de parole spontanée sur un thème.",
      "Semaine 8, épreuve finale : interaction en situation, discussion de groupe et exposé individuel, comparés à l’enregistrement d’entrée.",
    ],
  },

  "EN-BIZ": {
    prerequisite: "Niveau B1 du CECRL ou plus recommandé ; merci de préciser votre poste et vos principales situations d’usage de l’anglais.",
    materials: "Dossier de cas en communication professionnelle, cahier de réécriture de courriels, cartes de rôle et modèles de présentation.",
    classwork: [
      "Présentation professionnelle de 30 secondes ; échange avant réunion ; accueil d’un visiteur",
      "Réécrire un courriel inefficace ; traiter une demande client ; rédiger une confirmation d’actions",
      "Animer une réunion courte ; rendre compte d’un avancement ; gérer un désaccord",
      "Restitution chiffrée de trois minutes ; proposition client ; questions sous pression",
    ],
    homework: [
      "Enregistrer sa présentation professionnelle ; oral de communication sociale en semaine 2",
      "Rendre deux courriels réécrits ; épreuve de courriel en temps limité en semaine 4",
      "Constituer une check-list de réunion ; simulation de réunion en semaine 6, débriefing en semaine 7",
      "Préparer le script, le plan des diapositives et une banque de questions",
    ],
    assessments: [
      "Semaine 2 : présentation professionnelle et prise de contact à l’oral.",
      "Semaine 4 : rédaction de courriel professionnel en temps limité.",
      "Semaine 6, partiel : réunion simulée et relevé de décisions.",
      "Semaine 10, épreuve finale : restitution de projet ou proposition client, questions en direct et courriel de suivi.",
    ],
  },

  "EN-IELTS": {
    prerequisite: "Niveau A2 du CECRL ou plus recommandé ; un diagnostic sur les quatre compétences est réalisé à l’entrée, avec indication du score visé.",
    materials: "Supports de mise à niveau IELTS, cahiers par compétence, cartes de sujets oraux, dossier de copies corrigées et sujets blancs.",
    classwork: [
      "Diagnostic sur quatre compétences ; décomposition de phrases longues ; typologie des erreurs",
      "Entraînement par type de question ; repérage chronométré ; analyse des erreurs",
      "Simulation d’oral ; remise en ordre de paragraphes ; description de graphiques ; retours entre pairs",
      "Demi-épreuve puis épreuve blanche complète ; entretiens de retour ; plan pour la suite",
    ],
    homework: [
      "Révision lexicale et analyse de phrases longues ; test de bases linguistiques en semaine 3",
      "Transcriptions d’écoute intensive et bilan de lecture ; épreuve d’étape en semaine 6",
      "Enregistrements oraux et brouillons écrits ; épreuve d’étape oral-écrit en semaine 9",
      "Refaire les items manqués, réviser les écrits, réenregistrer l’oral",
    ],
    assessments: [
      "Semaine 1 : diagnostic d’entrée sur quatre compétences, non comptabilisé dans le résultat final.",
      "Semaine 3 : test de lexique, de grammaire et de compréhension des phrases longues.",
      "Semaine 6 : épreuve d’étape en compréhension orale et écrite.",
      "Semaine 9 : simulation d’oral et production écrite en temps limité.",
      "Semaines 11-12 : épreuve blanche complète, analyse des résultats et entretien individuel.",
      "Le cours est un module de mise à niveau : aucun gain de score ni score cible n’est garanti.",
    ],
  },

  "FR-A1.1": {
    prerequisite: "Grands débutants. Aucun prérequis.",
    materials: "Français – initiation A1.1, audio de prononciation, cartes de situation et cahier d’exercices.",
    classwork: [
      "Épeler des noms ; se présenter ; échanger des informations personnelles de base",
      "Remplir une fiche personnelle ; présenter sa famille ; repérer nombres et dates à l’oral",
      "Demander son chemin sur un plan ; expliquer son trajet ; lire la signalétique des lieux publics",
      "Commander à partir d’une carte ; demander un prix ; faire une courte présentation orale",
    ],
    homework: [
      "Répéter après l’audio ; enregistrer une présentation ; oral de prononciation et de salutations en semaine 3",
      "Rédiger une fiche personnelle ; exercices de vocabulaire ; test de compréhension et de structures en semaine 6",
      "Rédiger un itinéraire ; préparer un dialogue de demande de route ; oral en situation en semaine 9",
      "Révision générale ; enregistrer une commande ; préparer la tâche finale",
    ],
    assessments: [
      "Semaine 3 : oral de prononciation.",
      "Semaine 6 : test de compréhension et de connaissances linguistiques.",
      "Semaine 9 : oral de demande de route.",
      "Semaine 12 : présentation personnelle, dialogue de commande ou d’achat, et tâches de lecture-écriture de base.",
    ],
  },

  "FR-A1.2": {
    prerequisite: "Avoir suivi FR-A1.1, ou maîtriser la prononciation de base, les salutations, les nombres et le présent courant.",
    materials: "Français – bases A1.2, supports d’écoute du quotidien et cahier de production écrite.",
    classwork: [
      "Présenter sa famille ; comparer des rythmes de vie ; interroger un partenaire sur sa journée",
      "Décrire une pièce ; indiquer un chemin à partir d’un plan ; chercher un logement adapté",
      "Établir une liste de courses ; commander un repas ; comparer des produits",
      "Lancer une invitation ; convenir d’un horaire ; construire un programme de week-end",
    ],
    homework: [
      "Rédiger une présentation familiale ; enregistrer sa routine ; oral et grammaire en semaine 3",
      "Décrire un logement ; travailler les itinéraires ; épreuve de compréhension en situation en semaine 6",
      "Compléter la tâche « carte » ; enregistrer un dialogue d’achat ; oral en contexte de service en semaine 9",
      "Rédiger un message d’invitation ; rédiger le programme ; préparer la présentation finale",
    ],
    assessments: [
      "Semaine 3 : expression sur la famille et le quotidien.",
      "Semaine 6 : compréhension et expression sur le logement et les itinéraires.",
      "Semaine 9 : oral de commande et d’achat.",
      "Semaine 12 : programme de week-end, message d’invitation et compréhension intégrée.",
    ],
  },

  "FR-A2": {
    prerequisite: "Avoir terminé le niveau A1, ou être positionné au niveau A1 du CECRL.",
    materials: "Français – progression A2, dossier voyages et services, supports de lecture gradués.",
    classwork: [
      "Raconter un voyage ou un souvenir d’enfance ; restituer une histoire à partir d’images",
      "S’enregistrer à l’hôtel ; se renseigner en gare ; régler un problème de service",
      "Prendre un rendez-vous médical ; discuter de son mode de vie ; choisir entre des options",
      "Étudier une ville francophone ; construire un itinéraire ; répondre aux questions",
    ],
    homework: [
      "Rédiger un récit d’expérience ; rendre un enregistrement oral ; contrôle narratif en semaine 3",
      "Rédiger un courriel de service ; préparer un dialogue ; épreuve en situation en semaine 6",
      "Rédiger des conseils santé ; partiel en semaine 8 et tâche d’opinion en semaine 10",
      "Résumer les sources ; rédiger l’itinéraire ; réviser le rapport de projet",
    ],
    assessments: [
      "Semaine 3 : récit d’une expérience.",
      "Semaine 6 : épreuve en situation de voyage et de service.",
      "Semaine 8, partiel : compréhension et connaissances linguistiques.",
      "Semaine 10 : formulation de conseils santé.",
      "Semaine 14 : projet de ville, courriel et présentation orale.",
    ],
  },

  "FR-B1": {
    prerequisite: "Avoir suivi FR-A2, ou être positionné au niveau A2 du CECRL.",
    materials: "Français – niveau intermédiaire B1, dossier de lectures sociales et culturelles, cahier d’écrits formels.",
    classwork: [
      "Simuler un entretien ; retravailler une section de CV ; exposer un projet d’études",
      "Comparer des critiques culturelles ; résumer une actualité ; recommander un livre, un film ou un album",
      "Analyser un problème ; proposer des solutions ; participer à un débat structuré",
      "Choisir et documenter un sujet ; mener un entretien ; relecture croisée ; présentation orale",
    ],
    homework: [
      "Rédiger un paragraphe de lettre de motivation ; épreuve d’expression formelle en semaine 4",
      "Rédiger une critique brève ; résumer un document sonore ; partiel en semaine 8",
      "Rédiger un article d’opinion ; contrôle débat et écriture en semaine 12",
      "Annoter les sources ; produire un premier puis un dernier état du rapport",
    ],
    assessments: [
      "Semaine 4 : courriel formel ou lettre de motivation.",
      "Semaine 8, partiel : épreuve intégrée de compréhension et de production.",
      "Semaine 12 : débat court et article d’opinion.",
      "Semaine 16 : rapport de recherche, présentation orale et questions.",
    ],
  },

  "FR-B2": {
    prerequisite: "Avoir suivi FR-B1, ou être positionné à un niveau B1 stable du CECRL.",
    materials: "Français – usage avancé B2, supports de lecture critique et dossier d’expression formelle.",
    classwork: [
      "Réécrire un texte pour des destinataires différents ; corriger des phrases fautives ; expliquer une notion",
      "Décomposer un éditorial ; hiérarchiser les preuves ; rédiger une réponse",
      "Animer une discussion ; synthétiser plusieurs sources ; construire un consensus",
      "Choisir un sujet de recherche ; répéter l’intervention ; participer à l’évaluation par les pairs",
    ],
    homework: [
      "Constituer un recueil de réécritures ; épreuve d’édition linguistique en semaine 4",
      "Rédiger un texte argumentatif ; partiel de lecture-écriture en semaine 8",
      "Rédiger une synthèse ; contrôle discussion et synthèse en semaine 12",
      "Réviser l’article de recherche et le texte de l’intervention en plusieurs états",
    ],
    assessments: [
      "Semaine 4 : registre et édition linguistique.",
      "Semaine 8, partiel : lecture et écriture critiques.",
      "Semaine 12 : table ronde et synthèse.",
      "Semaine 16 : texte argumentatif, présentation formelle et questions en direct.",
    ],
  },

  "FR-DELF": {
    prerequisite: "Les candidats au A2 ou au B1 doivent avoir le niveau global correspondant et une date d’examen confirmée.",
    materials: "Cahiers gradués DELF A2/B1, analyse des critères de notation, cartes d’oral et sujets blancs.",
    classwork: [
      "Passer un sujet de diagnostic ; analyser une copie type ; ouvrir un carnet d’erreurs",
      "Entraînement par type de question ; lecture chronométrée ; prise de notes à l’écoute",
      "Oraux tournants ; production écrite en temps limité ; évaluation croisée selon les critères",
      "Épreuve blanche complète ; retour individuel ; derniers ajustements",
    ],
    homework: [
      "Classer ses erreurs ; retour diagnostique par compétence en semaine 2",
      "Séries de compréhension orale et écrite ; demi-épreuve blanche en semaine 4",
      "Enregistrements oraux et révisions écrites ; blanc oral-écrit en semaine 6",
      "Refaire les items manqués ; établir une check-list personnelle avant l’examen",
    ],
    assessments: [
      "Semaine 1 : diagnostic.",
      "Semaine 4 : demi-épreuve blanche en compréhension.",
      "Semaine 6 : blanc oral et écrit.",
      "Semaines 7-8 : épreuve blanche complète. Les niveaux A2 et B1 utilisent des supports et des critères distincts ; la réussite à l’examen n’est pas garantie.",
    ],
  },

  "JP-START": {
    prerequisite: "Grands débutants. Aucune connaissance des kana requise.",
    materials: "Japonais – initiation, cahier de kana, audio de prononciation et cartes de situations du quotidien.",
    classwork: [
      "Lire les kana à voix haute ; choisir le caractère entendu ; épeler noms et mots d’emprunt",
      "Échanger nom, nationalité et filière ; décrire des objets",
      "Construire un emploi du temps ; interroger un partenaire ; décrire une journée sur le campus",
      "Commander au restaurant ; demander un prix ; réaliser une tâche sur le plan du campus",
    ],
    homework: [
      "Écriture des kana ; répétition ; lecture et dictée de kana en semaine 3",
      "Enregistrer une présentation ; oral de conversation de base en semaine 5",
      "Rédiger son emploi du temps ; exercices de verbes ; contrôle de compréhension et de structures en semaine 8",
      "Révision générale ; préparer la présentation finale",
    ],
    assessments: [
      "Semaine 3 : lecture, écriture et dictée de kana.",
      "Semaine 5 : oral de présentation personnelle.",
      "Semaine 8 : compréhension orale et écrite de base.",
      "Semaine 10 : scène de commande ou de demande de route, lecture-écriture courte et oral intégré.",
    ],
  },

  "JP-N5": {
    prerequisite: "Avoir suivi le cours d’initiation, ou maîtriser les kana, les salutations de base et les phrases simples.",
    materials: "Japonais intégré N5, liste de kanji de base, supports d’écoute et exercices par unité.",
    classwork: [
      "Décrire une journée ; chercher un objet ; inviter un camarade",
      "Comparer des villes ; parler d’une activité appréciée ; décrire une personne",
      "Expliquer un règlement du campus ; demander de l’aide ; jeu de rôle en contexte de service",
      "Préparer un voyage ; lire un avis ; présenter le groupe",
    ],
    homework: [
      "Exercices de verbes ; enregistrer sa routine ; test de connaissances linguistiques en semaine 3",
      "Rédiger une description ; contrôle d’oral et de lecture en semaine 6",
      "Exercices sur la forme en -te ; partiel en semaine 8 et oral en situation en semaine 10",
      "Rédiger un projet de voyage ; tenir un carnet d’écoute ; révision finale",
    ],
    assessments: [
      "Semaine 3 : conjugaison verbale.",
      "Semaine 6 : expression descriptive.",
      "Semaine 8, partiel : compréhension et connaissances linguistiques.",
      "Semaine 10 : oral sur la demande et l’autorisation.",
      "Semaine 14 : projet de voyage, lecture-écriture courte et évaluation intégrée du niveau N5.",
    ],
  },

  "JP-N4": {
    prerequisite: "Avoir suivi JP-N5, ou être positionné autour du niveau JLPT N5.",
    materials: "Japonais – début d’intermédiaire N4, précis de grammaire fonctionnelle, lectures graduées et exercices d’écoute.",
    classwork: [
      "Raconter son parcours ; expliquer un changement ; restituer un événement",
      "Organiser une activité ; donner un conseil ; arbitrer entre plusieurs options",
      "Résumer une actualité ; rapporter les propos d’un pair ; expliquer le fondement d’un jugement",
      "Mener une enquête sur la vie quotidienne ; organiser les résultats ; présenter oralement",
    ],
    homework: [
      "Rédiger un récit d’expérience ; connaissances linguistiques et oral narratif en semaine 4",
      "Rédiger un projet ; partiel de compréhension et de production en semaine 8",
      "Prendre des notes d’écoute ; tâche de restitution en semaine 12",
      "Rédiger le rapport d’enquête ; revoir les sujets d’entraînement",
    ],
    assessments: [
      "Semaine 4 : récit d’une expérience.",
      "Semaine 8, partiel : épreuve intégrée.",
      "Semaine 12 : compréhension orale et restitution d’information.",
      "Semaine 16 : projet d’enquête, compte rendu oral et blanc de niveau N4.",
    ],
  },

  "JP-N3": {
    prerequisite: "Avoir suivi JP-N4, ou être positionné autour du niveau JLPT N4.",
    materials: "Japonais intégré N3, cahier de phrases longues, écoute d’actualités et supports d’écriture thématique.",
    classwork: [
      "Segmenter les phrases ; remettre des paragraphes en ordre ; dégager l’idée principale",
      "Écouter un entretien ; lire un avis ; résumer oralement",
      "Débattre d’une position ; répondre aux objections ; animer un échange de groupe",
      "Choisir et documenter un sujet ; relecture croisée ; présentation formelle",
    ],
    homework: [
      "Analyser des phrases longues ; épreuve de structure du texte en semaine 4",
      "Tenir un carnet d’écoute ; partiel de compréhension en semaine 9",
      "Rédiger un court texte d’opinion ; oral de discussion en semaine 13",
      "Premier et dernier état du rapport ; revoir les sujets d’entraînement",
    ],
    assessments: [
      "Semaine 4 : phrases longues et lecture au niveau du texte.",
      "Semaine 9, partiel : compréhension et connaissances linguistiques.",
      "Semaine 13 : discussion thématique.",
      "Semaine 18 : rapport court, présentation orale et blanc intégré de niveau N3.",
    ],
  },

  "JP-N2": {
    prerequisite: "Avoir suivi JP-N3, ou être positionné autour du niveau JLPT N3.",
    materials: "Japonais appliqué N2, supports de lecture approfondie, cas de communication professionnelle et livret de présentation de recherche.",
    classwork: [
      "Substituer des quasi-synonymes ; analyser la logique d’un paragraphe ; résumer",
      "Prendre un appel professionnel ; réviser un courriel ; signaler un incident",
      "Comparer des reportages ; tenir une table ronde ; synthétiser l’information",
      "Choisir un sujet de recherche ; relecture croisée du rapport ; répéter la présentation",
    ],
    homework: [
      "Annoter la lecture approfondie ; épreuve de lexique et de lecture en semaine 4",
      "Rédiger un courriel formel ; partiel appliqué en semaine 9",
      "Rédiger un résumé d’actualité ; contrôle discussion et écriture en semaine 13",
      "Reprendre le rapport de recherche et le texte de l’intervention",
    ],
    assessments: [
      "Semaine 4 : lecture approfondie et distinction d’usage.",
      "Semaine 9, partiel : communication professionnelle.",
      "Semaine 13 : synthèse d’actualité et discussion.",
      "Semaine 18 : rapport de recherche, présentation formelle, questions en direct et entraînement intégré de niveau N2.",
    ],
  },

  "JP-JLPT": {
    prerequisite: "Pour le groupe N3, le niveau N4 est conseillé ; pour le groupe N2, le niveau N3. Merci de confirmer le niveau visé et la date d’examen.",
    materials: "Lexique et grammaire gradués N3/N2, cahiers d’entraînement en lecture et en écoute, sujets blancs.",
    classwork: [
      "Sujet de diagnostic ; synthèse des points testés ; plan personnel",
      "Lecture chronométrée ; repérage de la structure des paragraphes",
      "Anticipation des options ; notes par mots-clés ; écoute en continu",
      "Épreuve blanche complète ; analyse des données ; ajustement de la stratégie",
    ],
    homework: [
      "Séries de lexique et de grammaire ; retour diagnostique en semaine 2",
      "Séries de lecture ; blanc de lecture en semaine 4",
      "Séries d’écoute ; blanc d’écoute en semaine 6",
      "Refaire les items manqués ; établir une check-list personnelle avant l’examen",
    ],
    assessments: [
      "Semaine 1 : diagnostic.",
      "Semaine 4 : épreuve blanche de lecture.",
      "Semaine 6 : épreuve blanche d’écoute.",
      "Semaines 7-8 : épreuve blanche complète et retour individuel. Les niveaux N3 et N2 ont des sujets, des groupes et des critères distincts ; la réussite à l’examen n’est pas garantie.",
    ],
  },

  "KR-START": {
    prerequisite: "Grands débutants. Aucune connaissance du hangeul requise.",
    materials: "Coréen – initiation, cahier d’écriture des lettres, audio de prononciation et cartes de situations du quotidien.",
    classwork: [
      "Épeler des noms ; composer des syllabes à l’écoute ; reconnaître des mots courants",
      "Échanger des informations personnelles ; présenter un camarade ; lire une carte de visite",
      "Demander l’heure ; décrire la salle de classe ; établir son emploi du temps",
      "Demander son chemin sur le campus ; commander au café ; rotation de dialogues du quotidien",
    ],
    homework: [
      "Écriture des lettres ; répétition ; contrôle d’épellation, de dictée et de prononciation en semaine 3",
      "Enregistrer une présentation ; oral de base en semaine 5",
      "Discrimination des nombres ; rédiger son emploi du temps ; contrôle de compréhension en semaine 8",
      "Révision générale ; préparer la présentation finale",
    ],
    assessments: [
      "Semaine 3 : lecture des lettres et dictée.",
      "Semaine 5 : présentation personnelle.",
      "Semaine 8 : compréhension des nombres, de l’heure et des lieux.",
      "Semaine 10 : scène de demande de route ou de commande, lecture de base et écrit court.",
    ],
  },

  "KR-1": {
    prerequisite: "Avoir suivi le cours d’initiation, ou maîtriser le hangeul, les salutations de base et les phrases simples.",
    materials: "Coréen élémentaire 1, audio de consolidation phonétique, conversations du quotidien et exercices par unité.",
    classwork: [
      "Enquêter sur les rythmes de vie ; décrire une semaine ; compléter un emploi du temps à trous",
      "Commander à partir d’une carte ; demander un prix ; comparer des produits",
      "Demander son chemin sur un plan ; préparer un trajet ; expliquer le but d’un déplacement",
      "Parler de ses centres d’intérêt ; décrire la vie sur le campus ; répondre aux questions des pairs",
    ],
    homework: [
      "Rédiger sur sa routine ; répétition ; contrôle de verbes et d’oral en semaine 3",
      "Rédiger une liste de courses ; enregistrer un dialogue ; oral en situation en semaine 6",
      "Rédiger un itinéraire ; tâche d’écoute et de trajet en semaine 9",
      "Rédiger une présentation de sa vie quotidienne ; préparer la présentation finale",
    ],
    assessments: [
      "Semaine 3 : expression du quotidien.",
      "Semaine 6 : scènes d’achat et de commande.",
      "Semaine 9 : compréhension et expression sur les déplacements.",
      "Semaine 12 : texte court sur la vie quotidienne, présentation personnelle et compréhension intégrée.",
    ],
  },

  "KR-2": {
    prerequisite: "Avoir suivi KR-1, ou être positionné à un niveau élémentaire équivalent.",
    materials: "Coréen élémentaire 2, supports d’écoute et de lecture gradués, cahier d’écriture du quotidien.",
    classwork: [
      "Raconter une histoire à partir d’images ; interroger sur un voyage ; ordonner des événements",
      "Lancer une invitation ; convenir d’un horaire ; construire un itinéraire de groupe",
      "Consultation médicale ; expliquer un problème ; proposer une solution",
      "Lecture thématique ; récit personnel ; présentation de groupe",
    ],
    homework: [
      "Rédiger un récit d’expérience ; oral narratif en semaine 3",
      "Rédiger une invitation ; contrôle d’écriture et de dialogue en semaine 6",
      "Rédiger des conseils santé ; partiel en semaine 8 et oral en situation en semaine 10",
      "Premier état du projet ; revoir les sujets d’étape",
    ],
    assessments: [
      "Semaine 3 : récit d’une expérience.",
      "Semaine 6 : invitation et organisation.",
      "Semaine 8, partiel : compréhension et grammaire.",
      "Semaine 10 : oral de résolution de problème.",
      "Semaine 14 : texte personnel, présentation thématique et évaluation intégrée du niveau élémentaire.",
    ],
  },

  "KR-3": {
    prerequisite: "Avoir suivi KR-2, ou être positionné autour du niveau 2 du TOPIK.",
    materials: "Coréen intermédiaire 1, dossier médias et culture, exercices de description de graphiques et de paragraphes.",
    classwork: [
      "Partager un projet ; simuler un entretien ; rapporter les propos d’un pair",
      "Critiquer une œuvre ; comparer des pratiques culturelles ; résumer une actualité",
      "Analyser un problème local ; formuler des recommandations ; tenir une discussion thématique",
      "Mener une enquête ; organiser les graphiques ; rédiger le rapport ; présenter",
    ],
    homework: [
      "Rédiger sur ses objectifs ; épreuve de restitution et d’expression formelle en semaine 4",
      "Rédiger une critique courte ; partiel de compréhension et de production en semaine 8",
      "Rédiger un paragraphe d’opinion ; contrôle discussion et écriture en semaine 12",
      "Premier et dernier état du rapport d’enquête",
    ],
    assessments: [
      "Semaine 4 : expression formelle et restitution d’information.",
      "Semaine 8, partiel : épreuve intégrée.",
      "Semaine 12 : discussion sur une question de société et rédaction d’un paragraphe.",
      "Semaine 16 : rapport d’enquête, commentaire de graphiques et présentation orale.",
    ],
  },

  "KR-4": {
    prerequisite: "Avoir suivi KR-3, ou être positionné autour du niveau 3 du TOPIK.",
    materials: "Coréen intermédiaire 2, supports d’actualités et d’entretiens, dossier de communication formelle et d’écriture argumentative.",
    classwork: [
      "Réécrire d’un registre à l’autre ; simuler une demande formelle ; analyser un cas d’impair",
      "Comparer deux reportages ; extraire les données ; rédiger une synthèse",
      "Décomposer une argumentation ; tenir une table ronde ; répondre aux objections",
      "Choisir et documenter un sujet ; relecture croisée du rapport ; répéter l’intervention",
    ],
    homework: [
      "Réécrire d’un registre à l’autre ; épreuve de communication formelle en semaine 4",
      "Rédiger un résumé d’actualité ; partiel de compréhension et de production en semaine 8",
      "Rédiger un article d’opinion ; contrôle discussion et écriture en semaine 12",
      "Réviser le rapport et le texte de l’intervention en plusieurs états",
    ],
    assessments: [
      "Semaine 4 : registres de politesse et demandes formelles.",
      "Semaine 8, partiel : analyse de l’information.",
      "Semaine 12 : article d’opinion et discussion structurée.",
      "Semaine 16 : rapport de recherche, présentation formelle et questions.",
    ],
  },

  "KR-TOPIK": {
    prerequisite: "Avoir suivi KR-2 ou atteint environ le niveau 2 du TOPIK ; pour viser le niveau 4, une base intermédiaire stable est conseillée.",
    materials: "Cahiers TOPIK II en compréhension orale, lecture et production écrite visant les niveaux 3-4, et sujets blancs.",
    classwork: [
      "Passer un sujet de diagnostic ; établir une typologie d’erreurs",
      "Entraînement par type de question ; prise de notes à l’écoute ; lecture chronométrée",
      "Écriture à partir de graphiques ; développement de paragraphes ; retour état par état",
      "Épreuve blanche complète ; bilan par compétence ; renforcement individuel",
    ],
    homework: [
      "Séries de lexique et de grammaire ; retour diagnostique en semaine 2",
      "Séries de compréhension ; blanc d’étape en semaine 5",
      "Deux états de révision écrite ; épreuve d’écriture en temps limité en semaine 8",
      "Refaire les items manqués ; établir un plan personnel avant l’examen",
    ],
    assessments: [
      "Semaine 1 : diagnostic.",
      "Semaine 5 : blanc de compréhension orale et écrite.",
      "Semaine 8 : production écrite en temps limité.",
      "Semaines 9-10 : épreuve blanche complète et retour individuel. La difficulté est ajustée selon l’objectif de niveau 3 ou 4 ; aucun niveau fixe n’est garanti.",
    ],
  },
};