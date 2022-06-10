import React from "react";
import Banner from "./Banner";
import animal_image from "./img/animalbanner.jpg";

const Header = ({ title }) => {
  return (
    <div className="header">
      <Banner web_banner={animal_image} />
      {title}
    </div>
  );
};

export default Header;
