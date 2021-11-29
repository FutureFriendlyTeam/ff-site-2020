<template>
  <div class="form--input-wrapper">
    <div>
      <label>{{ blok.label }}</label>
      <input :placeholder="blok.placeholder" type="text">
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormInput',
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
