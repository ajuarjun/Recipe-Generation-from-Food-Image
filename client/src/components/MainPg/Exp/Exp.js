import React from "react";
import Subhead from "../../Subhead/Subhead";
import "./styles.css";

function Exp(){
  return(
    <div className="exp">
      <Subhead title="User experiences"/>
      <div>
        <img className="avatar" src="img/avatar.png" alt="avatar"/>
        <div className="card">
          <p>This site was recommended to me by a friend. Now I am able to make different types of cuisine and my friends and family love it.</p>
          <p>-Anonymous</p>
        </div>
      </div>
    </div>
  )
}

export default Exp;
