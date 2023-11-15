import react from "./logo/react.svg";
// import profile from "./logo/Ruengwut.jpg";
import bootstrap from "./logo/bootstrap.svg";
import vue from "./logo/vue.svg";
import "./App.css";
// import TypeWriter from "react-typewriter";
import React from "react";
import TypewriterEffect from "typewriter-effect";
import NavbarComponent from "./component/navbar";
import FooterComponent from "./component/footer";
import VideoBG from "./assets/video/mega-rayquaza.mp4";

function App() {
  return (
    <div className="App" id="app-section">
      <NavbarComponent />
      <div className="App-header">
        <video autoPlay loop muted src={VideoBG} />
        {/* <img src={profile} className="main-logo" alt="main" /> */}
        <div className="text-overlay">
          <TypewriterEffect
            options={{
              strings: "Hi, My name is Ruengwut Saisawat",
              autoStart: true,
            }}
          ></TypewriterEffect>
          <div className="position">
            <TypewriterEffect
              options={{
                strings: ["I'm a Front End Developer", "I'm a UX/UI Designer"],
                autoStart: true,
                loop: true,
              }}
            ></TypewriterEffect>
          </div>
          <div className="framework">
            <p>Framework that I'm using</p>
            <div className="framework-logo">
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={bootstrap}
                  className="bootstrap-logo"
                  alt="bootstrap"
                />
              </a>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img src={react} className="react-logo" alt="react" />
              </a>
              <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                <img src={vue} className="vue-logo" alt="vue" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
