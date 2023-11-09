import "../css/navbarStyle.css";
import React, { useState } from "react";
import TypewriterEffect from "typewriter-effect";
import ContactModal from "./contactmodal";
import { Link } from "react-router-dom";


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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link onClick={openModal}>Contact</Link>
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
