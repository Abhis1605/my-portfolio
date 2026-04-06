"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useMemo, useState, useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const skills = [
  {
    name: "HTML",
    category: "languages",
    logo: "/skills-logo/html-logo.png",
  },
  {
    name: "CSS",
    category: "languages",
    logo: "/skills-logo/css-logo.svg",
  },
  {
    name: "JavaScript",
    category: "languages",
    logo: "/skills-logo/js-logo.svg",
  },
  {
    name: "Next.js",
    category: "frameworks",
    logo: "/skills-logo/nextjs-logo.png",
  },
  {
    name: "Express",
    category: "frameworks",
    logo: "/skills-logo/express-logo.svg",
  },
  {
    name: "Node.js",
    category: "frameworks",
    logo: "/skills-logo/nodejs-logo.svg",
  },
  {
    name: "React.js",
    category: "libraries",
    logo: "/skills-logo/react-logo.png",
  },
  {
    name: "Tailwind CSS",
    category: "libraries",
    logo: "/skills-logo/tailwind-css-logo.png",
  },
  {
    name: "Git",
    category: "tools",
    logo: "/skills-logo/git-logo.svg",
  },
  {
    name: "MongoDB",
    category: "tools",
    logo: "/skills-logo/mongodb-logo.svg",
  },
];

const categories = ["all", "languages", "frameworks", "libraries", "tools"];

export default function Skills() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { amount: 0.25, once: true })

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = useMemo(() => {
    return skills.filter(
      (skill) => activeCategory === "all" || skill.category === activeCategory,
    );
  }, [activeCategory]);
  return (
    <section id="skills" className="py-10 lg:py-20">
      <div className="px-[8%] lg:px-[5%]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row items-center lg:justify-between mb-8"
        >
          <motion.h1
            variants={fadeUp}
            className=" text-4xl md:text-5xl lg:text-6xl tracking-widest mb-6"
          >
            Skills
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className=" text-center lg:text-justify text-base text-muted font-semibold"
          >
            The skills, tools and technologies I experienced with
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-5"
        >
          {categories.map((category) => (
            <motion.button
              whileTap={{ scale: 0.96 }}
              whileHover={{ y: -2 }}
              onClick={() => setActiveCategory(category)}
              key={category}
              className={` capitalize px-5 py-2 rounded-full transition-colors font-semibold font-body text-sm duration-300 cursor-pointer ${activeCategory === category ? "bg-accent text-white hover:bg-white hover:text-accent" : "bg-white text-accent hover:text-white hover:bg-accent"}`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div ref={sectionRef} key={activeCategory} initial="hidden" animate={isInView ? "show" : "hidden" } exit={{ opacity: 0, y: 8 }} variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
          }} className=" mt-10 lg:px-30 lg:py-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.96 },
                    show: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.35, ease: "easeOut" },
                    },
                  }}
                  whileHover={{ y: -4, scale: 1.03 }}
                className="bg-surface-2 hover:scale-105 duration-300 transition-all flex items-center flex-col max-w-[200px] p-4 rounded-md"
              >
                <div className="rounded-full w-14 h-14 flex items-center justify-center bg-[#ff6a005e] border-2 border-[#ff6b004d] mb-3">
                  <Image
                    src={skill.logo}
                    width={40}
                    height={40}
                    alt="skill-logo"
                  />
                </div>
                <h4 className="text-lg text-center font-semibold text-gray-500 tracking-wider">
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
