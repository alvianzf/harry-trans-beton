import React from "react";
import Preface from "../components/about/Preface";
import Legality from "../components/about/Legality";
import Vision from "../components/about/Vision";

const About: React.FC<PageProps> = ({setPage}) => {
  React.useEffect(() => {
    setPage("about");
    document.title = "Tentang Kita -- Harry Trans Beton";
  }, [setPage]);
  return <div>
    <Preface />
    <Vision />
    <Legality />
  </div>;
};

export default About;
