// Updated portfolio data
export const personalInfo = {
  name: "Zakariae MEZIANE",
  title: "Étudiant en 3ème année du cycle ingénieur à l'ESIR",
  subtitle: "Ingénierie des Systèmes d'Information | Fullstack • DevOps • Data • Testing",
  status: "À la recherche d'une alternance pour la rentrée 2026-2027 (dès Septembre 2026)",
  location: "Rennes, France",
  driverLicense: "Permis B (Véhiculé)",
  email: "zakariaemeziane@outlook.fr",
  phone: "+33 6 19 28 26 50",
  linkedin: "https://linkedin.com/in/zmeziane",
  aboutParagraphs: [
    "Bonjour et bienvenue sur mon portfolio !",
    "Je m'appelle Zakariae MEZIANE, je suis actuellement étudiant en 3ème année du cycle ingénieur à l'ESIR (École Supérieure d'Ingénierie de Rennes), spécialité Systèmes d'Information.",
    "Passionné par les technologies du numérique depuis plusieurs années, j'ai suivi un parcours scientifique exigeant comprenant des Classes Préparatoires aux Grandes Écoles (CPGE) en Mathématiques et Physique (MP). Cette formation m'a transmis une grande rigueur analytique et une méthode de travail structurée.",
    "Fort de mes expériences en stage (Développement Fullstack chez AB RENOV, Développement Web au CHU Mohammed VI) et de mes projets académiques et personnels (SaaS ApplyTrack avec LLM, Plateforme DevOps avec IaC & Chaos Engineering, Analyse Data BI), je maîtrise l'ensemble du cycle de vie des applications.",
    "Titulaire du Permis B et véhiculé, je suis disponible dès septembre 2026 pour une alternance se concluant par une présence à temps plein en entreprise dès février 2027."
  ],
  interests: ["Guitare", "Photoshop & Illustrator", "Design de Logos & Flyers", "Dessin, Graffiti & Street Art", "Football"]
};

export const alternanceRythm = {
  startDate: "Dès Septembre 2026",
  fulltimeDate: "Temps plein dès Février 2027",
  steps: [
    "3 semaines en entreprise / 3 semaines à l'école",
    "puis 3 semaines en entreprise / 5 semaines à l'école",
    "puis 5 semaines en entreprise / 3 semaines à l'école",
    "À partir de Février 2027 : Présence à TEMPS PLEIN en entreprise"
  ]
};

export const hobbies = [
  {
    title: "Graphisme & Design Visuel",
    subtitle: "Photoshop & Illustrator",
    color: "from-pink-500 via-purple-500 to-indigo-500",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    icon: "Palette",
    description: "Maîtrise avancée d'Adobe Photoshop et Illustrator. Réalisation de logos personnalisés pour des entreprises/business, création de flyers évènementiels et identités visuelles sur mesure."
  },
  {
    title: "Dessin, Graffiti & Street Art",
    subtitle: "Passion créative depuis l'enfance",
    color: "from-amber-400 via-rose-500 to-red-500",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    icon: "Paintbrush",
    description: "Passionné par le dessin au crayon et les feutres depuis mon plus jeune âge. Fasciné par l'univers du graffiti, du street art et le travail d'association des couleurs vivement contrastées."
  },
  {
    title: "Pratique de la Guitare",
    subtitle: "Musique & Composition",
    color: "from-sky-400 via-blue-500 to-indigo-600",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    icon: "Music",
    description: "Pratique régulière de la guitare. Développe la sensibilité artistique, le sens de l'écoute, la concentration et la discipline au quotidien."
  }
];

