import "../css/aboutStyle.css";
import NavbarComponent from "./navbar";
import FooterComponent from "./footer";
import profile from "../logo/Ruengwut.jpg";


const AnoutMeComponent = () => {
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
      <div className="about-section" style={containerStyle}>
        <div className="img-profile">
        <img src={profile} className="main-logo" alt="main" />
        </div>
        <div className="skill-section">
          <div className="card-skills">
            <ul>
              <li>Skills: HTML, CSS, SCSS, JS, SQL</li>
            </ul>
          </div>
        </div>
        <div className="card-about">
          <div className="about-section">
            <h1>About Me</h1>
            <p>
              As an ambitious and dedicated individual, my primary focus is on
              seeking valuable experience and growth opportunities. I am
              passionate about continuous learning and constantly challenge
              myself to expand my skillset. With a strong foundation in my
              field, I am eager to apply my knowledge and expertise in practical
              settings.
            </p>
          </div>
        </div>
        <div className="card-education">
          <div className="education-section">
            <h1>Education</h1>
            <h4>Bachelor's Degree at Bangkok University</h4>
            <h5>May 2018 - June 2023</h5>
            <p>Information Technology and Digital Innovation</p>
            <p>Computer Science Major</p>
            <ul>
              <li>GPA 3.03</li>
            </ul>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default AnoutMeComponent;
