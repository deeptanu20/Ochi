import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-40'>
    <div className='textstructure mt-40 px-20 '>

        <div className='masker '>
            <h1 className="uppercase text-[6.5vw]  leading-[6vw] tracking-tighter font-medium">WE CREATE</h1>
        </div>
        <div className='masker '>
            <div className='w-fit flex items-center'>
                <motion.div  initial={{width:0}} animate={{width: '9vw'}} transition={{ease:[0.76, 0 , 0.24, 1 ],duration:2, repeat:Infinity }}className='w-[9vw] h-[5.5vw] relative top-[0.6vw] rounded-md bg-red-700'>
        
                </motion.div>
            <h1 className="uppercase text-[6.5vw]  leading-[6vw] tracking-tighter font-medium">EYE OPENING</h1>
        </div>
        </div>
        <div className='masker '>
            <h1 className="uppercase text-[6.5vw] leading-[6vw] tracking-tighter font-medium">PRESENTATIONS</h1>
        </div>
    </div>
    <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(<p
       className='text-md font-light tracking-tight leading-none'>{item}

        </p>))}
        <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full'>Start the Project</div>
        </div>
        <div className='w-10 h-10  flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
            <span className='rotate-[45deg]'>
            <FaArrowUpLong/>
            </span>
            </div>
    </div>
    </div>
  )
}

export default Landing
