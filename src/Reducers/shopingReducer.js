import { TYPES } from "../Actions/shopingAction";

//*1) Aca tenemos la funcion con el estado inicial
export const shopingInitialState = {
    products : [
        {id: 1, name:'Producto 1', price:100},
        {id: 2, name:'Producto 2', price:200},
        {id: 3, name:'Producto 3', price:300},
        {id: 4, name:'Producto 4', price:400},
        {id: 5, name:'Producto 5', price:500},
        {id: 6, name:'Producto 6', price:600},
    ],
    cart:[] //*2) Aca tenemos al carrito vacio
}

//!una funcion reductora es una funcion pura que va a recibir un estado y un objeto que van a ser las acciones que va a cumplir
//!el ACTION es un objeto que tiene el TYPE(tipo de accion) y el PAYLOAD que es el valor que se va a modificar

//*3) y aca tenemos a la funcion reductora con sus 4 funciones definidas
export function shopingReducer(state,action){ 
    switch(action.type){
        case TYPES.ADD_TO_CART:{
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
        }
        case TYPES.CLEAR_CART:{
        }
        default:
            return state; //retorna el estado actual
    }
}