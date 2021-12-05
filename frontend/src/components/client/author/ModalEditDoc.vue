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
                Título
            </label>
            <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Título del documento" v-model="datos.doc.title">
        </div>
        <div class="mb-4">
            <label class="block text-white text-sm font-bold" for="username">
                Correo de contacto
            </label>
            <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Correo de contacto" v-model="datos.doc.email_contact">
        </div>
        <div class="mb-2">
            <label class="block text-white text-sm font-bold" for="username">
                Número de contacto
            </label>
            <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Número de contacto" v-model="datos.doc.phone">
        </div>
        <div class="mb-2">
            <label class="block text-white text-sm font-bold" for="username">
                Tipo de documento
            </label>
            <select v-model.number="datos.doc.id_type_doc" disabled
                 class="block w-full bg-gray-200 border transition-colors duration-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option value="1">Libro</option>
                <option value="2">Lectura</option>
                <option value="3">Articulo cientifico</option>
            </select>
        </div>
        <div v-if="datos.doc.id_type_doc == 1">
            <div class="mb-2">
                <label class="block text-white text-sm font-bold" for="username">
                   ISBN
                </label>
                <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder="Número de ISBN" v-model="datos.book.isbn">
            </div>
            <div class="mb-2">
                <label class="block text-white text-sm font-bold" for="username">
                   Total de páginas
                </label>
                <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="number" placeholder="Número de páginas" v-model="datos.book.total_pages">
            </div>
        </div>
        <div v-if="datos.doc.id_type_doc == 2">
            <div class="mb-2">
                <label class="block text-white text-sm font-bold" for="username">
                   ISBN
                </label>
                <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder="Número de ISBN" v-model="datos.article.isbn">
            </div>
            <div class="mb-2">
                <label class="block text-white text-sm font-bold" for="username">
                   Nombre del congreso
                </label>
                <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder="Nombre del congreso" v-model="datos.article.congreso">
            </div>
        </div>
        <div v-if="datos.id_type_doc == 3">
            <div class="mb-2">
                <label class="block text-white text-sm font-bold" for="username">
                   SSN
                </label>
                <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder="Nombre del SSN" v-model="datos.thesis.ssn">
            </div>
        </div>
        <div class="flex items-center justify-center  mb-2">
            <button
            class="bg-white hover:bg-red-50 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 hover:text-white"
            type="button" @click="actualizar()">
                actualizar
            </button>
        </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
        &copy;2021 Doculib. Todos los derechos reservados.
    </p>
    </div>
</template>

<script>
import { closeModal } from "jenesius-vue-modal";
import { reactive, inject} from 'vue'
import useDoc from "@/store/useDoc.js"
export default {
    props: {
        documento: {
            type: Object,
        }
    },
    setup(props) {
        const swal = inject('$swal')
        const docs = useDoc()
        const datos = reactive({...props.documento})
        console.log(datos)
        const closeLoginModal = () => {
            closeModal();
        }; 
        const actualizar = async () => {
            swal.fire({
                title: 'Espere un momento',
                html: 'Estamos realizando la transacion',
                allowOutsideClick: false,
                didOpen: () => {
                    swal.showLoading()
                }
            });
            const doc = {...datos.doc}
            docs.updateDocument(doc)
            .then(() => {
                    if(datos.tipo == 1){
                        const book = {...datos.book}
                        book.id_doc = datos.doc.id
                        docs.updateDocument(book)
                    }else if (datos.tipo == 2){
                        const lecture = {...datos.lecture}
                        lecture.id_doc = datos.doc.id
                        docs.updateDocument(lecture)
                    }else if (datos.tipo == 3){
                        const scientific = {...datos.scientific}
                        scientific.id_doc = datos.doc.id
                        docs.createScientific(scientific)
                    }
                   swal.fire({title: 'Modificacion exitosa', icon:'success'})
                   closeModal();
                })
            .catch(error => {
            swal.fire({title: 'Error modificando el usario', icon:'error'})
            console.error(error);
            })
        }
        return{
            closeLoginModal,
            datos,
            actualizar
        }
    },
}
</script>
