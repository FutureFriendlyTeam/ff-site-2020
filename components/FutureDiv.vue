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
    }
  },
  methods: {
    onVisible(visible) {
      if (visible) {
        this.$root.$emit('backgroundChange', this.backgroundColor)
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
