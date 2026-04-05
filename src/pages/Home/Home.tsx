import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import Button from '@/components/ui/Button'
import styles from './Home.module.css'
import profilePic from '@/assets/images/profile.jpeg'

const Home: React.FC = () => {
    return (
        <div className="container">
            <section className={styles.hero}>
                <div className={styles.profileSection}>
                    <img src={profilePic} alt="Profile" className={styles.profileLarge} />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Hola, soy <span className={styles.highlight}>WILSON JAVIER</span>
                    </h1>
                    <h2 className={styles.subtitle}>
                        Frontend Developer construyendo bases sólidas para el Full Stack
                    </h2>
                    <p className={styles.description}>
                        Desarrollador enfocado en React y TypeScript, con bases en backend
                        (Python y Java). Me centro en construir aplicaciones escalables,
                        seguras y mantenibles, aplicando buenas prácticas.
                    </p>
                    <div className={styles.actions}>
                        <Link to={ROUTES.PROJECTS}>
                            <Button variant="primary" size="lg">Ver mi trabajo</Button>
                        </Link>
                        <Link to={ROUTES.ABOUT}>
                            <Button variant="secondary" size="lg">Conoce mi enfoque</Button>
                        </Link>
                        <a href="/CV ACTUALIZADA.pdf" download="Wilson_Molina_CV.pdf">
                            <Button variant="secondary" size="lg">Descargar CV</Button>
                        </a>
                    </div>
                </div>

                <div className={styles.techGrid}>
                    {['React', 'TypeScript', 'JavaScript', 'Node.js', 'Git', 'HTML & CSS', 'REST APIs'].map((tech) => (
                        <div key={tech} className={styles.techItem}>
                            {tech}
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Home