import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { Social } from "@/typings";

type Props = {
  socials: Social[]
};

function Header({socials}: Props) {


  return (
    <header className="sticky top-0 flex items-start justify-between p-5 max-w-7xl mx-auto z-40 xl: center">
      {/* Left side  */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        {socials.map((social)=>(
           <SocialIcon
           key={social._id}
           url={social.url}
           fgColor="grey"
           target="_blank" //opens in new tab
           bgColor="transparent"
         />
        ))}
      </motion.div>

      {/* Right side */}

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="flex flex-row items-center  text-gray-300 cursor-pointer"
        // this fixes hydration method of having nested '<a/>' tags
        // social iconis also a anchor tag
        onClick={() => (window.location.href = "#contact")}
      >

          <SocialIcon
            network="email"
            fgColor="gray"
            bgColor="transparent"

          />

        <p className="uppercase hidden lg:inline-block text-sm  text-grey-400">
          GET IN TOUCH
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
