import { defineStore } from 'pinia'

const apiUrl = "http://localhost:8000/roro/"

const crudReservations = defineStore('resevations', {
    state: () => ({
        resevations: undefined,
        resevation: undefined,
    }),
    actions: {
        updateResevations(resevations) {
            this.resevations = resevations
        },
        async getResevations() {
            const response = await fetch(`${apiUrl}reservations/`)
            const data = await response.json()
            if (response.ok) {
                this.updateResevations(data)
            } else throw new Error("Error en el servidor, intentelo mas tarde")

        },
        async getMyReservations(id){
            const response = await fetch(`${apiUrl}reservations/?id_client=${id}`)
            const data = await response.json()
            if (response.ok) {
                this.resevations = data
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async getResevation(id) {
            const response = await fetch(`${apiUrl}reservations/${id}/`)
            const data = await response.json()
            if (response.ok) {
                this.resevation = data
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async createResevation(resevation) {
            const response = await fetch(`${apiUrl}reservations/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resevation),
            })
            const data = await response.json()
            if (response.ok) {
                this.getResevation(data)
            } else throw new Error("Error en el servidor, intentelo mas tarde")

        },
        async updateResevation(resevation) {
            const response = await fetch(`${apiUrl}resevations/${resevation.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(document),
            })
            const data = await response.json()
            if (response.ok) {
                this.getResevation(data)
            } else throw new Error("Error en el servidor, intentelo mas tarde")

        },
        async deleteResevation(resevation) {
            const response = await fetch(`${apiUrl}resevations/${resevation.id}`, {
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
export default crudReservations