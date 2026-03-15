import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'
import Catalog from '@/pages/Catalog.vue'
import About from '@/pages/About.vue'
import Account from '@/pages/Account.vue'
import Adminka from '@/pages/Adminka.vue'
import AddProduct from '@/components/AddProduct.vue'
import EditProducts from '@/components/EditProducts.vue'
import Users from '@/components/Users.vue'
import Registration from '@/components/Registration.vue'
import Login from '@/components/Login.vue'
import LargeProductCard from '@/components/LargeProductCard.vue'
import UserAccount from '@/components/UserAccount.vue'

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
      path: '/product/:id',
      component: LargeProductCard,
      name: "product-detail",
      // beforeEnter: (to) => {
      //   const id = Number(to.params.id);
      //   if (isNaN(id)) {
      //     return { name: 'catalog' }; //TODO 404
      //   }
      // }
    },
    {
      path: '/account',
      component: Account,
      name: "account",
      children: [
        {path: 'createUser', component: Registration, name: 'registration'},
        {path: 'login', component: Login, name: 'login'},
        {path: '/user/:login', component: UserAccount, name: 'user-account'},
      ]
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
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "catalog" } //TODO to page 404
    }
  ],
})

export default router
