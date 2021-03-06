import { defineStore } from 'pinia'

const apiUrl = process.env.NODE_ENV === 'production' ?
'https://doculib.herokuapp.com/roro/' : 'http://localhost:8000/roro/';

const crudDocuments = defineStore('documents', {
    state: () => ({
        documents: undefined,
        document: undefined,
        audit: undefined,
        book: undefined,
        lecture : undefined,
        scientific : undefined,
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
                this.document = data
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async getTypeDocuments(id){
            const response = await fetch(`${apiUrl}documents/?state=${id}`)
            const data = await response.json()
            if (response.ok) {
                this.documents = data
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async getMyDocuments(id) {
            const response = await fetch(`${apiUrl}documents/?id_user=${id}`)
            const data = await response.json()
            if (response.ok) {
                this.documents = data
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async getBook(id){
            const response = await fetch(`${apiUrl}book/?id_doc=${id}`)
            const data = await response.json()
            if (response.ok) {
                this.book = data[0]
                return data[0]
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async createBook(book){
            const response = await fetch(`${apiUrl}book/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(book),
            })
            const data = await response.json()
            if (response.ok) {
                this.book =  data
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async getLecture(id){
            const response = await fetch(`${apiUrl}lectures/?id_doc=${id}`)
            const data = await response.json()
            if (response.ok) {
                this.lecture = data[0]
                return data[0]
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async createLecture(lecture){
            const response = await fetch(`${apiUrl}lectures/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(lecture),
            })
            const data = await response.json()
            if (response.ok) {
                return data
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async updateLecture(lecture){
            const response = await fetch(`${apiUrl}lectures/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(lecture),
            })
            if (response.ok) {
                return response.json()
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async deleteLecture(id){
            const response = await fetch(`${apiUrl}lectures/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok) {
                return response.json()
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async getScientific(id){
            const response = await fetch(`${apiUrl}scientific/?id_doc=${id}`)
            const data = await response.json()
            if (response.ok) {
                this.scientific = data[0]
                return data[0]
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async createScientific(scientific){
            const response = await fetch(`${apiUrl}scientific/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(scientific),
            })
            const data = await response.json()
            if (response.ok) {
                return data
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async updateScientific(scientific){
            const response = await fetch(`${apiUrl}scientific/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(scientific),
            })
            if (response.ok) {
                return response.json()
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async deleteScientific(id){
            const response = await fetch(`${apiUrl}scientific/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok) {
                return response.json()
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async createDocument(document) {
            const response = await fetch(`${apiUrl}documents/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(document),
            })
            const data = await response.json()
            if (response.ok) {
                this.document =  data
                this.getDocuments()
            } else throw new Error("Error en el servidor, intentelo mas tarde")
        },
        async updateDocument(document) {
            const response = await fetch(`${apiUrl}documents/${document.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(document),
            })
            const data = await response.json()
            console.log(data.value)
            if (response.ok) {
                this.getDocuments()
            } else throw new Error("Error en el servidor, intentelo mas tarde")

        },
        async deleteDocument(document) {
            const response = await fetch(`${apiUrl}documents/${document.id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (!response.ok) {
                throw new Error("Error en el servidor, intentelo mas tarde")
            } this.getDocuments()
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