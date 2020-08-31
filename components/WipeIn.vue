<template>

  <div 
    v-inview:class="['wipe-in-visible']" 
    class="wipe-in">

    <!-- <div 
      :style="{transitionDelay: `${delay}ms`}" 
      class="wipe-in-mask"/> -->

    <div 
      :style="{transitionDelay: `${delay}ms`}" 
      class="wipe-in-content" >
      <slot/>
    </div>
              
  </div>

</template>

<script>
export default {
  name: 'WipeIn',
  props: {
    delay: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped lang="scss">
.wipe-in {
  overflow: hidden;
  position: relative;

  .wipe-in-content {
    transition: all 1000ms cubic-bezier(0.16, 1, 0.3, 1);
    transform: translate3d(-1rem, 0, 0);
    opacity: 0;
  }

  &.wipe-in-visible {
    .wipe-in-content {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
}
</style>
