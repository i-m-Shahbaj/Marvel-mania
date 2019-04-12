import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from  'axios'
import md5 from 'js-md5'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
const base = axios.create({
    baseURL: 'https://superheroapi.com/api/'
})
Vue.prototype.$http = base
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
