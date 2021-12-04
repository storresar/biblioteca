<template>
    <div class="flex flex-col ">
        <div class="overflow-x-auto overflow-y-hidden">
            <div class="py-2 align-middle inline-block min-w-full lg:px-4">
            <div class=" overflow-hidden border rounded shadow border-gray-200">
                <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Fecha de reserva:
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tipo de reserva:
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Detalles reserva
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Abrir (Documento)
                    </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="doc in paginated" :key="doc">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                        <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                            {{doc.reservation_date}}
                            </div>
                        </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div v-if="doc.id_type_stock == 1" class="text-sm text-gray-500">FISICA</div>
                        <div v-if="doc.id_type_stock == 2" class="text-sm text-gray-500">VIRTUAL</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button v-on:click="visualizarInfo(doc.id, doc.id_type_stock)" class="bg-red-150 hover:bg-red-450 text-white font-bold py-2 px-4 rounded">
                            VER DETALLES
                        </button>
                    </td>
                    <td @click="infoDoc(doc.id_document)"  class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button class="bg-red-150 hover:bg-red-450 text-white font-bold py-2 px-4 rounded">
                            VISUALIZAR
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
import useReserve from '@/store/useReserve.js'
import useClients from "@/store/useClients.js"
import useDoc from "@/store/useDoc.js"
import { openModal } from "jenesius-vue-modal";
import InfoP from '@/components/client/InfoP.vue'
import InfoV from '@/components/client/InfoV.vue'
import ModalDoc from '@/components/client/ModalDoc.vue'
import { computed,ref } from 'vue'
    export default {
        methods: {
            async visualizarInfo(id, type){
                if(type == 1){
                    const store = useReserve()
                    await store.getP_reserve(id)
                    const reserve = computed(() => store.resevation)
                    console.log(reserve.value)
                    openModal(InfoP,{info: reserve.value})
                }else{
                    const store = useReserve()
                    await store.getV_reserve(id)
                    const reserve = computed(() => store.resevation)
                    console.log(reserve.value)
                    openModal(InfoV,{info: reserve.value})
                }
            },
            async infoDoc(id_doc){
                const store = useDoc()
                await store.getDocument(id_doc)
                const doc = computed(() => store.document)
                if (doc.value.id_type_doc == 1){
                    await store.getBook(id_doc)
                    const book = computed(() => store.book)
                    console.log(book.value)
                    openModal(ModalDoc, {info: doc.value,book: book.value,lecture: undefined,article: undefined})
                } else if (doc.value.id_type_doc == 2){
                    await store.getLecture(id_doc)
                    const lecture = computed(() => store.lecture)
                    console.log(lecture.value)
                    openModal(ModalDoc, {info: doc.value,book: undefined,lecture: lecture.value,article: undefined})
                } else if (doc.value.id_type_doc == 2){
                    await store.getScientific(id_doc)
                    const article = computed(() => store.scientific)
                    console.log(article.value)
                    openModal(ModalDoc, {info: doc.value,book: undefined, lecture: undefined,article: article.value})
                }
            }
        },
        async setup() {
        const storeclients = useClients()
        await storeclients.getClient(window.localStorage.getItem('userId'));
        const store = useReserve()
        await store.getMyReservations(storeclients.client.id)
        const docs = computed(() => store.resevations)
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
        }   
    }
</script>
