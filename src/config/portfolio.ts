// ============================================================
//  PORTFOLIO — CONFIGURATION CENTRALISÉE
//  Modifié depuis l'interface admin
// ============================================================

export const personal = {
  firstName: "Louis Lucien",
  lastName: "MENDY",
  initials: "LM",
  title: "Data Engineer · Data Scientist · Développeur Data & IA",
  tagline: "Software · Data · Intelligence Artificielle",
  email: "louislucien701@gmail.com",
  phone: "+221 78 632 23 34",
  location: "Dakar, Sénégal",
  bio: [
    "Je ne me suis pas contenté d’apprendre la technologie : j’ai construit une trajectoire qui me permet de comprendre ses différentes couches. Parti du génie logiciel, j’ai progressivement évolué vers l’ingénierie des données, puis vers l’intelligence artificielle. Cette progression n’est pas le fruit du hasard ; elle répond à une conviction : pour concevoir des systèmes réellement utiles, il faut comprendre comment le code, les données et les modèles interagissent pour produire de la valeur.",
    "Aujourd’hui, lorsque j’aborde un projet, je ne me limite pas à résoudre un problème technique isolé. J’analyse l’ensemble du cycle de vie de la donnée : sa collecte sur le terrain, son intégration dans des pipelines, sa transformation en information exploitable, puis son utilisation pour éclairer les décisions. Cette vision de bout en bout me permet de concevoir des systèmes cohérents, robustes et orientés impact.",
    "Mon travail chez Énergie Rurale Africaine en est une illustration concrète. J’y ai contribué à l’architecture d’une plateforme de supervision énergétique destinée au suivi d’infrastructures réelles au Sénégal. Cette solution permet de collecter des données issues d’équipements connectés, de les analyser et de les restituer à travers des tableaux de bord décisionnels afin d’améliorer le pilotage des centrales solaires et des transformateurs électriques.",
  ],
  values: [
    "La profondeur plutôt que la surface — comprendre avant de construire",
    "L'architecture plutôt que l'improvisation — chaque décision est intentionnelle",
    "L'impact réel plutôt que la quantité — un système qui fonctionne vaut mille prototypes",
    "La persévérance comme méthode — les projets complexes demandent de l'endurance",
    "La foi et la discipline comme boussole — la carrière est guidée par des valeurs",
  ],
  languages: ["Français", "Wolof", "Anglais"],
  socials: {
    github: "https://github.com/louis-lucien",
    linkedin: "https://linkedin.com/in/louis-lucien-mendy-20002b238",
    twitter: "",
  },
};

export const hero = {
  greeting: "Data Engineer · Data Scientist · Développeur IA",
  subtitle: "Je conçois des systèmes qui transforment la donnée brute en intelligence actionnable. Du capteur IoT au tableau de bord décisionnel, de l’API backend aux modèles de machine learning, je maîtrise l’ensemble de la chaîne de valeur de la donnée. Mon approche consiste à relier chaque couche technologique pour produire des informations fiables qui soutiennent la prise de décision.",
  roles: ["Data Engineer", "Data Scientist", "Développeur Data & IA", "Architecte Systèmes Data"],
  cta: "Découvrir mon parcours",
};

export const about = {
  heading: "Qui suis-je",
  showProfileType: true,
  showPillars: false,
  showTraitValues: true,
  profileType: {
    description: "Esprit stratégique, analytique, visionnaire. L'INTJ-A ne se contente pas de résoudre des problèmes — il les anticipe et conçoit des systèmes pour les prévenir.",
    traits: [
      { letter: "I", name: "Introverti", value: 78 },
      { letter: "N", name: "Intuitif", value: 85 },
      { letter: "T", name: "Penseur", value: 82 },
      { letter: "J", name: "Jugement", value: 88 },
    ],
  },
  vision: "Construire des systèmes intelligents qui transforment la donnée brute en décisions stratégiques — du capteur au tableau de bord.",
  pillars: [
    { title: "Software Engineering", icon: "code", description: "Architecture logicielle robuste, design patterns, API REST, développement full-stack. La fondation technique sur laquelle tout repose." },
    { title: "Data Engineering", icon: "database", description: "Pipelines ETL, data warehousing, bases de données relationnelles et NoSQL, orchestration avec Airflow. La plomberie qui fait circuler la donnée." },
    { title: "Intelligence Artificielle", icon: "brain", description: "Machine Learning, Deep Learning, NLP, LLMs, Computer Vision. La couche qui transforme la donnée en intelligence actionnable." },
  ],
};

