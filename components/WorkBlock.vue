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
        columns="xs-1 m-2"/>
      <div class="xs-full m-half work-block-content h-padded v-padded">
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

      <div class="xs-full m-half work-block-image has-grid h-padded v-padded">
        <fixed-aspect aspect="three-four"/>
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
    reverse: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    jarallaxVideo()
    // jarallax(this.$refs.wrapper, {
    //   speed: 1,
    //   videoSrc: `mp4:${require(`../assets/video/${this.work.video}`)}`
    // })
  }
}
</script>

<style scoped lang="scss">
.work-block {
  position: relative;
  overflow: hidden;

  .work-block-content {
    z-index: 2;
    box-sizing: border-box;
    position: relative;
  }

  .work-image {
    height: 100%;
    background-color: black;
  }
}
</style>
