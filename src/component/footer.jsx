import React from "react";
import "../css/footetStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const FooterComponent = () => {
  return (
    <div className="footer-content">
      <ul className="footer-links">
        <li>
          <a href="https://www.facebook.com/FormRuengwut" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="github-icon"/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ruengwut.sais/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="github-icon"/>
          </a>
        </li>
        <li>
          <a href="https://github.com/RuengwutSais" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="github-icon"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ruengwut-saisawat-7535ab284/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="github-icon"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterComponent;
