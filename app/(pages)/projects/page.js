import React from 'react'
import Projects from './Projects'


export const metadata = {
    title: "𝗠𝗼𝘂𝗻𝗶𝗿 𝗟𝗮𝗴𝘇𝗼𝘂𝗹𝗶 — Projects",
}
const page = () => {
  return (
    <div className='flex-size min-h-svh h-auto w-full pb-30 pt-34'>
        <Projects />
        {/* <div className="fixed w-svw h-svh top-0 left-0 bg-[#efefef]/50 backdrop-blur-xs z-[9999]"></div> */}
        
    </div>
  )
}

export default page
