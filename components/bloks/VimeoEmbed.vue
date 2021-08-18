<template>
  <!-- <figure v-storyblok-editable="blok" :class="[blok.size, blok.top_spacing, blok.bottom_spacing]" class="color-background">
    <story-blok-image :aspect="blok.aspect" :filename="blok.image.filename" :grayscale="blok.grayscale"/>
  </figure> -->

  <div class="xs-full">
    <fixed-aspect :aspect="'sixteen-nine'">
      <div style="padding: 56.25% 0 0 0; position: relative">
        <div id="overlay" @click="onActivate" :class="active ? 'hidden' : ''">
          <a id="play">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6666 6.66666V25.3333L25.3333 16L10.6666 6.66666Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <iframe
          id="background"
          ref="backgroundPlayer"
          :src="`https://player.vimeo.com/video/${blok.vimeo_id}?autoplay=${blok.autoplay}&muted=1&background=1`"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
          frameborder="0"
          allow="autoplay; fullscreen"
          :class="active ? 'hidden' : ''"
          allowfullscreen
        />

        <iframe
          id="active"
          ref="activePlayer"
          :src="`https://player.vimeo.com/video/${blok.vimeo_id}`"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
          frameborder="0"
          allow="autoplay; fullscreen"
          :class="!active ? 'hidden' : ''"
          allowfullscreen
        />
      </div>
    </fixed-aspect>
    <script src="https://player.vimeo.com/api/player.js" />
  </div>
</template>



<script>
import FixedAspect from '../FixedAspect.vue'
export default {
  components: {
    FixedAspect,
  },
  props: {
    blok: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      active: false,
      backgroundPlayer: null,
      activePlayer: null,
    }
  },
  methods: {
    onActivate() {
      this.backgroundPlayer = new Vimeo.Player(this.$refs.backgroundPlayer)
      this.activePlayer = new Vimeo.Player(this.$refs.activePlayer)
      this.backgroundPlayer.pause()
      this.activePlayer.play()
      this.active = true
    },
  },
  mounted() {
    // console.log(Vimeo)
  },
}
</script>

<style lang="scss" scoped>
#overlay {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 3;
  background-color: transparent;
  cursor: pointer;

  #play {
    width: 4rem;
    height: 4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -2rem;
    margin-top: -2rem;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 2rem;
    padding: 1rem;
    box-sizing: border-box;
    transition: transform 300ms cubic-bezier(0, 0.55, 0.45, 1);
  }

  &:hover {
    #play {
      transform: scale3d(1.1, 1.1, 1.1);
    }
  }
}

.hidden {
  display: none;
}
</style>