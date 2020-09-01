<template>
  <figure 
    :class="[scale ? 'scale-image-wrapper' : '']" 
    class="future-image-wrapper">
    <fixed-aspect :aspect="aspect">
      <div 
        :class="[visible ? 'visible' : 'invisible', scale ? 'scale-image' : '']" 
        class="future-image-effect-wrapper">
        <img 
          v-observe-visibility="{
            callback: visibilityChanged,
          }" 
          v-lazy="src" 
          :alt="alt"
          class="future-image"
        >
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

img[lazy='loading'] {
  transition: all 1000ms cubic-bezier(0.16, 1, 0.3, 1);
  // transform: translate3d(-1rem, 0, 0);
  opacity: 0;
}
img[lazy='error'] {
  opacity: 1;
}
img[lazy='loaded'] {
  transition: all 1000ms cubic-bezier(0.16, 1, 0.3, 1);
  // transform: translate3d(0, 0, 0);
  opacity: 1;
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
</style>
