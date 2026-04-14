"use client";

import { timelineData } from "@/data/timelineData";
import { motion, useScroll, useSpring } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { useRef } from "react";

export default function Timeline() {
  const timelineRef = useRef(null);

  // Track scroll on timeline container itself (not whole section)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 25%"],
  });

  // Smooth the progress for better line fill animation
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 22,
    mass: 0.35,
  });

  return (
    <section
      id="timeline"
      className="py-20 bg-linear-to-br from-[#1a1a1a] via-[#2d1b3c] to-[#1a1a1a] text-foreground"
    >
      <div className="px-[8%] lg:px-[5%]">
        <motion.div
          className="flex items-center flex-col lg:flex-row lg:justify-between"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.h1
            variants={fadeUp}
            className="w-full lg:w-1/2 text-4xl md:text-5xl mb-6 lg:mb-0 lg:text-6xl text-center lg:text-start tracking-widest"
          >
            Education
            <br />& Experience
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-muted font-semibold text-center md:text-center lg:text-justify text-base w-full lg:w-1/2"
          >
            I’m a computer engineering student and MERN stack developer with hands-on
            experience through a 4-month internship, where I worked on building APIs,
            UI components.
          </motion.p>
        </motion.div>

        <motion.div
          ref={timelineRef}
          className="max-w-5xl relative mx-auto timeline mt-10 lg:mt-20"
          style={{ "--line-progress": lineProgress }}
        >
          {timelineData.map((timeline, index) => (
            <motion.div
              key={timeline.id ?? index}
              initial={{ opacity: 0, y: 35, x: index % 2 === 0 ? -22 : 22 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.35 }}
              className={`px-6 md:px-8 lg:px-12.5 py-2.5 relative w-full lg:w-1/2 ${
                index % 2 === 0 ? "lg:left-0" : "lg:left-1/2"
              }`}
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                viewport={{ once: true, amount: 0.6 }}
                className={`w-4 h-4 bg-orange-400 rounded-full absolute top-8  z-10 left-1 ${
                  index % 2 === 0 ? "lg:left-[100.8%]" : "lg:left-1"
                }`}
              />

              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="px-5 py-4 bg-white rounded-md text-black text-base shadow-md max-w-full"
              >
                <h2 className="font-semibold">{timeline.title}</h2>
                <h4 className="font-normal text-accent">{timeline.subTitle}</h4>
                <small className="text-muted font-normal mb-3.5">{timeline.date}</small>
                <p className="text-sm text-slate-500">{timeline.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}