"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map() {
  return (
    <div className="h-full w-full">
      <MapContainer
        center={[41.0, 29.0]}
        zoom={9}
        scrollWheelZoom={true}
        className="h-full w-full"
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[41.0, 29.0]}>
          <Popup>UAV is here 🚁</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
