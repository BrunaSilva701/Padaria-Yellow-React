// Tema da tela
import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Content = () => {
  const { theme } = useTheme();

  return (
    <main>
        {/* <p>Tema padrão {theme}</p> */}
    </main>
  )
}

export default Content