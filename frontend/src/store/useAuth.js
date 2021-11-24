import { defineStore } from 'pinia'

const apiUrl = "http://localhost:8000/roro/"

 const useAuth = defineStore('auth', {
    state: () => ({
        userId: localStorage.getItem('userId') ? localStorage.getItem('userId') : undefined,
        token: localStorage.getItem('token') ? localStorage.getItem('token') : undefined,
        isLoggedIn: false,
    }),
    
    actions: {
        async login(username, password) {
            const response = await fetch(`${apiUrl}token-auth/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            })
            if (response.ok) {
                const data = await response.json()
                this.updateLoggedState(data.user)
            } else throw new Error("Error en con las credenciales")
        },
        updateLoggedState({ user, token }) {
            this.state.userId = user.id
            this.state.token = token
            localStorage.setItem('token', token)
            localStorage.setItem('userId', user.id)
        }
    }
})

export default useAuth