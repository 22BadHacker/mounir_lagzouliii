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
    <div className='pt-5'>

        <div className="flex flex-col gap-3">
            <SectionTitle />
            <h1 className='tracking-[-0.035em]  lg:text-[70px]  md:text-[calc(12.5vw-10px)] lg:max-w-[650px] md:max-w-[77vw] sm:text-[calc(15vw-10px)] text-[calc(15vw-10px)]  max-w-[100vw] uppercase leading-[.75] font-Poppins font-[900] text-left text-[#151515]'>
              Let’s Bring YOUR VISIONS to REAL Life ®
            </h1>

        </div>

        <div className="w-full pt-[60px] grid grid-cols-2">

           <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                  <span className="flex gap-2 items-center text-[13px] font-Poppins"><span  className='size-[5px] bg-black'/> (Get in touch)</span>
                  <div className="flex text-[20px] font-[550] font-Poppins leading-[1.2] flex-col gap-[1px]">
                      {contactInfo.map((item, index) => (
                        <LinkItem target='_blank' key={index} href={item.href}>
                          {item.text}
                        </LinkItem>
                      ))}
                    </div>

              </div>
              <div className="flex flex-col gap-4">
                  <span className="flex gap-2 items-center text-[13px] font-Poppins"><span  className='size-[5px] bg-black'/> (Follow me)</span>
                  <div className="grid grid-cols-2 text-[20px] font-[550] font-Poppins leading-[1.2] flex-col gap-[1px]">
                      {socialLinks.map((item, index) => (
                        <LinkItem target='_blank' key={index} href={item.href}>
                          {item.text}
                        </LinkItem>
                      ))}
                    </div>

              </div>

            </div>


           
        </div>


    </div>
  )
}

export default Contact

// [#151515]