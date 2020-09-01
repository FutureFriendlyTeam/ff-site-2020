<template>
  <header 
    id="header" 
    class="v-padded-small">
    <div class="center-col">
      <div 
        id="logo" 
        class="horizontal border-right">
        <div class="border-left logo-part">
          Future
        </div>
        <div class="border-left border-right logo-part">Friendly</div>
      </div>
    </div>
  </header>
</template>

<script>
import WipeIn from '~/components/WipeIn.vue'
export default {
  name: 'MainHeader',
  components: {
    WipeIn
  }
}
</script>


<style lang="scss" scoped>
#header {
  position: fixed;
  width: 100%;
  z-index: 99;
}

#logo {
  .logo-part {
    display: block;
    padding-left: 0.5%;
    padding-right: 0.5%;
    padding-bottom: 1rem;
    font-size: 1.25rem;
  }
}
</style>
