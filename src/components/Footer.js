import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.youtube.com/channel/UC3H33ordT_-qpMjUvY95ILg" target="_blank"><YouTubeIcon /> </a>
        <a href="https://twitter.com/EhChad_real" target="_blank"><TwitterIcon /> </a>
        <a href='https://www.instagram.com/chad.doty/' target="_blank"><InstagramIcon /> </a>  
      </div>
      <p> &copy; 2024 ehchadservices.com</p>
    </div>
  );
}

export default Footer;