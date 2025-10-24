import React from 'react'
import Projects from './Projects'


export const metadata = {
    title: "𝗠𝗼𝘂𝗻𝗶𝗿 𝗟𝗮𝗴𝘇𝗼𝘂𝗹𝗶 — Projects",
}
const page = () => {
  return (
    <div className='flex-size py-34'>
      {/* <div class="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_24px]"></div> */}
        <Projects />
        
    </div>
  )
}

export default page
