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
          If you have any pointers and are a gamer please join the discord! 
        </p>
      </div>
      <div className="discordinvabout">
      <a class="btn" href="https://discord.gg/brQXPhQ" target="_blank" rel="noopener noreferrer">Join The Discord!</a>
    </div>
      <div className="discordintabout">
        <iframe src="https://discord.com/widget?id=573633846587817992&theme=dark" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
    </div>
  );
}

export default About;