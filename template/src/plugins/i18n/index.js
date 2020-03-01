import Vue from 'vue'
import VueI18n from 'vue-i18n'
import tw from './locales/tw.json'
import en from './locales/en.json'

Vue.use(VueI18n)
const i18n = new VueI18n({ 
  locale: 'tw',
  messages: {
    tw,
    en
  }
})

export default i18n
