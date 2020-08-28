<template>

  <section 
    ref="wrapper"
    class="work-block jarallax">
    <img 
      :src="require(`~/assets/${work.image}`)"
      class="jarallax-img" 
      alt="">
    <div 
      :style="{justifyContent: justifyClass}"
      class="center-col horizontal">

      <div class="xs-full m-half l-third v-padded full-height">
        <div class="h-padded border-right border-left work-block-content">
          <h2 class="no-margin-top">{{ work.lead }}</h2>
          <h2>{{ work.main }}</h2> 
          <p class="client">With {{ work.client }}</p>
          <a class="button">
            <h2 class="no-margin-bottom">Full Case Study</h2>
          </a>
          <p class="mini sideways">Winner Good Design Award Gold 2020</p>
        </div>
        
      </div>
    </div>
  </section>


</template>

<script>
import BackgroundGrid from '~/components/BackgroundGrid.vue'
import FixedAspect from '~/components/FixedAspect.vue'
import { jarallax, jarallaxVideo } from 'jarallax'
export default {
  name: 'WorkBlock',
  components: {
    BackgroundGrid,
    FixedAspect
  },
  props: {
    work: {
      type: Object,
      default: null
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    justifyClass() {
      const c = ['flex-start', 'space-around', 'flex-end']
      return c[this.index % 3]
    }
  },
  mounted() {
    // jarallaxVideo()
    jarallax(this.$refs.wrapper, {
      speed: 0.1
    })
  }
}
</script>

<style scoped lang="scss">
.work-block {
  position: relative;
  overflow: hidden;
  color: #fff;

  .border-right:after {
    background-color: #fff;
  }

  .border-left:before {
    background-color: #fff;
  }
  // .horizontal {
  //   justify-content: flex-end;
  // }
  .work-block-content {
    box-sizing: border-box;
    height: 100%;

    .button {
      display: block;
      margin-top: 4rem;
    }

    .sideways {
      line-height: 0rem;
      margin: 0px;
      transform: rotateX(0deg) rotateY(0deg) rotateZ(-90deg);
      transform-origin: 0% 50%;
      position: absolute;
      bottom: 0px;
    }
  }

  .work-image {
    height: 100%;
    background-color: black;
  }

  .client {
    font-weight: bold;
  }
}
</style>
