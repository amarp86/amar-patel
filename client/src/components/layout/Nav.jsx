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
      </div>
    </div>
  );
}

export default Nav;
