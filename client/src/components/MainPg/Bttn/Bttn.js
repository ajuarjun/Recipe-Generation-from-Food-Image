import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";

function Bttn(props){
  return(
    <Link className="bttn" to="/recipe">
      <div>
        {props.text}
      </div>
    </Link>
  )
}

export default Bttn;
