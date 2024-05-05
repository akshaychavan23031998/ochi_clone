import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.01" className='w-full py-20 rounded-t-3xl bg-[#004D43]'>
      <div className="text border-t-2 border-b-2 border-zinc-500 flex whitespace-nowrap overflow-hidden">
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 15}} className="text-[24vw] leading-none font-['neue Montreal'] tracking-tighter leading-none -mt-3 uppercase font-semibold pr-20">we are ochi</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 15}} className="text-[24vw] leading-none font-['neue Montreal'] tracking-tighter leading-none -mt-3 uppercase font-semibold pr-20">we are ochi</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 15}} className="text-[24vw] leading-none font-['neue Montreal'] tracking-tighter leading-none -mt-3 uppercase font-semibold pr-20">we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee