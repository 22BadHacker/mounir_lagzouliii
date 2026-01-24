import React from 'react'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { HiArrowLongRight } from "react-icons/hi2";
import Image from 'next/image';
import Lenzone from '@/public/project/lenzz.webp'
// import lenzone from ''

const page = () => {
  return (
    <div className='h-auto pb-20 min-h-screen flex-size relative'>
        <section className=" pt-32 pb-11 h-auto min-h-svh gap-6 z-10 flex-col justify-between flex  ">
            <h1 className='md:text-[40px] text-[32px] sm:text-[38px] font-Poppins tracking-[.5px]  text-[#161616]/95 leading-[1.11]  text-pretty  sm:block  md:w-[750px]'>I design experiences that awaken curiosity and emotion. Every interface I craft is a <span className=' italic'>balance of beauty</span>, <span className=' italic'>clarity</span>, and <span className='italic'>storytelling</span>.</h1>

            <div className="flex  md:flex-row flex-col md:items-end gap-10 md:gap-2 justify-between w-full">
                <p className='md:w-[520px] font-Poppins  w-full tracking-[.4px]   text-pretty text-[24px] leading-[29px] text-[#aeaeae]'>  <span className='text-[#161616]/85 '>Graphic Designer</span> and <span className='text-[#161616]/85'>Web Developer</span>, crafting visuals and interfaces that speak through form, rhythm, and emotion.</p>


                
                <video src='/image/hero.mp4' lazy  autoPlay loop muted className='w-[240px] h-[390px] saturate-[1.2] object-cover'/>
            </div>
        </section>

        <section className="pt-40 w-full max-w-[1350px] flex flex-col gap-8 font-Poppins">
            <h1 className='text-[#aeaeae] text-xl md:text-[24px] leading-[29px]'>Why I Do What I Do</h1>
            <div className="flex flex-col gap-12">
                <p className='md:text-[40px] text-3xl md:leading-[48px]'>It usually starts with a blank screen and way too many ideas. I believe design isn’t just about looking good — it should feel right. Every pixel has a role: guide the eye, keep things simple, and make the experience smooth.</p>
                <p className='md:text-[40px] text-3xl md:leading-[48px]'>I don’t just build pages, I design experiences people actually enjoy using. Clear, intuitive, and effortless — whether you’re casually scrolling or clicking with purpose.</p>
                <p className='md:text-[40px] text-3xl md:leading-[48px]'>I don’t chase trends or design for algorithms. I design for humans. Mixing creativity with logic and aesthetics with function, I create digital work that helps brands tell their story and stand out, anywhere.
</p>
                
            </div>
        </section>



        {/* <section className="h-auto flex flex-col gap-6 pt-30 pb-11 w-full min-h-svh z-[2] relative ">
            <div className="flex font-Poppins w-full justify-between">
                <p className='text-xs'>Recent Projects</p>
                <p className='text-xs flex items-center gap-1'>See more <HiArrowLongRight className='relative top-px' size={16} /></p>

            </div>
                <div className="w-full grid grid-cols-2 gap-10">
                        <Image src={Lenzone} className='z-[10]' alt='Lenzone'/>
                   
                </div>

            
        </section> */}


        {/* <div className="h-screen"></div> */}
    </div>
  )
}

export default page
