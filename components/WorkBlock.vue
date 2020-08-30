<template>

  <div 
    :class="i%2 === 0 ? 'start': 'end'" 
    class="work-block xs-full s-two-thirds border-left border-right">
    <div class="work-block-copy horizontal">
      <div 
        class="xs-full m-half h-padded border-left border-right work-block-copy-text">
        <h2 class="no-margin-top">{{ work.lead }}</h2>
        <h2 class="no-margin-bottom">With {{ work.client }}</h2>
      </div>
    </div>
    <div class="work-image h-padded">
      <fixed-aspect :aspect="work.img.aspect"/>
    </div>
  </div>
</template>

<script>
import FixedAspect from '~/components/FixedAspect.vue'
export default {
  name: 'WorkBlock',
  components: {
    FixedAspect
  },
  props: {
    work: {
      type: Object,
      default: null
    },
    i: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables.scss';

.work-block {
  margin-bottom: 8rem;

  @media (min-width: $mid) {
    margin-bottom: 1rem;
  }

  &:not(:first-child) {
    &.end {
      .work-block-copy-text {
        margin-left: auto;
        &.border-left:before {
          top: -8rem;

          @media (min-width: $small) {
            top: -7rem;
          }

          @media (min-width: $mid) {
            top: -1rem;
          }
        }
      }
    }

    &.start {
      .work-block-copy-text {
        margin-right: auto;
        &.border-right:after {
          top: -8rem;
          @media (min-width: $small) {
            top: -7rem;
          }

          @media (min-width: $mid) {
            top: -1rem;
          }
        }
      }
    }
  }

  @media (min-width: $mid) {
    margin-bottom: 1rem;
  }

  &:last-child {
    margin-bottom: 0px;
  }
}

.work-image {
  margin-top: 1rem;
}
</style>
