import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
