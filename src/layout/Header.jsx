// Botões globais

import {useTheme} from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import styles from './Header.module.css'

export default function Header(){
    const {toggleTheme} = useTheme();

    const {language, switchLanguage} = useLanguage();

    return(
        <header className={styles.header}>
            <h1>
                {language === 'pt' ? '🥐 Padaria Yellow' : "🥐 Yellow Bakery"}
            </h1>

            <div className={styles.actions}>
                <button onClick={switchLanguage} className={styles.button}>{language === 'pt'? 'English':'Português'}</button>
                <button onClick={toggleTheme} className={styles.button}>🌙</button>
            </div>
        </header>
    )
}