<template>
    <NavbarUser/>
    <suspense>
        <VerPerfil/>
    </suspense>
</template>

<script>
import VerPerfil from '@/components/VerPerfil.vue'
import NavbarUser from '@/components/NavbarUser.vue'


export default {
    components: {
        VerPerfil,
        NavbarUser
    },

        
}
</script>