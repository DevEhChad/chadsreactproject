import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Tokyo-Ghoul-Backgrounds.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Chad's Test Website </h1>
        <p> This is kinda fun</p>
        <Link to='shop'>
          <button> Visit Our Shop </button>
        </Link>
        </div>
        <div className="discordint">
        <iframe src="https://discord.com/widget?id=573633846587817992&theme=dark" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
    </div>
  );
}

export default Home;
