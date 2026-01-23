import React from 'react'
import Image from 'next/image'
import phone from '@/public/image/img23.jpg'

const capabilities = () => {
  return (
    <div className='h-svh  flex-size w-full '>

        <div className="  pt-29 h-full  flex gap-7 flex-col pb-8 justify-between ">
            <div className="flex flex-col gap-2">
                <h1 className='text-[40px] text-[#aeaeae] font-Poppins'>Expertise That   <span className='text-foreground'>Executes</span> Vision</h1>
                <h5 className='text-[12px] leading-[16px] font-Poppins max-w-[400px]'>Design, development, and storytelling—combined to build digital experiences that are not only functional but truly unforgettable.</h5>
            </div>


            <div className="flex font-Poppins flex-col gap-7">
                <h2 className='text-[24px] '>Expertise</h2>
                <div className="flex text-[12px] leading-[14px] xl:max-w-[670px]  flex-col gap-5 md:gap-4">
                    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2">
                        <div className="flex h-fit gap-1 items-center"><span>[1]</span> Art Direction</div>
                        <h6 className=' text-[#aeaeae]'>I craft visual universes that tell your story, break the rules, and make every detail matter.</h6>
                    </div>
                    <div className="w-full h-[.5px] bg-[#c4c4c4]/70"></div>
                    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2">
                        <div className="flex h-fit gap-1 items-center"><span>[2]</span> UI/UX Design</div>
                        <h6 className=' text-[#aeaeae]'>I design interfaces that don’t just work—they captivate, guide, and transform the way people experience your brand.</h6>
                    </div>
                    <div className="w-full h-[.5px] bg-[#c4c4c4]/70"></div>
                    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2">
                        <div className="flex h-fit gap-1 items-center"><span>[3]</span> Web Development</div>
                        <h6 className=' text-[#aeaeae]'>I build digital experiences that are fast, seamless, and unforgettable—code that speaks and performs.</h6>
                    </div>
                    <div className="w-full h-[.5px] bg-[#c4c4c4]/70"></div>
                    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2">
                        <div className="flex h-fit gap-1 items-center"><span>[4]</span> Brand Identity</div>
                        <h6 className=' text-[#aeaeae]'>I craft identities that don’t just represent—they resonate, inspire, and leave a lasting mark.</h6>
                    </div>
                    <div className="w-full h-[.5px] bg-[#c4c4c4]/70"></div>
                </div>

            </div>
            <div className="flex font-Poppins flex-col gap-7">
                <h2 className='text-[24px] '>Knowledge</h2>
                <div className="flex text-[12px] leading-[14px] xl:max-w-[670px]  flex-col gap-4">
                    <div className="w-full grid grid-cols-1 gap-2 md:grid-cols-2">
                        <h3>Design & UI Animation: </h3>
                        <h6 className='flex w-full text-[#aeaeae] justify-start md:justify-end'>Figma, Photoshop, Illustrator</h6>
                    </div>
                    <div className="w-full grid grid-cols-1 gap-2 md:grid-cols-2">
                        <h3>Development Technologies: </h3>
                        <h6 className='flex w-full text-[#aeaeae] justify-start md:justify-end'>HTML, CSS, Laravel, MySQL, React, Next js, Tailwind CSS</h6>
                    </div>
                    <div className="w-full grid grid-cols-1 gap-2 md:grid-cols-2">
                        <h3>Collaboration & Cooperation: </h3>
                        <h6 className='flex w-full text-[#aeaeae] justify-start md:justify-end'>Zoom, Email, Google Meet</h6>
                    </div>
                </div>
            </div>

        </div>

        <Image alt='phone' src={phone} className=' absolute hidden 2xl:flex right-0 top-0 w-[700px] h-full object'/>
    </div>
  )
}

export default capabilities
