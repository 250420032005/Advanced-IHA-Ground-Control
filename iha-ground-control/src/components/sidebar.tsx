import React from "react";
import { IoQrCodeOutline, IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <ul className="flex flex-col gap-y-5">
        <li>
          <button className="bg-sidebarbtnbg rounded-md">
            <MdOutlineSettingsInputAntenna className="fill-white w-9 h-9 m-2" />
          </button>
        </li>
        <li>
          <button className="bg-sidebarbtnbg rounded-md">
            <IoGameControllerOutline className="fill-white text-white w-9 h-9 m-2" />
          </button>
        </li>
        <li>
          <button className="bg-sidebarbtnbg rounded-md">
            <IoQrCodeOutline className="fill-white text-white w-9 h-9 m-2" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
