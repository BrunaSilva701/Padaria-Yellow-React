import Product from "../components/Product";
import Cart from "../components/Cart";
import Login from "../components/Login";
import Content from "../components/Content";
import { ShoppingBasket  } from "lucide-react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Content />
      <hr />

      <Login />

      <hr />

      <h2 className={styles.title}>
        <ShoppingBasket  size={25} />
        {" "} Produtos
      </h2>

      <Product id={1} name="🍞 Pão" />
      <Product id={2} name="🧀 Queijo" />
      <Product id={3} name="🥛 Leite" />

      <hr />

      <Cart />
    </>
  );
}