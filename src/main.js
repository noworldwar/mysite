import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import VueCookies from 'vue-cookies'
import store from './store'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueCookies)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
