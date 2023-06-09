import { useState } from "react";

import { sections } from "../Data";
import { back } from "../Data";
import Project from "./Project";
function Accordion() {
  const [active, setActive] = useState(null);

  const toggleAccordion = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <div className="w-full mx-auto ">
      <div>
        {back.map((section, index) => (
          <div className="mb-2 " key={index}>
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full  h-16 py-2 px-4 font-mediu text-left bg-blue-800 text-white text-xl hover:bg-gray-800 focus:outline-none focus:bg-gray-700"
            >
              <span>{section.title}</span>
              <span>{active === index ? "+" : "-"}</span>
            </button>

            {active === index && (
              <p className="flex flex-col justify-center items-center text-white  text-2xl">
                {section.content}
              </p>
            )}
          </div>
        ))}
      </div>

      <div>
        {sections.map((section, index) => (
          <div className="mb-2 " key={index}>
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full  h-16 py-2 px-4 font-mediu text-left bg-blue-800 text-white text-xl hover:bg-gray-800 focus:outline-none focus:bg-gray-700"
            >
              <span>{section.title}</span>
              <span>{active === index ? "+" : "-"}</span>
            </button>

            {active === index && <Project />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
