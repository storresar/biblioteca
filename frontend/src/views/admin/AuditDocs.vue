<template>
    <div class="flex flex-col h-full">
        <div class="flex flex-col">
            <div class="px-4 py-2 flex justify-between">
                <h4 class="text-2xl font-bold px-6 place-self-center">Auditoría de documentos</h4>
            </div>
            <suspense>
                <DataTableAudit/>
            </suspense>
        </div>
    </div>
</template>

<script>
import DataTableAudit from '../../components/admin/DataTableAudit.vue'

export default {
    components: {
        DataTableAudit
    },
}
</script>