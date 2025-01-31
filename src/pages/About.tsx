import React from "react";
import Preface from "../components/about/Preface";
import Legality from "../components/about/Legality";

const About: React.FC<PageProps> = ({setPage}) => {
  React.useEffect(() => {
    setPage("about");
    document.title = "Tentang Kita -- Harry Trans Beton";
  }, [setPage]);
  return <div>
    <Preface />
    <Legality />
  </div>;
};

export default About;
