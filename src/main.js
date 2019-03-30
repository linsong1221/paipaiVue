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

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

/*  国际化引入 */
import VueI18n from 'vue-i18n'

Vue.use(VueI18n) // 通过插件的形式挂载

const i18n = new VueI18n({
  locale: 'CHN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'CHN': require('./common/lang/zh'),   // 中文语言包
    'KOR': require('./common/lang/ko')    // 韩文语言包
  }
})

/*  国际化引入结束 */


Vue.use(ElementUI)


Vue.use(VueRouter)

const router = new VueRouter({
  // mode:'history',
  routes:routerConfig
})
// Vue.config.productionTip = false
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  i18n,
  template: '<App/>',
  components: { App }
})
