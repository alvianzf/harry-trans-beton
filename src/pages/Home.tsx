import React from 'react';
import Commitment from "../components/home/Commitment";
import Hero from "../components/home/Hero";
import Values from "../components/home/Values";
import Clients from '../components/home/Clients';

const Home: React.FC<PageProps> = ({ setPage }) => {

  React.useEffect(() => {
    setPage('Home');
    document.title = 'Harry Trans Beton -- Beranda';
  }, [setPage]);

  return (
    <div>
      <Hero />
      <Commitment />
      <Values />
      <Clients />
    </div>
  );
};

export default Home;
