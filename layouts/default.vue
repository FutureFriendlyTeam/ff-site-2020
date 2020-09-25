<template>
  <div id="site" :style="{'--backgroundColor': activeBackgroundColor, '--textColor': activeTextColor, '--hoverColor': activeHoverColor} " class="color-background">
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
import SuperFooter from '~/components/SuperFooter.vue'

export default {
  components: {
    MainHeader,
    MainFooter,
    SuperFooter
  },
  data() {
    return {
      activeBackgroundColor: '#ffffff',
      activeTextColor: '#000000',
      activeHoverColor: '#F05969'
    }
  },
  mounted() {
    this.$root.$on('colorChange', e => {
      this.activeBackgroundColor = this.$theme[e.backgroundColor] || '#ffffff'
      this.activeTextColor = this.$theme[e.textColor] || '#000000'
      this.activeHoverColor = this.$theme[e.hoverColor] || '#F05969'
    })
  }
}
</script>

<style lang="scss" scoped>
#background {
  transition: background-color 600ms ease;
}
</style>
