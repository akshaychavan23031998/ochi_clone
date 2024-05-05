import { motion } from "framer-motion";
import { useState } from "react";

const Featured = () => {
  const [hoveringLeft, setHoveringLeft] = useState(false);
  const [hoveringRight, setHoveringRight] = useState(false);

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
        <h1 className='text-7xl capitalize font-["neue Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div
          onMouseEnter={() => setHoveringLeft(true)}
          onMouseLeave={() => setHoveringLeft(false)}
          className="cardContainer relative w-1/2 h-[70vh]">
          <h1 className="absolute flex overflow-hidden left-full tracking-tighter leading-none text-7xl font-bold text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={{ y: hoveringLeft ? 0 : "100%" }}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                className="inline-block"
                style={{ position: "relative" }} // Add this style
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-xl overflow-hidden">
            <img src="src/assets/images/right.png" />
          </div>
          </div>;
          <div
          onMouseEnter={() => setHoveringRight(true)}
          onMouseLeave={() => setHoveringRight(false)}
          className="cardContainer relative w-1/2 h-[70vh]"
        >
          <h1 className="absolute flex overflow-hidden right-full tracking-tight leading-none text-7xl font-bold text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2">
            {"VISE".split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={{ y: hoveringRight ? 0 : "100%" }}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                className="inline-block"
                style={{ position: "relative" }}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-xl  overflow-hidden">
            <img src="src/assets/images/rig.jpg" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
// <img src="src/assets/images/rig.jpg" />

export default Featured;
