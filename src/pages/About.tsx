import React from "react";

const About: React.FC<PageProps> = ({setPage}) => {
  React.useEffect(() => {
    setPage("about");
    document.title = "Tentang Kita -- Harry Trans Beton";
  }, [setPage]);
  return <div>About</div>;
};

export default About;
