import React, { useEffect, useRef, useState, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";

/// <reference types="google.maps" />

interface MapProps {
  apiKey?: string;
  height?: string;
}

const loaderInstance = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  version: "weekly",
});

const Map: React.FC<MapProps> = ({ height = "400px" }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [googleMaps, setGoogleMaps] = useState<typeof google.maps | null>(null);

  const position = useMemo(() => ({ lat: 1.35935, lng: 101.13447 }), []);

  useEffect(() => {
    if (!googleMaps) {
      loaderInstance.load().then((google) => {
        setGoogleMaps(google.maps);
      });
    }
  }, [googleMaps]);

  useEffect(() => {
    if (googleMaps && mapRef.current) {
      const map = new googleMaps.Map(mapRef.current, {
        center: position,
        zoom: 15,
        mapTypeId: "roadmap",
      });

      new googleMaps.Marker({
        position,
        map,
        title: "Harrytrans Beton",
      });
    }
  }, [googleMaps, position]);

  return (
    <div style={{ marginTop: "4rem" }}>
      <h1 className="title">Lokasi</h1>
      <div
        ref={mapRef}
        style={{
          width: "100%",
          height,
        }}
      />
    </div>
  );
};

export default Map;
