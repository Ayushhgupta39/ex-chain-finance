import { PhCircleWavyQuestion } from "@/utils/getIcons";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full text-white flex justify-between p-2 items-center">
      <Image
        src={"/assets/images/logo_black.png"}
        height={125}
        width={125}
        alt="logo"
        className="cursor-pointer mx-2"
      />
      <div>
        <div className="hidden md:flex font-semibold mx-2">
          <p className="text-xl cursor-pointer">Contact Us</p>
        </div>
        <div>
          <PhCircleWavyQuestion className="flex md:hidden cursor-pointer text-3xl mx-2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
