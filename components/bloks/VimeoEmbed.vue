<template>
  <div class="xs-full">
    <fixed-aspect :aspect="'sixteen-nine'">
      <div style="padding: 56.25% 0 0 0; position: relative">
        <iframe
          :src="`https://player.vimeo.com/video/${blok.vimeo_id}?autoplay=${blok.autoplay}&muted=1`"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      </div>
    </fixed-aspect>
  </div>
</template>



<script>
import FixedAspect from '../FixedAspect.vue'
export default {
  components: {
    FixedAspect
  },
  props: {
    blok: {
      type: Object,
      default: null
    }
  }
}
</script>
