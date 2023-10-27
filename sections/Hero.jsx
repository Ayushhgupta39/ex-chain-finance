import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full hero-section grid flex-col justify-center items-center">
      <div className="flex flex-col h-full justify-center items-end">
        <div className="flex flex-col my-4 w-[80%]">
          <small className="text-[#00FFAB]">Powered by LI.FI</small>
          <h1 className="text-7xl font-bold">ex-chain</h1>
        </div>
        <div className="w-[80%] mb-4">
          <p className="text-xl text-gray-400 font-medium">
            Discover the future of digital finance with, your premier
            destination for effortless and secure cryptocurrency exchanges.
          </p>
        </div>
        <div className="flex w-[80%] my-4">
          <Link href={"/exchange"}>
            <button className="p-2 bg-white text-black rounded-md font-semibold">
              Get started
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-start items-center">
        <Image
          src={"/assets/images/widget.png"}
          height={540}
          width={540}
          alt="exchange_image"
          className=""
        />
      </div>
    </section>
  );
};

export default Hero;
