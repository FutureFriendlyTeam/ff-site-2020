<template>
  <section v-observe-visibility="{
    callback: onVisible,
    intersection: {
      rootMargin: '-50% 0px -50% 0px'
    },
  }" >
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
      isVisible: false
    }
  },
  methods: {
    onVisible(isVisible, entry) {
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
