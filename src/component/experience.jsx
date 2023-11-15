import "../css/experienceStyle.css";
import avalant from "../logo/avalant.jpg";
import NavbarComponent from "./navbar";
import FooterComponent from "./footer";

const ExperienceComponent = () => {
  const containerStyle = {
    background: `
      radial-gradient(50% 50% at 100% 0, #61dafb 0% 5%, #5acaf0 6% 15%, #61dafb 16% 25%, #5acaf0 26% 35%, #61dafb 36% 45%,
      #5acaf0 46% 55%, #61dafb 56% 65%, #5acaf0 66% 75%, #61dafb 76% 85%, #5acaf0 86% 95%, #0000 96%),
      radial-gradient(50% 50% at 0 100%, #61dafb 0% 5%, #5acaf0 6% 15%, #61dafb 16% 25%, #5acaf0 26% 35%, #61dafb 36% 45%,
      #5acaf0 46% 55%, #61dafb 56% 65%, #5acaf0 66% 75%, #61dafb 76% 85%, #5acaf0 86% 95%, #0000 96%),
      radial-gradient(50% 50%, #61dafb 0% 5%, #5acaf0 6% 15%, #61dafb 16% 25%, #5acaf0 26% 35%, #61dafb 36% 45%,
      #5acaf0 46% 55%, #61dafb 56% 65%, #5acaf0 66% 75%, #61dafb 76% 85%, #5acaf0 86% 95%, #0000 96%),
      radial-gradient(50% 50%, #61dafb 0% 5%, #5acaf0 6% 15%, #61dafb 16% 25%, #5acaf0 26% 35%, #61dafb 36% 45%,
      #5acaf0 46% 55%, #61dafb 56% 65%, #5acaf0 66% 75%, #61dafb 76% 85%, #5acaf0 86% 95%, #0000 96%) 32px 32px`,
    backgroundSize: '64px 64px',
    backgroundColor: '#61dafb',
  };
  return (
    <div>
      <NavbarComponent />
      <div className="exp-content" id="exp-section" style={containerStyle}>
        <div className="intern-section">
          <div className="img-logo">
            <img src={avalant} className="avalant-logo" alt="avalant" />
          </div>
          <h1>Experience</h1>
          <h4>Intern at Avalant Co.,Ltd.</h4>
          <h5>Jan 2022 - Apr 2022</h5>
          <p>Position : Developer</p>
          <p>Best Achievement : Product Notifications Feature</p>
          <p>
            During my intern period at Avalant, I acquired valuable skills and
            knowledge by utilizing the tools and resources provided. I actively
            participated in real projects, applying my problem-solving abilities
            to address issues and complete tasks within the designated sprints.
            Successfully contributing to each project, I consistently
            demonstrated my aptitude for fixing problems and delivering quality
            results.
          </p>
          <p>Tools : DBeaver, PuTTy, WinScp, HTML, CSS, MySQL, JavaScript</p>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ExperienceComponent;
