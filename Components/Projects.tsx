import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import { Project } from "@/typings";

type Props = {
  projects: Project[]
};

function Projects({projects}: Props) {
  // fetch the projects from sanity
  // const projects = [1, 2, 3];
  const uniqueKey = uuidv4();

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      {/* Title */}
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>
      {/* This is the background line... playing around with tailwinds 'skew' */}
      <div className="w-full absolute top-[30%] bg-[#474790]/20 left-0 h-[500px] skew-y-12 "></div>

      {/* Card Container */}
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#474790]/80 scrollbar-thin" >
        {projects.map((project, index) => (
          //  project card
          <div key={uniqueKey}
          >
            {console.log(project)}
            <ProjectCard index={index} project={project} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
