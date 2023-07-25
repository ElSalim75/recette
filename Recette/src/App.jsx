import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Formulaire from './pages/FormRecipe'
import RecipesProvider from './contexts/RecipeContexts'
import Home from './pages/Home'
import Navbar from './Layout/Navbar'
<<<<<<< HEAD
import Formulaire from './pages/Formulaire'
import RecetteDetails from './pages/RecetteDetails'
import './assets/scss/global.scss'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/formulaire' element={<Formulaire />} />
        <Route path='/details-recette' element={<RecetteDetails />} />
      </Routes>
    </BrowserRouter>
=======

function App () {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/formulaire' element={<Formulaire />} />
        </Routes>
      </BrowserRouter>
    </RecipesProvider>
>>>>>>> 7b8744de9c4cf1b6c27a743f6619b9433b125154
  )
}

export default App
