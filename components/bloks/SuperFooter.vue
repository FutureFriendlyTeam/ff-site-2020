<template>
  <future-div v-storyblok-editable="blok" :background-color="blok.background_color" :text-color="blok.text_color">
    <footer class="v-padding-bottom">
      <div id="future" class="center-col horizontal">
        <div class="border-block xs-full s-half vertical">
          <h1 class="mega v-margin-top-none ">The future isn't something you wait for.</h1>
        </div>
        <div class="border-block xs-full s-half vertical end">
          <h1 class="mega v-margin-top-none v-margin-bottom-none">The future is made today.</h1>
        </div>
      </div>
    </footer>
  </future-div>
</template>

<script>
export default {
  name: 'SuperFooter',
  props: {
    blok: {
      type: Object,
      default: null
    }
  }
}
</script>


<style lang="scss" scoped>
#future .vertical {
  min-height: 90vh;
}
</style>
