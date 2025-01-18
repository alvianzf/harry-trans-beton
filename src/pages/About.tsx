import React from "react";
import Preface from "../components/about/Preface";

const About: React.FC<PageProps> = ({setPage}) => {
  React.useEffect(() => {
    setPage("about");
    document.title = "Tentang Kita -- Harry Trans Beton";
  }, [setPage]);
  return <div>
    <Preface />
  </div>;
};

export default About;
