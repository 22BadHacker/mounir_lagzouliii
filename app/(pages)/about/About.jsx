import React from 'react'
import Image  from 'next/image'
import first from '@/public/image/MounirLagzouli.webp'
import second from '@/public/image/Mounir_Lagzouli.webp'

const Text = ({children}) => {
    return (
        <span className='text-[#1d1d1d]'>{children}</span>
    )
}

const About = () => {
  return (
    <div className='flex lg:flex-row flex-col w-full justify-between'>
        <div className="md:pt-36 pt-34 sm:pt-40">

            <h1 className='lg:text-[39px] leading-[1.1] text-[25px]    text-[#aeaeae]/95  font-Poppins   sm:block  md:w-[80%] lg:w-[69%] '>I’m Mounir — <Text>designer</Text>, <Text>developer</Text>, and full-time detail nerd. I believe good design isn’t just about how it looks, but how it feels. I like to blend creativity with logic — a little art, a little code, and a lot of curiosity. The goal? <Text>Make digital moments that hit differently</Text>.</h1>
            {/* <h1 className='lg:text-[39px] leading-[1.05] text-[25px]    text-[#aeaeae]/95  font-Poppins  sm:block  md:w-[80%] lg:w-[70%] '>I’m Mounir, a <span className='text-[#1d1d1d]'>graphic designer</span> and <span className='text-[#1d1d1d]'>full stack engineer</span> who believes that every detail tells a story.
            My approach to design is guided by balance — between emotion and function, art and logic.
            Through thoughtful composition, motion, and interaction, I aim to create experiences that connect with people on a <span className='text-[#1d1d1d]'>deeper level</span>.</h1> */}

            <div className="flex text-[12px]   leading-[1.16] font-[400] font-Poppins md:max-w-[460px]  flex-col gap-[18px] pt-[54px]">
                <p>I’ve always been that curious kid who wanted to know how things work — and maybe make them a little cooler. I started out in web and front-end development, geeking out over lines of code and smooth interactions. But somewhere along the way, I realized what I really loved wasn’t just building things… it was creating experiences that people actually feel. That’s when design came in and completely stole the show.</p>
                <p >I’ve always had one foot in creativity and the other in tech — visuals, code, ideas, all mixing together. Putting them side by side lets me tell stories that move, react, and come to life on screen. Now I’m all about blending design and technology to make digital moments that hit both the heart and the eye.</p>
            </div>

        </div>


        <div className="sm:flex grid grid-cols-2 lg:flex-col lg:w-[680px] pt-[90px] sm:pt-[110px] sm:gap-5 gap-2">
            <Image src={first} alt='Mounir Lagzouli' width={300} height={300} className='lg:w-full sm:w-[200px] h-[260px] saturate-[0] object-cover' />
            <Image src={second} alt='Mounir Lagzouli' width={300} height={300} className='lg:w-full w-[200px] h-[260px] saturate-[0] object-cover' />
        </div>

        


    </div>
  )
}

export default About
