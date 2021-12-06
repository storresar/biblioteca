<template>
    <div class="flex flex-col h-full">
        <div class="flex flex-col">
            <div class="px-4 py-2 flex justify-between">
                <h4 class="text-2xl font-bold px-6 place-self-center">Lista de documentos</h4>
            </div>
            <suspense>
                <DataTableDocs/>
            </suspense>
        </div>
    </div>
</template>

<script>
import DataTableDocs from '../../components/admin/DataTableDocs.vue'

export default {
    components: {
        DataTableDocs
    },
}
</script>