export const skills = {
  heading: "Expertise Technique",
  showLevels: false,
  chain: {
    title: "La chaîne de valeur Data",
    steps: ["Collecte", "Traitement", "Analyse", "Exploitation"],
  },
  categories: [
    {
      title: "Software Engineering",
      icon: "terminal",
      items: [
        { name: "Python", level: 92 },
        { name: "TypeScript / JavaScript", level: 85 },
        { name: "Django / Django REST", level: 88 },
        { name: "React / Next.js", level: 80 },
        { name: "Angular", level: 72 },
        { name: "Git / GitHub / GitLab", level: 90 },
        { name: "Flask", level: 50 },
        { name: "Fast api", level: 50 },
        { name: "Java / Spring Boot", level: 50 },
        { name: "Dèveloppement mobile avec flutter", level: 50 },
      ],
    },
    {
      title: "Data Engineering",
      icon: "database",
      items: [
        { name: "PostgreSQL / Sql Server / MySQL", level: 90 },
        { name: "Apache Airflow", level: 82 },
        { name: "ETL / Pipelines", level: 88 },
        { name: "Elasticsearch / Kibana", level: 75 },
        { name: "Docker", level: 80 },
        { name: "Power BI / Looker Studio", level: 78 },
        { name: "Talend studio", level: 50 },
        { name: "Google cloud plateform", level: 50 },
        { name: "Excel", level: 50 },
        { name: "Big Data / Spark / Hadoop", level: 50 },
        { name: "Data Lake / Data Warehouse / Lake house", level: 50 },
        { name: "SQL", level: 50 },
      ],
    },
    {
      title: "Intelligence Artificielle",
      icon: "brain",
      items: [
        { name: "Machine Learning (Scikit-learn)", level: 85 },
        { name: "Deep Learning (TensorFlow/Keras)", level: 78 },
        { name: "NLP & LLMs", level: 80 },
        { name: "Pandas / NumPy", level: 92 },
        { name: "OpenAI API / Whisper", level: 82 },
        { name: "Data Visualization", level: 85 },
        { name: "Computer Vision", level: 50 },
        { name: "Prompt engineering", level: 50 },
        { name: "Finetuning /  Retrieval-Augmented Generation (RAG)", level: 50 },
      ],
    },
  ],
};

