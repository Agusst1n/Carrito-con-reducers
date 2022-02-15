import React,{useReducer} from 'react'
import { shopingInitialState, shopingReducer } from '../Reducers/shopingReducer'
import ProductItem from './ProductItem';
import './ShopingCart.css'

const ShopingCart = () => {

  const [state,dispatch] = useReducer(shopingReducer,shopingInitialState)

  const {products, cart} = state; //desestructuramos products y cart que vienen de shopingReducer  
  console.log(products)
  const addToCart = (id)=>{
    console.log(id);
  }
  const delFromCart = ()=>{
  }
  const clearCart = ()=>{
  }
  return (
    <div>
        <h2>Carrito</h2>
        <h3>Productos</h3>
        <article className="box">
            {products.map((product)=><ProductItem key={product.id} data={product} addToCart={addToCart}/>)}
        </article>
        <h3>Carrito</h3>
        <article className="box">
        <button onClick={clearCart}>Limpiar carritos</button>  
        </article>
    </div>
  )
}

export default ShopingCart