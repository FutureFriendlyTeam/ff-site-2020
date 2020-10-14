<template>
  <!-- <section v-editable="blok"
           class="v-padding-top-big v-padding-bottom-big headline">
    <div class="center-col">
      <h1 class="mega xs-full s-three-quarters no-margin">{{ blok.text }}</h1>
    </div>
  </section> -->



  <div v-storyblok-editable="blok" :class="[blok.layout, blok.borders]" class="xs-full v-margin-bottom vertical">
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
