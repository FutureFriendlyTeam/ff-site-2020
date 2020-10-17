<template>  
  <fixed-aspect :aspect="aspect || 'free'" :class="[grayscale ? blend === 'normal' ? 'multiply' : blend : blend ]">

    <div :class="aspect != 'free' ? 'future-image-wrapper' : ''">
      <picture class="future-image">
        <source :srcset="transformImage(filename, grayscale)" type="image/webp">
        
        <img :src="transformImage(filename, grayscale)"
             class="future-image"
        >
        
      </picture>
    </div>
  </fixed-aspect>
</template>

<script>
import FixedAspect from '~/components/FixedAspect.vue'
export default {
  components: {
    FixedAspect
  },
  props: {
    aspect: {
      type: String,
      default: 'free'
    },
    filename: {
      type: String,
      default: null
    },
    grayscale: {
      type: Boolean,
      default: false
    },
    blend: {
      type: String,
      default: 'normal'
    }
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
