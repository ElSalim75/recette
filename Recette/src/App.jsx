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
          <Route path='/details-recette' element={<RecetteDetails />} />
        </Routes>
      </BrowserRouter>
    </RecipesProvider>
  )
}

export default App
