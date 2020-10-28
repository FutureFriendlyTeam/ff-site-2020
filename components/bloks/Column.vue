<template>

  <component v-storyblok-editable="blok" :is="wrapperComponent" :class="[  
               blok.layout, 
               `border-${blok.borders}`, 
               blok.size, 
               blok.borders === 'none' ? `h-padding-${blok.padding}` : '', 
               `v-margin-top-${blok.top_spacing}`, 
               `v-margin-bottom-${blok.bottom_spacing}`,
               `clear-${blok.clear}`]" 
             :href="wrapperComponent === 'a' ? blok.extra_link.cached_url : false"
             :target="wrapperComponent === 'a' ? '_blank' : false"
             :to="wrapperComponent === 'nuxt-link' ? blok.extra_link.cached_url : false"
             class="vertical wrapper-link">
    <component v-for="inner in blok.blocks" :key="inner._uid" :blok="inner" :is="inner.component" :class="[wrapperComponent === 'a' || wrapperComponent === 'nuxt-link' ? 'highlight' : '']"/>
  </component>

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
    wrapperComponent() {
      if (this.blok.extra_link) {
        if (
          this.blok.extra_link.linktype === 'story' &&
          this.blok.extra_link.url !== ''
        ) {
          return 'nuxt-link'
        }

        if (
          this.blok.extra_link.linktype !== 'story' &&
          this.blok.extra_link.url !== ''
        ) {
          return 'a'
        }
      }

      return 'div'
    }
  }
}
</script>

<style lang="scss" scoped>
.between {
  > *:nth-child(even) {
    align-self: flex-end;
  }
}
</style>
