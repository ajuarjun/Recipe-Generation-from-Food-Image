import React from "react";
import Subhead from "../Subhead/Subhead";
import "./styles.css";

function Contact(){
  return(
    <div className="contact">
      <Subhead title="Contact"/>
      <div>
        <a href="https://www.facebook.com/" className="icon fab fa-facebook fa-2x"></a>
        <a href="https://in.linkedin.com/" className="icon fab fa-linkedin fa-2x"></a>
        <a href="https://www.instagram.com/" className="icon fab fa-instagram fa-2x"></a>
      </div>
    </div>
  )
}

export default Contact;
