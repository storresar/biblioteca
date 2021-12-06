import { defineStore } from 'pinia'

const apiUrl = process.env.NODE_ENV == 'development' ?
'https://doculib.herokuapp.com/roro/' : 'http://localhost:8000/roro/';

const userAuthRequests = defineStore("authRequests", {
    state: () => ({
      requests: [],
    }),
    actions: {
      async getRequests() {
        const response = await fetch(apiUrl + 'author-request/')
        const data = await response.json()
        this.updateRequests(data)
      },
      async getRequest(reqId){
        const response = await fetch(apiUrl + 'author-request/' + reqId + '/')
        if (response.status === 200) {
          return response.json()
        } throw new Error('Request failed')
      },
      async updateRequest(request) {
        const response = await fetch(`${apiUrl}author-request/${request.id}/`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(request)
        })
        if (response.ok) {
          await this.getRequests()
        } else {
          throw new Error('Actualización estado de solicitud fallida')
        }
      },

      updateRequests(requests){
        this.requests = requests
      },
    },
  });
  
  export default userAuthRequests;