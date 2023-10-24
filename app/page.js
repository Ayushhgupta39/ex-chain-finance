"use client";

import { LoadingIndicator } from "@/components/widget/LoadingIndicator";
import dynamic from "next/dynamic";

export const LiFiWidgetNext = dynamic(
  () => import("../components/widget/Widget").then((module) => module.Widget),
  {
    ssr: false,
    loading: () => <LoadingIndicator />,
  }
);

const Home = () => {
  return (
    <div className="flex min-h-[120vh] w-full swap-background justify-center items-start">
      <LiFiWidgetNext />
    </div>
  );
};

export default Home;
