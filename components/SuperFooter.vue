<template>
  <future-div :background-color="backgroundColor" :text-color="textColor" :hover-color="hoverColor">
    <footer class="v-padding-bottom-big">
      <div id="future" class="center-col horizontal">
        <div class="border-block xs-full s-half horizontal">
          <h1 class="mega v-margin-top-none">The future isn't something you wait for.</h1>
        </div>
        <div class="border-block xs-full s-half horizontal">
          <h1 class="mega v-margin-top-none v-margin-bottom-none self-end">The future is made today.</h1>
        </div>
      </div>
    </footer>
  </future-div>
</template>

<script>
export default {
  name: 'SuperFooter',
  props: {
    backgroundColor: {
      type: String,
      default: 'accent'
    },
    textColor: {
      type: String,
      default: 'dark'
    },
    hoverColor: {
      type: String,
      default: 'accentLight'
    }
  }
}
</script>


<style lang="scss" scoped>
#future {
  min-height: 90vh;
}
</style>
