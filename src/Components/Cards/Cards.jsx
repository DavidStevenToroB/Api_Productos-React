import React from 'react'
import './Cards.css'

export const Cards = (producto) => {
   
   const {imagen, title, category, description, rate, price} = producto
   const rating = ''

   if(rate >= 0) {
      rating = '☆☆☆☆☆'
   }
   if(rate >= 0.5) {
      rating = '★⯪☆☆☆'
   }
   if(rate >= 1) {
      rating = '★☆☆☆☆'
   }
   if(rate >= 1.5) {
      rating = '★⯪☆☆☆'
   }
   if(rate >= 2) {
      rating = '★★☆☆☆'
   }
   if(rate >= 2.5) {
      rating = '★★★⯪☆'
   }
   if(rate >= 3) {
      rating = '★★★☆☆'
   }
   if(rate >= 3.5) {
      rating = '★★★⯪☆'
   }
   if(rate >= 4) {
      rating = '★★★★☆'
   }
   if(rate >= 4.5) {
      rating = '★★★★⯪'
   }
   if(rate >= 5) {
      rating = '★★★★★'
   }

   return (
      <div className='card'>
         <img src={imagen} alt={title} />
         <h2>{title}</h2>
         <h3>{category}</h3>
         <h4>{description}</h4>
         <h3>{rating}</h3>
         <h2>{price}</h2>
      </div>
   )
}

