// Mock experiences data
const experiences = [
    {
      id: 1,
      title: "Développeur Frontend",
      company: "Tech Solutions",
      location: "Paris, France",
      startDate: "2023-09",
      endDate: "Present",
      description: [
        "Développement d'applications web React performantes et responsives",
        "Collaboration avec l'équipe design pour implémenter des interfaces utilisateur intuitives",
        "Optimisation des performances et de l'accessibilité des applications",
        "Mise en place de tests unitaires et d'intégration"
      ],
      descriptionEn: [
        "Development of performant and responsive React web applications",
        "Collaboration with the design team to implement intuitive user interfaces",
        "Optimization of application performance and accessibility",
        "Implementation of unit and integration tests"
      ],
      technologies: ["React", "JavaScript", "TypeScript", "CSS3", "Jest"]
    },
    {
      id: 2,
      title: "Développeur Web Junior",
      company: "Digital Agency",
      location: "Lyon, France",
      startDate: "2022-06",
      endDate: "2023-08",
      description: [
        "Création de sites web dynamiques pour divers clients",
        "Intégration de designs responsive en HTML/CSS/JavaScript",
        "Développement de fonctionnalités interactives et animations",
        "Maintenance et mise à jour de projets existants"
      ],
      descriptionEn: [
        "Creation of dynamic websites for various clients",
        "Integration of responsive designs in HTML/CSS/JavaScript",
        "Development of interactive features and animations",
        "Maintenance and updating of existing projects"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP"]
    },
    {
      id: 3,
      title: "Stage en Développement Web",
      company: "StartupLab",
      location: "Bordeaux, France",
      startDate: "2022-01",
      endDate: "2022-05",
      description: [
        "Participation au développement d'une application web pour une startup innovante",
        "Création de composants d'interface utilisateur réutilisables",
        "Collaboration avec l'équipe produit pour définir les fonctionnalités",
        "Apprentissage des méthodes agiles et du développement itératif"
      ],
      descriptionEn: [
        "Participation in web application development for an innovative startup",
        "Creation of reusable user interface components",
        "Collaboration with the product team to define features",
        "Learning agile methods and iterative development"
      ],
      technologies: ["React", "JavaScript", "Bootstrap", "Git"]
    }
  ];
  
  // Education data
  const education = [
    {
      id: 1,
      degree: "Master en Développement Web",
      institution: "École du Numérique",
      location: "Paris, France",
      startDate: "2020-09",
      endDate: "2022-06",
      description: [
        "Spécialisation en développement frontend",
        "Projets pratiques en équipe sur des cas réels",
        "Apprentissage des technologies web modernes",
        "Mémoire sur l'optimisation des interfaces utilisateur"
      ],
      descriptionEn: [
        "Specialization in frontend development",
        "Practical team projects on real-world cases",
        "Learning modern web technologies",
        "Thesis on user interface optimization"
      ]
    },
    {
      id: 2,
      degree: "Licence en Informatique",
      institution: "Université de Lyon",
      location: "Lyon, France",
      startDate: "2017-09",
      endDate: "2020-06",
      description: [
        "Fondamentaux de la programmation et des algorithmes",
        "Introduction aux bases de données et réseaux",
        "Apprentissage de multiples langages de programmation",
        "Projet de fin d'études sur le développement d'applications web"
      ],
      descriptionEn: [
        "Fundamentals of programming and algorithms",
        "Introduction to databases and networks",
        "Learning multiple programming languages",
        "Final year project on web application development"
      ]
    }
  ];
  
  export const getAllExperiences = () => {
    return experiences;
  };
  
  export const getAllEducation = () => {
    return education;
  };
  
  export const getExperienceById = (id) => {
    return experiences.find(exp => exp.id === parseInt(id));
  };
  
  export const getEducationById = (id) => {
    return education.find(edu => edu.id === parseInt(id));
  };
  
  export default {
    experiences,
    education
  };