<template>
  <future-div v-editable="blok" :background-color="blok.background_color" :text-color="blok.text_color" :disabled = "blok.no_margin">
    <div :class="blok.no_margin ? '' : 'center-col'">
      <div class="horizontal">
        <component v-for="col in blok.columns" :key="col._uid" :blok="col" :is="col.component" :class="classes"/>
      </div>
    </div>
  </future-div>
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
    classes() {
      let cols = this.blok.columns.length
      return `xs-full ${cols === 2 ? 's-half' : ''} ${
        cols === 3 ? 's-third' : ''
      } ${cols === 4 ? 's-half m-quarter' : ''}`
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
