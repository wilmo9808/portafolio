import emailjs from '@emailjs/browser'

interface EmailData {
    name: string
    email: string
    message: string
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
    try {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
            to_name: 'Wilson',
            reply_to: data.email,
        }

        const response = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams
        )

        console.log('✅ Email enviado:', response)
        return true
    } catch (error) {
        console.error('❌ Error enviando email:', error)
        return false
    }
}