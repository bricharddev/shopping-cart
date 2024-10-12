"use client";
import { useContext, useState } from "react";
import styles from "./categories.module.css";
import { ProductsContext } from "@/context/Products";
import axios from "axios";
import { getByCategorie } from "@/api/getProducts";

const Categories = () => {
  const { setProducts, setIsLoading } = useContext(ProductsContext);
  const [categoriesList, setCategoriesList] = useState([]);

  useState(() => {
    axios.get("https://api.mercadolibre.com/sites/MLB").then((res) => {
      setCategoriesList(res.data.categories);
    });
  }, []);

  const handleCategorie = (e) => {
    const categorie = e.target.value;
    setIsLoading(true);

    getByCategorie(categorie).then((res) => {
      const results = res.results;
      setProducts(results);
      setIsLoading(false);
    });
  };

  return (
    <select onChange={handleCategorie} className={styles.select}>
      <option selected disabled>
        Categorias
      </option>
      {categoriesList?.map((categorie) => (
        <option value={categorie.id}>{categorie.name}</option>
      ))}
    </select>
  );
};

export default Categories;
