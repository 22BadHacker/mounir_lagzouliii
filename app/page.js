import React from 'react'

const page = () => {
  return (
    <div className='h-auto relative'>
        <div className="h-svh z-[2] relative pt-32 pb-11">
            

            
            <div className="flex-size gap-6 z-10 flex-col justify-between flex h-full">
                <h1 className='md:text-[40px] text-[38px] font-Poppins tracking-[.5px]  text-[#161616]/95 leading-[1.08] text-pretty  sm:block  md:w-[750px]'>I design experiences that awaken curiosity and emotion. Every interface I craft is a <span className=' italic'>balance of beauty</span>, <span className=' italic'>clarity</span>, and <span className='italic'>storytelling</span>.</h1>

                <div className="flex md:flex-row flex-col md:items-end gap-10 md:gap-2 justify-between w-full">
                    <p className='md:w-[500px]  w-full tracking-[.4px]  font-RightGrotesk text-pretty text-[21px] leading-[1.1] text-[#aeaeae]'>  <span className='text-[#161616]/85 '>Graphic Designer</span> and <span className='text-[#161616]/85'>Web Developer</span>, crafting visuals and interfaces that speak through form, rhythm, and emotion.</p>
                    <video src='/image/hero.mp4'  autoPlay loop muted className='w-[240px] h-[390px] saturate-[1.2] object-cover'/>
                </div>
            </div>
        </div>


        <div className="h-screen"></div>
    </div>
  )
}

export default page
