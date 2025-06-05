"use client";

import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

function Camera() {
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

  useEffect(() => {
    getVideoInput();
  }, []);

  return (
    <div className="bg-componentbg/85 rounded-lg border-2 border-outlineclr outline-2 outline-offset-1 outline-outlineclr z-2">
      <IoClose className="text-white text-xl m-1" />
      <video
        ref={videoRef}
        className="w-auto h-auto rounded-md outline-2 outline-outlineclr z-2s"
      />
    </div>
  );
}

export default Camera;
