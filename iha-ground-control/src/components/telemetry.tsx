import React from "react";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  weight: "300",
});

export default function Telemetry() {
  return (
    <div className="w-full h-full bg-componentbg/85 rounded-lg border-2 border-outlineclr outline-2 outline-offset-1 outline-outlineclr">
      <ul
        className={`w-full h-full flex flex-col justify-around p-2 ${mulish.className}`}
      >
        <li className="flex flex-row justify-between m-2 border-b-2 text-gray-100 text-lg">
          <p>Takım Numarası:</p>
          <p>X</p>
        </li>
        <li className="flex flex-row justify-between m-2 border-b-2 text-gray-100 text-lg">
          <p>Enlem:</p>
          <p>X</p>
        </li>
        <li className="flex flex-row justify-between m-2 border-b-2 text-gray-100 text-lg">
          <p>Boylam:</p>
          <p>X</p>
        </li>
        <li className="flex flex-row justify-between m-2 border-b-2 text-gray-100 text-lg">
          <p>İrtifa:</p>
          <p>X</p>
        </li>
        <li className="flex flex-row justify-between m-2 border-b-2 text-gray-100 text-lg">
          <p>Batarya:</p>
          <p>X</p>
        </li>
        <li className="flex flex-row justify-between m-2 border-b-2 text-gray-100 text-lg">
          <p>Otonom:</p>
          <p>X</p>
        </li>
        <li className="flex flex-row justify-between m-2 border-b-2 text-gray-100 text-lg">
          <p>Kilitlenme:</p>
          <p>X</p>
        </li>
        <li className="flex flex-row justify-between m-2 border-b-2 text-gray-100 text-lg">
          <p>GPS saati:</p>
          <p>X</p>
        </li>
        <li className="flex flex-row justify-between m-2 border-b-2 text-gray-100 text-lg">
          <p>Hedef Merkezi X:</p>
          <p>X</p>
        </li>
        <li className="flex flex-row justify-between m-2 border-b-2 text-gray-100 text-lg">
          <p>Hedef Merkezi Y:</p>
          <p>X</p>
        </li>
        <li className="flex flex-row justify-between m-2 border-b-2 text-gray-100 text-lg">
          <p>Hedef Yükseklik:</p>
          <p>X</p>
        </li>
        <li className="flex flex-row justify-between m-2 border-b-2 text-gray-100 text-lg">
          <p>Hedef Genişlik:</p>
          <p>X</p>
        </li>
      </ul>
    </div>
  );
}
