import React from 'react'
import { ExternalLink, Mail } from 'lucide-react'
import { SOCIAL_LINKS } from '@/constants/routes'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.info}>
                        <p>© {currentYear} Wilson Molina. Todos los derechos reservados.</p>
                        <p className={styles.builtWith}>
                            Construido con React, TypeScript y pasión por el código limpio
                        </p>
                    </div>

                    <div className={styles.social}>
                        <a
                            href={SOCIAL_LINKS.GITHUB}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="GitHub"
                        >
                            <ExternalLink size={16} />
                            GitHub
                        </a>
                        <a
                            href={SOCIAL_LINKS.LINKEDIN}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="LinkedIn"
                        >
                            <ExternalLink size={16} />
                            LinkedIn
                        </a>
                        <a
                            href={`mailto:${SOCIAL_LINKS.EMAIL}`}
                            className={styles.socialLink}
                            aria-label="Email"
                        >
                            <Mail size={16} />
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer