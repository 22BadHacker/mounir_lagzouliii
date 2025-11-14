'use client'
import React, {useState} from 'react';
import { GrClose } from "react-icons/gr";
import { TfiArrowTopRight } from "react-icons/tfi";

const ContactWindow = () => {
    const [open, setOpen] = useState(false)
  return (


    <>
        {/* <button onClick={open}
            className={`link-wrapper hover:text-[#b1b1b1] px-[.5px] text-[12.5px] font-Archivo font-[450]   tracking-[0px] h-[16px]  ${
              open ? 'text-[#b1b1b1]' : ''
            }`}
          >
            
            <span className="link-text relative -top-[2.6px]">Contact</span>
            <span className="link-text-clone mt-[.5px]">Contact</span>
          </button > */}

            
            {
                !open ? (
                    <>
                        <div   className='fixed gap-2 text-[#15161b] pt-5 pb-40 flex items-center justify-end flex-col top-0 left-0 z-[1000] w-screen min-h-svh h-screen bg-[#d3d8e1]'>
                            <button className='absolute text-[17px] flex gap-3 items-center font-Archivo font-light top-5 uppercase right-10' onClick={()=>setOpen(!open)}><GrClose size={15}/> close</button>
                            <div className="flex opacity-90 font-Poppins tracking-tight text-[14.5px] uppercase gap-[50px] pb-2 items-center">
                                <p className='flex gap-[6px] items-center'>resume <TfiArrowTopRight size={13}/></p>
                                <p className='flex gap-1 items-center'>Get in touch <TfiArrowTopRight size={13}/></p>
                            </div>
                            <div className="flex font-Poppins leading-[1.1] uppercase font-[800] tracking-tight text-[60px] items-center gap-1 flex-col">
                                <h2 className=''>mounirlagzouli22@gmail.com</h2>
                                <h2 className=''>+212 (0)7 08 14 80 77</h2>

                            </div>
                            <div className="flex  pt-10 font-Poppins tracking-tight text-[16px] uppercase gap-2 items-center">instagram
                                <span className='w-[300px] h-[1px] bg-[#999ea5]'/>
                            </div>
                            {/* <div className="88"></div>
                            <div className="88"></div>
                            <div className="88"></div>
                            <div className="88"></div>
                            <div className="88"></div>
                            <div className="88"></div>
                            <div className="88"></div>
                            <div className="88"></div> */}

                        </div>
                    </>
                )
                : null
            }

    </>
  )
}

export default ContactWindow
