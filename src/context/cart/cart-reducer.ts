const cartReducer = (state: any, action: any) => {
  switch (action.type) {

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [action.payload]
      }

    case "UPDATE_CART":
      return {
        ...state,
        cart: action.payload,
      }

    default:
      return state
  }

}

export default cartReducer