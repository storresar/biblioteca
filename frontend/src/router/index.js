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
      {
        path: 'myDocs',
        component: () => import(/* webpackChunkName: "about" */ '@/views/client/author/MyListDocument.vue'),
      }
      ,
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
      {
        path: 'auditlist',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/AuditDocs.vue'),
      },
      {
        path: 'docslist',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/DocsListPage.vue'),
      },
      {
        path: 'authorlist',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/AuthorRequests.vue'),
      },
      {
        path: 'docsrequests',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/DocsRequests.vue'),
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
  },
  {
    path: '/ver_perfil',
    name: 'VerPerfil',
    component: () => import('../views/VerPerfil.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router
