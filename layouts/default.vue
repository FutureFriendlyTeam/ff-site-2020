<template>
  <div>
    <main-header/>
    <nuxt/>
    <main-footer/>
  </div>
</template>

<style>
</style>

<script>
import MainHeader from '~/components/MainHeader.vue'
import MainFooter from '~/components/MainFooter.vue'

export default {
  components: {
    MainHeader,

    MainFooter
  }
}
</script>
