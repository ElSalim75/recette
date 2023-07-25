import React, { useState, useContext } from 'react'

const RecipeContext = React.createContext()

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
    {
      title: 'Gnocchis arrabiata',
      steps: 'testSteps',
      picture: 'testPic',
      time: '20',
      difficulty: 'testDif',
      portion: 'testPortion',
      tags: 'testTags',
      ingredients: 'testIngre'
    },
    {
      title: 'Boeuf bourgignon',
      steps: 'testSteps',
      picture: 'testPic',
      time: '30',
      difficulty: 'testDif',
      portion: 'testPortion',
      tags: 'testTags',
      ingredients: 'testIngre'
    },
    {
      title: 'Salade de tomates',
      steps: 'testSteps',
      picture: 'testPic',
      time: '10',
      difficulty: 'testDif',
      portion: 'testPortion',
      tags: 'testTags',
      ingredients: 'testIngre'
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
