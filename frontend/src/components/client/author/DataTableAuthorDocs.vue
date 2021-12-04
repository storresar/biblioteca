<template>
    <div class="flex flex-col ">
        <div class="overflow-x-auto overflow-y-hidden">
            <div class="py-2 align-middle inline-block min-w-full lg:px-4">
            <div class=" overflow-hidden border rounded shadow border-gray-200">
                <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nombre documento
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tipo
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Fecha de publicacion
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cantidad Fisica
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cantidad virtual
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        PUBLICAR
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        EDITAR
                    </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="doc in paginated" :key="doc">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                        <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                            {{doc.title}}
                            </div>
                        </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div v-if="doc.id_type_doc == 1" class="text-sm text-gray-500">Libro</div>
                        <div v-if="doc.id_type_doc == 2" class="text-sm text-gray-500">Lectura</div>
                        <div v-if="doc.id_type_doc == 3" class="text-sm text-gray-500">Articulo cientifico</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">{{doc.publication_date}}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">{{doc.physical_stock}}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">{{doc.virtual_stock}}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button v-on:click="reserveDocumentPhysic(doc.id)" class="bg-red-150 hover:bg-red-450 text-white font-bold py-2 px-4 rounded">
                            PUBLICAR
                        </button>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button v-on:click="reserveDocumentVirtual(doc.id)" class="bg-red-150 hover:bg-red-450 text-white font-bold py-2 px-4 rounded">
                            EDITAR
                        </button>
                    </td>
                    </tr>                        
                </tbody>
                </table>
            </div>
            </div>
        </div>
        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 lg:mx-4 shadow-md rounded">
            <div class="flex-1 flex justify-between sm:hidden">
                <button @click="backPage"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Anterior
                </button>
                <button @click="fowardPage"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Siguiente
                </button>
            </div>
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                <p class="text-sm text-gray-700">
                    Mostrando
                    <span class="font-medium">{{begin}}</span>
                    hasta
                    <span v-if="end < documents.length" class="font-medium">{{end}}</span>
                    <span v-else class="font-medium">{{documents.length}}</span>
                    de
                    <span class="font-medium">{{documents.length}}</span>
                    resultados
                </p>
                </div>
                <div>
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button @click="backPage" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <!-- Heroicon name: solid/chevron-left -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    </button>
                    <button @click="fowardPage" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <!-- Heroicon name: solid/chevron-right -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                    </button>
                </nav>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import useDoc from "@/store/useDoc.js"
import useReserve from '@/store/useReserve.js'
import { computed,ref } from 'vue'
import { mapActions } from 'pinia'
import useClients from "@/store/useClients.js"
export default {
    methods:{
         ...mapActions(useReserve, ['createResevation']),
        async reserveDocumentPhysic(id_document){
            const store = useClients()
            await store.getClient(window.localStorage.getItem('userId'));	
            await this.createResevation({
                id_document: id_document,
                id_client: store.client.id,
                id_type_stock: 1
            })
        },
        async reserveDocumentVirtual(id_document){
            const store = useClients()
            await store.getClient(window.localStorage.getItem('userId'));	
            await this.createResevation({
                id_document: id_document,
                id_client: store.client.id,
                id_type_stock: 2
            })
        }
    },
    async setup() {
        const store = useDoc()
        await store.getMyDocuments(window.localStorage.getItem('userId'))
        const docs = computed(() => store.documents)
        const nPages = 8
        const begin = ref(0)
        const end = ref(nPages)
        const paginated = computed(() => docs.value.slice(begin.value, end.value))
        const backPage = () => {
            if (begin.value !== 0) begin.value -= nPages
            else begin.value = 0
            end.value = begin.value + nPages
        }
        const fowardPage = () => {
            if (begin.value >= 0 && begin.value+nPages <= docs.value.length) {
                begin.value += nPages
            } else{
                begin.value = 0
            }
            end.value = begin.value + nPages
        }
         return{
            documents: docs.value,
            paginated, backPage, fowardPage,
            begin, end
         }
    },
}
</script>
