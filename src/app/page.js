import Cart from "@/components/Cart";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { ProductsProvider } from "@/context/Products";
import { CartProvider } from "@/context/Cart";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Header />
        <main className={styles.main}>
          <Cart />
          <ProductsSection />
        </main>
      </CartProvider>
    </ProductsProvider>
  );
}
