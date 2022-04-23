import React, {useState} from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import "./styles.css";

function Recipe(props){
   const [num, setNum] = useState(1);
  return(
    <div>
      <div className="headers">
        <Header text="Recipe 1" setNum={setNum}/>
        <Header text="Recipe 2" setNum={setNum}/>
      </div>
      <Body recipes={props.recipes} num={num}/>
    </div>
  )
}

export default Recipe;
