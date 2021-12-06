<template>
<div class="grid min-h-screen place-items-center">
  <div class="w-11/12 px-12 py-4 bg-white sm:w-10/12 md:w-3/2 lg:w-full">
    <form class="mt-6" @submit.prevent="submit">
      <label class="block text-xs font-semibold text-black uppercase m-4">Todos los campos son obligatorios</label>

      <div class="flex flex-col sm:flex-row justify-between gap-3">
        <span class="w-full sm:w-1/2">
          <label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase">Nombres</label>
          <input id="firstname" type="text" name="firstname" placeholder="John" autocomplete="given-name" v-model="firstname"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
          <p v-if="v_errors.firstname.$error" class="text-sm text-red-150 m-2">Ingrese sus nombres.</p>

        </span>
        <span class="w-full sm:w-1/2 mb-2">
          <label for="lastname" class="block text-xs font-semibold text-gray-600 uppercase">Apellidos</label>
          <input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" v-model="lastname"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"/>
          <p v-if="v_errors.lastname.$error" class="text-sm text-red-150 m-2">Ingrese sus apellidos.</p>

        </span>
      </div>
      <label for="documento" class="block text-xs font-semibold text-gray-600 uppercase ">Nombre de usuario</label>
      <input type="text" name="documento" v-model="username"
      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      <p v-if="v_errors.username.$error" class="text-sm text-red-150 m-2">Ingrese un valor en este campo</p>


      <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Correo electrónico</label>
      <input type="text" name="email" placeholder="john.doe@company.com" autocomplete="email" v-model="email"
      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
      <p v-if="v_errors.email.$error" class="text-sm text-red-150 m-2">Ingrese un email valido.</p>

      
      <label for="date" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Fecha de nacimiento</label>
      <input type="date" name="date" v-model="date_birth"
      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
      <p v-if="v_errors.date_birth.$error" class="text-sm text-red-150 m-2">Ingrese una fecha válida.</p>

      <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Contraseña</label>
      <input type="password" name="password" placeholder="**" autocomplete="new-password" v-model="password"
      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
      <p v-if="v_errors.password.$error" class="text-sm text-red-150 m-2">Su clave debe tener entre 8 a 10 caracteres.</p>

      
      <label for="password-confirm" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirma la constraseña</label>
      <input type="password" name="password-confirm" placeholder="**" v-model="password_confirm"
      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      <p v-if="v_errors.password_confirm.$error" class="text-sm text-red-150 m-2">Las claves no coinciden.</p>

      
      <div class="flex flex-col sm:flex-row justify-between gap-3 mt-2">
        <span class="w-full sm:w-1/3">
          <label for="tipo_documento" class="block text-xs font-semibold text-gray-600 uppercase">Tipo de documento</label>
          <select v-model.number="type_selected"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 focus:outline-none focus:bg-gray-300 focus:shadow-inner">
            <option v-for="item of options" :key="item.id" :value="item.id">{{item.name_doc}}</option>
          </select>
        </span>
        <span class="w-full sm:w-2/3">
        <label for="documento" class="block text-xs font-semibold text-gray-600 uppercase">Número de documento</label>
        <input type="text" name="documento" v-model="document"
        class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        <p v-if="v_errors.document.$error" class="text-sm text-red-150 m-2">Este documento no es válido</p>

        </span>
      </div>

      <label for="address" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Dirección domiciliaria</label>
      <input name="address" v-model="address"
      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
      <p v-if="v_errors.address.$error" class="text-sm text-red-150 m-2">Este campo es requerido</p>


      <label for="phone" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Número telefónico</label>
      <input type="text" name="phone" v-model="phone"
      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
      <p v-if="v_errors.phone.$error" class="text-sm text-red-150 m-2">Número telefonico no válido</p>

      <div class="flex justify-center mt-2">
        <vue-recaptcha siteKey="6LfcUn8dAAAAAMY0DB1qPMEornsRMmb6uh970EAh"
        size="normal"
        theme="light"
        :tabindex="0"
        @verify="recaptchaVerified"
        @expire="recaptchaExpired"
        @fail="recaptchaFailed"
        ref="vueRecaptcha">
        </vue-recaptcha>
      </div>

      <div class="flex sm:justify-end mt-2 gap-x-4 gap-y-1 sm:flex-row flex-col">
        <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
          Registrarse
        </button>
        <button @click="regresar()" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
          Regresar
        </button>
      </div>
      
      <p class=" justify-center inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">¿Ya te encuentras registrado?</p>
    </form>
  </div>
</div>
</template>

<script>
import { required, email, sameAs, numeric, minLength, maxLength, alpha } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import vueRecaptcha from 'vue3-recaptcha2';
import { mapActions } from 'pinia'
import useUsers from '@/store/useUsers.js'
import useClients from '@/store/useClients.js'

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
  components: {
    vueRecaptcha,
  },
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
      type_selected: 1,
      document: '',
      address: '',
      phone: '',
      options: [{id:1, name_doc:"Cedula"}, {id:2, name_doc:"Tarjeta de identidad"}],
      captchaVerified: false,
      username: '',
    }
  },
  validations () {
    return {
      firstname: { required, alpha, $autoDirty: true  },
      username: { required, $autoDirty: true  },
      lastname: { required, alpha, $autoDirty: true  },
      email: { required, email, $autoDirty: true  },
      password: { required, minLength: minLength(8), maxLength: maxLength(10), $autoDirty: true  },
      password_confirm: { required, sameAs: sameAs(this.password), $autoDirty: true  },
      date_birth: { required, validateAge, $autoDirty: true  },
      type_selected: { required, $autoDirty: true },
      document: { required, validateDoc, numeric, $autoDirty: true },
      address: { required, $autoDirty: true },
      phone: { required, validatePhone, numeric, $autoDirty: true },
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
      this.options = data
      this.$swal.close()
    })

    
  },
  methods: {
    ...mapActions(useUsers, ['verifyCaptcha', 'createUser']),
    ...mapActions(useClients, ['createClient']),
    regresar(){
      this.$router.push('/')
    },
    async submit () {
      const valid = await this.v_errors.$validate()
      if (valid) {
        if (this.captchaVerified) {
          const {id} = await this.createUser({
            first_name: this.firstname,
            username: this.username,
            last_name: this.lastname,
            email: this.email,
            password: this.password,
            phone: this.phone,
            id_role: 2,
          })
          await this.createClient({
            born_date: this.date_birth.split('/').reverse().join('-'),
            is_author : false,
            num_document: this.document,
            address: this.address,
            phone_number: this.phone,
            state: "D",
            id_document: this.type_selected,
            id_user: id,
          })
          this.$router.push('/')
        } else {
          this.$refs.vueRecaptcha.reset()
          this.$swal({
            title: 'Error',
            text: 'Por favor verifica que no eres un robot',
            type: 'error',
            confirmButtonText: 'Ok'
          })
        }
        this.$swal({
          title: '¡Registro exitoso!',
          text: 'Ahora puedes iniciar sesión.',
          icon: 'success',
          button: 'Ok'
        })
      } else {
        this.$swal({
          title: 'Error',
          text: 'Por favor, revise los campos en rojo',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    },
    recaptchaVerified(response) {
      this.verifyCaptcha({'g-recaptcha-response': response})
      .then(() => {
        this.captchaVerified = true
      })
      .catch(() => {
        this.$swal('Error', 'Reintente la verificacion de captcha', 'error')
        this.recaptchaExpired()
      })
    },
    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
    },
    recaptchaFailed() {
      this.$swal('Error', 'Reintente la verificacion de captcha', 'error')
    },
  }
}
</script>