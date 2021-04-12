import image from "../images/home-page-image.jpeg";
import "./Home.css";

function Home(props) {
  return (
    <div className="home">
      <h1 className="tagline">Software Engineer | Full Stack Developer</h1>
      <div className="top-banner">
        <img className="home-image" src={image} alt="home-banner" />

        <div className="home-image-text">
          <h2>Amar Patel</h2>
          <h4>Software Engineer</h4>
        </div>
      </div>
      <p className="text-area">
        My name is Amar Patel and I like to figure out how things work. I spend
        my life tinkering with a lot of technology - fueled by a desire to learn
        the ins and outs of what makes the gears turn.
      </p>
      <p className="text-area-two">
        I have an extensive background in IT Administration as well as forward
        facing Web Development. I recently completed an immersive 12 week full
        stack development course through General Assembly and have come full
        circle as a Full Stack Web Developer.
      </p>
      <div className="skills">
        <h3>Proficient Skills:</h3>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
          <li>MongoDB</li>
          <li>Heroku/Netlify Deployment</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
