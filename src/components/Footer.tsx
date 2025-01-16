import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img className="footer-logo" src={logo} alt="logo" />
          <h2>PT. HARRY TRANS BETON</h2>
        </div>
        <p>
          <i className="fas fa-map-marker-alt info"></i> Jl. Lintas Duri - Dumai
          Km.11 Air Kulim - Bathin Solapan - Bengkalis
        </p>
        <p>
          <i className="fas fa-envelope info"></i> pt.harrytansbeton@gmail.com
        </p>
        <p>
          <i className="fas fa-phone info"></i>{" "}
          <strong>0812170459803/082172260888</strong>
        </p>
      </div>
      <div className="footer-content">
        <div className="quick-links">
          Quick Links
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Projects</a>
          <a href="/services">Operations</a>
          <a href="/contact">Contact Us</a>
          <div className="whatsapp-link">
            <a
              href="https://wa.me/62812170459803"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp info"></i> WhatsApp
            </a>
          </div>
        </div>
        © Copyright 2024 PT. Harry Trans Beton
      </div>
    </div>
  );
}

export default Footer;
