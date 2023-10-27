import { Contact, Features, Footer, Hero, Prices } from "@/sections";
import React from "react";

const page = () => {
  return (
    <div className="swap-background font-montserrat min-h-screen w-full flex flex-col text-white">
      <Hero />
      <Features />
      <Prices />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
