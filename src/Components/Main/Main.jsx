import { useEffect, useState } from 'react'
import { Cards } from '../Cards/Cards'
import React from 'react'
import './Main.css'

const URL = 'https://fakestoreapi.com/products'

export const Main = () => {

   const [products, setProducts] = useState([])

   const handleGetProducts = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      setProducts(data)
   }

   useEffect(() => {
      handleGetProducts()
   }, [])

   return (
      <main className='main'>
         {
            products.map((product) => (<Cards key={product.id} {...product} />))
         }
      </main>
   )
}

