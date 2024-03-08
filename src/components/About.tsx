"use client";

import React from "react";

import { motion } from "framer-motion";

import SectionHeading from "./Section-heading";
import { useSectionInView } from "../lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I'm Faiza, a medical student with a passion for healing and a curiosity for the world of  {" "}
        <span className="font-medium"> Generative AI</span>, As a curious learner, I'm driven by a thirst for knowledge and a desire to make a positive impact in both{" "}
        <span className="font-medium">medicine and technology</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. Currently, I'm delving into the realm of {" "}
        <span className="font-medium">Generative AI</span>. 
      </p>

      <p>
        <span className="italic">Join me as</span>, I navigate the exciting world of AI and medicine, striving to make a positive impact through{" "}
        <span className="font-medium">innovation and creativity</span>.Crafting dreams into code,{" "}
        <span className="font-medium">one line at a time, to shape a brighter tomorrow</span>.Let's collaborate and bring your ideas to life, together.🤍
      </p>
    </motion.section>
  );
}