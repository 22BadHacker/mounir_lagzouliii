import React from 'react'
import Image from 'next/image'
import phone from '@/public/image/img23.jpg'



const Capabilities = () => {
    const expertiseItems = [
      {
        number: '1',
        title: 'Art Direction',
        description: 'I craft visual universes that tell your story, break the rules, and make every detail matter.'
      },
      {
        number: '2',
        title: 'UI/UX Design',
        description: 'I design interfaces that don’t just work—they captivate, guide, and transform the way people experience your brand.'
      },
      {
        number: '3',
        title: 'Web Development',
        description: 'I build digital experiences that are fast, seamless, and unforgettable—code that speaks and performs.'
      },
      {
        number: '4',
        title: 'Brand Identity',
        description: 'I craft identities that don’t just represent—they resonate, inspire, and leave a lasting mark.'
      }
    ];
    
    const knowledgeItems = [
      {
        category: 'Design & UI Animation',
        tools: 'Figma, Photoshop, Illustrator'
      },
      {
        category: 'Development Technologies',
        tools: 'HTML, CSS, Laravel, MySQL, React, Next.js, Tailwind CSS'
      },
      {
        category: 'Collaboration & Cooperation',
        tools: 'Zoom, Email, Google Meet'
      }
    ];
    
    const Divider = () => (
      <div className="w-full h-[0.5px] bg-[#c4c4c4]/70" />
    );
  return (
    <div className='h-svh  flex-size w-full '>

        <div className="  pt-29 h-full  flex gap-7 flex-col pb-8 justify-between ">
            <section className="flex flex-col gap-2">
                <h1 className='text-[40px] text-[#aeaeae] font-Poppins'>Expertise That   <span className='text-foreground'>Executes</span> Vision</h1>
                <p className='text-[12px] leading-[16px] font-Poppins max-w-[400px]'>Design, development, and storytelling—combined to build digital experiences that are not only functional but truly unforgettable.</p>
            </section>

            {/* Expertise Section */}

            <section  className="flex font-Poppins flex-col gap-7">
                <h2 className='text-[24px] '>Expertise</h2>

                <div className="flex text-[12px] leading-[14px] xl:max-w-[670px]  flex-col gap-4">
                    {expertiseItems.map((item, index) => (
                        <div className='flex-col flex gap-4' key={item.number}>
                            <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2">
                                <div className="flex h-fit gap-1 items-center">
                                    <span className="text-sm">[{item.number}]</span>
                                    <h3 className="font-medium">{item.title}</h3>
                                </div>
                                <p className="text-[#aeaeae]">
                                    {item.description}
                                </p>
                            </div>
                            {index < expertiseItems.length && <Divider />}
                        </div>
                        ))}
                </div>
            </section>

            {/* Knowledge Section */}

            <section className="flex font-Poppins flex-col gap-7">
                <h2 className='text-[24px] '>Knowledge</h2>
                <div className="flex text-[12px] leading-[14px] xl:max-w-[670px]  flex-col gap-4">
                    {knowledgeItems.map((item) => (
                    <div 
                        key={item.category}
                        className="w-full grid grid-cols-1 gap-2 md:grid-cols-2"
                    >
                        <h3 className="">{item.category}</h3>
                        <p className=" text-[#aeaeae] text-left md:text-right">
                        {item.tools}
                        </p>
                    </div>
                    ))}

                </div>

            </section>

        </div>

        <Image alt='phone' src={phone} className=' absolute hidden 2xl:flex right-0 top-0 w-[700px] h-full object'/>
    </div>
  )
}

export default Capabilities
