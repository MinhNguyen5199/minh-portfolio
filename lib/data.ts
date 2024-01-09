import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../public/corpcomment.png";
import rmtdevImg from "../public/rmtdev.png";
import wordanalyticsImg from "../public/rmtdev.png";
import portfolio from "../public/portfolio.png";
import ecommerce from "../public/ecommerce.png";

export const info =[
  {
    1: "Minh Nguyen",
    2: "NAME: ",
  },
  {
    1: "05 January 1999",
    2: "DATE OF BIRTH: ",
  },
  {
    1: "VietNam",
    2: "NATIONALITY: ",
  },
  {
    1: "Calgary, AB, Canada",
    2: "ADDRESS: ",
  },
  {
    1: "587-500-4508",
    2: "PHONE: ",
  },
  {
    1: "hoangminhabc11@gmail.com",
    2: "EMAIL: ",
  },
] as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated SAIT",
    location: "Calgary, Alberta",
    description:
      "After college, I focus on personal and professional development, enhancing my coding skills through self-directed learning and creating some of my personal projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-stack Developer",
    location: "Self project",
    description:
      "Personal ecommerce website. I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and any database. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Blog website",
    description:
      "Currently freelancing and open to exciting full-time opportunities. Explore my coding journey and tech insights here!",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Personal Portfolio Website",
    description:
    "I have crafted a simple yet visually appealing website that highlights my background, skills, and projects. This hands-on experience represents the foundational steps in my coding journey, enabling me to demonstrate my capabilities and share the progression of my skills and accomplishments.",
    demoLink: "https://www.google.com/",
    githubCode: "https://github.com/MinhNguyen5199",
    tags: ["React", "Next.js", "Framer Motion", "Tailwind", "TypeScript", "Email"],
    imageUrl: portfolio,
  },
  {
    title: "E-commerce webiste",
    description:
    "As the sole full-stack developer, I handle all features such as CRUD operations, pagination, sorting, filtering, search, authentication, authorization, payment integration, advanced image uploading, and various other sophisticated features.",
    demoLink: "http://20.241.166.200/",
    githubCode: "https://github.com/MinhNguyen5199/ecommerce",
    tags: ["TypeScript", "Next.js", "Tailwind", "Prisma", "PostgreSQL", "GraphQL", "Apollo", "Docker", "Kubernetes", "Pothos", "Clodinary", "Stripe"],
    imageUrl: ecommerce,
  },
  {
    title: "Blog website",
    description:
      "Discover my coding journey in this concise blog—a showcase of achievements, methodologies, and digital explorations. Each post offers a snapshot of evolving proficiency and a commitment to continuous learning in the dynamic digital landscape.",
    demoLink: "https://minh-blog.vercel.app/",
    githubCode: "https://github.com/MinhNguyen5199/minh-blog",
      tags: ["React", "Next.js", "TypeScript"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  {
    type: "Front-End",
    list: [
      {
        name: 'HTML',
        icon: require('./skills/html.svg'),
      },
      {
        name: 'CSS',
        icon: require('./skills/css.svg'),
      },
      {
        name: 'JavaScript',
        icon: require('./skills/javascript.svg'),
      },
      {
        name: 'TypeScript',
        icon: require('./skills/typescript.svg'),
      },
      {
        name: 'React',
        icon: require('./skills/react.svg'),
      },
      {
        name: 'Redux',
        icon: require('./skills/redux.svg'),
      },
      {
        name: 'Next.js',
        icon: require('./skills/nextjs.svg'),
      },
      {
        name: 'Tailwind',
        icon: require('./skills/tailwindcss.svg'),
      },
      {
        name: 'Framer Motion',
        icon: require('./skills/framer.svg'),
      },
    ],
  },
  {
    type: "Back-End",
    list: [
      {
        name: 'Node.js',
        icon: require('./skills/nodejs.svg'),
      },
      {
        name: 'Express',
        icon: require('./skills/express.svg'),
      },
      {
        name: 'Python',
        icon: require('./skills/python.svg'),
      },
      {
        name: 'java',
        icon: require('./skills/java.svg'),
      },
    ],
  },
  {
    type: "Database and HostPlatform",
    list: [
      {
        name: 'MongoDB',
        icon: require('./skills/mongodb.svg'),
      },
      {
        name: 'PostgreSQL',
        icon: require('./skills/postgresql.svg'),
      },
      {
        name: 'OracleSql',
        icon: require('./skills/oraclesql.svg'),
      },
      {
        name: 'Prisma',
        icon: require('./skills/prisma.svg'),
      },
      {
        name: 'GraphQL',
        icon: require('./skills/graphql.svg'),
      },
      {
        name: 'Apollo',
        icon: require('./skills/apollo.svg'),
      },
      {
        name: 'Firebase',
        icon: require('./skills/firebase.svg'),
      },
      {
        name: 'Heroku',
        icon: require('./skills/heroku.svg'),
      },
      {
        name: 'Github pages',
        icon: require('./skills/github.svg'),
      },
      {
        name: 'Vercel',
        icon: require('./skills/vercel.svg'),
      },
      {
        name: 'Pothos',
        icon: require('./skills/pothos.svg'),
      },
    ],
  },
  {
    type: 'Test, Project management and containerization',
    list: [
      {
        name: 'Mocha',
        icon: require('./skills/mocha.svg'),
      },
      {
        name: 'GIT',
        icon: require('./skills/git.svg'),
      },
      {
        name: 'Docker',
        icon: require('./skills/docker.svg'),
      },
      {
        name: 'Kubernetes',
        icon: require('./skills/kubernetes.svg'),
      },
    ]
  }
] as const;