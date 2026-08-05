// Carrinho de compras
import React from 'react'
import { useCart } from '../context/CartContext'
import styles from './Cart.module.css'
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  const {cart,removeFromCart} = useCart()
  return (
    <div className={styles.cart}>

      <h2 className={styles.title}>
         <ShoppingCart size={25} />
        {" "}Carrinho
      </h2>
      {cart.length === 0 ? <p>Seu carrinho está vazio</p>:(
        cart.map(item => (
          <div key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => removeFromCart(item.id)} className={styles.button}>
              Remover
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default Cart;