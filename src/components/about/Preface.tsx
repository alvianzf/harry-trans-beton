import React, { useState } from "react";
import commissioner from "../../assets/images/org/commissioner.png";
import director from "../../assets/images/org/director.png";
import projectManager from "../../assets/images/org/project-manager.png";

interface TeamMemberProps {
  role: string;
  name: string;
  photo: string;
  preface: string;
}

const Preface: React.FC = () => {
  const team: TeamMemberProps[] = [
    {
      role: "Komisaris",
      name: "Lili Nadia",
      photo: commissioner,
      preface:
        "Indonesia Merupakan negara yang sangat menarik untuk banyak investor dan perusahaan luar maupun dalam negeri, oleh karena itu kita harus optimis untuk mewujudkan negara ini menjadi negara maju dengan memberikan rasa aman dan nyaman.",
    },
    {
      role: "Direktur",
      name: "Parman",
      photo: director,
      preface:
        "PT Harry Trans Beton telah berhasil menyelesaikan capaian-capaian yang menjadi landasan utama perusahaan untuk terus mengembangkan potensi dan kompetensi sumber daya manusia secara maksimal sesuai dengan perkembangan dunia industri dan perkembangan teknologi, guna memberikan hasil yang terbaik dan kepuasan kepada klien. Beberapa capaian tersebut antara lain adalah tingkat kepercayaan klien yang terus meningkat, terlihat dari jumlah sinergi dan kerjasama yang terus meningkat dan stabil dengan berbagai pihak.",
    },
    {
      role: "Project Manager",
      name: "Ardian Adityawarman, ST",
      photo: projectManager,
      preface:
        "berkomitmen untuk menyelesaikan setiap pekerjaan dengan cepat dan tepat serta mengedepankan mutu, kualitas, dan detail yang tinggi. Hal tersebut tidak terlepas dari peranan setiap anggota perusahaan dalam melaksanakan pekerjaan secara professional dan memiliki rasa tanggung jawab yang tinggi.",
    },
  ];

  return (
    <div className="preface">
      <center>
        <h2 className="team-title">Prakata</h2>
      </center>
      <div className="team">
        {team.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

const TeamMember: React.FC<{ member: TeamMemberProps }> = ({ member }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`team-member ${member.role.toLowerCase().replace(" ", "-")}`}
    >
      <div className="image-container">
        {!isLoaded && <div className="image-placeholder">Loading...</div>}
        <img
          src={member.photo}
          alt={`${member.role} photo`}
          className={`team-photo ${isLoaded ? "loaded" : "loading"}`}
          onLoad={() => setIsLoaded(true)}
          style={{ display: isLoaded ? "block" : "none" }}
        />
      </div>
      <h2 className="team-name">{member.name}</h2>
      <h3 className="team-role">{member.role}</h3>
      <p className="team-preface">{member.preface}</p>
    </div>
  );
};

export default Preface;
