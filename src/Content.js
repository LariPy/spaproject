import React from "react";
import Koira from "./img/koira.jpg";
import Kuva from "./Kuva";
import Teksti from "./Teksti";
import "./style.css";

function Content() {
  return (
    <div className="content">
      <div className="wrapper">
        <Kuva kuva={Koira} />
        <Teksti texti="content_text" />
      </div>
    </div>
  );
}
export default Content;
