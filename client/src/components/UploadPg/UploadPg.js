import React, {useState} from "react";
import Navigate from "./Navigate/Navigate";
import NoResult from "./NoResult/NoResult";
import Recipe from "./Recipe/Recipe";
import Upload from "./Upload/Upload";
import Contact from "../Contact/Contact";
import UploadBtn from "./UploadBtn/UploadBtn";
import "./styles.css";

function UploadPg(){
  const [recipes, setRecipes] = useState({});
  const [file, setFile] = useState('');
  const [up, setUp] = useState(false);

  return(
    <div>
      <Navigate/>
      <div className="recipe">
        <div>
          <Upload file={file}/>
          <UploadBtn file={file} setFile={setFile} setRecipes={setRecipes} setUp={setUp}/>
        </div>
        {(Object.keys(recipes).length===0)&&<NoResult up={up}/>}
        {(Object.keys(recipes).length>0)&&<Recipe recipes={recipes}/>}
      </div>
      <Contact/>
    </div>
  )
}

export default UploadPg;
