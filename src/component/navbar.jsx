import "../css/navbarStyle.css";
import React, { useState } from "react";
import TypewriterEffect from "typewriter-effect";
import ContactModal from "./contactmodal";



const NavbarComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <TypewriterEffect
            options={{
              strings: ["Learn", "Practice", "Create", "Improve"],
              autoStart: true,
              loop: true,
            }}
          ></TypewriterEffect>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#app-section">Home</a>
          </li>
          <li>
            <a href="#about-section">About</a>
          </li>
          <li>
            <a href="#exp-section">Experience</a>
          </li>
          <li>
            <a href="/#" onClick={openModal}>Contact</a>
          </li>
        </ul>
      </nav>
      <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default NavbarComponent;
