import React from 'react';
import burguer from "./../assets/projects/burguer.jpeg";
import employment from "./../assets/projects/em.jpg";
import Projects from './Portfolio/Projects';
function ProjectsBack() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4  mt-10 mb-8">

<Projects
          image={burguer}
          link2="https://github.com/JoelSantos-JS/Backend-CodeBurguer"
          title="Backend CodeBurger"
          text="O projeto utiliza: JavaScript  Node,Yarn,Express,Nodemon,Sucrase,Sequelize,Bcrypt, Jwt,Yup,Postgres,Mongodb,Multer,Uuid,Prettier,Eslint."
        />
<Projects
          image={employment}
          link2="https://github.com/JoelSantos-JS/Backend-CodeBurguer"
          title="Backend CodeBurger"
          text="O projeto utiliza: Java and Spring boot."
        />
    </div>
  )
}

export default ProjectsBack