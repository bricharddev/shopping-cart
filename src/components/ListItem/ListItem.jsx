import Image from "next/image";
import styles from "./listItem.module.css";
import formatCurrency from "@/utils/formatCurrency";
import formatThumb from "@/utils/formatThumb";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { ProductsContext } from "@/context/Products";
import { CartContext } from "@/context/Cart";

const ListItem = ({ thumb, title, value, desc, id, seller }) => {
  const { products } = useContext(ProductsContext);
  const {  setCartProducts } = useContext(CartContext);

  const addCart = (id) => {
    const item = products.find((products) => products.id === id);
    setCartProducts((prev) => [...prev, item]);
  };

  return (
    <li className={styles.listItem}>
      <span className={styles.sellerName}>{seller}</span>
      <figure className={styles.imgContainer}>
        <Image
          src={formatThumb(thumb)}
          alt="assdadc"
          width={200}
          height={200}
        />
      </figure>
      <div className={styles.infos}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.flex}>
          <p className={styles.value}>{formatCurrency(value)}</p>
        </div>
        <p className={styles.description}>{desc}</p>
      </div>
      <button onClick={() => addCart(id)} className={styles.addCartButton}>
        <FaCartPlus size={24} color="#ffffff" />
      </button>
    </li>
  );
};

export default ListItem;
