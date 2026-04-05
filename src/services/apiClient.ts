import axios from 'axios'

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Interceptor para peticiones
apiClient.interceptors.request.use(
    (config) => {
        // Aquí puedes añadir tokens de autenticación si los necesitas
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Interceptor para respuestas
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Manejar error de autenticación
            console.error('No autorizado')
        }
        return Promise.reject(error)
    }
)

export default apiClient