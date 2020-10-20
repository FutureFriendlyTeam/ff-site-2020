<template>
  <!-- <future-div > -->

  <nuxt-link id="next" :to="`/${blok.link.cached_url}`" class="v-padding-top-mid v-padding-bottom-mid wrapper-link">
    <div class="center-col">
      <p class="caption">Read next.</p>
      <h2>{{ blok.text }} →</h2>
    </div>
  </nuxt-link>

  <!-- </future-div> -->
</template>

<script>
// import ClientBlock from '~/components/ClientBlock.vue'

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
#next {
  display: block;
  background-color: #000;
  color: #fff;

  &:hover {
    color: var(--hoverColor);
  }
}
</style>
