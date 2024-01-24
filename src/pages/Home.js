import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/MytwitchBanner.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Eh Chad's Test Website </h1>
        <p> For more info go to my about page! </p>
        <Link to='about'>
          <button> About Page </button>
        </Link>
        </div>
        <div className="discordint">
        <iframe src="https://discord.com/widget?id=573633846587817992&theme=dark"></iframe>
        </div>
    </div>
  );
}

export default Home;
