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
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cartItems: state.cartItems.filter(
        (item) => item.productId !== action.payload
      ),
    };
  }
  if (action.type === "INCREASE") {
    let tempCart = state.cartItems.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cartItems: tempCart };
  }
  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cartItems.reduce(
      (cartTotal, cartItem) => {
        const { product } = cartItem;
        //needed to destructure cartItem because
        // price and amount properties are nested inside product property
        const { price, amount } = product;
        console.log("@reducer:", amount, price);
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }
};
export default Reducer;
