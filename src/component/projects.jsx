import NavbarComponent from "./navbar";
import FooterComponent from "./footer";
import "../css/projectStyle.css";
import rentCentral from "../logo/1.png";
import miWeather from "../logo/2.png";
import filmpass from "../logo/3.png";
import backgroundStyles from "../css/background";

const ProjectComponent = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="project-container" style={backgroundStyles.container}>
        <div className="project-section">
          <div className="card-project">
            <div className="pic1-div">
              <h1>Projects</h1>
              <img src={rentCentral} alt="project-1" />
            </div>
            <h2>Web Application Residence Rent Center</h2>
            <h5>2022-2023</h5>
            <h4>Overview:</h4>
            <p>
              A web application platform that provides information for rent
              estate, This project have a feature such as view/search estate,
              add/edit/delete estate, review/report estate, and chat within a
              web application.
            </p>
            <h4>Tools:</h4>
            <p>
              HTML, CSS, JavaScript, node.js, vue.js, Bootstrap, Docker,
              mariaDB, jwt, socket.io
            </p>
          </div>
        </div>
        <div className="workspace-section">
          <div className="card-workspace">
            <div>
              <div className="workspace-div">
                <h1>Workspace</h1>
                <div className="miweater-div">
                  <a
                    href="https://miweather-workspace.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={miWeather} alt="workspace-1" />
                    <div className="miweater-overlay">
                      <h1>Click to view!</h1>
                    </div>
                  </a>
                </div>
              </div>
              <h2>MiWeather</h2>
              <h5>2023</h5>
              <h4>Overview:</h4>
              <p>
                An practice workspace of a weather dashboard by calling an API
                from OpenWeather.com
              </p>
              <h4>Tools:</h4>
              <p>HTML, CSS, JavaScript, vue.js, Bootstrap, FontAwesome</p>
            </div>
            <br />
            <div className="break-work">
              <div className="workspace-div">
                <div className="miweater-div">
                  <a
                    href="https://filmic-pass.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={filmpass} alt="workspace-1" />
                    <div className="miweater-overlay">
                      <h1>Click to view!</h1>
                    </div>
                  </a>
                </div>
              </div>
              <h2>FilmicPass</h2>
              <h5>2023</h5>
              <h4>Overview:</h4>
              <p>
                Create a movie search app that allows users to search for
                information about movies using an external API
              </p>
              <h4>Tools:</h4>
              <p>HTML, CSS, JavaScript, React.js, Tailwind, FontAwesome</p>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default ProjectComponent;
