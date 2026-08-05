// Configuração do contexto

import React, {createContext, useState, useContext} from 'react'

// Um objeto que recebe duas propriedades: Provider e Consumer
const ThemeContext = createContext();

// Children é uma propriedade especial que permite passar elementos filhos para um componente pai.
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    // troca do tema
    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {/* Children permite que a aplicação fique aberta para receber elementos dentro do escopo do contexto, permitindo que os componentes filhos acessem o contexto e seus valores. */}
     {children}
    </ThemeContext.Provider>
  )
}


// Hook para consumir o contexto
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}