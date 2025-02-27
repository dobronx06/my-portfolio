// Skills data organized by categories
const skills = {
    frontend: [
      {
        name: "HTML5",
        level: 90,
        icon: "html5-icon" // You can replace with actual icon paths or components
      },
      {
        name: "CSS3",
        level: 85,
        icon: "css3-icon"
      },
      {
        name: "JavaScript",
        level: 90,
        icon: "javascript-icon"
      },
      {
        name: "React",
        level: 85,
        icon: "react-icon"
      },
      {
        name: "TypeScript",
        level: 75,
        icon: "typescript-icon"
      },
      {
        name: "SASS/SCSS",
        level: 80,
        icon: "sass-icon"
      },
      {
        name: "Responsive Design",
        level: 90,
        icon: "responsive-icon"
      }
    ],
    backend: [
      {
        name: "Node.js",
        level: 70,
        icon: "nodejs-icon"
      },
      {
        name: "Express",
        level: 65,
        icon: "express-icon"
      },
      {
        name: "REST API",
        level: 75,
        icon: "api-icon"
      },
      {
        name: "MongoDB",
        level: 60,
        icon: "mongodb-icon"
      },
      {
        name: "PHP",
        level: 55,
        icon: "php-icon"
      }
    ],
    tools: [
      {
        name: "Git",
        level: 80,
        icon: "git-icon"
      },
      {
        name: "VS Code",
        level: 90,
        icon: "vscode-icon"
      },
      {
        name: "Webpack",
        level: 60,
        icon: "webpack-icon"
      },
      {
        name: "Jest",
        level: 65,
        icon: "jest-icon"
      },
      {
        name: "npm/yarn",
        level: 85,
        icon: "npm-icon"
      }
    ],
    design: [
      {
        name: "Figma",
        level: 75,
        icon: "figma-icon"
      },
      {
        name: "Adobe XD",
        level: 65,
        icon: "xd-icon"
      },
      {
        name: "UI/UX Design",
        level: 70,
        icon: "uiux-icon"
      },
      {
        name: "Photoshop",
        level: 60,
        icon: "photoshop-icon"
      }
    ],
    softSkills: [
      {
        name: "Travail d'équipe",
        nameEn: "Teamwork",
        level: 90,
        icon: "team-icon"
      },
      {
        name: "Communication",
        nameEn: "Communication",
        level: 85,
        icon: "communication-icon"
      },
      {
        name: "Gestion de projet",
        nameEn: "Project Management",
        level: 75,
        icon: "project-icon"
      },
      {
        name: "Résolution de problèmes",
        nameEn: "Problem Solving",
        level: 85,
        icon: "problem-icon"
      },
      {
        name: "Adaptabilité",
        nameEn: "Adaptability",
        level: 90,
        icon: "adaptability-icon"
      }
    ]
  };
  
  export const getAllSkills = () => {
    return skills;
  };
  
  export const getSkillsByCategory = (category) => {
    return skills[category] || [];
  };
  
  export const getAllCategories = () => {
    return Object.keys(skills);
  };
  
  export default skills;