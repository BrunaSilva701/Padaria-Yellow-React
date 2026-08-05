// Produtos
import React from 'react'
import { useCart } from '../context/CartContext'
import styles from './Product.module.css'
import { useTheme } from '../context/ThemeContext'

const Product = ({ id, name }) => {
  const {addToCart} = useCart();
  const { theme } = useTheme();

  return (
    <div className={`${styles.product} ${styles[theme]}`}>
      <h3>{name}</h3>
      <button onClick={() => addToCart({id,name})} className={styles.button}>
        Adicionar ao Carrinho
      </button>
    </div>
  )
}

export default Product