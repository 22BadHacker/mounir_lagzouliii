'use client'
import React, { useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaPlay, FaPause } from "react-icons/fa6"
import { AnimatePresence, motion } from 'framer-motion'
import Logo from '@/public/Logo/Mounir_Lagzouli_1.svg'
import LogoRed from '@/public/Logo/Mounir_Lagzouli_Red.svg'
import { NavLinks, Socials } from '@/data/Data'
import { TfiArrowTopRight } from "react-icons/tfi";


const SectionTitle = ({ children }) => (
    <p className='uppercase cursor-pointer h-fit  leading-[1] w-fit flex items-center gap-[1.5px] font-Archivo font-semibold text-[12.5px]'>
      {/* <span className='w-[4px] h-[4.5px] relative -top-[0.5px] bg-black' /> */}
      <span className='h-full w-[3.5px] bg-amber-300'/>
      <span className='h-full w-[2px] bg-amber-300'/>
      <span className='h-full w-[1.5px] bg-amber-300'/>
      <span className='h-full w-[2px] bg-amber-300'/>
      <span className='bg-amber-300 px-[2px]'>{children}</span>
    </p>
  )

  

// Music Player Component
const MusicPlayer = ({ isPlaying, onToggle }) => (
  <button
    onClick={onToggle}
    aria-label={isPlaying ? 'Pause music' : 'Play music'}
    className="flex active:scale-95 cursor-pointer text-[15px] items-center justify-center h-[30px] w-[47px] bg-[#efefef] transition-all duration-200 hover:bg-[#e5e5e5]"
  >
    {isPlaying ? (
      <FaPause className="text-[17px]" aria-hidden="true" />
    ) : (
      <FaPlay aria-hidden="true" />
    )}
  </button>
)


// Menu Link Component
const MenuLink = ({ href, title, index, onClick, isActive }) => (

    <div className="flex flex-col">
       <span className="font-Archivo flex gap-[4px] italic items-center tracking-wide num text-[9.5px] opacity-80"><span className='size-[3px] relative -top-[1px] bg-black'/>[00 - 
          {String(index + 1).padStart(2, '0')}]
        </span>
      <Link
        href={href}
        onClick={onClick}
        className={`w-full leading-[1.3]  hover:text-[#da262c]  flex-between text-[55px] sm:text-[65px] tracking-[.08px] duration-200 transition-colors ${
          isActive ? 'text-[#da262c]' : ''
        }`}
      >
        {title}
       
      </Link>
    </div>

)


// Desktop Nav Link Component
const DesktopNavLink = ({ href, title, isActive }) => (
  <Link 
    href={href} 
    className={`link-wrapper  px-[.5px] text-[12.5px] font-Archivo font-[450]   tracking-[0px] h-[16px] hover:text-primary ${
      isActive ? 'text-primary' : ''
    }`}
  >
    
    <span className="link-text relative -top-[2.6px]">{title}</span>
    <span className="link-text-clone mt-[.5px]">{title}</span>
  </Link>
)

// Mobile Menu Toggle Component
const MobileMenuToggle = ({ isMenuOpen, onToggle }) => (
  <button
    onClick={onToggle}
    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
    className="link-wrapper cursor-pointer text-[14px] tracking-[.08px] h-[20px] hover:text-primary"
  >
    <span className="link-text relative -top-[0.5px]">
      {isMenuOpen ? 'Close' : 'Menu'}
    </span>
    <span className="link-text-clone mt-[0.4px]">
      {isMenuOpen ? 'Close' : 'Menu'}
    </span>
  </button>
)

// Logo Component
const HeaderLogo = () => (
  <Link href="/" className="h-[18px]  link-wrapper">
    <Image 
      alt="Mounir Lagzouli" 
      src={Logo} 
      width={100} 
      height={100} 
      className="w-[170px] relative top-[-.8px] link-text"
      priority
    />
    <Image 
      alt="Mounir Lagzouli" 
      src={LogoRed} 
      width={100} 
      height={100} 
      className="w-[170px]  pb-[4px] link-text-clone"
      priority
    />
  </Link>
)

const Header = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error)
      })
    }

    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        delay: 0.3
      }
    }
  }

  return (
    <>
      <header className="py-[20px] transition-all duration-400 ease-in-out fixed top-0 left-0 right-0 w-full z-[999] max-w-[1670px] px-5 sm:px-6 mx-auto flex-between">
        <HeaderLogo />
        
        <nav className="flex-center  transition-all duration-400 ease-in-out font-light bg-[#fff]/80 backdrop-blur-[5px]  max-md:w-[115px] max-md:gap-[20px] w-fit py-[5.5px] pl-[5.5] pr-[10px] gap-[19px]">
          <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />
          
          {/* Mobile Menu Toggle */}
          <div className="hidden max-md:flex">
            <MobileMenuToggle isMenuOpen={isMenuOpen} onToggle={toggleMenu} />
          </div>

          {/* Desktop Navigation */}
          <div className="max-md:hidden gap-[20px] flex-center">
            {NavLinks.map((link, index) => (
              <DesktopNavLink 
                key={index} 
                href={link.url} 
                title={link.title}
                isActive={pathname === link.url}
              />
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 duration-300 ease-in-out overflow-hidden mx-auto px-5 sm:px-6 hidden max-md:grid grid-rows-[1fr_auto] pt-[120px] sm:pb-6 pb-7 top-0 left-0 w-screen h-svh bg-[#efefef] z-[500]"
          >
            <div className='flex w-fit flex-col gap-8'>
              {/* <p className='uppercase  flex items-center gap-3 font-Archivo font-semibold  text-[12.5px]'><span className='w-[4px] h-[4.5px] relative -top-[1px] bg-black'/>Discover</p> */}
              <SectionTitle>Discover</SectionTitle>
              <div className='flex flex-col gap-4'>
                {NavLinks.map((link, index) => (
                  <MenuLink
                    key={index}
                    href={link.url}
                    title={link.title}
                    index={index}
                    onClick={closeMenu}
                    isActive={pathname === link.url}
                  />
                ))}
              </div>
            </div>

            <div className='flex flex-col gap-6'>

                <SectionTitle>Socials</SectionTitle>

                {/* <div className="flex items-center gap-4">
                    
                    {
                      Socials.map((social, i) => (
                        <>
                          <Link className=' hover:text-primary flex gap-1 items-center text-[14.5px]' target='_blank' href={social.url}>
                              {social.title} <TfiArrowTopRight className='text-[10px]' />
                          </Link>

                          
                        </>
                      ))
                    }

                </div> */}
                <div className="grid grid-cols-2 text-[17px] font-[550] font-Archivo leading-[1.2] flex-col gap-[1px]">
                  {Socials.map((link, index) => (
                    <Link key={index} 
                    href={link.url} target='_blank' className="flex gap-1 items-center">

                      {link.title} 
                      <TfiArrowTopRight className='text-[10px]' />
                    </Link>
                  ))}
                </div>


            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/music/intro2.mp3" loop />
    </>
  )
}

export default Header


