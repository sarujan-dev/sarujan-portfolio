export const personalInfo = {
  name: "THANESWARAN SARUJAN",
  title: "Intern Software Engineer | Full Stack Developer",
  location: "Trincomalee, Sri Lanka",
  phone: "+94 77 677 2705",
  email: "sarujan.dev@gmail.com",
  github: "https://github.com/sarujan-dev",
  linkedin: "https://linkedin.com/in/thaneswaran-sarujan",
  summary: "Motivated HNDIT undergraduate at SLIATE with hands-on fullstack development experience in PHP, Laravel, and MySQL. Proven ability to build complex, production-grade applications featuring real-time GPS tracking, database-level location algorithms, role-based workflows, and automated scheduling systems."
};

export const projects = [
  {
    id: 1,
    title: "Mobility as a Service (MaaS) Web Platform",
    tagline: "Real-time vendor tracking & delivery order management system",
    description: "Developed a full-stack Mobility as a Service (MaaS) web platform that connects customers with mobile vendors (food trucks, service vehicles) through real-time GPS tracking. Features a 5-stage order management workflow, OTP delivery verification, real-time vendor-customer chat, and automated admin reporting.",
    techStack: ["PHP", "Laravel", "MySQL", "Google Maps API", "Groq AI", "Blade"],
    repoNote: "Private Repository (Access available upon request)"
  },
  {
    id: 2,
    title: "Mobility Health Care System",
    tagline: "Role-based healthcare access & emergency specialist ranking engine",
    description: "Architected and developed a full-stack, role-based healthcare web platform designed to connect patients directly with verified VP and VOG doctors while accelerating access during obstetric emergencies. Features an Emergency VOG Finder utilizing the Haversine distance formula at the SQL query level for real-time GPS specialist ranking, SLMC credential verification, and QR-code clinic check-ins.",
    techStack: ["Laravel 11", "PHP 8.2", "MySQL", "Tailwind CSS", "Leaflet Maps", "Blade"],
    repoNote: "Private Repository (Access available upon request)"
  },
  {
    id: 3,
    title: "Personal Developer Portfolio",
    tagline: "Modern, responsive portfolio built with React & Tailwind CSS",
    description: "Designed and developed a highly responsive, dark-themed personal portfolio to showcase my full-stack projects and technical skills. Built with a modular component architecture, featuring a modern UI, responsive grid layouts, and dynamic data rendering.",
    techStack: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    repoNote: "Public Repository (Available on GitHub)"
  }
];

export const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript", "React", "Blade", "Tailwind CSS"],
  backend: ["PHP", "Laravel"],
  database: ["MySQL"],
  tools: ["Git", "GitHub", "VS Code"]
};

export const education = {
  degree: "Higher National Diploma in Information Technology (HNDIT)",
  institution: "Sri Lanka Institute of Advanced Technological Education (SLIATE) – ATI Trincomalee",
  status: "In Progress"
};