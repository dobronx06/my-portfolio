// Mock experiences data
const experiences = [
  {
    id: 1,
    title: "Stage de Développement Gaming",
    company: "Selesis Studios",
    location: "Saint-Cyprien, France",
    startDate: "2019-12",
    endDate: "2019-12",
    description: [
      "Apprentissage du développement de scénes de jeux vidéos pour ordinateurs",
      "Collaboration avec l'équipe de développement pour la création de jeux",
      "Découverte des outils et technologies utilisés dans l'industrie du jeu vidéo",
      "Découverte du langage de programmation C# et du moteur de jeu Unity"
    ],
    descriptionEn: [
      "Learning video game scene development for computers",
      "Collaboration with the development team to create games",
      "Discovery of tools and technologies used in the video game industry",
      "Discovery of the C# programming language and the Unity game engine"
    ],
    technologies: ["C#", "Unity", "Mixamo", "Game Development"]
  },
  {
    id: 2,
    title: "Stage en Développement Logiciel",
    company: "Elloha",
    location: "France",
    startDate: "2024-07",
    endDate: "2024-12",
    description: [
      "Travail sur divers projets de solutions technologiques de voyage",
      "Développement backend en C# pour l'intégration de systèmes",
      "Intégration frontend en HTML/CSS",
      "Acquisition d'une expérience pratique en développement logiciel"
    ],
    descriptionEn: [
      "Working on various travel technology solution projects",
      "Backend development in C# for system integration",
      "Frontend integration in HTML/CSS",
      "Gaining practical experience in software development"
    ],
    technologies: ["C#", "HTML", "CSS", "Backend Integration", "Frontend Development"]
  },
  {
    id: 3,
    title: "Étudiant en Deuxième Année",
    company: "Epitech Montpellier",
    location: "Montpellier, France",
    startDate: "2025-01",
    endDate: "present",
    description: [
      "Poursuite des études en informatique après une maîtrise de Python, C, C# et HTML/CSS",
      "Apprentissage du C++",
      "Exploration des technologies web modernes comme React",
      "Intérêt pour les modèles d'IA, les agents IA, les cryptomonnaies et les technologies d'avenir"
    ],
    descriptionEn: [
      "Continuing computer science studies after mastering Python, C, C# and HTML/CSS",
      "Learning C++",
      "Exploring modern web technologies like React",
      "Interest in AI models, AI agents, cryptocurrencies, and future technologies"
    ],
    technologies: ["C++", "Python", "React", "AI", "Cryptocurrency"]
  }
];

// Education data
const education = [
  {
    id: 1,
    degree: "Baccalauréat avec mention",
    institution: "Lycée Notre-Dame de Bonsecours",
    location: "Perpignan, France",
    startDate: "2022-09",
    endDate: "2023-06",
    description: [
      "Obtention du Baccalauréat avec mention en 2023",
      "Formation générale avec focus sur les sciences",
      "Préparation aux études supérieures en informatique",
      "Développement de compétences analytiques et logiques"
    ],
    descriptionEn: [
      "Obtained Baccalaureate with honors in 2023",
      "General education with focus on sciences",
      "Preparation for higher education in computer science",
      "Development of analytical and logical skills"
    ]
  },
  {
    id: 2,
    degree: "Formation en Informatique",
    institution: "Epitech Montpellier",
    location: "Montpellier, France",
    startDate: "2023-09",
    endDate: "present",
    description: [
      "Programme intensif en développement informatique",
      "Apprentissage par projets pratiques",
      "Maîtrise des langages de programmation: C, Python, C#, C++",
      "Projets par équipe, en duo et individuels"
    ],
    descriptionEn: [
      "Intensive computer development program",
      "Learning through practical projects",
      "Mastery of programming languages: C, Python, C#, C++",
      "Team, pair, and individual projects"
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

const experiencesData = {
  experiences,
  education
};

export default experiencesData;
