// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './element-ui.js'
import store from './store/'
import VueRouter from 'vue-router'
import routerConfig from './router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes:routerConfig
})
// Vue.config.productionTip = false
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
