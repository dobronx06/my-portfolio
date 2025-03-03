// Skills data organized by categories
const skills = {
    frontend: [
      {
        name: "HTML5",
        level: 90,
        icon: "../../assets/images/html.svg"
      },
      {
        name: "CSS3",
        level: 85,
        icon: "../../assets/images/css.svg"
      },
      {
        name: "JavaScript",
        level: 90,
        icon: "../../assets/images/js.svg"
      },
      {
        name: "React",
        level: 85,
        icon: "../../assets/images/react.svg"
      },
      {
        name: "TypeScript",
        level: 75,
        icon: "../../assets/images/ts.svg"
      },
      {
        name: "Responsive Design",
        level: 90,
        icon: "../../assets/images/responsive.svg"
      }
    ],
    backend: [
      {
        name: "Node.js",
        level: 70,
        icon: "../../assets/images/nodejs.svg"
      },
      {
        name: "REST API",
        level: 75,
        icon: "../../assets/images/restAPI.svg"
      },
    ],
    tools: [
      {
        name: "GitHub",
        level: 80,
        icon: "../../assets/images/github.svg"
      },
      {
        name: "VS Code",
        level: 90,
        icon: "../../assets/images/vs.svg"
      },
      {
        name: "Visual Studio Microsoft",
        level: 85,
        icon: "../../assets/images/Mvs.svg"
      },
      {
        name: "npm/yarn",
        level: 85,
        icon: "../../assets/images/npm.svg"
      }
    ],
    design: [
      {
        name: "Figma",
        level: 75,
        icon: "../../assets/images/figma.svg"
      },
      {
        name: "UI/UX Design",
        level: 70,
        icon: "../../assets/images/ux.svg"
      }
    ],
    softSkills: [
      {
        name: "Travail d'équipe",
        nameEn: "Teamwork",
        level: 90,
        icon: "../../assets/images/team.svg"
      },
      {
        name: "Communication",
        nameEn: "Communication",
        level: 85,
        icon: "../../assets/images/com.svg"
      },
      {
        name: "Gestion de projet",
        nameEn: "Project Management",
        level: 75,
        icon: "../../assets/images/project.svg"
      },
      {
        name: "Résolution de problèmes",
        nameEn: "Problem Solving",
        level: 85,
        icon: "../../assets/images/problem.svg"
      },
      {
        name: "Adaptabilité",
        nameEn: "Adaptability",
        level: 90,
        icon: "../../assets/images/adaptation.svg"
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