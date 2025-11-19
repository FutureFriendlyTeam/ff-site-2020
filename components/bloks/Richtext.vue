<template>
  <!-- <div> -->
  <div
    v-storyblok-editable="blok"
    v-content-link
    :class="[
      blok.size,
      `v-margin-top-${blok.top_spacing}`,
      `v-margin-bottom-${blok.bottom_spacing}`,
      blok.compact_spacing ? 'compact' : '',
    ]"
    class="richtext"
    v-html="richtext"
  />

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
      let text = { ...this.blok.text }

      // FIXME: Temporary fixes until we can remove EY references from the CMS
      if (text?.content?.[1]?.content?.[0]?.text?.includes('EY Australia')) {
        delete text.content[1].content[0]
      }
      if (text?.content?.[0]?.content?.[0]?.text === 'Media') {
        for (let i = text.content.length; i >= 0; i--) {
          delete text.content[i]
        }
      }

      return this.$storyblok.client.richTextResolver.render(text)
    }
  }
}
</script>
