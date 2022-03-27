<template>
  <div class="formInput">
    <label for="input">{{ text }}</label>
    <input
      id="input"
      type="checkbox"
      :class="{ active: focused }"
      :value="modelValue"
      @input="updateValue"
      @focus="focused = true"
      @blur="focused = false"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.formInput {
  margin-bottom: 0.75em;

  & label {
    font-family: 'Plain';
    font-weight: bold;
    font-size: 1.25em;
    transition: all 0.2s;
  }

  & input[type='checkbox'] {
    -webkit-appearance: none;
    height: 2em;
    width: 2em;
    cursor: pointer;
    position: relative;
    background-color: transparent;
    border: solid 3px #555555;

    &::before {
      font-size: 1.8em;
      line-height: 0.9em;
      content: '✖';
    }

    &.active {
      border: solid 3px #dd8822;
    }

    &:checked::before {
      font-size: 1.8em;
      line-height: 0.9em;
      content: '✔';
    }
  }
}
</style>

<script>
export default {
  props: ['text', 'modelValue'],
  data() {
    return {
      focused: false
    }
  },
  methods: {
    updateValue(event) {
      console.log(event)
      this.$emit('input', event.target.checked)
    }
  }
}
</script>
