<template>
  <div>
    <div :class="`popout ${isSliderOpen ? 'high' : 'low'}`">
      <transition name="fade">
        <div v-if="isDetailOpen" class="fader" @click="onClose()" />
      </transition>

      <workable-detail
        :isOpen="isDetailOpen"
        :shortcode="shortcode"
        :title="title"
        @close="onClose"
        @closecomplete="onCloseComplete"
        @applyOpen="onApplyOpen"
      />
    </div>

    <div :class="`popout ${isApplySliderOpen ? 'high' : 'low'}`">
      <transition name="fade">
        <div v-if="isApplyOpen" class="fader" @click="onApplyClose()" />
      </transition>

      <workable-apply
        :isOpen="isApplyOpen"
        :shortcode="shortcode"
        :title="title"
        @close="onApplyClose"
        @closecomplete="onApplyCloseComplete"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/variables.scss';

h1 {
  font-size: 2.75rem;

  @media (max-width: $mid) {
    max-width: 80vw;
  }
}

.popout {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.high {
    z-index: 9999;
  }
  &.low {
    z-index: -1;
  }
}

.fader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1200ms cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-leave,
.fade-enter-to {
  opacity: 0.5;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
import WorkableApply from './WorkableApply.vue'
import WorkableDetail from './WorkableDetail.vue'

export default {
  components: { WorkableApply, WorkableDetail },
  props: {
    shortcode: String,
    title: String,
    isOpen: Boolean,
  },
  data() {
    return {
      loaded: false,
      isSliderOpen: false,
      isDetailOpen: false,
      isApplySliderOpen: false,
      isApplyOpen: false,
    }
  },
  watch: {
    async isOpen(val) {
      if (val) {
        this.isSliderOpen = true
        this.isDetailOpen = true
      }
    },
  },
  methods: {
    onClose() {
      this.isDetailOpen = false
      this.$emit('close')
    },
    onCloseComplete() {
      this.isSliderOpen = false
      this.$emit('closecomplete')
    },
    onApplyOpen() {
      console.log('onApplyOpen')
      this.isApplyOpen = true
      this.isApplySliderOpen = true
    },
    onApplyClose() {
      console.log('onApplyClose')
      this.isApplyOpen = false
    },
    onApplyCloseComplete() {
      console.log('onApplyCloseComplete')
      this.isApplySliderOpen = false
    },
  },
}
</script>
