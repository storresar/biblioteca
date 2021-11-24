import { defineStore } from 'pinia'

const apiUrl = "http://localhost:8000/roro/"

const crudUser = defineStore('users', {
    state: () => ({
        users: [],
        user: undefined,
    }),
    actions: {
        updateUsers(users) {
            const user = this.state.users
            if (user) {
                this.state.users = users.filter(obj => obj.id !== user.id)
            } else {
                this.state.users = users
            }
        },
        async getUsers() {
            const response = await fetch(`${apiUrl}users`)
            const data = await response.json()
            if (response.ok) {
                this.updateUsers(data)
            } else throw new Error("Error en el servidor, intentelo mas tarde")

        },
        async createUser(user) {
            const response = await fetch(`${apiUrl}users`, {
                method: 'POST',
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
        async updateUser(user) {
            const response = await fetch(`${apiUrl}users/${user.id}`, {
                method: 'PUT',
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
        async deleteUser(user) {
            const response = await fetch(`${apiUrl}users/${user.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json()
            if (response.ok) {
                if (data.id === this.state.user.id) {
                    this.state.user = data
                } else {
                    this.getUsers(data)
                }
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
    }
})
export default crudUser