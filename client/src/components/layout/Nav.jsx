import "./Nav.css";
import { Link } from "react-router-dom";
function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <h1 className="title">Amar Patel</h1>
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
