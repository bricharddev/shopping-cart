"use client";
import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const totalCart = () => {
    const result = cartProducts.reduce((ac, at) => {
      return ac + at.price;
    }, 0);

    setTotal(result);
  };

  useEffect(() => {
    totalCart();
  }, [cartProducts]);

  const values = {
    isOpen,
    setIsOpen,
    cartProducts,
    setCartProducts,
    total,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
