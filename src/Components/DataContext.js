/** @format */

import React, { useState, createContext, useEffect } from "react";

const url = "https://hw-m6d5.herokuapp.com/products";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
      throw new Error("Failed getting products!");
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
        setCartItems(data.cartItem);
        console.log("cart items", data);
      }
      throw new Error("Failed getting cart items");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    getCartItems();
  }, []);
  return (
    <DataContext.Provider value={[cartItems, setCartItems]}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider };
