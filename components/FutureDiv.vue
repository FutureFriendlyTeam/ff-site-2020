<template>
  <section v-observe-visibility="hasObserverRoot ? {
    callback: (isVisible, entry) => onObserverHandler(isVisible, entry, 'onVisible'),
    intersection: {
      root: observerRoot,
      rootMargin: '-50% 0px -50% 0px'
    },
  } : false">
    <slot/>
  </section>
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

  data() {
    return {
      isVisible: false,
      root: null
    }
  },
  methods: {
    onVisible(isVisible, entry) {
      // console.log(isVisible, entry.target)
      if (isVisible && !this.disabled) {
        this.$root.$emit('colorChange', {
          backgroundColor: this.backgroundColor,
          textColor: this.textColor
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// .inview {
//   // background-color: red;
// }
</style>
