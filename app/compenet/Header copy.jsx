'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Logo from '@/public/Logo/Mounir_Lagzouli_1.svg'
import Loogo from '@/public/Logo/Mounir_Lagzouli_Red.svg'
import Link from 'next/link'
import { NavLinks } from '@/data/Data'
import { FaPlay, FaPause } from "react-icons/fa6";
import { AnimatePresence, motion } from 'framer-motion'

const Header = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
   const [clicking, setClicking] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (

    <>
      <div className='py-5 fixed  top-0 left-0 right-0 w-screen z-[999] max-w-[1680px] px-6 mx-auto  flex-between'>

          <Link href={'/'} className='h-[20px] link-wrapper '>
              <Image alt='Mounir Lagzouli'  src={Logo} width={100} height={100} className='w-[185px] relative top-[1px] link-text'/>
              <Image alt='Mounir Lagzouli'  src={Loogo} width={100} height={100} className='w-[185px] pb-[5.5px]  link-text-clone'/>
          </Link>

          <div className={`flex-center transition-[all] duration-[.4s] ease-in-out  font-light bg-[#fcfcfc] max-md:w-[110px] max-md:gap-6 w-fit py-[6px] px-[9px] gap-7`}>

              <div  onClick={toggleMusic} className="flex  active:scale-[.85] active:blur-2xl cursor-pointer text-[15px] flex-center h-[30px] w-[38px] bg-[#efefef]">
                  <audio ref={audioRef} src="/music/intro2.mp3" loop />
                  {
                    isPlaying ? <FaPause className='text-[17px]'/> : <FaPlay />
                  }
              </div>

              {/* menu Toggle */}

              <div onClick={toggleMenu} className="hidden max-md:flex">
                  <p  className='link-wrapper  cursor-pointer text-[14px] tracking-[.08px]   h-[20px]  hover:text-primary' >
                      <p className=' link-text relative -top-[.5px]'>{isMenuOpen ? 'Close' : 'Menu'}</p>
                      <p className=' link-text-clone mt-[.4px]   ' >{isMenuOpen ? 'Close' : 'Menu'}</p>
                  </p>
              </div>


              {/* Main Nav Links */}
              <div className="max-md:hidden gap-7  flex-center">
                  {
                    NavLinks.map((i, link) => (
                      <Link key={link} href={i.url} className='link-wrapper   text-[14px] tracking-[.08px]   h-[20px]  hover:text-primary' >
                        <p className=' link-text relative -top-[.5px] ' >{i.title}</p>
                        <p className=' link-text-clone mt-[.4px]   ' >{i.title}</p>
                      </Link>
                    ))
                  }

              </div>

          </div>
      </div>

      <AnimatePresence>
        {
          isMenuOpen && (
            <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: .3, ease: 'easeInOut', delay: .3 }} className="fixed right-0 max-auto px-7 hidden max-md:flex flex-col gap-9 pt-[180px] top-0 left-0 w-full h-full bg-[#efefef] opacity-100 z-10">
              
                {
                    NavLinks.map((i, link) => (
                        <div className='flex line-box flex-col gap-1'>
                            <Link key={link} href={i.url} className=' w-full font-Milligram-Regular-trial   flex-between  text-[40px] tracking-[.08px] duration-[.2s] hover:text-[#da262c]' > {i.title} <span className='font-RightGrotesk text-[18px] opacity-80'>00{link+1} </span>
                            </Link>

                            <div className="w-full relative line h-[.5px] bg-[#d4d4d4]"></div>
                        </div>
                    ))
                  }
            </motion.div>
          )
        }

      </AnimatePresence>
      

    </>
  )
}

export default Header
