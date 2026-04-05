"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const skills = [
    {
        name: "HTML", 
        category: "languages",
        logo: "/skills-logo/html-logo.png"
    },
    {
        name: "CSS",
        category: "languages",
        logo: "/skills-logo/css-logo.svg"
    },
    {
        name: "JavaScript",
        category: "languages",
        logo: "/skills-logo/js-logo.svg"
    },
    {
        name: "Next.js",
        category: "frameworks",
        logo: "/skills-logo/nextjs-logo.png"
    },
    {
        name: "Express",
        category: "frameworks",
        logo: "/skills-logo/express-logo.svg"
    },
    {
        name: "Node.js",
        category: "frameworks",
        logo: "/skills-logo/nodejs-logo.svg"
    },
    {
        name: "React.js",
        category: "libraries",
        logo: "/skills-logo/react-logo.png"
    },
    {
        name: "Tailwind CSS",
        category: "libraries",
        logo: "/skills-logo/tailwind-css-logo.png"
    },
    {
        name: "Git",
        category: "tools",
        logo: "/skills-logo/git-logo.svg"
    },
    {
        name: "MongoDB",
        category: "tools",
        logo: "/skills-logo/mongodb-logo.svg"
    }
]

const categories = ["all", "languages", "frameworks", "libraries", "tools"]

export default function Skills() {

    const [activeCategory, setActiveCategory] = useState("all")
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    )
  return (
    <section id='skills' className='py-10 lg:py-20'>

        <div className='px-[8%] lg:px-[5%]'>

            <div className='flex flex-col lg:flex-row items-center lg:justify-between mb-8'>

                <h1 className=' text-4xl md:text-5xl lg:text-6xl tracking-widest mb-6'>
                    Skills
                </h1>

                <p className=' text-center lg:text-justify text-base text-muted font-semibold'>
                    The skills, tools and technologies I experienced with
                </p>
            </div>

            <div className='flex flex-wrap justify-center gap-4 mb-5'>
                {categories.map((category, key) => (
                    <button onClick={() => setActiveCategory(category)} key={key} className={` capitalize px-5 py-2 rounded-full transition-colors font-semibold font-body text-sm duration-300 cursor-pointer ${activeCategory === category ? "bg-accent text-white hover:bg-white hover:text-accent" : "bg-white text-accent hover:text-white hover:bg-accent"}`}>
                        {category}
                    </button>
                ))}
            </div>


            <div className=' mt-10 lg:px-30 lg:py-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>

                {filteredSkills.map((skill, key ) => (
                    <div key={key} className='bg-surface-2 hover:scale-105 duration-300 transition-all flex items-center flex-col max-w-[200px] p-4 rounded-md'>
                        <div className='rounded-full w-14 h-14 flex items-center justify-center bg-[#ff6a005e] border-2 border-[#ff6b004d] mb-3'>

                            <Image src={skill.logo} width={40} height={40} alt='skill-logo' />

                        </div>
                        <h4 className='text-lg text-center font-semibold text-gray-500 tracking-wider'>
                            {skill.name}
                        </h4>
                    </div>
                ) )}

            </div>


        </div>

    </section>
  )
}
