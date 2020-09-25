<template>
  <figure 
    :class="[scale ? 'scale-image-wrapper' : '']" 
    class="future-image-wrapper">
    <fixed-aspect :aspect="aspect">

      <picture class="future-image">
        <source v-if="image.webp" :data-srcset="image.webp" type="image/webp">
        <source :data-srcset="image.opt" type="image/jpg">
        <img
          :src="image.opt"
          :data-src="image.opt"
          class="lazyload future-image"
        >
      </picture>

      
      <!-- <img
        v-else
        :src="image.placeholder"
        :data-src="image.opt"
        class="lazyload a-fadein"
      > -->

      <!-- <LazyImage :use-lqip="false" data-src="us/canberra.jpg"/> -->

      <!-- <picture v-if="src" class="future-image">
        <source v-if="src.includes('.jpg') || src.includes('.png')" :data-srcset="require(`~/assets/${src}?webp`)" type="image/webp">
        <img 
          :data-src="require(`~/assets/${src}`)" 
          :alt="alt"
          class="future-image lazyload"
        >
      </picture> -->
     
    </fixed-aspect>
  </figure>
</template>

<script>
import FixedAspect from '~/components/FixedAspect.vue'
export default {
  name: 'FutureImg',
  components: {
    FixedAspect
  },
  props: {
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    aspect: {
      type: String,
      default: 'square'
    },
    scale: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false
    }
  },

  computed: {
    image() {
      try {
        const isRaster = this.src.includes('.jpg') || this.src.includes('.png')
        const isSvg = this.src.includes('.svg')

        const images = {
          opt: require(`~/assets/images/${this.src}`),
          webp: isRaster ? require(`~/assets/images/${this.src}?webp`) : null
        }

        return images
      } catch (e) {
        console.error('Couldn`t load images', e)
        return 'err.jpg'
      }
    }
  },

  // computed: {
  //   defaultSrc() {
  //     return require(this.src)
  //   }
  // },
  mounted() {
    console.log(this.src)
  },
  methods: {
    visibilityChanged(visible, e) {
      this.visible = visible
    }
  }
}
</script>

<style scoped lang="scss">
.future-image-wrapper {
  width: 100%;
  height: auto;
  display: block;
}

.future-image {
  width: 100%;
  height: 100%;
  // background-color: black;
}

// .lazyload,
// .lazyloading {
//   opacity: 0;
// }

// .loading,
// .lazyload,
// .lazyloaded {
//   opacity: 1;
//   transition: 1600ms cubic-bezier(0.16, 1, 0.3, 1);
// }

// .scale-image-wrapper {
//   overflow: hidden;
// }

// .scale-image {
//   transition: all 50000ms cubic-bezier(0.16, 1, 0.3, 1);
//   transform: scale3d(1.1, 1.1, 1.1);

//   &.visible {
//     transform: scale3d(1, 1, 1);
//   }
// }

img {
  color: transparent;
}
</style>
