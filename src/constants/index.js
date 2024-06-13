import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import cpp from '../assets/tech/c++.jpeg';
import express from '../assets/tech/express.png'
import java from '../assets/tech/java.jpeg'
import sql from '../assets/tech/sql.png';
import tailwindcs from '../assets/tech/tailwind.jpeg'
import node from '../assets/tech/node.png'
import html5 from '../assets/tech/html.jpeg'
import post from '../assets/tech/pos.png'
import js from '../assets/tech/js.jpeg'
import vue from '../assets/tech/vue.png'
import python from '../assets/tech/python.png'
import vercel from '../assets/tech/vercel.png'

import du from "../assets/company/du.jpeg";
import dma from "../assets/company/dm.jpeg";
import simmi from "../assets/company/simmi.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html5,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: js,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcs,
  },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Postman",
    icon: post,
  },
  {
    name:"SQL",
    icon: sql
  },
  {
    name:"Vue",
    icon: vue
  },
  {
    name:"Python",
    icon: python
  },
  {
    name:"Vercel",
    icon: vercel
  }
];

const experiences = [
  {
    title: "Web developer",
    company_name: "Simmi Foundation",
    icon: simmi,
    iconBg: "#383E56",
    date: "October 2022 - December 2022",
    points: [
      "Reduced data processing time by 20 percent through optimized API management on crowdfunding website",
      "Improved the responsiveness of the website for enhanced user experience, leading to a 30 percent increase in user engagement",
      "Collaborated with a team of developers and gained hands-on experience with Git and Web Development practices.",
      "Recognized as the Top Intern",
    ],
  },
  {
    title: "Bsc (Hons.) Electronics",
    company_name: "Delhi University",
    icon: du,
    iconBg: "#383E56",
    date: "2020 - 2023",
    points: [
      "Actively pursued additional coursework in Computer Science , Data Science, Python, and Artificial Intelliegence.",
      "Worked as core member in college society. Within this role, I assumed diverse responsibilities such as coordinating events and enhancing the channels of communication between students and faculty",
      "Additionally, I had the opportunity to orchestrate a prominent Hackathon in partnership with Coding Blocks, which successfully drew the participation of more than 500 individuals.",
      "Awarded with All Rounder Award"
    ],
  },
  {
    title: "Intermediate & High School",
    company_name: "Dayawati Modi Academy",
    icon: dma,
    iconBg: "#E6DEDD",
    date: "2017-2020",
    points: [
      "Active participation in sports throughout school years highlighted a well-rounded approach to balancing academics and extracurricular activities.",
      "Achieved scores of 87% in 12th-grade and 92.6% in 10th-grade exams, demonstrating dedication to academic excellence.",
      "Competed in hockey at the national level for five consecutive years, showcasing commitment and skill in the sport.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Duoples proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Duoples does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Duoples optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-Commerce",
    description:
      "A dynamic web platform built with Next.js, SQL, and Django, offering user authentication, blogs, e-commerce functionalities, and profile management, collaboratively developed with a Django developer.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "red-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/mihika14/ecommerce",
  },
  {
    name: "Instructor Dashboard",
    description:
      "This App, enables seamless communication between instructors and students. Instructors can start meetings, upload notes/videos. Real-time interaction and content sharing enhance the learning experience.",
    tags: [
      {
        name: "WebRTC",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/mihika14/instructor-dashboard",
  },
  {
    name: "File Management App",
    description:
      "The application simplifies file management with secure uploads, storage, and downloads. Features include user authentication, multiple uploads, efficient storage, and seamless downloads.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Multer",
        color: "red-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/mihika14/File-App",
  },
];

export { services, technologies, experiences, testimonials, projects };
