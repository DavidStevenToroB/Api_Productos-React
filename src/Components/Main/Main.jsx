import { useEffect, useState } from 'react'
import { Cards } from '../Cards/Cards'
import React from 'react'
import './Main.css'


export const Main = ({products}) => {

   return (
      <main className='main'>
         {
            products.map((product) => (<Cards key={product.id} {...product} />))
         }
      </main>
   )
}

