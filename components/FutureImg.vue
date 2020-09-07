<template>
  <figure 
    :class="[scale ? 'scale-image-wrapper' : '']" 
    class="future-image-wrapper">
    <fixed-aspect :aspect="aspect">
      <div 
        :class="[visible ? 'visible' : 'invisible', scale ? 'scale-image' : '']" 
        class="future-image-effect-wrapper">
        <picture v-if="src">
          <source v-if="src.includes('.jpg') || src.includes('.png')" :data-srcset="require(`~/assets/${src}?webp`)" type="image/webp">
          <img 
            v-observe-visibility="{
              callback: visibilityChanged,
            }" 
            :data-src="require(`~/assets/${src}`)" 
            :alt="alt"
            class="future-image lazyload"
          >
        </picture>
      </div>
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
}

.future-image {
  width: 100%;
  height: auto;
}

.lazyload,
.lazyloading {
  opacity: 0;
}

.loading,
.lazyload,
.lazyloaded {
  opacity: 1;
  transition: 600ms cubic-bezier(0.16, 1, 0.3, 1);
}

.scale-image-wrapper {
  overflow: hidden;
}

.scale-image {
  transition: all 50000ms cubic-bezier(0.16, 1, 0.3, 1);
  transform: scale3d(1.1, 1.1, 1.1);

  &.visible {
    transform: scale3d(1, 1, 1);
  }
}

img {
  color: transparent;
}
</style>
