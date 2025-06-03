import React from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GoCopilot } from "react-icons/go";

export default function AlkarFooter() {
  return (
    <>
      <div className="w-full h-full bg-main">
        <ul className="h-full flex flex-row items-center justify-center gap-x-8">
          <li>
            <button className="bg-footerbtnbg rounded-md mt-1">
              <GoCopilot className="fill-white w-8 h-8 m-1" />
            </button>
          </li>
          <li>
            <button className="bg-footerbtnbg rounded-md mt-1">
              <TfiHeadphoneAlt className="fill-white w-8 h-8 m-1" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
