import React from "react";

const CommandControl = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-5 w-full h-full p-2 gap-2 bg-componentbg/85 rounded-lg border-2 border-outlineclr">
      <button className="col-start-1 row-start-1 bg-missionbtn rounded-md text-gray-800 text-lg">
        Kamikaze Görevi
      </button>
      <button className="col-start-2 row-start-1 bg-missionbtn rounded-md text-gray-800 text-lg">
        Savaşan İHA Görevi
      </button>
      <button className="col-start-1 row-start-2 bg-mannualbtn rounded-md text-gray-900 text-lg">
        Otonom İniş
      </button>
      <button className="col-start-2 row-start-2 bg-mannualbtn rounded-md text-gray-900 text-lg">
        Otonom Kalkış
      </button>
      <button className="col-start-1 row-start-3 bg-mannualbtn rounded-md text-gray-900 text-lg">
        Otonom Kontrol
      </button>
      <button className="col-start-2 row-start-3 bg-mannualbtn rounded-md text-gray-900 text-lg">
        Manuel Kontrol
      </button>
      <button className="col-start-1 row-start-4 bg-emergencybtn rounded-md text-gray-100 text-lg">
        Acil Yüksel
      </button>
      <button className="col-start-2 row-start-4 bg-emergencybtn rounded-md text-gray-100 text-lg">
        Acil Alçal
      </button>
      <button className="col-span-full mx-auto w-1/2 justify-items-center bg-emergencybtn rounded-md text-gray-100 text-lg">
        Kaçma Manevrası
      </button>
    </div>
  );
};

export default CommandControl;
