import travelkeeper from "../images/travel-keeper-screenshot.png";
import localmedia from "../images/local-media-screenshot.png";
import dogspot from "../images/thedogspot-screenshot.png";
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
      <div className="local-media">
        <h1>Local Media</h1>
        <img className="picture" src={localmedia} alt="local-media" />
        <p>
          Local Media is a blog application that utlizes React and Axios on the
          front end with an AirTable API as a database. The application is an
          example of full stack applications that use a 3rd party backend
          service.
        </p>
        <a href="https://local-media.netlify.app/">Live Site</a>
      </div>
      <div className="the-dog-spot">
        <h1>The Dog Spot</h1>
        <img className="picture" src={dogspot} alt="the-dog-spot" />
        <p>
          The Dog Spot is a full stack MERN application that utilizes React and
          Axios on the front end which calls an Express/NodeJS backend. The
          application is geared towards adoption shelters nationwide to use as
          an inventory/marketing site.
        </p>
        <a href="https://the-dog-spot.netlify.app/">Live Site</a>
      </div>
    </div>
  );
}

export default Projects;
