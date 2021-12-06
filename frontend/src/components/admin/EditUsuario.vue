<template>
<div class="grid min-h-screen place-items-center">
  <div class="w-11/12 px-12 py-4 bg-white sm:w-10/12 md:w-3/2 lg:w-full">
    <form class="mt-6" @submit.prevent="submit">
      <div class="flex flex-col sm:flex-row justify-between gap-3">
        <span class="w-full sm:w-1/2">
          <label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase">Nombres</label>
          <input id="firstname" type="text" name="firstname" placeholder="John" autocomplete="given-name" v-model="firstname"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
          <p v-if="v_errors.firstname.$error" class="text-sm text-red-150 m-2">Ingrese sus nombre.</p>

        </span>
        <span class="w-full sm:w-1/2">
          <label for="lastname" class="block text-xs font-semibold text-gray-600 uppercase">Apellidos</label>
          <input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" v-model="lastname"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"/>
          <p v-if="v_errors.lastname.$error" class="text-sm text-red-150 m-2">Ingrese sus apellidos.</p>

        </span>
      </div>
      <div class="flex flex-col sm:flex-row justify-between gap-3">
        <span class="w-full sm:w-1/2">
          <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
          <input type="text" name="email" disabled="true" placeholder="john.doe@company.com" autocomplete="email" v-model="email"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-400 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
          <p v-if="v_errors.email.$error" class="text-sm text-red-150 m-2">Ingrese un email valido.</p>
        </span>
        <span class="w-full sm:w-1/2">
          <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Nombre de usuario</label>
          <input type="text" name="email" disabled="true" placeholder="john.doe@company.com" autocomplete="email" v-model="username"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-400 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
          <p v-if="v_errors.username.$error" class="text-sm text-red-150 m-2">Ingrese nombre de usuario valido.</p>
        </span>
      </div>

      
      <label for="date" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Fecha de nacimiento</label>
      <input type="date" name="date" v-model="date_birth"
      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
      <p v-if="v_errors.date_birth.$error" class="text-sm text-red-150 m-2">Ingrese una fecha valida.</p>

      <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Contraseña</label>
      <input type="password" name="password" placeholder="**" autocomplete="new-password" v-model="password"
      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
      <p v-if="v_errors.password.$error" class="text-sm text-red-150 m-2">Su clave debe tener entre 8 a 10 caracteres.</p>

      
      <label for="password-confirm" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirma la constraseña</label>
      <input type="password" name="password-confirm" placeholder="**" v-model="password_confirm"
      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"/>
      <p v-if="v_errors.password_confirm.$error" class="text-sm text-red-150 m-2">Las claves no coinciden.</p>

      
      <div class="flex flex-col sm:flex-row justify-between gap-3 mt-2">
        <span class="w-full sm:w-1/3">
          <label for="tipo_documento" class="block text-xs font-semibold text-gray-600 uppercase">Tipo de documento</label>
          <select v-model="type_selected" disabled="true"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-500 focus:outline-none focus:bg-gray-300 focus:shadow-inner">
            <option v-for="item of type_document" :key="item.id" :value="item.id">{{item.name_doc}}</option>
          </select>
        </span>
        <span class="w-full sm:w-2/3">
        <label for="documento" class="block text-xs font-semibold text-gray-600 uppercase">Número de documento</label>
        <input type="text" name="documento" v-model="document" disabled="true"
        class="block w-full p-3 mt-2 text-gray-700 bg-gray-400 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        <p v-if="v_errors.document.$error" class="text-sm text-red-150 m-2">Este documento no es válido</p>

        </span>
      </div>

      <div class="flex flex-col sm:flex-row justify-between gap-3">
        <span class="w-full sm:w-2/3">
          <label for="phone" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Número telefonico</label>
          <input type="text" name="phone" v-model="phone"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
          <p v-if="v_errors.phone.$error" class="text-sm text-red-150 m-2">Número telefonico no válido</p>
        </span>
        <span class="w-full sm:w-1/3">
          <label for="tipo_documento" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Tipo de usuario</label>
          <select v-model="id_role"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 focus:outline-none focus:bg-gray-300 focus:shadow-inner">
            <option value="1">Administrador</option>
            <option value="2">Cliente</option>
          </select>
        </span>
      </div>

      <label for="address" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Dirección domiciliaria</label>
      <input name="address" v-model="address"
      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
      <p v-if="v_errors.address.$error" class="text-sm text-red-150 m-2">Este campo es requerido</p>


      


      <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
        Modificar usuario
      </button>
      <button @click="regresar()" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
        Regresar
      </button>
    </form>
  </div>
