function Values() {
  return (
    <div className="values-container">
      <center style={{ margin: "3rem" }}>
        <i className="fas fa-wrench big-icon secondary"></i>
        <h1 className="values-title">Nilai-Nilai Perusahaan</h1>
      </center>
      <div className="values-box">
        <div className="values-box-item-1">
          <i className="fas fa-handshake big-icon"></i>
          <h2>Accountability</h2>
          <p>
            Dikelola secara professional, menghindari benturan kepentingan serta
            berpedoman pada asas-asas tata kelola korporasi yang baik.
          </p>
        </div>
        <div className="values-box-item-2">
          <i className="fas fa-users big-icon"></i>
          <h2>Team Work</h2>
          <p>
            Membangun kepercayaan, integritas, dan semangat positif dalam
            kerjasama tim.
          </p>
        </div>
      </div>
      <div className="values-box">
        <div className="values-box-item-2">
          <i className="fas fa-balance-scale big-icon"></i>
          <h2>Harmony</h2>
          <p>
            Keselarasan / bersinergi untuk saling memberikan nilai tambah kepada
            berbagai pihak yang terkait.
          </p>
        </div>
        <div className="values-box-item-1">
          <i className="fas fa-hand-holding-heart big-icon"></i>
          <h2>Service</h2>
          <p>
            Beriorientasi pada kepentingan pelanggan dan berkomitmen untuk
            memberikan pelayanan terbaik.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Values;
