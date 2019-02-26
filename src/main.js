import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './router/router'
import './assets/icon/iconfont.css'
import './assets/icon2/iconfont.css'
import 'animate.css/animate.min.css'
import './styles.scss'
import store from './store'
import 'font-awesome/css/font-awesome.min.css'
import './assets/scss/main.scss'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
