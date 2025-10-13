'use client'
import React, { useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlay, FaPause } from "react-icons/fa6"
import { AnimatePresence, motion } from 'framer-motion'
import Logo from '@/public/Logo/Mounir_Lagzouli_1.svg'
import LogoRed from '@/public/Logo/Mounir_Lagzouli_Red.svg'
import { NavLinks } from '@/data/Data'

// Music Player Component
const MusicPlayer = ({ isPlaying, onToggle }) => (
  <button
    onClick={onToggle}
    aria-label={isPlaying ? 'Pause music' : 'Play music'}
    className="flex active:scale-95 cursor-pointer text-[15px] items-center justify-center h-[30px] w-[42px] bg-[#efefef] transition-all duration-200 hover:bg-[#e5e5e5] "
  >
    {isPlaying ? (
      <FaPause className="text-[17px]" aria-hidden="true" />
    ) : (
      <FaPlay aria-hidden="true" />
    )}
  </button>
)

// Menu Link Component
const MenuLink = ({ href, title, index, onClick }) => (
  <div className="flex line-box flex-col gap-1">
    <Link
      href={href}
      onClick={onClick}
      className="w-full font-Milligram-Regular-trial flex-between text-[40px] tracking-[.08px] duration-200 hover:text-[#da262c] transition-colors"
    >
      {title}
      <span className="font-RightGrotesk num text-[18px] opacity-80">0
        {String(index + 1).padStart(2, '0')}
      </span>
    </Link>
    <div className="w-full line relative h-[0.5px] bg-[#d4d4d4]" />
  </div>
)

// Desktop Nav Link Component
const DesktopNavLink = ({ href, title }) => (
  <Link href={href} className="link-wrapper text-[14px] tracking-[.08px] h-[20px] hover:text-primary">
    <span className="link-text relative -top-[0.5px]">{title}</span>
    <span className="link-text-clone mt-[0.4px]">{title}</span>
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
  <Link href="/" className="h-[20px] link-wrapper">
    <Image 
      alt="Mounir Lagzouli" 
      src={Logo} 
      width={100} 
      height={100} 
      className="w-[185px] relative top-[1px] link-text"
      priority
    />
    <Image 
      alt="Mounir Lagzouli" 
      src={LogoRed} 
      width={100} 
      height={100} 
      className="w-[185px] pb-[5.5px] link-text-clone"
      priority
    />
  </Link>
)

const Header = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      <header className="py-5 fixed top-0 left-0 right-0 w-screen z-[999] max-w-[1680px] px-6 mx-auto flex-between">
        <HeaderLogo />
        
        <nav className="flex-center transition-all duration-400 ease-in-out font-light bg-[#fcfcfc] max-md:w-[115px] max-md:gap-6 w-fit py-[6px] px-[9px] gap-7">
          <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />
          
          {/* Mobile Menu Toggle */}
          <div className="hidden max-md:flex">
            <MobileMenuToggle isMenuOpen={isMenuOpen} onToggle={toggleMenu} />
          </div>

          {/* Desktop Navigation */}
          <div className="max-md:hidden gap-7 flex-center">
            {NavLinks.map((link, index) => (
              <DesktopNavLink 
                key={index} 
                href={link.url} 
                title={link.title} 
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
            className="fixed right-0 mx-auto px-7 hidden max-md:flex flex-col gap-9 pt-[180px] top-0 left-0 w-full h-full bg-[#efefef] z-10"
          >
            {NavLinks.map((link, index) => (
              <MenuLink
                key={index}
                href={link.url}
                title={link.title}
                index={index}
                onClick={closeMenu}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/music/intro2.mp3" loop />
    </>
  )
}

export default Header