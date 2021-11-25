<template>
  <div v-storyblok-editable="blok" class="page">
    <component
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component"
    />
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: null
    },
    storyId: {
      type: Number,
      default: null
    }
  },
  watch: {
    blok() {
      this.$root.$emit('setNav', {
        navType: this.blok.standalone ? 'standalone' : 'normal'
      })
    }
  },
  mounted() {
    this.$root.$emit('setNav', {
      navType: this.blok.standalone ? 'standalone' : 'normal'
    })
  }
}
</script>
