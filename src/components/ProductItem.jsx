import React from 'react'
import './ProductItem.css'
const ProductItem = ({data,addToCart}) => {
  let {id, name, price} = data
  return (
    <div className='item'>
        <h1>{name}</h1>
        <h4>${price}.000</h4>
        <button onClick={()=>addToCart(id)}>Agregar al carrito</button>
    </div>
  )
}

export default ProductItem