// /* eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ImgURLs = {
  fullstack:
    "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/244607226_4976383192391443_8852424966271916005_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_ROdobTZhToAX8Hh0og&_nc_ht=scontent-atl3-2.xx&oh=00_AfDbbdxsh0HgfTRtTeTBQSSHhT3U2yFjUkVGqgagXjxKiw&oe=63FB44E7",
  jslogo: "https://img.icons8.com/arcade/512/javascript.png",
};

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7
    flex-shrink-0 w-[500px] md:w-[600px] md:max-h-[700px] xl:w-[900px] xl:max-h-[700px]  snap-center
    bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer
    transition-opacity duration-300 overflow-hidden"
    >
      <motion.div className="w-32 h-32 ml-5 xl:w-[200px] xl:h-[200px] rounded-full object-cover overflow-hidden ">
        {/* Company Logo */}
        <Image
          src={ImgURLs.fullstack}
          width={100}
          height={100}
          alt=""
          layout="responsive"
        />
      </motion.div>

      <div className="px-0 md:p-10">
        <h4 className="text-4xl font-light">FullStack Developer</h4>
        <p className="font-bold text-2xl mt-1">*Experience Here*</p>
        <div className="flex space-x-2 my-2">
          <Image
            src={ImgURLs.jslogo}
            width={100}
            height={100}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <Image
            src={ImgURLs.jslogo}
            width={100}
            height={100}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <Image
            src={ImgURLs.jslogo}
            width={100}
            alt=""
            height={100}
            className="w-10 h-10 rounded-full"
          />
          <Image
            src={ImgURLs.jslogo}
            width={100}
            alt=""
            height={100}
            className="w-10 h-10 rounded-full"
          />
          <Image
            src={ImgURLs.jslogo}
            width={100}
            alt=""
            height={100}
            className="w-10 h-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started... Ended...</p>

        <ul className="list-disc space-y-4 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;