// Mock projects data
const projects = [
  {
    id: 1,
    title: "MyRpg",
    description: "Le MyRpg est une tentative de création d'un jeu de rôle, c'est un projet Epitech réalisé par un groupe de 4-5 développeurs. Nous avons choisi d'aller au-delà de la limite 2D donnée dans le projet et avons réalisé deux parties dans notre jeu, avec un système similaire à Doom. Ce projet visait à synthétiser nos compétences en C pour la première année dans un projet graphique.",
    descriptionEn: "The MyRpg is an attempt at making a RolePlay Game, it's an Epitech project completed by a group of 4-5 devs. We chose to go further than the 2D limit given in the project and did two parts in our game, with a Doom-like system. This project aimed to synthesize our C competence for the first year in a graphical project.",
    thumbnail: "",
    images: [
    ],
    technologies: ["C", "Graphics", "Game Development", "CSFML"],
    category: "game",
    featured: true,
    demoUrl: "",
    codeUrl: "https://github.com/dobronx06/myrpg",
    completionDate: "2024-05",
  },
  {
    id: 2,
    title: "Project_Moicano",
    description: "Un premier essai d'automatisation des transactions. Ce bot synchronise les données de plusieurs API et repère les tokens les plus prometteurs. Il récupère ensuite tous les tokens prometteurs dans un serveur Discord avec les meilleurs mis en évidence. J'ai laissé le projet à ce stade, mais j'essaie de trouver le temps d'implémenter un scraper pour calculer les scores des médias sociaux.",
    descriptionEn: "A first try at automating trades. This bot synchronizes data from multiple APIs and retrieves the most promising tokens. It then displays all the promising tokens in a Discord server with the best ones highlighted. I've currently left the project at that stage but I'm trying to find time to implement a scraper to calculate social media scores.",
    thumbnail: "",
    images: [
    ],
    technologies: ["Python", "Trading", "Discord", "API Integration"],
    category: "backend",
    featured: true,
    demoUrl: "",
    codeUrl: "https://github.com/dobronx06/project_moicano",
    completionDate: "2024-08",
  },
  {
    id: 3,
    title: "Portfolio Personnel",
    description: "Portfolio moderne créé avec React, mettant en valeur mes compétences et projets avec une interface interactive et engageante. Ce projet m'a permis d'apprendre React en pratique et de perfectionner mes compétences en développement frontend.",
    descriptionEn: "Modern portfolio created with React, showcasing my skills and projects with an interactive and engaging interface. This project allowed me to learn React in practice and improve my frontend development skills.",
    thumbnail: "",
    images: [
    ],
    technologies: ["React", "JavaScript", "CSS3", "React Router"],
    category: "frontend",
    featured: true,
    demoUrl: "https://portfolio.example.com",
    codeUrl: "https://github.com/yourusername/portfolio",
    completionDate: "2025-02",
  },
  {
    id: 4,
    title: "Site Vitrine EdgeNiche",
    description: "Conception d'une page web one-page pour la société EdgeNiche utilisant Next.js. Le site présente les services de l'entreprise avec une interface moderne, réactive et optimisée pour le SEO, tout en offrant une expérience utilisateur fluide.",
    descriptionEn: "Design of a one-page website for EdgeNiche company using Next.js. The site presents the company's services with a modern, responsive interface optimized for SEO, while offering a smooth user experience.",
    thumbnail: "",
    images: [
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "SEO", "Responsive Design"],
    category: "frontend",
    featured: true,
    demoUrl: "https://edgeniche.com",
    codeUrl: "https://github.com/yourusername/edgeniche-website",
    completionDate: "2024-11",
  },
  {
    id: 5,
    title: "Agent IA Correcteur de Code",
    description: "Développement d'un agent d'IA pour la correction de code, spécialisé dans la détection et la correction des erreurs dans le code source. Cet outil utilise des modèles d'apprentissage automatique pour analyser le code et suggérer des améliorations en temps réel.",
    descriptionEn: "Development of an AI agent for code correction, specialized in detecting and fixing errors in source code. This tool uses machine learning models to analyze code and suggest improvements in real-time.",
    thumbnail: "",
    images: [
    ],
    technologies: ["Python", "Machine Learning", "NLP", "API Integration"],
    category: "ai",
    featured: true,
    demoUrl: "https://code-corrector.example.com",
    codeUrl: "https://github.com/yourusername/ai-code-corrector",
    completionDate: "2025-01",
  },
  {
    id: 6,
    title: "Application Météo",
    description: "Application météo avec prévisions en temps réel et interfaces adaptatives selon les conditions météorologiques. Utilisation d'API externes pour récupérer les données météorologiques précises.",
    descriptionEn: "Weather app with real-time forecasts and adaptive interfaces based on weather conditions. Uses external APIs to retrieve accurate weather data.",
    thumbnail: "",
    images: [
    ],
    technologies: ["React", "OpenWeather API", "Geolocation API", "CSS3"],
    category: "frontend",
    featured: false,
    demoUrl: "https://weather.example.com",
    codeUrl: "https://github.com/yourusername/weather-app",
    completionDate: "2024-09",
  },
  {
    id: 7,
    title: "Jeu de Memory",
    description: "Jeu de mémoire interactif avec différents niveaux de difficulté et suivi des scores. Projet développé pour pratiquer les compétences en JavaScript et la manipulation du DOM.",
    descriptionEn: "Interactive memory game with different difficulty levels and score tracking. Project developed to practice JavaScript skills and DOM manipulation.",
    thumbnail: "",
    images: [
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    category: "frontend",
    featured: false,
    demoUrl: "https://memory.example.com",
    codeUrl: "https://github.com/yourusername/memory-game",
    completionDate: "2024-07",
  }
];

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getAllProjects = () => {
  return projects;
};

export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};

export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export default projects;