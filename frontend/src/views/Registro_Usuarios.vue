<template>
  <div class="bg-black">
    <div class="registro grid grid-rows-2 sm:grid-rows-1 md:grid-cols-3">
      <img src="https://www.wallpapertip.com/wmimgs/42-425055_src-large-library-background-data-id-hd-wallpaper.jpg" alt="Perrito" class="place-self-center w-full hidden md:block">
      <Registro class="col-span-2 place-self-stretch"/>
    </div>
    <Footer/>
  </div>

</template>

<script>
// @ is an alias to /src
import Registro from '@/components/Registro.vue'
import Footer from '@/components/Footer.vue'

export default {
  
  components: {
    Registro,
    Footer,

  },
}
</script>
