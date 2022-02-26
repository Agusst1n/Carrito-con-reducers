import { TYPES } from "../Actions/shopingAction";

//*1) Aca tenemos la funcion con el estado inicial
export const shopingInitialState = {
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
    { id: 4, name: "Producto 4", price: 400 },
    { id: 5, name: "Producto 5", price: 500 },
    { id: 6, name: "Producto 6", price: 600 },
  ],
  cart: [], //*2) Aca tenemos al carrito vacio
};

//!una funcion reductora es una funcion pura que va a recibir un estado y un objeto que van a ser las acciones que va a cumplir
//!el ACTION es un objeto que tiene el TYPE(tipo de accion) y el PAYLOAD que es el valor que se va a modificar

//*3) y aca tenemos a la funcion reductora con sus 4 funciones definidas
export function shopingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
        //Le decimos que si en el estado de los productos encuentra un producto con la misma ID que la que nos esta pasando el usuario como Payload, si encuentra un producto igual que lo guarde en la variable newItem
      console.log(newItem);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      //aca corrobora si tenemos el item en el carrito
      //si en el estado del carrito encontramos un item que tenga la misma ID que el nuevo item, quiere decir que ya hay otro item igual en el carrito, entonces si es asi que guarde ese item.id en la variable itemInCart

      return itemInCart
        ? {
            ...state, //Hacemos una copia del estado
            cart: state.cart.map((item) => //accedemos al estado del carrito y mapeams todos los items
              item.id === newItem.id //si tenemos un item con la misma id que el newItem (osea ya tenemos mas de un mismo item de ese tipo)
                ? { ...item, quantity: item.quantity + 1 } //si es asi entonces le aumentamos su cantidad +1
                : item //si el item no se encuentra en el carrito entonces solamente retornamos el item
            ),
          }
        : { //encambio si el item nunca fue agregado al carrito y esta va a ser su primera vez (osea item = x1)
            ...state, //hacemos una copia del estado
            cart: [...state.cart, { ...newItem, quantity: 1 }],
            //en la propiedad carrito, copiamos el estado del carrito y copiamos el nuevo item y en su propiedad quantity lo inicializamos a uno, osea ya tenemos el primer item de ese tipo en el carrito, la proxima que agreguen un item como ese su valor quantity va a ser +1 y ahora va a haber ese producto x2
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload) 
      //busco en el estado del carrito el item que tenga la misma ID que me esta pasando el usuario, si lo encuentro lo guardo en itemToDelete

      return itemToDelete.quantity > 1 ?{ //si itemTodelete es mayor a uno osea hay mas de un producto igual en el carrito, si es asi entonces
        ...state, //hago una copia del estado
        cart: state.cart.map((item) => item.id === action.payload ? {...item, quantity: item.quantity -1}: item)
        //en la propiedad carrito mapeo su estado y por cada item coparo su ID si es igual al id que me pasa el usuario mediante el payload, si lo encuentro entonces hago una copia de item y en su propiedad cantidad elimino una, (item.quantity -1)
      }:{
        //si itemToDelete no es mayor a uno osea es el unico item de su tipo en el carrito, hago lo siguente
        ...state, //una copia del estado
        cart: state.cart.filter((item)=> item.id !==action.payload)
        //en su propiedad carrito filtro el estado del carrito y le queremos decir que nos quedamos con todos los item.id que sean diferentes al ID que tiene el payload
      }
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      let itemToDeleteAll = state.cart.find((item) => item.id === action.payload)
      
      return{
        ...state, //retornamos una copia del estado
        cart: state.cart.filter((item)=> item.id !== action.payload)
        //y aca para eliminar todos los mismos items de un carrito hacemos lo mismo que arriba
        //nos quedamos con todos los elementos que no tengan el ID que nos pasa el usuario mediante el Payload
      }

    }
    case TYPES.CLEAR_CART: {
      return shopingInitialState
      //para borrar todo el carrito retornamos su estado inicial (cart [])
    }
    default:
      return state; //retorna el estado actual
  }
}
