import React,{useReducer} from 'react'
import { TYPES } from '../Actions/shopingAction';
import { shopingInitialState, shopingReducer } from '../Reducers/shopingReducer'
import CartItem from './CartItem';
import ProductItem from './ProductItem';
import './ShopingCart.css'

const ShopingCart = () => {

  const [state,dispatch] = useReducer(shopingReducer,shopingInitialState)

  const {products, cart} = state; //desestructuramos products y cart que vienen de shopingReducer  
  console.log(products)
  const addToCart = (id)=>{
    console.log(id);
    dispatch({type: TYPES.ADD_TO_CART, payload: id});
  }
  const delFromCart = (id, all = false)=>{
    console.log(id, all);
    if(all){ //si all es true
      dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id})
    }else{
      dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id}) 
      //Despachamos esas acciones con el payload ID que estoy recibiendo en los parametros de la funcion, ese ID me lo esta pasando la Funcion delFromCart que se encuentra en CartItem (pos data las acciones/TYPES estan en ACTIONs, shopingActions)
    } 
  }
  const clearCart = ()=>{
    dispatch({type: TYPES.CLEAR_CART});
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
        {
          cart.map((item,index)=>(
            <CartItem key={index} data={item} delFromCart={delFromCart}/>
          ))
        }
        </article>
    </div>
  )
}

export default ShopingCart