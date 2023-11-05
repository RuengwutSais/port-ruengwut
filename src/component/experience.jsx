import "../css/experienceStyle.css";
import avalant from "../logo/avalant.jpg"

const ExperienceComponent = () => {
  return (
    <div className="exp-content" id="exp-section">
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
          During my trainee period at Avalant, I acquired valuable skills and
          knowledge by utilizing the tools and resources provided. I actively
          participated in real projects, applying my problem-solving abilities
          to address issues and complete tasks within the designated sprints.
          Successfully contributing to each project, I consistently demonstrated
          my aptitude for fixing problems and delivering quality results.
        </p>
      </div>
    </div>
  );
};

export default ExperienceComponent;
