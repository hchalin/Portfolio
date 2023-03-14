// /* eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

const ImgURLs = {
  fullstack:
    "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/244607226_4976383192391443_8852424966271916005_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_ROdobTZhToAX8Hh0og&_nc_ht=scontent-atl3-2.xx&oh=00_AfDbbdxsh0HgfTRtTeTBQSSHhT3U2yFjUkVGqgagXjxKiw&oe=63FB44E7",
  jslogo: "https://img.icons8.com/arcade/512/javascript.png",
};

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] xl:max-h-[650px] snap-center
    bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer
    transition-opacity duration-300 overflow-hidden"
    >
      {/* IMAGE */}
      <motion.div
        className="w-32 h-32 ml-5 xl:w-[200px] xl:h-[200px] object-cover object-center "
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Company Logo */}
        <Image
          src={urlFor(experience?.companyImg).url()}
          width={100}
          height={100}
          alt=""
          className="rounded-full"
        />
      </motion.div>
      {/* ===== END OF IMAGE */}

      {/* DETAILS */}
      <div className="px- md:p-10">
        <h4 className="text-4xl font-light ">{experience.role}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {/* tech stack */}
          {/* map and use a ternary to check to see if there is tech else render null */}

          {/* console.log(experience.technologies); */}

          {/* this was a freaking pain......... */}
          {experience.technology && experience.technology.length > 0
            ? experience.technology.map((tech) => {
                if (tech && tech.image) {
                  const imageUrl = urlFor(tech.image).url();

                  return (
                    <Image
                      src={imageUrl}
                      key={tech._id}
                      width={150}
                      height={150}
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                  );
                }
                return null;
              })
            : null}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {experience.startDate} - {experience.endDate}
        </p>
        {/* to make ui scrollable. set a height and set 'scrollable' */}
        <ul className="list-disc space-y-4 text-lg ">
          {/* Map over summary points */}
          {experience.summaryPoints.map((point) => (
            <li key={experience._id}>{point}</li>
          ))}
          {/* <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li> */}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
