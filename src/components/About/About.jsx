import React from "react";

function About() {
  return (
    <section className="section bg-primary " id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <h1 className="text-center text-5xl font-bold">About</h1>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full xl:w-1/2">
            <div className="flex ">
              <div className="w-1 mr-5 md:h-62 bg-gradient-to-br from-blue-500 via-orange-500 to-red-500 " />
              <div className="flex flex-col items-center">
                <h1 className="text-center text-3xl font-bold text-orange-600">
                  Hello! I'm Joel Santos
                </h1>
                <h2 className="text-2xl lg:text-2xl font-bold lg:font-extrabold">
                  Backend developer and future full stack developer, I'm
                  passionate about technology. Enthusiast in Web Hacking, I
                  enjoy many games, anime, manga, and sports. I do Bodybuilding,
                  they are my activities in my spare time. I am currently
                  studying English and Programming as a self-taught.
                </h2>
                <button className="bg-orange-500 text-2xl text-white border-2 text-center  items-center border-orange-500 rounded-full p-[20px] w-[280px] 2 mt-4">
                  <a href="https://joelsantos-portfolio.netlify.app/assets/Curr%C3%ADculo%20profissional%20da%20TI%20preto%20e%20cinza.pdf">
                    Download CV{" "}
                  </a>{" "}
                </button>
              </div>
              <div className="w-1 ml-5 md:h-62 bg-gradient-to-br from-blue-500 via-orange-500 to-red-500 " />

              <p className="mb-4 text-accent text-center sm:text-center"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
