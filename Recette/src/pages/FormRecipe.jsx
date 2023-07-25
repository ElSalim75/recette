import React, { useState } from 'react'
import './FormRecipe.scss'
import { useRecipes } from '../contexts/RecipeContexts'

const Formulaire = () => {
  const [title, setTitle] = useState('')
  const [steps, setSteps] = useState('')
  const [picture, setPicture] = useState('')
  const [time, setTime] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [portion, setPortion] = useState(0)
  const [tags, setTags] = useState('')
  const [ingredients, setIngredients] = useState('')

  const { addRecipe } = useRecipes()

  const handleSubmit = e => {
    e.preventDefault()
    addRecipe({
      title: title,
      steps: steps,
      picture: picture,
      time: time,
      difficulty: difficulty,
      portion: portion,
      tags: tags,
      ingredients: ingredients
    })
  }

  return (
    <div className='divForm'>
      <h1>Ajouter une nouvelle recette</h1>
      <form onSubmit={handleSubmit} className='form'>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          type='text'
          placeholder='Titre de la recette'
          className='input'
        />
        <input
          value={steps}
          onChange={e => setSteps(e.target.value)}
          type='text'
          placeholder='Étapes de la recette'
          id='inputSteps'
        />
        <input
          value={picture}
          onChange={e => setPicture(e.target.value)}
          type='text'
          placeholder='Photo url'
          className='input'
        />
        <input
          value={time}
          onChange={e => setTime(e.target.value)}
          type='text'
          placeholder='Durée'
          className='input'
        />
        <select
          value={difficulty}
          onChange={e => setDifficulty(e.target.value)}
          type='text'
          placeholder='Difficulté'
          id='selectDiff'
        >
          <option value=''>-- Choisissez une difficulté --</option>
          <option value='facile'>Facile</option>
          <option value='intermediaire'>Intermediaire</option>
          <option value='difficile'>Difficile</option>
        </select>
        <input
          value={portion}
          onChange={e => setPortion(e.target.value)}
          type='number'
          placeholder='Portions'
          className='input'
          min='1'
          max='5'
        />
        <input
          value={tags}
          onChange={e => setTags(e.target.value)}
          type='text'
          placeholder='Tags'
          id='inputTags'
        />
        <input
          value={ingredients}
          onChange={e => setIngredients(e.target.value)}
          type='text'
          placeholder='Ingrédients'
          id='inputIngredients'
        />
        <button type='submit'>Valider</button>
      </form>
    </div>
  )
}

export default Formulaire
