import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import WhatsappButton from "./buttons/WhatsappButton";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img className="footer-logo" src={logo} alt="logo" />
          <h2>PT. HARRY TRANS BETON</h2>
        </div>
        <h3>Contact Information</h3>
        <p>
          <i className="fas fa-map-marker-alt info"></i> Jl. Lintas Duri - Dumai
          Km.11 Air Kulim - Bathin Solapan - Bengkalis
        </p>
        <p>
          <i className="fas fa-envelope info"></i> pt.harrytransbeton@gmail.com
        </p>
        <p>
          <i className="fas fa-phone info"></i>{" "}
          <strong>082170459803/082172260888</strong>
        </p>
      </div>
      <div className="footer-content">
        <div className="quick-links">
          Quick Links
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <WhatsappButton text={true} />
        </div>
        © Copyright 2024 PT. Harry Trans Beton
      </div>
    </div>
  );
}

export default Footer;
