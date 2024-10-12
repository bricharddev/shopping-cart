import styles from "./productsSection.module.css";
import Spinner from "../Loader";
import ProductsList from "../ProductsList";

// 1 - Componentizar a ul
// 2 - renomear ProductsSection para ProductSectione
// 3 - fazer toda parte client side na ul e a parte server side (requisição para a api) na ProductSection

const ProductsSection = () => {
  return (
    <section className={styles.productSection}>
      <ProductsList />
    </section>
  );
};

export default ProductsSection;
