/** @format */

import React, { useEffect, useReducer, useContext } from "react";
import Reducer from "./Reducer";

const url = `https://hw-m6d5.herokuapp.com/products`;
const DataContext = React.createContext();

const inititialState = {
  products: [],
  cartItems: [],
  total: 0,
  amount: 0,
  searchInput: "",
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
  const searchProducts = async (searchInput) => {
    try {
      const response = await fetch(
        `https://hw-m6d5.herokuapp.com/products?search=${searchInput}`
      );
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
  //   const increaseAmount = async (productId) => {
  //     try {
  //       const response = await fetch(
  //         `https://hw-m6d5.herokuapp.com/shoppingcart/${productId}/16abcacb-d1ea-40d5-8a63-941a3a4a9fc4`,
  //         {
  //           method: "POST",
  //           body: JSON.stringify(),
  //           headers: {
  //             "Content-Type": "application.json",
  //           },
  //         }
  //       );
  //       if (!response.ok) throw new Error("Feailed at posting");
  //       const data = await response.json();
  //       const amount = data.amount;
  //       dispatch({ type: "DISAPLAY_AMOUNT", payload: amount });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeItem = (productId) => {
    dispatch({ type: "REMOVE_ITEM", payload: productId });
  };
  const increaseAmount = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   searchProducts()
  // };

  useEffect(() => {
    getProducts();
    getCartItems();
  }, []);

  //   useEffect(() => {
  //     handleSearch();
  //   }, [state.search]);

  useEffect(() => {
    //   handleSearch()
    dispatch({ type: "GET_TOTALS" });
  }, [state.cartItems]);

  return (
    <DataContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        // search,
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
