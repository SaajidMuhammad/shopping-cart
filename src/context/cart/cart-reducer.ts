const cartReducer = (state: any, action: any) => {

  console.log(action.payload, "action.payload")

  console.log(state, "old state")

  switch (action.type) {
    case "UPDATE_CART":
      return {
        ...state,
        cart: action.payload, 
      }

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [action.payload]
      }

    default:
      return state
  }

}

export default cartReducer