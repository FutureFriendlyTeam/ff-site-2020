<template>

  <div 
    class="image-grid">
    <div class="image-grid-wrapper horizontal">
      <div 
        v-for="(img,i) in images" 
        :key="`image-${i}`" 
        class="image-grid-tile xs-half" >
        <future-img 
          v-if="img != 'blank'" 
          :src ="require(`~/assets/${img}`)" 
          aspect="four-three"/>
      </div>
    </div>
  </div>

</template>

<script>
import FutureImg from '~/components/FutureImg.vue'
export default {
  name: 'ImageGrid',
  components: {
    FutureImg
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
