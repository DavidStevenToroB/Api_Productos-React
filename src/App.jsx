import React, { useState, useEffect } from 'react'
import { Header } from './Components/Header/Header.jsx'
import { Footer } from './Components/Footer/Footer.jsx'
import { Main } from './Components/Main/Main.jsx' 
import './App.css'

const URL = 'https://fakestoreapi.com/products'

function App() {
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
    <>
    <Header products={products}/>
    {/* <Main products={products}/>} */}
    <Footer />
    </>
  )
}

export default App
