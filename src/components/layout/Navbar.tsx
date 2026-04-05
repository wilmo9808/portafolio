import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import ThemeToggle from '@/components/ui/ThemeToggle'
import styles from './Navbar.module.css'
import profilePic from '@/assets/images/profile.jpeg'

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const navItems = [
        { path: ROUTES.HOME, label: 'Inicio' },
        { path: ROUTES.ABOUT, label: 'Sobre Mí' },
        { path: ROUTES.PROJECTS, label: 'Proyectos' },
        { path: ROUTES.CONTACT, label: 'Contacto' },
    ]

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.navContainer}>
                    <div className={styles.logoContainer}>
                        <img src={profilePic} alt="Profile" className={styles.profilePic} />
                        <Link to={ROUTES.HOME} className={styles.logo} onClick={handleLinkClick}>
                            {"<Dev />"}
                        </Link>
                    </div>
                    <div className={styles.rightSection}>
                        <ThemeToggle />
                        <button
                            className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''
                                        }`}
                                    onClick={handleLinkClick}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar