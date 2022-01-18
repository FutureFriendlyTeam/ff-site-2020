<template>
    <div>
        <div :class="`popout ${isSliderOpen ? 'high' : 'low'}`">
            <transition name="fade" @after-leave="onCloseComplete()">
            <div v-if="isDetailOpen" class="fader" @click="onClose()" />
            </transition>
            
          <workable-detail
            :isOpen="isDetailOpen"
            :shortcode="shortcode"
            :title="title"
            @close="onClose"
            @closecomplete="onCloseComplete"
          />
        </div>

          
        <div :class="`popout ${isApplyOpen ? 'high' : 'low'}`">
            <transition name="fade" @after-leave="onCloseComplete()">
            <div v-if="isOpen" class="fader" @click="onClose()" />
            </transition>
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
import WorkableDetail from './WorkableDetail.vue'
import WorkableApply from './WorkableApply.vue'

export default {
  components: { WorkableDetail },
  props: {
    shortcode: String,
    title: String,
    isOpen: Boolean
  },
  data() {
    return {
      loaded: false,
      isSliderOpen: false,
      isDetailOpen: false,
      isApplyOpen: false
    }
  },
  watch: {
    async isOpen(val) {
      if (val) {
        this.isSliderOpen = true
        this.isDetailOpen = true
      }
    }
  },
  methods: {
    onClose() {
      this.isDetailOpen = false
      this.$emit('close')
    },
    onCloseComplete() {
      this.isSliderOpen = false
      this.$emit('closecomplete')
    }
  }
}
</script>
