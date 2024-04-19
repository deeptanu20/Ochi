import { motion } from 'framer-motion'
import React from 'react'

const Marki = () => {

  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".2"className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2  border-zinc-300 flex gap-10 overflow-hidden  whitespace-nowrap'>
        <motion.h1 intiaial={{x:"0"}} animate={{x: "-100%"}} transition={{ease:"linear",repeat:"Infinity",duration:5}} className='text-[18vw] leading-none font-["Founders_Grotesk_X_condensed"] uppercase p-10 -mb-[7vw]  font-semibold'>We are ochi</motion.h1>
        <motion.h1 intiaial={{x:"0"}} animate={{x: "-100%"}} transition={{ease:"linear",repeat:"Infinity",duration:5}} className='text-[18vw] leading-none font-["Founders_Grotesk_X_condensed"] uppercase  p-10 -mb-[7vw] font-semibold'>We are ochi</motion.h1>
        
      </div>
    </div>
  )
}

export default Marki
