import Contact from '@/components/Contact'
import React from 'react'

export const metadata = {
  title: "𝗠𝗼𝘂𝗻𝗶𝗿 𝗟𝗮𝗴𝘇𝗼𝘂𝗹𝗶 — Contact",
}

const page = () => {
  return (
    <div className='min-h-svh  z-[2] relative pt-36 pb-11'>
        {/* <Header /> */}
        <div className="flex-size">
            <Contact />
        </div>
    </div>
  )
}

export default page
