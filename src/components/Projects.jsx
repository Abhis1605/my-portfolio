"use client";

import React from "react";
import ProjectCard from "./common/ProjectCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projectsData";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Projects() {
  const featuredProjects = projectsData.slice(0, 6)
  return (
    <section
      id="projects"
      className="py-10 lg:py-20 bg-linear-to-br from-black via-accent-muted to-black"
    >
      <div className="px-[8%] lg:px-[5%]">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between mb-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl tracking-widest mb-6">
            Projects
          </motion.h1>

          <motion.p variants={fadeUp} className="text-center text-base text-muted font-semibold">
            Some of the projects I’ve built using modern web technologies.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:p-10 gap-8 lg:gap-10 mb-10 lg:mb-0"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex items-center justify-center"
        >
          <button className="text-base font-normal uppercase border-2 px-4 py-2 hover:text-white hover:border-0 hover:bg-accent hover:scale-95 transition-all duration-300">
            <Link href="/projects">view more Projects</Link>
          </button>
        </motion.div>
      </div>
    </section>
  );
}