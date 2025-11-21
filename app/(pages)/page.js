import React from 'react'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const page = () => {
  return (
    <div className='h-auto flex-size relative'>
            <div className=" pt-32 pb-11 h-auto min-h-svh gap-6 z-10 flex-col justify-between flex  ">
                <h1 className='md:text-[40px] text-[32px] sm:text-[38px] font-Poppins tracking-[.5px]  text-[#161616]/95 leading-[1.11]  text-pretty  sm:block  md:w-[750px]'>I design experiences that awaken curiosity and emotion. Every interface I craft is a <span className=' italic'>balance of beauty</span>, <span className=' italic'>clarity</span>, and <span className='italic'>storytelling</span>.</h1>

                <div className="flex  md:flex-row flex-col md:items-end gap-10 md:gap-2 justify-between w-full">
                    <p className='md:w-[500px] font-Poppins  w-full tracking-[.4px]   text-pretty text-[20px] leading-[1.11] text-[#aeaeae]'>  <span className='text-[#161616]/85 '>Graphic Designer</span> and <span className='text-[#161616]/85'>Web Developer</span>, crafting visuals and interfaces that speak through form, rhythm, and emotion.</p>


                    
                    <video src='/image/hero.mp4'  autoPlay loop muted className='w-[240px] h-[390px] saturate-[1.2] object-cover'/>
                </div>
            </div>
        {/* <div className="h-auto flex flex-col gap-6 pt-20 pb-11 w-full min-h-svh z-[2] relative ">
            <div className="flex font-Poppins w-full justify-between">
                <p className='text-xs'>Recent Projects</p>
                <p className='text-xs flex items-center gap-1'>See more <LiaLongArrowAltRightSolid size={16} /></p>

            </div>
                <div className="w-full grid grid-cols-2 gap-10">

                </div>

            
        </div> */}


        {/* <div className="h-screen"></div> */}
    </div>
  )
}

export default page
