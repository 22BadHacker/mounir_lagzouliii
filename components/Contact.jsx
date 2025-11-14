import Link from 'next/link'
import React from 'react'
import { WiStars } from "react-icons/wi";

const SectionTitle = () => (
    <div className='uppercase h-[10.5px] cursor-pointer   leading-[1] w-fit flex items-center gap-[1.5px] font-Archivo font-semibold text-[11.5px]'>
      {/* <span className='w-[4px] h-[4.5px] relative -top-[0.5px] bg-black' /> */}
      <span className='h-full w-[3.5px] bg-amber-300'/>
      <span className='h-full w-[2px] bg-amber-300'/>
      <span className='h-full w-[1.5px] bg-amber-300'/>
      <span className='h-full w-[2px] bg-amber-300'/>
      <span className='bg-amber-300 h-full w-[85px] px-[2px]'></span>
    </div>
  )

   const contactInfo = [
    { href: 'mailto:mounirlagzouli22@gmail.com', text: 'mounirlagzouli22@gmail.com' },
    { href: 'tel:+212708148077', text: '(+212) 708 148 077' }
  ]

  const socialLinks = [
    { href: 'https://www.instagram.com/mounir_lagzouli01/', text: 'Instagram' },
    { href: 'https://www.linkedin.com/in/mounir-lagzouli/', text: 'Linkedin' },
    { href: 'https://wa.me/212708148077', text: 'Whatsapp' },
    { href: 'https://wa.me/212708148077', text: 'Behance' },
  ]


    const LinkItem = ({ href, children,  className = '' }) => {
    const linkClass = `   ${className}`
        
    return (
      <Link href={href} className={linkClass}>
        {children}
      </Link>
    )
  }

const Contact = () => {
  return (
    <div className='flex  w-full h-auto flex-col'>
      <div className="pb-[90px] w-full flex flex-col gap-8 ">
          <h1  className='md:text-[min(8.5vw,200px)] text-[50px] font-Oswald col-span-1 leading-[.8]  text-[#11120d]/95   font-bold uppercase'> contact </h1>

      </div>

        {/* <h1 className='text-[calc(8.5vw-10px)] max-w-[80vw] text-center leading-[.9]'><span className=''>Let's build</span> the next big thing <span>together</span></h1> */}


    </div>
  )
}

export default Contact

// [#151515]