import React from "react";
import Projects from "./Portfolio/Projects";

import github from "./../assets/projects/23.gif";
import portfolio from "./../assets/projects/port.gif";

import massas from "./../assets/projects/massas.png";
import desafio from "./../assets/projects/17.gif";
import burguer from "./../assets/projects/burguer.jpeg";
import blog from "./../assets/projects/sd.png";

function Project() {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4  mt-10">
        <Projects
          image={blog}
          link1="https://blog-rjdh5r2s6-joelsantos-js.vercel.app/"
          link2="https://github.com/JoelSantos-JS/blog"
          title="Blog"
          text="O projeto utiliza: React, css , React Toastfy e React-Icons."
        />
        <Projects
          image={burguer}
          link2="https://github.com/JoelSantos-JS/Front-end-Code-burger"
          title="CodeBurger"
          text="O projeto utiliza: React, TailwindCss, React-scroll,React-Router-DOM e React-Icons."
        />
        <Projects
          image={portfolio}
          link1="https://joel-new-portfolio.vercel.app/"
          link2="https://github.com/JoelSantos-JS/new-Portfolio"
          title="Portfolio"
          text="O projeto utiliza: React, TailwindCss, React-scroll,React-Router-DOM e React-Icons."
        />
        <Projects
          image={massas}
          link1="https://pj-full-js-massas-tuz2.vercel.app/"
          link2="https://github.com/JoelSantos-JS/Pj-full---JsMassas.git"
          title="JS-Massas"
          text="O projeto utiliza: React, Scss, Sanity, e React-Icons."
        />
        <Projects
          image={desafio}
          link1="https://desafio-front-end-psi.vercel.app/"
          link2="https://github.com/JoelSantos-JS/Desafio-Front-End"
          title="Desafio Front-end"
          text=" O projeto foi um desafio para um Vaga front-end ele utiliza: Html,Css,Javascript."
        />
        <Projects
          image={github}
          link1="https://github-profile-10.vercel.app/"
          link2="https://github.com/JoelSantos-JS/Github-Profile"
          title="Github Search"
          text=" O projeto utiliza: React, Styled Components, Axios, React-Router-DOM e React-Icons."
        />
      </div>
    </div>
  );
}

export default Project;
