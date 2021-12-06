<template>
<div class="grid min-h-screen place-items-center">
  <div class="w-11/12 px-12 py-4 bg-white sm:w-10/12 md:w-3/2 lg:w-full">
    <section class="mt-6">
      <div class="flex flex-col sm:flex-row justify-between gap-3">
        <span class="w-full sm:w-1/2">
          <label for="firstname" class="block text-xs font-semibold text-red-400 uppercase">Nombres</label>
          <input id="firstname" type="text" name="firstname" disabled="true" placeholder="John" autocomplete="given-name" v-model="firstname"
          class="block w-full p-3 mt-2 text-black bg-transparent appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />

        </span>
        <span class="w-full sm:w-1/2">
          <label for="lastname" class="block text-xs font-semibold text-red-400 uppercase">Apellidos</label>
          <input id="lastname" type="text" name="lastname" disabled="true" placeholder="Doe" autocomplete="family-name" v-model="lastname"
          class="block w-full p-3 mt-2 text-black bg-transparent appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"/>

        </span>
      </div>
      <div class="flex flex-col sm:flex-row justify-between gap-3">
        <span class="w-full sm:w-1/2">
          <label for="email" class="block mt-2 text-xs font-semibold text-red-400 uppercase">E-mail</label>
          <input type="text" name="email" disabled="true" placeholder="john.doe@company.com" autocomplete="email" v-model="email"
          class="block w-full p-3 mt-2 text-black bg-transparent appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
        </span>
        <span class="w-full sm:w-1/2">
          <label for="email" class="block mt-2 text-xs font-semibold text-red-400 uppercase">Nombre de usuario</label>
          <input type="text" name="email" disabled="true" placeholder="john.doe@company.com" autocomplete="email" v-model="username"
          class="block w-full p-3 mt-2 text-black bg-transparent appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
        </span>
      </div>

      
      <label for="date" class="block mt-2 text-xs font-semibold text-red-400 uppercase">Fecha de nacimiento</label>
      <input type="date" name="date" v-model="date_birth" disabled="true"
      class="block w-full p-3 mt-2 text-black bg-transparent appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />


      
      <div class="flex flex-col sm:flex-row justify-between gap-3 mt-2">
        <span class="w-full sm:w-2/3">
          <label for="tipo_documento" class="block text-xs font-semibold text-red-400 uppercase">Tipo de documento</label>
          <select v-model="type_selected" disabled="true"
          class="block w-full p-3 mt-2 text-black appearance-none bg-transparent focus:outline-none focus:bg-gray-300 focus:shadow-inner">
            <option v-for="item of type_document" :key="item.id" :value="item.id">{{item.name_doc}}</option>
          </select>
        </span>
        <span class="w-full sm:w-2/3">
        <label for="documento" class="block text-xs font-semibold text-red-400 uppercase">Número de documento</label>
        <input type="text" name="documento" v-model="document" disabled="true"
        class="block w-full p-3 mt-2 text-black bg-transparent appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required-400 />
        </span>
      </div>

      <div class="flex flex-col sm:flex-row justify-between gap-3">
        <span class="w-full sm:w-2/3">
          <label for="phone" class="block mt-2 text-xs font-semibold text-red-400 uppercase">Número telefonico</label>
          <input type="text" name="phone" v-model="phone" disabled="true"
          class="block w-full p-3 mt-2 text-black bg-transparent appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
        </span>
         <span class="w-full sm:w-2/3">
          <label for="address" class="block mt-2 text-xs font-semibold text-red-400 uppercase">Dirección domiciliaria</label>
      <input name="address" v-model="address" disabled="true"
      class="block w-full p-3 mt-2 text-black bg-transparent appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
        </span>

      </div>

      
      
      <button @click="regresar()" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
        Regresar
      </button>
    </section>
  </div>
</div>
</template>

<script>
import { mapActions } from 'pinia'
import useClients from '@/store/useClients.js'
import useUsers from '@/store/useUsers.js'

export default {
  

  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password_confirm: '',
      date_birth: '',
      type_document: [],
      type_selected: 1,
      document: '',
      address: '',
      phone: '',
      options: ['Cedula', 'Tarjeta de identidad'],
      id_role: 1,
      username: '',
      id_user: '',
      id_client: '',
    }
  },
  
  mounted() {
    //Todo : llamar al backend y guardar los tipos de documentos en type_document en un array
    this.$swal.fire({
      title: 'Espere un momento',
      html: 'estamos cargando el sistema.',
      allowOutsideClick: false,
      didOpen: () => {
        this.$swal.showLoading()
      }
    });
    const apiUrl = process.env.NODE_ENV === 'production' ?
    'https://doculib.herokuapp.com/roro/' : 'http://localhost:8000/roro/';
    fetch(apiUrl + 'iddocument/')
    .then(response => response.json())
    .then(data => {
      this.type_document = data
    })
    // guardar los datos del usuario en la data
    this.getUser(localStorage.getItem('userId'))
    .then(user => {
      this.id_user = user.id
      this.firstname = user.first_name
      this.lastname = user.last_name
      this.email = user.email
      this.id_role = user.id_role
      this.username = user.username
      this.id_role = user.id_role
      if(user.id_role === 2){
        this.getClient(user.id)
        .then(client => {
          this.date_birth = client.born_date
          this.type_selected = client.id_document
          this.document = client.num_document
          this.address = client.address
          this.phone = client.phone_number
          this.id_client = client.id
          this.$swal.close()
        })
      } else this.$swal.close()
    })
  },
  methods: {
    ...mapActions(useUsers, ['getUser']),
    ...mapActions(useClients, ['getClient']),
    regresar(){
      this.$router.go(-1)
    },
  }
}
</script>