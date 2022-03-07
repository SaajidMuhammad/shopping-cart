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
      let isExist = false

      let quantityUpdated = state.cart.map((singleCart: any) => {

        if (singleCart.id === newItems.id) {

          // if current item already exist in Cart
          isExist = true
          singleCart.items = singleCart.items + 1
          
          return singleCart

        } else {

          // if current item not exist in Cart

          return singleCart
        }
      })
      if (!isExist) {
        newItems.items = 1
        quantityUpdated.push(newItems)
      }

      dispatch({
        type: "UPDATE_CART",
        payload: quantityUpdated
      })
    } else {
      // Cart is Empty
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...newItems,
          items: 1
        }
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