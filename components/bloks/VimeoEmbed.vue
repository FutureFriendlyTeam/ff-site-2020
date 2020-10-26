<template>  
  <!-- <figure v-storyblok-editable="blok" :class="[blok.size, blok.top_spacing, blok.bottom_spacing]" class="color-background">
    <story-blok-image :aspect="blok.aspect" :filename="blok.image.filename" :grayscale="blok.grayscale"/>
  </figure> -->

  <div class="xs-full">
    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/402006144?autoplay=false" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen/></div><script src="https://player.vimeo.com/api/player.js"/>
  </div>
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
