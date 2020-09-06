<template>
  <header 
    id="header" 
    class="v-padded">
    <div id="header-wrapper" class="center-col horizontal">
      <div 
        id="logo" 
        class="horizontal border-right">
        
        <div class="border-left header-part">
          <transition
            appear
            name="wipe-in">
            <span :style="{'--delay':'50ms', '--color':'#fff'}" >
              Future
            </span>
          </transition>
        </div>
        <div class="border-left border-right header-part">
          <transition
            appear
            name="wipe-in">
        <span :style="{'--delay':'150ms', '--color':'#fff'}">Friendly</span></transition></div>
          
      </div>
      <a id="email" href="" class="header-part border-right border-left">hello@futurefriendly.team</a>
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
// @import '../scss/variables.scss';
#email {
  display: none;
  @media (min-width: 355px) {
    display: block;
  }
}

#header-wrapper {
  justify-content: space-between;
  font-size: 1rem;
  line-height: 1.2;
}

.header-part {
  display: block;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-bottom: 0.75rem;
  text-decoration: none;
}
</style>
