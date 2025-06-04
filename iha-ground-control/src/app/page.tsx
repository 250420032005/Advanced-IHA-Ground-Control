"use client";

import React from "react";
import { useState } from "react";
import AlkarHeader from "@/components/header";
import AlkarFooter from "@/components/footer";
import Sidebar from "@/components/sidebar";
import Map from "@/components/map";
import Telemetry from "@/components/telemetry";
import { divIcon } from "leaflet";

const IHAGroundControl = () => {
  const [telemetryActive, setTelemetryActive] = useState(false);

  return (
    <div className="grid grid-cols-[65px_auto] grid-rows-[auto_1fr_auto] grid-cols-2 w-screen h-screen overflow-hidden">
      {/* Header */}
      <div className="col-span-2 row-start-1 h-12">
        <AlkarHeader />
      </div>

      {/* Sidebar */}
      <div className="col-start-1 row-start-2 bg-sidebar">
        <Sidebar setTelemetryActive={setTelemetryActive} />
      </div>

      {/* Plane Components */}
      <div className="relative col-start-2 row-start-2 bg-gray-800">
        <div className="w-full h-full z-10">
          <Map />
        </div>
        <div className="absolute top-2 left-2 w-100 h-150 z-20">
          {telemetryActive ? (
            <Telemetry />
          ) : (
            <div style={{ display: "none" }}></div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="col-span-2 row-start-3 h-12 bg-white">
        <AlkarFooter />
      </div>
    </div>
  );
};

export default IHAGroundControl;
