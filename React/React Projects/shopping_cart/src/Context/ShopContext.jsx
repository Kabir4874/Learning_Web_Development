import { createContext, useState } from "react";
import { products } from "../Products";

export const ShoppingContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ShopContext = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const contextValue = { cartItems, addToCart, removeFromCart ,updateCartItemCount};
  return (
    <ShoppingContext.Provider value={contextValue}>
      {props.children}
    </ShoppingContext.Provider>
  );
};
