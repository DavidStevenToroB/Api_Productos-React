import React from 'react'
import './Cards.css'

export const Cards = (product) => {
   let rating = '☆☆☆☆☆'
   const {image, title, category, description, rate, price} = product
   
   
   return (
      <div className='card'>
         <img src={image} alt={title} />
         <div className='movement'>
            <h2>{title}</h2>
         </div>
         <h3>{category}</h3>
         <h3>{rating}</h3>
         <h2>{price}</h2>
      </div>
   )
}

