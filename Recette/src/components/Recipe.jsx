import React from 'react'
import "./Recipe.css"

const Recipe = ({recipe}) => {
  return (
    <div className='recipe'>
        <div className='img-container'>
            <img src={recipe.picture} />
        </div>
        <div className='recipe-info'>
            <div>{recipe.title}</div>
            <div>Temps de préparation :  {recipe.time} min</div>
            {/* <div>{recipe.ingredients.ingredients} - {recipe.ingredients.ingredientsQuantity} - {recipe.ingredients.ingredientsUnite}</div> */}
        </div>
        


    </div>
  )
}

export default Recipe