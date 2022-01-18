<template>
  <transition name="grow" v-on:after-leave="onCloseComplete">
    <div v-if="isOpen" class="panel">
      <div class="content">
        <h1>{{ title }}</h1>
        <div v-if="loaded">
          <h2>APPLICATION</h2>
        </div>
        <div v-else>
          <div class="lines-spinner full-height">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="close-button">
        <img
          :src="closeButtonSource"
          :data-src="closeButtonSource"
          @click="onClose"
        />
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@import '../scss/variables.scss';

h1 {
  font-size: 2.75rem;

  @media (max-width: $mid) {
    max-width: 80vw;
  }
}

.panel {
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 30vw;
  width: 70vw;
  min-height: calc(100vh - 5.5em);
  background-color: $extended3-light;
  padding-top: 5.5em;
  padding-left: 3em;
  overflow-y: scroll;

  @media (max-width: $mid) {
    padding: 0;
    left: 0;
    max-height: 100vh;
    width: 100vw;
  }

  & .content {
    display: flex;
    flex-direction: column;
    width: 70%;
    padding-bottom: 10em;

    @media (max-width: $mid) {
      width: 100%;
      margin: 0 0.5em;
    }
  }
}

.grow-enter-active,
.grow-leave-active {
  transition: left 1200ms cubic-bezier(0.16, 1, 0.3, 1);
}

.grow-leave,
.grow-enter-to {
  left: 30%;

  @media (max-width: $mid) {
    left: 0;
  }
}

.grow-enter,
.grow-leave-to {
  left: 100%;
}

.anti-h3-padding {
  margin-top: -3em;
}

.anchor-links {
  margin-top: 5em;
  display: flex;
  flex-direction: row;

  @media (max-width: $mid) {
    margin-top: 2em;
    flex-direction: column;
  }

  .anchor-link {
    margin-right: 3em;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }

    & a {
      text-decoration: none;

      &:hover {
        color: #000;
        text-decoration: underline;
      }
    }
  }
}

.footer-padding {
  height: 20em;
}

.cta-button {
  display: inline-block;
  background-color: var(--textColor);
  padding: 0.5rem 2.5rem;
  color: var(--backgroundColor);
  border: none;
  text-decoration: none;

  &:hover {
    background-color: #f05969;
  }
}

.close-button {
  margin-top: 0.67em;

  @media (max-width: $mid) {
    padding: 1em;
    position: absolute;
    right: 0;
    top: 0;
  }

  & img {
    cursor: pointer;
  }
}

.full-height {
  height: 100vh;
}

.header-anchor:hover {
  color: #000;
}
</style>

<script>
export default {
  props: {
    shortcode: String,
    title: String,
    isOpen: Boolean,
  },
  data() {
    return {
      loaded: false,
      isAnimatedOpen: false,
      closeButtonSource: require(`~/assets/images/ui/close.svg`),
      body: document.querySelector('body'),
      job: {},
    }
  },
  watch: {
    async isOpen(val) {
      if (val) {
        this.isAnimatedOpen = true
        // this.getJob()
      }
    },
  },
  methods: {
    async getJob() {
      this.job = await this.$axios.$get(
        `https://j0vz06anpf.execute-api.ap-southeast-2.amazonaws.com/jobs/${this.shortcode}`
      )
      this.loaded = true
    },
    onClose() {
      this.$emit('close')
    },
    onCloseComplete() {
      this.isAnimatedOpen = false
      this.$emit('closecomplete')
    },
  },
}
</script>
