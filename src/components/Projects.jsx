import React from 'react'
import ProjectCard from './common/ProjectCard'
import Link from 'next/link'

export default function Projects() {
  return (
    <section id='projects' className='py-10 lg:py-20 bg-[#0D0D0D]'>
        <div className='px-[8%] lg:px-[5%]'>

            <div className='flex flex-col lg:flex-row items-center justify-between mb-5'>

                <h1 className=' text-4xl md:text-5xl lg:text-6xl tracking-widest uppercase mb-6'>
                    Projects
                </h1>

                <p className=' text-center text-base text-muted font-semibold'>
                    Some of the projects I’ve built using modern web technologies.
                </p>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:p-10 gap-8 lg:gap-10 mb-10 lg:mb-0'>

                <ProjectCard />

            </div>

           <div className='flex items-center justify-center'>
            <button className='text-base font-normal uppercase border-2 px-4 py-2 hover:text-white hover:border-0 hover:bg-accent hover:scale-95 transition-all duration-300'>
            <Link href="/projects">
                view more Projects
            </Link>
           </button>
           </div>

        </div>

    </section>
  )
}
