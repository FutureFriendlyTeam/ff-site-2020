<template>
  <header 
    id="header" 
    class="v-padded">
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
export default {
  name: 'MainHeader',
  components: {}
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
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    padding-bottom: 1rem;
    font-size: 1.25rem;
    line-height: 1.2;
  }
}
</style>
