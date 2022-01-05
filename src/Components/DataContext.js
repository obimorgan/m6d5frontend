/** @format */

import React, { useEffect, useReducer, useContext } from "react";
import Reducer from "./Reducer";

const url = "https://hw-m6d5.herokuapp.com/products";
const DataContext = React.createContext();

const inititialState = {
  products: [],
  cartItems: [],
  total: 0,
  amount: 0,
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, inititialState);

  const getProducts = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const products = await response.json();
        dispatch({ type: "DISPLAY_PRODUCTS", payload: products });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCartItems = async () => {
    try {
      const response = await fetch(
        `https://hw-m6d5.herokuapp.com/shoppingcart/16abcacb-d1ea-40d5-8a63-941a3a4a9fc4`
      );
      if (response.ok) {
        const data = await response.json();
        const cartItems = data.cartItem;
        dispatch({ type: "DISPLAY_CARTITEMS", payload: cartItems });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeItem = () => {
    dispatch({ type: "REMOVE_ITEM" });
  };

  useEffect(() => {
    getProducts();
    getCartItems();
  }, []);
  return (
    <DataContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        // toggleAmount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(DataContext);
};
export { DataContext, DataProvider };
