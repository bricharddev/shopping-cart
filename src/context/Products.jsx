"use client";
import { getAll } from "@/api/getProducts";
import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getAll().then((res) => {
      const results = res.results;
      setProducts(results);
      setIsLoading(false);
    });
  }, []);

  const values = {
    products,
    setProducts,
    isLoading,
    setIsLoading,
  };

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
