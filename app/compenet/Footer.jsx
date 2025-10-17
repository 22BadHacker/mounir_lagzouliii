import React from 'react'
import Logo from '@/public/Logo/Mounir_Lagzouli_1.svg'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex-size flex flex-col justify-between h-full w-full overflow-hidden pb-4'>
        <div className=""></div>
        <Image alt='Mounir Lagzouli' className='object-cover w-svw' src={Logo} width={100} height={100}/>
      
    </div>
  )
}

export default Footer
