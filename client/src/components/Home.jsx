import image from "../images/home-page-image.jpeg";
import "./Home.css";

function Home(props) {
  return (
    <div className="home">
      <div className="home-image-area">
        <img className="home-image" src={image} alt="home-banner" />
        <div className="home-image-text">
          <h2>Amar Patel</h2>
          <h4>Software Engineer</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
