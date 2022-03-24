!<template>
  <a @click="$emit('click')" class="button"
    ><p class="mini">{{ text }}</p></a
  >
</template>

<script>
export default {
  props: ['text'],
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';
.button {
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