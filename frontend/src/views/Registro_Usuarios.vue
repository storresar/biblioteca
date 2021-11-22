<template>
  <div class="registro grid grid-rows-2 sm:grid-rows-1 md:grid-cols-3">
    <img src="" alt="Perrito" class="place-self-center hidden md:block">
    <Registro class="col-span-2 place-self-stretch"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Registro from '@/components/Registro.vue'

export default {
  
  components: {
    Registro,
  },
}
</script>
