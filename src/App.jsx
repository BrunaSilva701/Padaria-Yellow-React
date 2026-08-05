// Forcene os contexts para toda a aplicação
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import './App.css'
import { CartProvider } from './context/CartContext'
import { LanguageProvider } from './context/LanguageContext'
import { AuthProvider } from './context/AuthContext'
import Layout from './layout/Layout';

function App() {

  return (
    <>
     <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <CartProvider>
            <Layout />
          </CartProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider> 
    </>
  )
}

export default App
