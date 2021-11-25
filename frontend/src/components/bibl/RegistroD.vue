<template>
<div class="grid min-h-screen place-items-center">
  <div class="w-72 sm:w-96 px-12 py-4 bg-white ">
    <form class="mt-6" @submit.prevent="submit">
      <div class="flex flex-col justify-between gap-3">
        <span class="w-full ">
          <label for="titulo" class="block text-xs font-semibold text-gray-600 uppercase">Título</label>
          <input id="titulo" type="text" name="titulo"  v-model="titulo" required
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
        </span>
        <span class="w-full ">
          <label for="tipo" class="block text-xs font-semibold text-gray-600 uppercase">Tipo</label>
          <select v-model="type_document"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 focus:outline-none focus:bg-gray-300 focus:shadow-inner">
            <option v-for="item of options" :key="item" :value="item">{{item}}</option>
          </select>
        </span>
        <span class="w-full">
          <label for="documentof" class="block text-xs font-semibold text-gray-600 uppercase">Número de documentos físicos</label>
        </span>
        <span class="flex">
          <button @click="decrement" class="flex-initial block w-1/3 p-1 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner">
            <span class="m-auto text-2xl font-thin">−</span>
          </button>
          <input v-model="docf" type="number" class="flex-initial block w-1/3 p-1 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner text-center" name="custom-input-number"/>
          <button @click="increment" class="flex-initial block w-1/3 p-1 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner">
            <span class="m-auto text-2xl font-thin">+</span>
          </button>
        </span>
      </div>
      <label for="descripción" class="block mt-2 text-xs font-semibold text-gray-600 uppercase mb-2">Descripción</label>
      <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  h-48 resize-none focus:bg-gray-300 focus:shadow-inner" required id="message"></textarea>
       <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
        Registrar
      </button>   
      
    </form>
  </div>
</div>
</template>
<style scoped>
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .custom-number-input input:focus {
    outline: none !important;
  }

  .custom-number-input button:focus {
    outline: none !important;
  }
</style>

<script>
import { ref } from "vue"
export default{
  setup() {
    const docf = ref(0);
    function decrement() {
      if(docf.value>0){
        docf.value-=1;
      }
    }

    function increment() {
      docf.value+=1;
    }

    return{
      docf,
      increment,
      decrement,
    }
  },
}
</script>
