import { defineStore } from 'pinia'

const apiUrl = "http://localhost:8000/roro/"

const crudClient = defineStore('clients', {
    state: () => ({
        clients: undefined,
        client: undefined,
    }),
    actions: {
        updateClients(clients) {
            this.clients = clients
        },
        async getClients() {
            const response = await fetch(`${apiUrl}clients/`)
            const data = await response.json()
            if (response.ok) {
                this.updateClients(data)
            } else throw new Error("Error en el servidor, intentelo mas tarde")

        },
        async getClient(id) {
            const response = await fetch(`${apiUrl}clients/${id}/`)
            const data = await response.json()
            if (response.ok) {
                this.client = data
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async createClient(client) {
            const response = await fetch(`${apiUrl}clients/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(client),
            })
            const data = await response.json()
            if (response.ok) {
                this.getClients(data)
            } else throw new Error("Error en el servidor, intentelo mas tarde")

        },
        async updateClient(client) {
            const response = await fetch(`${apiUrl}clients/${client.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(client),
            })
            const data = await response.json()
            if (response.ok) {
                this.getClient(data)
            } else throw new Error("Error en el servidor, intentelo mas tarde")

        },
        async deleteClient(client) {
            const response = await fetch(`${apiUrl}users/${client.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (!response.ok) {
                throw new Error("Error en el servidor, intentelo mas tarde")
            }
        },
    }
})
export default crudClient