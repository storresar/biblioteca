import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/admin/Admin.vue'
import Client from '../views/client/Client.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/client',
    component: Client,
    children:[
      {
        path: 'reserve',
        component: () => import(/* webpackChunkName: "about" */ '../views/client/DocumentList.vue'),
      },
      {
        path: 'myReserves',
        component: () => import(/* webpackChunkName: "about" */ '../views/client/MyReserves.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: Admin,
    children: [
      {
        path: 'userlist',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/UserListPage.vue'),
      },
      {
        path: 'registro',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Registro.vue'),
      },
      {
        path: 'editUser/:id',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/EditUser.vue'),
      },
    ]
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
