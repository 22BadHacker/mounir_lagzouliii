import Header from '@/app/compenet/Header'
import React from 'react'
import Image from 'next/image'
import Mee from '@/public/image/Mee.png'


const page = () => {
  return (
    <div className='h-auto relative'>
        <div className="h-svh z-[2] relative pt-32 pb-12">
            

            
            <div className="flex-size z-10 flex-col justify-between flex h-full">
                <h1 className='text-[40px] tracking-[1px] text-[#161616] leading-[1.1] text-pretty  md:w-[700px]'>I design experiences that awaken curiosity and emotion. Every interface I craft is a <span className='font-DMSerifDisplay italic'>balance of beauty</span>, <span className='font-DMSerifDisplay italic'>clarity</span>, and <span className='font-DMSerifDisplay italic'>storytelling</span>.</h1>

                <div className="flex md:flex-row flex-col md:items-end gap-8 md:gap-2 justify-between w-full">
                    <p className='w-[500px] tracking-[.4px] font-Archivo text-pretty text-[24px] leading-[1.12] text-[#aeaeae]'><span className='text-[#161616] '>Graphic Designer</span> and <span className='text-[#161616]'>Developer</span>, crafting visuals and interfaces that speak through form, rhythm, and emotion.</p>

                    <Image alt='Mounir Lagzouli' className='object-cover  saturate-[1.2]' src={Mee} width={270} height={550}/>
                </div>
            </div>
        </div>


        <div className="h-screen"></div>
    </div>
  )
}

export default page
