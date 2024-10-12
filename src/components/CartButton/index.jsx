"use client";
import { useContext } from "react";
import styles from "./cartButton.module.css";
import { IoCart } from "react-icons/io5";
import { CartContext } from "@/context/Cart";

const CartButton = () => {
  const { isOpen, setIsOpen, cartProducts } = useContext(CartContext);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={handleOpen} className={styles.cartButton} type="button">
      {cartProducts.length > 0 && (
        <span className={styles.cartNotification}>{cartProducts.length}</span>
      )}
      <IoCart size={28} color="white" />
    </button>
  );
};

export default CartButton;
