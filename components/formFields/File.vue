<template>
  <div>
    <input
      type="file"
      ref="file"
      style="display: none"
      @change="onFileUpload"
    />
    <a class="upload-button" @click="$refs.file.click()">
      <p class="mini">{{ text }}</p>
    </a>
    <p v-if="fileName !== ''">{{ fileName }} uploaded!</p>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  props: ['text'],
  data() {
    return {
      fileName: '',
    }
  },
  methods: {
    onFileUpload(event) {
      const file = event.target.files[0]
      this.fileName = file ? file.name : ''
      this.$emit('change', event)
    },
  },
}
</script>


<style lang="scss" scoped>
@import '../../scss/variables.scss';
input[type='file'] {
  display: none;
}

.upload-button {
  display: inline-block;
  background-color: var(--textColor);
  padding: 0.5rem 2.5rem;
  color: var(--backgroundColor);
  border: none;
  text-decoration: none;

  &:hover {
    background-color: #f05969;
  }
}
</style>