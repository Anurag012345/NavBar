import React from "react";
import NavBar from "../Component/navBar";
import image1 from "../Images/1.jpg";
import image2 from "../Images/2.jpg";
import image3 from "../Images/3.png";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <NavBar image={image3} />
      <img className="image" src={image1} alt="" />
      <img className="image" src={image2} alt="" />
    </div>
  );
}
