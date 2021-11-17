<template>
  <div>
    <FormInput v-for="field in blok.fields" :key="field._uid" :blok="field" :is="field.component"/>
  </div>
</template>
<script>
import FormInput from './FormInput.vue'

export default {
  name: 'FormSection',
  components: {
    FormInput
  },
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
