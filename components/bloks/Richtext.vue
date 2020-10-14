<template>
  <div>
    <div v-storyblok-editable="blok" :class="[blok.size, blok.top_spacing, blok.bottom_spacing, blok.compact_text ? 'compact' : '']" class="richtext" v-html="richtext" /> 
    <!-- <p>{{ blok._editable }}</p> -->
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: null
    }
  },
  computed: {
    richtext() {
      return this.$storyapi.richTextResolver.render(this.blok.text)
    }
  }
}
</script>
