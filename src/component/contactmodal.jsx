import React from "react";
import "../css/modalStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";



const ContactModal = ({ isOpen, content, onClose }) => {
    
  if (!isOpen) return null;
    
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="close-modal">
          <button className="modal-close" onClick={onClose}>
            <FontAwesomeIcon icon={faCircleXmark} style={{width: "20px",height: "20px",color:"#fe8019"}} />
          </button>
        </div>
        <h2>Contact Information</h2>
        <div className="modal-email">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>
            <strong>Email</strong>
          </p>
        </div>
        <p>ruengwut.sais@gmail.com</p>
        <div className="modal-phone">
          <FontAwesomeIcon icon={faMobile} />
          <p>
            <strong>Phone</strong>
          </p>
        </div>
        <p>(+66) 098-848-2480</p>
        <div className="modal-address">
          <FontAwesomeIcon icon={faHouse} />
          <p>
            <strong>Address</strong>
          </p>
        </div>
        <p>
          62/202 Village Natural Pracha u tit-76 Thugkru Thugkru Bangkok 10140
        </p>
      </div>
    </div>
  );
};

export default ContactModal;
