import React from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GoCopilot } from "react-icons/go";

export default function AlkarFooter() {
  return (
    <>
      <div className="w-full h-full bg-main">
        <ul className="h-full flex flex-row items-center justify-center gap-x-8">
          <li>
            <button>
              <GoCopilot className="fill-white w-8 h-8" />
            </button>
          </li>
          <li>
            <button>
              <TfiHeadphoneAlt className="fill-white w-7 h-7" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
