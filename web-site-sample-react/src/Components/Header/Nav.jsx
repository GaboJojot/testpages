import React from 'react'
import './Nav.css'
export const Nav = () => {
  return (
    <nav className="menu">
       { /*navegación con react router!*/ }
    <ul>
      <li><a href="/">Inicio</a></li>
      <li><a href="/sobre-nosotros">Sobre nosotros</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
  
  )
}
