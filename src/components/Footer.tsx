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
          <strong>0812170459803/082172260888</strong>
        </p>
        <h3>Our Plant</h3>
        <p>
          <i className="fas fa-industry info"></i> Wet Mix System Plant
        </p>
        <p>
          Para ahli mencampurkan seluruh bahan material, semen, additive, dan
          air ke dalam wadah mixing untuk diolah secara bersamaan.
        </p>
        <p style={{ marginTop: "1rem" }}>
          <i className="fas fa-truck info"></i> Mobile Plant
        </p>
        <p>
          Dikenal juga sebagai pabrik beton protable yang sangat handal karena
          dapat dioperasikan di tempat atau lokasi proyek dan dapat
          berpindah-pindah dari satu proyek ke proyek lainnya.
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
