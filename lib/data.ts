import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../public/corpcomment.png";
import rmtdevImg from "../public/rmtdev.png";
import wordanalyticsImg from "../public/wordanalytics.png";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    demoLink: "https://www.google.com/",
    githubCode: "https://github.com/MinhNguyen5199",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    demoLink: "https://www.google.com/",
    githubCode: "https://github.com/MinhNguyen5199",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    demoLink: "https://www.google.com/",
    githubCode: "https://github.com/MinhNguyen5199",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
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
        name: 'AWS',
        icon: require('./skills/aws.svg'),
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