<template>
  <div>
    <component :is="wrapperComponent" 
               :class="!blok.mini ? 'body' : 'mini'" 
               :href="wrapperComponent === 'a' ? blok.link.cached_url : false" 
               :target="wrapperComponent === 'a' ? '_blank' : false"
               :to="wrapperComponent === 'nuxt-link' ? blok.link.cached_url : false"
               class="cta-button">{{ blok.text }}</component>
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
    wrapperComponent() {
      if (!this.blok.link) {
        return 'div'
      }

      if (this.blok.link.linktype === 'story') {
        return 'nuxt-link'
      }

      if (this.blok.link.linktype !== 'story') {
        return 'a'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cta-button {
  display: inline-block;
  background-color: var(--textColor);
  padding: 1rem 1.5rem;
  color: var(--backgroundColor);
  border: none;
  text-decoration: none;

  &:hover {
    background-color: #f05969;
  }
}
</style>
