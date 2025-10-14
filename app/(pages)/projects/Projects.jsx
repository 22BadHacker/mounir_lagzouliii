import React from 'react'

const Projects = () => {
  return (
    <div className='flex pt-[160px] w-full h-[200vh] flex-col gap-[70px]'>

        <div className=' pb-8 w-full flex-center flex-col gap-7 '>
            
            <h1 className='lg:text-[140px] text-[100px] col-span-1 leading-[.9]  text-[#11120d]  font-bold '> Selected Projects</h1>
            <p className='h-fit w-[400px] relative left-10  text-xs  '>Each project is a fragment of exploration — a dialogue between design, code, and emotion. Together, they tell the story of a creative process that never stands still.</p>
        </div>

        <div className="w-full pt-10 gap-0 grid grid-cols-4">
            {/* <div className="w-full border-[#000]/10 border-[.5px]  h-[240px] bg-[#e8e8e8]"></div> */}
            
            
        </div>
        {/* Logo collection */}
    </div>
  )
}

export default Projects
