import React from "react";

function SocialItem({ image, name, link, hiddenLink }) {
  return (
     <div className="socialItem"> 
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1> {name} </h1>
      <p>{link}</p>
    </div>
 
    
  );
}

export default SocialItem;