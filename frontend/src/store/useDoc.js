import { defineStore } from 'pinia'

const apiUrl = "http://localhost:8000/roro/"

const crudDocuments = defineStore('documents', {
    state: () => ({
        documents: undefined,
        document: undefined,
        audit: undefined,
    }),
    actions: {
        updateDocuments(documents) {
            this.documents = documents
        },
        async getDocuments() {
            const response = await fetch(`${apiUrl}documents/`)
            const data = await response.json()
            if (response.ok) {
                this.updateDocuments(data)
            } else throw new Error("Error en el servidor, intentelo mas tarde")

        },
        async getDocument(id) {
            const response = await fetch(`${apiUrl}documents/${id}/`)
            const data = await response.json()
            if (response.ok) {
                this.client = data
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async createDocument(client) {
            const response = await fetch(`${apiUrl}documents/`, {
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
        async updateDocument(document) {
            const response = await fetch(`${apiUrl}documents/${document.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(document),
            })
            const data = await response.json()
            if (response.ok) {
                this.getClient(data)
            } else throw new Error("Error en el servidor, intentelo mas tarde")

        },
        async deleteDocument(document) {
            const response = await fetch(`${apiUrl}documents/${document.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (!response.ok) {
                throw new Error("Error en el servidor, intentelo mas tarde")
            }
        },
        async getAudit(){
            const response = await fetch(`${apiUrl}audit/`)
            const data = await response.json()
            if (response.ok) {
                this.audit = data
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        }
    }
})
export default crudDocuments