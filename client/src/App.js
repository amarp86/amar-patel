import "./App.css";
import Home from "./components/Home"
import Nav from "./components/layout/Nav"
import Footer from "./components/layout/Footer"
import {Route, Link} from "react-router-dom"
import Projects from "./screens/Projects"

function App() {
  return <div className="App">
    <Nav />
    <Route exact path='/'>
    <Home />
    </Route>
    <Route exact path='/projects'>
      <Projects />
    </Route>
    <Footer />
  </div>;
}

export default App;
