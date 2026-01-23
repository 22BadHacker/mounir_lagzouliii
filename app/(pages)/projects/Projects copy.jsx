'use client'
import React from 'react'
import { ProjectData } from '@/data/Data';
import Image from 'next/image'
import { motion } from 'framer-motion';
import Svg from '@/components/Svg';
import Texture from '@/public/image/texture2.webp'


const Border = () => (
  <div className='bg-[#e8e8e8]   blur-[3px]  shadow-xs size-[100%] absolute '>
   
  </div>
)


const SectionTitle = ({ children }) => (
    <p className='uppercase cursor-pointer h-fit  leading-[.95] w-fit flex items-center gap-[1.5px] font-Archivo font-semibold text-[11.5px]'>
      {/* <span className='w-[4px] h-[4.5px] relative -top-[0.5px] bg-black' /> */}
      <span className='h-full w-[3.5px] bg-amber-300'/>
      <span className='h-full w-[2px] bg-amber-300'/>
      <span className='h-full w-[1.5px] bg-amber-300'/>
      <span className='h-full w-[2px] bg-amber-300'/>
      <span className='bg-amber-300 px-[2px]'>{children}</span>
    </p>
  )


const Projects = () => {
  return (
    <div className='flex  w-full h-auto flex-col'>

        <div className=' pb-[90px] w-full flex flex-col gap-8 '>
            
            <h1  className='md:text-[min(8.5vw,200px)] text-[50px] font-Oswald col-span-1 leading-[.8]  text-[#11120d]/95   font-bold uppercase'> Selected Projects  <span className='text-[14px] text-nowrap pr-2 tracking-wide leading-[1] font-semibold font-RightGrotesk '> [ 2023 — 2025 ]</span></h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-fit lg:w-[850px] gap-x-7 font-Poppins text-[10px] leading-[1.15] text-justify text-balance   flex-col md:gap-x-5 gap-y-2">
                <p className='relative'> <span className='size-2 bg-[#1d1d1d] rounded-full inline-flex mx-1'/> Well, hello! Fancy meeting you here.</p>

                <p> You've stumbled upon my portfolio—a curated collection of things I've built, designed, and poured my heart and soul into (and also a lot of coffee).</p>

                <p> Think of this page as the "greatest hits" of my brain. Go ahead, click around. I hope something makes you smile, think, or want to collaborate.</p>

                <p>P.S. If you like what you see, let's chat! If you don't... maybe keep that to yourself. (Just kidding! ...Mostly.)</p>
            </div>

        </div>


          {/* <div className="flex relative  tracking-tight  h-fit w-fit  py-[6px]   uppercase font-Archivo font-[900] leading-[1.25] text-sm items-center  gap-[2px]">   <span className='bg-[#11120d]  text-gray-50 italic px-[3px]'>Logo collections &reg;</span> <Svg /></div> */}

          <div className="w-full sticky top-20 z-10 mix-blend-difference text-white flex justify-end">

          <div className="flex items-center gap-3 max-w-[700px] flex-wrap ">
              <button className='text-[20px] font-Poppins font-semibold  '>All Work <span className='font-Oswald font-bold'>,</span></button>
              {/* <span className=' h-[20px] w-[1.5px] rotate-12  bg-black/90'/> */}
              <button className='text-[20px] px-1 font-Poppins relative font-semibold  text-[#7f7f7f]'>Brand Identity <span className='absolute font-Archivo -top-[1px] right-[0px] text-[10px]'>(5)</span><span className='font-Oswald font-bold '>,</span></button>
              {/* <span className=' h-[20px] w-[1.5px] rotate-12  bg-black/90'/> */}
              <button className='text-[20px] font-Poppins font-semibold  text-[#7f7f7f]'>Logo Design <span className='font-Oswald font-bold'>,</span></button>
              {/* <span className=' h-[20px] w-[1.5px] rotate-12  bg-black/90'/> */}
              <button className='text-[20px] font-Poppins font-semibold  text-[#7f7f7f]'>Websites</button>
          </div>
          </div>

        <div className="w-full mx-auto pt-8 gap-3 grid md:grid-cols-2 lg:grid-cols-3">
          {
              ProjectData.map((item, i) => {
                const {title, file, tags, imgWidth} = item 
                return (
                    <>
                      <motion.div key={i} initial={{ opacity: 0,  filter: 'blur(10px)'}}
                      whileInView={{ opacity: 1, filter: 'blur(0px)'}}
                      transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeInOut' }}
                      viewport={{ once: false }} className={`w-full  cursor-pointer group duration-200  ease-in-out flex-center px-4 relative lg:h-[420px] md:h-[400px] h-[360px] `}>
                        <Border />
                        <div className="flex  py-3 absolute top-0 left-0 px-4 gap-4 ">
                            <span className='font-Poppins text-[11px] font-[800]'> 00{i+1}</span>
                            <p className='font-[600] mt-[2px] flex gap-[1.5px] items-center h-[11px]   leading-[1]  font-Poppins text-xs'><span className='h-full rotate-8 w-[2.5px] bg-[#1d1d1d]'/> <span className='h-full rotate-8 w-[1.5px] bg-[#1d1d1d]'/> <span className='h-full rotate-8 w-[1px] bg-[#1d1d1d]'/> <span className='h-full rotate-8 w-[1px] bg-[#1d1d1d]'/> <span className='bg-[#1d1d1d]  px-[3px] h-full text-gray-50'>{title}</span></p>
                        </div>
                        {/* <div className="flex py-3 absolute bottom-0 right-0 px-5 gap-2 ">
                            {tags.map((tag, i) => (
                                <span key={i} className='border-[.5px] font-Poppins rounded-full border-white/60 bg-transparent shadow-xs px-[7px] py-[4px] text-black/70 text-[8.5px] font-semibold'>{tag}</span>
                            ))}
                        </div> */}
                            <Image  priority  alt={title} className={`object-cover z-[10] group-hover:scale-105 duration-300  ease-in-out  ${imgWidth} `} src={file} width={270} height={550}/>


                      </motion.div>
                    </>
                )
              })
          }
        </div>

       

    </div>
  )
}

export default Projects

// bg-[#e8e8e8]


// border-y-[#c4c4c5]/70 border-y-[.5px]
{/* <span className='size-[10px] mix-blend-difference absolute top-[2px] -left-[5px]  bg-[#fff] rounded-full inline-flex mx-1'/> */}