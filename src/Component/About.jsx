import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#bbee6a] rounded-tl-3xl rounded-tr-3xl text-black '>
      <h1 className="font-['Neue_Montreal'] text-[3.8vw] leading-[3.5vw] ">Ochi is a strategic partner for fast-growing tech businesses that need to 
        raise funds, sell products, explain complex ideas, and hire
         great people.</h1>
         <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#889853]'>

          <div className='w-1/2'>
            <h1 className='text-7xl'>Our Approach:</h1>
            <button className=' flex gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
              <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
              
            </button>
            
          </div>
          <div className='w-1/2 h-[60vh] rounded-3xl'>
         
          <img src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg' width={663} height={439}></img>
          </div>
         </div>
    </div>
  )
}

export default About
