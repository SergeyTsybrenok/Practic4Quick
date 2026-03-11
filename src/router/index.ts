import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'
import Catalog from '@/pages/Catalog.vue'
import About from '@/pages/About.vue'
import Account from '@/pages/Account.vue'
import Adminka from '@/pages/Adminka.vue'
import AddProduct from '@/components/AddProduct.vue'
import EditProducts from '@/components/EditProducts.vue'
import Users from '@/components/Users.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index,
      name: "home"
    },
    {
      path: '/about',
      component: About,
      name: "about"
    },
    {
      path: '/catalog',
      component: Catalog,
      name: "catalog"
    },
    {
      path: '/account',
      component: Account,
      name: "account"
    },
    {
      path: '/adminka',
      component: Adminka,
      name: "adminka",
      children: [
        {path: 'addProduct', component: AddProduct, name: 'addProduct'},
        {path: 'editProducts', component: EditProducts, name: 'editProducts'},
        {path: 'users', component: Users, name: 'users'},
      ]
    },
  ],
})

export default router
