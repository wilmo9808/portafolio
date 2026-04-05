import { useState, useEffect } from 'react'
import { Project } from '@/types'
import { projectsService } from '@/services/projectsService'

interface UseFetchProjectsReturn {
    projects: Project[]
    loading: boolean
    error: string | null
    refetch: () => Promise<void>
}

export const useFetchProjects = (featuredOnly: boolean = false): UseFetchProjectsReturn => {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const fetchProjects = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = featuredOnly
                ? await projectsService.getFeatured()
                : await projectsService.getAll()
            setProjects(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error al cargar los proyectos')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProjects()
    }, [featuredOnly])

    return { projects, loading, error, refetch: fetchProjects }
}