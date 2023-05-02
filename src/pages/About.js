import React from "react";
import MultiplePizzas from "../assets/shityourself.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Hello, My name is Chad and I'm currently working towards my goals on trying to become a developer. 
          I been working hard and trying to learn quickly. 
          I try to be patient but I really wanna just learn fast.
        </p>
      </div>
    </div>
  );
}

export default About;