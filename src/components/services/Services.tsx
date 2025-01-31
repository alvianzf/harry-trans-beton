import React from 'react';

const Services: React.FC = () => {
    return (
        <div className="services">
            <h2>Our Services</h2>
            <div className="services-content">
                <div className="big-image">
                    <img src="/images/25.jpeg" alt="Main Service" />
                </div>
                <div className="thumbnails">
                    <div className="thumbnail">
                        <img src="/images/2.jpeg" alt="Mobile Plant" />
                        <p>MOBILE PLANT</p>
                        <p>Dikenal juga sebagai pabrik beton portable yang sangat handal karena dapat dioperasikan di tempat atau lokasi proyek dan dapat berpindah-pindah dari satu proyek ke proyek lainnya.</p>
                    </div>
                    <div className="thumbnail">
                        <img src="/images/22.jpeg" alt="Ready Mix" />
                        <p>READY MIX</p>
                        <p>Merupakan campuran berbagai material yang diolah sesuai komposisi yang telah ditentukan berdasarkan job mix yang disusun oleh para ahli sehingga menghasilkan campuran beton dengan mutu tertentu.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;