// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
