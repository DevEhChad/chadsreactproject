import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/BannerTemplate.jpg";
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
    </div>
  );
}

export default Home;
