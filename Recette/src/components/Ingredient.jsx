import React from 'react'
import './Ingredient.scss'

const Ingredient = ({ ingredient }) => {
  return (
    <div>
      {ingredient.ingredientsQuantity} 
      {ingredient.ingredientsUnite} de {ingredient.ingredients}
    </div>
  )
}

export default Ingredient
