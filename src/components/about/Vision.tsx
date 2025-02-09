import React from "react";

const Vision: React.FC = () => {
    return (
        <section className="vision-section">
            <div className="vision-container">
                <div className="vision-header">
                    <h2 className="vision-title">Visi & Misi</h2>
                </div>

                <div className="vision-content">
                    {/* Vision Section */}
                    <div className="vision-box">
                        <h3 className="vision-subtitle">Visi</h3>
                        <p className="vision-text">
                            Menjadi perusahaan Batching Plant pilihan dan terpercaya yang
                            berintegritas, selalu berinovasi dan berkomitmen untuk
                            memusatkan pelayanan pada kepuasan customer.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="vision-box">
                        <h3 className="vision-subtitle">Misi</h3>
                        <ul className="vision-list">
                            {[
                                "Ikut serta mensukseskan proyek Nasional melalui pembangunan dan pemberdayaan daerah dengan berkontribusi menciptakan lapangan kerja untuk masyarakat sekitar lokasi.",
                                "Berkomitmen menyediakan solusi jasa Batching Plant yang handal, tepat waktu, tepat biaya dengan hasil yang berkualitas, dengan mengutamakan keselamatan kerja.",
                                "Memberikan pelayanan terbaik kepada customer, serta mempertahankan tingkat profesionalisme dan kejujuran dalam hubungan kami dengan customer dan karyawan.",
                                "Memelihara hubungan baik dengan para pelanggan karena kami bertanggung jawab terhadap layanan yang kami jual.",
                            ].map((text, index) => (
                                <li className="vision-item" key={index}>
                                    <span className="vision-number">{index + 1}</span>
                                    <p className="vision-text">{text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
