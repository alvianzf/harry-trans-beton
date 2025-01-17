import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import React from "react";

const App: React.FC = () => {
  const [currentPage, setPage] = React.useState<string>("Home");

  return (
    <Layout currentPage={currentPage} setPage={setPage}>
      <Home setPage={setPage} />
    </Layout>
  );
};

export default App;
