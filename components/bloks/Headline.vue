<template>
  <section v-storyblok-editable="blok" class="v-padding-top-big v-padding-bottom-big headline">
    <div class="center-col">
      <h1 class="mega xs-full s-three-quarters no-margin">{{ blok.text }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: null
    }
  }
}
</script>
