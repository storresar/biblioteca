<template>
    <div>
        <SidebarClient />
        <NavbarUser/>
        <router-view class="mx-12 my-2"/>
    </div>
</template>

<script>
    import useUsers from "@/store/useUsers.js"
    import SidebarClient from '@/components/client/SidebarClient.vue'
    import NavbarUser from '@/components/NavbarUser.vue'
    export default {
    name: 'Client',
    components: {
        SidebarClient,
        NavbarUser
    },
    methods:{
        async usuario() {
            const store = useUsers()
            await store.getUser(window.localStorage.getItem('userId'))
            console.log(store)
        }
    },
}
</script>
