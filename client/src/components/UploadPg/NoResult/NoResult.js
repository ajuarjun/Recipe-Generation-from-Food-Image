import React from "react";
import "./styles.css";

function NoResult(props){

  return(
    <div className="result">
      {(!props.up)&&<p>Upload image to get the recipe</p>}
      {(props.up)&&<div className="loader"></div>}
    </div>
  )
}

export default NoResult;
