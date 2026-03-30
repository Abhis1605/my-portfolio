import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <>
        <div className='px-[8%] lg:px-[5%] hero-header' id='home'>

            <div className='hero-content w-full lg:w-1'>
            </div>

            <div className='relative'>

              <div>

                <h1 className='text-[90px] md:text-9xl lg:text-8xl text-foreground leading-[0.92] tracking-tight absolute -bottom-30 lg:-bottom-70 -left-1 lg:left-0'>
                  ABHI <br /> SOLANKI
                </h1>
              </div>

                
                <div className='absolute right-0 md:right-25 lg:right-0 -bottom-95 md:-bottom-100 lg:-bottom-75'>
                  <h3 className=' text-2xl md:text-5xl lg:text-4xl'>
                  MERN STACK DEVELOPER
                </h3>
                <p className=' mt-2 mb-4 md:text-xl lg:text-[14px] md:max-w-140 lg:max-w-105  text-muted font-semibold'>
                  I’m currently pursuing computer engineering and working towards becoming a skilled web developer. I have experience with React, Node.js, and MongoDB, and I enjoy building projects that combine functionality with a clean user experience.
                </p>

                <div className='flex items-center gap-4'>
                  <Link href="#projects" className='flex items-center gap-2 uppercase px-4 py-1 bg-transparent border hover:bg-foreground hover:text-accent hover:border-0 transition-colors duration-300 hover:scale-95'>
                  <MoveUpRight className='w-4 h-4' />
                  View Projects
                </Link>
                <Link href="#projects" className='flex items-center gap-2 uppercase px-4 py-1 bg-transparent border hover:bg-foreground hover:text-accent hover:border-0 transition-all duration-300 hover:scale-95'>
                  <MoveUpRight className='w-4 h-4 ' />
                  Contact
                </Link>
                </div>
                </div>




              </div>


        </div>
    </>
  )
}
