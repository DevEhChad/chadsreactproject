import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from 'react-router-dom';
import "../styles/Footer.css";
import TermsOfService from "../pages/TermsOfService";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href='https://github.com/DevEhChad' target="_blank" rel="noreferrer"><GitHubIcon /> </a>
        <a href="https://twitter.com/EhChad_real" target="_blank" rel="noreferrer"><TwitterIcon /> </a>
        <a href='https://www.instagram.com/chad.doty/' target="_blank" rel="noreferrer"><InstagramIcon /> </a>
        <a href="https://youtube.com/@ehchadreal?si=NS8Fk9PWINFnBCF0" target="_blank" rel="noreferrer"><YouTubeIcon /> </a>
      </div>
      <div className="importantInfo">
        <Link to="/TermsOfService">Terms of Service</Link> {TermsOfService}
      </div>
      <p> © 2025 ehchadservices.com</p>
    </div>
  );
}

export default Footer;