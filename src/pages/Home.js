import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Banner.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Welcome To EhChad Services Website! </h1>
        <p> For more info about myself please go to my about pages! </p>
        <Link to='socials'>
          <button> Socials Page </button>
        </Link>
        <Link to='about'>
          <button> About Page </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
