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
        Hi there! I'm Chad, and I'm passionate about becoming a developer and content creator. I'm actively pursuing these goals by expanding my skillset in various programming languages and software.<br></br><br></br>
        Currently, I'm focusing on mastering C#, C++, and JavaScript, and I've already completed a few projects using these languages. I'm also proficient in 3D design with Fusion 360 and am always eager to learn new programs.<br></br><br></br>
        I'd love to connect with fellow developers, gamers, and anyone interested in tech or content creation! Feel free to join my Discord server, and don't forget to check out my YouTube channel and other social media. 
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