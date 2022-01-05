/** @format */

const Reducer = (state, action) => {
  if (action.type === "DISPLAY_PRODUCTS") {
    return { ...state, products: action.payload };
  }
  if (action.type === "DISPLAY_CARTITEMS") {
    return { ...state, cartItems: action.payload };
  }
  if (action.type === "CLEAR_CART") {
    return { ...state, cartItems: [] };
  }
};
export default Reducer;
