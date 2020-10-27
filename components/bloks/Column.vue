<template>

  <div v-storyblok-editable="blok" :class="[  
    blok.layout, 
    `border-${blok.borders}`, 
    blok.size, 
    blok.borders === 'none' ? `h-padding-${blok.padding}` : '', 
    `v-margin-top-${blok.top_spacing}`, 
    `v-margin-bottom-${blok.bottom_spacing}`,
    `clear-${blok.clear}`]" class="vertical">
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
