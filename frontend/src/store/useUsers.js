import { defineStore } from 'pinia'

const apiUrl = process.env.NODE_ENV == 'development' ?
'http://localhost:8000/roro/' : 'https://doculib.herokuapp.com/roro/'

const crudUser = defineStore('users', {
    state: () => ({
        users: [],
        user: undefined,
    }),
    actions: {
        updateUsers(users) {
            const user = this.users
            if (user) {
                this.users = users.filter(obj => obj.id !== user.id)
            } else {
                this.users = users
            }
        },
        async getUsers() {
            const response = await fetch(`${apiUrl}users/`)
            const data = await response.json()
            if (response.ok) {
                this.updateUsers(data)
            } else throw new Error("Error en el servidor, intentelo mas tarde")

        },
        async getUser(id) {
            const response = await fetch(`${apiUrl}users/${id}/`)
            const data = await response.json()
            if (response.ok) {
                this.user = data
                return this.user
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async createUser(user) {
            const response = await fetch(`${apiUrl}users/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
            const data = await response.json()
            if (response.ok) {
                this.getUsers(data)
                return data
            } else throw new Error("Error en el servidor, intentelo mas tarde")

        },
        async updateUser(user) {
            const response = await fetch(`${apiUrl}users/${user.id}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
            const data = await response.json()
            if (response.ok) {
                this.getUsers(data)
            } else throw new Error("Error en el servidor, intentelo mas tarde")

        },
        async deleteUser(id) {
            const response = await fetch(`${apiUrl}users/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.status === 204) {
                this.getUsers()
                return 'El usuario ha sido eliminadp con exito.'
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async verifyCaptcha(captcha) {
            const response = await fetch('https://rocky-basin-43749.herokuapp.com/api/verificar_captcha/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(captcha),
            })
            const data = await response.json()
            if (response.ok) {
                return data
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async getUserByDocumentId(document) {
            const req2 = await fetch(`${apiUrl}clients/${document.id_author}/`)
            if (req2.ok) {
                const data2 = await req2.json()
                const req3 = await fetch(`${apiUrl}users/${data2.id_user}/`)
                if (req3.ok) {
                    return req3.json()
                } else throw new Error("Error en el servidor, intentelo mas tarde")
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },        
    },
})
export default crudUser