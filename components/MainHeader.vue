<template>
  <header 
    id="header" 
    class="v-padded">
    <div id="header-wrapper" class="center-col horizontal">
      <div 
        id="logo" 
        class="horizontal border-right">
        <div class="border-left header-part">
          Future
        </div>
        <div class="border-left border-right header-part">Friendly</div>
      </div>

      <a href="" class="header-part border-right border-left">hello@futurefriendly.team</a>


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

#header-wrapper {
  justify-content: space-between;
  font-size: 1rem;
  line-height: 1.2;
}

.header-part {
  display: block;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.75rem;
  text-decoration: none;
}
</style>
