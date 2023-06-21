//  icons
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

// skills images
import SkillImg1 from "./assets/img/skills/html.png";
import SkillImg5 from "./assets/img/skills/java.png";
import SkillImg2 from "./assets/img/skills/javascript.png";
import SkillImg4 from "./assets/img/skills/react.png";
import SkillImg6 from "./assets/img/skills/sql.png";
import SkillImg3 from "./assets/img/skills/typescript.png";

import github from "./assets/projects/23.gif";
import portfolio from "./assets/projects/port.gif";

import desafio from "./assets/projects/17.gif";
import burguer from "./assets/projects/burguer.jpeg";
import massas from "./assets/projects/massas.png";
import blog from "./assets/projects/sd.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiTwitter size={28} />,
    href: "https://twitter.com/LetoxyTv",
    color: "text-blue-500",
    colorHover: "hover:text-blue-900",
  },
  {
    icon: <FiGithub size={28} />,
    href: "https://github.com/JoelSantos-JS",
    color: "text-white",
    colorHover: "hover:text-gray-500",
  },
  {
    icon: <FiLinkedin size={28} />,
    href: "https://www.linkedin.com/in/joelsantos1/",
    color: "text-blue-500",
    colorHover: "hover:text-blue-900",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
];

export const back = [
  {
    title: "Backend Developer",
    content:
      "I have experience developing backends using Express, Node.js, Java Spring, and SQL databases such as MySQL and PostgreSQL.",
  },
];

export const sections = [
  {
    title: "Frontend Developer",
    content: [
      {
        image: blog,
        link1: "https://blog-rjdh5r2s6-joelsantos-js.vercel.app/",
        link2: "https://github.com/JoelSantos-JS/blog",
        title: "Blog",
        text: "O projeto utiliza: React, CSS, React Toastify e React-Icons.",
      },
      {
        image: burguer,
        link2: "https://github.com/JoelSantos-JS/Front-end-Code-burger",
        title: "CodeBurger",
        text: "O projeto utiliza: React, Tailwind CSS, React Scroll, React Router DOM e React-Icons.",
      },
      {
        image: portfolio,
        link1: "https://joel-new-portfolio.vercel.app/",
        link2: "https://github.com/JoelSantos-JS/new-Portfolio",
        title: "Portfolio",
        text: "O projeto utiliza: React, Tailwind CSS, React Scroll, React Router DOM e React-Icons.",
      },
      {
        image: massas,
        link1: "https://pj-full-js-massas-tuz2.vercel.app/",
        link2: "https://github.com/JoelSantos-JS/Pj-full---JsMassas.git",
        title: "JS-Massas",
        text: "O projeto utiliza: React, SCSS, Sanity e React-Icons.",
      },
      {
        image: desafio,
        link1: "https://desafio-front-end-psi.vercel.app/",
        link2: "https://github.com/JoelSantos-JS/Desafio-Front-End",
        title: "Desafio Front-end",
        text: "O projeto foi um desafio para uma vaga front-end e utiliza: HTML, CSS e JavaScript.",
      },
      {
        image: github,
        link1: "https://github-profile-10.vercel.app/",
        link2: "https://github.com/JoelSantos-JS/Github-Profile",
        title: "Github Search",
        text: "O projeto utiliza: React, Styled Components, Axios, React Router DOM e React-Icons.",
      },
    ],
  },
];


export const sectionsBack = [
  
  {
    title: "Backend Developer",
    content: [
      {
        image: burguer,
        link2: "https://github.com/JoelSantos-JS/Backend-CodeBurguer",
        title: "CodeBurger",
        text: "O projeto utiliza: JavaScript  Node,Yarn,Express,Nodemon,Sucrase,Sequelize,Bcrypt,Jwt,Yup,Postgres,Mongodb,Multer,Uuid,Prettier,Eslint"
      },
    ]
  }

]