export const skills = {
  frontend: [
    { name: "React", level: "Avancé", category: "Framework UI" },
    { name: "JavaScript / TypeScript", level: "Avancé", category: "Langage" },
    { name: "Vue.js", level: "Maîtrisé", category: "Framework UI" },
    { name: "Tailwind CSS", level: "Expert", category: "Styling" },
    { name: "HTML5 / CSS3", level: "Expert", category: "Web Standard" },
  ],
  backend: [
    { name: "FastAPI (Python)", level: "Avancé", category: "API REST" },
    { name: "NestJS (Node.js)", level: "Maîtrisé", category: "API Framework" },
    { name: "Java / Spring Boot", level: "Maîtrisé", category: "Langage / Framework" },
    { name: "Python", level: "Avancé", category: "Langage / Data" },
    { name: "SQL (PostgreSQL / MySQL)", level: "Avancé", category: "Base de Données" },
    { name: "Authentification JWT / Keycloak", level: "Maîtrisé", category: "Sécurité" }
  ],
  devops: [
    { name: "Docker & Docker Compose", level: "Avancé", category: "Conteneurisation" },
    { name: "Ansible (IaC)", level: "Maîtrisé", category: "Infrastructure as Code" },
    { name: "GitHub Actions (CI/CD)", level: "Avancé", category: "Pipelines" },
    { name: "Kubernetes", level: "Notions avancées", category: "Orchestration" },
    { name: "Nginx & Reverse Proxy", level: "Maîtrisé", category: "Serveur Web" },
    { name: "Grafana & Uptime Kuma", level: "Maîtrisé", category: "Supervision" }
  ],
  design: [
    { name: "Adobe Photoshop", level: "Expert", category: "Création Visuelle" },
    { name: "Adobe Illustrator", level: "Avancé", category: "Design Vectoriel" },
    { name: "Création de Logos Business", level: "Pratique régulière", category: "Branding" },
    { name: "Design de Flyers", level: "Pratique régulière", category: "Print & Web" }
  ],
  dataBi: [
    { name: "Power BI / Tableau", level: "Avancé", category: "Visualisation" },
    { name: "Pandas & NumPy", level: "Avancé", category: "Analyse Data" },
    { name: "Pipelines ETL SQL", level: "Avancé", category: "Ingénierie Données" },
    { name: "Nettoyage & Qualité Données", level: "Expert", category: "Data Quality" }
  ],
  testingQuality: [
    { name: "JUnit 5 & Mockito", level: "Avancé", category: "Tests Unitaires Java" },
    { name: "JaCoCo", level: "Maîtrisé", category: "Couverture de Code" },
    { name: "Tests de Charge & Dynamic Proxy", level: "Maîtrisé", category: "Performance" },
    { name: "Chaos Engineering (Pumba)", level: "Pratique", category: "Résilience" }
  ]
};

export const experiences = [
  {
    company: "AB RENOV",
    role: "Stagiaire Développeur Fullstack",
    period: "Avril 2025 – Août 2025",
    location: "Rennes, France",
    summary: "Conception et développement complet d'une application web de gestion de chantiers du besoin au déploiement production.",
    details: [
      "Développement d'une API REST haute performance avec FastAPI et PostgreSQL.",
      "Mise en place d'un système d'authentification sécurisé JWT (access & refresh tokens).",
      "Conception du frontend responsive avec React, Tailwind CSS et ShadCN UI.",
      "Conteneurisation Docker Compose et déploiement continu sur serveur OVH et Cloudflare Pages."
    ],
    techs: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS", "ShadCN UI", "Docker", "JWT", "OVH"]
  },
  {
    company: "CHU Mohammed VI",
    role: "Stagiaire Développeur Web",
    period: "Juillet 2024 – Août 2024",
    location: "Oujda, Maroc",
    summary: "Refonte complète et modernisation du portail web du CHU Mohammed VI.",
    details: [
      "Conception d'une interface web responsive moderne avec React et Tailwind CSS.",
      "Création du module de gestion des stages pour centraliser les demandes des étudiants.",
      "Intégration d'un système de prise de rendez-vous en ligne pour les patients."
    ],
    techs: ["React", "Tailwind CSS", "JavaScript", "REST APIs", "UI/UX Design"]
  }
];

