import React from "react";
import Services from "../components/services/Services"

const Service: React.FC<PageProps> = ({ setPage }) => {

    React.useEffect(() => {
      setPage('services');
      document.title = 'Harry Trans Beton -- Layanan';
    }, [setPage]);
  return (
    <div>
        <Services />
    </div>
  )
}

export default Service