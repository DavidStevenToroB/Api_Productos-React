import { Cards } from '../Cards/Cards'
import React from 'react'
import './Main.css'

   const URL = 'https://fakestoreapi.com/products'

export const Main = () => {
   
   const [productos, setProductos] = React.useState([])
   

   return (
      <main className='main'>
         <Cards/>
      </main>
   )
}

