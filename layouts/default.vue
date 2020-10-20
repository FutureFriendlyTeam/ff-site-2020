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
      console.log('updating colors', backgroundColor, textColor)
      backgroundColor = this.getColor(backgroundColor, '#FFFFFF')
      textColor = this.getColor(textColor, '#000000')

      if (this.activeBackgroundColor !== backgroundColor) {
        this.activeBackgroundColor = backgroundColor
      }

      if (this.activeTextColor !== textColor) {
        this.activeTextColor = textColor
      }
    },
    getColor(color, fallback) {
      if (color.includes('#')) {
        return color
      }
      return this.$theme[color] || fallback
    }
  }
}
</script>

<style lang="scss" scoped>
#background {
  transition: background-color 600ms ease;
}
</style>
