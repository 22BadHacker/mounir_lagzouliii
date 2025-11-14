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
                        <div   className='fixed p-6 text-[#15161b]    flex items-center top-0 left-0 z-[1000] w-full min-h-svh h-svh bg-black/30  backdrop-blur-[2px] '>

                        <div className="w-[700px] flex flex-col gap-8 p-10 pt-[70px] rounded-2xl relative bg-[#eee] h-full ">

                            <button className='absolute text-[16px] flex gap-3 items-center font-Archivo font-light top-5 uppercase right-5' onClick={()=>setOpen(!open)}><GrClose size={14}/> close</button>
                            
                            <h4 className='text-[54px]  uppercase font-Poppins font-semibold '>Start a project</h4>

                            <div className="flex  flex-col gap-5 ">
                                <h5 className='font-Poppins text-[15px] leading-[1] bg-yellow-200 w-fit flex items-center gap-2 uppercase'>What can i do for you ?</h5>
                                <div className="flex items-center gap-2">
                                    {
                                        ['Brand Design', 'website', 'UX/UI Design', 'Logo Design', 'other'].map((list, i) => (
                                            <button className='px-4 font-Poppins text-[14px] capitalize py-[8px] rounded-full border-[1px] hover:bg-[#dddddd] border-[#dddddd]' key={i}>{list}</button>
                                        ))
                                    }

                                </div>
                            </div>

                            .flex.flex-col.gap-3
                            <div className="flex pt-2 flex-col gap-5 ">
                                <h5 className='font-Poppins text-[15px] leading-[1] bg-yellow-200 w-fit flex items-center gap-2 uppercase'>Your information</h5>
                                <div className="grid grid-cols-2 items-center gap-4">
                                    <input type="text" className='border-[1px] outline-none border-[#dddddd] px-3 py-[10px] rounded-full' />
                                    <input type="text" className='border-[1px] border-[#dddddd] px-3 py-[10px] rounded-full' />

                                </div>
                            </div>

                            <textarea className='border-[1px] outline-none border-[#dddddd] px-3 py-[10px] h-[250px] rounded-2xl' name="" id=""></textarea>
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
