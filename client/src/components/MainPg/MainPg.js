import React from "react";
import About from "./About/About";
import Exp from "./Exp/Exp";
import How from "./How/How";
import Intro from "./Intro/Intro";
import Contact from "../Contact/Contact";

function MainPg(){
  return(
    <div className="main">
      <Intro/>
      <About/>
      <How/>
      <Exp/>
      <Contact/>
    </div>
  )
}

export default MainPg;
