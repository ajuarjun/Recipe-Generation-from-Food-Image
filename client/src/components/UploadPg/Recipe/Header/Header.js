import React from "react";
import "./styles.css";

function Header(props){
  return(
    <div className="header" onClick={()=>props.setNum(Number(props.text[props.text.length-1]))}>
      {props.text}
    </div>
  )
}

export default Header;
