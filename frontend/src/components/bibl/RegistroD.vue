<template>
<div class="grid min-h-screen place-items-center">
  <div class="w-72 sm:w-96 px-12 py-4 bg-white ">
    <form class="mt-6" @submit.prevent="submit">
      <div class="flex flex-col justify-between gap-3">
        <span class="w-full ">
          <label for="titulo" class="block text-xs font-semibold text-gray-600 uppercase">Titulo</label>
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

