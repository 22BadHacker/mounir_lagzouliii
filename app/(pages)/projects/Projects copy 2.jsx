import React from 'react'

const Projects = () => {
  return (
    <div className='flex pt-[120px] h-[200vh] flex-col gap-[70px]'>

        <div className='flex-size pb-8 flex flex-col gap-3 items-end'>
            <h1 className='text-[10.25vw] leading-[.9] uppercase text-[#11120d] font-bold font-DMSerifDisplay'> Selected Projects</h1>
        </div>

        <div className="w-full grid grid-cols-4">
            <div className="w-full border-black/10 border-[.5px] h-[425px] bg-[#e2e2e2]"></div>
            
        </div>
        {/* Logo collection */}
    </div>
  )
}

export default Projects
