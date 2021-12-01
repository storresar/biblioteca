<template>
    <div class="bg-gray-300 rounded shadow flex flex-col h-full">
        <div class="flex flex-col">
            <div class="px-4 py-2 flex justify-between">
                <h4 class="text-2xl font-bold text-gray-700 px-6 place-self-center">Usuarios Registados</h4>
                <div class="flex gap-2">
                    <button @click="abrirModalRegistro"
                    class="my-2 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-50 hover:bg-purple-accent-700">Agregar nuevo usuario</button>
                </div>
            </div>
            <suspense>
                <DataTableUsers/>
            </suspense>
        </div>
    </div>
</template>

<script>
import DataTableUsers from '../../components/admin/DataTableUsers.vue'
//import { openModal } from "jenesius-vue-modal";
//import ModalRegistro from '../../components/Admin/ModalRegistro.vue'
export default {
    components: {DataTableUsers},
    methods: {
        abrirModalRegistro(){
          //  openModal(ModalRegistro)
          this.$router.push('/admin/registro')
        }
    }
}
</script>