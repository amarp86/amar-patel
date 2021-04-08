import "./Footer.css";
import linkedin from "../../images/linkedinlogo.png";
import octocat from "../../images/Octocat.png";

function Footer(props) {
  return (
    <div className="footer">
      <div className="amar">
        Amar Patel
        <a href="https://github.com/amarp86" target="blank" rel="noreferrer">
          <img className="github-image" src={octocat} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/amarp86/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="linkedin-image" src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
