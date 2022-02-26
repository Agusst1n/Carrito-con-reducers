import React from 'react'

const CartItem = ({data,delFromCart}) => { 
  let {id, name, price, quantity} = data

  //*<button onClick={()=> delFromCart(id)}>Eliminar</button> CUANDO HAGO ESO delFromCart(id) ESTOY DICIENDO QUE CUANDO CLICKEE EN ALGUN PRODUCTO, ESE PRODUCTO ME VA A DAR SU ID Y ESE ID SE LO PASO A LA FUNCION delFromCart que se encuentra en ShopingCart, esa funcion va a despachar ese ID como un payload para que shopingReducer trabaje con el
  //!todo lo que acabo de explicar arriba se maneja igual en todas las partes del codigo donde aparece una funcion que tiene como pararamentro un ID ej delFromCart(id)
  return (
    <div>
        <h3>{name}</h3>
        <h4>${price}.00 x {quantity} Total = ${price * quantity}</h4>
        <button onClick={()=> delFromCart(id)}>Eliminar</button>
        <br />
        <button onClick={()=> delFromCart(id, true)}>Eliminar todos</button>
    </div>
  )
}

export default CartItem