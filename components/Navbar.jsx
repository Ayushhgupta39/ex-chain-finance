import { PhCircleWavyQuestion } from "@/utils/getIcons";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full shadow-xl flex justify-between p-2 items-center font-montserrat">
      <Image
        src={"/assets/images/logo.png"}
        height={120}
        width={120}
        alt="logo"
        className="cursor-pointer"
      />
      <div>
        <div className="hidden md:flex font-medium">
          <p className="text-xl cursor-pointer">Contact Us</p>
        </div>
        <div>
          <PhCircleWavyQuestion className="flex md:hidden cursor-pointer text-3xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
