import React from "react";
import Preface from "../components/about/Preface";
import Services from "../components/about/Services";

const About: React.FC<PageProps> = ({setPage}) => {
  React.useEffect(() => {
    setPage("about");
    document.title = "Tentang Kita -- Harry Trans Beton";
  }, [setPage]);
  return <div>
    <Preface />
    <Services />
  </div>;
};

export default About;
