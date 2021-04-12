import "./Nav.css";
import amar from "../../images/amarpatel4.png";
import { Link } from "react-router-dom";
function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <img src={amar} alt="logo" className="logo" />
      </Link>
      <div className="menu-links">
        <Link to="/projects">Recent Projects</Link>
        <Link to="/contact">Contact Me</Link>
        <a
          href="https://1drv.ms/w/s!Ah5HXdHVlST5kRK2P5m94N1cnV2o"
          target="blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Nav;
