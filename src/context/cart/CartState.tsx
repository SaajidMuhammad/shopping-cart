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
        }
        // if current item not exist in Cart
        return singleCart
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


  const changeQuantity = ((item: any, type: string) => {

    if (type === "inc") {
      let quantityUpdated = state.cart.map((singleCart: any) => {
        if (singleCart.id === item.id) {
          // if current item already exist in Cart
          item = true
          singleCart.items = singleCart.items + 1
          return singleCart
        }
        // if current item not exist in Cart
        return singleCart

      })

      dispatch({
        type: "UPDATE_CART",
        payload: quantityUpdated
      })
    } else {
      if (item.items > 1) {
        let quantityUpdated = state.cart.map((singleCart: any) => {
          if (singleCart.id === item.id) {
            // if current item already exist in Cart
            item = true
            singleCart.items = singleCart.items - 1
            return singleCart
          }
          // if current item not exist in Cart
          return singleCart
        })

        dispatch({
          type: "UPDATE_CART",
          payload: quantityUpdated
        })

      } else {

        let filteredItems = state.cart.filter((singleCart: any) => {
          if (singleCart.id !== item.id) {
            return singleCart
          }
        })

        console.log(filteredItems, "filteredItems")

        dispatch({
          type: "UPDATE_CART",
          payload: filteredItems
        })
      }
    }



  })


  return (
    <CartContext.Provider value={{
      cart: state.cart,
      triggerCart,
      changeQuantity
    }}>
      {props.children}
    </CartContext.Provider>)
}

export default CartState