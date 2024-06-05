import React from "react";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";


export const Icons: React.FC = () => (
  <div className="wrapper" style={{ margin: '1rem' }}>
    <a
      className="icon"
      href="https://github.com/sneddonlewis"
      target="_blank"
      rel="noreferrer"
      >
      <div className="tooltip">Github</div>
      <span aria-label="link to github">
        <FaGithub />
      </span>
    </a>
    <a
      className="icon"
      href="https://www.linkedin.com/in/lsneddoncodes/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="tooltip">LinkedIn</div>
      <span aria-label="link to linkedin">
        <FaLinkedin />
      </span>
    </a>
    <a
      className="icon"
      href="#contact"
    >
      <div className="tooltip">Get in touch</div>
      <span aria-label="scroll to contact form">
        <FaRegEnvelope />
      </span>
    </a>
  </div>
)

