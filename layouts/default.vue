<template>
  <div id="site" :style="{'--backgroundColor': activeBackgroundColor, '--textColor': activeTextColor,'backgroundColor': activeBackgroundColor, 'color': activeTextColor, }" :class="disableBackgroundAnimations ? 'no-background-animation' : ''" class="color-background">
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
    this.$root.$on('colorChange', e => {
      this.updateColors(e.backgroundColor, e.textColor)
    })
  },
  methods: {
    updateColors(backgroundColor, textColor) {
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

      // Polyfill for CSS variables
      if (!(window.CSS && CSS.supports('color', 'var(--primary)'))) {
        let backgroundColorElements = window.document.querySelectorAll(
          '.color-background'
        )
        let colorElements = window.document.querySelectorAll('.color-text')
        console.log(colorElements)
        for (let i = 0; i < backgroundColorElements.length; ++i) {
          backgroundColorElements[
            i
          ].style.backgroundColor = this.activeBackgroundColor
        }

        for (let i = 0; i < colorElements.length; ++i) {
          colorElements[i].style.color = this.activeBackgroundColor
        }
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
