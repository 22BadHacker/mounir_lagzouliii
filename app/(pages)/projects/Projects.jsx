import React from 'react'
import { ProjectData } from '@/data/Data';
import Image from 'next/image'


const Border = () => (
  <>
     <div className="size-6 rounded-[1.5px] border-t-[#1d1d1d]/60 border-l-[#1d1d1d]/60 border-transparent border-[1.5px] absolute top-0 left-0"/>
      <div className="size-6 rounded-[1.5px] border-b-[#1d1d1d]/60 border-l-[#1d1d1d]/60 border-transparent border-[1.5px] absolute bottom-0 left-0"/>
      <div className="size-6 rounded-[1.5px] border-b-[#1d1d1d]/60 border-r-[#1d1d1d]/60 border-transparent border-[1.5px] absolute bottom-0 right-0"/>
      <div className="size-6 rounded-[1.5px] border-t-[#1d1d1d]/60 border-r-[#1d1d1d]/60 border-transparent border-[1.5px] absolute top-0 right-0"/> 
  </>
)
const Border2 = () => (
  <>
     <div className="size-[14px] rounded-[1.5px] border-t-[#1d1d1d]/40 border-l-[#1d1d1d]/40 border-transparent border-[1.5px] absolute -top-1 -left-1"/>
      <div className="size-[14px] rounded-[1.5px] border-b-[#1d1d1d]/40 border-l-[#1d1d1d]/40 border-transparent border-[1.5px] absolute -bottom-1 -left-1"/>
      <div className="size-[14px] rounded-[1.5px] border-b-[#1d1d1d]/40 border-r-[#1d1d1d]/40 border-transparent border-[1.5px] absolute -bottom-1 -right-1"/>
      <div className="size-[14px] rounded-[1.5px] border-t-[#1d1d1d]/40 border-r-[#1d1d1d]/40 border-transparent border-[1.5px] absolute -top-1 -right-1"/> 
  </>
)


const Projects = () => {
  return (
    <div className='flex  w-full h-auto flex-col'>

        <div className=' pb-[90px] w-full flex flex-col gap-7 '>
            
            <h1 className='md:text-[min(8vw,200px)] text-[50px] col-span-1 leading-[.9]  text-[#11120d]   font-bold uppercase'> Selected Projects <span className='text-[14px] text-nowrap pr-2 tracking-wide  font-Archivo '> 2023 — 2025 </span></h1>
            <p className='h-fit w-[400px]  font-Archivo text-xs text-justify  '><span className='font-Archivo font-[900]'>//</span> Each project is a fragment of exploration — a dialogue between design, code, and emotion. Together, they tell the story of a creative process that never stands still.</p>
        </div>


          <div className="flex h-fit w-full pb-4 border-b-[#1d1d1d]/40 border-b-[.5px] pt-2 uppercase font-Archivo font-[900] text-sm items-center gap-1"> <span className='size-2 rounded-full  bg-[#1d1d1d]'/> Logo collections</div>
        <div className="w-full pt-8 gap-5 grid grid-cols-3">
          {
              ProjectData.map((item, i) => {
                const {title, file, tags, imgWidth} = item 
                return (
                    <>
                      <div className={`w-full flex-center px-4 relative h-[420px] `}>
                        <Border />
                        <Border2 />
                        <div className="flex py-3 absolute top-0 left-0 px-4 gap-4 ">
                            <span className='font-Archivo text-[11px] font-[800]'> 00{i+1}</span>
                            <p className='font-[800] font-Archivo text-xs'>// {title}</p>
                        </div>
                        <div className="flex py-3 absolute bottom-0 right-0 px-5 gap-2 ">
                            {tags.map((tag, i) => (
                                <span key={i} className='border-[.5px] rounded-full border-black/70 px-[6px] py-[2px] text-black/85 text-[10px] font-semibold'>{tag}</span>
                            ))}
                        </div>

                        <Image alt={title} className={`object-cover ${imgWidth} `} src={file} width={270} height={550}/>
                        

                      </div>
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
