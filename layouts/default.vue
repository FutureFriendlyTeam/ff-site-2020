<template>
  <div :style="{backgroundColor: backgroundColor}" class="color-background">
    <main-header :background-color="backgroundColor"/>
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
  },
  data() {
    return {
      backgroundColor: '#ffffff'
    }
  },
  mounted() {
    this.$root.$on('backgroundChange', e => {
      const colors = {
        light: '#ffffff',
        light2: '#edefed',
        dark: '#000000',

        accent: '#f05969',
        accentLight: '#fcdee0',

        extended1: '#4a29f0',
        extended1Light: '#d1e5ff',

        extended2: '#45d1a6',
        extended2Light: '#d9f5ed',

        extended3: '#fbe704',
        extended3Light: '#fffacc'
      }

      console.log('backgroundChange', e)
      this.backgroundColor = colors[e] || '#ffffff'
    })
  }
}
</script>

<style lang="scss" scoped>
#background {
  transition: background-color 600ms ease;
}
</style>
