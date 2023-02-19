import React from "react";
import { SocialIcon } from "react-social-icons";

import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
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
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://instagram.com/_____.hayden._____"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/in/haydenchalin"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>

      {/* Right side */}
      <motion.div
      initial={{
        x:500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 2
      }}
      className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p className="uppercase hidden lg:inline-block text-sm text-gray-400">
          GET IN TOUCH
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
