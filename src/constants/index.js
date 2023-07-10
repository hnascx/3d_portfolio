import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  styledcomponents,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  git,
  figma,
  github2,
  meta,
  starbucks,
  tesla,
  shopify,
  todolist,
  timer
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Sólidos conhecimentos em HTML, CSS e Javascript",
    icon: backend,
  },
  {
    title: "Proeficiência em UI/UX",
    icon: mobile,
  },
  {
    title: "Adaptabilidade e aprendizado contínuo 🎯",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "styledcomponents",
    icon: styledcomponents,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github2,
  }
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "To do list",
    description:
      "Aplicação web desenvolvida para simplificar o registro e acompanhamento de tarefas do cotidiano.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "cssmodules",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/hnascx/todolist",
    website_link: "https://todolist.hnascx.dev"
  },
  {
    name: "Timer",
    description:
      "App voltado para o gerenciamento de tempo de forma eficiente. Permite definir intervalos de tempo para diferentes tarefas e atividades, aumentando a produtividade.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "react-hook-form",
        color: "blue-text-gradient",
      },
      {
        name: "zod",
        color: "orange-text-gradient",
      },
    ],
    image: timer,
    source_code_link: "https://github.com/hnascx/timer",
    website_link: "https://timer.hnascx.dev"
  },
];

export { services, technologies, experiences, testimonials, projects };