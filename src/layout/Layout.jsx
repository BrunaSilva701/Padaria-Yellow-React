// Estrutura da página

import { useTheme } from "../context/ThemeContext"
import Header from "./Header";
import Home from "../pages/Home";

export default function Layout(){
    const {theme} = useTheme();

    return(
        <>
        <div className={`app ${theme}`}>
            <Header></Header>
            <Home></Home>
        </div>
        </>
    )
}