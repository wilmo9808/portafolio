import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './ProjectImageCarousel.module.css'

interface ProjectImageCarouselProps {
    images: string[]
    title: string
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    const nextSlide = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const openLightbox = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsLightboxOpen(true)
    }

    const closeLightbox = () => {
        setIsLightboxOpen(false)
    }

    const nextLightboxImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevLightboxImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const handleLightboxClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeLightbox()
        }
    }

    if (!images || images.length === 0) {
        return null
    }

    const lightboxContent = isLightboxOpen && createPortal(
        <div className={styles.lightbox} onClick={handleLightboxClick}>
            <button
                className={styles.closeButton}
                onClick={closeLightbox}
                aria-label="Cerrar"
            >
                ✕
            </button>

            {images.length > 1 && (
                <>
                    <button
                        className={`${styles.lightboxArrow} ${styles.lightboxLeft}`}
                        onClick={prevLightboxImage}
                        aria-label="Imagen anterior"
                    >
                        ❮
                    </button>
                    <button
                        className={`${styles.lightboxArrow} ${styles.lightboxRight}`}
                        onClick={nextLightboxImage}
                        aria-label="Imagen siguiente"
                    >
                        ❯
                    </button>
                </>
            )}

            <img
                src={images[currentIndex]}
                alt={`${title} - imagen ${currentIndex + 1}`}
                className={styles.lightboxImage}
                onClick={(e) => e.stopPropagation()}
            />

            <div className={styles.lightboxCaption}>
                {title} - {currentIndex + 1} / {images.length}
            </div>
        </div>,
        document.body
    )

    return (
        <>
            <div className={styles.carousel}>
                <img
                    src={images[currentIndex]}
                    alt={`${title} - imagen ${currentIndex + 1}`}
                    className={styles.image}
                    onClick={openLightbox}
                    style={{ cursor: 'pointer' }}
                />

                {images.length > 1 && (
                    <>
                        <button
                            className={`${styles.arrow} ${styles.left}`}
                            onClick={prevSlide}
                            aria-label="Imagen anterior"
                        >
                            ❮
                        </button>
                        <button
                            className={`${styles.arrow} ${styles.right}`}
                            onClick={nextSlide}
                            aria-label="Imagen siguiente"
                        >
                            ❯
                        </button>
                        <div className={styles.dots}>
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setCurrentIndex(index)
                                    }}
                                    aria-label={`Ir a imagen ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}

                {images.length > 1 && (
                    <span className={styles.counter}>
                        {currentIndex + 1} / {images.length}
                    </span>
                )}
            </div>

            {lightboxContent}
        </>
    )
}

export default ProjectImageCarousel