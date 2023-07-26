import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Formulaire from './pages/FormRecipe'
import RecipesProvider from './contexts/RecipeContexts'
import Home from './pages/Home'
import Navbar from './Layout/Navbar'
import RecetteDetails from './pages/RecetteDetails'

function App () {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/formulaire' element={<Formulaire />} />
          <Route path='/details-recette/:id' element={<RecetteDetails />} />
        </Routes>
      </BrowserRouter>
    </RecipesProvider>
  )
}

// check text area value
// search bar
// home page
// boutons filtre duree / date d'ajout
// detail recette
// adapter valeurs a portions
// user input formulaire

export default App
