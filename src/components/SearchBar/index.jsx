"use client";
import { useContext, useState } from "react";
import styles from "./searchBar.module.css";
import { IoSearch } from "react-icons/io5";
import { ProductsContext } from "@/context/Products";
import { getAll } from "@/api/getProducts";

const SearchBar = () => {
  const { setProducts, setIsLoading } = useContext(ProductsContext);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    getAll(search).then((res) => {
      const data = res.results;

      setProducts(data);
      setIsLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchContainer}>
      <input
        onChange={handleSearch}
        value={search}
        className={styles.searchInput}
        type="search"
        placeholder="Buscar Produto"
        name="search"
      />
      <button className={styles.searchButton} type="submit">
        <IoSearch size={18} />
      </button>
    </form>
  );
};

export default SearchBar;
