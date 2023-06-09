function Projects({ image, link1, link2, text, title }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="shadow-lg opacity-2 shadow-[#040c16] group container rounded-md flex flex-col justify-center  items-center mx-auto container-div"
      >
        <div></div>
        <div className="opacity-0 group-hover:opacity-100 ">
          <span className="text-2xl font-bold text-center text-white tracking-wider mt- ">
            {title}
          </span>

          <div className="pt-8 text-center">
            {link1 && (
              <a href={link1} target="_blank" rel="noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold text-lg ">
                  Demo
                </button>
              </a>
            )}
            <a href={link2} target="_blank" rel="noreferrer">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1B1F39]  text-white font-bold text-lg ">
                Code
              </button>
            </a>
          </div>

          <div className="pt-5 text-center flex flex-col items-center text-sm  gap-2    "></div>
        </div>
        <div className="text-center mt-8 opacity-0 py-2 px-8  rounded group-hover:opacity-100 bg-[#1B1F39] ">
          <p className="text-lg text-zinc-50">{text}</p>
        </div>
      </div>
    </>
  );
}

export default Projects;
