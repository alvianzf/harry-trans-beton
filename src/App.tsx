import "./App.css";
import Layout from "./components/Layout";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes"; // Import routes

const App: React.FC = () => {
  const [currentPage, setPage] = React.useState<string>("Home");

  return (
    <Router>
      <Layout currentPage={currentPage}>
        <Routes>
          {routes.map(({ path, component: Component, name }) => (
            <Route
              key={name}
              path={path}
              element={<Component setPage={setPage} />}
            />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
