'use client'
import { useContext } from "react";
import styles from "./sort.module.css";
import { ProductsContext } from "@/context/Products";

const Sort = () => {
  const { setProducts, products } = useContext(ProductsContext);

  const handleSort = (e) => {
    const sort = e.target.value;
    if (sort === "price_asc") {
      const asc = products.slice().sort((a, b) => a.price - b.price);
      setProducts(asc);
    }

    if (sort === "price_desc") {
      const desc = products.slice().sort((a, b) => b.price - a.price);
      setProducts(desc);
    }
  };

  return (
    <select onChange={handleSort} className={styles.select}>
      <option selected disabled>
        Filtrar por
      </option>
      <option value="price_asc">Menor preço</option>
      <option value="price_desc">Maior preço</option>
    </select>
  );
};

export default Sort;
