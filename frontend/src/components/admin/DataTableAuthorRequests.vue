<template>
    <div class="flex flex-col ">
        <div class="overflow-x-auto overflow-y-hidden">
            <div class="py-2 align-middle inline-block min-w-full lg:px-4">
            <div class=" overflow-hidden border rounded shadow border-gray-200">
                <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nombre
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Usuario
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Correo
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Opciones
                    </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="user in paginated" :key="user">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                {{user.user.first_name}} {{user.user.last_name}}
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                        <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                            {{user.user.username}}
                            </div>
                        </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">{{user.user.email}}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Popper placement="left">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-800 hover:text-gray-500 transition-colors duration-200" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <template #content>
                                <div class=" flex flex-col gap-2 rounded-md py-2 px-4">
                                    <button @click="aceptRequest(user.id)"
                                    class="px-4 py-2 text-white transition duration-200 rounded shadow-md bg-red-50 hover:bg-deep-purple-accent-100 hover:text-black focus:shadow-outline focus:outline-none">
                                        Aceptar solicitud
                                    </button>
                                </div>
                                <div class=" flex flex-col gap-2 rounded-md py-2 px-4">
                                    <button @click="rejectRequest(user.id)"
                                    class="px-4 py-2 text-white transition duration-200 rounded shadow-md bg-red-50 hover:bg-deep-purple-accent-100 hover:text-black focus:shadow-outline focus:outline-none">
                                        Rechazar solicitud
                                    </button>
                                </div>
                            </template>
                        </Popper>
                        
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
                    <span v-if="end < data.length" class="font-medium">{{end}}</span>
                    <span v-else class="font-medium">{{data.length}}</span>
                    de
                    <span class="font-medium">{{data.length}}</span>
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
import { computed, ref, inject, reactive } from 'vue'
import useClients from "@/store/useClients.js"
import useUsers from "@/store/useUsers.js"
import useAuthRequests from "@/store/useAuthRequests.js"
import Popper from "vue3-popper";
export default {
    components: {
      Popper,
    },
    async setup() {
        const swal = inject("$swal")
        swal.fire({
          title: 'Espere un momento',
          html: 'estamos cargando la lista',
          allowOutsideClick: false,
          didOpen: () => {
            swal.showLoading()
          }
        });
        const data = reactive([])
        const authReq = useAuthRequests()
        const clients = useClients()
        const users = useUsers()
        await authReq.getRequests()

        await authReq.requests.forEach(async request => {
            if (request.state == "E") {
                let client = await clients.getClientById(request.id_client)
                let user = await users.getUser(client.id_user)
                data.push({
                    id: request.id,
                    client: client,
                    user: user,
                })
            }
        })

        const nPages = 8
        const begin = ref(0)
        const end = ref(nPages)
        const paginated = computed(() => data.slice(begin.value, end.value))
        const backPage = () => {
            if (begin.value !== 0) begin.value -= nPages
            else begin.value = 0
            end.value = begin.value + nPages
        }
        const fowardPage = () => {
            if (begin.value >= 0 && begin.value+nPages <= data.length) {
                begin.value += nPages
            } else{
                begin.value = 0
            }
            end.value = begin.value + nPages
        }

        const aceptRequest = async (id) => {
            swal.fire({
                title: 'Espere un momento',
                html: 'estamos tratando la solicitud',
                allowOutsideClick: false,
                didOpen: () => {
                    swal.showLoading()
                }
            });
            let request = await authReq.getRequest(id)
            request.state = "A"
            await authReq.updateRequest(request)
            swal.fire("Exito", "La solicitud ha sido aceptada", "success")
        }
        const rejectRequest = async (id) => {
            swal.fire({
                title: 'Espere un momento',
                html: 'estamos tramitando la solicitud',
                allowOutsideClick: false,
                didOpen: () => {
                    swal.showLoading()
                }
            })
            let request = await authReq.getRequest(id)
            request.state = "R"
            await authReq.updateRequest(request)
            swal.fire("Exito", "La solicitud ha sido rechazada", "success")
        }
        
        swal.close()
        return {
            paginated, backPage, fowardPage,
            begin, end, aceptRequest, rejectRequest,
            data,
        }
    },
}
</script>