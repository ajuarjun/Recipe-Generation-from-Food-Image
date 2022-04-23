import React from "react";
import "./styles.css";

function Body(props){
  const recipes = props.recipes;
  return(
    <div className="api-res">
      <h3>{recipes.title[props.num-1]}</h3>
      <h4>Ingredients</h4>
      <p>
      {recipes.ingredients.length>0 && recipes.ingredients[props.num-1].map((item,index)=>{
        return(item+", ")
      })}
      </p>
      <h4>Instructions</h4>
      <ol>
        {recipes.ingredients.length>0 && recipes.recipe[props.num-1].map((item,index)=>{
          return(<li key={index}>{item}</li>)
        })}
      </ol>
    </div>
  )
}

export default Body;