export const projects = {
  heading: "Réalisations",
  items: [
    {
      title: "Plateforme de Supervision Énergétique — ERA",
      description: "Mon projet le plus ambitieux et le plus complet. J'ai architecturé et développé de A à Z une plateforme centralisée de monitoring pour un réseau de centrales solaires et de transformateurs électriques au Sénégal. Le système intègre des flux IoT provenant de sources hétérogènes (SQL Server, API, équipements terrain), synchronisés vers PostgreSQL et TimescaleDB. J'ai automatisé les ETL asynchrones avec Celery, modélisé des données temporelles à haute volumétrie (kWh, kVArh, tension, courant), développé un module de contrôle de facturation SENELEC, conçu des indicateurs stratégiques (cos φ, pertes en ligne), et implémenté un système d'alertes temps réel (email/SMS). Le tout avec des dashboards cartographiques interactifs pour le pilotage décisionnel. Ce n'est pas un exercice académique — c'est un système en production qui supervise l'infrastructure énergétique réelle du pays.",
      tags: ["Python", "Django REST", "PostgreSQL", "TimescaleDB", "Celery", "Redis", "React", "IoT"],
      category: "Data & IA",
      github: "",
      live: "",
      featured: true,
    },
    {
      title: "IA Vocale Multilingue — Sonatel/Proboutik",
      description: "Un défi unique : créer un assistant vocal intelligent capable de fonctionner en wolof, français, anglais et arabe pour fluidifier les échanges professionnels. J'ai coordonné les équipes en méthodologie Agile, intégré les API d'ElevenLabs et OpenAI, utilisé Whisper pour la transcription multilingue, et développé les landing pages Digicaisse et Proboutik. Ce projet illustre ma conviction : l'IA n'est utile que si elle résout un problème réel dans un contexte culturel concret.",
      tags: ["Python", "OpenAI API", "Whisper", "ElevenLabs", "NLP", "LLMs", "Angular"],
      category: "IA",
      github: "",
      live: "",
      featured: true,
    },
    {
      title: "Pipeline ETL Météo Sénégal",
      description: "Un pipeline de données complet et automatisé qui démontre mes compétences en data engineering : extraction quotidienne depuis l'API OpenWeather pour Dakar et Thiès, intégration PostgreSQL, orchestration avec Apache Airflow, conteneurisation Docker, gestion sécurisée des secrets, tests unitaires pytest, et visualisation via Power BI/Looker Studio. Le tout hébergé sur GitHub avec une architecture modulaire, un .env propre, et des bonnes pratiques CI/CD. La preuve qu'un pipeline robuste, c'est autant une question d'ingénierie que de rigueur.",
      tags: ["Python", "Airflow", "PostgreSQL", "Docker", "Power BI", "Pytest"],
      category: "Data Engineering",
      github: "https://github.com/louis-lucien",
      live: "",
      featured: true,
    },
    {
      title: "Projet Business Intelligence",
      description: "Conception d'une base de données analytique complète (vendeurs, clients, produits, commandes), intégration ETL via Talend, Data Warehouse centralisé, et visualisation avancée Power BI / Tableau. Un projet qui m'a appris que la BI ne commence pas par le dashboard — elle commence par la modélisation des données.",
      tags: ["Talend", "Power BI", "Tableau", "SQL", "Data Warehouse"],
      category: "Data Engineering",
      github: "",
      live: "",
      featured: false,
    },
    {
      title: "Moteur d'Indexation Crypto — Bitcoin & Ethereum",
      description: "Développement d'un moteur de recherche et d'analyse pour le marché des cryptomonnaies. Extraction via API CoinGecko, stockage Elasticsearch pour la recherche full-text, et visualisation des tendances avec Kibana. Analyse des prix et volumes en temps réel pour fournir des insights exploitables sur la volatilité du marché.",
      tags: ["Python", "Elasticsearch", "Kibana", "API CoinGecko"],
      category: "Data Engineering",
      github: "",
      live: "",
      featured: false,
    },
    {
      title: "Web Scraping Météorologique",
      description: "Système automatisé de collecte de données météo (températures, humidité, précipitations) avec Selenium, Scrapy et BeautifulSoup. Stockage PostgreSQL pour analyse statistique. Ce projet m'a appris l'importance de la qualité des données à la source — garbage in, garbage out.",
      tags: ["Python", "Selenium", "Scrapy", "BeautifulSoup", "PostgreSQL"],
      category: "Data Engineering",
      github: "",
      live: "",
      featured: false,
    },
  ],
};

