import { useReducer, FC } from 'react'

import ProductContext from './products-context'
import productReducer from './products-reducer'

const ProductsState: FC = (props: any) => {

  const initialState = {
    products: []
  }

  const [state, dispatch] = useReducer(productReducer, initialState)

  const updateProducts = ((prods: any) => {
    dispatch({
      type: "UPDATE_PRODUCTS",
      payload: prods
    })
  })

  return (
    <ProductContext.Provider value={{
      products: state.products,
      updateProducts
    }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductsState