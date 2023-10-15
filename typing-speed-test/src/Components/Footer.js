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
        <a href="https://github.com/MaheshB45"><img src={github} alt="git" /></a>
        <a href="https://www.linkedin.com/in/mahesh-bahir-931b8b1b0/"><img src={linkedin} alt="linkedin" /></a>
        <a href="mailto:maheshbahir45@gmail.com"><img src={email} alt="email" /></a>
        <a href="-"><img src={instagram} alt="instagram" /></a>
        </div>

        <div className="rightDdown">
            <button><p>Coloured-Green |</p><img src={dropD} alt="dropD" /></button>
        </div>
    </div>
  )
}

export default Footer