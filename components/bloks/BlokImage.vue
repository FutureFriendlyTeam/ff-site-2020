<template>  
  <figure v-storyblok-editable="blok" :class="[
            blok.size,
            `v-margin-top-${blok.top_spacing}`,
            `v-margin-bottom-${blok.bottom_spacing}`]" 
          class="color-background image-container">
    <story-blok-image :aspect="blok.aspect" :filename="blok.image.filename" :grayscale="blok.grayscale" :blend="blok.blend" :no-scale="blok.no_scale" :alt="blok.image.alt"/>
    <figcaption v-if="blok.show_caption" class="caption v-margin-top-tiny">— {{ blok.image.name }}</figcaption>
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

<style lang="scss" scoped>
.caption {
  font-style: italic;
}

.image-container {
  position: relative;
  z-index: 1;
}
</style>
