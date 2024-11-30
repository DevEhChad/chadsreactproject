import React from "react";
import "../styles/Applications.css";
import ECMM from "../assets/ECMMweb.png";

function Applications() {
    return (
      <div className="application">

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