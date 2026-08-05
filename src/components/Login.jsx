// Login
import React from 'react'
import { useAuth } from '../context/AuthContext'
import styles from './Login.module.css'
import { User } from "lucide-react";

const Login = () => {
    const {user, login, logout} = useAuth()

  return (
    <div className={styles.login}>
        <User size={25} />
        {user ? (
            <>
                <h2>Bem vindo, {user.name}</h2>
                <button onClick={logout} className={styles.button}>
                    Sair
                </button>
            </>
        ) : (
            <>
                <h2>Voce não está logado</h2>
                <button onClick={() => login('Bruna') } className={styles.button}>
                    Entrar
                </button>
            </>
        )}
    </div>
  )
}

export default Login
