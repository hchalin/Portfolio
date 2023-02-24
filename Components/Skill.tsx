import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
};
/**
 * NOTE
 *
 * Study this design. There is a 'layer' effect being applied by basically
 * switching out circles on a hover effect
 */
const langPics = {
  js: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png",
  ts: "https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png?f=avif&w=256",
  vscode:
    "https://cdn2.iconfinder.com/data/icons/well-known-1/1024/Visual_Studio-256.png", //testing
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          // if true ? left... : otherwise right
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <Image
          src={langPics.js}
          width={96}// = w-24
          height={96} //= h-24
          alt="Language Icon" // h-24 and w-24 is not necessary
          className="rounded-full h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32  border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </motion.div>
      {/* on hover... this circle will show */}
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full  ">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
