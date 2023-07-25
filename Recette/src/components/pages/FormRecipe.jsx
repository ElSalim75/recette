import React from "react"
import './FormRecipe.css'

const Formulaire = () => {
  return (
    <div className="divForm">
      <h1>Ajouter une nouvelle recette</h1>
      <form action="" className="form">
        <input type="text" placeholder="Titre de la recette" className="input"/>
        <input type="text" placeholder="Étapes de la recette" className="inputSteps"/>
        <input type="text" placeholder="Photo url" className="input"/>
        <input type="text" placeholder="Durée" className="input"/>
        <input type="text" placeholder="Difficulté" className="input"/>
        <input type="number" placeholder="Portions" className="input" min="1" max="5"/>
        <input type="text" placeholder="Tags" className="inputTags"/>
        <input type="text" placeholder="Ingrédients" className="inputIngredients"/>
        <button>Valider</button>
      </form>
    </div>
  )
}

export default Formulaire