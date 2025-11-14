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
                        <div   className='fixed pb-10  px-10 text-[#15161b]   pt-[220px]  grid grid-cols-2 gap-10 top-0 left-0 z-[1000] w-full min-h-svh h-screen bg-[#d3d8e1]'>
                            <button className='absolute text-[17px] flex gap-3 items-center font-Archivo font-light top-5 uppercase right-10' onClick={()=>setOpen(!open)}><GrClose size={15}/> close</button>
                            <div className="text-center w-fit flex-col gap-0">
                                <h4 className='text-[72.5px] leading-2 opacity-95 tracking-tight italic font-Playfair'>Let's work together !</h4>
                                <h5 className='uppercase font-Oswald tracking-tighter font-[900] text-[140px]'>reach out</h5>
                            </div>
                            <div className=" flex flex-col gap-5">
                                <div className="grid grid-cols-2 w-full gap-5">
                                    <div className="flex flex-col gap-0">
                                        <span className='text-[13px] opacity-60 uppercase font-Archivo'>First Name</span>
                                        <input type="text"  className='border-b-[1px] border-b-black/40 outline-none font-Archivo font-medium text-[19px] pt-1 pb-2'/>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    </>
                )
                : null
            }

    </>
  )
}

export default ContactWindow
