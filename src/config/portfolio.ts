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
  showPillars: true,
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
      category: "Data Engineering, Data Analyse",
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
      tags: ["Python", "Raspberry Pi", "Linux", "SQLite", "Django", "React", "TypeScript", "Modbus TCP", "SMA Speedwire", "CAN Bus", "HTTP/REST", "GPIO", "IoT", "API", "Systèmes embarqués"],
      category: "IoT, Data & Systèmes embarqués",
      github: "",
      live: "",
      featured: true,
    },
    {
      title: "ERASURVEY — Application mobile pour les opérations terrain",
      description: "<p dir=\"auto\" data-start=\"3179\" data-end=\"3408\" class=\"PDq2pG_selectionAnchorContainer\"><strong data-start=\"3179\" data-end=\"3408\">Conception et développement d’une application mobile permettant aux équipes terrain d’effectuer leurs interventions, de collecter les informations sur site et de travailler même lorsque la connexion Internet est indisponible.</strong><span aria-hidden=\"true\" class=\"PDq2pG_selectionAnchor\"></span></p>\n<ul data-start=\"3410\" data-end=\"5231\">\n<li data-section-id=\"1tu8oi1\" data-start=\"3410\" data-end=\"3618\">\n<strong data-start=\"3412\" data-end=\"3492\">Conçu une application mobile destinée aux équipes intervenant sur le terrain</strong>, afin de remplacer les processus reposant auparavant sur des formulaires papier et de faciliter la remontée des informations.\n</li>\n<li data-section-id=\"1l2c3wq\" data-start=\"3620\" data-end=\"3762\">\n<strong data-start=\"3622\" data-end=\"3701\">Permis aux agents de réaliser leurs opérations même sans connexion Internet</strong>, avec conservation des données directement sur le téléphone.\n</li>\n<li data-section-id=\"m71s1w\" data-start=\"3764\" data-end=\"3936\">\n<strong data-start=\"3766\" data-end=\"3838\">Mis en place une synchronisation automatique avec le système central</strong>, permettant de transmettre les informations collectées dès que la connexion redevient disponible.\n</li>\n<li data-section-id=\"1p37uvz\" data-start=\"3938\" data-end=\"4125\">\n<strong data-start=\"3940\" data-end=\"4019\">Conçu un mécanisme de synchronisation garantissant la cohérence des données</strong>, notamment lorsque plusieurs opérations sont réalisées hors connexion avant leur transmission au serveur.\n</li>\n<li data-section-id=\"zsanr3\" data-start=\"4127\" data-end=\"4280\">\n<strong data-start=\"4129\" data-end=\"4177\">Intégré la gestion des interventions terrain</strong>, avec suivi des équipements, ordres de travail, relevés, enquêtes, photos, localisation et signatures.\n</li>\n<li data-section-id=\"13wf12t\" data-start=\"4282\" data-end=\"4453\">\n<strong data-start=\"4284\" data-end=\"4399\">Permis aux agents de disposer directement sur leur téléphone des informations nécessaires à leurs interventions</strong>, même dans des zones où l’accès au réseau est limité.\n</li>\n<li data-section-id=\"1letypl\" data-start=\"4455\" data-end=\"4620\">\n<strong data-start=\"4457\" data-end=\"4536\">Mis en place une organisation adaptée aux différents profils d’utilisateurs</strong>, afin que chaque agent puisse accéder aux fonctionnalités correspondant à son rôle.\n</li>\n<li data-section-id=\"1n042ko\" data-start=\"4622\" data-end=\"4812\">\n<strong data-start=\"4624\" data-end=\"4741\">Amélioré la fiabilité de l’application en traitant des problèmes de concurrence et de synchronisation des données</strong>, notamment lorsque plusieurs opérations sont effectuées simultanément.\n</li>\n<li data-section-id=\"exe4xr\" data-start=\"4814\" data-end=\"5018\">\n<strong data-start=\"4816\" data-end=\"4930\">Remplacé des informations auparavant inscrites directement dans l’application par des référentiels centralisés</strong>, permettant de maintenir plus facilement les données utilisées par les équipes terrain.\n</li>\n<li data-section-id=\"bbqoew\" data-start=\"5020\" data-end=\"5231\">\n<strong data-start=\"5022\" data-end=\"5084\">Conçu l'application autour d'une logique “terrain d'abord”</strong> : le téléphone constitue temporairement la source de référence pendant l’intervention, puis les données sont réconciliées avec le système central.</li></ul>",
      tags: ["React Native", "Expo", "TypeScript", "FastAPI", "Python", "PostgreSQL", "PostGIS", "SQLite", "Socket.IO", "API REST", "JWT", "Géolocalisation", "Fonctionnement offline-first"],
      category: "",
      github: "",
      live: "",
      featured: true,
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
      techs: [],
      techGroups: [
        { label: "Backend & API ", items: ["Python · Django · Django REST Framework · FastAPI · API REST · Celery · RabbitMQ · Socket.IO · JWT"] },
        { label: "Data Engineering & Bases de données", items: ["PostgreSQL · PostGIS · SQL Server · SQLite · ETL"] },
        { label: "ETL Frontend & Mobile", items: ["React · React Native · TypeScript· Expo"] },
        { label: "IoT & Systèmes embarqués", items: ["Raspberry Pi · Linux · Modbus · Modbus TCP · SMA Speedwire · CAN Bus · GPIO· IoT"] },
        { label: "Autres", items: ["Géolocalisation"] },
      ],
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
      techs: ["Python", "OpenAI API", "Whisper", "ElevenLabs", "Angular", "NLP", "LLMs"],
    },
    {
      role: "Assistant Support",
      company: "Suptelecom",
      period: "Mars 2022 — Nov. 2023",
      startDate: "2022-03",
      endDate: "2023-11",
      description: "<p>En tant qu’<strong>Assistant Support Informatique</strong> au sein de mon établissement, j’ai assuré l’assistance technique des apprenants et du personnel ainsi que la préparation et la maintenance de l’environnement informatique.</p><p>Mes principales missions consistaient à <strong>installer et configurer les postes de travail et les logiciels</strong>, préparer les équipements pour les cours et les activités pédagogiques, diagnostiquer et résoudre les incidents techniques, et accompagner les utilisateurs dans la prise en main des outils informatiques.</p><p>Cette expérience m’a permis de développer mes compétences en <strong>support utilisateur, installation et configuration de systèmes, maintenance informatique, résolution de problèmes et environnement réseau</strong>, tout en renforçant mon autonomie et ma capacité à intervenir rapidement face aux incidents techniques.</p>",
      techs: [],
      techGroups: [
        { label: "Support & Maintenance", items: ["Installation et configuration de postes de travail Installation et mise à jour de logiciels Maintenance et diagnostic des postes Assistance technique aux utilisateurs"] },
        { label: "Systèmes & Réseaux", items: ["Windows Linux Configuration réseau Connexion et configuration des équipements"] },
      ],
    },
    {
      role: "Data Scientist",
      company: "Groupe SONATEL",
      period: "",
      description: "Mission data science au sein du plus grand groupe télécom d'Afrique de l'Ouest. ",
      techs: ["Python", "Data Science", "ML", "Analytics"],
    },
  ],
};

