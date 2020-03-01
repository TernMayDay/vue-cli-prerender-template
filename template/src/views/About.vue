<template>
  <div class="page about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import MetaModule from '@/components/mixins/metaModule'
export default {
  name: 'About',
  mixins: [MetaModule],
  data () {
    return {
      title: 'About'
    }
  }
}
</script>
