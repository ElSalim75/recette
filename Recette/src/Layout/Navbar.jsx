import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-main'>
      <Link to='/'>Home</Link>
      <Link to='/formulaire'>Formulaire</Link>
      <Link to='/details-recette'>details-recette</Link>
    </div>
  )
}

export default Navbar