export const blog = {
  heading: "Blog",
  description: "Retours d'expérience et repères techniques sur la data engineering, l'IoT, l'intelligence artificielle et la mise en production de systèmes fiables.",
  posts: [
    {
      slug: "comprendre-le-metier-avant-la-donnee",
      title: "Comprendre le métier avant la donnée : la première compétence d'un data analyst",
      date: "2025-05-06",
      readTime: "8 min",
      excerpt: "La technique ne crée pas de valeur toute seule. Avant les modèles et les pipelines, il faut comprendre le métier, ses contraintes et ce qui compte vraiment pour lui.",
      content: "\n<p>La plupart des projets data n'échouent pas pour des raisons techniques : ils échouent parce qu'ils répondent à la mauvaise question. On peut construire le plus beau pipeline du monde ; s'il n'éclaire aucune décision réelle, il ne sert à rien.</p>\n<p>La première compétence d'un bon analyste n'est pas de coder un modèle, c'est de <strong>comprendre le métier</strong> qu'il sert : ses objectifs, ses contraintes, et la façon dont il prend ses décisions aujourd'hui.</p>\n\n<h3>01 · Écouter avant d'analyser</h3>\n<p>Avant d'ouvrir un notebook, il faut s'immerger : parler aux équipes, apprendre leur vocabulaire, comprendre leurs irritants quotidiens. Une donnée n'a de sens que dans le contexte métier qui la produit.</p>\n<ul>\n<li>Quelles décisions les équipes prennent-elles, et à quelle fréquence ?</li>\n<li>Sur quelles informations s'appuient-elles aujourd'hui, même imparfaites ?</li>\n<li>Qu'est-ce qui leur ferait vraiment gagner du temps ou de l'argent ?</li>\n</ul>\n\n<h3>02 · Distinguer le symptôme du vrai problème</h3>\n<p>« On veut un tableau de bord » est rarement le vrai besoin — c'est un symptôme. Le rôle de l'analyste est de remonter à la question sous-jacente : réduire un coût ? anticiper une panne ? prioriser des interventions ? La bonne analyse commence par une bonne <strong>question</strong>.</p>\n\n<h3>03 · Relier chaque donnée à une décision</h3>\n<p>Un indicateur qui ne change aucune décision est du bruit, aussi précis soit-il. Pour chaque métrique, se demander : <em>« si ce chiffre bouge, qui fait quoi différemment ? »</em> Si la réponse est « rien », l'indicateur n'a pas sa place.</p>\n\n<h3>04 · Restituer dans le langage du métier</h3>\n<p>Une analyse juste mais incomprise est une analyse perdue. La valeur se mesure à la décision qu'elle déclenche — il faut donc traduire les résultats en termes d'<strong>impact concret</strong> (temps, argent, risque), pas en jargon statistique.</p>\n\n<h3>En pratique — check-list</h3>\n<ul class=\"check\">\n<li>Passer du temps sur le terrain avant de toucher aux données.</li>\n<li>Reformuler le besoin en une question de décision claire.</li>\n<li>Écarter les indicateurs qui ne changent aucune action.</li>\n<li>Valider sa compréhension métier auprès des équipes.</li>\n<li>Restituer en impact concret, pas en jargon.</li>\n</ul>\n\n<h3>Conclusion</h3>\n<p>La donnée est un moyen, jamais une fin. Ce qui distingue un bon analyste, ce n'est pas la maîtrise d'un algorithme de plus, mais sa capacité à comprendre un métier assez profondément pour poser la question qui compte — et y répondre de façon actionnable.</p>\n",
    },
    {
      slug: "cadrer-un-probleme-data-et-indicateurs",
      title: "Cadrer un problème data et choisir les bons indicateurs",
      date: "2025-04-22",
      readTime: "9 min",
      excerpt: "Un projet data réussi se joue au cadrage : bien définir l'objectif, les hypothèses et les indicateurs qui mesurent vraiment le succès — pas ceux qui flattent.",
      content: "\n<p>Entre une analyse qui change les décisions et une analyse qui finit dans un tiroir, la différence se joue rarement sur l'algorithme : elle se joue sur le <strong>cadrage</strong>. Mal poser un problème, c'est garantir une réponse inutile, même techniquement irréprochable.</p>\n\n<h3>01 · Formuler le problème clairement</h3>\n<p>Un bon énoncé tient en une phrase : <em>qui</em> a besoin de <em>quoi</em>, pour prendre <em>quelle</em> décision, dans <em>quel</em> délai. Tant que cette phrase n'est pas claire, il est prématuré d'analyser quoi que ce soit.</p>\n\n<h3>02 · Choisir des indicateurs qui comptent</h3>\n<p>Tous les chiffres ne se valent pas. On distingue les <strong>vanity metrics</strong> (impressionnantes mais inertes) des <strong>indicateurs actionnables</strong> (qui orientent une décision).</p>\n<ul>\n<li>Un bon KPI est relié à un objectif, pas à l'ego d'un rapport ;</li>\n<li>il est mesurable de façon fiable et régulière ;</li>\n<li>il déclenche une action quand il franchit un seuil.</li>\n</ul>\n\n<h3>03 · Expliciter le succès et les hypothèses</h3>\n<p>Avant d'analyser, définir à quoi ressemble un « bon » résultat, et écrire les hypothèses de départ. Cela évite le biais de confirmation — chercher, inconsciemment, à confirmer ce qu'on croyait déjà.</p>\n\n<h3>04 · Éviter les pièges d'interprétation</h3>\n<p>La rigueur analytique, c'est surtout savoir se méfier :</p>\n<ul>\n<li><strong>corrélation n'est pas causalité</strong> : deux courbes qui montent ensemble ne s'expliquent pas forcément l'une par l'autre ;</li>\n<li>attention aux <strong>biais d'échantillon</strong> : à qui ou à quoi manque-t-il dans les données ?</li>\n<li>un chiffre agrégé peut cacher des réalités opposées (paradoxe de Simpson).</li>\n</ul>\n\n<h3>En pratique — check-list</h3>\n<ul class=\"check\">\n<li>Résumer le problème en une phrase de décision.</li>\n<li>Ne garder que des indicateurs actionnables.</li>\n<li>Écrire à l'avance la définition du succès.</li>\n<li>Vérifier corrélation vs causalité avant de conclure.</li>\n<li>Questionner la représentativité de l'échantillon.</li>\n</ul>\n\n<h3>Conclusion</h3>\n<p>Le cadrage est la partie la moins visible et la plus rentable du travail d'analyste. Bien posé, un problème est déjà à moitié résolu ; mal posé, aucune technique ne le sauvera. Savoir choisir la bonne question et les bons indicateurs, c'est là que se démontre la capacité d'analyse.</p>\n",
    },
    {
      slug: "transformer-la-donnee-en-valeur-metier",
      title: "Transformer la donnée en valeur métier : de la collecte à la décision",
      date: "2025-04-04",
      readTime: "9 min",
      excerpt: "Collecter des données ne rapporte rien en soi. La valeur naît de la chaîne qui va de la donnée brute à une décision qui change concrètement quelque chose.",
      content: "\n<p>Beaucoup d'organisations accumulent des données comme on accumule des archives : par réflexe, sans en tirer profit. Or la donnée n'a aucune valeur intrinsèque — sa valeur naît uniquement de la <strong>décision</strong> qu'elle permet de mieux prendre.</p>\n\n<h3>01 · La chaîne de valeur de la donnée</h3>\n<p>Ma conviction de travail tient en une phrase : <em>du capteur au tableau de bord</em>. Entre les deux, une chaîne : collecte, fiabilisation, stockage, analyse, restitution, décision. Chaque maillon peut détruire la valeur des précédents — une donnée sale ou mal interprétée coûte plus cher que pas de donnée du tout.</p>\n\n<h3>02 · Commencer par les quick wins</h3>\n<p>Inutile de viser l'usine à gaz d'emblée. Les projets qui réussissent commencent par un cas d'usage simple, à fort impact et à faible risque : un rapport automatisé, une alerte qui évite une panne, un contrôle qui détecte des écarts de facturation. La confiance se gagne par des résultats concrets et rapides.</p>\n\n<h3>03 · Mesurer le retour</h3>\n<p>Un projet data doit se justifier comme tout investissement. On estime le <strong>gain</strong> (temps économisé, pertes évitées, revenus supplémentaires) et on le compare au coût. Ce réflexe économique distingue l'analyste qui « fait des dashboards » de celui qui crée de la valeur.</p>\n<ul>\n<li>Combien de temps cette automatisation fait-elle gagner par mois ?</li>\n<li>Combien une détection précoce évite-t-elle de pertes ?</li>\n<li>Quelle décision devient possible qui ne l'était pas avant ?</li>\n</ul>\n\n<h3>04 · Industrialiser ce qui marche</h3>\n<p>Une analyse ponctuelle prouve la valeur ; l'industrialisation la pérennise. On fiabilise, on automatise, on documente — pour que le résultat ne dépende plus d'une personne ni d'un fichier ouvert un lundi matin.</p>\n\n<h3>En pratique — check-list</h3>\n<ul class=\"check\">\n<li>Relier chaque projet à une décision et un gain chiffré.</li>\n<li>Démarrer par un cas d'usage simple à fort impact.</li>\n<li>Vérifier la qualité de la donnée avant d'en tirer des conclusions.</li>\n<li>Mesurer le retour, pas seulement l'activité.</li>\n<li>Industrialiser ce qui a prouvé sa valeur.</li>\n</ul>\n\n<h3>Conclusion</h3>\n<p>Tirer profit de ses données, ce n'est pas en collecter davantage : c'est raccourcir la distance entre une donnée et une décision utile. L'analyste qui comprend cette chaîne — et sait où se crée la valeur — devient un partenaire du métier, pas un simple fournisseur de graphiques.</p>\n",
    },
    {
      slug: "data-storytelling-faire-parler-les-chiffres",
      title: "Data storytelling : faire parler les chiffres pour décider",
      date: "2025-03-24",
      readTime: "8 min",
      excerpt: "Une analyse juste mais incomprise ne sert à rien. Le data storytelling transforme des chiffres en une histoire claire qui déclenche la décision.",
      content: "\n<p>On croit souvent que les chiffres parlent d'eux-mêmes. C'est faux : un tableau brut n'a jamais convaincu personne d'agir. La valeur d'une analyse dépend autant de sa <strong>restitution</strong> que de sa justesse.</p>\n\n<h3>01 · Connaître son audience</h3>\n<p>On ne présente pas les mêmes choses à un directeur, à une équipe technique ou à un opérateur terrain. La première question n'est pas « qu'ai-je trouvé ? » mais « <em>de quoi cette personne a-t-elle besoin pour décider ?</em> ».</p>\n\n<h3>02 · Une visualisation, un message</h3>\n<p>Un bon graphique porte une idée, pas dix. Trop d'information tue le message. La clarté prime sur l'exhaustivité :</p>\n<ul>\n<li>choisir le bon type de graphique pour la comparaison visée ;</li>\n<li>mettre en évidence l'essentiel, atténuer le reste ;</li>\n<li>titrer le graphique par sa conclusion, pas par son contenu.</li>\n</ul>\n\n<h3>03 · Du chiffre à la recommandation</h3>\n<p>Un analyste utile ne s'arrête pas au constat (« les pertes ont augmenté de 12 % ») : il propose une lecture et une piste d'action (« …concentrées sur trois sites ; prioriser leur maintenance »). C'est ce passage du <strong>quoi</strong> au <strong>et alors ?</strong> qui crée l'impact.</p>\n\n<h3>04 · Rester honnête sur l'incertitude</h3>\n<p>La crédibilité se construit dans la nuance : dire ce que les données montrent, mais aussi leurs limites. Un ordre de grandeur assumé vaut mieux qu'une fausse précision. La confiance, une fois perdue sur un chiffre, contamine tout le reste.</p>\n\n<h3>En pratique — check-list</h3>\n<ul class=\"check\">\n<li>Adapter le niveau et le format à l'audience.</li>\n<li>Un message clair par visualisation.</li>\n<li>Titrer par la conclusion, pas par la description.</li>\n<li>Toujours conclure par un « et alors ? » actionnable.</li>\n<li>Assumer les limites et l'incertitude.</li>\n</ul>\n\n<h3>Conclusion</h3>\n<p>Le data storytelling n'est pas du maquillage : c'est le dernier maillon — décisif — de la chaîne de valeur de la donnée. Savoir transformer une analyse en une histoire claire qui déclenche l'action, c'est transformer un savoir technique en influence réelle.</p>\n",
    },
    {
      slug: "supervision-reseau-electrique-temps-reel",
      title: "Superviser un réseau électrique en temps réel : de la donnée terrain au tableau de bord",
      date: "2025-03-10",
      readTime: "12 min",
      excerpt: "Architecture IoT complète pour collecter, fiabiliser et visualiser des milliers de mesures issues du terrain — même quand la connexion est instable.",
      content: "\n<p>Superviser un réseau électrique réparti sur de nombreux sites impose une contrainte simple mais redoutable : la donnée doit remonter de façon fiable, même lorsque le réseau télécom est instable. C'est exactement le problème que résout <strong>ERAPOWER</strong>, la plateforme de supervision que j'ai conçue et développée pour suivre production, distribution et qualité de service sur des réseaux ruraux.</p>\n<p>L'erreur classique est de croire que « temps réel » signifie « connexion permanente ». Sur le terrain, la vérité est inverse : la connexion tombe, et le système doit continuer à fonctionner. La règle qui structure toute l'architecture est donc simple — <strong>tamponner à la source, transmettre quand on peut, ne jamais perdre une mesure.</strong></p>\n\n<h3>01 · De l'équipement à la donnée : la couche terrain</h3>\n<p>Chaque site est équipé d'une passerelle (Raspberry Pi sous Linux) qui parle directement le langage des équipements. Selon le matériel, la collecte s'appuie sur plusieurs protocoles industriels :</p>\n<ul>\n<li><strong>Modbus / Modbus TCP</strong> pour les compteurs, onduleurs et automates ;</li>\n<li><strong>SMA Speedwire</strong> pour les onduleurs solaires ;</li>\n<li><strong>CAN Bus</strong> pour les systèmes embarqués et la gestion des batteries ;</li>\n<li><strong>GPIO</strong> pour les capteurs et signaux physiques bruts.</li>\n</ul>\n<p>À intervalle régulier, la passerelle interroge chaque équipement, normalise les mesures (tension, courant, énergie, état, disponibilité) et les horodate <strong>à la source</strong> — détail crucial : l'heure de la mesure ne doit jamais dépendre de l'heure d'arrivée au serveur.</p>\n\n<h3>02 · Résilience : ne jamais perdre une mesure</h3>\n<p>Quand le lien télécom tombe, la passerelle bascule en mode autonome : les mesures sont écrites dans une file locale persistante. Dès que la connexion revient, elles sont rejouées dans l'ordre, sans doublon.</p>\n<h4>Idempotence et rejeu</h4>\n<p>Chaque mesure porte un identifiant déterministe (site + équipement + horodatage). Côté serveur, réinsérer deux fois la même mesure ne crée jamais de doublon : l'ingestion est <strong>idempotente</strong>. C'est ce qui permet de rejouer sereinement plusieurs heures de données accumulées hors ligne.</p>\n\n<h3>03 · Ingestion et stockage des séries temporelles</h3>\n<p>Les mesures remontent vers une API, passent par une file d'attente, puis sont stockées dans <strong>TimescaleDB</strong> (extension time-series de PostgreSQL). Les <em>hypertables</em> partitionnent automatiquement les données par tranche de temps, et les <em>continuous aggregates</em> pré-calculent moyennes horaires et journalières pour des tableaux de bord instantanés, même sur des millions de points.</p>\n<p>La dimension géographique (position des sites, tracé du réseau) est gérée avec <strong>PostGIS</strong>, ce qui permet de croiser « quand » et « où » dans une même requête.</p>\n\n<h3>04 · Visualisation, alertes et détection d'anomalies</h3>\n<p>La donnée n'a de valeur que si elle éclaire une décision. Des tableaux de bord restituent l'état du réseau en un coup d'œil, et un moteur de règles couplé à des modèles détecte les situations à risque :</p>\n<ul>\n<li>surcharge de transformateur ou tension anormale ;</li>\n<li>chute de production solaire inexpliquée ;</li>\n<li>batterie défaillante ou perte de communication avec un site.</li>\n</ul>\n<p>Chaque anomalie déclenche une <strong>alerte actionnable</strong> — pas un simple voyant rouge, mais un message qui indique quoi vérifier et où.</p>\n\n<h3>En pratique — check-list</h3>\n<ul class=\"check\">\n<li>Horodater les mesures à la source, jamais à l'arrivée.</li>\n<li>Tamponner localement et rejouer de façon idempotente.</li>\n<li>Choisir un stockage time-series (hypertables + agrégats continus).</li>\n<li>Séparer collecte, ingestion et traitement par une file d'attente.</li>\n<li>Transformer chaque anomalie en action concrète pour le terrain.</li>\n</ul>\n\n<h3>Conclusion</h3>\n<p>Superviser un réseau électrique en temps réel, ce n'est pas empiler des capteurs : c'est construire une chaîne fiable du capteur au tableau de bord, capable d'encaisser les coupures sans perdre une mesure. C'est cette exigence de robustesse — plus que la technologie elle-même — qui distingue une démonstration d'un système sur lequel des équipes s'appuient chaque jour.</p>\n",
    },
    {
      slug: "assistant-vocal-multilingue-wolof",
      title: "Un assistant vocal multilingue (wolof, français) : l'IA au service d'un contexte réel",
      date: "2025-02-12",
      readTime: "11 min",
      excerpt: "Combiner Whisper, les LLMs et ElevenLabs pour fluidifier des échanges professionnels dans un contexte culturel local — au-delà de la démo.",
      content: "\n<p>Un assistant vocal n'a de valeur que s'il comprend réellement les personnes qui lui parlent — dans leur langue, avec leurs tournures. Pour ce projet, l'objectif était de fluidifier des échanges professionnels en <strong>wolof, français, anglais et arabe</strong>, dans un contexte où le français « scolaire » ne suffit pas.</p>\n<p>La tentation, avec les outils actuels, est de tout confier à un modèle unique. La réalité d'un produit fiable est plus nuancée : c'est une <strong>chaîne</strong> de composants spécialisés, chacun choisi pour ce qu'il fait de mieux.</p>\n\n<h3>01 · Comprendre : la transcription multilingue</h3>\n<p>La première étape convertit la parole en texte avec <strong>Whisper</strong>, robuste au bruit et au multilinguisme. Le défi n'est pas technique mais linguistique : les locuteurs pratiquent le <em>code-switching</em> — ils passent du wolof au français dans la même phrase. Le pipeline doit accepter cette réalité plutôt que de la « corriger ».</p>\n\n<h3>02 · Raisonner : intention et contexte</h3>\n<p>Le texte transcrit est interprété par un <strong>modèle de langage (LLM)</strong> dont le rôle est d'extraire l'intention et de formuler une réponse utile. Ici, le <em>prompt engineering</em> est décisif : on cadre le domaine métier, on fournit le contexte, et on impose des garde-fous contre les réponses inventées.</p>\n<h4>Ancrer les réponses</h4>\n<p>Un assistant utile ne « sait » pas tout : il s'appuie sur des sources maîtrisées (base de connaissances, données métier). Mieux vaut une réponse « je vérifie » qu'une affirmation fausse énoncée avec assurance.</p>\n\n<h3>03 · Répondre : une voix naturelle</h3>\n<p>La réponse textuelle est enfin vocalisée avec <strong>ElevenLabs</strong>, pour une synthèse fluide et agréable. Une voix naturelle change tout dans l'adoption : elle transforme un outil technique en interlocuteur crédible.</p>\n\n<h3>04 · Le vrai défi : le contexte culturel</h3>\n<p>La performance brute d'un modèle ne fait pas un bon produit. Ce qui compte, c'est l'adéquation au terrain :</p>\n<ul>\n<li>gérer le mélange des langues sans le pénaliser ;</li>\n<li>respecter les tournures et le registre de politesse locaux ;</li>\n<li>rester utile même avec un audio imparfait (réseau, micro).</li>\n</ul>\n\n<h3>En pratique — check-list</h3>\n<ul class=\"check\">\n<li>Décomposer en étapes spécialisées plutôt qu'un modèle « magique ».</li>\n<li>Assumer le code-switching au lieu de le corriger.</li>\n<li>Cadrer le LLM par le contexte métier et des garde-fous.</li>\n<li>Prévoir un repli clair quand la confiance est faible.</li>\n<li>Tester avec de vrais locuteurs, pas seulement des phrases modèles.</li>\n</ul>\n\n<h3>Conclusion</h3>\n<p>Ma conviction, illustrée par ce projet : l'IA n'est utile que si elle résout un problème réel dans un contexte donné. Un assistant vocal multilingue réussi n'est pas celui qui impressionne en démonstration, mais celui que les gens continuent d'utiliser parce qu'il les comprend vraiment.</p>\n",
    },
    {
      slug: "timescaledb-postgis-series-temporelles-geo",
      title: "TimescaleDB et PostGIS : des séries temporelles géolocalisées à grande échelle",
      date: "2025-01-20",
      readTime: "10 min",
      excerpt: "Stocker, agréger et interroger des millions de mesures horodatées et géolocalisées sans sacrifier les performances.",
      content: "\n<p>Quand chaque équipement émet des mesures en continu, une base relationnelle classique atteint vite ses limites : les tables grossissent, les index se dégradent, et les requêtes d'agrégation ralentissent. La solution n'est pas de « ranger » manuellement, mais d'utiliser des outils pensés pour le temps et l'espace : <strong>TimescaleDB</strong> et <strong>PostGIS</strong>, deux extensions de PostgreSQL.</p>\n\n<h3>01 · Hypertables : le partitionnement automatique</h3>\n<p>Une <strong>hypertable</strong> ressemble à une table normale, mais TimescaleDB la découpe en interne en <em>chunks</em> par intervalle de temps. Les écritures récentes restent rapides, les anciennes données ne ralentissent pas les nouvelles, et les requêtes ne balaient que les tranches concernées.</p>\n\n<h3>02 · Continuous aggregates : pré-calculer l'essentiel</h3>\n<p>Recalculer une moyenne horaire sur des millions de lignes à chaque affichage est un gaspillage. Les <strong>continuous aggregates</strong> maintiennent automatiquement des vues agrégées (par heure, par jour) mises à jour de façon incrémentale.</p>\n<ul>\n<li>tableaux de bord instantanés, même sur de longues périodes ;</li>\n<li>coût de calcul amorti au fil de l'eau plutôt qu'à la demande ;</li>\n<li>données brutes conservées pour l'analyse fine.</li>\n</ul>\n\n<h3>03 · PostGIS : la dimension spatiale</h3>\n<p>En ajoutant <strong>PostGIS</strong>, chaque site porte une position géographique. On peut alors interroger le temps <strong>et</strong> l'espace dans une même requête : « quelle est la production moyenne par heure des sites situés dans cette zone ? » devient simple et performant. Indispensable pour cartographier un réseau et raisonner par secteur.</p>\n\n<h3>04 · Rétention et compression : maîtriser les coûts</h3>\n<p>Le volume grandit chaque mois ; sans stratégie, la facture aussi. TimescaleDB permet de <strong>compresser</strong> automatiquement les données anciennes (souvent 10× moins d'espace) et d'appliquer des <strong>politiques de rétention</strong> pour archiver ou supprimer au-delà d'un certain âge.</p>\n\n<h3>En pratique — check-list</h3>\n<ul class=\"check\">\n<li>Utiliser des hypertables dès que la donnée est horodatée en continu.</li>\n<li>Créer des agrégats continus pour chaque granularité affichée.</li>\n<li>Croiser temps et espace avec PostGIS plutôt que côté application.</li>\n<li>Activer compression et rétention avant que le volume n'explose.</li>\n<li>Garder le brut pour l'analyse, servir l'agrégé pour l'affichage.</li>\n</ul>\n\n<h3>Conclusion</h3>\n<p>Bien stocker une série temporelle, c'est déjà résoudre la moitié du problème d'analyse. TimescaleDB et PostGIS transforment PostgreSQL en socle capable d'encaisser des millions de mesures géolocalisées tout en restant rapide — sans quitter l'écosystème SQL que les équipes maîtrisent déjà.</p>\n",
    },
    {
      slug: "pipelines-donnees-resilients-celery-rabbitmq",
      title: "Pipelines de données résilients : Celery, RabbitMQ et l'art de ne rien perdre",
      date: "2024-12-15",
      readTime: "9 min",
      excerpt: "Files d'attente, idempotence et reprise sur erreur : les patterns qui garantissent qu'aucune donnée ne se perd entre la collecte et l'exploitation.",
      content: "\n<p>Entre le capteur et le tableau de bord, une donnée traverse plusieurs étapes qui peuvent toutes échouer : réseau, parsing, base indisponible, pic de charge. La résilience ne s'improvise pas après coup — elle se conçoit dès l'architecture. C'est le rôle des files d'attente et des tâches asynchrones, ici avec <strong>Celery</strong> et <strong>RabbitMQ</strong>.</p>\n\n<h3>01 · Découpler avec une file d'attente</h3>\n<p>Plutôt que de traiter la donnée dans la foulée de sa réception (et de tout bloquer si une étape lente échoue), on la dépose dans une file. <strong>RabbitMQ</strong> conserve les messages, <strong>Celery</strong> les consomme à son rythme. La collecte n'est plus couplée au traitement : un pic ou une panne en aval ne fait pas perdre la donnée en amont.</p>\n\n<h3>02 · Idempotence : rejouer sans dupliquer</h3>\n<p>Dans un système distribué, un message peut être livré plus d'une fois. Une tâche <strong>idempotente</strong> produit le même résultat qu'elle soit exécutée une ou plusieurs fois — typiquement via un identifiant unique et un <em>upsert</em> plutôt qu'un <em>insert</em>. Sans idempotence, chaque reprise crée des doublons.</p>\n\n<h3>03 · Reprise sur erreur</h3>\n<p>Une tâche qui échoue ne doit ni tout bloquer, ni disparaître silencieusement :</p>\n<ul>\n<li><strong>retries</strong> automatiques avec <em>backoff</em> exponentiel pour les erreurs transitoires ;</li>\n<li><strong>dead-letter queue</strong> pour isoler les messages problématiques sans stopper le flux ;</li>\n<li>délais et limites de tentatives pour éviter les boucles infinies.</li>\n</ul>\n\n<h3>04 · Observabilité : voir les silences</h3>\n<p>Un pipeline qui « marche » est surtout un pipeline dont on ignore les problèmes. Il faut mesurer : messages en file, latence de traitement, taux d'échec, taille de la dead-letter. <strong>Sans observabilité, une panne se remarque quand il est déjà trop tard.</strong></p>\n\n<h3>En pratique — check-list</h3>\n<ul class=\"check\">\n<li>Découpler collecte et traitement par une file d'attente.</li>\n<li>Rendre chaque tâche idempotente (identifiant + upsert).</li>\n<li>Configurer retries, backoff et dead-letter queue.</li>\n<li>Surveiller la profondeur des files et le taux d'échec.</li>\n<li>Alerter sur l'anormal, pas seulement sur l'erreur franche.</li>\n</ul>\n\n<h3>Conclusion</h3>\n<p>Un pipeline de données résilient ne se reconnaît pas quand tout va bien, mais le jour où quelque chose casse : la donnée attend patiemment, se rejoue sans doublon, et l'équipe est prévenue à temps. C'est cette tranquillité opérationnelle qui distingue un prototype d'un système de production.</p>\n",
    },
    {
      slug: "detection-anomalies-machine-learning-energie",
      title: "Détecter les anomalies énergétiques avec le machine learning",
      date: "2024-11-18",
      readTime: "10 min",
      excerpt: "Surcharge de transformateur, chute de production, batterie défaillante : transformer des séries de mesures en alertes fiables et actionnables.",
      content: "\n<p>Détecter une anomalie est facile ; détecter la <strong>bonne</strong> anomalie sans noyer les équipes sous les fausses alertes, beaucoup moins. Sur un réseau électrique, une alerte ignorée est une alerte inutile — et trop de fausses alertes finissent toutes par être ignorées.</p>\n\n<h3>01 · Des mesures aux features</h3>\n<p>Un modèle ne raisonne pas sur des mesures brutes, mais sur des <strong>indicateurs</strong> construits à partir d'elles : tendance récente, écart à la saisonnalité, variation soudaine, corrélation entre équipements. La qualité de ces <em>features</em> pèse davantage que le choix de l'algorithme.</p>\n\n<h3>02 · Seuils métier ou détection ML ?</h3>\n<p>Tout ne mérite pas du machine learning. Un seuil métier simple (« tension au-delà de X ») est lisible, prévisible et suffisant dans bien des cas. Le ML apporte de la valeur quand le signal est <strong>contextuel</strong> : une même valeur peut être normale à midi et anormale la nuit.</p>\n<ul>\n<li><strong>Seuils</strong> : simples, explicables, faciles à ajuster ;</li>\n<li><strong>Détection d'anomalies</strong> : capte les écarts au comportement attendu ;</li>\n<li>souvent, la meilleure solution combine les deux.</li>\n</ul>\n\n<h3>03 · Réduire les faux positifs</h3>\n<p>Le vrai travail consiste à maximiser la détection réelle tout en réduisant drastiquement les fausses alertes : fenêtres de confirmation (l'anomalie doit persister), regroupement des alertes liées, et prise en compte du contexte (maintenance planifiée, météo). Une alerte crédible est une alerte qu'on traite.</p>\n\n<h3>04 · De l'alerte à l'action</h3>\n<p>Une bonne détection ne s'arrête pas au score : elle produit un message compréhensible pour ceux qui interviennent — <em>quel</em> équipement, <em>quel</em> symptôme probable, <em>quoi</em> vérifier en priorité. Le modèle sert la décision humaine, il ne la remplace pas.</p>\n\n<h3>En pratique — check-list</h3>\n<ul class=\"check\">\n<li>Investir dans les features avant l'algorithme.</li>\n<li>Commencer par des seuils, ajouter le ML là où le contexte compte.</li>\n<li>Confirmer les anomalies dans le temps pour filtrer le bruit.</li>\n<li>Mesurer le coût réel d'un faux positif et d'un faux négatif.</li>\n<li>Livrer une alerte actionnable, pas un simple score.</li>\n</ul>\n\n<h3>Conclusion</h3>\n<p>La leçon la plus utile de la détection d'anomalies n'est pas mathématique : c'est qu'un bon modèle transforme des données techniques en signaux clairs pour le terrain. Bien calibré, il devient un allié discret qui prévient au bon moment — et se fait oublier le reste du temps.</p>\n",
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
