<template>
    <div class="flex flex-col ">
        <div class="overflow-x-auto overflow-y-hidden">
            <div class="py-2 align-middle inline-block min-w-full lg:px-4">
            <div class=" overflow-hidden border rounded shadow border-gray-200">
                <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Título
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Fecha de publicación
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Autor creador
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Estado
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Opciones    
                    </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="document in paginated" :key="document.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                        <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                            {{document.title}}
                            </div>
                        </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">{{document.publication_date}}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">{{document.id_author}}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">{{estado(document.state)}}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div class="flex justify-evenly align-middle">
                            <button @click="modificarDoc(document)"
                            class="bg-red-150 hover:bg-red-450 text-white font-bold py-2 px-4 rounded">
                                MODIFICAR
                            </button>
                            <button @click="deleteDocument(document)"
                            class="bg-red-150 hover:bg-red-450 text-white font-bold py-2 px-4 rounded">
                                ELIMINAR
                            </button>
        
                        </div>
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
                    <span v-if="end < docs.length" class="font-medium">{{end}}</span>
                    <span v-else class="font-medium">{{docs.length}}</span>
                    de
                    <span class="font-medium">{{docs.length}}</span>
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
import { computed, ref, inject } from 'vue'
import useDoc from "@/store/useDoc.js"
import { openModal } from 'jenesius-vue-modal'
import ModalEditDocVue from '@/components/client/author/ModalEditDoc.vue'

export default {
    async setup() {
        const swal = inject('$swal')
        const docs = useDoc()
        await docs.getDocuments()
        const documentos = computed(() => docs.documents)
        const nPages = 8
        const begin = ref(0)
        const end = ref(nPages)
        const paginated = computed(() => documentos.value.slice(begin.value, end.value))
        const backPage = () => {
            if (begin.value !== 0) begin.value -= nPages
            else begin.value = 0
            end.value = begin.value + nPages
        }
        const modificarDoc = async (doc) => {
            let datos;
            switch (doc.id_type_doc) {
                case 1: {
                    const book = await docs.getBook(doc.id);
                    datos = { doc: { ...doc }, book: { ...book } };
                    break;
                }
                case 2: {
                    const article = await docs.getArticle(doc.id);
                    datos = { doc: { ...doc }, article: { ...article } };
                    break;
                }
                case 3: {
                    const thesis = await docs.getThesis(doc.id);
                    datos = { doc: { ...doc }, thesis: { ...thesis } };
                    break;
                }
                default: break;
            }
            openModal(ModalEditDocVue, { documento: datos });
        }
        const deleteDocument = (doc) => {
            swal({
                title: '¿Estás seguro?',
                text: 'Esta acción no se puede deshacer',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar',
                cancelButtonText: 'No, cancelar',
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    await docs.deleteDocument(doc)
                    await docs.getDocuments()
                    swal('Eliminado', 'El documento ha sido eliminado', 'success')
                } else if (result.isCancelled) {
                    swal('Cancelado', 'El documento no ha sido eliminado', 'error')
                }
            }).catch(err => {
                console.log(err)
                swal('Error', 'El documento no ha sido eliminado', 'error')
            })
        }
        
        const estado = (state) => {
            switch(state) {
                case 'P':
                    return 'Publicado'
                case 'E':
                    return 'En espera'
                case 'R':
                    return 'Rechazado'
                default: return 'Desconocido' 
            }
        }
        const fowardPage = () => {
            if (begin.value >= 0 && begin.value+nPages <= documentos.value.length) {
                begin.value += nPages
            } else{
                begin.value = 0
            }
            end.value = begin.value + nPages
        }
        return {
            docs: documentos.value,
            paginated, backPage, fowardPage,
            begin, end, deleteDocument,
            estado, modificarDoc
        }
    },
}
</script>