import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

const AlkarHeader = () => {
  return (
    <>
      <div className="w-full h-full bg-main flex justify-center items-center">
        <h1
          className={`text-titles text-3xl font-thin ${montserrat.className}`}
        >
          1.5 Adana AGM Alkar
        </h1>
      </div>
    </>
  );
};

export default AlkarHeader;
