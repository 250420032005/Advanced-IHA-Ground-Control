import React from "react";
import AlkarHeader from "@/components/header";
import AlkarFooter from "@/components/footer";

const IHAGroundControl = () => {
  return (
    <div className="grid grid-cols-[65px_auto] grid-rows-[auto_1fr_auto] grid-cols-2 w-screen h-screen overflow-hidden bg-red-200">
      {/* Header */}
      <div className="col-span-2 row-start-1 h-12 bg-red-200">
        <AlkarHeader />
      </div>

      {/* Left Column (middle) */}
      <div className="col-start-1 row-start-2 bg-yellow-300"></div>

      {/* Right Column (middle) */}
      <div className="col-start-2 row-start-2 bg-gray-800"></div>

      {/* Footer */}
      <div className="col-span-2 row-start-3 h-12 bg-white">
        <AlkarFooter />
      </div>
    </div>
  );
};

export default IHAGroundControl;
