<template>
  <div id="site" :style="{'--backgroundColor': activeBackgroundColor, '--textColor': activeTextColor, '--hoverColor': activeHoverColor}" class="color-background" data-scroll-container>
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
      activeBackgroundColor: '#ffffff',
      activeTextColor: '#000000',
      activeHoverColor: '#F05969'
    }
  },
  mounted() {
    this.$root.$on('colorChange', e => {
      this.updateColors(e.backgroundColor, e.textColor)
    })
  },
  methods: {
    updateColors(backgroundColor, textColor) {
      if (this.activeBackgroundColor !== this.$theme[backgroundColor]) {
        this.activeBackgroundColor = this.$theme[backgroundColor] || '#ffffff'
      }

      if (this.activeTextColor !== this.$theme[textColor]) {
        this.activeTextColor = this.$theme[textColor] || '#000'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#background {
  transition: background-color 600ms ease;
}
</style>
