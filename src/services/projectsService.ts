import apiClient from './apiClient'
import { Project } from '@/types'

export const projectsService = {
    // Obtener todos los proyectos
    getAll: async (): Promise<Project[]> => {
        const response = await apiClient.get('/posts') // Usaremos /posts como ejemplo
        // Transformar los datos de ejemplo a nuestro formato Project
        return response.data.slice(0, 6).map((item: any, index: number) => ({
            id: item.id,
            title: `Proyecto ${index + 1}: ${item.title.substring(0, 20)}`,
            description: item.body.substring(0, 150) + '...',
            technologies: ['React', 'TypeScript', 'CSS Modules'],
            imageUrl: `https://picsum.photos/seed/${item.id}/400/300`,
            liveUrl: '#',
            repoUrl: '#',
            featured: index < 2,
        }))
    },

    // Obtener proyectos destacados
    getFeatured: async (): Promise<Project[]> => {
        const projects = await projectsService.getAll()
        return projects.filter(project => project.featured)
    },

    // Obtener un proyecto por ID
    getById: async (id: number): Promise<Project> => {
        const response = await apiClient.get(`/posts/${id}`)
        return response.data
    }
}