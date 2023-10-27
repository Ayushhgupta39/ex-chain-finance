import { Contact, Features, Footer, Hero, Prices } from "@/sections";
import React from "react";
import {
  BiGithub,
  BiInstagram,
  BiLinkedin,
  RiTwitterXFill,
} from "@/utils/getIcons";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="swap-background font-montserrat min-h-screen w-full flex flex-col text-white">
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
        <div className="flex justify-center items-center">
          <Image
            src={"/assets/images/widget.png"}
            height={350}
            width={350}
            alt="exchange_image"
          />
        </div>
      </section>
      <section className="flex flex-col my-9 py-6">
        <div className="flex w-full justify-center">
          <h2 className="text-4xl font-extrabold my-4">why ex-chain?</h2>
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-center gap-9">
          <div className="rounded-xl features_card shadow-xl p-2 m-4">
            <div className="m-3 p-2 flex justify-start items-center">
              <Image
                src={"/assets/images/swap-circle.png"}
                height={50}
                width={50}
                alt="swap_image"
              />
            </div>
            <h3 className="text-2xl font-semibold m-2">Instant Swaps</h3>
            <p className="text-slate-400 m-2">
              Swiftly exchange your cryptocurrencies with the lightning-fast
              swap feature, providing you with the best market rates in
              real-time.
            </p>
          </div>
          <div className="rounded-xl features_card p-3 m-5">
            <div className="m-3 p-2 flex justify-start items-center">
              <Image
                src={"/assets/images/swap-bold.png"}
                height={50}
                width={50}
                alt="bridge_image"
              />
            </div>
            <h3 className="text-2xl font-semibold m-2"> Cross-Chain Bridge</h3>
            <p className="text-slate-400 m-2">
              Seamlessly bridge assets between different blockchain networks,
              eliminating barriers and opening up new possibilities for your
              investments.
            </p>
          </div>
          <div className="rounded-xl features_card p-2 m-4">
            <div className="m-3 p-2 flex justify-start items-center">
              <Image
                src={"/assets/images/user-heart.png"}
                height={50}
                width={50}
                alt="user_image"
              />
            </div>
            <h3 className="text-2xl font-semibold m-2">
              User-Friendly Interface
            </h3>
            <p className="text-slate-400 m-2">
              Our intuitive interface is designed for simplicity, making crypto
              trading accessible for everyone, regardless of their experience
              level.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex w-full">
          <div className="p-2 m-3">
            <Image
              src={"/assets/images/prices.png"}
              height={500}
              width={500}
              alt="prices_image"
            />
          </div>
          <div className="flex flex-col justify-center p-2 m-3 w-1/2 gap-4">
            <h2 className="text-4xl font-bold">Choose what is best for you</h2>
            <p className="text-xl text-gray-300">
              we put the power in your hands. Navigate the fluctuating market
              with confidence by selecting the best prices tailored to your
              preferences. Your journey, your prices - at ex-chain,
              customization meets convenience.
            </p>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col my-9 py-6">
        <h2 className="text-4xl font-extrabold my-4">Have any queries?</h2>
        <div className="flex justify-center w-[80%] p-2 m-2">
          <p className="text-xl text-gray-400 font-medium text-center">
            Got questions or need assistance? Our dedicated support team is here
            to help you 24/7. Feel free to reach out to us. Your inquiries are
            important to us, and we're always ready to provide expert guidance
            for a seamless crypto experience.
          </p>
        </div>
        <Link href={"/support"}>
          <button className="bg-white text-black text-md p-2 rounded-md font-medium">
            Contact Us
          </button>
        </Link>
      </section>
      <footer className="bg-black flex flex-col sm:flex-row w-full p-6">
        <div className="w-1/2 p-3 px-4 ml-4 m-3">
          <p className="text-slate-200">
            As the sole developer of ex-chain, I'm thrilled to have you on board! For
            any other queries, or just a friendly chat, you can reach me out on
            my social handles. Let's stay connected!
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
    </div>
  );
};

export default page;
