import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import Vue from "vue";
import VueRouter from 'vue-router'



createApp(App).use(router).mount('#app')
Vue.use(VueRouter)