export const formation = {
  heading: "Formation",
  intro: "Mon parcours académique suit une logique précise : comprendre le logiciel, puis maîtriser la donnée, puis exploiter l'intelligence artificielle. Chaque étape a été un choix délibéré.",
  items: [
    {
      degree: "Master — Sciences des Données & Applications",
      speciality: "Ingénierie des Données & Intelligence Artificielle",
      school: "Université Iba Der Thiam de Thiès",
      period: "2025 - 2027",
      description: "Le sommet de ma progression académique. Spécialisation en architecture data avancée, machine learning appliqué, traitement de données massives et systèmes d'IA. C'est ici que je consolide ma capacité à concevoir des systèmes data/IA de bout en bout pour des organisations réelles.",
    },
    {
      degree: "Bachelor 3 — Computer Software Engineering",
      speciality: "Génie Logiciel",
      school: "National Institute of Information Technology (NIIT Sénégal)",
      period: "2024 - 2025",
      description: "La rigueur du génie logiciel : architecture applicative, design patterns, développement web avancé, programmation orientée objet. Cette formation m'a donné les réflexes d'un ingénieur — pas seulement coder une solution, mais concevoir un système maintenable et évolutif.",
    },
    {
      degree: "Certification en développement Data & IA",
      speciality: "Data Engineering, Data Analysis & IA",
      school: "Orange Digital Center — Sonatel Academy",
      period: "Fév. 2024 - Nov. 2024",
      description: "Le tournant de ma carrière. 9 mois intensifs au cœur de l'écosystème Sonatel à construire des pipelines de données, entraîner des modèles ML, développer des projets NLP, et maîtriser les outils data modernes. C'est ici que j'ai compris que ma vocation était de relier le software à la data et à l'IA.",
    },
    {
      degree: "Licence 1 & 2 — Technologie Numérique",
      speciality: "Technologies Numériques",
      school: "SUPTELECOM — École Supérieure des Technologies Numériques",
      period: "2022 - 2023",
      description: "Les fondations : programmation, mathématiques, réseaux, bases de données, systèmes. Deux années à construire la base technique sans laquelle rien de ce qui a suivi n'aurait été possible.",
    },
    {
      degree: "Baccalauréat S2",
      speciality: "Sciences Expérimentales",
      school: "Institution Saint Louis Marie Grignion",
      period: "2020 - 2021",
      description: "Le début de tout. Un bac scientifique qui a posé les bases de ma pensée analytique et de ma rigueur mathématique.",
    },
  ],
};

export const certifications = {
  heading: "Certifications",
  intro: "Plus de 20 certifications obtenues auprès des leaders mondiaux de la tech — IBM, NVIDIA, DeepLearning.AI, Cisco, Google. Chaque certification est un investissement délibéré dans ma montée en compétence.",
  items: [
    {
      name: "Spécialisation IBM Data Engineering",
      issuer: "IBM",
      date: "Août 2025",
      highlight: true,
      image: "/images/certs/certificate_data_ing.jpeg",
    },
    {
      name: "Spécialisation IBM Data Science",
      issuer: "IBM",
      date: "Avril 2025",
      highlight: true,
      image: "/images/certs/certificat_data_science.jpeg",
    },
    {
      name: "Architecture Logicielle",
      issuer: "Edacy",
      date: "Oct. 2025",
      highlight: true,
      image: "/images/certs/architecture_logicielle.png",
    },
    {
      name: "LLMs (Large Language Models)",
      issuer: "Université Numérique cheikh Hamidou Kane, Programme FORCE-N Sénégal",
      date: "Mars 2025",
      highlight: true,
      image: "/images/certs/llms.png",
    },
    {
      name: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      date: "Déc. 2024",
      highlight: true,
      image: "/images/certs/deep_learning.png",
    },
    {
      name: "Neural Networks & Deep Learning",
      issuer: "DeepLearning.AI",
      date: "Jan. 2025",
      highlight: true,
      image: "/images/certs/certificat_deep.jpeg",
    },
    {
      name: "Intro TensorFlow (AI/ML/DL)",
      issuer: "DeepLearning.AI",
      date: "Jan. 2025",
      highlight: true,
      image: "/images/certs/tensorflow.jpeg",
    },
    {
      name: "Data engineering",
      issuer: "Université Numérique cheikh Hamidou Kane, Programme FORCE-N Sénégal",
      date: "2024",
      highlight: true,
      image: "/images/certs/data_ing_force_n.jpg",
    },
    {
      name: "Data analysis",
      issuer: "Université Numérique cheikh Hamidou Kane, Programme FORCE-N Sénégal",
      date: "2022",
      highlight: true,
      image: "/images/certs/data_ana_force_n.png",
    },
    {
      name: "Traitement de données avec excel",
      issuer: "Université Numérique cheikh Hamidou Kane, Programme FORCE-N Sénégal",
      date: "2022",
      highlight: true,
      image: "/images/certs/traitement.png",
    },
    {
      name: "Python",
      issuer: "Sololearn",
      date: "2024",
      highlight: true,
      image: "/images/certs/python_certificat.jpg",
    },
  ],
};

