import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Layout/Navbar'
import Formulaire from './pages/Formulaire'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/formulaire' element={<Formulaire />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
