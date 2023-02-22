import React from "react";
import Headshot from "../imgs/blkwhtportrait.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col md:flex-row relative text-center h-screen md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

        {/* Note: Do Not use simicolons in tailwind */}
      <motion.div
      initial={{
        x: -200,
        opacity: 0
      }}
      whileInView={{
          x:0,
         opacity: 1
       }}
      viewport={{once: true}} // it will only slide into view once
      transition={{duration: 1.2}}
      className=""
      >
        <Image
          src={Headshot}
          // Object-cover keeps the img from distorting if its large
          // the sizing starts with 'small(mobile) and works it way up to xl scree sizes'
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
        />
      </motion.div>
    </div>
  );
}

export default About;
