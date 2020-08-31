<template>

  <div 
    class="image-grid">
              
    <div class="image-grid-wrapper horizontal">
      <div 
        v-for="(img,i) in images" 
        :key="`image-${i}`" 
        class="image-grid-tile xs-half" >
        <!-- <wipe-in :delay="i*50"> -->
        <fixed-aspect 
          :class="img" 
          aspect="four-three">
          <img 
            v-lazy ="require(`~/assets/${img}`)" 
            v-if="img != 'blank'"
            :style="{transitionDelay: `${i*50}ms`}"
          >
        </fixed-aspect>
        <!-- </wipe-in> -->
      </div>
    </div>
              
  </div>

</template>

<script>
import FixedAspect from '~/components/FixedAspect.vue'
import WipeIn from '~/components/WipeIn.vue'
export default {
  name: 'ImageGrid',
  components: {
    WipeIn,
    FixedAspect
  },
  props: {
    images: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables.scss';
.image-grid-tile {
  width: 50%;
  box-sizing: border-box;
  padding: 0.5rem;

  .blank {
    opacity: 0;
  }
}

.image-grid {
  overflow: hidden;
}

.image-grid-wrapper {
  margin: -0.5rem;
}
</style>
