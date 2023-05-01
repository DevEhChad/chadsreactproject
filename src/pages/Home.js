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
          <button> This is a button </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
