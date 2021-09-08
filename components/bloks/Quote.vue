<template>
  <!-- <figure v-storyblok-editable="blok" :class="[blok.size, blok.top_spacing, blok.bottom_spacing]" class="color-background">
    <story-blok-image :aspect="blok.aspect" :filename="blok.image.filename" :grayscale="blok.grayscale"/>
  </figure> -->

  <div>
    <div>
      <div class="big-quote-wrapper">
        <div class="big-quote">
          <blockquote class="color-text" :class="blok.font_size">
            {{ blok.text }}
          </blockquote>
          <cite class="caption quote-attribution color-text">
            — {{ blok.attribution_name
            }}<span v-if="blok.attribution_title"
              ><br />{{ blok.attribution_title }}</span
            ></cite
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FixedAspect from '~/components/FixedAspect.vue'
export default {
  components: {
    FixedAspect,
  },
  props: {
    blok: {
      type: Object,
      default: null,
    },
  },
}
</script>
