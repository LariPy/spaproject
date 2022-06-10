import React from "react";

const Banner = ({ web_banner }) => {
  return (
    <div classname="banner">
      <img src={web_banner} alt="Animals" />
    </div>
  );
};
export default Banner;
