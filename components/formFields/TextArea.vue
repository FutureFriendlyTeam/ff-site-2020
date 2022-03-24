
<template>
  <div class="formInput">
    <label for="input" :class="{ active: active }">{{ label }}</label>
    <textarea
      id="input"
      :class="{ active: focused }"
      :value="value"
      @input="updateValue"
      @focus="focused = true"
      @blur="focused = false"
      rows="3"
      
    />
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.formInput {
  margin-bottom: 1em;

  & label {
    font-family: 'Plain';
    font-weight: bold;
    position: relative;
    top: 1.5em;
    font-size: 1.25em;
    transition: all 0.2s;
    width: 100%;

    &.active {
      top: 0;
    }
  }

  & textarea {
    background-color: transparent;
    border: none;
    border-color: transparent;
    font-size: 1.5em;
    border-bottom: solid 3px #555555;
    border-top: solid 2px #555555;
    width: 100%;
    transition: all 0.2s;

    &.active {
      outline: none;
      border: none;
      border-top: solid 2px #dd8822;
      border-bottom: solid 3px #dd8822;
    }
  }
}
</style>

<script>
export default {
  props: ['modelValue', 'label'],
  data() {
    return {
      focused: false,
      value: this.modelValue,
    }
  },
  methods: {
    updateValue(event) {
      this.value = event.target.value
      this.$emit('input', event.target.value)
    },
  },
  computed: {
    active() {
      return this.focused || (this.value && this.value !== '')
    },
  },
}
</script>
