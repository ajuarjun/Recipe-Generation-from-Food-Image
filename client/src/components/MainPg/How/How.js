import React from "react";
import Subhead from "../../Subhead/Subhead";
import "./styles.css";

function How(){
  return(
    <div className="how">
    <div>
      <Subhead title="How to use"/>
      <ol>
        <li>Upload image.</li>
        <li>Get the recipe.</li>
        <li>That's it.</li>
      </ol>
    </div>
    <hr/>
    <img className="burger-pic" src="img/burger.png" alt="burger"/>
    </div>
  )
}

export default How;
