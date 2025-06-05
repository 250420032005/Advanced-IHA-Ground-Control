"use client";

import React, { useEffect, useRef, Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";

type Props = {
  setCameraActive: Dispatch<SetStateAction<boolean>>;
};

function Camera({ setCameraActive }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const getVideoInput = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 720, height: 440 },
      })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch((err) => {
        console.error("Error accessing camera:", err);
      });
  };

  function handleClickCamera() {
    setCameraActive(false);
  }

  useEffect(() => {
    getVideoInput();
  }, []);

  return (
    <div className="bg-componentbg/85 rounded-lg border-2 border-outlineclr outline-2 outline-offset-1 outline-outlineclr">
      <button
        onClick={() => {
          handleClickCamera();
        }}
      >
        <IoClose className="text-white text-xl m-1" />
      </button>
      <video
        ref={videoRef}
        className="border-t-2 border-outlineclr rounded-b-lg"
      />
    </div>
  );
}

export default Camera;
