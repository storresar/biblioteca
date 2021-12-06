<template>
    <nav class="bg-black">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
        
        <div class="flex-1 sm:flex items-center justify-center hidden sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-11 w-auto" src="/Doculib.png" alt="Workflow">
            <img class="hidden lg:block h-11 w-auto" src="/Doculib.png" alt="Workflow">
            </div>
        </div>
        <div class="absolute gap-3 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <!-- Profile dropdown -->
             <p class="text-white text-xs">USUARIO: {{username.toUpperCase()}}</p>
            <div class="ml-3 relative">

            <div>
                <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <img class="h-8 w-8 rounded-full" src="https://cdn.iconscout.com/icon/free/png-256/laptop-user-1-1179329.png" alt="">
                </button>
            </div>
        </div>
        <button @click="logout()"
            class="rounded border-2 border-red-450 px-3 py-1 h-8  text-sm text-white shadow-lg hover:bg-red-450">
            Cerrar Sesión</button>
            </div>
        </div>
    </div>

    </nav>
</template>
<script>
export default {


    data(){
        return {
            username: "",
        }
    },
    methods:{
        logout(){  
            window.localStorage.clear()
            this.$router.push("/")
        },
        getUserName: async () => {
            const apiUrl = process.env.NODE_ENV === 'production' ?
            'https://doculib.herokuapp.com/roro/' : 'http://localhost:8000/roro/';
            const response = await fetch(`${apiUrl}users/${localStorage.getItem('userId')}/`)
            const data = await response.json()
            return data.username
        }
    },
    mounted(){
        this.getUserName()
        .then(data => {
            this.username = data
        })
    }
}
</script>
