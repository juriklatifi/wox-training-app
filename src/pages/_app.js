import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAuthStore } from "../context/authStore"

const restrictedPathnames = ['/restricted']

export default function App({Component, pageProps}) {
    const router = useRouter()
    const {authenticated } = useAuthStore()

    useEffect(() => {
        const authStorage = JSON.parse(sessionStorage.getItem('auth-storage'))
        const previousAuth = authStorage?.state?.authenticated
        if(!authenticated && !previousAuth && restrictedPathnames.includes(router.pathname)) {
            console.log('restriction failed redirecting to login!!')
            router.push('/login-form')
            return
        }
    }, [authenticated])
    
    return (
        <Component {...pageProps} />
    )
}