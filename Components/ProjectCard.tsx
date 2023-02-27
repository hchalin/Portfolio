import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};

function ProjectCard({i}: Props) {
  return (
    <div

      className="w-screen flex-shrink-0 snap-center flext flex-col space-y-5"
    >
      <SocialIcon
        url="https://github.com/hchalin/react-weather-app"
        fgColor="grey"
        target="_blank" //opens in new tab
        bgColor="transparent"
      />

      <div>
        <h4>Case {i + 1} of 3: React weather App</h4>
      </div>
    </div>
  );
}

export default ProjectCard;
