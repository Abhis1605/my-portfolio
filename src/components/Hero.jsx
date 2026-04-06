"use client"
import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';
import React, { useRef } from 'react'
import { useReducedMotion, useScroll, useTransform, motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';

export default function Hero() {
  const sectionRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({ 
    target: sectionRef,
    offest: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0,1], [0, -20])
  const bgY = useTransform(scrollYProgress, [0,1], [0, -20])
  return (
   <section id='home' ref={sectionRef}>
    <motion.div style={shouldReduceMotion ? undefined : { y: bgY }} className='px-[8%] lg:px-[5%] hero-header' id='home'>

            <motion.div  style={shouldReduceMotion ? undefined : { y: heroY }} variants={staggerContainer} initial="hidden" animate="show"  className='z-20 mt-30 lg:mt-100 flex flex-col  lg:flex-row lg:items-end lg:justify-between  gap-4 md:gap-8 lg:gap-8'>


                <motion.h1  variants={fadeUp} viewport={viewportOnce} className='text-[70px] md:text-[120px] lg:text-[110px] text-foreground leading-[0.92] tracking-tight'>
                  ABHI <br /> SOLANKI
                </motion.h1>

              <motion.div variants={staggerContainer}>
                 <motion.h3 variants={fadeUp} className=' text-2xl md:text-5xl lg:text-4xl'>
                  <TypeAnimation
      sequence={[
        'MERN Stack Developer',
        1000, 
        'Frontend Developer',
        1000,
        'Computer Engineer',
        1000,
        'Full-Stack Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
                </motion.h3>
                <motion.p variants={fadeUp} className=' mt-2 mb-4 text-lg md:text-xl lg:text-[14px] md:max-w-140 lg:max-w-105  text-muted font-semibold'>
                  I’m currently pursuing computer engineering and working towards becoming a skilled web developer. I have experience with React, Node.js, and MongoDB, and I enjoy building projects that combine functionality with a clean user experience.
                </motion.p>

                 <motion.div variants={fadeUp} className=' w-fit flex flex-col md:flex-row lg:flex-row lg:items-center gap-4 md:gap-10 lg:gap-4'>
                  <Link href="#projects" className='flex items-center gap-2 uppercase px-4 py-2 md:px-8 md:py-4  lg:px-4 lg:py-1 bg-transparent border hover:bg-foreground hover:text-accent hover:border-0 transition-colors duration-300 hover:scale-95'>
                  <MoveUpRight className='w-4 h-4' />
                  View Projects
                </Link>
                <Link href="#projects" className='flex items-center gap-2 uppercase px-4 py-2 md:px-8 md:py-4 lg:px-4 lg:py-1 bg-transparent border hover:bg-foreground hover:text-accent hover:border-0 transition-all duration-300 hover:scale-95'>
                  <MoveUpRight className='w-4 h-4 ' />
                  Contact
                </Link>
                </motion.div>


              </motion.div>

                

              </motion.div>


        </motion.div>
   </section>
  )
}
