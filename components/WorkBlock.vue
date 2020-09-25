<template>

  <article
    :class="sizeClasses" 
    class="work-block border-block xs-full v-margin-bottom v-padding-bottom-mega">

    <a 
      :href="work.link"
      target="_blank" 
      class="wrapper-link">

      
      <future-img 
        :src="work.img.src" 
        :aspect="work.img.aspect" 
        :alt="work.img.alt"
        :scale="true"
        class="v-margin-bottom"/>
      

      <section>

        <h2 class="body v-margin-top-none">{{ work.text }}</h2>
        <p class="body v-margin-top-none">With {{ work.client }}</p>
        <p class="body v-margin-top-none">{{ work.tag }}</p>
        
        <div v-if="work.award" class="badge-container h-padding"><award-badge
          :award-type="work.award"
        /></div>
        
      </section>
    </a>
  </article>
</template>

<script>
import FutureImg from '~/components/FutureImg.vue'
import AwardBadge from '~/components/AwardBadge.vue'
export default {
  name: 'WorkBlock',
  components: {
    FutureImg,
    AwardBadge
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
  },
  computed: {
    sizeClasses() {
      const c = {
        small: 'xs-full s-third m-quarter',
        mid: 'xs-full s-half',
        big: 'xs-full s-two-thirds m-three-quarters'
      }
      return c[this.work.size]
    }
  }
}
</script>

<style scoped lang="scss">
.badge-container {
  position: absolute;
  bottom: 0rem;
  right: 0rem;
}

.link {
  text-decoration: none;
}
</style>
