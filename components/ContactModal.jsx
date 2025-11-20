import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoMdClose } from "react-icons/io";
import mee from '@/public/image/Mounir_Lagzouli.webp'

const ContactModal = () => {
  return (
    <div className='z-[9999]  w-[400px] p-1    bg-white h-[500px] fixed bottom-10 right-9'>
        <div className="w-full bg-[#efefef] text-[15px]  px-3 py-2 flex-between font-Poppins font-semibold border-b-[1px] border-b-[#efefef]">
            {/* New Message */}
            <Image src={mee} width={20} height={20} className='object-cover rounded-full size-[35px] border-white border-[1px]'/>
            <IoMdClose opacity={100} size={22}/>
        </div>


        
        <div className="p-3.5 pt-4 flex flex-col gap-3">
           
        </div>

    </div>
  )
}

export default ContactModal
