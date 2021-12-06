import { defineStore } from 'pinia'

const apiUrl = process.env.NODE_ENV === 'production' ?
'https://doculib.herokuapp.com/roro/' : 'http://localhost:8000/roro/';

const crudClient = defineStore('clients', {
    state: () => ({
        clients: undefined,
        client: undefined,
        author: undefined,
        petition: undefined,
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
        async getClientById(id) {
            const response = await fetch(`${apiUrl}clients/${id}/`)
            const data = await response.json()
            if (response.ok) {
                this.client = data
                return data
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async getClient(id) {
            const response = await fetch(`${apiUrl}clients/?id_user=${id}`)
            const data = await response.json()
            if (response.ok) {
                this.client = data[0]
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async getAuthor(id) {
            const response = await fetch(`${apiUrl}author/?id_user=${id}`)
            const data = await response.json()
            if (response.ok) {
                this.author = data[0]
                return data[0]
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
        async createPetitionAuthor(petition){
            console.log(JSON.stringify(petition))
            const response = await fetch(`${apiUrl}author-request/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(petition),
            })
            const data = await response.json()
            if (response.ok) {
                console.log('MELO')
                console.log(data)
            } else throw new Error("Error en el servidor, intentelo mas tarde")

        },
        async getPetition(id){
            const response = await fetch(`${apiUrl}author-request/?id_client=${id}`)
            const data = await response.json()
            if (response.ok) {
                this.petition = data[0]
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async updateClient(client) {
            const response = await fetch(`${apiUrl}clients/${client.id}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(client),
            })
            const data = await response.json()
            if (response.ok) {
                this.getClient(data.id)
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