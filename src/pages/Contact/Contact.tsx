import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import { validateEmail } from '@/utils/helpers'
import { sendEmail } from '@/services/emailService'
import styles from './Contact.module.css'

interface FormData {
    name: string
    email: string
    message: string
}

interface FormErrors {
    name?: string
    email?: string
    message?: string
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    })

    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        // Limpiar error del campo cuando el usuario empieza a escribir
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }))
        }
    }

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido'
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Email inválido'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje es requerido'
        } else if (formData.message.length < 10) {
            newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)

        try {
            // ✅ Enviar email con EmailJS
            const success = await sendEmail(formData)

            if (success) {
                setSubmitSuccess(true)
                setFormData({ name: '', email: '', message: '' })

                // Resetear mensaje de éxito después de 5 segundos
                setTimeout(() => setSubmitSuccess(false), 5000)
            } else {
                alert('Error al enviar el mensaje. Intenta de nuevo.')
            }
        } catch (error) {
            alert('Error inesperado. Por favor intenta más tarde.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="container">
            <section className={styles.contact}>
                <h1 className={styles.title}>Contacto</h1>
                <p className={styles.subtitle}>
                    ¿Tienes un proyecto en mente?
                </p>

                <div className={styles.content}>
                    <div className={styles.info}>
                        <h2 className={styles.infoTitle}>Información de Contacto</h2>
                        <p className={styles.infoText}>
                            Estoy interesado en oportunidades laborales y colaboraciones
                            en proyectos que me permitan seguir creciendo como desarrollador.
                        </p>

                        <div className={styles.contactDetails}>
                            <div className={styles.detail}>
                                <span className={styles.detailLabel}>Email:</span>
                                <a href="mailto:molina9808@gmail.com" className={styles.detailValue}>
                                    molina9808@gmail.com
                                </a>
                            </div>

                            <div className={styles.detail}>
                                <span className={styles.detailLabel}>LinkedIn:</span>
                                <a
                                    href="https://www.linkedin.com/in/wilson-molina-lozano-12508811b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.detailValue}
                                >
                                    /in/wilson-molina-lozano
                                </a>
                            </div>

                            <div className={styles.detail}>
                                <span className={styles.detailLabel}>GitHub:</span>
                                <a
                                    href="https://github.com/wilmo9808"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.detailValue}
                                >
                                    /git/wilmo9808
                                </a>
                            </div>

                            <div className={styles.detail}>
                                <span className={styles.detailLabel}>Celular:</span>
                                <a
                                    href="https://wa.me/573203135307"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.detailValue}
                                >
                                    /cel/3203135307
                                </a>
                            </div>
                        </div>
                    </div>


                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`${styles.input} ${errors.name ? styles.error : ''}`}
                                placeholder="Tu nombre"
                                disabled={isSubmitting}
                            />
                            {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`${styles.input} ${errors.email ? styles.error : ''}`}
                                placeholder="tu@email.com"
                                disabled={isSubmitting}
                            />
                            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
                                placeholder="Cuéntame sobre tu proyecto..."
                                rows={5}
                                disabled={isSubmitting}
                            />
                            {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                        </Button>

                        {submitSuccess && (
                            <div className={styles.successMessage}>
                                ¡Mensaje enviado con éxito! Te contactaré pronto.
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact