<template>
    <div id="app">
		<!--Sidebar with Dimmer -->
		<div class="relative inset-0 flex z-40">
			<!-- Sidebar -->
			<div
				class="absolute flex top-0 h-screen z-20"
				:class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
			>
				<!--Drawer -->
				<button
					@click.prevent="toggle()"
					class="w-12 h-48 p-1 my-auto rounded text-white bg-gray-600 text-center focus:outline-none hover:bg-gray-500 transition-color duration-300"
				>
					<span
						:class="[right ? '-rotate-90' : 'rotate-90']"
						class="block transform origin-center font-bold"
					>
						OPCIONES
					</span>
				</button>

				<!-- Sidebar Content -->
				<div
					ref="content"
					class="transition-all duration-700 bg-black overflow-hidden flex  justify-center"
					:class="[open ? 'max-w-lg' : 'max-w-0']"
				>
					<div class="w-60  font-normal text-sm">
						<nav>
						<ul class="space-y-4 space-x-6">
						<li class=""></li>
						<li class="text-white space-x-6">CLIENTE</li>
						<li>
						<router-link to="/client/reserve" class="ml-2 font-medium tracking-wide text-white transition-colors duration-200 hover:text-red-50 flex gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
							<p>RESERVAR</p>
						</router-link>
						</li>
						<li>
						<router-link  to="/client/myReserves" class="ml-2 font-medium tracking-wide text-white transition-colors duration-200 hover:text-red-50 flex gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
						</svg>
							<p>MIS RESERVAS</p>
						</router-link>
						</li>
						<div v-if="!es_autor" class="w-60  font-normal text-sm">
							<button v-on:click="createPetition"
							class="ml-2 inline-flex items-center justify-center  h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-50 hover:bg-purple-accent-700">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
								</svg>
								Quiero ser autor
							</button>
						</div>
						<div v-if="es_autor" class="w-60  font-normal text-sm">
							<li class="text-white space-x-6">DOCUMENTOS</li>
							<li>
							<router-link to="/client/myDocs" class="ml-2 font-medium tracking-wide text-white transition-colors duration-200 hover:text-red-50 flex gap-2">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
								<p>Lista de documentos</p>
							</router-link>
							</li>
						</div>
						<li class="text-white">CUENTA</li>
						<li>
						<router-link :to="{name:'VerPerfil'}" class="ml-2 font-medium tracking-wide text-white transition-colors duration-200 hover:text-red-50 flex gap-2">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
							</svg>
							<p>Ver perfil</p>
						</router-link>
						</li>
					</ul>
					</nav>
					</div>
					
					<slot></slot>
				</div>
			</div>

			<transition name="fade">
				<!-- Dimmer -->
				<div
					v-if="dimmer && open"
					@click="toggle()"
					class="flex-1 bg-gray-400 bg-opacity-75 active:outline-none z-10"
				/>
			</transition>
		</div>

	</div>
</template>
<script>
import { mapActions } from 'pinia'
import useClients from "@/store/useClients.js"

    export default {
        data() {
            return {
                open: false,
                dimmer: true,
                right: false,
				es_autor: undefined,
            };
        },
        methods: {
			...mapActions(useClients, ['createPetitionAuthor']),
            toggle() {
                this.open = !this.open;
            },
			async createPetition(){
				const store = useClients()
				this.$swal.fire({
					title: 'Espere un momento',
					html: 'Estamos realizando la transacion',
					allowOutsideClick: false,
					didOpen: () => {
						this.$swal.showLoading()
					}
				});
				await store.getClient(window.localStorage.getItem('userId'));
				await store.getPetition(store.client.id);
				if (store.petition == undefined){
					const info = {
					id_client: store.client.id,
					state: 'E',
					}
					this.createPetitionAuthor(info)
					.then(() => this.$swal('FELICIDADES', 'SE REALIZO LA PETICIÓN CORRECTAMENTE','success'))
				}else{
					this.$swal('Error', 'YA TIENE UNA PETICIÓN HECHA','error')
				}
			}
        },
        computed:{
        },
		async created (){
			const store = useClients()
            await store.getClient(window.localStorage.getItem('userId'));
			console.log(store.client.is_author)
			this.es_autor = store.client.is_author	
		},

    };
</script>

<style>
    html {
        background: #efefef;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s ease-out;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>