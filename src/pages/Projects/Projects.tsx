import React from 'react'
import ProjectCard from '@/components/ui/ProjectCard'
import styles from './Projects.module.css'

// Importar imágenes del proyecto 1 (Sistema de Citas)
import loginImg from '@/assets/images/loggin.png'
import dashboardImg from '@/assets/images/dashboard.png'
import calendarImg from '@/assets/images/appointments-cita.png'
import appointmentsImg from '@/assets/images/appointments-document.png'
import patientHistoryImg from '@/assets/images/patiens.png'

// Importar imágenes del proyecto 2
import loginOrdenaYa from '@/assets/images/login-ordenaya.png'
import dashboardAdminOrdenaYa from '@/assets/images/dashboard-admin-ordenaya.png'
import dashboardMeseroOrdenaYa from '@/assets/images/dashboard-mesero-ordenaya.png'
import dashboardCocinaOrdenaYa from '@/assets/images/dashboard-cocina-ordenaya.png'
import dashboardCajeroOrdenaYa from '@/assets/images/dashboard-cajero-ordenaya.png'
import dashboardCajeroReporteOrdenaYa from '@/assets/images/dashboard-cajero-reporte-ordenaya.png'
import menuOrdenaYa from '@/assets/images/menu-ordenaya.png'



const Projects: React.FC = () => {
    const projects = [
        {
            id: 'appointment-system',
            title: 'Sistema de Gestión de Citas',
            description: 'Sistema completo de gestión de citas médicas con historial de pacientes, autenticación segura y gestión documental. CRUD completo con buenas prácticas.',
            technologies: ['React', 'TypeScript', 'Context API', 'Axios', 'Node.js', 'JWT', 'Supabase'],
            images: [
                loginImg,
                dashboardImg,
                calendarImg,
                appointmentsImg,
                patientHistoryImg
            ],
            liveUrl: 'https://sistema-gestion-citas.netlify.app',
            repoUrl: 'https://github.com/wilmo9808/sistema-citas',
            featured: false
        },
        {
            id: 'OrdenaYa',
            title: 'OrdenaYa - sistema de pedidos para restaurantes',
            description: 'Sistema completo de gestión de pedidos en tiempo real con roles de Mesero, Chef, Cajero y Super Administrador. Incluye WebSockets, menú público con QR enlazado a cambios en tiempo real de los productos, reportes Excel y panel de administración.',
            technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Socket.io', 'Prisma', 'SQLite', 'Tailwind CSS', 'Zustand', 'Vite'],
            images: [
                loginOrdenaYa,
                dashboardAdminOrdenaYa,
                dashboardMeseroOrdenaYa,
                dashboardCocinaOrdenaYa,
                dashboardCajeroOrdenaYa,
                dashboardCajeroReporteOrdenaYa,
                menuOrdenaYa
            ],
            liveUrl: 'https://ordenaya-web.onrender.com/',
            repoUrl: 'https://github.com/wilmo9808/restaurant-app',
            featured: true
        },
    ]

    return (
        <div className="container">
            <h1 className={styles.title}>Mis Proyectos</h1>
            <div className={styles.projectGrid}>
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects