import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import store from './store'
import VueSession from 'vue-session'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import App from './App.vue'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(VueSession, {persist: true})

Vue.config.productionTip = false

import axios from 'axios'
let ip_port = process.env.VUE_APP_IP
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
axios.defaults.baseURL = ip_port + '/api/'
console.log(axios.defaults.baseURL)
// axios.interceptors.request.use(
//   (config) => {
//     let token = localStorage.getItem('token');

//     if (token) {
//       config.headers['Authorization'] = `Bearer ${ token }`;
//     }

//     return config;
//   }, 

//   (error) => {
//     return Promise.reject(error);
//   }
// );


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
