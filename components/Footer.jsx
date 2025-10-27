'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TfiArrowTopRight, TfiArrowUp } from 'react-icons/tfi'
import TimeZone from './TimeZone'


const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const contactInfo = [
    { href: 'mailto:mounirlagzouli22@gmail.com', text: 'mounirlagzouli22@gmail.com' },
    { href: 'tel:+212708148077', text: '(+212) 708 148 077' }
  ]

  const socialLinks = [
    { href: 'https://www.instagram.com/mounir_lagzouli01/', text: 'Instagram' },
    { href: 'https://www.linkedin.com/in/mounir-lagzouli/', text: 'Linkedin' },
    { href: 'https://wa.me/212708148077', text: 'Whatsapp' },
    { 
      href: '/Project_Assets/Mounir_Lagzoulii_Resume.pdf', 
      text: 'Resume',
      external: true 
    }
  ]

  const SectionTitle = ({ children }) => (
    <p className='uppercase cursor-pointer h-fit  leading-[1] w-fit flex items-center gap-[1.5px] font-Archivo font-semibold text-[11.5px]'>
      {/* <span className='w-[4px] h-[4.5px] relative -top-[0.5px] bg-black' /> */}
      <span className='h-full w-[3.5px] bg-amber-300'/>
      <span className='h-full w-[2px] bg-amber-300'/>
      <span className='h-full w-[1.5px] bg-amber-300'/>
      <span className='h-full w-[2px] bg-amber-300'/>
      <span className='bg-amber-300 px-[2px]'>{children}</span>
    </p>
  )

  const LinkItem = ({ href, children, external = false, className = '' }) => {
    const linkClass = `hover:underline duration-200 ease-in-out ${className}`
    
    if (external) {
      return (
        <a 
          href={href} 
          className={linkClass}
          rel="noopener noreferrer" 
          target='_blank'
        >
          {children}
        </a>
      )
    }
    
    return (
      <Link href={href} className={linkClass}>
        {children}
      </Link>
    )
  }

  return (
    <footer className='flex-size  h-full items-center  pt-[120px]  pb-6 w-full overflow-hidden'>
      {/* Main Heading Section */}
      <div className="flex pb-10 flex-col gap-3">
        <h1 className='tracking-tight lg:text-[calc(13.5vw-80px)] md:text-[calc(11vw-10px)] lg:max-w-[59vw] md:max-w-[80vw] text-[calc(15vw-10px)] max-w-[100vw] uppercase leading-[.74] font-Archivo font-[900] text-left text-[#151515]'>
          let's bring your ideas to life ®
        </h1>
        
        <div className='sm:text-[20px] text-[18px] text-[#151515] max-w-[350px] leading-[1.05] font-RightGrotesk'>
          <span className='bg-[#151515] rounded-full size-[8px] mb-[1.5px] mx-2 inline-flex' />
          Ready to elevate your brand?
          <br /> 
          <span className='text-[#c4c4c5]'>
            Drop me a message and let's start building something amazing together.
          </span>
        </div>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 sm:gap-7 md:gap-4 w-full pt-5 sm:pt-10">
        {/* Contact Section */}
        <div className="flex flex-col gap-6">
          <SectionTitle>Contact</SectionTitle>
          <div className="flex text-[17px] font-[550] font-Archivo leading-[1.2] flex-col gap-[1px]">
            {contactInfo.map((item, index) => (
              <LinkItem key={index} href={item.href}>
                {item.text}
              </LinkItem>
            ))}
          </div>
        </div>

        {/* Social Section */}
        <div className="flex sm:col-span-1 col-span-2 flex-col gap-6">
          <SectionTitle>Socials</SectionTitle>
          <div className="grid grid-cols-2 text-[17px] font-[550] font-Archivo leading-[1.2] flex-col gap-[1px]">
            {socialLinks.map((link, index) => (
              <LinkItem 
                key={index} 
                href={link.href}
                external={link.external}
                className="flex gap-1 items-center"
              >
                {link.text} 
                <TfiArrowTopRight className='text-[10px]' />
              </LinkItem>
            ))}
          </div>
        </div>

        {/* Back to Top Section */}
        <div className="lg:col-span-2 md:col-span-1 sm:pt-0 pt-3 col-span-2 flex md:items-end justify-center  md:justify-end w-full">
          <div 
            onClick={scrollToTop} 
            className="flex text-[15px] font-[450] group font-Archivo uppercase cursor-pointer items-center gap-3"
          >
            Back To Top
            <span className='sm:size-[62px] size-[55px] duration-200 ease-in-out shadow-xs group-hover:bg-[#c4c4c5]/40 text-[#11120d]/80 border-[1.5px] border-[#c4c4c5]/40 rounded-full flex-center'>
              <TfiArrowUp size={20} />
            </span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="sm:pt-12 pt-6 w-full flex sm:flex-row flex-col gap-[2px] items-center justify-between">
        <TimeZone />
        {/* <p className='font-Archivo text-[14px] font-[450]'>
          Designed and Developed by Mounir Lagzouli.
        </p> */}
        <p className='font-Archivo text-[14px] font-[450]'>
          © Mounir Lagzouli 2025. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer