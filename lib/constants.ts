export const siteConfig = {
  name: "Vo Huu Nhan",
  description:
    "Software Developer specializing in React.js, Next.js, TypeScript, Node.js, and modern web technologies.",

  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Education",
      href: "/education",
    },
    {
      title: "Skills",
      href: "/skills",
    },
    {
      title: "Experience",
      href: "/experience",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Certificates",
      href: "/certificates",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/NhanVo288",
    linkedin: "https://linkedin.com/in/huu-nhan-vo-bab5a11b0",
  },
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    title: "Frontend Developer Intern",
    company: "SR GROUP LTD",
    location: "Ho Chi Minh City, Vietnam",
    startDate: "May 2025",
    endDate: "Nov 2025",

    description: [
      "Developed and maintained modern web applications using React.js.",
      "Converted Figma designs into responsive pixel-perfect interfaces.",
      "Integrated RESTful APIs with frontend applications.",
      "Collaborated with designers, backend developers, and QA teams.",
      "Implemented multilingual support (i18n) for Korean and Vietnamese.",
    ],

    technologies: [
      "React",
      "JavaScript",
      "REST API",
      "Tailwind CSS",
      "Git",
      "i18next",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "iMovie",

    description:
      "Production-grade movie streaming platform built with Next.js 16, React 19, TypeScript, Cloudflare Workers, and TMDB API.",

    image: "/public/1.png",

    tags: ["Next.js", "TypeScript", "Cloudflare", "TMDB", "TanStack Query"],

    link: "https://imovie.dpdns.org/",

    repo: "https://github.com/NhanVo288",
  },
  {
    title: "Social Downloader",

    description:
      "A media downloader (TikTok, X, Instagram, Facebook, YouTube) ",

    image: "/public/4.png",

    tags: ["React", " Next.js", "TypeScript", "Tailwind"],

    link: "https://socialdownloader.dpdns.org",

    repo: "https://github.com/NhanVo288/social-downloader",
  },
  {
    title: "RealTimeChat",

    description:
      "A full-stack real-time messaging platform using React, Express, MongoDB, Socket.IO, Zustand, and JWT authentication.",

    image: "/public/2.png",

    tags: ["React", "Express", "MongoDB", "Socket.IO", "Zustand", "JWT"],

    link: "https://realtimechat-7oar.onrender.com",

    repo: "https://github.com/NhanVo288/RealTimeChat",
  },
  {
    title: "Web Ecommerce",

    description:
      "Full-featured e-commerce platform with Google OAuth, Stripe, PayPal, admin dashboard, Cloudinary uploads, and responsive UI.",

    image: "/public/3.png",

    tags: ["React", "Node.js", "MongoDB", "Redux", "MUI", "Express"],

    link: "https://ecommerce-shop-ochre.vercel.app/",

    repo: "https://github.com/NhanVo288",
  },
];

export type Education = {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements: string[];
};

export const education: Education[] = [
  {
    degree: "Engineer",

    field: "Information Technology",

    institution: "SaiGon University",

    location: "Ho Chi Minh City, Vietnam",

    startDate: "Sep 2021",

    endDate: "Jun 2026",

    achievements: [
      "Engineer of Information Technology",
      "TOEIC 685 (Listening & Reading)",
    ],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  id?: string;
  url?: string;
  pdf?: string;
};

export const certificates: Certificate[] = [
  {
    title: "TOEIC 685",
    issuer: "IIG Vietnam",
    date: "2026",
  },
];

export type Skill = {
  name: string;
  level: number; // 1-10
  category: "technical" | "software" | "soft" | "language";
};

export const skills: Skill[] = [
  // Languages

  { name: 'JavaScript', level: 9, category: 'technical' },
  { name: 'TypeScript', level: 8, category: 'technical' },
  { name: 'HTML', level: 9, category: 'technical' },
  { name: 'CSS', level: 8, category: 'technical' },

  // Frontend

  { name: 'React.js', level: 9, category: 'software' },
  { name: 'Next.js', level: 8, category: 'software' },
  { name: 'Tailwind CSS', level: 9, category: 'software' },
  { name: 'Material UI', level: 8, category: 'software' },

  { name: 'Redux Toolkit', level: 8, category: 'software' },
  { name: 'Zustand', level: 8, category: 'software' },
  { name: 'TanStack Query', level: 8, category: 'software' },

  // Backend

  { name: 'Node.js', level: 8, category: 'software' },
  { name: 'Express.js', level: 8, category: 'software' },
  { name: 'REST APIs', level: 9, category: 'software' },

  { name: 'MongoDB', level: 8, category: 'software' },
  { name: 'PostgreSQL', level: 7, category: 'software' },
  { name: 'Prisma ORM', level: 7, category: 'software' },

  // Tools

  { name: 'Git/GitHub', level: 9, category: 'software' },
  { name: 'Postman', level: 8, category: 'software' },
  { name: 'Cloudinary', level: 8, category: 'software' },
  { name: 'Socket.IO', level: 8, category: 'software' },

  // Soft skills

  { name: 'Problem Solving', level: 9, category: 'soft' },
  { name: 'Teamwork', level: 9, category: 'soft' },
  { name: 'Communication', level: 8, category: 'soft' },
  { name: 'Adaptability', level: 9, category: 'soft' },

  // Languages

  { name: 'English (TOEIC 685)', level: 7, category: 'language' },
  { name: 'Vietnamese', level: 10, category: 'language' },
];


