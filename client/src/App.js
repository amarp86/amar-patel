import "./App.css";
import Home from "./components/Home"
import Nav from "./components/layout/Nav"
import Footer from "./components/layout/Footer"

function App() {
  return <div className="App">
    <Nav />
    <Home />
    <Footer />
  </div>;
}

export default App;
