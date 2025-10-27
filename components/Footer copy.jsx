'use client'
import React from 'react'
import Logo from '@/public/Logo/Mounir_Lagzouli_1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { IoArrowUpSharp } from "react-icons/io5";
import { TfiArrowTopRight, TfiArrowUp } from 'react-icons/tfi';
import TimeZone from './TimeZone'

const Footer = () => {
  return (
    <div className='flex-size  pt-[100px] h-auto pb-6  w-full overflow-hidden '>
          <div className="flex pb-10 flex-col gap-3">
          <div className='tracking-tight lg:text-[calc(13.5vw-80px)] md:text-[calc(11vw-10px)] lg:max-w-[59vw] md:max-w-[80vw] text-[calc(15vw-10px)] max-w-[100vw] uppercase leading-[.74] font-Archivo font-[900] text-left   text-[#151515]'>let's bring your ideas to life ®

            {/* <div className='inline-flex relative cursor-pointer w-auto h-auto' >
            <Link href={'/contact'} className='w-[17.5vw] cursor-pointer group duration-200 ease-in-out hover:bg-[#151515] flex-center p-[6px] border-[1px] h-[8vh] rounded-full border-[#151515]'>
                <button className=' size-full duration-200 ease-in-out  group-hover:bg-[#1d1d1d] rounded-full group-hover:text-[#efefef] text-[#151515] font-Archivo font-[900] text-[20px]'>Get in touche</button>

            </Link>
              </div> */}
          </div>
              <div className='text-[20px] text-[#151515]  max-w-[350px] leading-[1.05] font-RightGrotesk'><span className='bg-[#151515] rounded-full size-[8px] mb-[1.5px] mx-2 inline-flex'/>Ready to elevate your brand?<br /> <span className='text-[#c4c4c5]'>Drop me a message and let's start building something amazing together.</span></div>

          </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-4 w-full  pt-10 ">
            <div className="flex flex-col gap-6">
              <p className='uppercase cursor-pointer hover: leading-[1] bg-amber-300 px-[2px] w-fit flex items-center gap-3 font-Archivo font-semibold  text-[11.5px]'><span className='w-[4px] curser-pointer  h-[4.5px] relative -top-[1px] bg-black'/>Contact</p>
                  <div className="flex text-[17px] font-[550] font-Archivo leading-[1.2] flex-col gap-[1px]">
                      <Link className='hover:underline  duration-200 ease-in-out' href={'/'}>mounirlagzouli22@gmail.com</Link>
                      <Link className='hover:underline duration-200 ease-in-out' href={'/'}>(+212) 708 148 077</Link>
                  </div>
                  
            </div>
            <div className="flex sm:col-span-1 col-span-2 flex-col gap-6">
              <p className='uppercase cursor-pointer hover: leading-[1] bg-amber-300 px-[2px] w-fit flex items-center gap-3 font-Archivo font-semibold  text-[11.5px]'><span className='w-[4px] curser-pointer  h-[4.5px] relative -top-[1px] bg-black'/>Social</p>
                  <div className="grid grid-cols-2  text-[17px] font-[550] font-Archivo leading-[1.2] flex-col gap-[1px]">
                      <Link className='hover:underline flex gap-1 items-center  duration-200 ease-in-out' href={'/'}>Instgram <TfiArrowTopRight className='text-[10px]' /></Link>
                      <Link className='hover:underline flex gap-1 items-center  duration-200 ease-in-out' href={'/'}>Linkedin <TfiArrowTopRight className='text-[10px]' /></Link>
                      <Link className='hover:underline flex gap-1 items-center  duration-200 ease-in-out' href={'/'}>Whatsapp <TfiArrowTopRight className='text-[10px]' /></Link>
                      <a className='hover:underline flex gap-1 items-center  duration-200 ease-in-out' href='/Project_Assets/Mounir_Lagzoulii_Resume.pdf' rel="noopener noreferrer" target='_blank'>Resume <TfiArrowTopRight className='text-[10px]' /></a>
                     
                  </div>
                  
            </div>

            <div className="lg:col-span-2 md:col-span-1 col-span-2 flex items-end justify-end w-full">
                <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}  className="flex text-[15px] font-[450] group font-Archivo text- uppercase cursor-pointer  items-center gap-3">
                    Back To Top
                    <span className='size-[62px] duration-200 ease-in-out shadow-xs group-hover:bg-[#c4c4c5]/40 text-[#11120d]/80 border-[1.5px] border-[#c4c4c5]/40 rounded-full flex-center'><TfiArrowUp  size={20}  /></span>
                </div>

            </div>


            
        </div>

        <div className="pt-12  w-full flex items-center justify-between">
          {/* <TimeZone /> */}

              
              <p className='font-Archivo text-[14px] font-[450]'>Designed and Developed by Mounir Lagzouli.</p>
              <p className='font-Archivo text-[14px] font-[450]'>© Mounir Lagzouli 2025. All rights reserved</p>
        </div>
      
    </div>
  )
}

export default Footer

{/* <Image alt='Mounir Lagzouli' className='object-cover w-svw' src={Logo} width={100} height={100}/> */}
// border-t-[.5px] border-t-[#c4c4c5]