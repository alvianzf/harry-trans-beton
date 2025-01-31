import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Service from "./pages/Service";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/about", component: About, name: "About" },
  { path: "/contact", component: Contact, name: "Contact" },
  { path: "/gallery", component: Gallery, name: "Gallery" },
  { path: "/services", component: Service, name: "Service" }
];

export default routes;
