import {useState} from 'react'
import './Header.css'
import { Main } from '../Main/Main'

export const Header = ({products}) => {
   const [search, setSearch] = useState('')
   const [filteredProducts, setFilteredProducts] = useState([])

   const handleSearch = (e) => {
      e.preventDefault()
      const searchValue = document.getElementById('search').value
      setSearch(searchValue)
      console.log(search)
      const filteredProducts = products.filter((product) => {
         return product.title.toLowerCase().includes(searchValue.toLowerCase())
      })
      setFilteredProducts(filteredProducts)
      console.log(filteredProducts)
      Main(filteredProducts)
   }

   return (
      <>
      <header className='header'>
         <h1>Productos Catalogo</h1>
         <input type="text" placeholder='buscar...'  id='search'/>
         <button type='submit' onClick={handleSearch}>Buscar</button>
      </header>
      <Cards products={filteredProducts}/>
      </>
   )
}

