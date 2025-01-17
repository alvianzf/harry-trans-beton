import { ReactNode } from "react";
import Navbar from "./navigations/Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  currentPage: string;
}

function Layout({ children, currentPage }: LayoutProps) {
  return (
    <div>
      <Navbar currentPage={currentPage} />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
