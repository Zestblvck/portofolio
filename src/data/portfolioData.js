export const personalInfo = {
  name: "Zakariae MEZIANE",
  title: "Élève Ingénieur en 3ème année à l'ESIR Rennes",
  subtitle: "Ingénierie des Systèmes d'Information | Fullstack • IA • Data Engineering",
  status: "À la recherche d'un Contrat de Professionnalisation (2026 – 2027)",
  location: "Rennes, France",
  driverLicense: "Permis B (Véhiculé)",
  email: "zakariaemeziane@outlook.fr",
  phone: "+33 6 19 28 26 50",
  linkedin: "https://linkedin.com/in/zmeziane",
  aboutParagraphs: [
    "Bienvenue sur mon portfolio.",
    "Je m'appelle Zakariae MEZIANE, élève ingénieur en 3ème année à l'ESIR (École Supérieure d'Ingénierie de Rennes), spécialité Systèmes d'Information.",
    "À la recherche d'un Contrat de Professionnalisation de 12 mois pour la rentrée 2026-2027, je mets à disposition mes compétences en développement Fullstack (React, FastAPI), intégration de solutions IA (LLM) et Data Engineering (Python, PostgreSQL, Superset).",
    "Fort d'expériences pratiques en entreprise (Adapertus, SHLA IT Paris, AB RENOV Rennes) et d'une rigueur scientifique issue des Classes Préparatoires (CPGE MP), je suis autonome et opérationnel sur l'ensemble de la chaîne de valeur d'une application.",
    "Titulaire du Permis B et véhiculé, n'hésitez pas à me contacter pour échanger sur vos opportunités."
  ],
  interests: ["Graphisme & Branding (Photoshop, Illustrator)", "Street Art & Dessin", "Guitare", "Football"]
};

export const alternanceRythm = {
  startDate: "Rentrée Septembre 2026",
  fulltimeDate: "Temps plein dès le 15 Février 2027",
  contractType: "Contrat de Professionnalisation (12 mois | Sept. 2026 – Sept. 2027)",
  endDate: "Fin de mission : 3 Septembre 2027",
  summary: "Alternance rythmée au 1er semestre (3 sem. école / 3 sem. entreprise), suivie d'une présence continue à TEMPS PLEIN en entreprise du 15 Février 2027 au 3 Septembre 2027.",
  detailedPeriods: [
    { period: "Septembre 2026", detail: "Du 1er au 25 Sept. (École) • Du 28 Sept. au 16 Oct. (Entreprise)" },
    { period: "Octobre – Novembre 2026", detail: "Du 19 Oct. au 6 Nov. (École) • Du 9 Nov. au 27 Nov. (Entreprise)" },
    { period: "Décembre 2026 – Janvier 2027", detail: "Du 30 Nov. au 18 Déc. (École) • Du 4 Janv. au 22 Janv. (Entreprise) • Du 25 Janv. au 12 Fév. (École)" },
    { period: "15 Février 2027 – 3 Septembre 2027", detail: "TEMPS PLEIN CONTINU en entreprise (Fin de mission : 3 Septembre 2027)", isHighlight: true }
  ]
};

export const hobbies = [
  {
    title: "Graphisme & Branding",
    subtitle: "Adobe Photoshop & Illustrator",
    color: "from-neutral-800 to-neutral-600",
    badgeColor: "bg-neutral-100 text-neutral-800 border-neutral-200",
    icon: "Palette",
    description: "Création d'identités visuelles, logos personnalisés pour entreprises et design de supports print & web."
  },
  {
    title: "Dessin & Street Art",
    subtitle: "Créativité & Composition",
    color: "from-neutral-700 to-neutral-500",
    badgeColor: "bg-neutral-100 text-neutral-800 border-neutral-200",
    icon: "Paintbrush",
    description: "Passionné par le dessin au crayon, l'expression visuelle et le contraste des couleurs."
  },
  {
    title: "Musique & Guitare",
    subtitle: "Pratique Instrumentale",
    color: "from-neutral-900 to-neutral-700",
    badgeColor: "bg-neutral-100 text-neutral-800 border-neutral-200",
    icon: "Music",
    description: "Pratique régulière de la guitare développant discipline, écoute et concentration."
  }
];

export const skills = {
  dataEngineering: [
    { name: "Intelligence Artificielle & LLM", level: "Avancé", category: "Intégration & Dev IA" },
    { name: "Python (Pandas, SQLAlchemy)", level: "Avancé", category: "ETL & Scripting" },
    { name: "PostgreSQL (Data Warehouse)", level: "Avancé", category: "Base de Données" },
    { name: "Data Quality & MDM", level: "Avancé", category: "Golden Records" },
    { name: "Apache Superset / Power BI", level: "Maîtrisé", category: "Dataviz & Dashboards" },
    { name: "APIs REST & Ingestion", level: "Avancé", category: "Flux de données" }
  ],
  devopsCloud: [
    { name: "Docker & Docker Compose", level: "Avancé", category: "Conteneurisation" },
    { name: "GitHub Actions (CI/CD)", level: "Avancé", category: "Pipelines" },
    { name: "Ansible (IaC)", level: "Maîtrisé", category: "Infrastructure" },
    { name: "Kubernetes & Nginx", level: "Pratique", category: "Orchestration" },
    { name: "Grafana", level: "Maîtrisé", category: "Supervision" }
  ],
  frontend: [
    { name: "React", level: "Avancé", category: "Framework UI" },
    { name: "JavaScript / TypeScript", level: "Avancé", category: "Langage" },
    { name: "Vue.js", level: "Maîtrisé", category: "Framework UI" },
    { name: "Tailwind CSS", level: "Expert", category: "Styling" }
  ],
  backend: [
    { name: "FastAPI (Python)", level: "Avancé", category: "API REST" },
    { name: "NestJS (Node.js)", level: "Maîtrisé", category: "API Framework" },
    { name: "Java / Spring Boot", level: "Maîtrisé", category: "Langage / Framework" },
    { name: "Authentification JWT / Keycloak", level: "Maîtrisé", category: "Sécurité" }
  ]
};

