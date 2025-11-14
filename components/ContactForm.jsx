
import React from 'react'
import { RiCloseLargeFill } from "react-icons/ri";

const ContactForm = ({onClose, open}) => {
  return (
    <>
        {
            open && (

                <div className='fixed  h-svh w-screen inset-0 bg-transparent  z-[10]'>
                    <div className="flex-size pb-10 w-full h-svh flex items-end justify-end">
                        <div className="w-[520px] relative px-7 pt-[65px] pb-4 flex flex-col gap-3 rounded-3xl z-[9999] border-[.5px] border-[#b0b0b0]/40  bg-[#efefef] h-[650px]">
                            <div onClick={onClose} className="absolute rounded-full top-5 border-[.5px] right-5 size-11 flex-center">
                            <RiCloseLargeFill />
                            </div>
                            
                            <h1 className='tracking-[-0.035em]  lg:text-[30px]  md:text-[calc(12.5vw-10px)] lg:w-[350px] md:max-w-[77vw] sm:text-[calc(15vw-10px)] text-[calc(15vw-10px)]  max-w-[100vw] uppercase leading-[.76] font-Poppins font-[800] text-left text-[#151515]'>
                                Let’s Bring YOUR VISIONS to REAL Life ®
                            </h1>
                            
            
            
                        </div>
            
                    </div>
            
                    {/* <div className="absolute bg-gradient-to-t from-[#efefef] to-[#efefef]/5 bottom-0 left-0 w-full h-[200px] z-[20] backdrop-blur-md z"></div> */}
                    <div className="absolute bottom-0 left-0 w-full h-[400px] fade-edges inset-0 bg-gradient-to-r from-blue-200/0 to-purple-200/20 backdrop-blur-lg" />
                    {/* <div className="absolute fade-edges inset-0 bg-gradient-to-r from-blue-200/0 to-purple-200/20 backdrop-blur-lg" /> */}
                </div>
            )
        }
    </>
  )
}

export default ContactForm
