<template>

  <section 
    class="work-block v-margin">
    <!--  -->

    <div 
      :class="reverse ? 'reverse': ''" 
      class="center-col horizontal has-grid ">

      <background-grid 
        :inset="true"
        class="grid-container center-col" 
        columns="xs-1 m-2 l-3"/>
      <div class="xs-full m-half l-third full-height work-block-content h-padded">


        <div>
          <h2 class="no-margin-top">{{ work.lead }}</h2>
        </div>

        <div>
          <h2>{{ work.main }}</h2> 
          <p>With {{ work.client }}</p>
        </div>

        <div class="button">
          <h2 class="no-margin-bottom">Full Case Study</h2>
        </div>
      </div>

      <div class="xs-full m-half l-two-thirds work-block-image has-grid full-height h-padded">
        <div 
          ref="wrapper" 
          class="work-image" />
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
      speed: 1,
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
    // background-color: #fff;
  }
  // color: #fff;
  .work-block-content {
    z-index: 2;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    box-sizing: border-box;
    padding-top: 4rem;
    padding-bottom: 4rem;
    position: relative;

    // .button {
    //   margin-top: 8rem;
    // }
  }

  .work-block-image {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .work-image {
    // position: absolute;
    // top: 0px;
    // left: 0px;
    // right: 0px;
    // bottom: 0px;
    // z-index: -1;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
}
</style>
