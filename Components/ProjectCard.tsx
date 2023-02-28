import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};

function ProjectCard({ index }: Props) {
  return (
    <article>
      <div
        className="w-screen md:w-[700px] m-10 flex-shrink-0 snap-center
      snap-mandatory flext flex-col space-y-5 h-[500px] xl:h-[500px] bg-[#292929] opacity-40 hover:opacity-100 transition-opacity duration-300  p-20 rounded-xl"
      >
        <SocialIcon
          url="https://github.com/hchalin/react-weather-app"
          fgColor="grey"
          target="_blank" //opens in new tab
          bgColor="transparent"
          className="cursor-pointer "
        />

        <div>
          <h4>Case {index + 1} of 3: React weather App</h4>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;