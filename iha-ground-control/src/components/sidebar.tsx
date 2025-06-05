import React from "react";
import { Dispatch, SetStateAction } from "react";
import { IoQrCodeOutline, IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { LuCamera } from "react-icons/lu";

type Props = {
  setTelemetryActive: Dispatch<SetStateAction<boolean>>;
  setCommandControlActive: Dispatch<SetStateAction<boolean>>;
  setQRActive: Dispatch<SetStateAction<boolean>>;
  setCameraActive: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({
  setTelemetryActive,
  setCommandControlActive,
  setQRActive,
  setCameraActive,
}: Props) => {
  function handleClickTelemetry() {
    setTelemetryActive((state) => !state);
    setCommandControlActive(false);
  }

  function handleClickCommandControl() {
    setCommandControlActive((state) => !state);
    setTelemetryActive(false);
  }

  function handleClickQR() {
    setQRActive((state) => !state);
  }

  function handleClickCamera() {
    setCameraActive((state) => !state);
  }

  return (
    <div className="flex w-full h-full justify-center items-center">
      <ul className="flex flex-col items-center justify-center gap-y-5">
        <li>
          <button
            onClick={() => {
              handleClickTelemetry();
            }}
            className="bg-sidebarbtnbg rounded-md"
          >
            <MdOutlineSettingsInputAntenna className="w-9 h-9 fill-white m-2" />
          </button>
        </li>
        <li>
          <button
            className="bg-sidebarbtnbg rounded-md"
            onClick={() => {
              handleClickCommandControl();
            }}
          >
            <IoGameControllerOutline className="w-9 h-9 fill-white text-white m-2" />
          </button>
        </li>
        <li>
          <button className="bg-sidebarbtnbg rounded-md">
            <LuCamera
              onClick={() => {
                handleClickCamera();
              }}
              className="w-9 h-9 text-white m-2"
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleClickQR();
            }}
            className="bg-sidebarbtnbg rounded-md"
          >
            <IoQrCodeOutline className="w-9 h-9 fill-white text-white m-2" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
