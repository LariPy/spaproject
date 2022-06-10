import React from "react";
import Button from "./Button";
import Social from "./Social";
import facebook from "./img/facebook.svg";
import instagram from "./img/instagram.svg";
import twitter from "./img/twitter.svg";
import youtube from "./img/youtube.svg";
import "./style.css";

const Footer = () => {
  return (
    <div className="">
      <div className="row">
        <a href="https://reactjs.org/" rel="noreferrer">
          <Button icon="heart" />
        </a>
        <a href="https://www.w3schools.com/react/react_props.asp"
          rel="noreferrer">
          <Button icon="heart-broken" />
        </a>
      </div>

      <div className="footer_social">
        <Social icon1="socials-icon" icon2={facebook} icon3=" _blank" />
        <Social icon1="socials-icon" icon2={instagram} icon3=" _blank" />
        <Social icon1="socials-icon" icon2={twitter} icon3=" _blank" />
        <Social icon1="socials-icon" icon2={youtube} icon3=" _blank" />
      </div>
    </div>
  );
};
export default Footer;
