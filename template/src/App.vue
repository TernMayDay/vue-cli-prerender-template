<template>
  <div id="app">
    <div id="nav">
      <router-link to="/index.html">
        {{ $t("INDEX_BUTTON") }}
      </router-link> |
      <router-link to="/about.html">
        {{ $t("ABOUT_BUTTON") }}
      </router-link>
    </div>
    <button
      type="button"
      @click="switchLang"
    >
      切換語系
      {{ $t("SWITCH_LANG") }}
    </button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    switchLang () {
      if (this.$i18n.locale === 'tw') {
        this.$store.dispatch('SET_LANG', 'en')
      } else if (this.$i18n.locale === 'en') {
        this.$store.dispatch('SET_LANG', 'tw')
      }
    }
  },
  metaInfo () {
    return {
      titleTemplate: '%s - APEX'
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/app";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
