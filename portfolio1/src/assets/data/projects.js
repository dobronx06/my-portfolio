// Mock projects data
const projects = [
    {
      id: 1,
      title: "Portfolio Personnel",
      description: "Portfolio moderne créé avec React, mettant en valeur mes compétences et projets avec une interface interactive et engageante.",
      descriptionEn: "Modern portfolio created with React, showcasing my skills and projects with an interactive and engaging interface.",
      thumbnail: "/assets/images/projects/portfolio.jpg",
      images: [
        "/assets/images/projects/portfolio-1.jpg",
        "/assets/images/projects/portfolio-2.jpg",
        "/assets/images/projects/portfolio-3.jpg",
      ],
      technologies: ["React", "JavaScript", "CSS3", "React Router"],
      category: "frontend",
      featured: true,
      demoUrl: "https://tombouchard.com",
      codeUrl: "https://github.com/tombouchard/portfolio",
      completionDate: "2025-02",
    },
    {
      id: 2,
      title: "Application de Suivi des Dépenses",
      description: "Application permettant aux utilisateurs de suivre leurs dépenses personnelles avec des visualisations de données et des rapports personnalisés.",
      descriptionEn: "Application allowing users to track their personal expenses with data visualizations and customized reports.",
      thumbnail: "/assets/images/projects/expense-tracker.jpg",
      images: [
        "/assets/images/projects/expense-tracker-1.jpg",
        "/assets/images/projects/expense-tracker-2.jpg",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      category: "fullstack",
      featured: true,
      demoUrl: "https://expense-tracker.tombouchard.com",
      codeUrl: "https://github.com/tombouchard/expense-tracker",
      completionDate: "2024-12",
    },
    {
      id: 3,
      title: "Site E-commerce",
      description: "Plateforme e-commerce complète avec panier d'achat, paiement sécurisé et gestion des commandes.",
      descriptionEn: "Complete e-commerce platform with shopping cart, secure payment, and order management.",
      thumbnail: "/assets/images/projects/e-commerce.jpg",
      images: [
        "/assets/images/projects/e-commerce-1.jpg",
        "/assets/images/projects/e-commerce-2.jpg",
        "/assets/images/projects/e-commerce-3.jpg",
      ],
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
      category: "fullstack",
      featured: true,
      demoUrl: "https://shop.tombouchard.com",
      codeUrl: "https://github.com/tombouchard/e-commerce",
      completionDate: "2024-10",
    },
    {
      id: 4,
      title: "Application Météo",
      description: "Application météo avec prévisions en temps réel et interfaces adaptatives selon les conditions météorologiques.",
      descriptionEn: "Weather app with real-time forecasts and adaptive interfaces based on weather conditions.",
      thumbnail: "/assets/images/projects/weather-app.jpg",
      images: [
        "/assets/images/projects/weather-app-1.jpg",
        "/assets/images/projects/weather-app-2.jpg",
      ],
      technologies: ["React", "OpenWeather API", "Geolocation API", "CSS3"],
      category: "frontend",
      featured: false,
      demoUrl: "https://weather.tombouchard.com",
      codeUrl: "https://github.com/tombouchard/weather-app",
      completionDate: "2024-08",
    },
    {
      id: 5,
      title: "Blog Personnel",
      description: "Blog avec système de gestion de contenu personnalisé, permettant de publier et gérer des articles facilement.",
      descriptionEn: "Blog with custom content management system, allowing easy publishing and management of articles.",
      thumbnail: "/assets/images/projects/blog.jpg",
      images: [
        "/assets/images/projects/blog-1.jpg",
        "/assets/images/projects/blog-2.jpg",
      ],
      technologies: ["React", "Next.js", "MDX", "Tailwind CSS"],
      category: "frontend",
      featured: false,
      demoUrl: "https://blog.tombouchard.com",
      codeUrl: "https://github.com/tombouchard/blog",
      completionDate: "2024-06",
    },
    {
      id: 6,
      title: "Jeu de Memory",
      description: "Jeu de mémoire interactif avec différents niveaux de difficulté et suivi des scores.",
      descriptionEn: "Interactive memory game with different difficulty levels and score tracking.",
      thumbnail: "/assets/images/projects/memory-game.jpg",
      images: [
        "/assets/images/projects/memory-game-1.jpg",
        "/assets/images/projects/memory-game-2.jpg",
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
      category: "frontend",
      featured: false,
      demoUrl: "https://memory.tombouchard.com",
      codeUrl: "https://github.com/tombouchard/memory-game",
      completionDate: "2024-04",
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