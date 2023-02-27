import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Props = {};

function Projects({}: Props) {
  // fetch the projects from sanity
  const projects = [1, 2, 3, 4];
  const uniqueKey = uuidv4();

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      {/* Title */}
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>
      {/* This is the background line... playing around with tailwinds 'skew' */}
      <div className="w-full absolute top-[30%] bg-[#474790]/10 left-0 h-[500px] skew-y-12 "></div>

      {/*  */}
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project) => (
          <div key={uniqueKey}>
             <SocialIcon
          url="https://github.com/hchalin/react-weather-app"
          fgColor="grey"
          target="_blank" //opens in new tab
          bgColor="transparent"
        />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