export const projects = [
  {
    id: "applytrack",
    title: "ApplyTrack • SaaS de Gestion de Candidatures & IA",
    year: "2025 – 2026",
    type: "Projet Personnel",
    subtitle: "Plateforme SaaS avec assistant LLM pour l'adaptation de CV et lettres de motivation.",
    description: "ApplyTrack centralise les candidatures d'étudiants (offres, CV, statut). L'assistant IA intégré analyse la fiche de poste et suggère des ajustements ciblés sur le CV et la lettre de motivation pour maximiser les chances d'entretien.",
    keyPoints: [
      "Assistant LLM pour le matching de compétences et la réécriture ciblée.",
      "Tableau de bord Kanban interactif pour suivre l'avancement.",
      "Authentification Keycloak et architecture découplée microservices.",
      "Déploiement sur cluster Kubernetes avec CI/CD."
    ],
    techs: ["React", "FastAPI", "PostgreSQL", "LLM / IA", "Docker", "Kubernetes", "Keycloak"]
  },
  {
    id: "devops-platform",
    title: "Plateforme DevOps • IaC, CI/CD & Chaos Engineering",
    year: "2025 – 2026",
    type: "Projet Académique",
    subtitle: "Modernisation d'application avec Ansible, GitHub Actions et tests de résilience.",
    description: "Mise en place d'une chaîne d'industrialisation logicielle complète pour automatiser les déploiements sans coupure et évaluer la tolérance aux pannes via l'injection de chaos.",
    keyPoints: [
      "Infrastructure as Code (IaC) avec playbooks Ansible et Docker Compose.",
      "Configuration dynamique Nginx / Jinja2 pour la gestion des environnements.",
      "Pipeline CI/CD GitHub Actions incluant des Smoke Tests automatiques.",
      "Scénarios de Chaos Engineering avec Pumba et supervision Grafana / Uptime Kuma."
    ],
    techs: ["Ansible", "Docker", "GitHub Actions", "Nginx", "Jinja2", "Grafana", "Pumba"]
  },
  {
    id: "livable-cities",
    title: "Analyse Data & Classement des Villes Vivables en France",
    year: "2025 – 2026",
    type: "Projet Académique Data / BI",
    subtitle: "Ingestion multi-APIs, pipeline ETL Python et tableau de bord décisionnel Power BI.",
    description: "Collecte et agrégation de données publiques (transports, météo, sécurité, éducation) pour concevoir un score multi-critère de qualité de vie dans les métropoles françaises.",
    keyPoints: [
      "Scraping et requêtage automatique de plus de 5 APIs publiques hétérogènes.",
      "Pipeline ETL Python (Pandas/NumPy) pour le nettoyage et la normalisation des données.",
      "Modélisation SQL et calcul du score de qualité de vie.",
      "Tableau de bord décisionnel interactif développé sous Power BI."
    ],
    techs: ["Python", "REST APIs", "Pandas", "NumPy", "SQL", "Power BI"]
  },
  {
    id: "java-testing",
    title: "Audit & Qualité Logicielle d'une Application Java",
    year: "2025 – 2026",
    type: "Projet Académique Testing",
    subtitle: "Tests unitaires JUnit 5, mocking Mockito, JaCoCo et profiling Dynamic Proxy.",
    description: "Amélioration globale de la fiabilité et de la couverture de tests d'une base de code Java Open Source d'envergure, avec analyse du surcoût des proxies dynamiques.",
    keyPoints: [
      "Rédaction de suites de tests unitaires (cas nominaux et cas d'erreur).",
      "Isolation des composants via Mockito et analyse de couverture JaCoCo (+45% de gain).",
      "Évaluation des performances et de l'impact mémoire/CPU des mécanismes d'interception."
    ],
    techs: ["Java", "JUnit 5", "Mockito", "JaCoCo", "Dynamic Proxy", "Maven"]
  },
  {
    id: "quiz-app",
    title: "Application Web Quiz Collaboratif (Klaxoon Style)",
    year: "2025 – 2026",
    type: "Projet Académique",
    subtitle: "Plateforme interactive de quiz en temps réel avec flash QR code.",
    description: "Développement d'une application collaborative permettant à plusieurs utilisateurs de s'interconnecter via QR Code pour participer à des sessions de quiz instantanées.",
    keyPoints: [
      "Développement du frontend dynamique sous Vue.js.",
      "Optimisation de la réactivité et des temps de réponse (<50ms).",
      "Intégration du système de sécurité avec Keycloak."
    ],
    techs: ["Vue.js", "NestJS", "TypeScript", "Keycloak", "REST API"]
  }
];

export const education = [
  {
    degree: "Cycle Ingénieur – Informatique (Systèmes d'Information)",
    institution: "ESIR – École Supérieure d'Ingénierie de Rennes",
    period: "2023 – 2027",
    location: "Rennes, France",
    badge: "3ème année",
    details: "Architecture logicielle, DevOps, Data Engineering, Qualité logicielle et management de projets IT."
  },
  {
    degree: "Classes Préparatoires aux Grandes Écoles (CPGE) – MP",
    institution: "Pythagore Prépas",
    period: "2020 – 2023",
    location: "Oujda, Maroc",
    badge: "Maths & Physique",
    details: "Filière Mathématiques et Physique. Formation intensive en logique, algèbre et physique théorique."
  },
  {
    degree: "Cycle Préparatoire Intégré",
    institution: "ENSAO – École Nationale des Sciences Appliquées",
    period: "2019 – 2020",
    location: "Oujda, Maroc",
    badge: "Ingénierie",
    details: "Acquisition des fondements de l'ingénierie et de l'informatique."
  },
  {
    degree: "Baccalauréat Scientifique – Option Physique",
    institution: "Lycée Ibn Sina",
    period: "2018 – 2019",
    location: "Oujda, Maroc",
    badge: "Mention Très Bien",
    details: "Obtenu avec la Mention Très Bien."
  }
];
