import React from "react";
import Image from "next/image";

const Prices = () => {
  return (
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
            we put the power in your hands. Navigate the fluctuating market with
            confidence by selecting the best prices tailored to your
            preferences. Your journey, your prices - at ex-chain, customization
            meets convenience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prices;
