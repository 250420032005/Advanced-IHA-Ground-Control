import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

const QR = () => {
  return (
    <div className="w-full h-full bg-componentbg/85 rounded-lg border-2 border-outlineclr outline-2 outline-offset-1 outline-outlineclr">
      <ul
        className={`w-full h-full flex flex-col justify-around p-2 ${montserrat.className}`}
      >
        <li className="flex flex-col justify-between items-center m-2 border-b-2 text-gray-100 text-xl">
          <h2 className="m-2 font-semibold">Enlem:</h2>
          <p>X</p>
        </li>
        <li className="flex flex-col justify-between items-center m-2 border-b-2 text-gray-100 text-xl">
          <h2 className="m-2 font-semibold">Boylam:</h2>
          <p>X</p>
        </li>
      </ul>
    </div>
  );
};

export default QR;