</div>
</template>

<script>
import { required, email, sameAs, numeric, minLength, maxLength } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { mapActions } from 'pinia'
import useClients from '@/store/useClients.js'
import useUsers from '@/store/useUsers.js'

function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - new Date(birthday).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function validateAge(birthday) {
    return calculateAge(birthday) >= 10 && calculateAge(birthday) <= 113;
}

function validatePhone(phone){
  if(phone.toString().split('').length == 10){
    if(phone >= 3000000000 && phone <= 3509999999){
      return true;
    }
    else{
      return false;
    }
  }else if(phone.toString().split('').length == 7 && phone.toString().charAt(0) != 0){
    return true;
  }
  else{
    return false;
  }
}

function validateDoc(document){
  if(document.toString().split('').length <= 10){
    if(document <= 2000000000 && document > 0 && document.toString().charAt(0) != 0){
      return true;
    }
    else{
      return false;
    }
  }
  else{
    return false;
  }
}

export default {
  setup () {
    return { v_errors: useVuelidate() }
  },
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
  validations () {
    return {
      firstname: { required, $autoDirty: true },
      username: { required, $autoDirty: true  },
      lastname: { required, $autoDirty: true  },
      email: { required, email, $autoDirty: true  },
      password: { minLength: minLength(8), maxLength: maxLength(10), $autoDirty: true  },
      password_confirm: { sameAs: sameAs(this.password), $autoDirty: true  },
      date_birth: { required, validateAge, $autoDirty: true  },
      document: { required, validateDoc, numeric, $autoDirty: true },
      address: { required, $autoDirty: true },
      phone: { required, validatePhone, numeric, $autoDirty: true },
    }
  },

  mounted() {
    //Todo : llamar al backend y guardar los tipos de documentos en type_document en un array
    const apiUrl = process.env.NODE_ENV === 'production' ?
    'https://doculib.herokuapp.com/roro/' : 'http://localhost:8000/roro/';
    fetch(apiUrl + 'iddocument/')
    .then(response => response.json())
    .then(data => {
      this.type_document = data
    })
    this.$swal.fire({
      title: 'Espere un momento',
      html: 'estamos cargando el sistema.',
      allowOutsideClick: false,
      didOpen: () => {
        this.$swal.showLoading()
      }
    });
    // guardar los datos del usuario en la data
    this.getUser(this.$route.params.id)
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
          console.log(client)
          this.date_birth = client.born_date
          this.type_selected = client.id_document
          this.document = client.num_document
          this.address = client.address
          this.phone = client.phone_number
          this.id_client = client.id
        })
      } this.$swal.close()
    })
  },
  methods: {
    ...mapActions(useUsers, ['updateUser', 'getUser']),
    ...mapActions(useClients, ['updateClient', 'getClient']),
    regresar(){
      this.$router.go(-1)
    },
    async submit () {
      const valid = await this.v_errors.$validate()
      if (valid) {
        var user = {
          id: this.id_user,
          first_name: this.firstname,
          last_name: this.lastname,
          email: this.email,
          id_role: this.id_role,
          username: this.username,
        }
        if (this.password) user.password = this.password
        await this.updateUser(user)
        if (this.id_role == 2) {
          await this.updateClient({
            id: this.id_client,
            born_date: this.date_birth.split('/').reverse().join('-'),
            is_author : false,
            num_document: this.document,
            address: this.address,
            phone_number: this.phone,
            id_document: parseInt(this.type_selected),
            id_user: this.id_user,
          })
        }
        this.$swal({
          title: '¡Exito!',
          text: 'El usuario fue modificado exitosamente.',
          icon: 'success',
          button: 'Ok'
        })
      } else {
        this.$swal({
          title: 'Error',
          text: 'Por favor, revise los campos en rojo',
          icon: 'error',
          confirmButtonText: 'Ah bueno'
        })
      }
    }
  }
}
</script>