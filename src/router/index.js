import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import App from '../App.vue'
import Contact from '../components/Contact.vue'
import About from '../components/About.vue'
import form from '../components/formValidate.vue'
import admin from '../components/admin.vue'
import customer from '../components/customer.vue'
import customerCart from '../components/customerCart.vue'
import adminLogin from '../components/adminLogin.vue'
import cartTable from '../components/cartTable.vue'
import comeback from '../components/comeback.vue'
import customerCartTable from '../components/customerCartTable.vue'
import signup from '../components/Signup.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sup',
    // name: 'Home',
    component: signup
  },
  {
    path: '/check',
    // name: 'Home',
    component: comeback
  },
  {
    path: '/customer',
    name: 'customer',
    component: customer
  },
  {
    path: '/App',
    name: 'App',
    component: App
  },
  {
    path: '/About/:teamId',
    name: 'About',
    component:About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    name:'Contact',
    path:'/Contact',
    component:Contact
  },
  {
    name:'customerCartTable',
    path:'/cct',
    component:customerCartTable
  },
  {
    name:'Table',
    path:'/table',
    component:cartTable
  },
  {
    name:'admin',
    path:'/admin',
    component:admin
  },
  {
    name:'Contact',
    path:'/form',
    component:form
  },
  {
    name:'Cart',
    path:'/cart',
    component:customerCart
  },
  {
    name:'adminLogin',
    path:'/adminlogin',
    component:adminLogin
  }
  
  //  
  
  //   name:'About',
  //   path:'/About',
  //   component:About
  // }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
