<template>  
  <figure v-storyblok-editable="blok" :class="[
            blok.size,
            `v-margin-top-${blok.top_spacing}`,
            `v-margin-bottom-${blok.bottom_spacing}`]" 
          class="color-background">
    <story-blok-image :aspect="blok.aspect" :filename="blok.image.filename" :grayscale="blok.grayscale" :blend="blok.blend"/>
  </figure>
</template>

<script>
import FixedAspect from '~/components/FixedAspect.vue'
export default {
  components: {
    FixedAspect
  },
  props: {
    blok: {
      type: Object,
      default: null
    }
  }
}
</script>
