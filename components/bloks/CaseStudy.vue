<template>
  <div v-storyblok-editable="blok" class="page">
    <component
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component"
    />
    <read-next-case-studies :story-id="storyId" />
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
        navType: 'normal'
      })
    }
  },
  mounted() {
    this.$root.$emit('setNav', {
      navType: 'normal'
    })
  }
}
</script>
