<template>
    <div class="bg-gray-300 rounded shadow flex flex-col h-full">
        <div class="flex flex-col">
            <div class="px-4 py-2 flex justify-between">
                <h4 class="text-2xl font-bold text-gray-700 px-6 place-self-center">MIS DOCUMENTOS</h4>
                <div class="flex gap-2">
                    <button @click="openDocModal()"
                    class="my-2 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-50 hover:bg-purple-accent-700">Crear un nuevo documento</button>
                </div>
            </div>
            <suspense>
                <DataTableAuthorDocs/>
            </suspense>
        </div>
    </div>
</template>

<script>
import DataTableAuthorDocs from '@/components/client/author/DataTableAuthorDocs.vue'
import { openModal } from "jenesius-vue-modal";
import ModalNewDoc from '@/components/client/author/ModalNewDoc.vue'
export default {
    components: {DataTableAuthorDocs},
    methods: {
        openDocModal(){
            openModal(ModalNewDoc)
        }
    }
}
</script>