export const experiences = [
  {
    company: "Adapertus",
    role: "Alternant Fullstack & IA",
    period: "Septembre 2026 – Présent",
    location: "Rennes, France",
    summary: "Développement d'applications web Fullstack et intégration de solutions basées sur l'Intelligence Artificielle et les LLM.",
    details: [
      "Conception et développement de fonctionnalités Fullstack (React, FastAPI, Python).",
      "Intégration de modèles d'IA générative (LLM) et développement d'APIs intelligentes.",
      "Traitement et structuration de données pour alimenter les briques applicatives et les modèles IA."
    ],
    techs: ["React", "Python", "FastAPI", "IA / LLM", "PostgreSQL", "APIs REST"]
  },
  {
    company: "SHLA IT",
    role: "Stagiaire Data Engineer",
    period: "Juillet 2026 – Septembre 2026",
    location: "Paris, France",
    summary: "Conception d'une plateforme de Master Data Management (MDM) pour consolider les données clients multi-sources (ERP, CRM).",
    details: [
      "Déploiement d'un Data Warehouse local (PostgreSQL) et outils d'analyse via Docker et Docker Compose.",
      "Développement de scripts Python (Pandas, SQLAlchemy) pour l'ingestion, le nettoyage et l'algorithme de Record Linkage (Golden Records).",
      "Enrichissement de données B2B/B2C automatisé via requêtes HTTP vers des API REST gouvernementales.",
      "Configuration d'Apache Superset pour le suivi interactif de la qualité des données."
    ],
    techs: ["Python", "Pandas", "PostgreSQL", "Docker", "Apache Superset", "APIs REST"]
  },
  {
    company: "AB RENOV",
    role: "Stagiaire Développeur Fullstack",
    period: "Avril 2025 – Août 2025",
    location: "Rennes, France",
    summary: "Conception et développement complet d'une application web de gestion de chantiers du besoin à la production.",
    details: [
      "Développement d'une API REST avec FastAPI et PostgreSQL, authentification JWT.",
      "Conception du frontend responsive avec React, Tailwind CSS et ShadCN UI.",
      "Conteneurisation Docker Compose et déploiement continu sur serveur OVH et Cloudflare Pages."
    ],
    techs: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS", "Docker", "OVH"]
  }
];

export const projects = [
  {
    id: "livable-cities",
    title: "Analyse Data & Classement des Villes",
    year: "2025 – 2026",
    type: "Projet Data / BI",
    subtitle: "Ingestion multi-APIs, pipeline ETL Python et tableau de bord décisionnel Power BI.",
    description: "Collecte et agrégation de données publiques (transports, météo, sécurité) pour concevoir un score multi-critère de qualité de vie.",
    keyPoints: [
      "Scraping et requêtage automatique de plus de 5 APIs publiques.",
      "Pipeline ETL Python (Pandas, NumPy) et modélisation SQL.",
      "Tableau de bord décisionnel interactif sous Power BI."
    ],
    techs: ["Python", "Pandas", "SQL", "Power BI", "REST APIs"]
  },
  {
    id: "applytrack",
    title: "ApplyTrack • SaaS Candidatures & IA",
    year: "2025 – 2026",
    type: "Projet Personnel",
    subtitle: "Plateforme SaaS avec assistant LLM pour l'analyse et l'optimisation de candidatures.",
    description: "Centralisation des candidatures avec assistant IA basé sur un LLM pour l'extraction de compétences et l'adaptation du CV.",
    keyPoints: [
      "Microservices FastAPI et PostgreSQL.",
      "Assistant LLM pour le matching de compétences.",
      "Déploiement Kubernetes et authentification Keycloak."
    ],
    techs: ["React", "FastAPI", "PostgreSQL", "LLM", "Docker", "Kubernetes"]
  },
  {
    id: "devops-platform",
    title: "Plateforme DevOps & Industrialisation",
    year: "2025 – 2026",
    type: "Projet DevOps",
    subtitle: "Infrastructure as Code, pipelines CI/CD et tests de résilience.",
    description: "Automatisation complète des déploiements et supervision applicative.",
    keyPoints: [
      "IaC avec playbooks Ansible et Docker Compose.",
      "Pipeline CI/CD GitHub Actions avec Smoke Tests.",
      "Supervision Grafana et tests de chaos Pumba."
    ],
    techs: ["Ansible", "Docker", "GitHub Actions", "Nginx", "Grafana"]
  }
];

export const education = [
  {
    degree: "Cycle Ingénieur – Systèmes d'Information",
    institution: "ESIR – École Supérieure d'Ingénierie de Rennes",
    period: "2023 – 2027",
    location: "Rennes, France",
    badge: "3ème année",
    details: "Architecture logicielle, Data Engineering, DevOps, Qualité & Sécurité des SI."
  },
  {
    degree: "CPGE – Mathématiques & Physique (MP)",
    institution: "Pythagore Prépas",
    period: "2020 – 2023",
    location: "Oujda, Maroc",
    badge: "Classes Préparatoires",
    details: "Formation intensive en mathématiques avancées, logique et physique."
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
