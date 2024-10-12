import CartButton from "../CartButton";
import Categories from "../Categories";
import SearchBar from "../SearchBar/index";
import Sort from "../Sort";
import styles from "./header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <SearchBar />
      <div style={{ display: "flex", alignItems: " center", gap: "1rem" }}>
        <Categories />
        <Sort />
      </div>
      <CartButton />
    </div>
  </header>
);

export default Header;
