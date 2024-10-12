"use client";
import styles from "./cart.module.css";
import { CartContext } from "@/context/Cart";

import { useContext } from "react";
import CartItem from "./CartItem";
import formatCurrency from "@/utils/formatCurrency";

const Cart = () => {
  const { cartProducts, isOpen, total } = useContext(CartContext);

  return (
    <aside className={`${styles.cartContainer} ${isOpen ? styles.active : ""}`}>
      <h2 className={styles.cartTitle}>Meu carrinho</h2>
      {/* {!cartProducts.length && <p>Carrinho vazio</p>} */}
      <ul className={styles.cartList}>
        {cartProducts?.map((product) => (
          <CartItem
            key={product.id}
            thumb={product.thumbnail}
            title={product.title}
            price={product.price}
            id={product.id}
          />
        ))}
      </ul>
      <div>
        <p className={styles.totalValue}>TOTAL: {formatCurrency(total)}</p>
      </div>
      <button className={styles.checkoutButton}>Finalizar compra</button>
    </aside>
  );
};

export default Cart;
