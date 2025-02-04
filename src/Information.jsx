import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  {
    icon: <FaGithub />,
    name: "GitHub",
    url: "https://github.com/oliverfelixdev/cylindershowcase",
  },
  {
    icon: <FaInstagram />,
    name: "Instagram",
    url: "https://www.instagram.com/oliverfelix.dev",
  },
  { icon: <FaXTwitter />, name: "X", url: "https://x.com/oliverfelixdev" },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/oliverfelixdev",
  },
];

const Information = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white w-full h-1/4 md:h-24 absolute bottom-0 left-0 flex md:flex-row flex-col items-start md:items-center justify-evenly md:justify-between px-5 pb-4 overflow-auto">
      <div className="flex items-start justify-between w-full md:w-[28%]">
        <div className="child1 flex items-center justify-center gap-3">
          <img className="h-7 w-7 rounded-full" src="/favicon.png" alt="Logo" />
          <span className="text-sm leading-[1rem] font-normal">
            Oliver Felix <br /> Project Showcase
          </span>
        </div>
        <div className="child2">
          <div className="text-sm leading-[1rem] flex items-start justify-start flex-col gap-1">
            {socialLinks.map(({ icon, name, url }) => (
              <a
                key={name}
                className="text-zinc-300 text-opacity-55 hover:text-white transition-colors duration-200 flex items-center justify-center"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon} <span className="md:ml-2 ml-1">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-sm text-zinc-300 mt-2 sm:mt-0">
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Information;
