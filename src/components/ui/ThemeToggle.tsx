import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import styles from './ThemeToggle.module.css'

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            className={`${styles.floatingButton} ${theme === 'dark' ? styles.dark : styles.light}`}
            onClick={toggleTheme}
            aria-label="Cambiar tema"
        >
            <span className={styles.iconWrapper}>
                {theme === 'dark' ? <Sun size={22} strokeWidth={2.5} /> : <Moon size={22} strokeWidth={2.5} />}
            </span>
        </button>
    )
}

export default ThemeToggle