import image from "../images/home-page-image.jpeg";
import "./Home.css";

function Home(props) {
  return (
    <div className="home">
      <div className="home-image-area">
        <img className="home-image" src={image} alt="home-banner" />
      </div>
      <div className="home-image-text">
        <h2>Amar Patel</h2>
        <h4>Software Engineer</h4>
      </div>
      <p className="text-area">
        My name is Amar Patel and I like to figure out how things work. I spent
        my life tinkering with a lot of technology with a desire to learn the
        in's and out's of what makes the gears turn.
      </p>
    </div>
  );
}

export default Home;
