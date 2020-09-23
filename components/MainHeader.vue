<template>
  <header 
    id="header" class="v-padding-top v-padding-bottom">
    <div class="center-col horizontal">
      <nuxt-link id="logo" to="/" class="horizontal">
        <span class="logo-part border-left border-right v-padding-bottom-tiny">Future</span>
        <span class="logo-part border-left border-right v-padding-bottom-tiny">Friendly</span>
      </nuxt-link>

      <nav id="nav" class="m-half border-block v-padding-bottom-tiny">
        <nuxt-link to="/us">Who we are</nuxt-link>
      </nav>
    </div>
    <!-- <div id="header-wrapper" class="center-col horizontal">
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
      <a id="email" href="mailto:hello@futurefriendly.team" class="header-part border-right border-left link">hello@futurefriendly.team</a>
    </div> -->
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  components: {}
}
</script>


<style lang="scss" scoped>
@import '../scss/variables.scss';

#header {
  position: fixed;
  width: 100%;
  z-index: 999;

  > .horizontal {
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }
}

#nav {
  display: none;
  @media (min-width: $mid) {
    display: block;
  }
}

.logo-part {
  display: block;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

// #email {
//   display: none;
//   @media (min-width: 372px) {
//     display: block;
//   }
// }

// #header-wrapper {
//   justify-content: space-between;
//   font-size: 1rem;
//   line-height: 1.2;
// }

// .header-part {
//   display: block;
//   padding-left: 0.25rem;
//   padding-right: 0.25rem;
//   padding-bottom: 0.75rem;
//   text-decoration: none;
// }
</style>
