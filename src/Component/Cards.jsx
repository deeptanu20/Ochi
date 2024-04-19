import React from 'react'

const Cards = () => {
  return (
    <div  className='w-full h-screen bg-zinc-900 flex item-center px-32 py-60 gap-5'>
        <div className='cardcontainer h-[52vh] w-1/2'>
      <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
        <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
        <button className='absolute px-10 py-4 rounded-full border-2 left-10 bottom-10 font-semibold'>&copy;2023-2024</button>
      </div>

       
      </div>
        <div className='cardcontainer  h-[50vh ] w-1/2  flex gap-5 '>
        <div className='card relative rounded-xl w-1/2 h-full bg-[#132d29] flex items-center justify-center'>
        <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
        <button className='absolute px-10 py-4 rounded-full border-2 left-10 bottom-10 font-semibold'>RATING5.0 ON CLUTCH</button>
        </div>
        <div className='card  relative rounded-xl  w-1/2 h-full bg-[#132d29] flex items-center justify-center'>
        <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
        <button className='absolute px-10 py-4 rounded-full border-2 left-10 bottom-10 font-semibold'>BUISNESS BOOTCAMP</button>
        </div>


        </div>
      
    </div>
  )
}

export default Cards
