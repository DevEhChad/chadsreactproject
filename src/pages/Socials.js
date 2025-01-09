import React from "react";
import "../styles/Socials.css";
import { SocialList } from "../helpers/SocialList";
import SocialItem from "../components/SocialItem";
import { Helmet } from "react-helmet";
import { Title } from "@mui/icons-material";

function Socials() {

  return (
    <div className="social">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Socials</title>
        <link rel="canonical" href="https://ehchadservices.com/socials" />
      </Helmet>
      <h1 className="socialTitle">Check Out My Socials</h1>
      <div className="socialList">
        {SocialList.map((socialItem, key) => {
          return (
            <SocialItem
              key={key}
              image={socialItem.image}
              name={socialItem.name}
              link={socialItem.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Socials;