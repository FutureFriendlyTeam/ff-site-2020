<template>
  <div v-observe-visibility="{
    callback: onVisible,
    intersection: {
      rootMargin: '-50% 0px -50% 0px'
    },
  }">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: 'light'
    },
    textColor: {
      type: String,
      default: 'dark'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onVisible(visible) {
      if (visible && !this.disabled) {
        this.$root.$emit('colorChange', {
          backgroundColor: this.backgroundColor,
          textColor: this.textColor
          // hoverColor: this.hoverColor
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
