import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header>
      {/* Left side  */}
      <div className="flex flex-row items-center">
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
      </div>

      {/* Right side */}
      <div>
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="grey"
          bgColor="transparent"
        />
        <p className="lowercase">
          GET IN TOUCH
        </p>
      </div>

    </header>
  );
}

export default Header;
