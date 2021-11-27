<template>
    <div class="admin">
        <Sidebar/>
        <NavbarUser/>
        <router-view class="mx-12 my-2"/>
    </div>
</template>


<script>
import Sidebar from '@/components/Sidebar.vue'
import NavbarUser from '@/components/NavbarUser.vue'


export default {
    name: 'Admin',
    components: {
        Sidebar,
        NavbarUser
    }
}
</script>
