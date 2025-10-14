import React from 'react'

const Projects = () => {
  return (
    <div className='flex pt-[200px] h-[200vh] flex-col gap-[70px]'>

        <div className='flex-size pb-8 flex-between'>
            <h1 className='text-6xl font-[100]'> Selected Projects <span className='text-[18px] pr-2 tracking-wide  font-DMSerifDisplay'> 2023 — 2025 </span></h1>
            <p className='w-[400px] text-[12px]  '>Each project is a fragment of exploration — a dialogue between design, code, and emotion. Together, they tell the story of a creative process that never stands still.</p>
        </div>

        <div className="w-full grid grid-cols-4">
            <div className="w-full border-black/10 border-[.5px] h-[425px] bg-[#f5f5f5]"></div>
            <div className="w-full border-black/10 border-[.5px] h-[425px] bg-[#f5f5f5]"></div>
            <div className="w-full border-black/10 border-[.5px] h-[425px] bg-[#f5f5f5]"></div>
            <div className="w-full border-black/10 border-[.5px] h-[425px] bg-[#f5f5f5]"></div>
            <div className="w-full border-black/10 border-[.5px] h-[425px] bg-[#f5f5f5]"></div>
            <div className="w-full border-black/10 border-[.5px] h-[425px] bg-[#f5f5f5]"></div>
        </div>
        {/* Logo collection */}
    </div>
  )
}

export default Projects
