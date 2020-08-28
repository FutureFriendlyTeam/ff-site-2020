<template>

  <section 
    ref="wrapper" 
    class="work-block jarallax-video">
    <div class="work-image"/>

    <div 
      :class="reverse ? 'reverse': ''" 
      class="center-col horizontal">
      <div class="xs-full m-half l-third has-grid full-height work-block-content h-padded">
        <background-grid 
          :inset="true"
          class="grid-container" 
          columns="xs-1"/>

        <div>
          <h2 class="no-margin-top">{{ work.lead }}</h2>
          <h2>{{ work.main }}</h2> 
          <p>With {{ work.client }}</p>
        </div>

        <div class="button">
          <h2 class="no-margin-bottom">Full Case Study</h2>
        </div>
      </div>
    </div>
  </section>


</template>

<script>
import BackgroundGrid from '~/components/BackgroundGrid.vue'
import { jarallax, jarallaxVideo } from 'jarallax'
export default {
  name: 'WorkBlock',
  components: {
    BackgroundGrid
  },
  props: {
    work: {
      type: Object,
      default: null
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    jarallaxVideo()
    jarallax(this.$refs.wrapper, {
      speed: 0.2,
      videoSrc: `mp4:${require(`../assets/video/${this.work.video}`)}`
    })
  }
}
</script>

<style scoped lang="scss">
.work-block {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  /deep/ .grid-line {
    background-color: #fff;
  }
  color: #fff;
  .work-block-content {
    z-index: 2;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-around;
    box-sizing: border-box;
    padding-top: 2rem;
    padding-bottom: 2rem;
    position: relative;

    .button {
      margin-top: 8rem;
    }
  }

  .work-image {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.6);
  }
}
</style>
