import { ReactNode } from "react";
import Navbar from "./navigations/Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />

      {children}

      <Footer />
    </div>
  );
}

export default Layout;
