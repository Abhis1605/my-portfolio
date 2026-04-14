"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="px-[8%] lg:px-[5%] py-10 lg:py-20">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid grid-cols-1 lg:grid-cols-2">
        <motion.div variants={staggerContainer} className="flex md:items-center lg:items-start  flex-col">
          <motion.h1 className=" text-4xl md:text-5xl lg:text-6xl text-center tracking-widest mb-6" variants={fadeUp}>About Me</motion.h1>
          <motion.p variants={fadeUp} className="text-center font-semibold lg:text-justify md:text-2xl lg:text-base text-muted  lg:w-[85%] mb-6">
            I’m a computer engineering student and a MERN stack developer,
            focused on building clean and functional web applications. I enjoy
            working on real-world projects and continuously improving my
            development skills.
          </motion.p>

          <motion.div variants={scaleIn}>
          <Image
            width={455}
            height={250}
            src="/about-img/img-1.jpg"
            alt="my-img-1"
          />
          </motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} className="relative p-4 flex flex-col md:flex-row lg:flex-row items-center justify-center">
                
                <motion.div variants={scaleIn}  className=" w-full h-85 md:w-80 md:h-80 lg:w-80 lg:h-80 flex items-center justify-center z-2 bg-background lg:absolute  lg:bottom-0 lg:left-0">
                    <Image className="w-62.5 h-62.5 lg:w-75 lg:h-75"  src="/about-img/img-2.jpg" height={300} width={300} alt="my-img-2" />
                </motion.div>
        
                <motion.div variants={scaleIn}>
                <Image className="w-62.5 h-62.5 lg:w-100 lg:h-90 lg:absolute lg:top-20 lg:right-0" src="/about-img/img-3.jpg" height={300} width={400} alt="my-img-3"  />
                </motion.div>
        </motion.div>

        
      </motion.div>
    </section>
  );
}
