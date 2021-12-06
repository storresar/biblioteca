<template>
    <header class="flex justify-between bg-black p-4">
        <img src="Doculib.png" alt="" srcset=""
        class="w-1/6 sm:grid self-center hidden">
        <h3 class="text-white text-3xl grid self-center font-serif italic">
            Bienvenido a doculib
        </h3>
        <div class="flex flex-col sm:flex-row gap-2 items-center">
        <button @click="openLoginModal()"
        class="rounded border-2 border-red-450 px-4 py-2 h-11 text-white shadow-lg hover:bg-red-450">
                Inicia sesión
        </button>
        <button
        class="rounded border-2 border-red-450 px-4 py-2 h-11 text-white shadow-lg hover:bg-red-450" @click="registro()">
                Registrate
        </button>
        </div>
    </header>
</template>

<script>
import { openModal } from "jenesius-vue-modal";
import LoginForm from "./LoginForm.vue";

export default {
    methods: {
        openLoginModal() {
            openModal(LoginForm);
        },
        registro(){
      this.$router.push("/registro")
    }
    }
}
</script>