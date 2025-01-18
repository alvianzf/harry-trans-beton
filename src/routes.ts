import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/about", component: About, name: "About" },
  { path: "/contact", component: Contact, name: "Contact" },
];

export default routes;
