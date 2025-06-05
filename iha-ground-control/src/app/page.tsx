"use client";

import React from "react";
import { useState } from "react";
import AlkarHeader from "@/components/header";
import AlkarFooter from "@/components/footer";
import Sidebar from "@/components/sidebar";
import Map from "@/components/map";
import Telemetry from "@/components/telemetry";
import CommandControl from "@/components/commands";
import QR from "@/components/qr";
import Camera from "@/components/camera";

const IHAGroundControl = () => {
  const [telemetryActive, setTelemetryActive] = useState(false);
  const [commandControlActive, setCommandControlActive] = useState(false);
  const [qrActive, setQRActive] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);

  return (
    <div className="grid grid-cols-[65px_auto] grid-rows-[auto_1fr_auto] grid-cols-2 w-screen h-screen overflow-hidden">
      {/* Header */}
      <div className="col-span-2 row-start-1 h-12">
        <AlkarHeader />
      </div>

      {/* Sidebar */}
      <div className="col-start-1 row-start-2 bg-sidebar">
        <Sidebar
          setTelemetryActive={setTelemetryActive}
          setCommandControlActive={setCommandControlActive}
          setQRActive={setQRActive}
          setCameraActive={setCameraActive}
        />
      </div>

      {/* Plane Components */}
      <div className="relative col-start-2 row-start-2 bg-gray-800">
        <div className="w-full h-full z-10">
          <Map />
        </div>
        {telemetryActive ? (
          <div className="w-100 h-150 absolute top-2 left-2 z-20">
            <Telemetry />
          </div>
        ) : (
          <div style={{ display: "none" }}></div>
        )}
        {commandControlActive ? (
          <div className="w-150 h-80 absolute bottom-2 left-2 z-30">
            <CommandControl />
          </div>
        ) : (
          <div style={{ display: "none" }}></div>
        )}
        {qrActive ? (
          <div className="w-50 h-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            <QR />
          </div>
        ) : (
          <div style={{ display: "none" }}></div>
        )}
        {cameraActive ? (
          <div className="absolute bottom-1 right-1 z-40">
            <Camera setCameraActive={setCameraActive} />
          </div>
        ) : (
          <div style={{ display: "none" }}></div>
        )}
      </div>

      {/* Footer */}
      <div className="col-span-2 row-start-3 h-12 bg-white">
        <AlkarFooter />
      </div>
    </div>
  );
};

export default IHAGroundControl;
