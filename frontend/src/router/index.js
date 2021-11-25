import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    component: Admin
  },
  {
    path: '/usuario',
    component: () => import(/* webpackChunkName: "about" */ '../views/Usuario.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/Registro_Usuarios.vue')
  },
  {
    path: '/registro_documento',
    name: 'RegistroD',
    component: () => import('../views/Registro_Documento.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router
