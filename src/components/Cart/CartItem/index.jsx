import formatCurrency from "@/utils/formatCurrency";
import styles from "./cartItem.module.css";
import Image from "next/image";
import { CartContext } from "@/context/Cart";
import { useContext } from "react";

const CartItem = ({ thumb, title, price, id }) => {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const removeItem = (id) => {
    const attList = cartProducts.filter((products) => products.id !== id);

    setCartProducts(attList);
  };

  return (
    <li className={styles.cartItem}>
      <Image src={thumb} width={50} height={50} />
      <div className={styles.box}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.flex}>
          <p className={styles.value}>{formatCurrency(price)}</p>
          <button onClick={() => removeItem(id)} className={styles.deleteBt}>
            Remover
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
