<template>
  <div>
    <a class="cta-button body">{{ blok.text }}</a>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.cta-button {
  display: block;
  background-color: #000;
  padding: 1rem 1.5rem;
  color: #fff;
  border: none;
}
</style>
