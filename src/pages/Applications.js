import React from "react";
import "../styles/Applications.css";
import ECMM from "../assets/ECMMweb.png";
import { Helmet } from 'react-helmet';

function Applications() {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Applications</title>
        <link rel="canonical" href="https://ehchadservices.com" />
      </Helmet>

      <div className="ECMMContainer">
        <div className="title">
          <h1>EhChads Mod Manager</h1>
        </div>
        <img className="ECMMweb" src={ECMM} />

      </div>
    </div>
  );
}

export default Applications;