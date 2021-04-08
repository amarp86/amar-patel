import image from "../images/home-page-image.jpeg";
import "./Home.css";

function Home(props) {
  return (
    <div className="home">
      <h1>Software Engineer | Full Stack Developer</h1>
      <img className="home-image" src={image} alt="home-banner" />

      <div className="home-image-text">
        <h2>Amar Patel</h2>
        <h4>Software Engineer</h4>
      </div>
      <p className="text-area">
        My name is Amar Patel and I like to figure out how things work. I spend
        my life tinkering with a lot of technology - fueled by a desire to learn
        the ins and outs of what makes the gears turn.
      </p>
    </div>
  );
}

export default Home;
