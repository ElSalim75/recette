import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Layout/Navbar'
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
  )
}

export default App
