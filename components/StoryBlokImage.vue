<template>  
  <fixed-aspect :aspect="aspect || 'free'" :class="[noScale ? '' : 'scale', loaded ? 'loaded' : '']" class="future-image-wrapper">

    <div v-observe-visibility="{
      callback: onObserverHandler,
    }" :class="[aspect != 'free' ? 'fixed-aspect-inner' : '', inview ? 'inview' : '']">

      <div :class="[grayscale ? blend === 'normal' ? 'multiply' : blend : blend ]" class="future-image-inner" >

        <picture class="future-image">
          <source v-if="filepaths.webp" :data-srcset="filepaths.webp" type="image/webp">
          <source :data-srcset="filepaths.default">
          <img
            ref="img" :data-src="filepaths.default" :alt="alt" class="future-image lazyload" @load="onLoad"
          >
        </picture>
      </div>
    </div>

    <div class="future-image-mask color-background"/>
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
    },
    noScale: {
      type: Boolean,
      default: false
    },
    alt: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loaded: false
    }
  },
  computed: {
    filepaths() {
      if (!this.filename) {
        return ''
      }
      const isRaster =
        this.filename.includes('.jpg') ||
        this.filename.includes('.jpeg') ||
        this.filename.includes('.png')

      let paths = {
        default: this.transformImage(this.filename, this.grayscale)
      }

      if (isRaster) {
        paths.webp = this.transformImage(this.filename, this.grayscale, true)
      }

      return paths
    }
  },
  watch: {
    filepaths() {
      // console.log(this.$refs)
      this.$refs.img.classList.add('lazyload')
    }
  },
  methods: {
    transformImage(image, isGrayscale, isWebp) {
      if (!image) return ''

      let option = `${isWebp || isGrayscale ? 'filters' : ''}${
        isWebp ? ':format(webp)' : ''
      }${isGrayscale ? ':grayscale()' : ''}`

      let imageService = 'https://img2.storyblok.com/'
      let path = image.replace('https://a.storyblok.com', '')

      return imageService + option + path
    },
    onLoad() {
      this.loaded = true
    }
  }
}
</script>


<style scoped lang="scss">
.future-image-wrapper {
  position: relative;
  overflow: hidden;
  // background-color: red;
}

.fixed-aspect-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.future-image-mask {
  position: absolute;
  bottom: -1px;
  top: -1px;
  left: -1px;
  right: -1px;
  overflow: hidden;
  transform-origin: 100% 0%;
  opacity: 1;
  z-index: 999;
  transition: transform 2s cubic-bezier(0.19, 1, 0.22, 1),
    background-color 600ms ease;
}

.no-background-animation .future-image-mask {
  transition: none;
}

.loaded.future-image-wrapper .future-image-mask {
  transform: scale3d(0, 1, 1);
}

.scale.future-image-wrapper .future-image-inner {
  width: 100%;
  height: 100%;
  transform: scale(1.2);
  transition: transform 0ms cubic-bezier(0.33, 1, 0.68, 1);
}

.scale.future-image-wrapper .inview .future-image-inner {
  transform: scale(1);
  transition-delay: 0ms;
  transition-duration: 20000ms;
}

.future-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
</style>
