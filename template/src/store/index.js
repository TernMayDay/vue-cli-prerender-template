import Vue from 'vue'
import Vuex from 'vuex'
import vm from '../main' 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    SET_LANG (state, locale) {
      vm.$i18n.locale = locale
    }
  },
  actions: {
    async SET_LANG ({ commit }, locale) {
      if (vm.$i18n.messages[locale]) {
        commit('SET_LANG', locale)
      } else {
        // 放專案內 import
        // 放public 用Api,get
        try {
          const module = await import(`@/plugins/i18n/locales/${locale}.json`)
          console.log('module => ', module)
          vm.$i18n.setLocaleMessage(locale, module.default)
          commit('SET_LANG', locale)
        } catch (e) {
          console.log('catch =>', e)
        }
      }
    }
  },
  modules: {
  }
})
