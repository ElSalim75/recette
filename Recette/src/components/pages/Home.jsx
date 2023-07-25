import React from "react"
import { useRecipes } from "../../contexts/RecipeContexts"
import Recipe from "../Recipe";
import "./Home.scss"

const Home = () => {
  const { recipes } = useRecipes();
  return (
    <div className="container-home">
      <h3>Recettes</h3>
      <div className="recipe-list"></div>
      {recipes.map((recipe, i) => (
        <Recipe key={i} recipe={recipe}/>
      ))}
    </div>
  )
}

export default Home