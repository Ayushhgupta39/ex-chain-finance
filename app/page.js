"use client";

import dynamic from "next/dynamic";

const LiFiWidgetDynamic = dynamic(
  () => import("@lifi/widget").then((module) => module.LiFiWidget),
  {
    ssr: false,
    loading: () => "Loading...",
  }
);

const Home = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <LiFiWidgetDynamic
        config={{
          containerStyle: {
            border: `1px solid rgb(234, 234, 234)`,
            borderRadius: "16px",
          },
        }}
        integrator="ex-chain"
      />
    </div>
  );
};

export default Home;
