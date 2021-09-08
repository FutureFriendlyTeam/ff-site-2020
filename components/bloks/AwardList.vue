<template>
  <!-- <div> -->
  <div class="horizontal">
    <div
      v-for="(award, i) in blok.awards"
      :key="`award-${i}`"
      class="h-padding-right"
    >
      <award-badge :award-type="award.type" />
      <p class="tiny">{{ award.category }}</p>
    </div>
  </div>

  <!-- </div> -->
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: null,
    },
  },
}
</script>
