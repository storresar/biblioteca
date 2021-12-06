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
                Fecha limite
            </label>
            <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" :placeholder="datos.fecha" readonly>
        </div>    
    </form>
    <p class="text-center text-gray-500 text-xs">
        &copy;2021 Doculib. Todos los derechos reservados.
    </p>
    </div>
</template>
<script>
import { closeModal } from "jenesius-vue-modal";
//import { reactive } from "vue";
export default {
    props:{
        info: Object,
    },
    setup(props) {
        console.log(props)
         const datos = {
             fecha: props.info.limit_date
         }
        const closeLoginModal = () => {
            closeModal();
        };
        return{
            closeLoginModal,
            datos
        }
    },
}
</script>