export const experience = {
  heading: "Expérience Professionnelle",
  items: [
    {
      role: "Data Specialist · Développeur Backend · Intégrateur API",
      company: "Énergie Rurale Africaine (ERA)",
      period: "Oct. 2025 - Aujourd'hui",
      description: "**ERAPOWER — Plateforme de supervision et d’analyse des réseaux électriques ruraux**
*Architecture logicielle · Data Engineering · IoT · Backend · Analyse de données*

* **Conçu et développé une plateforme de supervision des réseaux électriques ruraux**, permettant de suivre la production solaire, les transformateurs, la distribution, les compteurs, la facturation, les interventions et la qualité du service.
* **Connecté les équipements électriques du terrain au système d’information**, afin de collecter et centraliser automatiquement les données de production, tension, courant, énergie, disponibilité et état des équipements.
* **Centralisé des données provenant de plusieurs sources** — équipements IoT, bases de données, systèmes externes et API — pour les transformer en informations fiables et exploitables.
* **Développé des mécanismes de détection d’anomalies et d’alertes**, permettant d’identifier rapidement les surcharges, tensions anormales, baisses de production, problèmes de batteries ou pertes de communication.
* **Transformé les données techniques en indicateurs métier** à travers des tableaux de bord, graphiques, cartes et systèmes d’alerte destinés au suivi opérationnel et à l’aide à la décision.
* **Automatisé le contrôle des factures SENELEC** en confrontant les données réellement mesurées sur le réseau aux données facturées afin d’identifier les écarts.
* **Optimisé le système de supervision**, en faisant passer le volume de requêtes d’environ **456 000 à 1 600**, soit une réduction d’environ **285×**.
* **Réduit le temps de chargement d’une page de supervision de 13 s à 1,4 s**, sur une base contenant environ **28 millions de mesures**.
* **Pris en charge le développement de bout en bout**, de l’acquisition des données sur le terrain jusqu'à leur traitement, leur exposition via API et leur visualisation.

**Environnement :** Python · Django · Django REST Framework · PostgreSQL · TimescaleDB · SQL Server · Celery · RabbitMQ · React · TypeScript · Raspberry Pi · Modbus · IoT · API · ETL

**ERACONTROLLER — Passerelle IoT pour les centrales solaires**
*IoT · Systèmes embarqués · Acquisition de données · API · Résilience*

* **Conçu une passerelle permettant de connecter les équipements électriques des centrales solaires à la plateforme centrale** et de récupérer automatiquement leurs données.
* **Intégré différents types d’équipements et protocoles de communication**, notamment onduleurs, compteurs, batteries et capteurs.
* **Mis en place un fonctionnement résilient hors connexion**, permettant de conserver temporairement les données sur site puis de les transmettre automatiquement lorsque la connexion est rétablie.
* **Développé des mécanismes de supervision de la passerelle**, afin de suivre sa disponibilité, son état de fonctionnement et les éventuelles erreurs de communication.
* **Mis en place une configuration à distance des équipements**, permettant d’adapter les paramètres d’acquisition selon les sites et les équipements.
* **Établi la chaîne de communication entre le monde physique et le système d’information :** équipement → acquisition → stockage local → transmission → plateforme → supervision.

**Environnement :** Python · Raspberry Pi · Linux · SQLite · Django · React · TypeScript · Modbus TCP · SMA Speedwire · CAN Bus · HTTP/REST · GPIO · IoT

**ERASURVEY — Application mobile pour les opérations terrain**
*Application mobile · Offline-first · Synchronisation · Géolocalisation · API*

* **Conçu une application mobile destinée aux équipes terrain**, permettant de digitaliser les relevés, interventions et enquêtes réalisés sur les sites.
* **Permis aux agents de travailler sans connexion Internet**, avec conservation locale des données directement sur le téléphone.
* **Développé un mécanisme de synchronisation automatique** permettant de transmettre les données au système central dès que la connexion est rétablie.
* **Géré la cohérence des données lors des synchronisations**, notamment lorsque plusieurs opérations sont réalisées hors connexion.
* **Intégré le suivi des interventions, équipements, relevés, photos, géolocalisation et signatures**, afin de centraliser les informations collectées sur le terrain.
* **Mis en place une architecture “terrain d’abord”**, adaptée aux zones rurales où la connectivité peut être intermittente.

**Environnement :** React Native · Expo · TypeScript · FastAPI · Python · PostgreSQL · PostGIS · SQLite · Socket.IO · API REST · JWT · Géolocalisation
",
      techs: ["Python", "Django REST", "PostgreSQL", "TimescaleDB", "Celery", "Redis", "React", "TypeScript", "IoT"],
    },
    {
      role: "Data Scientist",
      company: "Groupe SONATEL",
      period: "Oct. 2025",
      description: "Mission data science au sein du plus grand groupe télécom d'Afrique de l'Ouest. ",
      techs: ["Python", "Data Science", "ML", "Analytics"],
    },
    {
      role: "Data Engineer",
      company: " Proboutik",
      period: "Juin 2025 - Sept. 2025",
      description: "Conception et gestion de pipelines ETL complets — de l'extraction brute au dataset prêt pour l'analyse. Développement de scripts Python pour automatiser l'ingestion, la transformation et la normalisation des données en temps réel. Mise en place d'un processus d'assurance qualité des données garantissant cohérence, fiabilité et standardisation pour des analyses exploitables et fiables.",
      techs: ["Python", "Pandas", "NumPy", "SQL", "ETL", "Data Quality"],
    },
    {
      role: "Développeur Data & IA",
      company: " Proboutik",
      period: "Jan. 2025 - Juin 2025",
      description: "Un rôle unique où j'ai piloté un projet d'IA vocale multilingue inédit : un assistant capable de fonctionner en wolof, français, anglais et arabe pour améliorer les échanges en milieu professionnel et institutionnel. J'ai coordonné les workflows collaboratifs entre équipes techniques en méthodologie Agile, intégré les API OpenAI/Whisper/ElevenLabs, et développé les landing pages Digicaisse et Proboutik en mettant l'accent sur l'UX et les performances. Ce projet m'a confirmé que l'IA la plus puissante est celle qui s'ancre dans un contexte culturel réel.",
      techs: ["Python", "OpenAI API", "Whisper", "ElevenLabs", "Angular", "NLP", "LLMs"],
    },
  ],
};

export const contact = {
  heading: "Contact",
  description: "Un projet data, une mission IA, une collaboration technique ? Je suis disponible pour transformer vos données en décisions.",
  quote: "Les meilleures architectures naissent de la rencontre entre la rigueur technique et la vision stratégique.",
};

export const metadata = {
  title: `${personal.firstName} ${personal.lastName} — ${personal.title}`,
  description: hero.subtitle,
};
