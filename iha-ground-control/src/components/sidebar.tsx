import React from "react";
import { Dispatch, SetStateAction } from "react";
import { IoQrCodeOutline, IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";

type Props = {
  setTelemetryActive: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ setTelemetryActive }: Props) => {
  function handleClickTelemetry() {
    setTelemetryActive((a) => !a);
  }

  return (
    <div className="flex w-full h-full justify-center items-center">
      <ul className="flex flex-col gap-y-5">
        <li>
          <button
            onClick={() => {
              handleClickTelemetry();
            }}
            className="bg-sidebarbtnbg rounded-md"
          >
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
