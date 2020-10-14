<template>

  <div v-storyblok-editable="blok" :class="[blok.layout, blok.borders, blok.size]" class="xs-full v-margin-bottom vertical">
    <component v-for="blok in blok.blocks" :key="blok._uid" :blok="blok" :is="blok.component"/>
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
.between {
  > *:nth-child(even) {
    align-self: flex-end;
  }
}
</style>
