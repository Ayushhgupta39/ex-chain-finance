import React from "react";
import {
  BiGithub,
  BiInstagram,
  BiLinkedin,
  RiTwitterXFill,
} from "@/utils/getIcons";

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col sm:flex-row w-full p-6">
      <div className="w-1/2 p-3 px-4 ml-4 m-3">
        <p className="text-slate-200">
          As the sole developer of ex-chain, I'm thrilled to have you on board!
          For any other queries, or just a friendly chat, you can reach me out
          on my social handles. Let's stay connected!
        </p>
      </div>
      <div className="flex justify-center gap-12 w-1/2 items-center text-2xl">
        <a
          className="hover:text-gray-300 transition duration-75"
          href="https://twitter.com/0xAyushhh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTwitterXFill />
        </a>
        <a
          className="hover:text-gray-300 transition duration-75"
          href="http://linkedin.com/in/ayush-gupta-b0a06a237"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLinkedin />
        </a>
        <a
          className="hover:text-gray-300 transition duration-75"
          href="http://github.com/Ayushhgupta39"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiGithub />
        </a>
        <a
          className="hover:text-gray-300 transition duration-75"
          href="http://www.instagram.com/ayushh.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
