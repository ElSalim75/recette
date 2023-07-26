import React from 'react'
import './Ingredient.scss'

const Ingredient = ({ingredient, portionChange}) => {
    return (
        <div>
            {portionChange && <div>
                {ingredient.ingredientsQuantity * portionChange}
                {ingredient.ingredientsUnite} de {ingredient.ingredients}
            </div>}
            {!portionChange && <div>
                {ingredient.ingredientsQuantity}
                {ingredient.ingredientsUnite} de {ingredient.ingredients}
            </div>}
        </div>
    )
}

export default Ingredient
