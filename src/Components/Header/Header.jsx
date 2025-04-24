import { useState } from 'react'
import './Header.css'
import { Main } from '../Main/Main'

export const Header = ({ products }) => {
  const [search, setSearch] = useState('');
  const [filteredProduct, setFilteredProduct] = useState(null);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    if (searchValue.trim() === '') {
      setFilteredProduct(null);
      return;
    }

    const match = products.find((product) =>
      product.title.toLowerCase() === searchValue.toLowerCase()
    )

    setFilteredProduct(match || false)
  }

  return (
    <>
      <header className='header'>
        <h1>Productos Catálogo</h1>
        <input
          id='search'
          type='text'
          placeholder='Buscar por título exacto...'
          value={search}
          onChange={handleSearch}
        />
      </header>

      {search && filteredProduct === false && (
        <p style={{ padding: '1rem' }}>Producto no encontrado </p>
      )}

      {filteredProduct
        ? <Main products={[filteredProduct]} />
        : <Main products={products} />
      }
    </>
  );
};
