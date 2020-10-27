<template>
  <!-- <div> -->
  <div v-storyblok-editable="blok" 
       v-content-link
       :class="[
         blok.size,
         `v-margin-top-${blok.top_spacing}`,
         `v-margin-bottom-${blok.bottom_spacing}`,
         blok.compact_spacing ? 'compact':'']" class="richtext" v-html="richtext" /> 
         <!-- </div> -->
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
      // console.log(
      //   this.$storyblok.client.richTextResolver.render(this.blok.text)
      // )

      // if (typeof document !== 'undefined') {
      //   let htmlString = this.$storyblok.client.richTextResolver.render(
      //     this.blok.text
      //   )
      //   let html = document.createRange().createContextualFragment(htmlString)
      //   let links = html.querySelectorAll('a[linktype="story"]')
      //   console.log(links)
      // }
      // console.log(this.$router)
      return this.$storyblok.client.richTextResolver.render(this.blok.text)
    }
  }
}
</script>
