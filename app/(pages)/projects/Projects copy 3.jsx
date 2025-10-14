import React from 'react'

const Projects = () => {
  return (
    <div className='flex pt-[160px] w-full h-[200vh] flex-col gap-[70px]'>

        <div className=' pb-8 grid place-items-end gap-2   grid-cols-[400px_auto]'>
            <p className='h-fit  text-[12px]  '>Each project is a fragment of exploration — a dialogue between design, code, and emotion. Together, they tell the story of a creative process that never stands still.</p>
            <h1 className='text-[7.5vw] col-span-1 leading-[.9] uppercase text-[#11120d] font-bold font-DMSerifDisplay'> Selected Projects</h1>
        </div>

        <div className="w-full grid grid-cols-4">
            <div className="w-full border-black/10 border-[.5px] h-[425px] bg-[#e2e2e2]"></div>
            
        </div>
        {/* Logo collection */}
    </div>
  )
}

export default Projects
