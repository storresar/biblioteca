<template>
<div class="relative w-full max-w-xs">
  <div class="absolute z-10 right-1 top-1">
    <button @click="closeLoginModal()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-circle-fill text-white hover:text-red-500 trasition duration-150" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
      </svg>
    </button>
  </div>
  <form class="bg-red-450 bg-opacity-90 shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
    <div class="mb-2">
      <label class="block text-white text-sm font-bold" for="username">
        Usuario
      </label>
      <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="username" type="text" placeholder="Usuario" v-model="username">
    </div>
    <div class="mb-4">
      <label class="block text-white text-sm font-bold mb-1" for="password">
        Contraseña
      </label>
      <input
      class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="password" type="password" placeholder="********" v-model="password">
    </div>
    <div class="flex items-center justify-start gap-4">
      <button
      class="bg-white hover:bg-red-50 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 hover:text-white"
      type="button" @click="login">
        Inicia sesion
      </button>
     <div class=" flex flex-col-reverse" >
          <a v-if="false" class="inline-block align-baseline font-bold text-sm text-white hover:text-red-50 transition-colors duration-200" href="#">
        Olvide mi clave
      </a>
      <a class="bg-white hover:bg-red-50 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 hover:text-white" @click="registro">
        Registrarse
      </a>
     </div>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2021 Doculib. Todos los derechos reservados.
  </p>
</div>
</template>

<script>
import { closeModal } from "jenesius-vue-modal";
import { useRouter } from "vue-router";
import { ref, inject } from "vue";
import useAuth from "@/store/useAuth.js"
import useUsers from "@/store/useUsers.js"

export default {
  name: "LoginForm",

  setup() {
    const router = useRouter();
    const auth = useAuth();
    const swal = inject("$swal");
    const username = ref("");
    const password = ref("");
    const users = useUsers();

    const closeLoginModal = () => {
      closeModal();
    };

    const registro = () => {
      closeModal();
      router.push("/registro");
    };

    const login = () => {
      auth.login(username.value, password.value)
      .then(() => getUser())
      .then(user => {
        if (user.id_role === 1) {
          router.push('/admin');
        } else {
          router.push('/client');
        }
        closeModal();
      })
      .catch((error) => {
        swal.fire({
          title: "Error",
          text: error.toString(),
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        console.error(error);
      });
    };

    const getUser = async () => {
      await users.getUser(auth.userId);
      return users.user;
    };

    return {
      closeLoginModal,
      registro,
      login,
      username,
      password,
    };
  },
}
</script>