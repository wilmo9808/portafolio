import React from 'react'
import { ButtonProps } from '@/types'
import styles from './Button.module.css'

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    disabled = false,
    type = 'button'
}) => {
    return (
        <button
            type={type}
            className={`${styles.button} ${styles[variant]} ${styles[size]}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button