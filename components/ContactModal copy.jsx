import Link from 'next/link';
import React from 'react'
import { IoMdClose } from "react-icons/io";

const ContactModal = () => {
  return (
    <div className='z-[9999]  w-[400px] p-1   border-[#fff] border-2 bg-white h-[500px] fixed bottom-10 right-9'>
        <div className="w-full bg-[#efefef] text-[15px]  p-3.5 flex-between font-Poppins font-semibold border-b-[1px] border-b-[#efefef]">
            Get in touch
            <IoMdClose opacity={100} size={22}/>
        </div>
        
        <div className="p-3.5 pt-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
                <span className='uppercase size-[52px] border-[#b7b7b7] border-[2px] text-gray-100 flex-center bg-[#111113]/85 rounded-full font-Poppins font-[600] text-[20px]'>G</span>
                <div className="flex flex-col leading-[.9]">
                    <p className='font-Poppins  opacity-95 text-sm font-semibold '>Gmail</p>
                    <Link className='font-Poppins leading-[1.2] text-sm font-medium opacity-80' href='mailto:RtPwX@example.com' target='_blank'>mounirlagzouli22@gmail.com</Link>
                </div>
            </div>
            <div className="border-b-[1px] border-b-[#efefef]"></div>
            <div className="flex items-center gap-3">
                <span className='uppercase size-[52px] border-[#b7b7b7] border-[2px] text-gray-100 flex-center bg-[#111113]/85 rounded-full font-Poppins font-[600] text-[20px]'>W</span>
                <div className="flex flex-col leading-[.9]">
                    <p className='font-Poppins  opacity-95 text-sm font-semibold '>Whatsapp</p>
                    <Link className='font-Poppins leading-[1.25] text-sm font-medium opacity-80' href='mailto:RtPwX@example.com' target='_blank'>+212 (0)7 08 14 80 77 </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ContactModal
