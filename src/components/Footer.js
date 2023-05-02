import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/"><InstagramIcon /> </a> 
        <a href="https://twitter.com/home"><TwitterIcon /> </a> 
        <a href="https://www.facebook.com/"><FacebookIcon /> </a> 
        <a href="https://www.linkedin.com/"><LinkedInIcon /> </a>
      </div>
      <p> &copy; 2023 chadstestsite.com</p>
    </div>
  );
}

export default Footer;