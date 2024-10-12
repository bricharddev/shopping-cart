"use client";
import styles from "./productsList.module.css";
import { ProductsContext } from "@/context/Products";
import { useContext } from "react";
import ListItem from "../ListItem/ListItem";
import Spinner from "../Loader";

const ProductsList = () => {
  const { products, isLoading } = useContext(ProductsContext);
  return (
    <ul className={styles.list}>
      {isLoading ? (
        <Spinner />
      ) : (
        products?.map((product) => (
          <ListItem
            key={product.id}
            thumb={product.thumbnail}
            title={product.title}
            value={product.price}
            desc={product.sanitized_title}
            seller={product.seller.nickname}
            id={product.id}
          />
        ))
      )}
    </ul>
  );
};

export default ProductsList;
