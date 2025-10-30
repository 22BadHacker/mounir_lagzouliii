'use client'
import React from 'react'
import { ProjectData } from '@/data/Data';
import Image from 'next/image'
import { motion } from 'framer-motion';
import Svg from '@/components/Svg';
import Texture from '@/public/image/texture2.webp'


const Border = () => (
  <div className='bg-[#e8e8e8] size-[100%] absolute '>

      {/* <Image src={Texture} alt='texture' width={400} height={400} className='size-full object-cover mix-blend-soft-light'/> */}
    
  </div>
)
// const Border = () => (
//   <>
//      <div className="size-5 rounded-[1.5px] border-t-[#1d1d1d]/60 border-l-[#1d1d1d]/60 border-transparent border-[1.5px] absolute top-0 left-0"/>
//       <div className="size-5 rounded-[1.5px] border-b-[#1d1d1d]/60 border-l-[#1d1d1d]/60 border-transparent border-[1.5px] absolute bottom-0 left-0"/>
//       <div className="size-5 rounded-[1.5px] border-b-[#1d1d1d]/60 border-r-[#1d1d1d]/60 border-transparent border-[1.5px] absolute bottom-0 right-0"/>
//       <div className="size-5 rounded-[1.5px] border-t-[#1d1d1d]/60 border-r-[#1d1d1d]/60 border-transparent border-[1.5px] absolute top-0 right-0"/> 
//   </>
// )
const Border2 = () => (
  <>
     <div className="size-[14px] rounded-[1.5px] border-t-[#aeaeae] border-l-[#aeaeae] border-transparent border-[1.5px] absolute -top-1 -left-1"/>
      <div className="size-[14px] rounded-[1.5px] border-b-[#aeaeae] border-l-[#aeaeae] border-transparent border-[1.5px] absolute -bottom-1 -left-1"/>
      <div className="size-[14px] rounded-[1.5px] border-b-[#aeaeae] border-r-[#aeaeae] border-transparent border-[1.5px] absolute -bottom-1 -right-1"/>
      <div className="size-[14px] rounded-[1.5px] border-t-[#aeaeae] border-r-[#aeaeae] border-transparent border-[1.5px] absolute -top-1 -right-1"/> 
  </>
)

const SectionTitle = ({ children }) => (
    <p className='uppercase cursor-pointer h-fit  leading-[1] w-fit flex items-center gap-[1.5px] font-Archivo font-semibold text-[11.5px]'>
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

        <div className=' pb-[90px] w-full flex flex-col gap-7 '>
            
            <h1  className='md:text-[min(8.5vw,200px)] text-[50px] font-RightGrotesk col-span-1 leading-[.8]  text-[#11120d]   font-bold uppercase'> Selected Projects  <span className='text-[14px] text-nowrap pr-2 tracking-wide leading-[1] font-semibold font-RightGrotesk '> [ 2023 — 2025 ]</span></h1>
            <p className='h-fit sm:w-[400px]  font-RightGrotesk text-xs text-justify  '><span className='size-2 bg-[#1d1d1d] rounded-full inline-flex mx-1'/> Each project is a fragment of exploration — a dialogue between design, code, and emotion. Together, they tell the story of a creative process that never stands still.</p>
        </div>


          <div className="flex  h-fit w-full  py-[6px]   uppercase font-Archivo font-[900] text-sm items-center gap-[2px]">  <span className='bg-amber-400 px-1'>Logo collections &reg;</span> <Svg /></div>
        <div className="w-full mx-auto pt-8 gap-3 grid md:grid-cols-2 lg:grid-cols-3">
          {
              ProjectData.map((item, i) => {
                const {title, file, tags, imgWidth} = item 
                return (
                    <>
                      <motion.div key={i} initial={{ opacity: 0,  filter: 'blur(10px)'}}
                      whileInView={{ opacity: 1, filter: 'blur(0px)'}}
                      transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeInOut' }}
                      viewport={{ once: false }} className={`w-full cursor-pointer group duration-200  ease-in-out flex-center px-4 relative lg:h-[420px] md:h-[400px] h-[360px] `}>
                        <Border />
                        <Border2 />
                        <div className="flex py-3 absolute top-0 left-0 px-4 gap-4 ">
                            <span className='font-Archivo text-[11px] font-[800]'> 00{i+1}</span>
                            <p className='font-[800] mt-[2px] flex gap-[1.5px] items-center h-[12px]   leading-[1]  font-Archivo text-xs'><span className='h-full w-[2.5px] bg-[#1d1d1d]'/> <span className='h-full w-[1.5px] bg-[#1d1d1d]'/> <span className='h-full w-[1px] bg-[#1d1d1d]'/> <span className='h-full w-[1px] bg-[#1d1d1d]'/> <span className='bg-[#1d1d1d] px-[3px] h-full text-gray-50'>{title}</span></p>
                        </div>
                        <div className="flex py-3 absolute bottom-0 right-0 px-5 gap-2 ">
                            {tags.map((tag, i) => (
                                <span key={i} className='border-[.5px] rounded-full border-black/70 px-[6px] py-[2px] text-black/85 text-[10px] font-semibold'>{tag}</span>
                            ))}
                        </div>
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