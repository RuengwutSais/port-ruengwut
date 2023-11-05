import react from "./logo/react.svg";
import profile from "./logo/Ruengwut.jpg";
import bootstrap from "./logo/bootstrap.svg";
import vue from "./logo/vue.svg";
import "./App.css";
// import TypeWriter from "react-typewriter";
import React from "react";
import TypewriterEffect from "typewriter-effect";
import NavbarComponent from "./component/navbar";
import AboutMeComponent from "./component/about";
import FooterComponent from "./component/footer";
import ExperienceComponent from "./component/experience";

function App() {
  return (
    <div className="App" id="app-section">
      <NavbarComponent />
      <header className="App-header">
        <img src={profile} className="main-logo" alt="main" />
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
            <img src={bootstrap} className="bootstrap-logo" alt="bootstrap" />
            <img src={react} className="react-logo" alt="react" />
            <img src={vue} className="vue-logo" alt="vue" />
          </div>
        </div>
      </header>
      <AboutMeComponent />
      <ExperienceComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
