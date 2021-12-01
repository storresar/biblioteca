<template>
  <div class="bg-black">
    <div class="registro grid place-items-center bgFondo">
      <!--- izquierda
      <img src="https://www.wallpapertip.com/wmimgs/42-425055_src-large-library-background-data-id-hd-wallpaper.jpg" alt="Perrito"
      class="place-self-center w-full hidden md:block h-full">
      --- derecha -->
      <Registro/>
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

<style scoped>

.bgFondo{
  background-image: url("https://images6.alphacoders.com/389/thumb-1920-389877.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
}

</style>