import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'

Vue.config.productionTip = false
Vue.use(VueMeta)

const vm = new Vue({
  i18n,
  router,
  store,
  mounted: () => {
    document.dispatchEvent(new Event('render-event'))
  },
  render: h => h(App)
}).$mount('#app')

export default vm
