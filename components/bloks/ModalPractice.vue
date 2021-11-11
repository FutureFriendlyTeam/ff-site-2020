<template>
  <div class="modal-wrapper">
    <div class="intro-section">
      <h2>{{ blok.title }}</h2>
      <p v-if="blok.description">{{ blok.description }}</p>
    </div>
    <div class="input-section">
      <input placeholder="Your name" class="input-name">
      <input placeholder="Your email" class="input-email">
      <input placeholder="Tell me a little about yourself!" class="input-message">
    </div>
    <div class="button-wrapper">
      <button>Submit</button>
    </div>
  </div>


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
<style>
</style>
