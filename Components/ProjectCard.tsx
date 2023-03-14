import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {
  index: number;
  project: {};
};

function ProjectCard({ project, index }: Props) {
  return (
    <article>
      <div
        className="w-screen md:w-[900px] m-10 flex-shrink-0 snap-center
      overflow-x-scroll snap-mandatory flex flex-col space-y-5 h-[500px] xl:h-[500px] bg-[#292929] opacity-40 hover:opacity-100 transition-opacity duration-300  p-20 rounded-xl"
      >
        <SocialIcon
          url={project.linkToBuild}
          fgColor="grey"
          target="_blank" //opens in new tab
          bgColor="transparent"
          // react social icon will use inline styles
          style={{ height: 100, width: 100 }}
          className="cursor-pointer mx-auto "
        />

        <div className="space-y-10 px-0 md:px-10 max-1-6xl">
          <h4 className="text-4xl font-semibold text-center">
            <span className="underline decoration-[#474790]">
              Case {index + 1} :
            </span><span> </span>
            {project.title}
          </h4>
          <p className="text-large text-center md:text-left">
            {project.summary}
          </p>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
