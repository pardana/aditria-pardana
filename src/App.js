// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Certified from "./components/Certified";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Skills />
      <Projects />
      <Testimonials />
      <Certified />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
