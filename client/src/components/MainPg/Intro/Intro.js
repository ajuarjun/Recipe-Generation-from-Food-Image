import React from "react";
import Bttn from "../Bttn/Bttn";
import Logo from "../../Logo/Logo";
import "./styles.css";

function Intro(){
  return(
    <div className="intro">
      <div style={{backgroundImage:"url(/img/cover.png)"}} className="pic">
      </div>
      <div className="intro-logo">
        <Logo/>
      </div>
      <div className="intro-beg">
        <p>Get the recipe by uploading the image</p>
        <div className="intro-btn">
          <Bttn text="Get started"/>
        </div>
      </div>
      <hr className="hr1"/>
      <hr className="hr2"/>
    </div>
  )
}

export default Intro;
