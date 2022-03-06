const productReducer = (state: any, action: any) => {

  switch (action.type) {
    case "UPDATE_PRODUCTS":
      return {
        ...state,
        products: action.payload
      }
    default:
      return state
  }

}

export default productReducer