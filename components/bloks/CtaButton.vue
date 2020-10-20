<template>
  <div>
    <a :class="!blok.mini ? 'body' : 'mini'" class="cta-button">{{ blok.text }}</a>
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

<style lang="scss" scoped>
.cta-button {
  display: inline-block;
  background-color: var(--textColor);
  padding: 1rem 1.5rem;
  color: var(--backgroundColor);
  border: none;

  &:hover {
    background-color: var(--hoverColor);
    color: var(--textColor);
  }
}
</style>
