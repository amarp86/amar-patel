import travelkeeper from "../images/travel-keeper-screenshot.png";
import "./Projects.css";
function Projects(props) {
  return (
    <div className="all-projects">
      <div className="travel-keeper">
        <h1>Travel Keeper</h1>
        <img className="picture" src={travelkeeper} alt="travelkeeper" />
        <p>
          Travel Keeper is a web application that utilizes React, Ruby on Rails,
          PostgreSQL, Javascript, HTML, and CSS in a full stack application. It
          allows users to create accounts and post multiple posts with pictures,
          details, comments, and lets users "like" other users posts!
        </p>
        <a href="https://travel-keeper.netlify.app/">Live Site</a>
      </div>
    </div>
  );
}

export default Projects;
