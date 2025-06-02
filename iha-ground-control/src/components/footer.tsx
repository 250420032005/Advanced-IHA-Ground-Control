import React from "react";

export default function AlkarFooter() {
  return (
    <>
      <div className="w-full h-full bg-green-200">
        <ul className="h-full flex flex-row items-center justify-center gap-x-8">
          <li>
            <button>
              <img src="/src/assets/pilot.png" alt="Pilot" />
            </button>
          </li>
          <li>
            <button>
              <img src="/src/assets/communication.png" alt="Communication" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
