<template>
  <div v-editable="blok" :class="[blok.size, blok.top_spacing, blok.bottom_spacing, blok.compact_text ? 'compact' : '']" class="richtext" v-html="richtext" /> 
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
