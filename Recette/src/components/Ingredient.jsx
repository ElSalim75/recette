import React from 'react'
import './Ingredient.scss'

const Ingredient = ({ ingredient }) => {
  return (
    <div>
      {ingredient.ingredients} - {ingredient.ingredientsQuantity} -{' '}
      {ingredient.ingredientsUnite}
    </div>
  )
}

export default Ingredient
