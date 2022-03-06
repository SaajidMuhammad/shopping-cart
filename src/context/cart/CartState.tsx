import { useReducer, FC } from 'react'

import CartContext from './cart-context'
import cartReducer from './cart-reducer'

const CartState: FC = (props: any) => {

  const initialState = {
    cart: []
  }

  const [state, dispatch] = useReducer(cartReducer, initialState)

  const updateCart = ((cart: any) => {
    dispatch({
      type: "UPDATE_CART",
      payload: cart
    })
  })


  return (
    <CartContext.Provider value={{
      cart: state.cart,
      updateCart
    }}>
      {props.children}
    </CartContext.Provider>)
}

export default CartState