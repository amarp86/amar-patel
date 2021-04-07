import "./App.css";
import Home from "./components/Home"
import Nav from "./components/layout/Nav"
import Footer from "./components/layout/Footer"
import {Route} from "react-router-dom"
import Projects from "./screens/Projects"
import Contact from "./screens/Contact"

function App() {
  return <div className="App">
    <Nav />
    <Route exact path='/'>
    <Home />
    </Route>
    <Route exact path='/projects'>
      <Projects />
    </Route>
    <Route exact path='/contact'>
      <Contact />
    </Route>
    <Footer />
  </div>;
}

export default App;
