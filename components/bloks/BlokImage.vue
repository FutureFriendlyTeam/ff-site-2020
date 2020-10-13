<template>  
  <figure v-editable="blok" :class="[blok.size, blok.top_spacing, blok.bottom_spacing]" class="color-background">
    <story-blok-image :aspect="blok.aspect" :filename="blok.image.filename" :grayscale="blok.grayscale"/>
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
  },
  mounted() {
    console.log('Image mounted', this.blok)
  },
  methods: {
    transformImage(image, isGrayscale) {
      if (!image) return ''
      const isRaster = image.includes('.jpg') || image.includes('.png')

      let option = `${isRaster || isGrayscale ? 'filters' : ''}${
        isRaster ? ':format(webp)' : ''
      }${isGrayscale ? ':grayscale()' : ''}`

      let imageService = 'https://img2.storyblok.com/'
      let path = image.replace('https://a.storyblok.com', '')

      console.log(imageService + option + path)
      return imageService + option + path
    }
  }
}
</script>


<style scoped lang="scss">
.future-image-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.future-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

img {
  color: transparent;
}
</style>
