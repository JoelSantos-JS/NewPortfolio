import { InView } from "react-intersection-observer";
import { inViewHandle } from "../../AnimationHandle.js";

import { motion, useAnimation } from "framer-motion";
import Accordion from "../Accordion";

function Portfolio() {
  const animation = useAnimation();

  return (
    <InView onChange={(inView) => inViewHandle(inView, animation)}>
      <section id="portfolio" className="bg-primary section min-h-[600px]">
        <div className="container mx-auto ">
          <motion.div
            className="flex flex-col items text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={animation}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title ">My lastest work</h2>
            <p className="section-subtitle mb-8 text-2xl">
              {" "}
              Check out my latest projects
            </p>
          </motion.div>
          <Accordion />
        </div>
      </section>
    </InView>
  );
}

export default Portfolio;
