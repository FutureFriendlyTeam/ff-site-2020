<template>
  <div>
    <div class="badge-wrapper multiply">
      <future-img :aspect="'free'" :src="`shared/${awardType}.svg`" />
    </div>
  </div>
</template>

<script>
import FutureImg from '~/components/FutureImg.vue'
export default {
  name: 'AwardBadge',
  components: {
    FutureImg,
  },
  props: {
    awardType: {
      type: String,
      default: 'gda-winner',
    },
  },
}
</script>

<style scoped lang="scss">
.badge-wrapper {
  padding: 1rem;
  background-color: #000;
  width: 5rem;
}
</style>
