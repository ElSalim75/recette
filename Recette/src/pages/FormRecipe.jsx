import React, {useState} from 'react'
import './FormRecipe.scss'
import {useRecipes} from '../contexts/RecipeContexts'
import Ingredient from '../components/Ingredient'
import {v4 as uuidv4} from 'uuid';


const Formulaire = () => {
    const [title, setTitle] = useState('')
    const [steps, setSteps] = useState('')
    const [picture, setPicture] = useState('')
    const [time, setTime] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [portion, setPortion] = useState(0)
    const [tags, setTags] = useState('')
    const [ingredientList, setIngredientList] = useState([])
    const [ingredients, setIngredients] = useState('')
    const [ingredientsQuantity, setIngredientsQuantity] = useState(0)
    const [ingredientsUnite, setIngredientsUnite] = useState('')

    const {addRecipe} = useRecipes()

    const addIngredient = e => {
        e.preventDefault()
        setIngredientList([
            ...ingredientList,
            {
                ingredients: ingredients,
                ingredientsQuantity: ingredientsQuantity,
                ingredientsUnite: ingredientsUnite
            }
        ])
        console.log('added')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addRecipe({
            id: uuidv4(),
            title: title,
            steps: steps,
            picture: picture,
            time: time,
            difficulty: difficulty,
            portion: portion,
            tags: tags,
            ingredientList: {
                ingredients: ingredients,
                ingredientsQuantity: ingredientsQuantity,
                ingredientsUnite: ingredientsUnite
            }
        })
    }

    return (
        <div className='divForm'>
            <h1>Ajouter une nouvelle recette</h1>
            <form className='form'>
                <input
                    required
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
                    type='number'
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
                <div className='ingredients'>
                    <input
                        value={ingredientsQuantity}
                        onChange={e => setIngredientsQuantity(e.target.value)}
                        type='number'
                        placeholder='Poids'
                    ></input>
                    <select
                        value={ingredientsUnite}
                        onChange={e => setIngredientsUnite(e.target.value)}
                    >
                        <option value=''>-- Unité --</option>
                        <option value='g'>g</option>
                        <option value='kg'>kg</option>
                        <option value='L'>L</option>
                    </select>
                    <input
                        value={ingredients}
                        onChange={e => setIngredients(e.target.value)}
                        type='text'
                        placeholder='Ingrédients'
                    />
                    <button className='add-ingredient-btn' onClick={addIngredient}>
                        +
                    </button>
                </div>
                <div className='ingredient-display'>
                    {ingredientList.map((ingredient, i) => (
                        <Ingredient key={i} ingredient={ingredient}/>
                    ))}
                </div>
                <button onClick={handleSubmit}>Valider</button>
            </form>
        </div>
    )
}

export default Formulaire
