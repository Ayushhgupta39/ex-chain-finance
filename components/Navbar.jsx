"use client";

import { PhCircleWavyQuestion } from "@/utils/getIcons";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav
      className={`w-full text-white ${
        pathname === "/support" ? "bg-slate-950" : "bg-navbar"
      } flex font-montserrat justify-between p-2 items-center transition-transform duration-200`}
    >
      <Link href={"/"}>
        <Image
          src={"/assets/images/logo_black.png"}
          height={125}
          width={125}
          alt="logo"
          className="cursor-pointer mx-2"
        />
      </Link>
      <div className="flex items-center gap-2">
        <div className={`${pathname === "/exchange" ? "hidden" : ""}`}>
          <Link href={"/exchange"}>
            <button className="bg-white text-black p-2 px-3 rounded-2xl text-base font-medium">
              Exchange
            </button>
          </Link>
        </div>
        <div className={`${pathname === "/support" ? "hidden" : ""}`}>
          <Link href={"/support"}>
            <div
              className={`${
                pathname === "/support" ? "hidden" : ""
              } hidden md:flex font-semibold mx-2`}
            >
              <p className="text-base cursor-pointer">Contact Us</p>
            </div>
            <div>
              <PhCircleWavyQuestion className="flex md:hidden cursor-pointer text-3xl mx-2" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
