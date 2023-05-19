//  icons
import { FiYoutube, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

// skills images
import SkillImg1 from "./assets/img/skills/html.png";
import SkillImg2 from "./assets/img/skills/javascript.png";
import SkillImg3 from "./assets/img/skills/typescript.png";
import SkillImg4 from "./assets/img/skills/react.png";
import SkillImg5 from "./assets/img/skills/java.png";
import SkillImg6 from "./assets/img/skills/sql.png";

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

export const sections = [

  {
    title: "Backend Developer",
    content:
      "I have experience developing backends using Express, Node.js, Java Spring, and SQL databases such as MySQL and PostgreSQL.",
  },
  {
    title: "Frontend Developer",
    content:
      "I am proficient in HTML, CSS, JavaScript, React, and TypeScript and have experience developing responsive and user-friendly web applications.",
  },
];