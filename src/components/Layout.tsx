import { ReactNode } from "react";
import Navbar from "./navigations/Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  currentPage: string;
  setPage: (page: string) => void;
}

function Layout({ children, currentPage, setPage }: LayoutProps) {
  return (
    <div>
      <Navbar currentPage={currentPage} setPage={setPage} />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
