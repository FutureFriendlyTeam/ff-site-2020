<template>
  <div id="site" :style="{'--backgroundColor': activeBackgroundColor, '--textColor': activeTextColor, '--hoverColor': activeHoverColor}" :class="disableBackgroundAnimations ? 'no-background-animation' : ''" class="color-background">
    <main-header/>
    <nuxt/>
  </div>
</template>

<style>
</style>

<script>
import MainHeader from '~/components/MainHeader.vue'

export default {
  components: {
    MainHeader
  },
  data() {
    return {
      activeBackgroundColor: '#ffffff',
      activeTextColor: '#000000',
      activeHoverColor: '#F05969',
      disableBackgroundAnimations: true
    }
  },
  mounted() {
    // this.updateColors(this.activeBackgroundColor, this.activeTextColor)

    this.$root.$on('colorChange', e => {
      this.updateColors(e.backgroundColor, e.textColor)
    })
  },
  methods: {
    updateColors(backgroundColor, textColor) {
      console.log('updating colors', backgroundColor, textColor)
      backgroundColor = this.getColor(backgroundColor, '#ffffff')
      textColor = this.getColor(textColor, '#000000')

      if (this.activeBackgroundColor !== backgroundColor) {
        this.activeBackgroundColor = backgroundColor
      }

      if (this.activeTextColor !== textColor) {
        this.activeTextColor = textColor
      }
      window.setTimeout(() => {
        this.disableBackgroundAnimations = false
      }, 1)
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
