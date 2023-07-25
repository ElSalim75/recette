import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Formulaire from './components/pages/FormRecipe'
import Navbar from './components/Layout/Navbar'
import RecipesProvider from './contexts/RecipeContexts'

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
  )
}

export default App
