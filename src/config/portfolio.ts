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
  cvUrl: "",
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
      title: "ERAPOWER — Plateforme de gestion, supervision et analyse des réseaux électriques ruraux",
      description: "<p dir=\"auto\" data-start=\"722\" data-end=\"975\" class=\"PDq2pG_selectionAnchorContainer\"><strong data-start=\"722\" data-end=\"975\">Conception et développement d’une plateforme permettant à ERA de suivre et gérer ses réseaux électriques ruraux, depuis les équipements installés sur le terrain jusqu’aux tableaux de bord utilisés pour surveiller l’activité et prendre des décisions.</strong><span aria-hidden=\"true\" class=\"PDq2pG_selectionAnchor\"></span></p>\n<ul data-start=\"977\" data-end=\"3356\">\n<li data-section-id=\"1jt6a4p\" data-start=\"977\" data-end=\"1232\">\n<strong data-start=\"979\" data-end=\"1053\">Conçu et développé une plateforme complète de gestion de l’électricité</strong>, permettant de suivre la production solaire, les transformateurs, la distribution, les clients, les compteurs, la facturation, les interventions terrain et la qualité du service.\n</li>\n<li data-section-id=\"1tsv427\" data-start=\"1234\" data-end=\"1472\">\n<strong data-start=\"1236\" data-end=\"1303\">Relié les équipements électriques du terrain au système central</strong>, afin de faire remonter automatiquement les informations nécessaires à la supervision : production, tension, courant, énergie, état des équipements, disponibilité, etc.\n</li>\n<li data-section-id=\"s54u1y\" data-start=\"1474\" data-end=\"1695\">\n<strong data-start=\"1476\" data-end=\"1572\">Mis en place un système capable de continuer à fonctionner malgré les problèmes de connexion</strong>, en permettant aux équipements de conserver temporairement les données et de les transmettre lorsque la connexion revient.\n</li>\n<li data-section-id=\"1lfex4j\" data-start=\"1697\" data-end=\"1897\">\n<strong data-start=\"1699\" data-end=\"1769\">Centralisé et fiabilisé des données provenant de plusieurs sources</strong> — équipements terrain, bases de données, systèmes externes et API — afin de disposer d’informations cohérentes et exploitables.\n</li>\n<li data-section-id=\"oj0kx7\" data-start=\"1899\" data-end=\"2157\">\n<strong data-start=\"1901\" data-end=\"1989\">Développé des outils de surveillance permettant de détecter rapidement les anomalies</strong>, par exemple une surcharge de transformateur, une tension anormale, une baisse de production, un problème de batterie ou une perte de communication avec un équipement.\n</li>\n<li data-section-id=\"tbbvh8\" data-start=\"2159\" data-end=\"2352\">\n<strong data-start=\"2161\" data-end=\"2246\">Transformé les données techniques en indicateurs compréhensibles pour les équipes</strong>, grâce à des tableaux de bord, des graphiques, des cartes, des alertes et des indicateurs de performance.\n</li>\n<li data-section-id=\"14foj7z\" data-start=\"2354\" data-end=\"2563\">\n<strong data-start=\"2356\" data-end=\"2417\">Automatisé le contrôle des factures d’électricité SENELEC</strong>, en comparant les données réellement mesurées sur le réseau avec les données facturées afin d’identifier les écarts nécessitant une vérification.\n</li>\n<li data-section-id=\"1a0l29c\" data-start=\"2565\" data-end=\"2770\">\n<strong data-start=\"2567\" data-end=\"2621\">Mis en place des indicateurs de qualité de service</strong> permettant notamment de suivre la fréquence et la durée des interruptions d’électricité et d’identifier les situations nécessitant une intervention.\n</li>\n<li data-section-id=\"xs2u50\" data-start=\"2772\" data-end=\"3010\">\n<strong data-start=\"2774\" data-end=\"2820\">Amélioré les performances de la plateforme</strong>, notamment sur le système d’alertes : une optimisation a permis de passer d’environ <strong data-start=\"2905\" data-end=\"2933\">456 000 requêtes à 1 600</strong>, soit une réduction d’environ <strong data-start=\"2964\" data-end=\"2976\">285 fois</strong> du volume de requêtes nécessaire.\n</li>\n<li data-section-id=\"9aodin\" data-start=\"3012\" data-end=\"3162\">\n<strong data-start=\"3014\" data-end=\"3102\">Réduit le temps de chargement d’une page de supervision de 13 secondes à 1,4 seconde</strong>, sur une base contenant environ <strong data-start=\"3135\" data-end=\"3161\">28 millions de mesures</strong>.\n</li>\n<li data-section-id=\"1fa5r2g\" data-start=\"3164\" data-end=\"3356\">\n<strong data-start=\"3166\" data-end=\"3217\">Pris en charge le développement de bout en bout</strong>, de la récupération des données sur les équipements jusqu’à leur traitement, leur affichage et leur utilisation dans les processus métier.</li></ul>",
      tags: ["Python", "Django REST", "PostgreSQL", "Sqlserver", "Celery", "Redis", "React", "IoT"],
      category: "Architecture logicielle · Data Engineering · IoT · Backend · Analyse de données",
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
    {
      title: "ERACONTROLLER — Passerelle intelligente pour les équipements des centrales solaires",
      description: "<h2 data-section-id=\"1mkrs46\" dir=\"auto\" data-start=\"262\" data-end=\"348\" class=\"PDq2pG_selectionAnchorContainer\">ERACONTROLLER — Passerelle intelligente pour les équipements des centrales solaires<span aria-hidden=\"true\" class=\"PDq2pG_selectionAnchor\"></span></h2>\n<p dir=\"auto\" data-start=\"350\" data-end=\"558\"><strong data-start=\"350\" data-end=\"558\">Conception et développement d’un système permettant de récupérer automatiquement les informations provenant de différents équipements d’une centrale solaire et de les transmettre à la plateforme centrale.</strong></p>\n<ul data-start=\"560\" data-end=\"2421\">\n<li data-section-id=\"1uyqvn1\" data-start=\"560\" data-end=\"751\">\n<strong data-start=\"562\" data-end=\"674\">Conçu une passerelle permettant de connecter les équipements électriques du terrain au système d’information</strong>, afin de récupérer automatiquement leurs données sans intervention manuelle.\n</li>\n<li data-section-id=\"187o3p5\" data-start=\"753\" data-end=\"916\">\n<strong data-start=\"755\" data-end=\"837\">Permis à une même passerelle de communiquer avec plusieurs types d’équipements</strong>, même lorsque ceux-ci utilisent des technologies de communication différentes.\n</li>\n<li data-section-id=\"1lx7szt\" data-start=\"918\" data-end=\"1084\">\n<strong data-start=\"920\" data-end=\"1031\">Mis en place la récupération de données provenant notamment des onduleurs, compteurs, batteries et capteurs</strong>, puis leur transmission vers la plateforme centrale.\n</li>\n<li data-section-id=\"e6umck\" data-start=\"1086\" data-end=\"1299\">\n<strong data-start=\"1088\" data-end=\"1163\">Conçu un fonctionnement résilient en cas de perte de connexion Internet</strong> : les données sont temporairement conservées directement sur le site puis transmises automatiquement lorsque la connexion est rétablie.\n</li>\n<li data-section-id=\"1lndf8s\" data-start=\"1301\" data-end=\"1486\">\n<strong data-start=\"1303\" data-end=\"1370\">Développé un système de surveillance de l’état de la passerelle</strong>, permettant de connaître sa disponibilité, son fonctionnement et les éventuels problèmes rencontrés sur le terrain.\n</li>\n<li data-section-id=\"kcg8ix\" data-start=\"1488\" data-end=\"1694\">\n<strong data-start=\"1490\" data-end=\"1547\">Mis en place un mécanisme de configuration à distance</strong>, permettant d’adapter les paramètres de récupération des données aux différents équipements et sites sans devoir reconstruire toute l’application.\n</li>\n<li data-section-id=\"tcv1ko\" data-start=\"1696\" data-end=\"1887\">\n<strong data-start=\"1698\" data-end=\"1760\">Sécurisé l’identification et l’association des équipements</strong>, afin de garantir que les données provenant d’un site soient correctement rattachées au bon équipement et à la bonne centrale.\n</li>\n<li data-section-id=\"9k6ama\" data-start=\"1889\" data-end=\"2087\">\n<strong data-start=\"1891\" data-end=\"1972\">Développé des mécanismes permettant de prendre certaines décisions localement</strong>, directement au niveau de la centrale, notamment lorsque la communication avec le système central est interrompue.\n</li>\n<li data-section-id=\"1ljfnt3\" data-start=\"2089\" data-end=\"2227\">\n<strong data-start=\"2091\" data-end=\"2161\">Conçu le système pour fonctionner avec des équipements hétérogènes</strong>, en utilisant différents protocoles de communication industriels.\n</li>\n<li data-section-id=\"120h6w2\" data-start=\"2229\" data-end=\"2421\">\n<strong data-start=\"2231\" data-end=\"2314\">Contribué à établir le lien entre le monde physique et le système d’information</strong> : équipement électrique → acquisition → stockage local → transmission → plateforme centrale → supervision.</li></ul>",
      tags: ["Python", "Raspberry Pi", "Linux · SQLite · Django · React · TypeScript · Modbus TCP · SMA Speedwire · CAN Bus · HTTP/REST", "GPIO", "IoT", "API", "Systèmes embarqués"],
      category: "IoT, Data & Systèmes embarqués",
      github: "",
      live: "",
      featured: true,
    },
    {
      title: "ERASURVEY — Application mobile pour les opérations terrain",
      description: "<p dir=\"auto\" data-start=\"3179\" data-end=\"3408\" class=\"PDq2pG_selectionAnchorContainer\"><strong data-start=\"3179\" data-end=\"3408\">Conception et développement d’une application mobile permettant aux équipes terrain d’effectuer leurs interventions, de collecter les informations sur site et de travailler même lorsque la connexion Internet est indisponible.</strong><span aria-hidden=\"true\" class=\"PDq2pG_selectionAnchor\"></span></p>\n<ul data-start=\"3410\" data-end=\"5231\">\n<li data-section-id=\"1tu8oi1\" data-start=\"3410\" data-end=\"3618\">\n<strong data-start=\"3412\" data-end=\"3492\">Conçu une application mobile destinée aux équipes intervenant sur le terrain</strong>, afin de remplacer les processus reposant auparavant sur des formulaires papier et de faciliter la remontée des informations.\n</li>\n<li data-section-id=\"1l2c3wq\" data-start=\"3620\" data-end=\"3762\">\n<strong data-start=\"3622\" data-end=\"3701\">Permis aux agents de réaliser leurs opérations même sans connexion Internet</strong>, avec conservation des données directement sur le téléphone.\n</li>\n<li data-section-id=\"m71s1w\" data-start=\"3764\" data-end=\"3936\">\n<strong data-start=\"3766\" data-end=\"3838\">Mis en place une synchronisation automatique avec le système central</strong>, permettant de transmettre les informations collectées dès que la connexion redevient disponible.\n</li>\n<li data-section-id=\"1p37uvz\" data-start=\"3938\" data-end=\"4125\">\n<strong data-start=\"3940\" data-end=\"4019\">Conçu un mécanisme de synchronisation garantissant la cohérence des données</strong>, notamment lorsque plusieurs opérations sont réalisées hors connexion avant leur transmission au serveur.\n</li>\n<li data-section-id=\"zsanr3\" data-start=\"4127\" data-end=\"4280\">\n<strong data-start=\"4129\" data-end=\"4177\">Intégré la gestion des interventions terrain</strong>, avec suivi des équipements, ordres de travail, relevés, enquêtes, photos, localisation et signatures.\n</li>\n<li data-section-id=\"13wf12t\" data-start=\"4282\" data-end=\"4453\">\n<strong data-start=\"4284\" data-end=\"4399\">Permis aux agents de disposer directement sur leur téléphone des informations nécessaires à leurs interventions</strong>, même dans des zones où l’accès au réseau est limité.\n</li>\n<li data-section-id=\"1letypl\" data-start=\"4455\" data-end=\"4620\">\n<strong data-start=\"4457\" data-end=\"4536\">Mis en place une organisation adaptée aux différents profils d’utilisateurs</strong>, afin que chaque agent puisse accéder aux fonctionnalités correspondant à son rôle.\n</li>\n<li data-section-id=\"1n042ko\" data-start=\"4622\" data-end=\"4812\">\n<strong data-start=\"4624\" data-end=\"4741\">Amélioré la fiabilité de l’application en traitant des problèmes de concurrence et de synchronisation des données</strong>, notamment lorsque plusieurs opérations sont effectuées simultanément.\n</li>\n<li data-section-id=\"exe4xr\" data-start=\"4814\" data-end=\"5018\">\n<strong data-start=\"4816\" data-end=\"4930\">Remplacé des informations auparavant inscrites directement dans l’application par des référentiels centralisés</strong>, permettant de maintenir plus facilement les données utilisées par les équipes terrain.\n</li>\n<li data-section-id=\"bbqoew\" data-start=\"5020\" data-end=\"5231\">\n<strong data-start=\"5022\" data-end=\"5084\">Conçu l'application autour d'une logique “terrain d'abord”</strong> : le téléphone constitue temporairement la source de référence pendant l’intervention, puis les données sont réconciliées avec le système central.</li></ul>",
      tags: ["React Native · Expo · TypeScript · FastAPI · Python · PostgreSQL · PostGIS · SQLite · Socket.IO · API REST · JWT · Géolocalisation · Fonctionnement offline-first"],
      category: "",
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
      period: "Oct. 2025 — Présent",
      startDate: "2025-10",
      current: true,
      description: "<div><strong>ERAPOWER — Plateforme de supervision et d’analyse des réseaux électriques ruraux</strong></div><div><p><em>Architecture logicielle · Data Engineering · IoT · Backend · Analyse de données</em></p><ul><li><p><strong>Conçu et développé une plateforme de supervision des réseaux électriques ruraux</strong>, permettant de suivre la production solaire, les transformateurs, la distribution, les compteurs, la facturation, les interventions et la qualité du service.</p></li><li><p><strong>Connecté les équipements électriques du terrain au système d’information</strong>, afin de collecter et centraliser automatiquement les données de production, tension, courant, énergie, disponibilité et état des équipements.</p></li><li><p><strong>Centralisé des données provenant de plusieurs sources</strong> — équipements IoT, bases de données, systèmes externes et API — pour les transformer en informations fiables et exploitables.</p></li><li><p><strong>Développé des mécanismes de détection d’anomalies et d’alertes</strong>, permettant d’identifier rapidement les surcharges, tensions anormales, baisses de production, problèmes de batteries ou pertes de communication.</p></li><li><p><strong>Transformé les données techniques en indicateurs métier</strong> à travers des tableaux de bord, graphiques, cartes et systèmes d’alerte destinés au suivi opérationnel et à l’aide à la décision.</p></li><li><p><strong>Automatisé le contrôle des factures SENELEC</strong> en confrontant les données réellement mesurées sur le réseau aux données facturées afin d’identifier les écarts.</p></li><li><p><strong>Optimisé le système de supervision</strong>, en faisant passer le volume de requêtes d’environ <strong>456 000 à 1 600</strong>, soit une réduction d’environ <strong>285×</strong>.</p></li><li><p><strong>Réduit le temps de chargement d’une page de supervision de 13 s à 1,4 s</strong>, sur une base contenant environ <strong>28 millions de mesures</strong>.</p></li><li><p><strong>Pris en charge le développement de bout en bout</strong>, de l’acquisition des données sur le terrain jusqu'à leur traitement, leur exposition via API et leur visualisation.</p></li></ul><p><br></p><p><strong>ERACONTROLLER — Passerelle IoT pour les centrales solaires</strong><br><em>IoT · Systèmes embarqués · Acquisition de données · API · Résilience</em></p><ul><li><p><strong>Conçu une passerelle permettant de connecter les équipements électriques des centrales solaires à la plateforme centrale</strong> et de récupérer automatiquement leurs données.</p></li><li><p><strong>Intégré différents types d’équipements et protocoles de communication</strong>, notamment onduleurs, compteurs, batteries et capteurs.</p></li><li><p><strong>Mis en place un fonctionnement résilient hors connexion</strong>, permettant de conserver temporairement les données sur site puis de les transmettre automatiquement lorsque la connexion est rétablie.</p></li><li><p><strong>Développé des mécanismes de supervision de la passerelle</strong>, afin de suivre sa disponibilité, son état de fonctionnement et les éventuelles erreurs de communication.</p></li><li><p><strong>Mis en place une configuration à distance des équipements</strong>, permettant d’adapter les paramètres d’acquisition selon les sites et les équipements.</p></li><li><p><strong>Établi la chaîne de communication entre le monde physique et le système d’information :</strong> équipement → acquisition → stockage local → transmission → plateforme → supervision.</p></li></ul><p><br></p><p><strong>ERASURVEY — Application mobile pour les opérations terrain</strong><br><em>Application mobile · Offline-first · Synchronisation · Géolocalisation · API</em></p><ul><li><p><strong>Conçu une application mobile destinée aux équipes terrain</strong>, permettant de digitaliser les relevés, interventions et enquêtes réalisés sur les sites.</p></li><li><p><strong>Permis aux agents de travailler sans connexion Internet</strong>, avec conservation locale des données directement sur le téléphone.</p></li><li><p><strong>Développé un mécanisme de synchronisation automatique</strong> permettant de transmettre les données au système central dès que la connexion est rétablie.</p></li><li><p><strong>Géré la cohérence des données lors des synchronisations</strong>, notamment lorsque plusieurs opérations sont réalisées hors connexion.</p></li><li><p><strong>Intégré le suivi des interventions, équipements, relevés, photos, géolocalisation et signatures</strong>, afin de centraliser les informations collectées sur le terrain.</p></li><li><p><strong>Mis en place une architecture “terrain d’abord”</strong>, adaptée aux zones rurales où la connectivité peut être intermittente.</p></li></ul><p><br></p></div>",
      techs: [""],
      techGroups: [
        { label: "Backend & API ", items: ["Python · Django · Django REST Framework · FastAPI · API REST · Celery · RabbitMQ · Socket.IO · JWT"] },
        { label: "Data Engineering & Bases de données", items: ["PostgreSQL · PostGIS · SQL Server · SQLite · ETL"] },
        { label: "ETL Frontend & Mobile", items: ["React · React Native · TypeScript· Expo"] },
        { label: "IoT & Systèmes embarqués", items: ["Raspberry Pi · Linux · Modbus · Modbus TCP · SMA Speedwire · CAN Bus · GPIO· IoT"] },
        { label: "Autres", items: ["Géolocalisation"] },
      ],
    },
    {
      role: "Data Scientist",
      company: "Groupe SONATEL",
      period: "",
      description: "Mission data science au sein du plus grand groupe télécom d'Afrique de l'Ouest. ",
      techs: ["Python", "Data Science", "ML", "Analytics"],
    },
    {
      role: "Data Engineer",
      company: " Proboutik",
      period: "Juin 2025 — Sept. 2025",
      startDate: "2025-06",
      endDate: "2025-09",
      description: "Conception et gestion de pipelines ETL complets — de l'extraction brute au dataset prêt pour l'analyse. Développement de scripts Python pour automatiser l'ingestion, la transformation et la normalisation des données en temps réel. Mise en place d'un processus d'assurance qualité des données garantissant cohérence, fiabilité et standardisation pour des analyses exploitables et fiables.",
      techs: ["Python", "Pandas", "NumPy", "SQL", "ETL", "Data Quality"],
    },
    {
      role: "Développeur Data & IA",
      company: " Proboutik",
      period: "Janv. 2025 — Juin 2025",
      startDate: "2025-01",
      endDate: "2025-06",
      description: "Un rôle unique où j'ai piloté un projet d'IA vocale multilingue inédit : un assistant capable de fonctionner en wolof, français, anglais et arabe pour améliorer les échanges en milieu professionnel et institutionnel. J'ai coordonné les workflows collaboratifs entre équipes techniques en méthodologie Agile, intégré les API OpenAI/Whisper/ElevenLabs, et développé les landing pages Digicaisse et Proboutik en mettant l'accent sur l'UX et les performances. Ce projet m'a confirmé que l'IA la plus puissante est celle qui s'ancre dans un contexte culturel réel.",
      techs: ["Python", "OpenAI API", "Whisper", "ElevenLabs", "Angular", "NLP", "LLMs", ""],
    },
    {
      role: "Architect Logiciel",
      company: "PAPS",
      period: "Juil. 2025 — Oct. 2025",
      startDate: "2025-07",
      endDate: "2025-10",
      description: "<p><strong>PAPSMARKET — Architecte Logiciel | Plateforme SaaS de gestion logistique &amp; e-commerce</strong></p><ul><li><p>Conception de l’architecture globale d’une plateforme SaaS centralisant <strong>produits, stocks, commandes, livraisons et gestion des utilisateurs</strong>.</p></li><li><p>Structuration d’une architecture modulaire autour d’une <strong>API REST centrale avec FastAPI/Python</strong>, connectée à trois interfaces React/TypeScript : <strong>Back-Office, Boutique e-commerce et Site vitrine</strong>.</p></li><li><p>Conception et structuration du modèle de données <strong>PostgreSQL</strong> avec Prisma pour assurer la cohérence et l’évolution des données métier.</p></li><li><p>Définition des interactions entre les composants applicatifs et séparation des responsabilités entre <strong>logique métier, données et interfaces utilisateur</strong>.</p></li><li><p>Mise en place des mécanismes d’<strong>authentification et d’autorisation par JWT et gestion des rôles</strong>.</p></li><li><p>Contribution à la conception de fonctionnalités métier : gestion des stocks, commandes, livraisons, clients, livreurs, abonnements et tableaux de bord analytiques.</p></li><li><p>Intégration de services externes, notamment <strong>Cloudinary</strong> pour la gestion des images et préparation d’intégrations de notification.</p></li><li><p>Prise en compte des enjeux de <strong>sécurité, maintenabilité, évolutivité et performance</strong> dans les choix d’architecture.</p></li></ul>",
      techs: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Prisma", "JWT", "REST API", "Swagger/OpenAPI", "Vite", "Tailwind CSS", "Pytest."],
    },
    {
      role: "Assistant Support",
      company: "Suptelecom",
      period: "Mars 2022 — Nov. 2023",
      startDate: "2022-03",
      endDate: "2023-11",
      description: "<p>En tant qu’<strong>Assistant Support Informatique</strong> au sein de mon établissement, j’ai assuré l’assistance technique des apprenants et du personnel ainsi que la préparation et la maintenance de l’environnement informatique.</p><p>Mes principales missions consistaient à <strong>installer et configurer les postes de travail et les logiciels</strong>, préparer les équipements pour les cours et les activités pédagogiques, diagnostiquer et résoudre les incidents techniques, et accompagner les utilisateurs dans la prise en main des outils informatiques.</p><p>Cette expérience m’a permis de développer mes compétences en <strong>support utilisateur, installation et configuration de systèmes, maintenance informatique, résolution de problèmes et environnement réseau</strong>, tout en renforçant mon autonomie et ma capacité à intervenir rapidement face aux incidents techniques.</p>",
      techs: [""],
      techGroups: [
        { label: "Support & Maintenance", items: ["Installation et configuration de postes de travail Installation et mise à jour de logiciels Maintenance et diagnostic des postes Assistance technique aux utilisateurs"] },
        { label: "Systèmes & Réseaux", items: ["Windows Linux Configuration réseau Connexion et configuration des équipements"] },
      ],
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
