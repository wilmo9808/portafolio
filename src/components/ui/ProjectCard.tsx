import React from 'react'
import ProjectImageCarousel from './ProjectImageCarousel'
import styles from './ProjectCard.module.css'

interface Project {
    id: string
    title: string
    description: string
    technologies: string[]
    images?: string[]
    imageUrl?: string
    liveUrl: string
    repoUrl: string
    featured?: boolean
}

interface ProjectCardProps {
    project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const hasImages = project.images && project.images.length > 0

    return (
        <div className={styles.card}>
            {hasImages ? (
                <ProjectImageCarousel
                    images={project.images!}
                    title={project.title}
                />
            ) : (
                project.imageUrl && (
                    <div className={styles.imageContainer}>
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className={styles.image}
                        />
                    </div>
                )
            )}

            <div className={styles.content}>
                {project.featured && (
                    <span className={styles.featuredBadge}>Destacado</span>
                )}
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.technologies}>
                    {project.technologies.map(tech => (
                        <span key={tech} className={styles.tech}>
                            {tech}
                        </span>
                    ))}
                </div>

                <div className={styles.links}>
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        onClick={(e) => e.stopPropagation()}
                    >
                        Ver Demo
                    </a>
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        onClick={(e) => e.stopPropagation()}
                    >
                        Código
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard