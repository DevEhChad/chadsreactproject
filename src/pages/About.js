import React from "react";
import ChadsImage from "../assets/MytwitchBanner.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${ChadsImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT ME</h1>
        <p>
        Hello, My name is Chad! Nice to meet you! I'm currently working toward my goals on trying to become a developer and a content creator. 
        I have done a couple projects on C#, C++ and JavaScript. My Goal is to learn C#, C++, JavaScript so I can be more fluent.
        If you have any pointers, or are a developer or even a gamer, please join the discord! Also, Don't forget to look at my YouTube channel and other Socials! 
        </p>
        <div className="discordInvAbout">
        <a class="btn" href="https://discord.gg/brQXPhQ" target="_blank" rel="noopener noreferrer">Join The Discord!</a>
        </div>
        <div className="discordIntAbout">
        <iframe src="https://discord.com/widget?id=573633846587817992&theme=dark" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
        </div>
    </div>
  );
}

export default About;