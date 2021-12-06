<template>
    <div class="flex flex-col h-full">
        <div class="flex flex-col">
            <div class="px-4 py-2 flex justify-between">
                <h4 class="text-2xl font-bold text-gray-700 px-6 place-self-center">
                    Datos  de solicitud de usuarios para ser autores
                </h4>
            </div>
            <suspense>
                <DataTableAuthorRequests/>
            </suspense>
        </div>
    </div>
</template>

<script>

import DataTableAuthorRequests from '@/components/admin/DataTableAuthorRequests.vue'

export default {
    components: {
        DataTableAuthorRequests
    },
}
</script>