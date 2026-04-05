import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import SkillBadge from '@/components/ui/SkillBadge'
import { Skill } from '@/types'
import styles from './About.module.css'

const About: React.FC = () => {
    const skills: Skill[] = [
        // Frontend
        { name: 'React', level: 85, category: 'frontend' },
        { name: 'TypeScript', level: 75, category: 'frontend' },
        { name: 'JavaScript', level: 85, category: 'frontend' },
        { name: 'HTML', level: 90, category: 'frontend' },
        { name: 'CSS', level: 90, category: 'frontend' },

        // Backend
        { name: 'Node.js', level: 60, category: 'backend' },
        { name: 'Python', level: 65, category: 'backend' },
        { name: 'REST APIs', level: 75, category: 'backend' },
        { name: 'Java', level: 60, category: 'backend' },

        // Bases de datos
        { name: 'MongoDB', level: 60, category: 'database' },
        { name: 'PostgreSQL', level: 70, category: 'database' },
        { name: 'SQL', level: 75, category: 'database' },

        // Tools
        { name: 'Git', level: 80, category: 'tools' },
        { name: 'Docker', level: 58, category: 'tools' },
    ]

    const frontendSkills = skills.filter(s => s.category === 'frontend')
    const backendSkills = skills.filter(s => s.category === 'backend')
    const databaseSkills = skills.filter(s => s.category === 'database')
    const toolSkills = skills.filter(s => s.category === 'tools')

    return (
        <div className="container">
            <section className={styles.about}>
                <h1 className={styles.title}>Sobre Mí</h1>

                <div className={styles.content}>
                    <div className={styles.bio}>
                        <p className={styles.bioText}>
                            Desarrollador frontend con React y JavaScript. Mi enfoque va más allá de lo visual:
                            me preocupo por la <strong className={styles.highlight}>seguridad, el código limpio y la escalabilidad</strong>,
                            con el objetivo de evolucionar a un perfil Full Stack que construya soluciones robustas
                            de principio a fin.
                        </p>

                        <div className={styles.workPhilosophy}>
                            <h2 className={styles.subtitle}>Mi Filosofía de Trabajo</h2>
                            <ul className={styles.philosophyList}>
                                <li><CheckCircle2 size={18} className={styles.checkIcon} /> Código limpio y legible como prioridad.</li>
                                <li><CheckCircle2 size={18} className={styles.checkIcon} /> Control de versiones con Git y buenas prácticas.</li>
                                <li><CheckCircle2 size={18} className={styles.checkIcon} /> Enfoque en seguridad desde el frontend.</li>
                                <li><CheckCircle2 size={18} className={styles.checkIcon} /> Aprendizaje continuo y adaptabilidad.</li>
                                <li><CheckCircle2 size={18} className={styles.checkIcon} /> Pruebas y calidad de código.</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.skills}>
                        <h2 className={styles.subtitle}>Habilidades Técnicas</h2>

                        <div className={styles.skillCategory}>
                            <h3 className={styles.categoryTitle}>Frontend</h3>
                            <div className={styles.skillGrid}>
                                {frontendSkills.map((skill, index) => (
                                    <SkillBadge key={index} skill={skill} />
                                ))}
                            </div>
                        </div>

                        <div className={styles.skillCategory}>
                            <h3 className={styles.categoryTitle}>Backend</h3>
                            <div className={styles.skillGrid}>
                                {backendSkills.map((skill, index) => (
                                    <SkillBadge key={index} skill={skill} />
                                ))}
                            </div>
                        </div>

                        <div className={styles.skillCategory}>
                            <h3 className={styles.categoryTitle}>Bases de datos</h3>
                            <div className={styles.skillGrid}>
                                {databaseSkills.map((skill, index) => (
                                    <SkillBadge key={index} skill={skill} />
                                ))}
                            </div>
                        </div>

                        <div className={styles.skillCategory}>
                            <h3 className={styles.categoryTitle}>Herramientas</h3>
                            <div className={styles.skillGrid}>
                                {toolSkills.map((skill, index) => (
                                    <SkillBadge key={index} skill={skill} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* EXPERIENCIA LABORAL*/}
                <div className={styles.experience}>
                    <h2 className={styles.subtitle}>Experiencia Laboral</h2>

                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineHeader}>
                                <h3>SURVEYCOLOMBIA</h3>
                                <span className={styles.timelineDate}>03/2025 - Presente</span>
                            </div>
                            <p className={styles.timelinePosition}>Desarrollador Frontend</p>
                            <ul className={styles.timelineList}>
                                <li>Desarrollo de aplicaciones web</li>
                                <li>Consumo e integración de APIs REST</li>
                                <li>Levantamiento de requerimientos</li>
                                <li>Diseño e implementación de base de datos</li>
                                <li>Mantenimiento de aplicaciones web</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* EDUCACIÓN */}
                <div className={styles.education}>
                    <h2 className={styles.subtitle}>Educación</h2>

                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineHeader}>
                                <h3>SENA - Tecnólogo en Análisis y Desarrollo de Software</h3>
                                <span className={styles.timelineDate}>09/2023</span>
                            </div>
                            <p className={styles.timelinePosition}>En formación</p>
                            <ul className={styles.timelineList}>
                                <li>Programación orientada a objetos.</li>
                                <li>Bases de datos SQL y NoSQL.</li>
                                <li>Evaluación de requisitos de software.</li>
                                <li>Desarrollo web.</li>
                                <li>Desarrollo de aplicaciones moviles y de escritorio.</li>
                            </ul>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineHeader}>
                                <h3>TECMD - Técnico Profesional en Servicios de Seguridad Informática.</h3>
                                <span className={styles.timelineDate}>01/2023 - 02/2025</span>
                            </div>
                            <ul className={styles.timelineList}>
                                <li>Diagnóstico de la seguridad de la información.</li>
                                <li>Monitoreo de la seguridad de la información.</li>
                                <li>Gestión de redes de comunicación de datos.</li>
                                <li>Diseño e implementación de modelos de seguridad.</li>
                                <li>Programación y desarrollo de software seguro.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About