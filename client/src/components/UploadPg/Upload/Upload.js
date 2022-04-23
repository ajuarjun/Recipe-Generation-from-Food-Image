import React from "react";
import "./styles.css";

function Upload(props){
  return(
    <div className="upload">
    {(props.file==='')&&<img className="nofile" src="img/upload.png" alt="upload"/>}
    {(props.file==='')&&<div>No file uploaded yet</div>}
    {(props.file!=='')&&<img className="hasfile" src={URL.createObjectURL(props.file)} alt="uploaded pic"/>}
    </div>
  )
}

export default Upload;
