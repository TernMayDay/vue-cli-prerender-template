<template>
  <div class="page home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import MetaModule from '@/components/mixins/metaModule'
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mixins: [MetaModule],
  data () {
    return {
      title: 'Home'
    }
  }
}
</script>
