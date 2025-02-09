import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface MapProps {
  apiKey?: string;
  height?: string;
}

const Map: React.FC<MapProps> = ({
  apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  height = "400px",
}) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: apiKey || "",
        version: "weekly",
      });

      const google = await loader.load();
      const position = { lat: 1.35935, lng: 101.13447 };

      const map = new google.maps.Map(mapRef.current!, {
        center: position,
        zoom: 15,
        mapTypeId: "roadmap",
      });

      new google.maps.Marker({
        position,
        map,
        title: "Harrytrans Beton",
      });
    };

    initMap();
  }, [apiKey]);

  return (
    <div style={{marginTop: '4rem'}}>
      <h1 className='title'>Lokasi</h1>
      <div
        ref={mapRef}
        style={{
          width: "100%",
          height
        }}
      />
    </div>
  );
};

export default Map;
