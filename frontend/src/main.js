import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueRecaptcha from "vue3-recaptcha-v2";

createApp(App).use(router).use(createPinia()).use(VueSweetalert2).use(VueRecaptcha, {
    siteKey: "6Ld3Y-wcAAAAAJOH0wFvfqG53ob76ilO7B2TQHMZ",
    alterDomain: false, // default: false
  }).mount('#app')




