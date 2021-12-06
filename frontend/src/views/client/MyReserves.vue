<template>
    <div class="flex flex-col h-full">
        <div class="flex flex-col">
            <div class="px-4 py-2 flex justify-between">
                <h4 class="text-2xl font-bold text-gray-700 px-6 place-self-center">LISTA DE DOCUMENTOS</h4>
            </div>
            <suspense>
                <DataTableMyDocs/>
            </suspense>
        </div>
    </div>
</template>

<script>
import DataTableMyDocs from '../../components/client/DataTableMyDocs.vue'
//import { openModal } from "jenesius-vue-modal";
//import ModalRegistro from '../../components/Admin/ModalRegistro.vue'
export default {
    components: {DataTableMyDocs},
}
</script>