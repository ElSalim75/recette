import React, { useState, useContext } from 'react'

const RecipeContext = React.createContext()

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
    {
      title: 'Gnocchis arrabiata',
      steps: 'testSteps',
      picture: 'testPic',
      time: 20,
      difficulty: 'testDif',
      portion: 'testPortion', 
      tags: ['tag1', 'tag2', 'tag3'],
      ingredients: {
        ingredients: 'Farine',
        ingredientsQuantity: 500,
        ingredientsUnite: 'g'
      }
      //check param url react router dom
    },
    {
      title: 'Boeuf bourgignon',
      steps: 'testSteps',
      picture: 'testPic',
      time: 30,
      difficulty: 'testDif',
      portion: 'testPortion',
      tags: ['tag4', 'tag2', 'tag6'],
      ingredients: {
        ingredients: 'Farine',
        ingredientsQuantity: 500,
        ingredientsUnite: 'g'
      }
    },
    {
      title: 'Salade de tomates',
      steps: 'testSteps',
      picture: 'testPic',
      time: 10,
      difficulty: 'testDif',
      portion: 'testPortion',
      tags: ['tag1', 'tag7', 'tag5'],
      ingredients: {
        ingredients: 'Farine',
        ingredientsQuantity: 500,
        ingredientsUnite: 'g'
      }
    }
  ])

  const addRecipe = recipe => {
    setRecipes([...recipes, recipe])
  }

  return (
    <RecipeContext.Provider value={{ addRecipe, recipes }}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipesProvider

export const useRecipes = () => useContext(RecipeContext)
