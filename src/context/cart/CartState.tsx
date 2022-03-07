import { useReducer, FC } from 'react'

import CartContext from './cart-context'
import cartReducer from './cart-reducer'

const CartState: FC = (props: any) => {

  const initialState = {
    cart: []
  }

  const [state, dispatch] = useReducer(cartReducer, initialState)

  const triggerCart = ((newItems: any) => {


    if (state.cart.length) {
      // Cart Not Empty

      console.log("is not empty")

    } else {
      // Cart is Empty
      dispatch({
        type: "ADD_TO_CART",
        payload: newItems
      })
    }



  })


  return (
    <CartContext.Provider value={{
      cart: state.cart,
      triggerCart
    }}>
      {props.children}
    </CartContext.Provider>)
}

export default CartState