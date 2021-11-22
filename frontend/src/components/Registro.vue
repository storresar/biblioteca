<template>
<div class="grid min-h-screen place-items-center">
  <div class="w-11/12 p-12 bg-white sm:w-10/12 md:w-3/2 lg:w-7/12">
    <form class="mt-6" @submit.prevent="submit">
      <div class="flex justify-between gap-3">
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
      <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
      <input type="text" name="email" placeholder="john.doe@company.com" autocomplete="email" v-model="email"
      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
      <p v-if="v_errors.email.$error" class="text-sm text-red-150 m-2">Ingrese un email valido.</p>

      
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
      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      <p v-if="v_errors.password_confirm.$error" class="text-sm text-red-150 m-2">Las claves no coinciden.</p>

      
      <div class="flex justify-between gap-3 mt-2">
        <span class="w-full sm:w-1/3">
          <label for="tipo_documento" class="block text-xs font-semibold text-gray-600 uppercase">Tipo de documento</label>
          <select v-model="type_document"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 focus:outline-none focus:bg-gray-300 focus:shadow-inner">
            <option v-for="item of options" :key="item" :value="item">{{item}}</option>
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


      <label for="phone" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Número telefonico</label>
      <input type="text" name="phone" v-model="phone"
      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
      <p v-if="v_errors.phone.$error" class="text-sm text-red-150 m-2">Número telefonico no válido</p>


      <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
        Sign up
      </button>
      
      <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</p>
    </form>
  </div>
</div>
</template>

<script>
import { required, email, sameAs, numeric, minLength, maxLength } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'

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
      firstname: 'Juan',
      lastname: 'Quintero',
      email: 'gaortega@unbosque.edu.co',
      password: 'Ronditas11',
      password_confirm: 'Ronditas11',
      date_birth: '10/15/1999',
      type_document: 'Cedula',
      document: '1019152187',
      address: 'aKI',
      phone: '3212223755',
      options: ['Cedula', 'Tarjeta de identidad']
    }
  },
  validations () {
    return {
      firstname: { required, $autoDirty: true  },
      lastname: { required, $autoDirty: true  },
      email: { required, email, $autoDirty: true  },
      password: { required, minLength: minLength(8), maxLength: maxLength(10), $autoDirty: true  },
      password_confirm: { required, sameAs: sameAs(this.password), $autoDirty: true  },
      date_birth: { required, validateAge, $autoDirty: true  },
      type_document: { required, $autoDirty: true },
      document: { required, validateDoc, numeric, $autoDirty: true },
      address: { required, $autoDirty: true },
      phone: { required, validatePhone, numeric, $autoDirty: true },
    }
  },
  mounted() {
    //Todo : llamar al backend y guardar los tipos de documentos en type_document en un array

    
  },
  methods: {
    async submit () {
      console.log(this.email);
      const valid = await this.v_errors.$validate()
      if (valid) {
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
    }
  }
}
</script>