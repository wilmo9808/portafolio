import React from 'react'

export interface Project {
    id: string | number
    title: string
    description: string
    technologies: string[]
    images?: string[]
    imageUrl?: string
    liveUrl: string
    repoUrl: string
    featured: boolean
}

export interface Skill {
    name: string
    level: number
    category: 'frontend' | 'backend' | 'database' | 'tools'
    icon?: string
}

export interface ContactForm {
    name: string
    email: string
    message: string
}

export interface NavbarProps {
    isOpen?: boolean
    toggleMenu?: () => void
}

export interface ButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'danger'
    size?: 'sm' | 'md' | 'lg'
    onClick?: () => void
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
}