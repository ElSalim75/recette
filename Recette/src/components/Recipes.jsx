import "./Recipes.css"
import Recipe from './Recipe'

const Recipes = () => {
    return (
        <div className="container">
            <h2 className="title">Liste de recettes :</h2>
            <div className="recipe-list">
                <Recipe
                    title="Crêpe"
                    time={30}
                    url="https://www.hervecuisine.com/wp-content/uploads/2010/11/recette-crepes-1024x694.jpg?x79635"
                />
            </div>
            <div className="recipe-list">
                <Recipe
                    title="Salade César"
                    time={20}
                    url="https://assets.afcdn.com/recipe/20190704/94709_w1000h667c1cx3000cy2000cxb6000cyb4000.webp"
                />
            </div>
            <div className="recipe-list">
                <Recipe
                    title="Tacos Mexicain"
                    time={55}
                    url="https://assets.afcdn.com/recipe/20190212/87658_w1000h667c1cx1663cy2227cxb6236cyb4154.webp"
                />
            </div>
        </div>
    )
}

export default Recipes
