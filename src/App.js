import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Component/navBar";
import image1 from "./Images/1.jpg";
import image2 from "./Images/2.jpg";
import image3 from "./Images/3.png";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar image={image3} />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
      <img className="image" src={image1} alt="" />

      <img src={image2} alt="" />
    </div>
  );
}

export default App;
