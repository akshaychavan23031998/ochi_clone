import {  motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
const LandingPage = () => {
    return (
      <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
        <div className="textstructure mt-40 px-20">
          {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => (
            <div className="masker" key={index}>
                <div className="w-fit flex items-center">
                    {index === 1 && (<div className="w-[9vw] h-[5vw] mt-[0.8vw]">
                    <motion.img initial={{width:0}} animate={{width: "9vw"}} transition={{ease: [0.61, 1, 0.88, 1], duration: 0.8}} className="w-full h-full rounded-xl" src="src/assets/images/content-image01.jpg"  alt="ochi img"/>
                    </div>)}
                    <h1 className="uppercase leading-[6vw] tracking-tight text-8xl font-['neue Montreal'] font-semibold">{item}</h1>
                </div>
            </div>
          ))}
        </div>
        <div className="border-t-[1px] border-zinc-500 mt-28 flex items-center justify-between py-5 px-20">
          {["For public and private companies","From the first pitch to IPO"].map((item, index) => (
            <p className="text-md" key={index}>{item}</p>
          ))}
          <div className="start flex items-center gap-5">
            <div className="border-[1px] border-zinc-500 rounded-full px-5 py-2 text-md uppercase">Start the Project</div>
            <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full">
                <GoArrowUpRight />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LandingPage;
  