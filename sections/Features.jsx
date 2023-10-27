import React from "react";
import Image from "next/image";

const Features = () => {
  return (
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
            />
          </div>
          <h3 className="text-2xl font-semibold m-2">Instant Swaps</h3>
          <p className="text-gray-300 m-2">
            Swiftly exchange your cryptocurrencies with the lightning-fast swap
            feature, providing you with the best market rates in real-time.
          </p>
        </div>
        <div className="rounded-xl features_card p-3 m-5">
          <div className="m-3 p-2 flex justify-start items-center">
            <Image
              src={"/assets/images/swap-bold.png"}
              height={50}
              width={50}
            />
          </div>
          <h3 className="text-2xl font-semibold m-2"> Cross-Chain Bridge</h3>
          <p className="text-gray-300 m-2">
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
            />
          </div>
          <h3 className="text-2xl font-semibold m-2">
            User-Friendly Interface
          </h3>
          <p className="text-gray-300 m-2">
            Our intuitive interface is designed for simplicity, making crypto
            trading accessible for everyone, regardless of their experience
            level.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
