import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import data from './store'
import datas from './store/index'
import Vuelidate from 'vuelidate'
// import 'bootstrap4/css/bootstrap.css'
Vue.use(Vuelidate)
// use {xxxx} to specify a certain method
// Vue.config.productionTip = false

new Vue({
  store:datas,
  router,
  render: h => h(App)
}).$mount('#app')
