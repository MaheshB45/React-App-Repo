import React from 'react';
import "../index.css";
import github from "../Assets/github.svg";
import linkedin from "../Assets/linkedin.svg";
import email from "../Assets/email.svg";
import instagram from "../Assets/instagram.svg";
import dropD from "../Assets/dropD.svg";


const Footer = () => {
  return (
    <div className="footer">
    
        <div className="leftLink">
            <img src={github} alt="git" />
            <img src={linkedin} alt="linkedin" />
            <img src={email} alt="email" />
            <img src={instagram} alt="instagram" />
        </div>

        <div className="rightDdown">
            <button><p>Coloured-Green |</p><img src={dropD} alt="dropD" /></button>
        </div>
    </div>
  )
}

export default Footer