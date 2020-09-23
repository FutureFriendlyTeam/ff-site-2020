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

        <h2 class="body v-margin-top-none">{{ work.client }}</h2>
        <p class="body v-margin-top-none">{{ work.text }}</p>
        <p class="body v-margin-top-none">{{ work.tag }}</p>
        
        <div class="badge-container h-padding"><future-img
          v-if="work.award"
          :aspect="'free'"
          class="badge "
        /></div>
        
      </section>
    </a>
  </article>
</template>

<script>
import FutureImg from '~/components/FutureImg.vue'
export default {
  name: 'WorkBlock',
  components: {
    FutureImg
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

.badge {
  width: 6rem;
  padding: 1rem;
  background-color: #000;
}

.link {
  text-decoration: none;
}
</style>
