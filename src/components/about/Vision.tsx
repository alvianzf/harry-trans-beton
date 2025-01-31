import React from 'react';

const Vision: React.FC = () => {
    return (
        <div className="section-padding">
            <div className="container-width">
                <h2 className="section-title">VISI & MISI</h2>
                
                <div className="content-wrapper">
                    <div>
                        <h3 className="subsection-title">Visi</h3>
                        <p className="text-content">
                            Menjadi perusahaan Batching Plant pilihan dan terpercaya yang berintegritas, selalu berinovasi dan berkomitmen untuk memusatkan pelayanan pada kepuasan customer.
                        </p>
                    </div>

                    <div>
                        <h3 className="subsection-title">Misi</h3>
                        <div className="mission-list">
                            <div className="mission-item">
                                <span className="mission-number">01</span>
                                <p className="text-content">
                                    Ikut serta mensukseskan proyek Nasional melalui pembangunan dan pemberdayaan daerah dengan berkontribusi menciptakan lapangan kerja untuk masyarakat sekitar lokasi.
                                </p>
                            </div>

                            <div className="mission-item">
                                <span className="mission-number">02</span>
                                <p className="text-content">
                                    Berkomitmen menyediakan solusi jasa Batching Plant yang handal, tepat waktu, tepat biaya dengan hasil yang berkualitas, dengan mengutamakan keselamatan kerja.
                                </p>
                            </div>

                            <div className="mission-item">
                                <span className="mission-number">03</span>
                                <p className="text-content">
                                    Memberikan pelayanan terbaik kepada customer, serta mempertahankan tingkat profesionalisme dan kejujuran dalam hubungan kami dengan customer dan karyawan.
                                </p>
                            </div>

                            <div className="mission-item">
                                <span className="mission-number">04</span>
                                <p className="text-content">
                                    Memelihara hubungan baik dengan para pelanggan karena kami bertanggung jawab terhadap layanan yang kami jual.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;