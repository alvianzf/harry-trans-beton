import React from 'react';

const Contacts: React.FC = () => {
    return (
        <div className="contact-container">
            <h2>Hubungi Kami</h2>
            <div className="contact-info">
                <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>JL. LINTAS DURI - DUMAI KM.11 AIR KULIM - BATHIN SOLAPAN - BENGKALIS</p>
                </div>
                <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <p>pt.harrytransbeton@gmail.com</p>
                </div>
                <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <p>082170459803 / 082172260888</p>
                </div>
                <a 
                    href="https://wa.me/6282170459803" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whatsapp-link"
                >
                    <i className="fab fa-whatsapp"></i>
                    Hubungi via WhatsApp
                </a>
            </div>
        </div>
    );
};

export default Contacts;