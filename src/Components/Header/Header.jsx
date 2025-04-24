import React from 'react'
import './Header.css'

export const Header = () => {
   return (
      <header className='header'>
         <h1>Productos Catalogo</h1>
         <input type="text" placeholder='buscar...'  id='search'/>
      </header>
   )
}

