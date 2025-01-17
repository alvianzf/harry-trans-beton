import React from 'react';
import Commitment from "../components/home/Commitment";
import Hero from "../components/home/Hero";
import Values from "../components/home/Values";
import Clients from '../components/home/Clients';

interface HomeProps {
  setPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {

  React.useEffect(() => {
    setPage('Home');
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
