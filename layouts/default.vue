<template>
  <div :style="{'--backgroundColor': activeBackgroundColor}" class="color-background">
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
  },
  data() {
    return {
      activeBackgroundColor: '#ffffff'
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

      // this.$backgroundColor = 'red'

      // this.$set(this, 'activeBackgroundColor', colors[e] || )

      // console.log('backgroundChange', e, this.backgroundColor)
      this.activeBackgroundColor = colors[e] || '#ffffff'

      // window.backgroundColor = colors[e] || '#ffffff'
    })
  }
}
</script>

<style lang="scss" scoped>
#background {
  transition: background-color 600ms ease;
}
</style>
