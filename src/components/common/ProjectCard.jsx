"use client";

import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="flex flex-col bg-[#141414] border-2 border-border shadow-lg shadow-white/10 rounded-2xl transition-all duration-300 p-4"
    >
      <div className="border-4 border-border rounded-md mb-3 overflow-hidden">
        <div className="relative w-full h-50">
          <Image
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            src={project.image}
            alt={project.title}
            fill
          />
        </div>
      </div>

      <div>
        <h4 className="text-xl tracking-wider mb-1 font-extrabold">{project.title}</h4>
        <p className="text-sm text-justify text-muted font-semibold mb-2">{project.desc}</p>

        <div className="flex gap-2 mb-4 flex-wrap">
          {project.tech.map((tag) => (
            <span key={tag} className="bg-accent-muted px-2 py-1 rounded-full">
              <p className="font-display text-xs text-accent-warm">{tag}</p>
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs text-muted">What I learned:</p>
        <ol className="list-disc text-xs text-muted pl-4">
          {project.learned.map((item, index) => (
            <li key={`${project.id}-${index}`}>{item}</li>
          ))}
        </ol>
      </div>

      <div className="flex mt-3 gap-3">
        <Link
          target="_blank"
          href={project.live}
          className="bg-background flex items-center justify-center rounded-full transition-all duration-300 w-10 h-10 hover:bg-accent hover:scale-95"
        >
          <ExternalLink className="w-5 h-5" />
        </Link>
        <Link
          className="bg-background flex items-center justify-center rounded-full transition-all duration-300 w-10 h-10 hover:bg-accent hover:scale-95"
          target="_blank"
          href={project.github}
        >
          <SiGithub className="w-5 h-5" />
        </Link>
      </div>
    </motion.article>
  );
}