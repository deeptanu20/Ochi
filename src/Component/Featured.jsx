import { motion } from 'framer-motion'
import { Power4 } from 'gsap';
import React, { useState } from 'react'

const Featured = () => {

 const [isHovering,setHovering]= useState(false);

 

  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20 '>
       <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'> Featured Projects</h1>
       

       
      </div>
      <div className='px-20'>
      <div className="cards w-full flex gap-10 mt-10">

      
        <div onMouseEnter={()=>setHovering(true)}onmouseleave={()=>setHovering(false)} className="cardcontainer relative rounded-xl w-1/2 h-[75vh]">
            <h1 className='absolute flex text-[#a7c04d] overflow-hidden  font-semibold left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl '>FYDE
            
            {"FYDE".split("").map((item,index)=>{
              <motion.span initial={{y: "100%"}} animate={isHovering ? ({y:"0"}) : ({y:"100%"})}
              transition={{ease:[0.22,1,0.36,1],delay:index*.06}}
              className='inline-block '>{item}</motion.span>
            })}
            
            </h1>
       <div className=' card w-full h-full rounded-xl overflow-hidden'>
       <img className='w-full h-full bg-cover ' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-300x225.png'></img>
       </div>
        </div>
                 
        <div className="cardcontainer relative rounded-xl w-1/2 h-[75vh]">

        <h1 className='absolute  text-[#a7c04d] right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl '>
        
        
        {"VISE".split('').map((item,index)=>{
              <span>{item}</span>
            })}
            
        
        </h1>


        <div className=' card w-full h-full rounded-xl overflow-hidden'>
            <img className='w-full h-full bg-cover ' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'></img>
        </div>
            </div>
            </div>
            </div>
            </div> 
      
   
  )
}

export default Featured
